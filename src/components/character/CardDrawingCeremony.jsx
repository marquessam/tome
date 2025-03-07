import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import '../styles/CardDrawingCeremony.css';

const CardDrawingCeremony = ({ drawCards, onComplete }) => {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, race-draw, race-reveal, class-draw, class-reveal, complete
  const [raceCard, setRaceCard] = useState(null);
  const [classCard, setClassCard] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [cardFaceDown, setCardFaceDown] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Card description data - simplified, would come from game data in production
  const raceDescriptions = {
    hearts: {
      'ace': 'Human - Adaptable and versatile, humans excel in all fields',
      '2': 'Dwarf - Sturdy and resilient, masters of stone and metal',
      '3': 'Elf - Graceful and in tune with nature and magic',
      '4': 'Orc - Strong and fierce warriors with a connection to primal forces',
      '5': 'Halfling - Small, agile, and extraordinarily lucky',
      '6': 'Gnome - Inventive tinkerers with natural arcane talents',
      '7': 'Ogre - Massive beings of enormous strength',
      '8': 'Centaur - Half-human, half-horse creatures of the wild',
      '9': 'Pixie/Faerie - Tiny, ethereal beings with an affinity for nature magic',
      '10': 'Treant - Tree-like beings with deep connections to nature',
      'jack': 'Beast Folk - Humanoid creatures with animalistic features',
      'queen': 'Elemental - Beings infused with elemental energy',
      'king': 'Dragonborn - Proud creatures with draconic heritage'
    },
    diamonds: {
      'ace': 'Human (Coastal) - Adaptable humans with a nautical background',
      // And similar entries for other cards
    },
    clubs: {
      'ace': 'Human (Forest) - Adaptable humans with woodland knowledge',
      // And similar entries for other cards
    },
    spades: {
      'ace': 'Human (Mountain) - Adaptable humans from highland territories',
      // And similar entries for other cards
    }
  };
  
  const classDescriptions = {
    hearts: {
      'ace': 'Warrior - Masters of martial combat, strong and durable',
      '2': 'Warrior - Masters of martial combat, strong and durable',
      '3': 'Warrior - Masters of martial combat, strong and durable',
      '4': 'Warrior - Masters of martial combat, strong and durable',
      '5': 'Warrior - Masters of martial combat, strong and durable',
      '6': 'Warrior - Masters of martial combat, strong and durable',
      '7': 'Warrior - Masters of martial combat, strong and durable',
      '8': 'Warrior - Masters of martial combat, strong and durable',
      '9': 'Warrior - Masters of martial combat, strong and durable',
      '10': 'Warrior - Masters of martial combat, strong and durable',
      'jack': 'Warrior - Masters of martial combat, strong and durable',
      'queen': 'Warrior - Masters of martial combat, strong and durable',
      'king': 'Warrior - Masters of martial combat, strong and durable'
    },
    diamonds: {
      'ace': 'Wizard - Scholarly magic-users who channel arcane energies',
      // And similar entries for other cards
    },
    clubs: {
      'ace': 'Rogue - Stealthy operators skilled in deception and precision',
      // And similar entries for other cards
    },
    spades: {
      'ace': 'Cleric - Divine spellcasters who channel the power of their deity',
      // And similar entries for other cards
    }
  };
  
  const drawRaceCard = () => {
    setIsAnimating(true);
    setCardFaceDown(true);
    
    // Simulate card drawing with a delay for effect
    setTimeout(() => {
      // Call the actual draw cards function from props
      const card = drawCards(1)[0];
      setRaceCard(card);
      
      // Get race data based on the card
      const raceInfo = getRaceDescription(card);
      setRaceData(raceInfo);
      
      setCurrentStep('race-reveal');
      setIsAnimating(false);
    }, 1000);
  };
  
  const drawClassCard = () => {
    setIsAnimating(true);
    setCardFaceDown(true);
    
    // Simulate card drawing with a delay for effect
    setTimeout(() => {
      // Call the actual draw cards function from props
      const card = drawCards(1)[0];
      setClassCard(card);
      
      // Get class data based on the card
      const classInfo = getClassDescription(card);
      setClassData(classInfo);
      
      setCurrentStep('class-reveal');
      setIsAnimating(false);
    }, 1000);
  };
  
  const revealRaceCard = () => {
    setCardFaceDown(false);
  };
  
  const revealClassCard = () => {
    setCardFaceDown(false);
  };
  
  const completeDrawing = () => {
    onComplete({ raceCard, classCard });
  };
  
  // Helper function to get race description
  const getRaceDescription = (card) => {
    return {
      name: getRaceName(card),
      description: raceDescriptions[card.suit]?.[card.rank] || 'Unknown Race'
    };
  };
  
  // Helper function to get class description
  const getClassDescription = (card) => {
    return {
      name: getClassName(card),
      description: classDescriptions[card.suit]?.[card.rank] || 'Unknown Class'
    };
  };
  
  // Helper function to get race name
  const getRaceName = (card) => {
    if (!card) return 'Unknown';
    
    const baseRace = raceDescriptions[card.suit]?.[card.rank]?.split(' - ')[0] || 'Unknown Race';
    return baseRace;
  };
  
  // Helper function to get class name
  const getClassName = (card) => {
    if (!card) return 'Unknown';
    
    const baseClass = classDescriptions[card.suit]?.[card.rank]?.split(' - ')[0] || 'Unknown Class';
    return baseClass;
  };
  
  return (
    <div className="card-drawing-ceremony">
      {currentStep === 'intro' && (
        <div className="ceremony-step intro-step">
          <h2>The Fates Await Your Character</h2>
          <p>In Card RPG, your character's race and class are determined by the cards you draw.</p>
          <p>Your journey begins with two fateful draws that will shape your destiny.</p>
          <button 
            className="ceremony-button"
            onClick={() => setCurrentStep('race-draw')}
          >
            Begin the Ceremony
          </button>
        </div>
      )}
      
      {currentStep === 'race-draw' && (
        <div className="ceremony-step draw-step">
          <h2>Draw Your Race Card</h2>
          <p>The first draw will determine your character's race.</p>
          <p>Each suit and rank corresponds to a different race with unique traits and abilities.</p>
          <div className="card-deck">
            <div className={`card-placeholder ${isAnimating ? 'animate-draw' : ''}`}>
              <Card faceDown={true} size="large" />
            </div>
          </div>
          <button 
            className="ceremony-button"
            onClick={drawRaceCard}
            disabled={isAnimating}
          >
            {isAnimating ? 'Drawing...' : 'Draw Race Card'}
          </button>
        </div>
      )}
      
      {currentStep === 'race-reveal' && (
        <div className="ceremony-step reveal-step">
          <h2>Your Race Awaits</h2>
          <p>Click the card to reveal your race.</p>
          <div className="card-reveal">
            <div 
              className={`card-holder ${!cardFaceDown ? 'revealed' : ''}`}
              onClick={revealRaceCard}
            >
              <Card 
                suit={raceCard.suit} 
                rank={raceCard.rank} 
                size="large" 
                faceDown={cardFaceDown} 
              />
            </div>
            
            {!cardFaceDown && (
              <div className="race-info">
                <h3>{raceData.name}</h3>
                <p>{raceData.description}</p>
              </div>
            )}
          </div>
          {!cardFaceDown && (
            <button 
              className="ceremony-button"
              onClick={() => setCurrentStep('class-draw')}
            >
              Continue to Class Draw
            </button>
          )}
        </div>
      )}
      
      {currentStep === 'class-draw' && (
        <div className="ceremony-step draw-step">
          <h2>Draw Your Class Card</h2>
          <p>The second draw will determine your character's class.</p>
          <p>Each suit corresponds to a different class archetype with special abilities.</p>
          <div className="card-deck">
            <div className={`card-placeholder ${isAnimating ? 'animate-draw' : ''}`}>
              <Card faceDown={true} size="large" />
            </div>
          </div>
          <button 
            className="ceremony-button"
            onClick={drawClassCard}
            disabled={isAnimating}
          >
            {isAnimating ? 'Drawing...' : 'Draw Class Card'}
          </button>
        </div>
      )}
      
      {currentStep === 'class-reveal' && (
        <div className="ceremony-step reveal-step">
          <h2>Your Class Awaits</h2>
          <p>Click the card to reveal your class.</p>
          <div className="card-reveal">
            <div 
              className={`card-holder ${!cardFaceDown ? 'revealed' : ''}`}
              onClick={revealClassCard}
            >
              <Card 
                suit={classCard.suit} 
                rank={classCard.rank} 
                size="large" 
                faceDown={cardFaceDown} 
              />
            </div>
            
            {!cardFaceDown && (
              <div className="class-info">
                <h3>{classData.name}</h3>
                <p>{classData.description}</p>
              </div>
            )}
          </div>
          {!cardFaceDown && (
            <button 
              className="ceremony-button"
              onClick={() => setCurrentStep('summary')}
            >
              Continue
            </button>
          )}
        </div>
      )}
      
      {currentStep === 'summary' && (
        <div className="ceremony-step summary-step">
          <h2>Your Character's Path</h2>
          
          <div className="character-summary">
            <div className="character-cards">
              <div className="race-card-summary">
                <h3>Race</h3>
                <Card suit={raceCard.suit} rank={raceCard.rank} size="medium" />
                <p>{raceData.name}</p>
              </div>
              
              <div className="class-card-summary">
                <h3>Class</h3>
                <Card suit={classCard.suit} rank={classCard.rank} size="medium" />
                <p>{classData.name}</p>
              </div>
            </div>
            
            <div className="character-destiny">
              <p>
                The cards have revealed your destiny as a <strong>{raceData.name} {classData.name}</strong>.
              </p>
              <p>Your character will begin with traits and abilities reflecting this unique combination.</p>
            </div>
          </div>
          
          <button 
            className="ceremony-button complete-button"
            onClick={completeDrawing}
          >
            Accept Your Destiny
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDrawingCeremony;
