import React from 'react';
import '../../styles/Card.css';

const Card = ({ suit, rank, size = 'medium', faceDown = false, onClick }) => {
  // Handle face-down cards
  if (faceDown) {
    return (
      <div 
        className={`card card-back ${size}`}
        onClick={onClick}
      >
        <div className="card-pattern">
          <div className="card-logo">CardRPG</div>
        </div>
      </div>
    );
  }
  
  // Get colors based on suit
  const isRed = suit === 'hearts' || suit === 'diamonds';
  const suitColor = isRed ? 'red' : 'black';
  
  // Get suit symbol
  const getSuitSymbol = () => {
    switch (suit) {
      case 'hearts': return '♥';
      case 'diamonds': return '♦';
      case 'clubs': return '♣';
      case 'spades': return '♠';
      default: return '';
    }
  };
  
  // Format the rank display
  const getRankDisplay = () => {
    switch (rank) {
      case 'ace': return 'A';
      case 'jack': return 'J';
      case 'queen': return 'Q';
      case 'king': return 'K';
      default: return rank;
    }
  };
  
  return (
    <div 
      className={`card ${size} ${suitColor}`}
      onClick={onClick}
    >
      <div className="card-corner top-left">
        <div className="card-rank">{getRankDisplay()}</div>
        <div className="card-suit">{getSuitSymbol()}</div>
      </div>
      
      <div className="card-center">
        {/* For face cards, show artwork */}
        {['jack', 'queen', 'king'].includes(rank) ? (
          <div className={`card-face ${rank}`}>
            {getSuitSymbol()}
          </div>
        ) : (
          <div className="card-pips">
            {/* For number cards, show the appropriate number of suit symbols */}
            {Array.from({ length: rank === 'ace' ? 1 : parseInt(rank, 10) }, (_, i) => (
              <span key={i} className="card-pip">{getSuitSymbol()}</span>
            ))}
          </div>
        )}
      </div>
      
      <div className="card-corner bottom-right">
        <div className="card-rank">{getRankDisplay()}</div>
        <div className="card-suit">{getSuitSymbol()}</div>
      </div>
    </div>
  );
};

export default Card;
