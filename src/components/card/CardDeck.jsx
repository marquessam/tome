import React, { useState } from 'react';
import { useGame } from '../../contexts/GameContext';
import Card from '../common/Card';
import '../../styles/CardDeck.css';

const CardDeck = () => {
  const { gameState } = useGame();
  const [showingCard, setShowingCard] = useState(null);
  const [animatingDraw, setAnimatingDraw] = useState(false);
  
  // Check if deck exists
  if (!gameState || !gameState.deck) {
    return <div className="card-deck-placeholder">Loading deck...</div>;
  }
  
  const { drawPile, discardPile, penaltyCards } = gameState.deck;
  
  // Get the top card of the discard pile
  const topDiscard = discardPile.length > 0 ? discardPile[discardPile.length - 1] : null;
  
  // Display a card when clicked
  const handleCardClick = (card) => {
    setShowingCard(card);
  };
  
  // Close the card display
  const handleCloseCardDisplay = () => {
    setShowingCard(null);
  };
  
  // Simulate drawing a card (in the real game, this would be integrated with the game engine)
  const handleDrawCardDemo = () => {
    if (animatingDraw) return;
    
    setAnimatingDraw(true);
    
    // After a brief delay, show a random card
    setTimeout(() => {
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
      
      const randomCard = {
        suit: suits[Math.floor(Math.random() * suits.length)],
        rank: ranks[Math.floor(Math.random() * ranks.length)]
      };
      
      setShowingCard(randomCard);
      setAnimatingDraw(false);
    }, 1000);
  };
  
  return (
    <div className="card-deck-container">
      <h3>Card Deck</h3>
      
      <div className="deck-status">
        <div className="draw-pile">
          <div 
            className="card-stack"
            onClick={handleDrawCardDemo}
          >
            {drawPile.length > 0 ? (
              <Card faceDown={true} size="small" />
            ) : (
              <div className="empty-card-stack">Empty</div>
            )}
          </div>
          <div className="pile-label">
            Draw Pile: {drawPile.length} cards
          </div>
        </div>
        
        <div className="discard-pile">
          <div 
            className="card-stack"
            onClick={() => topDiscard && handleCardClick(topDiscard)}
          >
            {topDiscard ? (
              <Card 
                suit={topDiscard.suit} 
                rank={topDiscard.rank} 
                size="small" 
              />
            ) : (
              <div className="empty-card-stack">Empty</div>
            )}
          </div>
          <div className="pile-label">
            Discard Pile: {discardPile.length} cards
          </div>
        </div>
      </div>
      
      {/* Penalty cards indicator */}
      {penaltyCards.length > 0 && (
        <div className="penalty-cards">
          <div className="penalty-card-count">
            ⚠️ {penaltyCards.length} Penalty Card{penaltyCards.length !== 1 ? 's' : ''}
          </div>
          <div className="penalty-card-info">
            Penalty cards represent injuries or negative conditions. They'll be
            shuffled into your deck and cause harm when drawn.
          </div>
        </div>
      )}
      
      {/* Card draw demo button */}
      <button 
        className="draw-card-button"
        onClick={handleDrawCardDemo}
        disabled={animatingDraw}
      >
        {animatingDraw ? 'Drawing...' : 'Draw Card (Demo)'}
      </button>
      
      {/* Card display overlay */}
      {showingCard && (
        <div className="card-display-overlay" onClick={handleCloseCardDisplay}>
          <div className="card-display-content" onClick={e => e.stopPropagation()}>
            <Card 
              suit={showingCard.suit} 
              rank={showingCard.rank} 
              size="large" 
            />
            <button 
              className="close-display-button"
              onClick={handleCloseCardDisplay}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDeck;
