import React, { useState } from 'react';
import '../../styles/GameLog.css';

const GameLog = ({ gameState }) => {
  const [filter, setFilter] = useState('all');
  
  if (!gameState || !gameState.gameLog) {
    return <div className="game-log empty-log">No game log entries available.</div>;
  }
  
  // Get the most recent 50 entries
  const recentEntries = [...gameState.gameLog]
    .reverse()
    .filter(entry => filter === 'all' || entry.type.includes(filter))
    .slice(0, 50);
  
  const getEntryIcon = (type) => {
    switch (type) {
      case 'combat_initiation':
      case 'combat_victory':
      case 'combat_defeat':
        return '⚔️';
      case 'character_creation':
      case 'character_level_up':
      case 'character_movement':
      case 'character_switch':
        return '👤';
      case 'encounter_generation':
      case 'encounter_resolution':
        return '❗';
      case 'loot_found':
        return '💰';
      case 'world_creation':
      case 'tile_generation':
        return '🌍';
      default:
        return '📝';
    }
  };
  
  return (
    <div className="game-log">
      <div className="log-header">
        <h3>Game Log</h3>
        <div className="log-filter">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Entries</option>
            <option value="combat">Combat</option>
            <option value="character">Character</option>
            <option value="encounter">Encounters</option>
            <option value="loot">Loot</option>
            <option value="world">World</option>
          </select>
        </div>
      </div>
      
      <div className="log-entries">
        {recentEntries.length > 0 ? (
          recentEntries.map((entry, index) => (
            <div key={index} className={`log-entry ${entry.type}`}>
              <div className="entry-icon">{getEntryIcon(entry.type)}</div>
              <div className="entry-content">
                <div className="entry-message">{entry.message}</div>
                <div className="entry-timestamp">
                  {new Date(entry.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-log-message">No log entries matching your filter.</div>
        )}
      </div>
    </div>
  );
};

export default GameLog;
