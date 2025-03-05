import React, { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import Card from '../common/Card';
import '../../styles/CombatInterface.css';

const CombatInterface = ({ combat, character, encounter }) => {
  const { performCombatAction } = useGame();
  
  const [selectedEnemy, setSelectedEnemy] = useState(null);
  const [selectedAction, setSelectedAction] = useState('attack');
  const [combatMessage, setCombatMessage] = useState('');
  const [actionResult, setActionResult] = useState(null);
  
  // Clear any selection when combat state changes
  useEffect(() => {
    setSelectedEnemy(null);
    setActionResult(null);
  }, [combat]);
  
  // Set default selected enemy
  useEffect(() => {
    if (combat && combat.enemies && combat.enemies.length > 0 && !selectedEnemy) {
      // Find first enemy that's still alive
      const firstLivingEnemy = combat.enemies.find(enemy => enemy.health > 0);
      if (firstLivingEnemy) {
        setSelectedEnemy(firstLivingEnemy.id);
      }
    }
  }, [combat, selectedEnemy]);
  
  if (!combat || !character || !encounter) {
    return <div className="loading">Loading combat data...</div>;
  }
  
  // Handle enemy selection
  const handleSelectEnemy = (enemyId) => {
    setSelectedEnemy(enemyId);
  };
  
  // Handle action selection
  const handleSelectAction = (action) => {
    setSelectedAction(action);
  };
  
  // Handle performing an action
  const handlePerformAction = () => {
    if (!selectedAction) {
      setCombatMessage('Please select an action.');
      return;
    }
    
    if (selectedAction === 'attack' && !selectedEnemy) {
      setCombatMessage('Please select a target.');
      return;
    }
    
    // Process the combat action
    const result = performCombatAction(selectedAction, selectedEnemy);
    if (result) {
      setActionResult(result.actionResult);
      
      // Clear the message after a few seconds
      setTimeout(() => {
        setActionResult(null);
      }, 3000);
    }
  };
  
  // Check if it's the player's turn
  const isPlayerTurn = combat.turn === 'player';
  
  // Get the current round and active combatant
  const currentRound = combat.round;
  const activeEnemy = combat.turn === 'enemy' ? 
    combat.enemies.find(enemy => enemy.id === combat.currentTurnId) : null;
  
  // Format health as percentage for health bars
  const getHealthPercentage = (current, max) => {
    return Math.round((current / max) * 100);
  };
  
  // Get appropriate health bar color
  const getHealthColor = (percentage) => {
    if (percentage <= 25) return 'critical';
    if (percentage <= 50) return 'low';
    if (percentage <= 75) return 'medium';
    return 'good';
  };
  
  // Calculate remaining enemies
  const livingEnemies = combat.enemies.filter(enemy => enemy.health > 0);
  
  return (
    <div className="combat-interface">
      <div className="combat-header">
        <h2>Combat</h2>
        <div className="combat-info">
          <span className="round-indicator">Round {currentRound}</span>
          <span className="turn-indicator">
            {isPlayerTurn ? 'Your Turn' : `Enemy's Turn (${activeEnemy?.name || 'Unknown'})`}
          </span>
        </div>
      </div>
      
      <div className="combat-card">
        <Card 
          suit={encounter.cardDraw.suit} 
          rank={encounter.cardDraw.rank} 
          size="small" 
        />
      </div>
      
      <div className="combat-encounter-info">
        <h3>{encounter.data.name}</h3>
        <p>{encounter.data.description}</p>
      </div>
      
      <div className="combat-arena">
        {/* Player information */}
        <div className="player-section">
          <div className="player-info">
            <h3>{character.name}</h3>
            <div className="health-display">
              <div className="health-label">
                <span>HP</span>
                <span>{combat.player.health}/{character.maxHealth}</span>
              </div>
              <div className="health-bar-background">
                <div 
                  className={`health-bar-fill ${getHealthColor(getHealthPercentage(combat.player.health, character.maxHealth))}`}
                  style={{ width: `${getHealthPercentage(combat.player.health, character.maxHealth)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Combat log */}
          <div className="combat-log">
            <h4>Combat Log</h4>
            <div className="log-messages">
              {combat.log.slice(-5).map((log, index) => (
                <div key={index} className="log-message">
                  <span className="log-round">R{log.round}</span>
                  <span className="log-text">{log.message}</span>
                </div>
              ))}
              {actionResult && (
                <div className="action-result">
                  {actionResult.message}
                </div>
              )}
            </div>
          </div>
          
          {/* Player actions */}
          {isPlayerTurn && (
            <div className="player-actions">
              <h4>Actions</h4>
              <div className="action-buttons">
                <button 
                  className={`action-button ${selectedAction === 'attack' ? 'selected' : ''}`}
                  onClick={() => handleSelectAction('attack')}
                >
                  Attack
                </button>
                <button 
                  className={`action-button ${selectedAction === 'use_item' ? 'selected' : ''}`}
                  onClick={() => handleSelectAction('use_item')}
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
              
              {/* Target selection for attack */}
              {selectedAction === 'attack' && livingEnemies.length > 0 && (
                <div className="target-selection">
                  <h4>Select Target</h4>
                  <div className="target-buttons">
                    {livingEnemies.map(enemy => (
                      <button 
                        key={enemy.id}
                        className={`target-button ${selectedEnemy === enemy.id ? 'selected' : ''}`}
                        onClick={() => handleSelectEnemy(enemy.id)}
                      >
                        {enemy.name}
                        <span className="target-health">
                          {enemy.health}/{enemy.maxHealth} HP
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Item selection for use_item */}
              {selectedAction === 'use_item' && (
                <div className="item-selection">
                  <h4>Select Item</h4>
                  <div className="usable-items">
                    {character.inventory && character.inventory.filter(item => 
                      item.type === 'consumable'
                    ).length > 0 ? (
                      character.inventory.filter(item => 
                        item.type === 'consumable'
                      ).map(item => (
                        <button 
                          key={item.id}
                          className="item-button"
                          onClick={() => {
                            performCombatAction('use_item', item.id);
                          }}
                        >
                          {item.name}
                          {item.effects.healing && 
                            <span className="item-effect">
                              Healing: {item.effects.healing}
                            </span>
                          }
                        </button>
                      ))
                    ) : (
                      <p className="no-items">No usable items in inventory.</p>
                    )}
                  </div>
                </div>
              )}
              
              {/* Confirm action button */}
              {((selectedAction === 'attack' && selectedEnemy) || 
                selectedAction === 'flee') && (
                <button 
                  className="perform-action-button"
                  onClick={handlePerformAction}
                >
                  {selectedAction === 'attack' ? 'Attack!' : 'Attempt to Flee'}
                </button>
              )}
              
              {combatMessage && (
                <div className="combat-message">
                  {combatMessage}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Enemies section */}
        <div className="enemies-section">
          <h3>Enemies</h3>
          <div className="enemy-list">
            {combat.enemies.map(enemy => (
              <div 
                key={enemy.id} 
                className={`enemy-card ${enemy.health <= 0 ? 'defeated' : ''} ${
                  activeEnemy?.id === enemy.id ? 'active' : ''
                }`}
                onClick={() => enemy.health > 0 && handleSelectEnemy(enemy.id)}
              >
                <div className="enemy-info">
                  <div className="enemy-name">
                    {enemy.name}
                    {enemy.health <= 0 && <span className="defeated-label">Defeated</span>}
                  </div>
                  
                  <div className="health-display">
                    <div className="health-label">
                      <span>HP</span>
                      <span>{enemy.health}/{enemy.maxHealth}</span>
                    </div>
                    <div className="health-bar-background">
                      <div 
                        className={`health-bar-fill ${getHealthColor(getHealthPercentage(enemy.health, enemy.maxHealth))}`}
                        style={{ width: `${getHealthPercentage(enemy.health, enemy.maxHealth)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Visual indicator for selected enemy */}
                {selectedEnemy === enemy.id && enemy.health > 0 && (
                  <div className="selected-indicator">Target</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Combat status */}
      <div className="combat-status">
        {combat.status === 'victory' && (
          <div className="victory-message">
            Victory! You have defeated all enemies.
          </div>
        )}
        
        {combat.status === 'defeat' && (
          <div className="defeat-message">
            Defeat! You have been defeated in combat.
          </div>
        )}
        
        {combat.status === 'fled' && (
          <div className="fled-message">
            You have successfully fled from combat.
          </div>
        )}
      </div>
    </div>
  );
};

export default CombatInterface;
