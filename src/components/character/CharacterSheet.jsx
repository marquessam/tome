import React, { useState, useCallback } from 'react';
import { useGame } from '../../contexts/GameContext';
import '../../styles/CharacterSheet.css';

const CharacterSheet = ({ character }) => {
  // Get functions from game context
  const gameContext = useGame();
  
  // Use state for active tab
  const [activeTab, setActiveTab] = useState('stats'); // tabs: stats, inventory, abilities
  
  // Create stable callback functions for actions
  const handleLevelUp = useCallback(() => {
    gameContext.levelUpCharacter();
  }, [gameContext]);
  
  const handleEquipItem = useCallback((itemId) => {
    gameContext.equipItem(itemId);
  }, [gameContext]);
  
  const handleUnequipItem = useCallback((type) => {
    gameContext.unequipItem(type);
  }, [gameContext]);
  
  const handleUseItem = useCallback((itemId) => {
    gameContext.useItem(itemId);
  }, [gameContext]);
  
  // Early return if no character data
  if (!character) return <div>No character data available</div>;
  
  // Calculate stat modifier
  const getModifier = (stat) => {
    const mod = Math.floor((stat - 10) / 2);
    return mod >= 0 ? `+${mod}` : mod;
  };
  
  // Format XP with required XP for next level
  const formatXP = () => {
    const requiredXP = character.level * 100; // Simple formula from game engine
    return `${character.xp || 0} / ${requiredXP}`;
  };
  
  // Render stats tab
  const renderStatsTab = () => (
    <div className="character-stats-tab">
      <div className="basic-info">
        <div className="info-group">
          <div className="info-label">Level:</div>
          <div className="info-value">{character.level}</div>
        </div>
        <div className="info-group">
          <div className="info-label">XP:</div>
          <div className="info-value">{formatXP()}</div>
        </div>
        {gameContext.canLevelUp() && (
          <button 
            className="level-up-button"
            onClick={handleLevelUp}
          >
            Level Up!
          </button>
        )}
      </div>
      
      <div className="character-attributes">
        <h3>Attributes</h3>
        <div className="attribute-grid">
          <div className="attribute">
            <div className="attribute-name">Strength</div>
            <div className="attribute-value">{character.stats.strength}</div>
            <div className="attribute-modifier">{getModifier(character.stats.strength)}</div>
          </div>
          <div className="attribute">
            <div className="attribute-name">Dexterity</div>
            <div className="attribute-value">{character.stats.dexterity}</div>
            <div className="attribute-modifier">{getModifier(character.stats.dexterity)}</div>
          </div>
          <div className="attribute">
            <div className="attribute-name">Constitution</div>
            <div className="attribute-value">{character.stats.constitution}</div>
            <div className="attribute-modifier">{getModifier(character.stats.constitution)}</div>
          </div>
          <div className="attribute">
            <div className="attribute-name">Intelligence</div>
            <div className="attribute-value">{character.stats.intelligence}</div>
            <div className="attribute-modifier">{getModifier(character.stats.intelligence)}</div>
          </div>
          <div className="attribute">
            <div className="attribute-name">Wisdom</div>
            <div className="attribute-value">{character.stats.wisdom}</div>
            <div className="attribute-modifier">{getModifier(character.stats.wisdom)}</div>
          </div>
          <div className="attribute">
            <div className="attribute-name">Charisma</div>
            <div className="attribute-value">{character.stats.charisma}</div>
            <div className="attribute-modifier">{getModifier(character.stats.charisma)}</div>
          </div>
        </div>
      </div>
      
      <div className="character-details">
        <h3>Combat Stats</h3>
        <div className="detail-grid">
          <div className="detail-item">
            <div className="detail-label">Health:</div>
            <div className="detail-value">{character.health}/{character.maxHealth}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Initiative:</div>
            <div className="detail-value">{character.initiative}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Speed:</div>
            <div className="detail-value">{character.speed} ft</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Armor Class:</div>
            <div className="detail-value">{character.armorClass}</div>
          </div>
        </div>
      </div>
      
      <div className="character-equipment">
        <h3>Equipment</h3>
        <div className="equipment-grid">
          <div className="equipment-slot">
            <div className="equipment-label">Weapon:</div>
            <div className="equipment-value">
              {character.equipped?.weapon ? (
                <div className="equipped-item">
                  <span className="item-name">{character.equipped.weapon.name}</span>
                  <button 
                    className="unequip-button"
                    onClick={() => handleUnequipItem('weapon')}
                  >
                    Unequip
                  </button>
                </div>
              ) : (
                <span className="empty-slot">None</span>
              )}
            </div>
          </div>
          <div className="equipment-slot">
            <div className="equipment-label">Armor:</div>
            <div className="equipment-value">
              {character.equipped?.armor ? (
                <div className="equipped-item">
                  <span className="item-name">{character.equipped.armor.name}</span>
                  <button 
                    className="unequip-button"
                    onClick={() => handleUnequipItem('armor')}
                  >
                    Unequip
                  </button>
                </div>
              ) : (
                <span className="empty-slot">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render inventory tab
  const renderInventoryTab = () => (
    <div className="character-inventory-tab">
      <div className="inventory-header">
        <h3>Inventory</h3>
        <div className="inventory-gold">
          Gold: {character.gold || 0}
        </div>
      </div>
      
      {character.inventory && character.inventory.length > 0 ? (
        <div className="inventory-list">
          {character.inventory.map(item => (
            <div key={item.id} className="inventory-item">
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-description">{item.description}</div>
                <div className="item-details">
                  {item.type === 'weapon' && (
                    <span className="item-stat">
                      Damage: {item.stats.damage}
                    </span>
                  )}
                  {item.type === 'armor' && (
                    <span className="item-stat">
                      Defense: {item.stats.defense}
                    </span>
                  )}
                  {item.type === 'consumable' && item.effects.healing && (
                    <span className="item-stat">
                      Healing: {item.effects.healing}
                    </span>
                  )}
                  <span className="item-type">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    {item.subtype && ` (${item.subtype})`}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                {item.type === 'weapon' && (
                  <button 
                    className="equip-button"
                    onClick={() => handleEquipItem(item.id)}
                    disabled={character.equipped?.weapon?.id === item.id}
                  >
                    {character.equipped?.weapon?.id === item.id ? 'Equipped' : 'Equip'}
                  </button>
                )}
                {item.type === 'armor' && (
                  <button 
                    className="equip-button"
                    onClick={() => handleEquipItem(item.id)}
                    disabled={character.equipped?.armor?.id === item.id}
                  >
                    {character.equipped?.armor?.id === item.id ? 'Equipped' : 'Equip'}
                  </button>
                )}
                {item.type === 'consumable' && (
                  <button 
                    className="use-button"
                    onClick={() => handleUseItem(item.id)}
                  >
                    Use
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-inventory">
          <p>Inventory is empty.</p>
        </div>
      )}
    </div>
  );
  
  // Render abilities tab
  const renderAbilitiesTab = () => (
    <div className="character-abilities-tab">
      <h3>Abilities</h3>
      
      {character.abilities && character.abilities.length > 0 ? (
        <div className="abilities-list">
          {character.abilities.map((ability, index) => (
            <div key={index} className="ability-item">
              <div className="ability-name">{ability.name}</div>
              <div className="ability-description">{ability.description}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-abilities">
          <p>No abilities found.</p>
        </div>
      )}
    </div>
  );
  
  return (
    <div className="character-sheet">
      <div className="character-header">
        <h2>{character.name}</h2>
        <div className="character-subtitle">
          Level {character.level} {character.race} {character.class}
        </div>
      </div>
      
      <div className="character-tabs">
        <button 
          className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </button>
        <button 
          className={`tab-button ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          Inventory
        </button>
        <button 
          className={`tab-button ${activeTab === 'abilities' ? 'active' : ''}`}
          onClick={() => setActiveTab('abilities')}
        >
          Abilities
        </button>
      </div>
      
      <div className="character-tab-content">
        {activeTab === 'stats' && renderStatsTab()}
        {activeTab === 'inventory' && renderInventoryTab()}
        {activeTab === 'abilities' && renderAbilitiesTab()}
      </div>
    </div>
  );
};

export default CharacterSheet;
