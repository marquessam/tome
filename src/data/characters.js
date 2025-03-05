// characters.js - Complete character creation data including races, classes and stats
const characterData = {
  // CLASSES - Determined by suit
  classes: {
    hearts: {
      name: "Warrior",
      description: "Masters of martial combat who rely on physical strength and battlefield prowess.",
      baseStats: {
        strength: 8,
        dexterity: 5,
        intelligence: 3,
        wisdom: 4,
        constitution: 7,
        charisma: 5
      },
      bonuses: {
        strength: 2,
        constitution: 2
      },
      startingHealth: 12,
      healthPerLevel: 8,
      abilities: [
        {
          name: "Battle Stance",
          description: "Enter a focused combat stance, gaining +1 to attack and damage for 3 turns.",
          level: 1
        },
        {
          name: "Second Wind",
          description: "Recover 1d6 + constitution modifier health as an action, usable once per combat.",
          level: 2
        },
        {
          name: "Cleave",
          description: "After defeating an enemy, immediately make another attack against a different adjacent enemy.",
          level: 4
        },
        {
          name: "Unstoppable",
          description: "Once per day, ignore all damage from a single attack or spell.",
          level: 6
        }
      ],
      startingEquipment: [
        "One-handed melee weapon",
        "Shield or second one-handed weapon",
        "Medium armor",
        "Adventurer's pack"
      ],
      proficiencies: [
        "All melee weapons",
        "All armor types",
        "Shields",
        "Basic ranged weapons"
      ]
    },
    diamonds: {
      name: "Wizard",
      description: "Scholarly magic-users who harness arcane energies through extensive study and preparation.",
      baseStats: {
        strength: 3,
        dexterity: 4,
        intelligence: 8,
        wisdom: 6,
        constitution: 4,
        charisma: 5
      },
      bonuses: {
        intelligence: 2,
        wisdom: 1
      },
      startingHealth: 6,
      healthPerLevel: 4,
      abilities: [
        {
          name: "Spellcasting",
          description: "Cast arcane spells using intelligence as your spellcasting ability.",
          level: 1
        },
        {
          name: "Arcane Recovery",
          description: "Once per day, recover spell slots with a combined level equal to half your wizard level.",
          level: 1
        },
        {
          name: "Spell Mastery",
          description: "Choose a spell you know - you can cast it without expending a spell slot.",
          level: 3
        },
        {
          name: "Elemental Affinity",
          description: "Choose an element - your spells of that element deal additional damage equal to your intelligence modifier.",
          level: 5
        }
      ],
      startingEquipment: [
        "Spellbook",
        "Arcane focus",
        "Simple weapon",
        "Scholar's pack"
      ],
      proficiencies: [
        "Daggers",
        "Staves",
        "Light armor",
        "Arcane implements"
      ]
    },
    clubs: {
      name: "Rogue",
      description: "Skilled infiltrators and precise attackers who excel at stealth, trickery, and finding weak points.",
      baseStats: {
        strength: 4,
        dexterity: 8,
        intelligence: 5,
        wisdom: 4,
        constitution: 4,
        charisma: 6
      },
      bonuses: {
        dexterity: 2,
        charisma: 1
      },
      startingHealth: 8,
      healthPerLevel: 6,
      abilities: [
        {
          name: "Sneak Attack",
          description: "Deal extra damage (1d6 at level 1, increasing every other level) when attacking with advantage or when an ally is adjacent to your target.",
          level: 1
        },
        {
          name: "Cunning Action",
          description: "Use a bonus action to Dash, Disengage, or Hide.",
          level: 2
        },
        {
          name: "Uncanny Dodge",
          description: "When hit by an attack, use your reaction to halve the damage.",
          level: 4
        },
        {
          name: "Evasion",
          description: "When subjected to an effect that allows a Dexterity saving throw for half damage, take no damage on success and half damage on failure.",
          level: 6
        }
      ],
      startingEquipment: [
        "Two daggers",
        "Short sword",
        "Light armor",
        "Thieves' tools",
        "Burglar's pack"
      ],
      proficiencies: [
        "Light and medium armor",
        "Simple weapons",
        "Finesse weapons",
        "Thieves' tools",
        "Stealth skills"
      ]
    },
    spades: {
      name: "Cleric",
      description: "Divine spellcasters who channel the power of their deity to heal allies and smite enemies.",
      baseStats: {
        strength: 5,
        dexterity: 3,
        intelligence: 4,
        wisdom: 8,
        constitution: 6,
        charisma: 6
      },
      bonuses: {
        wisdom: 2,
        charisma: 1
      },
      startingHealth: 10,
      healthPerLevel: 6,
      abilities: [
        {
          name: "Divine Spellcasting",
          description: "Cast divine spells using wisdom as your spellcasting ability.",
          level: 1
        },
        {
          name: "Channel Divinity",
          description: "Channel divine energy to fuel magical effects such as Turn Undead.",
          level: 2
        },
        {
          name: "Divine Strike",
          description: "Once per turn, when you hit with a weapon attack, deal an extra 1d8 damage of your deity's associated energy type.",
          level: 3
        },
        {
          name: "Divine Intervention",
          description: "Call on your deity for direct intervention. Chance of success equals your cleric level percentage.",
          level: 5
        }
      ],
      startingEquipment: [
        "Mace or warhammer",
        "Shield",
        "Medium armor",
        "Holy symbol",
        "Priest's pack"
      ],
      proficiencies: [
        "Simple weapons",
        "Medium and heavy armor",
        "Shields",
        "Divine implements"
      ]
    }
  },

  // RACES - Base data applies to hearts suit, other suits may modify
  races: {
    // Cards Ace through 10
    standardRaces: {
      ace: {
        name: "Human",
        description: "A versatile and common race.",
        bonuses: {
          // Each stat gets +1
          strength: 1,
          dexterity: 1,
          intelligence: 1,
          wisdom: 1,
          constitution: 1,
          charisma: 1
        },
        abilities: [
          {
            name: "Adaptability",
            description: "Humans can learn new skills quickly. Gain proficiency in one additional skill of your choice."
          },
          {
            name: "Versatile Culture",
            description: "Humans come from diverse backgrounds. You know one additional language of your choice."
          }
        ],
        variants: {
          hearts: { name: "Human (Heartland)", additionalBonus: { constitution: 1 } },
          diamonds: { name: "Human (Coastal)", additionalBonus: { intelligence: 1 } },
          clubs: { name: "Human (Forest)", additionalBonus: { wisdom: 1 } },
          spades: { name: "Human (Mountain)", additionalBonus: { strength: 1 } }
        }
      },
      "2": {
        name: "Dwarf",
        description: "Known for their sturdy and resilient nature.",
        bonuses: {
          constitution: 2,
          wisdom: 1
        },
        abilities: [
          {
            name: "Darkvision",
            description: "Dwarves can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light."
          },
          {
            name: "Dwarven Resilience",
            description: "Advantage on saving throws against poison, and resistance against poison damage."
          },
          {
            name: "Stonecunning",
            description: "Double proficiency bonus when making Intelligence checks related to the origin of stonework."
          }
        ],
        variants: {
          hearts: { name: "Hill Dwarf", additionalBonus: { wisdom: 1 } },
          diamonds: { name: "Deep Dwarf", additionalBonus: { intelligence: 1 } },
          clubs: { name: "Mountain Dwarf", additionalBonus: { strength: 1 } },
          spades: { name: "Forge Dwarf", additionalBonus: { constitution: 1 } }
        }
      },
      "3": {
        name: "Elf",
        description: "Elegant and attuned to nature.",
        bonuses: {
          dexterity: 2,
          intelligence: 1
        },
        abilities: [
          {
            name: "Darkvision",
            description: "Elves can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light."
          },
          {
            name: "Keen Senses",
            description: "Proficiency in the Perception skill."
          },
          {
            name: "Fey Ancestry",
            description: "Advantage on saving throws against being charmed, and magic can't put you to sleep."
          },
          {
            name: "Trance",
            description: "Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day."
          }
        ],
        variants: {
          hearts: { name: "High Elf", additionalBonus: { intelligence: 1 } },
          diamonds: { name: "Sea Elf", additionalBonus: { constitution: 1 } },
          clubs: { name: "Wood Elf", additionalBonus: { wisdom: 1 } },
          spades: { name: "Dark Elf", additionalBonus: { charisma: 1 } }
        }
      },
      "4": {
        name: "Orc",
        description: "Strong and fierce warriors.",
        bonuses: {
          strength: 2,
          constitution: 1
        },
        abilities: [
          {
            name: "Darkvision",
            description: "Orcs can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light."
          },
          {
            name: "Aggressive",
            description: "As a bonus action, you can move up to your speed toward an enemy you can see or hear."
          },
          {
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          }
        ],
        variants: {
          hearts: { name: "Mountain Orc", additionalBonus: { strength: 1 } },
          diamonds: { name: "Coastal Orc", additionalBonus: { dexterity: 1 } },
          clubs: { name: "Forest Orc", additionalBonus: { wisdom: 1 } },
          spades: { name: "Cave Orc", additionalBonus: { constitution: 1 } }
        }
      },
      "5": {
        name: "Halfling",
        description: "Small, agile, and stealthy.",
        bonuses: {
          dexterity: 2,
          charisma: 1
        },
        abilities: [
          {
            name: "Lucky",
            description: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
          },
          {
            name: "Brave",
            description: "You have advantage on saving throws against being frightened."
          },
          {
            name: "Halfling Nimbleness",
            description: "You can move through the space of any creature that is of a size larger than yours."
          }
        ],
        variants: {
          hearts: { name: "Lightfoot Halfling", additionalBonus: { charisma: 1 } },
          diamonds: { name: "Water Halfling", additionalBonus: { wisdom: 1 } },
          clubs: { name: "Stout Halfling", additionalBonus: { constitution: 1 } },
          spades: { name: "Rock Halfling", additionalBonus: { strength: 1 } }
        }
      },
      "6": {
        name: "Gnome",
        description: "Inventive and curious tinkerers.",
        bonuses: {
          intelligence: 2,
          dexterity: 1
        },
        abilities: [
          {
            name: "Darkvision",
            description: "Gnomes can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light."
          },
          {
            name: "Gnome Cunning",
            description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
          },
          {
            name: "Tinker",
            description: "You have proficiency with artisan's tools (tinker's tools). Using these tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device."
          }
        ],
        variants: {
          hearts: { name: "Rock Gnome", additionalBonus: { constitution: 1 } },
          diamonds: { name: "Deep Gnome", additionalBonus: { wisdom: 1 } },
          clubs: { name: "Forest Gnome", additionalBonus: { dexterity: 1 } },
          spades: { name: "Mountain Gnome", additionalBonus: { strength: 1 } }
        }
      },
      "7": {
        name: "Ogre",
        description: "Creatures of enormous strength and appetite.",
        bonuses: {
          strength: 2,
          constitution: 2
        },
        penalties: {
          intelligence: -1,
          charisma: -1
        },
        abilities: [
          {
            name: "Powerful Build",
            description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
          },
          {
            name: "Thick Hide",
            description: "Your skin is tough and provides natural armor. Your AC equals 12 + your Constitution modifier."
          },
          {
            name: "Mighty Swing",
            description: "When you hit with a melee weapon attack, you deal an additional 1d4 damage."
          }
        ],
        variants: {
          hearts: { name: "Desert Ogre", additionalBonus: { constitution: 1 } },
          diamonds: { name: "Marsh Ogre", additionalBonus: { wisdom: 1 } },
          clubs: { name: "Forest Ogre", additionalBonus: { dexterity: 1 } },
          spades: { name: "Mountain Ogre", additionalBonus: { strength: 1 } }
        }
      },
      "8": {
        name: "Centaur",
        description: "Half-human, half-horse beings.",
        bonuses: {
          strength: 2,
          wisdom: 1,
          dexterity: 1
        },
        penalties: {
          charisma: -1
        },
        abilities: [
          {
            name: "Charge",
            description: "If you move at least 30 feet straight toward a target and then hit it with a melee attack, the target takes an extra 1d6 damage."
          },
          {
            name: "Hooves",
            description: "Your hooves are natural melee weapons, which you can use to make unarmed strikes. They deal 1d6 + your Strength modifier damage."
          },
          {
            name: "Equine Build",
            description: "You count as one size larger for your carrying capacity and the weight you can push or drag. Because of your hooves, you have disadvantage on climbing checks."
          }
        ],
        variants: {
          hearts: { name: "Desert Centaur", additionalBonus: { constitution: 1 } },
          diamonds: { name: "Coastal Centaur", additionalBonus: { intelligence: 1 } },
          clubs: { name: "Forest Centaur", additionalBonus: { wisdom: 1 } },
          spades: { name: "Mountain Centaur", additionalBonus: { strength: 1 } }
        }
      },
      "9": {
        name: "Pixie/Faerie",
        description: "Tiny and ethereal creatures with magical abilities.",
        bonuses: {
          dexterity: 3,
          charisma: 2
        },
        penalties: {
          strength: -2,
          constitution: -1
        },
        abilities: [
          {
            name: "Fairy Magic",
            description: "You know the minor illusion cantrip. When you reach 3rd level, you can cast sleep once per day. These spells use Charisma as your spellcasting ability."
          },
          {
            name: "Flight",
            description: "You have a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor."
          },
          {
            name: "Diminutive Size",
            description: "You are Tiny in size, which means you can move through the space of any creature, and you have disadvantage on Strength checks and advantage on Dexterity checks."
          }
        ],
        variants: {
          hearts: { name: "Fire Pixie", additionalBonus: { intelligence: 1 } },
          diamonds: { name: "Water Sprite", additionalBonus: { wisdom: 1 } },
          clubs: { name: "Forest Faerie", additionalBonus: { charisma: 1 } },
          spades: { name: "Mountain Sprite", additionalBonus: { dexterity: 1 } }
        }
      },
      "10": {
        name: "Treant",
        description: "Tree-like beings with a connection to nature.",
        bonuses: {
          strength: 2,
          constitution: 2,
          wisdom: 2
        },
        penalties: {
          dexterity: -2
        },
        abilities: [
          {
            name: "Photosynthesis",
            description: "If you spend at least 4 hours in direct sunlight, you don't need to eat or drink that day and you recover additional hit points equal to your level when you complete a long rest."
          },
          {
            name: "Barkskin",
            description: "Your woody skin gives you natural armor. Your AC equals 13 + your Constitution modifier (maximum 3)."
          },
          {
            name: "Natural Connection",
            description: "You can speak with plants and have advantage on all Wisdom (Survival) checks made in forest environments."
          },
          {
            name: "Slow Movement",
            description: "Your base walking speed is 20 feet, and your speed isn't reduced by wearing heavy armor."
          }
        ],
        variants: {
          hearts: { name: "Desert Treant", additionalBonus: { constitution: 1 } },
          diamonds: { name: "Coastal Treant", additionalBonus: { intelligence: 1 } },
          clubs: { name: "Ancient Treant", additionalBonus: { wisdom: 1 } },
          spades: { name: "Mountain Treant", additionalBonus: { strength: 1 } }
        }
      }
    },
    
    // Face cards (require additional draws)
    faceRaces: {
      jack: {
        name: "Beast Folk",
        description: "Humanoid creatures with a beastly nature.",
        baseBonuses: {
          strength: 1,
          dexterity: 1,
          constitution: 1
        },
        baseAbilities: [
          {
            name: "Natural Weapon",
            description: "You have a natural weapon (claws, fangs, horns, etc.) that you can use to make unarmed strikes. Your unarmed strikes deal 1d6 + your Strength modifier damage."
          },
          {
            name: "Keen Senses",
            description: "You have proficiency in the Perception skill."
          }
        ],
        subtypes: {
          hearts: {
            name: "Gnolls",
            description: "Hyena-like humanoids known for their savage nature and pack mentality.",
            additionalBonuses: {
              strength: 1,
              constitution: 1
            },
            additionalAbilities: [
              {
                name: "Rampage",
                description: "When you reduce a creature to 0 hit points with a melee attack on your turn, you can take a bonus action to move up to half your speed and make a bite attack."
              }
            ]
          },
          diamonds: {
            name: "Lizardfolk",
            description: "Reptilian humanoids with natural armor and a connection to swamp environments.",
            additionalBonuses: {
              constitution: 2
            },
            additionalAbilities: [
              {
                name: "Natural Armor",
                description: "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier."
              },
              {
                name: "Hold Breath",
                description: "You can hold your breath for up to 15 minutes at a time."
              }
            ]
          },
          clubs: {
            name: "Minotaur",
            description: "Bull-headed humanoids with a natural sense of direction and powerful horns.",
            additionalBonuses: {
              strength: 2
            },
            additionalAbilities: [
              {
                name: "Horns",
                description: "Your horns are natural melee weapons, which you can use to make unarmed strikes. When you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier."
              },
              {
                name: "Goring Rush",
                description: "When you use the Dash action during your turn, you can make a melee attack with your horns as a bonus action."
              }
            ]
          },
          spades: {
            name: "Avian",
            description: "Bird-like humanoids with wings and hollow bones.",
            additionalBonuses: {
              dexterity: 2
            },
            additionalAbilities: [
              {
                name: "Flight",
                description: "You have a flying speed of 30 feet. To use this speed, you can't be wearing medium or heavy armor."
              },
              {
                name: "Dive Attack",
                description: "If you are flying and dive at least 30 feet straight toward a target and then hit it with a melee weapon attack, the attack deals an extra 1d6 damage."
              }
            ]
          }
        }
      },
      queen: {
        name: "Elemental",
        description: "A race connected to elemental forces.",
        baseBonuses: {
          constitution: 2
        },
        baseAbilities: [
          {
            name: "Elemental Resistance",
            description: "You have resistance to one type of elemental damage based on your subtype."
          },
          {
            name: "Elemental Recovery",
            description: "When you take a short rest in your elemental environment (fire for fire elemental, water for water elemental, etc.), you recover additional hit points equal to your level."
          }
        ],
        subtypes: {
          hearts: {
            name: "Fire Elemental",
            description: "Beings with flames coursing through their veins, resistant to heat and fire damage.",
            additionalBonuses: {
              dexterity: 1,
              charisma: 1
            },
            additionalAbilities: [
              {
                name: "Produce Flame",
                description: "You know the produce flame cantrip. Constitution is your spellcasting ability for it."
              },
              {
                name: "Fire Resistance",
                description: "You have resistance to fire damage."
              }
            ]
          },
          diamonds: {
            name: "Water Elemental",
            description: "Beings with water flowing through them, resistant to cold and water pressure.",
            additionalBonuses: {
              wisdom: 1,
              charisma: 1
            },
            additionalAbilities: [
              {
                name: "Shape Water",
                description: "You know the shape water cantrip. Constitution is your spellcasting ability for it."
              },
              {
                name: "Cold Resistance",
                description: "You have resistance to cold damage."
              },
              {
                name: "Amphibious",
                description: "You can breathe both air and water."
              }
            ]
          },
          clubs: {
            name: "Earth Elemental",
            description: "Beings with stone and soil in their makeup, resistant to physical damage.",
            additionalBonuses: {
              strength: 1,
              wisdom: 1
            },
            additionalAbilities: [
              {
                name: "Mold Earth",
                description: "You know the mold earth cantrip. Constitution is your spellcasting ability for it."
              },
              {
                name: "Earth Walk",
                description: "You can move across difficult terrain made of earth or stone without expending extra movement."
              },
              {
                name: "Stone Endurance",
                description: "When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total."
              }
            ]
          },
          spades: {
            name: "Air Elemental",
            description: "Beings with wind and storm in their essence, resistant to lightning and thunder damage.",
            additionalBonuses: {
              dexterity: 1,
              intelligence: 1
            },
            additionalAbilities: [
              {
                name: "Gust",
                description: "You know the gust cantrip. Constitution is your spellcasting ability for it."
              },
              {
                name: "Lightning Resistance",
                description: "You have resistance to lightning damage."
              },
              {
                name: "Unencumbered",
                description: "Your walking speed increases by 5 feet, and falling damage is reduced by an amount equal to five times your level."
              }
            ]
          }
        }
      },
      king: {
        name: "Dragonborn",
        description: "Dragon-like humanoid creatures.",
        baseBonuses: {
          strength: 2,
          charisma: 1
        },
        baseAbilities: [
          {
            name: "Draconic Ancestry",
            description: "You have draconic ancestry that grants you a special breath weapon and damage resistance."
          }
        ],
        subtypes: {
          hearts: {
            name: "Fire Dragonborn",
            description: "Dragonborn with red, gold, or brass ancestry, wielding fire breath.",
            additionalBonuses: {
              charisma: 1
            },
            additionalAbilities: [
              {
                name: "Fire Breath",
                description: "You can use your action to exhale destructive flames. Your breath weapon deals fire damage in a 15-foot cone. Each creature in that area must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature takes 2d6 fire damage on a failed save, and half as much damage on a successful one. This damage increases by 1d6 when you reach 5th level (3d6), 11th level (4d6), and 17th level (5d6). You can use this ability once per short or long rest."
              },
              {
                name: "Fire Resistance",
                description: "You have resistance to fire damage."
              }
            ]
          },
          diamonds: {
            name: "Ice Dragonborn",
            description: "Dragonborn with white or silver ancestry, wielding ice breath.",
            additionalBonuses: {
              constitution: 1
            },
            additionalAbilities: [
              {
                name: "Ice Breath",
                description: "You can use your action to exhale freezing cold. Your breath weapon deals cold damage in a 15-foot cone. Each creature in that area must make a Constitution saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature takes 2d6 cold damage on a failed save, and half as much damage on a successful one. This damage increases by 1d6 when you reach 5th level (3d6), 11th level (4d6), and 17th level (5d6). You can use this ability once per short or long rest."
              },
              {
                name: "Cold Resistance",
                description: "You have resistance to cold damage."
              }
            ]
          },
          clubs: {
            name: "Poison Dragonborn",
            description: "Dragonborn with green or copper ancestry, wielding poison breath.",
            additionalBonuses: {
              constitution: 1
            },
            additionalAbilities: [
              {
                name: "Poison Breath",
                description: "You can use your action to exhale poisonous gas. Your breath weapon deals poison damage in a 15-foot cone. Each creature in that area must make a Constitution saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature takes 2d6 poison damage on a failed save, and half as much damage on a successful one. This damage increases by 1d6 when you reach 5th level (3d6), 11th level (4d6), and 17th level (5d6). You can use this ability once per short or long rest."
              },
              {
                name: "Poison Resistance",
                description: "You have resistance to poison damage."
              }
            ]
          },
          spades: {
            name: "Lightning Dragonborn",
            description: "Dragonborn with blue or bronze ancestry, wielding lightning breath.",
            additionalBonuses: {
              dexterity: 1
            },
            additionalAbilities: [
              {
                name: "Lightning Breath",
                description: "You can use your action to exhale a bolt of lightning. Your breath weapon deals lightning damage in a 30-foot line that is 5 feet wide. Each creature in that line must make a Dexterity saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature takes 2d6 lightning damage on a failed save, and half as much damage on a successful one. This damage increases by 1d6 when you reach 5th level (3d6), 11th level (4d6), and 17th level (5d6). You can use this ability once per short or long rest."
              },
              {
                name: "Lightning Resistance",
                description: "You have resistance to lightning damage."
              }
            ]
          }
        }
      }
    }
  }
};

// Helper function to get class from card
function getClassFromCard(card) {
  const { suit } = card;
  
  // Get the class data based on suit
  if (characterData.classes[suit]) {
    return {
      ...characterData.classes[suit],
      cardSuit: suit
    };
  }
  
  // Default to warrior if somehow an invalid suit appears
  return {
    ...characterData.classes.hearts,
    cardSuit: 'hearts'
  };
}

// Helper function to get race from card
function getRaceFromCard(card, subtypeCard = null) {
  const { suit, rank } = card;
  
  // Handle face cards (Jack, Queen, King)
  if (rank === 'jack' || rank === 'queen' || rank === 'king') {
    const faceRace = characterData.races.faceRaces[rank];
    
    // If no subtype card provided, just return the base race
    if (!subtypeCard) {
      return {
        ...faceRace,
        name: faceRace.name,
        description: faceRace.description,
        bonuses: faceRace.baseBonuses,
        abilities: faceRace.baseAbilities,
        cardRank: rank,
        cardSuit: suit,
        requiresSubtype: true
      };
    }
    
    // If subtype card provided, determine the full subrace
    const subSuit = subtypeCard.suit;
    if (faceRace.subtypes[subSuit]) {
      const subtype = faceRace.subtypes[subSuit];
      
      // Combine base race with subtype
      return {
        ...faceRace,
        name: `${subtype.name} ${faceRace.name}`,
        description: subtype.description,
        bonuses: {...faceRace.baseBonuses, ...subtype.additionalBonuses},
        abilities: [...faceRace.baseAbilities, ...subtype.additionalAbilities],
        cardRank: rank,
        cardSuit: suit,
        subtypeCardSuit: subSuit
      };
    }
  }
  
  // Handle standard races (Ace through 10)
  if (characterData.races.standardRaces[rank]) {
    const baseRace = characterData.races.standardRaces[rank];
    
    // If the suit is hearts or there's no variant for this suit, return the base race
    if (suit === 'hearts' || !baseRace.variants[suit]) {
      return {
        ...baseRace,
        cardRank: rank,
        cardSuit: suit
      };
    }
    
    // Apply variant based on suit
    const variant = baseRace.variants[suit];
    return {
      ...baseRace,
      name: variant.name,
      bonuses: {...baseRace.bonuses, ...variant.additionalBonus},
      cardRank: rank,
      cardSuit: suit
    };
  }
  
  // Default fallback (shouldn't happen with valid cards)
  return {
    name: "Unknown Race",
    description: "A mysterious, unidentified race.",
    bonuses: {},
    abilities: [],
    cardRank: rank,
    cardSuit: suit
  };
}

// Calculate base stats for a character based on race and class
function calculateBaseStats(race, characterClass) {
  // Start with default stats
  const baseStats = {
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    wisdom: 10,
    constitution: 10,
    charisma: 10
  };
  
  // Apply class base stats
  if (characterClass.baseStats) {
    Object.keys(characterClass.baseStats).forEach(stat => {
      baseStats[stat] = characterClass.baseStats[stat];
    });
  }
  
  // Apply class bonuses
  if (characterClass.bonuses) {
    Object.keys(characterClass.bonuses).forEach(stat => {
      baseStats[stat] += characterClass.bonuses[stat];
    });
  }
  
  // Apply race bonuses
  if (race.bonuses) {
    Object.keys(race.bonuses).forEach(stat => {
      baseStats[stat] += race.bonuses[stat];
    });
  }
  
  // Apply race penalties if any
  if (race.penalties) {
    Object.keys(race.penalties).forEach(stat => {
      baseStats[stat] += race.penalties[stat]; // penalties are already negative values
    });
  }
  
  return baseStats;
}

// Calculate derived stats like health, initiative, etc.
function calculateDerivedStats(baseStats, race, characterClass, level = 1) {
  // Default derived stats
  const derivedStats = {
    maxHealth: 0,
    initiative: Math.floor((baseStats.dexterity - 10) / 2),
    speed: 30, // Default speed
    armorClass: 10 + Math.floor((baseStats.dexterity - 10) / 2) // Default AC (unarmored)
  };
  
  // Calculate health based on class and constitution
  const constitutionModifier = Math.floor((baseStats.constitution - 10) / 2);
  
  // First level health is maximum
  derivedStats.maxHealth = characterClass.startingHealth + constitutionModifier;
  
  // Add health for additional levels
  if (level > 1) {
    // For levels 2 and up, add average hit die + constitution modifier
    for (let i = 2; i <= level; i++) {
      derivedStats.maxHealth += Math.floor(characterClass.healthPerLevel / 2) + 1 + constitutionModifier;
    }
  }
  
  // Adjust speed based on race (some races have different speeds)
  if (race.name.includes("Centaur")) {
    derivedStats.speed = 40;
  } else if (race.name.includes("Halfling") || race.name.includes("Gnome")) {
    derivedStats.speed = 25;
  } else if (race.name.includes("Treant")) {
    derivedStats.speed = 20;
  }
  
  return derivedStats;
}

// Create a complete character from race and class cards
function createCharacter(characterName, raceCard, classCard, subtypeCard = null, level = 1) {
  // Get race and class data
  const race = getRaceFromCard(raceCard, subtypeCard);
  const characterClass = getClassFromCard(classCard);
  
  // Calculate stats
  const baseStats = calculateBaseStats(race, characterClass);
  const derivedStats = calculateDerivedStats(baseStats, race, characterClass, level);
  
  // Build character object
  const character = {
    name: characterName,
    race: race.name,
    class: characterClass.name,
    level: level,
    stats: baseStats,
    health: derivedStats.maxHealth,
    maxHealth: derivedStats.maxHealth,
    initiative: derivedStats.initiative,
    speed: derivedStats.speed,
    armorClass: derivedStats.armorClass,
    abilities: [...race.abilities],
    cardData: {
      raceCard,
      classCard,
      subtypeCard
    }
  };
  
  // Add class abilities based on level
  characterClass.abilities.forEach(ability => {
    if (ability.level <= level) {
      character.abilities.push(ability);
    }
  });
  
  return character;
}

// Check if a race requires a subtype card (face cards do)
function requiresSubtypeCard(card) {
  const { rank } = card;
  return rank === 'jack' || rank === 'queen' || rank === 'king';
}

// Export functions and data
export default characterData;
export {
  getClassFromCard,
  getRaceFromCard,
  calculateBaseStats,
  calculateDerivedStats,
  createCharacter,
  requiresSubtypeCard
};
