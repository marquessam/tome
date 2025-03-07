import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import '../styles/CardDrawingCeremony.css';

const CardDrawingCeremony = ({ drawCards, onComplete }) => {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, race-draw, race-reveal, class-draw, class-reveal, summary
  const [raceCard, setRaceCard] = useState(null);
  const [classCard, setClassCard] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [classData, setClassData] = useState(null);
  const [cardFaceDown, setCardFaceDown] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [suggestedNames, setSuggestedNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  
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
      '2': 'Triton - Aquatic humanoids with control over water',
      '3': 'Sea Elf - Elves adapted to life beneath the waves',
      '4': 'Merfolk - Half-human, half-fish beings of the deep ocean',
      '5': 'Siren - Enchanting ocean dwellers with captivating voices',
      '6': 'Selkie - Shapeshifters who can transform between human and seal form',
      '7': 'Turtle Folk - Patient, long-lived beings with protective shells',
      '8': 'Coral Dwarf - Dwarves who build and shape living coral structures',
      '9': 'Tidecaller - Humans touched by oceanic magic',
      '10': 'Kraken-kin - Powerful beings with tentacle appendages',
      'jack': 'Water Genasi - Humanoids with elemental water ancestry',
      'queen': 'Nereid - Divine water spirits with control over currents',
      'king': 'Leviathan-born - Descendants of ancient sea monsters'
    },
    clubs: {
      'ace': 'Human (Forest) - Adaptable humans with woodland knowledge',
      '2': 'Wood Elf - Elves who have deep connections with ancient forests',
      '3': 'Satyr - Playful forest beings with goat-like lower bodies',
      '4': 'Dryad - Plant-based humanoids with bark-like skin',
      '5': 'Firbolg - Giant-kin with innate druidic abilities',
      '6': 'Leshy - Sentient plant beings born from nature magic',
      '7': 'Myconid - Fungal humanoids with telepathic abilities',
      '8': 'Wilden - Primal forest guardians with changing aspects',
      '9': 'Vine-touched - Humans partially transformed by plant magic',
      '10': 'Werebeast - Shapeshifters with animal forms',
      'jack': 'Tabaxi - Agile feline humanoids with keen senses',
      'queen': 'Verdant One - Highly evolved plant beings',
      'king': 'Ancient Guardian - Awakened ancient trees'
    },
    spades: {
      'ace': 'Human (Mountain) - Adaptable humans from highland territories',
      '2': 'Mountain Dwarf - Dwarves who carve their halls in mighty peaks',
      '3': 'Goliath - Massive tribal warriors adapted to high altitudes',
      '4': 'Aarakocra - Bird-like humanoids with the ability to fly',
      '5': 'Stone Genasi - Humanoids with elemental earth ancestry',
      '6': 'Galeb Duhr - Living rock beings with control over stone',
      '7': 'Harpy - Fierce winged humanoids with territorial instincts',
      '8': 'Air Genasi - Humanoids with elemental air ancestry',
      '9': 'Cliff Runner - Nimble humans adapted to vertical environments',
      '10': 'Roc-born - Humanoids blessed by the mighty roc birds',
      'jack': 'Griffon Rider - Humans with griffon companion bonds',
      'queen': 'Cloud Giant - Noble giant-kin with weather control abilities',
      'king': 'Dragon Highlord - Mountain dwellers with draconic pacts'
    }
  };
  
  const classDescriptions = {
    hearts: {
      'ace': 'Warrior - Masters of martial combat, strong and durable',
      '2': 'Knight - Honorable warriors who protect the innocent',
      '3': 'Barbarian - Fierce warriors who tap into primal rage',
      '4': 'Warlord - Tactical fighters who lead others in battle',
      '5': 'Weaponmaster - Specialists trained in multiple fighting styles',
      '6': 'Berserker - Warriors who fight with uncontrolled fury',
      '7': 'Gladiator - Combatants trained for public spectacle and glory',
      '8': 'Vanguard - Front-line fighters who excel at defense',
      '9': 'Champion - Heroes who represent causes greater than themselves',
      '10': 'Guardian - Protectors who defend their allies at all costs',
      'jack': 'Mercenary - Skilled fighters who sell their services',
      'queen': 'Warchief - Leaders who inspire their warriors through example',
      'king': 'Conqueror - Warriors driven to claim victory at any cost'
    },
    diamonds: {
      'ace': 'Wizard - Scholarly magic-users who channel arcane energies',
      '2': 'Elementalist - Mages specialized in controlling the elements',
      '3': 'Sorcerer - Innate spellcasters with magical bloodlines',
      '4': 'Enchanter - Wizards who specialize in influencing minds',
      '5': 'Illusionist - Masters of creating magical deceptions',
      '6': 'Diviner - Seers who can glimpse the future and distant events',
      '7': 'Evoker - Destructive mages who harness raw magical energy',
      '8': 'Conjurer - Spellcasters who summon creatures and objects',
      '9': 'Chronomancer - Mysterious wizards who manipulate time',
      '10': 'Runescribe - Magic-users who encode spells in ancient symbols',
      'jack': 'Spellblade - Warriors who incorporate magic into combat',
      'queen': 'Arcanist - Scholars with deep understanding of magical theory',
      'king': 'Archmage - The most powerful and knowledgeable of wizards'
    },
    clubs: {
      'ace': 'Rogue - Stealthy operators skilled in deception and precision',
      '2': 'Thief - Specialists in acquiring what belongs to others',
      '3': 'Assassin - Lethal agents trained in the killing arts',
      '4': 'Scout - Experts in reconnaissance and survival',
      '5': 'Spy - Masters of infiltration and information gathering',
      '6': 'Swashbuckler - Flamboyant duelists with charm and skill',
      '7': 'Shadow - Rogues who utilize magical shadow energy',
      '8': 'Saboteur - Specialists in disruption and destruction',
      '9': 'Gambler - Risk-takers who rely on luck and quick wits',
      '10': 'Acrobat - Agile performers with exceptional mobility',
      'jack': 'Pirate - Seafaring rogues who plunder and pillage',
      'queen': 'Mastermind - Brilliant strategists who plan perfect crimes',
      'king': 'Guildmaster - Leaders of criminal organizations'
    },
    spades: {
      'ace': 'Cleric - Divine spellcasters who channel the power of their deity',
      '2': 'Priest - Devoted servants who spread their deity\'s teachings',
      '3': 'Templar - Holy warriors who combine faith and combat',
      '4': 'Oracle - Prophets who receive divine visions',
      '5': 'Healer - Specialists in restoration and recovery',
      '6': 'Exorcist - Clerics trained to combat undead and fiends',
      '7': 'Druid - Nature priests with shapeshifting abilities',
      '8': 'Shaman - Spiritual leaders with connections to nature spirits',
      '9': 'Paladin - Holy knights sworn to uphold justice',
      '10': 'Inquisitor - Investigators who root out enemies of the faith',
      'jack': 'Monk - Disciplined warriors who harness inner spiritual energy',
      'queen': 'High Priest - Powerful religious leaders with divine favor',
      'king': 'Avatar - Living embodiments of their deity\'s will'
    }
  };

  // Name generation data
  const nameComponents = {
    firstNamePrefixes: [
      'Ar', 'Bel', 'Cal', 'Dra', 'El', 'Fae', 'Gor', 'Hel', 'Il', 'Jor', 'Kal', 'Lyr', 'Mal', 'Nor', 'Ori', 
      'Pyr', 'Quin', 'Rav', 'Syl', 'Tho', 'Uth', 'Val', 'Wil', 'Xan', 'Yor', 'Zan', 'Bri', 'Cael', 'Tae',
      'Aes', 'Dar', 'Fen', 'Gal', 'Kyr', 'Lor', 'Nim', 'Per', 'Rho', 'Sar', 'Tor', 'Ver', 'Zar', 'Eth'
    ],
    firstNameSuffixes: [
      'an', 'or', 'in', 'is', 'us', 'ia', 'en', 'on', 'ar', 'eth', 'il', 'ak', 'ik', 'ur', 'ath', 'ith', 
      'oth', 'um', 'am', 'em', 'ir', 'iel', 'ael', 'wyn', 'wen', 'yn', 'ys', 'is', 'os', 'as', 'ra',
      'na', 'da', 'rin', 'nis', 'lin', 'lia', 'sha', 'thi', 'dra', 'van', 'lor', 'mir', 'dis'
    ],
    lastNamePrefixes: [
      'Black', 'Bright', 'Cloud', 'Dark', 'Dawn', 'Dusk', 'Ember', 'Fire', 'Frost', 'Gold', 'Green', 'Grey', 
      'High', 'Iron', 'Light', 'Moon', 'Night', 'Oak', 'Rain', 'Red', 'Shadow', 'Silver', 'Sky', 'Snow', 
      'Star', 'Storm', 'Swift', 'Thunder', 'True', 'Wind', 'Winter', 'Ancient', 'Azure', 'Crimson', 'Crystal',
      'Dragon', 'Ever', 'Far', 'Flint', 'Grim', 'Hollow', 'Mist', 'Raven', 'Stone', 'Wild'
    ],
    lastNameSuffixes: [
      'blade', 'born', 'breath', 'crest', 'dancer', 'fall', 'fist', 'foot', 'forge', 'gaze', 'heart', 
      'hunter', 'keeper', 'kin', 'leaf', 'light', 'mane', 'mantle', 'mountain', 'path', 'river', 'runner', 
      'shield', 'singer', 'slayer', 'smith', 'song', 'spear', 'spirit', 'star', 'stone', 'strider', 'sword', 
      'walker', 'warden', 'weaver', 'wood', 'bane', 'bloom', 'breaker', 'caller', 'crown', 'fury', 'grip',
      'haven', 'helm', 'horn', 'root', 'seeker', 'shadow', 'vale', 'whisper'
    ],
    // Mapping suit to themes for name generation
    suitThemes: {
      hearts: ['valor', 'strength', 'courage'],
      diamonds: ['magic', 'wisdom', 'arcane'],
      clubs: ['cunning', 'shadows', 'agility'],
      spades: ['faith', 'divine', 'holy']
    },
    // Race-specific prefixes
    racePrefixes: {
      'Human': ['Hu', 'Man', 'Bel', 'Con', 'Ed', 'Greg', 'Rob'],
      'Dwarf': ['Dur', 'Thor', 'Bal', 'Bom', 'Thrum', 'Gim', 'Grom'],
      'Elf': ['Ele', 'Gala', 'Thal', 'Aur', 'Leg', 'Tae', 'Cel'],
      'Orc': ['Grum', 'Mog', 'Gor', 'Zug', 'Kra', 'Thok', 'Ur'],
      'Dragonborn': ['Drag', 'Kala', 'Rex', 'Vex', 'Bal', 'Dor', 'Gar']
    },
    // Class-specific suffixes
    classSuffixes: {
      'Warrior': ['arm', 'ax', 'blade', 'hammer', 'fist', 'shield'],
      'Wizard': ['spell', 'wand', 'orb', 'tome', 'star', 'rune'],
      'Rogue': ['shadow', 'dagger', 'mask', 'cloak', 'step', 'swift'],
      'Cleric': ['prayer', 'light', 'faith', 'saint', 'bless', 'hope']
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
    }, 1500);
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
    }, 1500);
  };
  
  const revealRaceCard = () => {
    setCardFaceDown(false);
  };
  
  const revealClassCard = () => {
    setCardFaceDown(false);
  };
  
  const completeDrawing = () => {
    onComplete({ 
      raceCard, 
      classCard,
      suggestedNames,
      selectedName
    });
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
  
  // Generate character name suggestions based on race and class cards
  const generateNameSuggestions = () => {
    if (!raceCard || !classCard) return [];
    
    const suitValues = { hearts: 0, diamonds: 1, clubs: 2, spades: 3 };
    const rankValues = { 
      'ace': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, 
      '10': 9, 'jack': 10, 'queen': 11, 'king': 12 
    };
    
    const raceName = getRaceName(raceCard);
    const className = getClassName(classCard);
    const racePrefixes = nameComponents.racePrefixes[raceName.split(' ')[0]] || nameComponents.firstNamePrefixes;
    const classSuffixes = nameComponents.classSuffixes[className.split(' ')[0]] || nameComponents.firstNameSuffixes;
    
    const names = [];
    
    // Generate 5 unique name suggestions
    for (let i = 0; i < 5; i++) {
      // Use different methods to create variety
      let firstName, lastName;
      
      // Method 1: Based on card values
      if (i === 0) {
        const raceIndex = (suitValues[raceCard.suit] * 13 + rankValues[raceCard.rank]) % racePrefixes.length;
        const classIndex = (suitValues[classCard.suit] * 13 + rankValues[classCard.rank]) % classSuffixes.length;
        
        firstName = racePrefixes[raceIndex] + classSuffixes[classIndex];
      } 
      // Method 2: Random components with race influence
      else if (i === 1) {
        const racePrefix = racePrefixes[Math.floor(Math.random() * racePrefixes.length)];
        const randomSuffix = nameComponents.firstNameSuffixes[Math.floor(Math.random() * nameComponents.firstNameSuffixes.length)];
        
        firstName = racePrefix + randomSuffix;
      }
      // Method 3: Random components with class influence
      else if (i === 2) {
        const randomPrefix = nameComponents.firstNamePrefixes[Math.floor(Math.random() * nameComponents.firstNamePrefixes.length)];
        const classSuffix = classSuffixes[Math.floor(Math.random() * classSuffixes.length)];
        
        firstName = randomPrefix + classSuffix;
      }
      // Method 4-5: Fully random with theme influence
      else {
        const randomPrefix = nameComponents.firstNamePrefixes[Math.floor(Math.random() * nameComponents.firstNamePrefixes.length)];
        const randomSuffix = nameComponents.firstNameSuffixes[Math.floor(Math.random() * nameComponents.firstNameSuffixes.length)];
        
        firstName = randomPrefix + randomSuffix;
      }
      
      // Last name generation
      const suitTheme = nameComponents.suitThemes[classCard.suit];
      const themeWord = suitTheme[Math.floor(Math.random() * suitTheme.length)];
      
      // Use theme to bias last name selection (simple approach)
      let prefixIndex, suffixIndex;
      
      if (themeWord === 'valor' || themeWord === 'strength' || themeWord === 'courage') {
        // Warrior-themed names
        const warriorPrefixes = ['Iron', 'Battle', 'Storm', 'Thunder', 'Fire', 'Steel'];
        const warriorSuffixes = ['blade', 'fist', 'heart', 'shield', 'hammer', 'fury'];
        
        prefixIndex = Math.floor(Math.random() * warriorPrefixes.length);
        suffixIndex = Math.floor(Math.random() * warriorSuffixes.length);
        
        lastName = warriorPrefixes[prefixIndex] + warriorSuffixes[suffixIndex];
      } 
      else if (themeWord === 'magic' || themeWord === 'wisdom' || themeWord === 'arcane') {
        // Magic-themed names
        const magicPrefixes = ['Star', 'Moon', 'Spell', 'Rune', 'Crystal', 'Dream'];
        const magicSuffixes = ['weaver', 'singer', 'caller', 'seeker', 'walker', 'whisper'];
        
        prefixIndex = Math.floor(Math.random() * magicPrefixes.length);
        suffixIndex = Math.floor(Math.random() * magicSuffixes.length);
        
        lastName = magicPrefixes[prefixIndex] + magicSuffixes[suffixIndex];
      }
      else if (themeWord === 'cunning' || themeWord === 'shadows' || themeWord === 'agility') {
        // Rogue-themed names
        const roguePrefixes = ['Shadow', 'Night', 'Silent', 'Swift', 'Dusk', 'Quick'];
        const rogueSuffixes = ['step', 'hand', 'blade', 'cloak', 'mask', 'razor'];
        
        prefixIndex = Math.floor(Math.random() * roguePrefixes.length);
        suffixIndex = Math.floor(Math.random() * rogueSuffixes.length);
        
        lastName = roguePrefixes[prefixIndex] + rogueSuffixes[suffixIndex];
      }
      else {
        // Divine/cleric-themed names
        const divinePrefixes = ['Light', 'Dawn', 'True', 'Holy', 'Ever', 'Divine'];
        const divineSuffixes = ['blessing', 'prayer', 'hope', 'faith', 'heart', 'spirit'];
        
        prefixIndex = Math.floor(Math.random() * divinePrefixes.length);
        suffixIndex = Math.floor(Math.random() * divineSuffixes.length);
        
        lastName = divinePrefixes[prefixIndex] + divineSuffixes[suffixIndex];
      }
      
      names.push(`${firstName} ${lastName}`);
    }
    
    return names;
  };
  
  // Generate name suggestions when both cards are drawn
  useEffect(() => {
    if (raceCard && classCard && currentStep === 'summary') {
      const names = generateNameSuggestions();
      setSuggestedNames(names);
      
      // Set the first name as selected by default
      if (names.length > 0) {
        setSelectedName(names[0]);
      }
    }
  }, [raceCard, classCard, currentStep]);
  
  // Card meaning displays
  const renderCardMeaningTable = (type) => {
    const dataSource = type === 'race' ? raceDescriptions : classDescriptions;
    const suitData = dataSource[type === 'race' && raceCard ? raceCard.suit : classCard ? classCard.suit : 'hearts'];
    
    return (
      <div className="card-meaning">
        <h4>Card Meanings for {type === 'race' ? raceCard?.suit : classCard?.suit} Suit</h4>
        <table className="card-meaning-table">
          <thead>
            <tr>
              <th>Card</th>
              <th>{type === 'race' ? 'Race' : 'Class'}</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(suitData).slice(0, 5).map(([rank, description]) => (
              <tr key={rank}>
                <td className={`suit-${type === 'race' && raceCard ? raceCard.suit : classCard ? classCard.suit : 'hearts'}`}>
                  {rank.charAt(0).toUpperCase() + rank.slice(1)}
                </td>
                <td>{description.split(' - ')[0]}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', color: '#61dafb' }}>
                ...and more
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
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
          
          <div className="card-meaning">
            <h4>Suit Meanings for Race</h4>
            <table className="card-meaning-table">
              <tbody>
                <tr>
                  <td className="suit-hearts">Hearts</td>
                  <td>Mainland Races - Common races of the central kingdoms</td>
                </tr>
                <tr>
                  <td className="suit-diamonds">Diamonds</td>
                  <td>Aquatic Races - Beings with connections to water and the seas</td>
                </tr>
                <tr>
                  <td className="suit-clubs">Clubs</td>
                  <td>Forest Races - Creatures with ties to woodlands and nature</td>
                </tr>
                <tr>
                  <td className="suit-spades">Spades</td>
                  <td>Mountain Races - Beings who dwell in highlands and peaks</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="card-deck">
            <div className="card-type-indicator">Race Card</div>
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
            <div className="card-holder-container">
              <div className="card-type-indicator">Race Card</div>
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
            </div>
            
            {!cardFaceDown && (
              <div className="race-info">
                <h3>{raceData.name}</h3>
                <p>{raceData.description.split(' - ')[1]}</p>
                {renderCardMeaningTable('race')}
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
          
          <div className="card-meaning">
            <h4>Suit Meanings for Class</h4>
            <table className="card-meaning-table">
              <tbody>
                <tr>
                  <td className="suit-hearts">Hearts</td>
                  <td>Warrior Classes - Physical combat specialists</td>
                </tr>
                <tr>
                  <td className="suit-diamonds">Diamonds</td>
                  <td>Wizard Classes - Masters of arcane magic</td>
                </tr>
                <tr>
                  <td className="suit-clubs">Clubs</td>
                  <td>Rogue Classes - Specialists in stealth and trickery</td>
                </tr>
                <tr>
                  <td className="suit-spades">Spades</td>
                  <td>Cleric Classes - Wielders of divine power</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="card-deck">
            <div className="card-type-indicator">Class Card</div>
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
            <div className="card-holder-container">
              <div className="card-type-indicator">Class Card</div>
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
            </div>
            
            {!cardFaceDown && (
              <div className="class-info">
                <h3>{classData.name}</h3>
                <p>{classData.description.split(' - ')[1]}</p>
                {renderCardMeaningTable('class')}
              </div>
            )}
          </div>
          {!cardFaceDown && (
            <button 
              className="ceremony-button"
              onClick={() => setCurrentStep('summary')}
            >
              Continue to Name Selection
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
          
          <div className="name-selection">
            <h3>Choose Your Character's Name</h3>
            <p>Select one of these names inspired by your race and class, or enter your own:</p>
            
            <div className="suggested-names">
              {suggestedNames.map((name, index) => (
                <button 
                  key={index} 
                  className={`name-suggestion ${selectedName === name ? 'selected' : ''}`}
                  onClick={() => setSelectedName(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            
            <div className="custom-name">
              <input 
                type="text" 
                value={selectedName} 
                onChange={(e) => setSelectedName(e.target.value)} 
                placeholder="Enter character name"
                className="name-input"
              />
            </div>
          </div>
          
          <button 
            className="ceremony-button complete-button"
            onClick={completeDrawing}
            disabled={!selectedName.trim()}
          >
            Accept Your Destiny
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDrawingCeremony;
