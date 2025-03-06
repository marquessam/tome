import React from 'react';
import { useGame } from '../../contexts/GameContext';
import '../../styles/GameControls.css';

const GameControls = ({ onExploreTile, canExplore }) => {
  const { moveCharacter, currentCharacter } = useGame();
  
  // Handle movement buttons
  const handleMove = (direction) => {
    moveCharacter(direction);
  };
  
  // Handle explore button
  const handleExplore = () => {
    if (onExploreTile) {
      onExploreTile();
    }
  };
  
  return (
    <div className="game-controls">
      <div className="controls-section movement-controls">
        <h3>Movement</h3>
        <div className="movement-buttons">
          <button 
            className="movement-button north"
            onClick={() => handleMove('north')}
            aria-label="Move North"
          >
            ⬆️
          </button>
          <div className="middle-row">
            <button 
              className="movement-button west"
              onClick={() => handleMove('west')}
              aria-label="Move West"
            >
              ⬅️
            </button>
            <div className="position-display">
              {currentCharacter && (
                <span>
                  ({currentCharacter.position.x}, {currentCharacter.position.y})
                </span>
              )}
            </div>
            <button 
              className="movement-button east"
              onClick={() => handleMove('east')}
              aria-label="Move East"
            >
              ➡️
            </button>
          </div>
          <button 
            className="movement-button south"
            onClick={() => handleMove('south')}
            aria-label="Move South"
          >
            ⬇️
          </button>
        </div>
      </div>
      
      <div className="controls-section action-controls">
        <h3>Actions</h3>
        <div className="action-buttons">
          <button 
            className="explore-button"
            onClick={handleExplore}
            disabled={!canExplore}
          >
            Explore Area
          </button>
          
          <button className="rest-button">
            Rest (Heal)
          </button>
        </div>
      </div>
      
      <div className="controls-help">
        <p>Use movement controls to travel, or click adjacent tiles on the map.</p>
        {canExplore && (
          <p className="explore-tip">This area is unexplored! Click 'Explore Area' to discover what's here.</p>
        )}
      </div>
    </div>
  );
};

export default GameControls;
