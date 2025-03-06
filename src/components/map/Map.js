import React, { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import '../../styles/Map.css';

const Map = () => {
  const { currentCharacter, currentTile } = useGame();
  const [mapGrid, setMapGrid] = useState([]);
  const [viewRadius, setViewRadius] = useState(3);
  
  // Generate a simple map grid based on current position
  useEffect(() => {
    if (!currentCharacter) return;
    
    const { x, y } = currentCharacter.position;
    const grid = [];
    
    for (let dy = -viewRadius; dy <= viewRadius; dy++) {
      const row = [];
      for (let dx = -viewRadius; dx <= viewRadius; dx++) {
        row.push({
          x: x + dx,
          y: y + dy,
          isCurrent: dx === 0 && dy === 0,
          type: dx === 0 && dy === 0 ? currentTile?.type || 'unknown' : 'unknown'
        });
      }
      grid.push(row);
    }
    
    setMapGrid(grid);
  }, [currentCharacter, currentTile, viewRadius]);
  
  // Get CSS class for tile
  const getTileClass = (tile) => {
    if (tile.isCurrent) return `tile-current ${tile.type || 'unknown'}`;
    return `tile-unknown`;
  };
  
  return (
    <div className="map-container">
      <h3>World Map</h3>
      
      <div className="map-grid">
        {mapGrid.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="map-row">
            {row.map((tile, colIndex) => (
              <div
                key={`tile-${colIndex}-${rowIndex}`}
                className={`map-tile ${getTileClass(tile)}`}
                title={`Position: (${tile.x}, ${tile.y})`}
              >
                {tile.isCurrent ? '●' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-marker current"></div>
          <span>Current Position</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker arid"></div>
          <span>Arid</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker water"></div>
          <span>Water</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker forest"></div>
          <span>Forest</span>
        </div>
        <div className="legend-item">
          <div className="legend-marker mountain"></div>
          <span>Mountain</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
