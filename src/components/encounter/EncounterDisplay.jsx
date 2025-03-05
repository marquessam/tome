import React, { useState } from 'react';
import { useGame } from '../../contexts/GameContext';
import Card from '../common/Card';
import '../../styles/EncounterDisplay.css';

const EncounterDisplay = ({ encounter, tile, onClose }) => {
  const { startCombat, resolveEncounter, currentCharacter } = useGame();
  
  const [outcome, setOutcome] = useState(null);
  const [cardFaceUp, setCardFaceUp] = useState(false);
  
  if (!encounter) return null;
  
  // If the encounter is already resolved, show the outcome
  if (encounter.resolved) {
    return (
      <div className="encounter-display">
        <div className="encounter-header">
          <h2>Resolved Encounter</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="encounter-content">
          <div className="encounter-info">
            <h3>{encounter.data.name}</h3>
            <p>{encounter.data.description}</p>
          </div>
          
          <div className="encounter-outcome">
            <h4>Outcome</h4>
            <p>{encounter.outcome?.description || "This encounter has been resolved."}</p>
            
            {encounter.outcome?.loot && (
              <div className="encounter-loot">
                <h4>Loot Obtained</h4>
                <div className="loot-item">
                  <div className="loot-name">{encounter.outcome.loot.name}</div>
                  <div className="loot-description">{encounter.outcome.loot.description}</div>
                </div>
              </div>
            )}
          </div>
          
          <button className="primary-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
  
  // Handle initiating combat
  const handleStartCombat = () => {
    startCombat(encounter.id);
  };
  
  // Handle resolving treasure encounter
  const handleClaimTreasure = () => {
    resolveEncounter({
      success: true,
      claimed: true,
      claimedBy: currentCharacter.id,
      description: `${currentCharacter.name} claimed ${encounter.data.item.name}.`
    });
  };
  
  // Handle resolving a situation
  const handleResolveSituation = (success, detail) => {
    resolveEncounter({
      success,
      description: detail,
      penaltiesAdded: success ? [] : ['fatigue'] // Add penalty card on failure
    });
  };
  
  // Handle flipping the encounter card
  const handleFlipCard = () => {
    setCardFaceUp(true);
  };
  
  // Render the encounter based on its type
  const renderEncounterContent = () => {
    switch (encounter.type) {
      case 'combat':
        return (
          <div className="combat-encounter">
            <div className="encounter-info">
              <div className="encounter-card">
                {cardFaceUp ? (
                  <Card 
                    suit={encounter.cardDraw.suit} 
                    rank={encounter.cardDraw.rank} 
                    size="medium" 
                  />
                ) : (
                  <Card 
                    faceDown={true} 
                    size="medium" 
                    onClick={handleFlipCard}
                  />
                )}
              </div>
              
              <div className="encounter-details">
                <h3>{encounter.data.name}</h3>
                <p>{encounter.data.description}</p>
                {encounter.data.traits && (
                  <div className="traits">
                    <h4>Traits</h4>
                    <ul>
                      {encounter.data.traits.map((trait, index) => (
                        <li key={index}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="encounter-quantity">
                  Number Appearing: {encounter.quantity}
                </p>
                <p className="encounter-difficulty">
                  Difficulty: {encounter.data.difficultyText}
                </p>
              </div>
            </div>
            
            <div className="encounter-actions">
              <button 
                className="action-button combat-button"
                onClick={handleStartCombat}
              >
                Fight!
              </button>
              <button 
                className="action-button flee-button"
                onClick={() => resolveEncounter({
                  success: false,
                  fled: true,
                  description: `${currentCharacter.name} decided to avoid combat.`
                })}
              >
                Avoid Combat
              </button>
            </div>
          </div>
        );
        
      case 'treasure':
        return (
          <div className="treasure-encounter">
            <div className="encounter-info">
              <div className="encounter-card">
                {cardFaceUp ? (
                  <Card 
                    suit={encounter.cardDraw.suit} 
                    rank={encounter.cardDraw.rank} 
                    size="medium" 
                  />
                ) : (
                  <Card 
                    faceDown={true} 
                    size="medium" 
                    onClick={handleFlipCard}
                  />
                )}
              </div>
              
              <div className="encounter-details">
                <h3>{encounter.data.name}</h3>
                <p>{encounter.data.description}</p>
                
                {encounter.data.item && (
                  <div className="treasure-item">
                    <h4>Treasure Found</h4>
                    <div className="item-name">{encounter.data.item.name}</div>
                    <div className="item-description">{encounter.data.item.description}</div>
                    <div className="item-properties">
                      <span className="item-type">
                        {encounter.data.item.type.charAt(0).toUpperCase() + 
                         encounter.data.item.type.slice(1)}
                        {encounter.data.item.subtype && 
                         ` (${encounter.data.item.subtype})`}
                      </span>
                      <span className="item-rarity">
                        {encounter.data.item.rarity && 
                         encounter.data.item.rarity.charAt(0).toUpperCase() + 
                         encounter.data.item.rarity.slice(1)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="encounter-actions">
              <button 
                className="action-button claim-button"
                onClick={handleClaimTreasure}
              >
                Claim Treasure
              </button>
              <button 
                className="action-button leave-button"
                onClick={() => resolveEncounter({
                  success: true,
                  claimed: false,
                  description: `${currentCharacter.name} decided to leave the treasure.`
                })}
              >
                Leave It
              </button>
            </div>
          </div>
        );
        
      case 'situation':
        return (
          <div className="situation-encounter">
            <div className="encounter-info">
              <div className="encounter-card">
                {cardFaceUp ? (
                  <Card 
                    suit={encounter.cardDraw.suit} 
                    rank={encounter.cardDraw.rank} 
                    size="medium" 
                  />
                ) : (
                  <Card 
                    faceDown={true} 
                    size="medium" 
                    onClick={handleFlipCard}
                  />
                )}
              </div>
              
              <div className="encounter-details">
                <h3>{encounter.data.name}</h3>
                <p>{encounter.data.description}</p>
                
                {/* For people encounters, show person details */}
                {encounter.data.category === 'people' && (
                  <div className="npc-details">
                    <p>You've encountered someone in your travels. How will you approach them?</p>
                  </div>
                )}
                
                {/* For challenge encounters, show challenge details */}
                {encounter.data.category === 'challenge' && (
                  <div className="challenge-details">
                    <p>A challenge blocks your path. Do you attempt to overcome it?</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="encounter-actions">
              <button 
                className="action-button succeed-button"
                onClick={() => handleResolveSituation(true, `${currentCharacter.name} successfully handled the situation.`)}
              >
                Attempt to Overcome
              </button>
              <button 
                className="action-button fail-button"
                onClick={() => handleResolveSituation(false, `${currentCharacter.name} failed to overcome the situation.`)}
              >
                Avoid the Situation
              </button>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="generic-encounter">
            <p>Unknown encounter type: {encounter.type}</p>
            <button 
              className="action-button"
              onClick={() => resolveEncounter({
                success: true,
                description: `${currentCharacter.name} resolved the encounter.`
              })}
            >
              Resolve Encounter
            </button>
          </div>
        );
    }
  };
  
  return (
    <div className="encounter-display">
      <div className="encounter-header">
        <h2>
          {encounter.type.charAt(0).toUpperCase() + encounter.type.slice(1)} Encounter
        </h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="encounter-content">
        {renderEncounterContent()}
      </div>
    </div>
  );
};

export default EncounterDisplay;
