import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../../contexts/GameContext';
import '../../styles/WorldMap.css';

const WorldMap = ({ map, currentPosition }) => {
  const { moveCharacter } = useGame();
  const [mapGrid, setMapGrid] = useState([]);
  const [mapBounds, setMapBounds] = useState({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [viewSize, setViewSize] = useState({ width: 9, height: 9 }); // Increased view size
  const mapRef = useRef(null);
  
  // Convert map object to a grid representation
  useEffect(() => {
    if (!map || Object.keys(map).length === 0) return;
    
    // Find map boundaries
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    Object.values(map).forEach(tile => {
      minX = Math.min(minX, tile.x);
      maxX = Math.max(maxX, tile.x);
      minY = Math.min(minY, tile.y);
      maxY = Math.max(maxY, tile.y);
    });
    
    // Ensure we have at least a 9x9 grid
    minX = Math.min(minX, currentPosition.x - 4);
    maxX = Math.max(maxX, currentPosition.x + 4);
    minY = Math.min(minY, currentPosition.y - 4);
    maxY = Math.max(maxY, currentPosition.y + 4);
    
    setMapBounds({ minX, maxX, minY, maxY });
    
    // Center the view on the current position
    setCenter(currentPosition);
    
    // Create grid representation
    const grid = [];
    
    // Calculate visible area
    const startX = Math.max(minX, center.x - Math.floor(viewSize.width / 2));
    const endX = Math.min(maxX, center.x + Math.floor(viewSize.width / 2));
    const startY = Math.max(minY, center.y - Math.floor(viewSize.height / 2));
    const endY = Math.min(maxY, center.y + Math.floor(viewSize.height / 2));
    
    for (let y = startY; y <= endY; y++) {
      const row = [];
      for (let x = startX; x <= endX; x++) {
        const key = `${x},${y}`;
        const tile = map[key] || null;
        
        // Determine if this is the current position
        const isCurrentPosition = x === currentPosition.x && y === currentPosition.y;
        
        // Check if this is the great threat location
        const isGreatThreat = tile?.type === 'greatThreat';
        
        // Determine if this position is adjacent to the current position
        const isAdjacent = 
          (Math.abs(x - currentPosition.x) === 1 && y === currentPosition.y) ||
          (Math.abs(y - currentPosition.y) === 1 && x === currentPosition.x);
        
        row.push({
          x,
          y,
          tile,
          isCurrentPosition,
          isGreatThreat,
          isAdjacent,
          isExplored: tile?.explored || false,
          type: tile?.type || 'unknown'
        });
      }
      grid.push(row);
    }
    
    setMapGrid(grid);
  }, [map, currentPosition, center, viewSize]);
  
  // Handle map movement
  const handleTileClick = (x, y) => {
    // Check if the clicked tile is adjacent to the current position
    const isAdjacent = 
      (Math.abs(x - currentPosition.x) === 1 && y === currentPosition.y) ||
      (Math.abs(y - currentPosition.y) === 1 && x === currentPosition.x);
    
    if (isAdjacent) {
      // Determine direction
      let direction;
      if (x > currentPosition.x) direction = 'east';
      else if (x < currentPosition.x) direction = 'west';
      else if (y > currentPosition.y) direction = 'south';
      else if (y < currentPosition.y) direction = 'north';
      
      // Move character
      moveCharacter(direction);
    }
  };
  
  // Handle map panning
  const handlePan = (direction) => {
    switch (direction) {
      case 'up':
        setCenter(prev => ({ ...prev, y: prev.y - 1 }));
        break;
      case 'down':
        setCenter(prev => ({ ...prev, y: prev.y + 1 }));
        break;
      case 'left':
        setCenter(prev => ({ ...prev, x: prev.x - 1 }));
        break;
      case 'right':
        setCenter(prev => ({ ...prev, x: prev.x + 1 }));
        break;
      case 'center':
        setCenter(currentPosition);
        break;
      default:
        break;
    }
  };
  
  // Check for great threat position
  const getGreatThreatPosition = () => {
    for (const key in map) {
      if (map[key].type === 'greatThreat') {
        return map[key];
      }
    }
    return null;
  };
  
  const greatThreat = getGreatThreatPosition();
  
  // Get CSS class for tile type
  const getTileClass = (gridTile) => {
    if (!gridTile.tile) return 'tile-unknown';
    if (!gridTile.isExplored) return 'tile-unexplored';
    
    switch (gridTile.type) {
      case 'arid': return 'tile-arid';
      case 'water': return 'tile-water';
      case 'forest': return 'tile-forest';
      case 'mountain': return 'tile-mountain';
      case 'greatThreat': return 'tile-threat';
      default: return 'tile-unknown';
    }
  };
  
  // Get icon for tile
  const getTileIcon = (gridTile) => {
    if (gridTile.isCurrentPosition) return '🧙‍♂️'; // Player icon
    if (gridTile.isGreatThreat) return '☠️'; // Great Threat icon
    
    if (!gridTile.tile || !gridTile.isExplored) return '';
    
    // Show encounter indicators for explored tiles
    if (gridTile.tile.encounters && gridTile.tile.encounters.some(e => !e.resolved)) {
      const combatEncounter = gridTile.tile.encounters.find(e => e.type === 'combat' && !e.resolved);
      if (combatEncounter) return '⚔️';
      
      const treasureEncounter = gridTile.tile.encounters.find(e => e.type === 'treasure' && !e.resolved);
      if (treasureEncounter) return '💰';
      
      const situationEncounter = gridTile.tile.encounters.find(e => e.type === 'situation' && !e.resolved);
      if (situationEncounter) return '❓';
      
      return '!';
    }
    
    return '';
  };
  
  return (
    <div className="world-map-container">
      <h2 className="map-title">World Map</h2>
      
      {greatThreat && (
        <div className="great-threat-indicator">
          <span className="threat-icon">☠️</span>
          <span className="threat-info">Great Threat: {greatThreat.threat?.name || "Unknown"}</span>
          <span className="threat-location">Location: ({greatThreat.x}, {greatThreat.y})</span>
        </div>
      )}
      
      <div className="map-controls">
        <button onClick={() => handlePan('up')}>⬆️</button>
        <div className="horizontal-controls">
          <button onClick={() => handlePan('left')}>⬅️</button>
          <button onClick={() => handlePan('center')}>⊙</button>
          <button onClick={() => handlePan('right')}>➡️</button>
        </div>
        <button onClick={() => handlePan('down')}>⬇️</button>
      </div>
      
      <div className="map-grid-container" ref={mapRef}>
        <div className="map-grid">
          {mapGrid.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="map-row">
              {row.map((tile, colIndex) => (
                <div
                  key={`tile-${tile.x}-${tile.y}`}
                  className={`map-tile ${getTileClass(tile)} ${
                    tile.isCurrentPosition ? 'current-position' : ''
                  } ${tile.isGreatThreat ? 'great-threat' : ''} ${tile.isAdjacent ? 'adjacent' : ''}`}
                  onClick={() => handleTileClick(tile.x, tile.y)}
                  title={`(${tile.x}, ${tile.y}) ${tile.tile?.location?.name || 'Unknown'}`}
                >
                  <div className="tile-content">
                    {getTileIcon(tile)}
                  </div>
                  <div className="tile-coordinates">
                    {tile.x},{tile.y}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="map-legend">
        <div className="legend-title">Map Legend</div>
        <div className="legend-grid">
          <div className="legend-item">
            <div className="legend-icon">🧙‍♂️</div>
            <div className="legend-label">You</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon">☠️</div>
            <div className="legend-label">Great Threat</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon tile-sample tile-arid"></div>
            <div className="legend-label">Arid</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon tile-sample tile-water"></div>
            <div className="legend-label">Water</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon tile-sample tile-forest"></div>
            <div className="legend-label">Forest</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon tile-sample tile-mountain"></div>
            <div className="legend-label">Mountain</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon">⚔️</div>
            <div className="legend-label">Combat</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon">💰</div>
            <div className="legend-label">Treasure</div>
          </div>
          <div className="legend-item">
            <div className="legend-icon">❓</div>
            <div className="legend-label">Situation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
