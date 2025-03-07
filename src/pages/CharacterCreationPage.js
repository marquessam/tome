import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import CardDrawingCeremony from '../components/character/CardDrawingCeremony';
import '../styles/CharacterCreationPage.css';

const CharacterCreationPage = () => {
  const { worldId } = useParams();
  const navigate = useNavigate();
  const { 
    loadWorld, 
    createCharacterWithCards, // We'll update GameContext to include this new function
    gameState, 
    loading, 
    error 
  } = useGame();
  
  const [characterName, setCharacterName] = useState('');
  const [creationStage, setCreationStage] = useState('name'); // name, cards, review
  const [drawnCards, setDrawnCards] = useState({ raceCard: null, classCard: null });
  const [suggestedNames, setSuggestedNames] = useState([]);
  
  // Load world data on mount if needed
  useEffect(() => {
    if (!gameState || gameState.id !== worldId) {
      loadWorld(worldId);
    }
  }, [worldId, gameState, loadWorld]);
  
  // Mock function to simulate drawing cards
  const drawCards = (count) => {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    
    return Array.from({ length: count }, () => ({
      suit: suits[Math.floor(Math.random() * suits.length)],
      rank: ranks[Math.floor(Math.random() * ranks.length)]
    }));
  };
  
  // Handle completing the card drawing ceremony
  const handleCardDrawingComplete = (cards) => {
    setDrawnCards(cards);
    setCreationStage('review');
    
    // Set the suggested name if one was selected during the ceremony
    if (cards.selectedName) {
      setCharacterName(cards.selectedName);
    }
    
    // Set the suggested names from the ceremony
    if (cards.suggestedNames) {
      setSuggestedNames(cards.suggestedNames);
    }
  };
  
  // Handle character creation
  const handleCreateCharacter = (e) => {
    e.preventDefault();
    
    if (!characterName.trim()) {
      alert('Please enter a character name');
      return;
    }
    
    if (!drawnCards.raceCard || !drawnCards.classCard) {
      alert('Please complete the card drawing ceremony first');
      return;
    }
    
    try {
      // Use the cards drawn during the ceremony to create the character
      const newCharacter = createCharacterWithCards(
        worldId, 
        characterName, 
        drawnCards.raceCard, 
        drawnCards.classCard
      );
      
      if (newCharacter) {
        navigate(`/worlds/${worldId}/play`);
      } else {
        throw new Error("Failed to create character");
      }
    } catch (err) {
      console.error("Error creating character:", err);
      alert(`Error creating character: ${err.message || "Unknown error"}`);
    }
  };
  
  // Handle selecting a suggested name
  const handleSelectName = (name) => {
    setCharacterName(name);
  };
  
  if (loading) {
    return <div className="loading">Loading world data...</div>;
  }
  
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  
  if (!gameState) {
    return <div className="error-message">World not found</div>;
  }
  
  return (
    <div className="character-creation-page">
      <div className="character-creation-container">
        <h1>Create Your Character</h1>
        <p className="world-info">World: {gameState.name}</p>
        
        {creationStage === 'name' && (
          <div className="stage-container name-stage">
            <h2>Choose Your Path</h2>
            <p>Your journey begins with a name. What shall we call you, adventurer?</p>
            
            <form className="character-form">
              <div className="form-group">
                <label htmlFor="characterName">Character Name:</label>
                <input
                  type="text"
                  id="characterName"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  placeholder="Enter character name"
                />
              </div>
              
              <p className="creation-note">
                Next, you'll draw cards to determine your race and class, the fundamental aspects of your character.
              </p>
              
              <div className="form-actions">
                <Link to={`/worlds/${worldId}/characters`} className="cancel-button">
                  Cancel
                </Link>
                <button 
                  type="button" 
                  className="next-button primary-button"
                  onClick={() => setCreationStage('cards')}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Draw Destiny Cards'}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {creationStage === 'cards' && (
          <div className="stage-container card-stage">
            <CardDrawingCeremony 
              drawCards={drawCards} 
              onComplete={handleCardDrawingComplete}
            />
          </div>
        )}
        
        {creationStage === 'review' && (
          <div className="stage-container review-stage">
            <h2>Finalize Your Character</h2>
            
            <div className="character-summary">
              <div className="character-details">
                <div className="detail-section">
                  <h3>Race & Class</h3>
                  <div className="card-summary">
                    <div className="race-card">
                      <div className="card-label">Race Card:</div>
                      <div className="card-display">
                        {drawnCards.raceCard && (
                          <div className="drawn-card">
                            {drawnCards.raceCard.suit} {drawnCards.raceCard.rank}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="class-card">
                      <div className="card-label">Class Card:</div>
                      <div className="card-display">
                        {drawnCards.classCard && (
                          <div className="drawn-card">
                            {drawnCards.classCard.suit} {drawnCards.classCard.rank}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Character Name</h3>
                  
                  <div className="name-selection">
                    <input
                      type="text"
                      value={characterName}
                      onChange={(e) => setCharacterName(e.target.value)}
                      placeholder="Enter your character's name"
                      className="name-input"
                    />
                    
                    <div className="name-suggestions">
                      <h4>Suggested Names:</h4>
                      <div className="suggestion-list">
                        {suggestedNames.map((name, index) => (
                          <button 
                            key={index} 
                            className="suggestion-button"
                            onClick={() => handleSelectName(name)}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="creation-actions">
              <button 
                className="back-button"
                onClick={() => setCreationStage('cards')}
              >
                Back to Cards
              </button>
              <button 
                className="create-button primary-button"
                onClick={handleCreateCharacter}
                disabled={!characterName.trim() || loading}
              >
                {loading ? 'Creating...' : 'Create Character & Begin'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCreationPage;
