import React from 'react';
import '../../styles/CharacterCard.css';

const CharacterCard = ({ character, onClick }) => {
  if (!character) return null;
  
  // Calculate health percentage for the health bar
  const healthPercentage = Math.round((character.health / character.maxHealth) * 100);
  
  // Function to get appropriate status color
  const getHealthColor = () => {
    if (healthPercentage <= 25) return 'critical';
    if (healthPercentage <= 50) return 'low';
    if (healthPercentage <= 75) return 'medium';
    return 'good';
  };
  
  // Check if character is alive
  const isAlive = character.health > 0;
  
  // Get class icon (simplified, in a real game you'd use actual icons)
  const getClassIcon = () => {
    switch (character.class.toLowerCase()) {
      case 'warrior': return '⚔️';
      case 'wizard': return '🧙';
      case 'rogue': return '🗡️';
      case 'cleric': return '✝️';
      default: return '👤';
    }
  };
  
  return (
    <div 
      className={`character-card ${isAlive ? '' : 'dead'}`}
      onClick={isAlive ? onClick : null}
    >
      <div className="card-content">
        <div className="character-header">
          <div className="character-icon">{getClassIcon()}</div>
          <div className="character-title">
            <h3>{character.name}</h3>
            <div className="character-subtitle">
              Level {character.level} {character.race} {character.class}
            </div>
          </div>
        </div>
        
        <div className="character-stats">
          {/* Health bar */}
          <div className="health-container">
            <div className="health-label">
              <span>HP</span>
              <span>
                {character.health}/{character.maxHealth}
              </span>
            </div>
            <div className="health-bar-background">
              <div 
                className={`health-bar-fill ${getHealthColor()}`}
                style={{ width: `${healthPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {/* XP Progress */}
          {isAlive && (
            <div className="xp-container">
              <div className="xp-label">
                <span>XP</span>
                <span>{character.xp || 0}</span>
              </div>
              <div className="xp-bar-background">
                <div 
                  className="xp-bar-fill"
                  style={{ 
                    width: `${Math.min(100, ((character.xp || 0) / (character.level * 100)) * 100)}%` 
                  }}
                ></div>
              </div>
            </div>
          )}
          
          {!isAlive && (
            <div className="dead-notice">
              ☠️ This character has died ☠️
            </div>
          )}
        </div>
        
        <div className="character-location">
          <div className="location-label">Location:</div>
          <div className="location-value">
            ({character.position.x}, {character.position.y})
          </div>
        </div>
        
        {isAlive && (
          <div className="select-prompt">Click to Select</div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
