// src/utils/nameGenerator.js

// Name component data banks
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
    'Human': ['Hu', 'Man', 'Bel', 'Con', 'Ed', 'Greg', 'Rob', 'Wes', 'Dan', 'Al', 'Mar', 'Lin', 'Jes'],
    'Dwarf': ['Dur', 'Thor', 'Bal', 'Bom', 'Thrum', 'Gim', 'Grom', 'Bar', 'Mor', 'Brun', 'Kaz', 'Tharn'],
    'Elf': ['Ele', 'Gala', 'Thal', 'Aur', 'Leg', 'Tae', 'Cel', 'Ar', 'El', 'Fae', 'Gil', 'Cal', 'Fin'],
    'Orc': ['Grum', 'Mog', 'Gor', 'Zug', 'Kra', 'Thok', 'Ur', 'Rok', 'Dak', 'Mak', 'Grash', 'Drog'],
    'Dragonborn': ['Drag', 'Kala', 'Rex', 'Vex', 'Bal', 'Dor', 'Gar', 'Kri', 'Nari', 'Rho', 'Sha', 'Taz'],
    'Halfling': ['Mer', 'Pip', 'Sam', 'Wil', 'Ros', 'Tan', 'Cor', 'Odo', 'Fro', 'Bil', 'Per', 'Hil'],
    'Gnome': ['Gim', 'Fiz', 'Zig', 'Bix', 'Nim', 'Dix', 'Jink', 'Tink', 'Glim', 'Cog', 'Sprk', 'Giz'],
    'Ogre': ['Grum', 'Kra', 'Mog', 'Bro', 'Cru', 'Thu', 'Sma', 'Gro', 'Dum', 'Thud', 'Crus', 'Mun'],
    'Centaur': ['Nes', 'Chi', 'Cal', 'Hyl', 'Sky', 'Gal', 'Terra', 'Fel', 'Swi', 'Wind', 'Hoof', 'Trot']
  },
  // Class-specific suffixes
  classSuffixes: {
    'Warrior': ['arm', 'ax', 'blade', 'hammer', 'fist', 'shield', 'sword', 'steel', 'iron', 'battle'],
    'Wizard': ['spell', 'wand', 'orb', 'tome', 'star', 'rune', 'mage', 'arcane', 'cast', 'mystic'],
    'Rogue': ['shadow', 'dagger', 'mask', 'cloak', 'step', 'swift', 'silent', 'dark', 'quick', 'stealth'],
    'Cleric': ['prayer', 'light', 'faith', 'saint', 'bless', 'hope', 'divine', 'heal', 'pure', 'holy']
  }
};

/**
 * Generate a character name based on card draws and character data
 * @param {Object} raceCard - The card that determined the character's race
 * @param {Object} classCard - The card that determined the character's class
 * @param {String} raceName - The name of the character's race
 * @param {String} className - The name of the character's class
 * @param {Number} count - Number of name suggestions to generate
 * @returns {Array} Array of generated name suggestions
 */
export function generateCharacterNames(raceCard, classCard, raceName, className, count = 5) {
  if (!raceCard || !classCard) return [];
  
  const suitValues = { hearts: 0, diamonds: 1, clubs: 2, spades: 3 };
  const rankValues = { 
    'ace': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7, '9': 8, 
    '10': 9, 'jack': 10, 'queen': 11, 'king': 12 
  };
  
  // Get the appropriate component sets based on race and class
  const racePrefixes = nameComponents.racePrefixes[raceName.split(' ')[0]] || nameComponents.firstNamePrefixes;
  const classSuffixes = nameComponents.classSuffixes[className.split(' ')[0]] || nameComponents.firstNameSuffixes;
  
  const names = [];
  
  // Generate the requested number of unique name suggestions
  for (let i = 0; i < count; i++) {
    // Generate first name using different methods for variety
    let firstName, lastName;
    
    switch (i % 5) {
      // Method 1: Based on card values
      case 0:
        const raceIndex = (suitValues[raceCard.suit] * 13 + rankValues[raceCard.rank]) % racePrefixes.length;
        const classIndex = (suitValues[classCard.suit] * 13 + rankValues[classCard.rank]) % classSuffixes.length;
        firstName = racePrefixes[raceIndex] + classSuffixes[classIndex];
        break;
      
      // Method 2: Random components with race influence
      case 1:
        const racePrefix = racePrefixes[Math.floor(Math.random() * racePrefixes.length)];
        const randomSuffix = nameComponents.firstNameSuffixes[Math.floor(Math.random() * nameComponents.firstNameSuffixes.length)];
        firstName = racePrefix + randomSuffix;
        break;
      
      // Method 3: Random components with class influence
      case 2:
        const randomPrefix = nameComponents.firstNamePrefixes[Math.floor(Math.random() * nameComponents.firstNamePrefixes.length)];
        const classSuffix = classSuffixes[Math.floor(Math.random() * classSuffixes.length)];
        firstName = randomPrefix + classSuffix;
        break;
      
      // Method 4-5: Fully random with theme influence  
      default:
        const prefix = nameComponents.firstNamePrefixes[Math.floor(Math.random() * nameComponents.firstNamePrefixes.length)];
        const suffix = nameComponents.firstNameSuffixes[Math.floor(Math.random() * nameComponents.firstNameSuffixes.length)];
        firstName = prefix + suffix;
    }
    
    // Last name generation using class's suit theme
    const suitTheme = nameComponents.suitThemes[classCard.suit];
    const themeWord = suitTheme[Math.floor(Math.random() * suitTheme.length)];
    
    // Theme-based name generation
    if (themeWord === 'valor' || themeWord === 'strength' || themeWord === 'courage') {
      // Warrior-themed names
      const warriorPrefixes = ['Iron', 'Battle', 'Storm', 'Thunder', 'Fire', 'Steel', 'Blade', 'War', 'Rage', 'Blood'];
      const warriorSuffixes = ['blade', 'fist', 'heart', 'shield', 'hammer', 'fury', 'bringer', 'sworn', 'born', 'might'];
      
      const prefixIndex = Math.floor(Math.random() * warriorPrefixes.length);
      const suffixIndex = Math.floor(Math.random() * warriorSuffixes.length);
      
      lastName = warriorPrefixes[prefixIndex] + warriorSuffixes[suffixIndex];
    } 
    else if (themeWord === 'magic' || themeWord === 'wisdom' || themeWord === 'arcane') {
      // Magic-themed names
      const magicPrefixes = ['Star', 'Moon', 'Spell', 'Rune', 'Crystal', 'Dream', 'Mind', 'Vision', 'Thought', 'Mist'];
      const magicSuffixes = ['weaver', 'singer', 'caller', 'seeker', 'walker', 'whisper', 'caster', 'shaper', 'dreamer', 'seer'];
      
      const prefixIndex = Math.floor(Math.random() * magicPrefixes.length);
      const suffixIndex = Math.floor(Math.random() * magicSuffixes.length);
      
      lastName = magicPrefixes[prefixIndex] + magicSuffixes[suffixIndex];
    }
    else if (themeWord === 'cunning' || themeWord === 'shadows' || themeWord === 'agility') {
      // Rogue-themed names
      const roguePrefixes = ['Shadow', 'Night', 'Silent', 'Swift', 'Dusk', 'Quick', 'Nimble', 'Dark', 'Deft', 'Phantom'];
      const rogueSuffixes = ['step', 'hand', 'blade', 'cloak', 'mask', 'razor', 'finger', 'strike', 'shade', 'stalker'];
      
      const prefixIndex = Math.floor(Math.random() * roguePrefixes.length);
      const suffixIndex = Math.floor(Math.random() * rogueSuffixes.length);
      
      lastName = roguePrefixes[prefixIndex] + rogueSuffixes[suffixIndex];
    }
    else {
      // Divine/cleric-themed names
      const divinePrefixes = ['Light', 'Dawn', 'True', 'Holy', 'Ever', 'Divine', 'Bright', 'Sacred', 'Blessed', 'Radiant'];
      const divineSuffixes = ['blessing', 'prayer', 'hope', 'faith', 'heart', 'spirit', 'light', 'grace', 'soul', 'vow'];
      
      const prefixIndex = Math.floor(Math.random() * divinePrefixes.length);
      const suffixIndex = Math.floor(Math.random() * divineSuffixes.length);
      
      lastName = divinePrefixes[prefixIndex] + divineSuffixes[suffixIndex];
    }
    
    names.push(`${firstName} ${lastName}`);
  }
  
  return names;
}

/**
 * Generate a completely random character name
 */
export function generateRandomName() {
  const prefix = nameComponents.firstNamePrefixes[Math.floor(Math.random() * nameComponents.firstNamePrefixes.length)];
  const suffix = nameComponents.firstNameSuffixes[Math.floor(Math.random() * nameComponents.firstNameSuffixes.length)];
  
  const lastName1 = nameComponents.lastNamePrefixes[Math.floor(Math.random() * nameComponents.lastNamePrefixes.length)];
  const lastName2 = nameComponents.lastNameSuffixes[Math.floor(Math.random() * nameComponents.lastNameSuffixes.length)];
  
  return `${prefix}${suffix} ${lastName1}${lastName2}`;
}

export default { generateCharacterNames, generateRandomName };
