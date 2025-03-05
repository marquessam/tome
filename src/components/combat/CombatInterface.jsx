import React, { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import Card from '../common/Card';
import '../../styles/CombatInterface.css';

const CombatInterface = ({ combat, character, encounter }) => {
  const { performCombatAction, useItem } = useGame();
  const [selectedEnemy, setSelectedEnemy] = useState(null);
  const [selectedAction, setSelectedAction] = useState('attack'); // 'attack', 'item', 'flee'
  const [selectedItem, setSelectedItem] = useState(null);
  const [combatLog, setCombatLog] = useState([]);
  const [showInventory, setShowInventory] = useState(false);
  
  // Update combat log when combat state changes
  useEffect(() => {
    if (combat && combat.log) {
      setCombatLog(combat.log);
    }
  }, [combat]);
  
  if (!combat || !character || !encounter) {
    return <div className="loading">Loading combat data...</div>;
  }
  
  // Get player turn status
  const isPlayerTurn = combat.turn === 'player';
  const currentTurn = isPlayerTurn ? 'Your turn' : 'Enemy turn';
  
  // Calculate character health percentage for health bar
  const characterHealthPercent = Math.round((combat.player.health / combat.player.maxHealth) * 100);
  
  // Get usable items (consumables)
  const usableItems = character.inventory.filter(item => 
    item.type === 'consumable' && item.subtype === 'potion'
  );
  
  // Handle selecting an enemy
  const handleSelectEnemy = (enemy) => {
    if (isPlayerTurn && selectedAction === 'attack') {
      setSelectedEnemy(enemy);
    }
  };
  
  // Handle selecting an action
  const handleSelectAction = (action) => {
    setSelectedAction(action);
    setSelectedEnemy(null); // Reset enemy selection
    setSelectedItem(null); // Reset item selection
    
    // Show inventory if items selected
    setShowInventory(action === 'item');
  };
  
  // Handle selecting an item
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setShowInventory(false);
  };
  
  // Handle performing an action
  const handlePerformAction = () => {
    if (!isPlayerTurn) return;
    
    switch (selectedAction) {
      case 'attack':
        if (!selectedEnemy) {
          alert('Select an enemy to attack!');
          return;
        }
        performCombatAction('attack', selectedEnemy.id);
        break;
        
      case 'item':
        if (!selectedItem) {
          alert('Select an item to use!');
          return;
        }
        performCombatAction('use_item', selectedItem.id);
        // Reset selection
        setSelectedItem(null);
        setSelectedAction('attack');
        break;
        
      case 'flee':
        performCombatAction('flee');
        break;
        
      default:
        break;
    }
  };
  
  // Auto-trigger enemy actions
  useEffect(() => {
    if (!isPlayerTurn && combat.status === 'active') {
      // Add a small delay for better user experience
      const enemyActionTimer = setTimeout(() => {
        performCombatAction('enemy_attack');
      }, 1500);
      
      return () => clearTimeout(enemyActionTimer);
    }
  }, [combat.turn, combat.status, performCombatAction, isPlayerTurn]);
  
  // Get health bar color based on percentage
  const getHealthColor = (percent) => {
    if (percent <= 25) return 'critical';
    if (percent <= 50) return 'low';
    if (percent <= 75) return 'medium';
    return 'good';
  };
  
  return (
    <div className="combat-interface">
      <div className="combat-header">
        <div className="combat-title">
          <h2>Combat</h2>
          <div className="combat-status">
            Round {combat.round} - {currentTurn}
          </div>
        </div>
        
        {/* Card display */}
        <div className="encounter-card">
          <Card 
            suit={encounter.cardDraw.suit} 
            rank={encounter.cardDraw.rank} 
            size="small" 
          />
        </div>
      </div>
      
      <div className="combat-content">
        <div className="combat-area">
          {/* Player section */}
          <div className="player-section">
            <div className="player-name">{character.name}</div>
            <div className="player-health">
              <div className="health-label">
                HP: {combat.player.health}/{character.maxHealth}
              </div>
              <div className="health-bar-background">
                <div 
                  className={`health-bar-fill ${getHealthColor(characterHealthPercent)}`}
                  style={{ width: `${characterHealthPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Enemy section */}
          <div className="enemies-section">
            <h3>Enemies</h3>
            <div className="enemy-list">
              {combat.enemies.map((enemy, index) => {
                // Skip rendering defeated enemies
                if (enemy.health <= 0) return null;
                
                // Calculate health percentage
                const healthPercent = Math.round((enemy.health / enemy.maxHealth) * 100);
                
                return (
                  <div 
                    key={enemy.id}
                    className={`enemy-card ${selectedEnemy?.id === enemy.id ? 'selected' : ''}`}
                    onClick={() => handleSelectEnemy(enemy)}
                  >
                    <div className="enemy-header">
                      <div className="enemy-name">
                        {enemy.name} {index + 1}
                        {combat.currentTurnId === enemy.id && (
                          <span className="current-turn-indicator"> ⟲</span>
                        )}
                      </div>
                    </div>
                    <div className="enemy-health">
                      <div className="health-label">
                        HP: {enemy.health}/{enemy.maxHealth}
                      </div>
                      <div className="health-bar-background">
                        <div 
                          className={`health-bar-fill ${getHealthColor(healthPercent)}`}
                          style={{ width: `${healthPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Show message if all enemies are defeated */}
              {combat.enemies.every(enemy => enemy.health <= 0) && (
                <div className="all-defeated-message">
                  All enemies have been defeated!
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Combat log */}
        <div className="combat-log">
          <h3>Combat Log</h3>
          <div className="log-entries">
            {combatLog.map((entry, index) => (
              <div key={index} className="log-entry">
                <span className="log-round">Round {entry.round}:</span>
                <span className="log-message">{entry.message}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Combat actions */}
        <div className="combat-actions">
          {isPlayerTurn ? (
            <>
              <div className="action-buttons">
                <button 
                  className={`action-button ${selectedAction === 'attack' ? 'selected' : ''}`}
                  onClick={() => handleSelectAction('attack')}
                >
                  Attack
                </button>
                <button 
                  className={`action-button ${selectedAction === 'item' ? 'selected' : ''}`}
                  onClick={() => handleSelectAction('item')}
                  disabled={usableItems.length === 0}
                >
                  Use Item
                </button>
                <button 
                  className={`action-button ${selectedAction === 'flee' ? 'selected' : ''}`}
                  onClick={() => handleSelectAction('flee')}
                >
                  Flee
                </button>
              </div>
              
              {/* Action instructions */}
              <div className="action-instructions">
                {selectedAction === 'attack' && (
                  <div>Select an enemy to attack</div>
                )}
                {selectedAction === 'item' && selectedItem && (
                  <div>Using: {selectedItem.name}</div>
                )}
                {selectedAction === 'flee' && (
                  <div>Attempt to flee combat (not guaranteed)</div>
                )}
              </div>
              
              {/* Perform button */}
              <button 
                className="perform-button"
                onClick={handlePerformAction}
                disabled={
                  (selectedAction === 'attack' && !selectedEnemy) ||
                  (selectedAction === 'item' && !selectedItem)
                }
              >
                {selectedAction === 'attack' ? 'Attack!' : 
                 selectedAction === 'item' ? 'Use Item' : 'Attempt to Flee'}
              </button>
            </>
          ) : (
            <div className="enemy-turn-message">
              Enemy is taking their turn...
            </div>
          )}
        </div>
      </div>
      
      {/* Item inventory overlay */}
      {showInventory && (
        <div className="inventory-overlay">
          <div className="inventory-panel">
            <h3>Select an Item to Use</h3>
            
            {usableItems.length > 0 ? (
              <div className="usable-items-list">
                {usableItems.map(item => (
                  <div 
                    key={item.id}
                    className="usable-item"
                    onClick={() => handleSelectItem(item)}
                  >
                    <div className="item-name">{item.name}</div>
                    <div className="item-description">{item.description}</div>
                    {item.effects.healing && (
                      <div className="item-effect">Heals for {item.effects.healing} HP</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-items-message">
                No usable items in inventory
              </div>
            )}
            
            <button 
              className="close-inventory-button"
              onClick={() => {
                setShowInventory(false);
                setSelectedAction('attack');
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      
      {/* Combat result overlay */}
      {combat.status !== 'active' && (
        <div className="combat-result-overlay">
          <div className="result-panel">
            <h2>
              {combat.status === 'victory' ? 'Victory!' : 
               combat.status === 'defeat' ? 'Defeat!' : 'Escaped!'}
            </h2>
            
            <p>
              {combat.status === 'victory' 
                ? 'You have defeated all enemies!' 
                : combat.status === 'defeat'
                ? 'You have been defeated in combat.'
                : 'You have successfully fled from combat.'}
            </p>
            
            {/* Show any rewards if victorious */}
            {combat.status === 'victory' && encounter.outcome?.loot && (
              <div className="combat-rewards">
                <h3>Rewards</h3>
                <div className="loot-item">
                  <div className="loot-name">{encounter.outcome.loot.name}</div>
                  <div className="loot-description">{encounter.outcome.loot.description}</div>
                </div>
              </div>
            )}
            
            <button className="continue-button">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombatInterface;
