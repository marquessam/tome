import React from 'react';
import '../../styles/CharacterInfo.css';

const CharacterInfo = ({ character }) => {
  if (!character) return null;
  
  // Calculate health percentage for health bar
  const healthPercentage = Math.round((character.health / character.maxHealth) * 100);
  
  // Get appropriate color for health bar
  const getHealthColor = () => {
    if (healthPercentage <= 25) return 'critical';
    if (healthPercentage <= 50) return 'low';
    if (healthPercentage <= 75) return 'medium';
    return 'good';
  };
  
  return (
    <div className="character-info">
      <div className="character-header">
        <h2>{character.name}</h2>
        <p className="character-subtitle">
          Level {character.level} {character.race} {character.class}
        </p>
      </div>
      
      <div className="character-stats-quick">
        <div className="health-container">
          <div className="health-label">
            <span>HP</span>
            <span>{character.health}/{character.maxHealth}</span>
          </div>
          <div className="health-bar-background">
            <div 
              className={`health-bar-fill ${getHealthColor()}`}
              style={{ width: `${healthPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {character.xp !== undefined && (
          <div className="xp-container">
            <div className="xp-label">
              <span>XP</span>
              <span>{character.xp}</span>
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
      </div>
      
      <div className="character-quick-stats">
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-label">STR</span>
            <span className="stat-value">{character.stats.strength}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">DEX</span>
            <span className="stat-value">{character.stats.dexterity}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">CON</span>
            <span className="stat-value">{character.stats.constitution}</span>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-label">INT</span>
            <span className="stat-value">{character.stats.intelligence}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">WIS</span>
            <span className="stat-value">{character.stats.wisdom}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">CHA</span>
            <span className="stat-value">{character.stats.charisma}</span>
          </div>
        </div>
      </div>
      
      {character.equipped && (
        <div className="equipment-summary">
          <div className="equipment-row">
            <span className="equipment-label">Weapon:</span>
            <span className="equipment-value">
              {character.equipped.weapon ? character.equipped.weapon.name : 'None'}
            </span>
          </div>
          <div className="equipment-row">
            <span className="equipment-label">Armor:</span>
            <span className="equipment-value">
              {character.equipped.armor ? character.equipped.armor.name : 'None'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterInfo;
