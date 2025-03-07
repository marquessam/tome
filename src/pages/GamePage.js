import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import WorldMap from '../components/map/WorldMap';
import CharacterSheet from '../components/character/CharacterSheet';
import GameControls from '../components/game/GameControls';
import CardDeck from '../components/card/CardDeck';
import EncounterDisplay from '../components/encounter/EncounterDisplay';
import CombatInterface from '../components/combat/CombatInterface';
import GameLog from '../components/game/GameLog';
import '../styles/GamePage.css';

const GamePage = () => {
  const { worldId } = useParams();
  const navigate = useNavigate();
  const { 
    loadWorld, 
    gameState, 
    currentCharacter, 
    currentTile,
    activeEncounter,
    combatState,
    setEncounter,
    exploreTile,
    loading, 
    error 
  } = useGame();
  
  const [showCharacterSheet, setShowCharacterSheet] = useState(false);
  const [showGameLog, setShowGameLog] = useState(false);
  const [showDeckDisplay, setShowDeckDisplay] = useState(false);
  
  // Load world data on mount
  useEffect(() => {
    if (!gameState || gameState.id !== worldId) {
      loadWorld(worldId);
    }
  }, [worldId, gameState, loadWorld]);
  
  // Redirect if no character is active
  useEffect(() => {
    if (gameState && !loading && !currentCharacter) {
      navigate(`/worlds/${worldId}/characters`);
    }
  }, [gameState, currentCharacter, loading, worldId, navigate]);
  
  // Handle tile exploration
  const handleExploreTile = () => {
    exploreTile();
  };
  
  // Handle encounter selection
  const handleSelectEncounter = (encounterId) => {
    setEncounter(encounterId);
  };
  
  // Toggle character sheet
  const toggleCharacterSheet = () => {
    setShowCharacterSheet(prev => !prev);
  };
  
  // Toggle game log
  const toggleGameLog = () => {
    setShowGameLog(prev => !prev);
  };
  
  // Toggle deck display
  const toggleDeckDisplay = () => {
    setShowDeckDisplay(prev => !prev);
  };
  
  if (loading) {
    return <div className="loading">Loading game data...</div>;
  }
  
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  
  if (!gameState || !currentCharacter) {
    return <div className="loading">Preparing adventure...</div>;
  }
  
  // Determine if we're in combat
  const isInCombat = !!combatState;
  
  return (
    <div className="game-page">
      <div className="game-container">
        <header className="game-header">
          <div className="header-left">
            <h1>{gameState.name}</h1>
          </div>
          <div className="character-quick-info">
            <span className="character-name">{currentCharacter.name}</span>
            <span className="character-level">
              Level {currentCharacter.level} {currentCharacter.race} {currentCharacter.class}
            </span>
            <div className="health-display">
              HP: {currentCharacter.health}/{currentCharacter.maxHealth}
            </div>
          </div>
          <div className="header-actions">
            <button 
              className="deck-toggle-button"
              onClick={toggleDeckDisplay}
            >
              {showDeckDisplay ? 'Hide Deck' : 'Show Deck'}
            </button>
            <button 
              className="character-sheet-toggle"
              onClick={toggleCharacterSheet}
            >
              {showCharacterSheet ? 'Hide Character Sheet' : 'Show Character Sheet'}
            </button>
            <button
              className="game-log-toggle"
              onClick={toggleGameLog}
            >
              {showGameLog ? 'Hide Game Log' : 'Show Game Log'}
            </button>
            <Link to={`/worlds/${worldId}/characters`} className="change-character-button">
              Change Character
            </Link>
          </div>
        </header>
        
        <div className="game-main">
          <div className="game-left-panel">
            <GameControls 
              onExploreTile={handleExploreTile}
              canExplore={currentTile && !currentTile.explored}
            />
            {showDeckDisplay && <CardDeck />}
          </div>
          
          <div className="game-center-panel">
            {isInCombat ? (
              <CombatInterface 
                combat={combatState}
                character={currentCharacter}
                encounter={activeEncounter}
              />
            ) : activeEncounter ? (
              <EncounterDisplay 
                encounter={activeEncounter}
                tile={currentTile}
                onClose={() => setEncounter(null)}
              />
            ) : (
              <div className="map-and-location">
                <div className="world-map-wrapper">
                  <WorldMap 
                    map={gameState.map} 
                    currentPosition={currentCharacter.position}
                  />
                </div>
                
                <div className="location-display">
                  <h2>Current Location</h2>
                  {currentTile ? (
                    <>
                      <h3>{currentTile.location.name}</h3>
                      <p>{currentTile.location.description}</p>
                      
                      {/* Features */}
                      {currentTile.location.features && currentTile.location.features.length > 0 && (
                        <div className="location-features">
                          <h4>Features</h4>
                          <ul>
                            {currentTile.location.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Encounters */}
                      {currentTile.explored && currentTile.encounters && currentTile.encounters.length > 0 && (
                        <div className="location-encounters">
                          <h4>Encounters</h4>
                          <ul className="encounter-list">
                            {currentTile.encounters
                              .filter(encounter => !encounter.resolved)
                              .map(encounter => (
                                <li 
                                  key={encounter.id}
                                  className="encounter-item"
                                  onClick={() => handleSelectEncounter(encounter.id)}
                                >
                                  <span className={`encounter-type ${encounter.type}`}>
                                    {encounter.type.charAt(0).toUpperCase() + encounter.type.slice(1)}
                                  </span>
                                  <span className="encounter-name">
                                    {encounter.data.name}
                                  </span>
                                </li>
                              ))}
                          </ul>
                          
                          {currentTile.encounters.every(encounter => encounter.resolved) && (
                            <p className="all-resolved">All encounters have been resolved.</p>
                          )}
                        </div>
                      )}
                      
                      {/* Items */}
                      {currentTile.explored && currentTile.items && currentTile.items.length > 0 && (
                        <div className="location-items">
                          <h4>Items</h4>
                          <ul>
                            {currentTile.items.map(item => (
                              <li key={item.id} className="item-list-item">
                                {item.name} - {item.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {!currentTile.explored && (
                        <div className="unexplored-notice">
                          <p>This area is unexplored. Click 'Explore' to discover what's here!</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <p>Loading location data...</p>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="game-right-panel">
            {showGameLog && (
              <GameLog gameState={gameState} />
            )}
          </div>
        </div>
        
        {showCharacterSheet && (
          <div className="character-sheet-modal">
            <div className="modal-content">
              <button 
                className="close-modal-button"
                onClick={() => setShowCharacterSheet(false)}
              >
                ×
              </button>
              <CharacterSheet character={currentCharacter} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
