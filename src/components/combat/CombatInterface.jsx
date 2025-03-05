import React, { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import Card from '../common/Card';
import '../../styles/CombatInterface.css';

const CombatInterface = ({ combat, character, encounter }) => {
  const { performCombatAction } = useGame();
  const [selectedEnemy, setSelectedEnemy] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [actionResult, setActionResult] = useState(null);
  const [animating, setAnimating] = useState(false);
  
  // Reset selected enemy when combat changes
  useEffect(() => {
    setSelectedEnemy(null);
    setSelectedAction(null);
    setActionResult(null);
  }, [combat]);
  
  if (!combat || !character || !encounter) {
    return <div className="loading">Loading combat data...</div>;
  }
  
  // Check if it's the player's turn
  const isPlayerTurn = combat.turn === 'player';
  
  // Get all active enemies (not defeated)
  const activeEnemies = combat.enemies.filter(enemy => enemy.health > 0);
  
  // Handle enemy selection
  const handleSelectEnemy = (enemy) => {
    if (!isPlayerTurn || animating) return;
    
    setSelectedEnemy(enemy);
    setSelectedAction('attack'); // Default to attack
  };
  
  // Handle action selection
  const handleSelectAction = (action) => {
    if (!isPlayerTurn || animating) return;
    
    setSelectedAction(action);
    
    // If action is flee, no need to select an enemy
    if (action === 'flee') {
      setSelectedEnemy(null);
    }
  };
  
  // Handle action execution
  const handleExecuteAction = () => {
    if (!isPlayerTurn || animating || (selectedAction !== 'flee' && !selectedEnemy)) return;
    
    setAnimating(true);
    
    // Execute the action
    const targetId = selectedAction === 'flee' ? null : selectedEnemy.id;
    const result = performCombatAction(selectedAction, targetId);
    
    // Update state with result
    setActionResult(result.actionResult);
    
    // Clear after animation
    setTimeout(() => {
      setAnimating(false);
      setActionResult(null);
      
      // If combat is over, no need to reset selection
      if (combat.status === 'active') {
        setSelectedEnemy(null);
        setSelectedAction(null);
      }
    }, 2000);
  };
  
  // Handle item use in combat
  const handleUseItem = (itemId) => {
    if (!isPlayerTurn || animating) return;
    
    setAnimating(true);
    
    // Use the item
    const result = performCombatAction('use_item', itemId);
    
    // Update state with result
    setActionResult(result.actionResult);
    
    // Clear after animation
    setTimeout(() => {
      setAnimating(false);
      setActionResult(null);
    }, 2000);
  };
  
  // Render enemy list with health bars
  const renderEnemies = () => (
    <div className="combat-enemies">
      <h3>Enemies</h3>
      <div className="enemy-list">
        {combat.enemies.map(enemy => {
          // Calculate health percentage
          const healthPercent = Math.max(0, Math.min(100, (enemy.health / enemy.maxHealth) * 100));
          
          // Style for health bar
          const healthBarStyle = {
            width: `${healthPercent}%`,
            backgroundColor: healthPercent < 25 ? '#ff4d4d' : 
                            healthPercent < 50 ? '#ffad4d' : 
                            healthPercent < 75 ? '#ffff4d' : '#4dff4d'
          };
          
          // Is this enemy defeated?
          const isDefeated = enemy.health <= 0;
          
          // Is this the enemy currently being targeted by an enemy?
          const isBeingTargeted = actionResult && 
                                actionResult.targetId === enemy.id && 
                                combat.turn === 'enemy';
          
          // Is this the current enemy's turn?
          const isCurrentTurn = combat.turn === 'enemy' && 
                              combat.currentTurnId === enemy.id;
          
          return (
            <div 
              key={enemy.id} 
              className={`enemy-item ${selectedEnemy?.id === enemy.id ? 'selected' : ''} 
                        ${isDefeated ? 'defeated' : ''} 
                        ${isBeingTargeted ? 'targeted' : ''}
                        ${isCurrentTurn ? 'current-turn' : ''}`}
              onClick={() => !isDefeated && handleSelectEnemy(enemy)}
            >
              <div className="enemy-info">
                <div className="enemy-name">
                  {enemy.name}
                  {isDefeated && <span className="defeated-label"> (Defeated)</span>}
                  {isCurrentTurn && <span className="current-turn-indicator"> ⟲</span>}
                </div>
                <div className="enemy-health-container">
                  <div className="enemy-health-bar-bg">
                    <div className="enemy-health-bar" style={healthBarStyle}></div>
                  </div>
                  <div className="enemy-health-text">
                    {enemy.health}/{enemy.maxHealth}
                  </div>
                </div>
              </div>
              
              {actionResult && actionResult.targetId === enemy.id && (
                <div className={`action-result ${actionResult.success ? 'hit' : 'miss'}`}>
                  {actionResult.critical && <span className="critical">CRITICAL! </span>}
                  {actionResult.success 
                    ? `${actionResult.damage} damage!` 
                    : 'MISS!'}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
  
  // Render player combat info
  const renderPlayerInfo = () => {
    // Calculate health percentage
    const healthPercent = Math.max(0, Math.min(100, (combat.player.health / combat.player.maxHealth) * 100));
    
    // Style for health bar
    const healthBarStyle = {
      width: `${healthPercent}%`,
      backgroundColor: healthPercent < 25 ? '#ff4d4d' : 
                      healthPercent < 50 ? '#ffad4d' : 
                      healthPercent < 75 ? '#ffff4d' : '#4dff4d'
    };
    
    // Is player being targeted?
    const isBeingTargeted = actionResult && 
                          actionResult.targetId === character.id && 
                          combat.turn === 'enemy';
    
    return (
      <div className={`player-combat-info ${isBeingTargeted ? 'targeted' : ''} 
                     ${isPlayerTurn ? 'current-turn' : ''}`}>
        <div className="player-name">
          {character.name}
          {isPlayerTurn && <span className="current-turn-indicator"> ⟲</span>}
        </div>
        <div className="player-health-container">
          <div className="player-health-bar-bg">
            <div className="player-health-bar" style={healthBarStyle}></div>
          </div>
          <div className="player-health-text">
            {combat.player.health}/{combat.player.maxHealth}
          </div>
        </div>
        
        {actionResult && actionResult.targetId === character.id && (
          <div className={`action-result ${actionResult.success ? 'hit' : 'miss'}`}>
            {actionResult.critical && <span className="critical">CRITICAL! </span>}
            {actionResult.success 
              ? `${actionResult.damage} damage!` 
              : 'MISS!'}
          </div>
        )}
        
        {isPlayerTurn ? (
          <div className="turn-indicator">Your turn! Choose an action.</div>
        ) : (
          <div className="turn-indicator">Enemy turn...</div>
        )}
      </div>
    );
  };
  
  // Render combat actions
  const renderCombatActions = () => (
    <div className="combat-actions">
      <h3>Actions</h3>
      <div className="action-buttons">
        <button 
          className={`action-button ${selectedAction === 'attack' ? 'selected' : ''}`} 
          onClick={() => handleSelectAction('attack')}
          disabled={!isPlayerTurn || animating}
        >
          Attack
        </button>
        
        <button 
          className={`action-button ${selectedAction === 'flee' ? 'selected' : ''}`} 
          onClick={() => handleSelectAction('flee')}
          disabled={!isPlayerTurn || animating}
        >
          Flee
        </button>
        
        {/* Maybe add more actions later like special abilities */}
      </div>
      
      {/* Weapon info if equipped */}
      {character.equipped?.weapon && selectedAction === 'attack' && (
        <div className="weapon-info">
          <div className="weapon-name">
            Weapon: {character.equipped.weapon.name}
          </div>
          <div className="weapon-damage">
            Damage: {character.equipped.weapon.stats.damage}
          </div>
        </div>
      )}
      
      {/* Quick access to healing potions */}
      {character.inventory && character.inventory.some(item => 
        item.type === 'consumable' && item.subtype === 'potion' && item.effects.healing
      ) && (
        <div className="quick-items">
          <h4>Quick Items</h4>
          <div className="healing-potions">
            {character.inventory
              .filter(item => item.type === 'consumable' && item.subtype === 'potion' && item.effects.healing)
              .map(potion => (
                <button 
                  key={potion.id}
                  className="potion-button"
                  onClick={() => handleUseItem(potion.id)}
                  disabled={!isPlayerTurn || animating}
                >
                  {potion.name} (+{potion.effects.healing} HP)
                </button>
              ))}
          </div>
        </div>
      )}
      
      {/* Execute button - only show if an action and target are selected */}
      {isPlayerTurn && selectedAction && (selectedAction === 'flee' || selectedEnemy) && (
        <button 
          className="execute-button"
          onClick={handleExecuteAction}
          disabled={animating}
        >
          {selectedAction === 'attack' 
            ? `Attack ${selectedEnemy.name}` 
            : selectedAction === 'flee' 
              ? 'Attempt to Flee' 
              : 'Execute Action'}
        </button>
      )}
    </div>
  );
  
  // Render combat log
  const renderCombatLog = () => (
    <div className="combat-log">
      <h3>Combat Log</h3>
      <div className="log-entries">
        {combat.log.map((entry, index) => (
          <div key={index} className="log-entry">
            <span className="log-round">Round {entry.round}:</span> {entry.message}
          </div>
        ))}
      </div>
    </div>
  );
  
  // Render combat status for victory/defeat
  const renderCombatStatus = () => {
    if (combat.status === 'active') return null;
    
    return (
      <div className={`combat-status ${combat.status}`}>
        <h2>
          {combat.status === 'victory' 
            ? 'Victory!' 
            : combat.status === 'defeat' 
              ? 'Defeat!' 
              : 'Combat Ended'}
        </h2>
        <p>
          {combat.status === 'victory' 
            ? 'You have defeated all enemies!' 
            : combat.status === 'defeat' 
              ? 'You have been defeated...' 
              : combat.status === 'fled' 
                ? 'You have successfully fled from combat.' 
                : 'The combat has ended.'}
        </p>
        
        {/* Show loot if victorious */}
        {combat.status === 'victory' && encounter.outcome?.loot && (
          <div className="combat-loot">
            <h3>Loot Obtained</h3>
            <div className="loot-item">
              <div className="loot-name">{encounter.outcome.loot.name}</div>
              <div className="loot-description">{encounter.outcome.loot.description}</div>
            </div>
          </div>
        )}
        
        <button className="close-combat-button" onClick={() => {}}>
          Close
        </button>
      </div>
    );
  };
  
  return (
    <div className="combat-interface">
      <div className="combat-header">
        <h2>Combat: {encounter.data.name}</h2>
        <div className="combat-round">Round: {combat.round}</div>
      </div>
      
      <div className="combat-card">
        <Card 
          suit={encounter.cardDraw.suit} 
          rank={encounter.cardDraw.rank} 
          size="small" 
        />
      </div>
      
      <div className="combat-main">
        <div className="combat-section enemies-section">
          {renderEnemies()}
        </div>
        
        <div className="combat-section player-section">
          {renderPlayerInfo()}
          {renderCombatActions()}
        </div>
      </div>
      
      <div className="combat-footer">
        {renderCombatLog()}
      </div>
      
      {renderCombatStatus()}
    </div>
  );
};

export default CombatInterface;
