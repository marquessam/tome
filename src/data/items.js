// items.js - Complete item data organized by category and suit
const items = {
  // WEAPONS (Hearts suit in the tables)
  weapons: {
    // Blades (Hearts subset)
    hearts: {
      ace: {
        name: "Rusty Dagger",
        description: "A weathered blade with a dulled edge and spots of oxidation, showing signs of neglect.",
        type: "weapon",
        subtype: "blade",
        rarity: "common",
        stats: {
          damage: 1,
          speed: 3,
          durability: 2
        },
        properties: ["Light", "Thrown"]
      },
      "2": {
        name: "Iron Shortsword",
        description: "A compact blade made of solid iron, well-suited for swift strikes and close combat.",
        type: "weapon",
        subtype: "blade",
        rarity: "common",
        stats: {
          damage: 2,
          speed: 2,
          durability: 4
        },
        properties: ["Light", "Versatile"]
      },
      "3": {
        name: "Steel Scimitar",
        description: "A curved blade forged from refined steel, designed for slashing with its sharp edge.",
        type: "weapon",
        subtype: "blade",
        rarity: "common",
        stats: {
          damage: 3,
          speed: 2,
          durability: 4
        },
        properties: ["Slashing", "Finesse"]
      },
      "4": {
        name: "Engraved Longsword",
        description: "A finely crafted sword featuring intricate designs etched onto its blade, reflecting its maker's skill.",
        type: "weapon",
        subtype: "blade",
        rarity: "uncommon",
        stats: {
          damage: 3,
          speed: 1,
          durability: 5
        },
        properties: ["Versatile", "Balanced"]
      },
      "5": {
        name: "Razor-sharp Rapier",
        description: "A slender, lightweight sword with a needle-like point, perfect for precise thrusting attacks.",
        type: "weapon",
        subtype: "blade",
        rarity: "uncommon",
        stats: {
          damage: 2,
          speed: 3,
          durability: 3
        },
        properties: ["Finesse", "Piercing"]
      },
      "6": {
        name: "Orcish Serrated Axes",
        description: "Brutal twin axes with jagged edges, emblematic of Orcish craftsmanship, meant for tearing through foes.",
        type: "weapon",
        subtype: "blade",
        rarity: "uncommon",
        stats: {
          damage: 4,
          speed: 1,
          durability: 4
        },
        properties: ["Dual Wield", "Brutal"]
      },
      "7": {
        name: "Dwarven Battleaxe",
        description: "A weighty, single-edged axe with a sturdy handle, embodying the robustness and durability of Dwarven smithing.",
        type: "weapon",
        subtype: "blade",
        rarity: "uncommon",
        stats: {
          damage: 4,
          speed: 1,
          durability: 6
        },
        properties: ["Cleaving", "Durable"]
      },
      "8": {
        name: "Damascus Steel Katana",
        description: "A gracefully curved blade made from folded steel, displaying the characteristic wavy patterns of Damascus forging.",
        type: "weapon",
        subtype: "blade",
        rarity: "rare",
        stats: {
          damage: 3,
          speed: 3,
          durability: 5
        },
        properties: ["Keen Edge", "Finesse"]
      },
      "9": {
        name: "Flame-imbued Broadsword",
        description: "A wide-bladed sword that, when swung, dances with ethereal flames, igniting its path.",
        type: "weapon",
        subtype: "blade",
        rarity: "rare",
        stats: {
          damage: 3,
          speed: 1,
          durability: 4,
          elementalDamage: {
            type: "fire",
            damage: 2
          }
        },
        properties: ["Fire Damage", "Intimidating"]
      },
      "10": {
        name: "Ceremonial Elvish Saber",
        description: "A slender, ornate blade adorned with Elvish motifs, primarily used in rituals and ceremonies but deadly in combat.",
        type: "weapon",
        subtype: "blade",
        rarity: "rare",
        stats: {
          damage: 3,
          speed: 2,
          durability: 4
        },
        properties: ["Finesse", "Ceremonial", "Elvish Craftsmanship"]
      },
      jack: {
        name: "Dual Moonblades",
        description: "A pair of shimmering, crescent-shaped swords that gleam like the moon, meant to be wielded together for a harmonious assault.",
        type: "weapon",
        subtype: "blade",
        rarity: "very rare",
        stats: {
          damage: 2,
          secondaryDamage: 2,
          speed: 3,
          durability: 5
        },
        properties: ["Dual Wield", "Lunar Connection", "Glowing"]
      },
      queen: {
        name: "Mythril Greatsword",
        description: "A massive blade forged from the rare and lightweight mythril metal, allowing for powerful strikes without being cumbersome.",
        type: "weapon",
        subtype: "blade",
        rarity: "very rare",
        stats: {
          damage: 5,
          speed: 2,
          durability: 7
        },
        properties: ["Two-handed", "Mythril", "Lightweight"]
      },
      king: {
        name: "Dragon-forged Claymore",
        description: "A two-handed sword infused with the fiery essence of a dragon, its blade forged in dragonflame, promising unparalleled strength and might.",
        type: "weapon",
        subtype: "blade",
        rarity: "legendary",
        stats: {
          damage: 6,
          speed: 1,
          durability: 8,
          elementalDamage: {
            type: "fire",
            damage: 3
          }
        },
        properties: ["Two-handed", "Dragon Essence", "Intimidating"]
      }
    },

    // Magic Weapons (Diamonds subset)
    diamonds: {
      ace: {
        name: "Novice's Wand of Sparks",
        description: "A beginner's wand that emits small bursts of electrical energy when wielded.",
        type: "weapon",
        subtype: "magic",
        rarity: "common",
        stats: {
          damage: 1,
          range: 4,
          manaCost: 1,
          elementalDamage: {
            type: "lightning",
            damage: 1
          }
        },
        properties: ["Ranged", "Lightning", "Beginner"]
      },
      "2": {
        name: "Apprentice Staff of the Flame",
        description: "A wooden staff imbued with the essence of fire, allowing its user to produce minor flames.",
        type: "weapon",
        subtype: "magic",
        rarity: "common",
        stats: {
          damage: 2,
          range: 3,
          manaCost: 1,
          elementalDamage: {
            type: "fire",
            damage: 1
          }
        },
        properties: ["Ranged", "Fire", "Focus"]
      },
      "3": {
        name: "Conjurer's Rod of Frost",
        description: "A slender rod that exudes a chilling aura, capable of summoning icy blasts.",
        type: "weapon",
        subtype: "magic",
        rarity: "common",
        stats: {
          damage: 2,
          range: 3,
          manaCost: 1,
          elementalDamage: {
            type: "ice",
            damage: 1
          }
        },
        properties: ["Ranged", "Ice", "Slowing"]
      },
      "4": {
        name: "Enchanter's Wand of Stonebinding",
        description: "A wand that grants its user the power to meld and manipulate stone surfaces at will.",
        type: "weapon",
        subtype: "magic",
        rarity: "uncommon",
        stats: {
          damage: 2,
          range: 2,
          manaCost: 2
        },
        properties: ["Ranged", "Earth", "Utility"]
      },
      "5": {
        name: "Sorcerer's Staff of Thunder",
        description: "A staff that resonates with the roar of thunder, enabling its wielder to call forth storms.",
        type: "weapon",
        subtype: "magic",
        rarity: "uncommon",
        stats: {
          damage: 3,
          range: 4,
          manaCost: 2,
          elementalDamage: {
            type: "lightning",
            damage: 2
          }
        },
        properties: ["Ranged", "Lightning", "Area Effect"]
      },
      "6": {
        name: "Wand of the Whispering Shadows",
        description: "A darkened wand that murmurs faintly, allowing its user to blend seamlessly into the shadows.",
        type: "weapon",
        subtype: "magic",
        rarity: "uncommon",
        stats: {
          damage: 2,
          range: 3,
          manaCost: 2
        },
        properties: ["Ranged", "Shadow", "Stealth"]
      },
      "7": {
        name: "Crystal Staff of the Moonlit Glade",
        description: "A luminescent staff crafted from moon crystals, radiating a gentle glow reminiscent of moonlit clearings.",
        type: "weapon",
        subtype: "magic",
        rarity: "uncommon",
        stats: {
          damage: 3,
          range: 4,
          manaCost: 2,
          healing: 1
        },
        properties: ["Ranged", "Light", "Healing"]
      },
      "8": {
        name: "Mystic's Rod of Elemental Fury",
        description: "A rod infused with the raw power of the elements, granting its user command over fire, water, earth, and air.",
        type: "weapon",
        subtype: "magic",
        rarity: "rare",
        stats: {
          damage: 3,
          range: 4,
          manaCost: 3,
          elementalDamage: {
            type: "varies",
            damage: 2
          }
        },
        properties: ["Ranged", "Elemental", "Versatile"]
      },
      "9": {
        name: "Archmage's Wand of Arcane Mastery",
        description: "A wand symbolic of supreme arcane knowledge, allowing its wielder to channel potent spells with ease.",
        type: "weapon",
        subtype: "magic",
        rarity: "rare",
        stats: {
          damage: 4,
          range: 5,
          manaCost: 3
        },
        properties: ["Ranged", "Arcane", "Spell Amplification"]
      },
      "10": {
        name: "Enchanted Staff of the Phoenix Flame",
        description: "A staff imbued with the rebirthing essence of a phoenix, manifesting flames that never consume.",
        type: "weapon",
        subtype: "magic",
        rarity: "rare",
        stats: {
          damage: 3,
          range: 4,
          manaCost: 3,
          elementalDamage: {
            type: "fire",
            damage: 3
          },
          healing: 2
        },
        properties: ["Ranged", "Fire", "Rebirth"]
      },
      jack: {
        name: "Obsidian Rod of the Void",
        description: "A deep black rod that taps into the void's vast emptiness, drawing forth abyssal energies.",
        type: "weapon",
        subtype: "magic",
        rarity: "very rare",
        stats: {
          damage: 5,
          range: 4,
          manaCost: 4
        },
        properties: ["Ranged", "Void", "Life Drain"]
      },
      queen: {
        name: "Eldritch Wand of the Starry Abyss",
        description: "A wand that bridges the earthly realm with the cosmic void, channeling the mysteries of the stars.",
        type: "weapon",
        subtype: "magic",
        rarity: "very rare",
        stats: {
          damage: 4,
          range: 6,
          manaCost: 4
        },
        properties: ["Ranged", "Cosmic", "Reality Warping"]
      },
      king: {
        name: "Staff of the Timeless Archon",
        description: "An ancient staff that embodies the essence of time, wielded by those who seek to bend temporal realities.",
        type: "weapon",
        subtype: "magic",
        rarity: "legendary",
        stats: {
          damage: 5,
          range: 5,
          manaCost: 5
        },
        properties: ["Ranged", "Time", "Reality Manipulation"]
      }
    },

    // Blunt Weapons (Clubs subset)
    clubs: {
      ace: {
        name: "Cracked Club",
        description: "A basic wooden club showing signs of wear and stress fractures.",
        type: "weapon",
        subtype: "blunt",
        rarity: "common",
        stats: {
          damage: 2,
          speed: 1,
          durability: 2
        },
        properties: ["Bludgeoning", "Simple"]
      },
      "2": {
        name: "Oak Mace",
        description: "A sturdy mace crafted from resilient oak wood, simple yet effective.",
        type: "weapon",
        subtype: "blunt",
        rarity: "common",
        stats: {
          damage: 3,
          speed: 1,
          durability: 3
        },
        properties: ["Bludgeoning", "Sturdy"]
      },
      "3": {
        name: "Iron Warhammer",
        description: "A solid, weighty hammer forged from iron, perfect for smashing through armor.",
        type: "weapon",
        subtype: "blunt",
        rarity: "common",
        stats: {
          damage: 4,
          speed: 0,
          durability: 4
        },
        properties: ["Bludgeoning", "Armor Breaking"]
      },
      "4": {
        name: "Steel Morningstar",
        description: "A steel weapon with a chained ball adorned with menacing spikes.",
        type: "weapon",
        subtype: "blunt",
        rarity: "uncommon",
        stats: {
          damage: 4,
          speed: 0,
          durability: 4
        },
        properties: ["Bludgeoning", "Spiked", "Reach"]
      },
      "5": {
        name: "Spiked Cudgel",
        description: "A wooden baton dotted with sharp metal spikes for increased damage.",
        type: "weapon",
        subtype: "blunt",
        rarity: "uncommon",
        stats: {
          damage: 3,
          speed: 1,
          durability: 3
        },
        properties: ["Bludgeoning", "Piercing", "Brutal"]
      },
      "6": {
        name: "Brass Knuckles",
        description: "Metal bands designed to fit over the fingers, adding a painful punch to any melee attack.",
        type: "weapon",
        subtype: "blunt",
        rarity: "uncommon",
        stats: {
          damage: 1,
          speed: 3,
          durability: 5
        },
        properties: ["Bludgeoning", "Concealed", "Fast"]
      },
      "7": {
        name: "Ornate Flail",
        description: "A beautifully decorated weapon with a chain and spiked ball, as deadly as it is decorative.",
        type: "weapon",
        subtype: "blunt",
        rarity: "uncommon",
        stats: {
          damage: 4,
          speed: 0,
          durability: 4
        },
        properties: ["Bludgeoning", "Reach", "Bypass Shield"]
      },
      "8": {
        name: "Thundering Maul",
        description: "A massive hammer that resonates with a thunderous echo upon impact.",
        type: "weapon",
        subtype: "blunt",
        rarity: "rare",
        stats: {
          damage: 5,
          speed: -1,
          durability: 5,
          elementalDamage: {
            type: "thunder",
            damage: 1
          }
        },
        properties: ["Bludgeoning", "Two-handed", "Stunning"]
      },
      "9": {
        name: "Meteoric Warhammer",
        description: "A hammer crafted from the remnants of a fallen star, imbued with cosmic energy.",
        type: "weapon",
        subtype: "blunt",
        rarity: "rare",
        stats: {
          damage: 5,
          speed: 0,
          durability: 6
        },
        properties: ["Bludgeoning", "Cosmic Energy", "Armor Breaking"]
      },
      "10": {
        name: "Silver-encrusted Mace",
        description: "A mace decorated with intricate silver designs, a blend of beauty and brutality.",
        type: "weapon",
        subtype: "blunt",
        rarity: "rare",
        stats: {
          damage: 4,
          speed: 1,
          durability: 4
        },
        properties: ["Bludgeoning", "Silver", "Effective Against Undead"]
      },
      jack: {
        name: "Golden Scepter",
        description: "A symbol of power and wealth, this scepter is as much a ceremonial piece as it is a weapon.",
        type: "weapon",
        subtype: "blunt",
        rarity: "very rare",
        stats: {
          damage: 3,
          speed: 1,
          durability: 4
        },
        properties: ["Bludgeoning", "Authority", "Intimidation"]
      },
      queen: {
        name: "Enchanted Gavel of Judgement",
        description: "A magical gavel that metes out justice with each swing, rumoured to discern truth from lie.",
        type: "weapon",
        subtype: "blunt",
        rarity: "very rare",
        stats: {
          damage: 4,
          speed: 1,
          durability: 5
        },
        properties: ["Bludgeoning", "Truth Seeking", "Banishing"]
      },
      king: {
        name: "Titan's Mountain-Crusher",
        description: "A legendary hammer of immense size and power, said to have the strength to split mountains.",
        type: "weapon",
        subtype: "blunt",
        rarity: "legendary",
        stats: {
          damage: 7,
          speed: -2,
          durability: 8
        },
        properties: ["Bludgeoning", "Massive", "Earth Shaking"]
      }
    },

    // Ranged Weapons (Spades subset)
    spades: {
      ace: {
        name: "Slingshot",
        description: "A simple handheld device, primarily used for launching small stones.",
        type: "weapon",
        subtype: "ranged",
        rarity: "common",
        stats: {
          damage: 1,
          range: 3,
          durability: 3
        },
        properties: ["Ranged", "Simple", "Quiet"]
      },
      "2": {
        name: "Wooden Shortbow",
        description: "A basic bow crafted from flexible wood, ideal for beginners.",
        type: "weapon",
        subtype: "ranged",
        rarity: "common",
        stats: {
          damage: 2,
          range: 5,
          durability: 3
        },
        properties: ["Ranged", "Two-handed"]
      },
      "3": {
        name: "Iron-tipped Crossbow",
        description: "A sturdy crossbow with iron-tipped bolts for added piercing capability.",
        type: "weapon",
        subtype: "ranged",
        rarity: "common",
        stats: {
          damage: 3,
          range: 4,
          durability: 4
        },
        properties: ["Ranged", "Loading", "Armor Piercing"]
      },
      "4": {
        name: "Steel Longbow",
        description: "An elongated bow forged with steel reinforcement, offering enhanced range.",
        type: "weapon",
        subtype: "ranged",
        rarity: "uncommon",
        stats: {
          damage: 3,
          range: 7,
          durability: 4
        },
        properties: ["Ranged", "Two-handed", "Long Range"]
      },
      "5": {
        name: "Hunting Composite Bow",
        description: "A bow made from layered materials, optimized for hunting game.",
        type: "weapon",
        subtype: "ranged",
        rarity: "uncommon",
        stats: {
          damage: 3,
          range: 6,
          durability: 4
        },
        properties: ["Ranged", "Two-handed", "Hunting"]
      },
      "6": {
        name: "Reinforced Heavy Crossbow",
        description: "A weighty crossbow with reinforced mechanics, designed for powerful shots.",
        type: "weapon",
        subtype: "ranged",
        rarity: "uncommon",
        stats: {
          damage: 4,
          range: 5,
          durability: 5
        },
        properties: ["Ranged", "Loading", "Armor Piercing"]
      },
      "7": {
        name: "Elvish Longbow & Quiver of Seeking Arrows",
        description: "An elegant elven bow accompanied by arrows that seldom miss their mark.",
        type: "weapon",
        subtype: "ranged",
        rarity: "rare",
        stats: {
          damage: 3,
          range: 8,
          durability: 5
        },
        properties: ["Ranged", "Two-handed", "Seeking", "Elvish Craftsmanship"]
      },
      "8": {
        name: "Thundering Yew Longbow",
        description: "A bow made from the durable yew tree, emitting a thunderous sound upon release.",
        type: "weapon",
        subtype: "ranged",
        rarity: "rare",
        stats: {
          damage: 4,
          range: 7,
          durability: 5,
          elementalDamage: {
            type: "thunder",
            damage: 1
          }
        },
        properties: ["Ranged", "Two-handed", "Thunderous"]
      },
      "9": {
        name: "Dragonbone Shortbow",
        description: "A compact bow crafted from the rare and strong bones of dragons.",
        type: "weapon",
        subtype: "ranged",
        rarity: "rare",
        stats: {
          damage: 4,
          range: 5,
          durability: 6
        },
        properties: ["Ranged", "Dragon Essence", "Compact"]
      },
      "10": {
        name: "Assassin's Silent Crossbow",
        description: "A specially designed crossbow that releases bolts with deadly precision and minimal noise.",
        type: "weapon",
        subtype: "ranged",
        rarity: "rare",
        stats: {
          damage: 3,
          range: 4,
          durability: 4
        },
        properties: ["Ranged", "Silent", "Precise", "Concealed"]
      },
      jack: {
        name: "Wind Whisperer Bow",
        description: "A mystical bow that can harness and shoot arrows with the swiftness of the wind.",
        type: "weapon",
        subtype: "ranged",
        rarity: "very rare",
        stats: {
          damage: 4,
          range: 8,
          durability: 5
        },
        properties: ["Ranged", "Wind Empowered", "Swift"]
      },
      queen: {
        name: "Abyssal Crossbow",
        description: "A dark crossbow infused with energies from the abyss, its bolts carry a touch of the void.",
        type: "weapon",
        subtype: "ranged",
        rarity: "very rare",
        stats: {
          damage: 5,
          range: 6,
          durability: 6,
          elementalDamage: {
            type: "void",
            damage: 2
          }
        },
        properties: ["Ranged", "Void Touched", "Soul Draining"]
      },
      king: {
        name: "Bow of the Celestial Archer",
        description: "A legendary bow said to be blessed by celestial beings, holding unmatched power and grace.",
        type: "weapon",
        subtype: "ranged",
        rarity: "legendary",
        stats: {
          damage: 5,
          range: 10,
          durability: 7,
          elementalDamage: {
            type: "radiant",
            damage: 3
          }
        },
        properties: ["Ranged", "Celestial", "True Shot"]
      }
    }
  },

  // ARMOR (Clubs suit in the tables)
  armor: {
    // Metal Armor (Hearts subset)
    hearts: {
      ace: {
        name: "Rusty Chainmail",
        description: "A weathered set of interlinked rings, showing signs of age and neglect.",
        type: "armor",
        subtype: "metal",
        rarity: "common",
        stats: {
          defense: 3,
          mobility: 0,
          durability: 3
        },
        properties: ["Noisy", "Flexible"]
      },
      "2": {
        name: "Iron Plate Armor",
        description: "A solid, heavy armor made of iron, designed for frontline battles.",
        type: "armor",
        subtype: "metal",
        rarity: "common",
        stats: {
          defense: 5,
          mobility: -1,
          durability: 4
        },
        properties: ["Heavy", "Solid"]
      },
      "3": {
        name: "Reinforced Steel Armor",
        description: "Steel armor strengthened at vital points to withstand harsher blows.",
        type: "armor",
        subtype: "metal",
        rarity: "uncommon",
        stats: {
          defense: 6,
          mobility: -1,
          durability: 5
        },
        properties: ["Heavy", "Reinforced"]
      },
      "4": {
        name: "Ornate Brigandine",
        description: "A finely crafted armor with decorative rivets and patterns, offering both protection and aesthetics.",
        type: "armor",
        subtype: "metal",
        rarity: "uncommon",
        stats: {
          defense: 4,
          mobility: 0,
          durability: 4
        },
        properties: ["Decorative", "Flexible"]
      },
      "5": {
        name: "Dark Iron Chestplate",
        description: "A chest armor forged from a rare, dark-toned iron, casting an intimidating silhouette.",
        type: "armor",
        subtype: "metal",
        rarity: "uncommon",
        stats: {
          defense: 5,
          mobility: -1,
          durability: 5
        },
        properties: ["Intimidating", "Dark"]
      },
      "6": {
        name: "Engraved Full Plate Armor",
        description: "A complete set of armor with intricate carvings, detailing tales of valor and heroism.",
        type: "armor",
        subtype: "metal",
        rarity: "rare",
        stats: {
          defense: 7,
          mobility: -2,
          durability: 6
        },
        properties: ["Heavy", "Decorative", "Full Coverage"]
      },
      "7": {
        name: "Golden-Edged Battle Armor",
        description: "Sturdy armor trimmed with gold accents, reflecting both wealth and battle readiness.",
        type: "armor",
        subtype: "metal",
        rarity: "rare",
        stats: {
          defense: 6,
          mobility: -1,
          durability: 5
        },
        properties: ["Prestigious", "Intimidating"]
      },
      "8": {
        name: "Elven Forged Plate Armor",
        description: "Lightweight and sleek, this armor is masterfully crafted by Elven smiths to provide maximum mobility.",
        type: "armor",
        subtype: "metal",
        rarity: "rare",
        stats: {
          defense: 5,
          mobility: 1,
          durability: 6
        },
        properties: ["Lightweight", "Elvish Craftsmanship"]
      },
      "9": {
        name: "Silver Infused Full Armor",
        description: "Armor interwoven with threads of silver, reputed to ward off dark magics.",
        type: "armor",
        subtype: "metal",
        rarity: "rare",
        stats: {
          defense: 6,
          mobility: -1,
          durability: 5
        },
        properties: ["Magical Resistance", "Silver", "Warding"]
      },
      "10": {
        name: "Knight's Shining Armor",
        description: "Immaculate, polished armor that gleams in the sunlight, symbolizing chivalry and honor.",
        type: "armor",
        subtype: "metal",
        rarity: "rare",
        stats: {
          defense: 6,
          mobility: -1,
          durability: 6
        },
        properties: ["Prestigious", "Reflective", "Intimidating"]
      },
      jack: {
        name: "Warlord's Enchanted Plate",
        description: "Majestic armor infused with arcane runes, worn by leaders of legendary armies.",
        type: "armor",
        subtype: "metal",
        rarity: "very rare",
        stats: {
          defense: 7,
          mobility: 0,
          durability: 7
        },
        properties: ["Enchanted", "Leadership", "Intimidating"]
      },
      queen: {
        name: "Mythril Heavy Armor Set",
        description: "Crafted from rare Mythril, this armor set offers unparalleled protection and is surprisingly lightweight.",
        type: "armor",
        subtype: "metal",
        rarity: "very rare",
        stats: {
          defense: 7,
          mobility: 1,
          durability: 8
        },
        properties: ["Mythril", "Lightweight", "Premium"]
      },
      king: {
        name: "Dragon Scale Enchanted Plate",
        description: "An armor set made from the formidable scales of a dragon, further enhanced with powerful enchantments.",
        type: "armor",
        subtype: "metal",
        rarity: "legendary",
        stats: {
          defense: 8,
          mobility: 0,
          durability: 9,
          resistance: {
            type: "varies",
            value: 3
          }
        },
        properties: ["Dragon Scales", "Enchanted", "Elemental Resistance"]
      }
    },

    // Mage Armor (Diamonds subset)
    diamonds: {
      ace: {
        name: "Apprentice's Robe",
        description: "A basic, unadorned robe worn by students of magic, offering minimal protection.",
        type: "armor",
        subtype: "mage",
        rarity: "common",
        stats: {
          defense: 1,
          mobility: 2,
          magicBoost: 1,
          durability: 2
        },
        properties: ["Lightweight", "Magic Affinity"]
      },
      "2": {
        name: "Mage's Cloth Armor",
        description: "A sturdier robe interwoven with protective fabrics, ideal for spellcasters entering dangerous terrains.",
        type: "armor",
        subtype: "mage",
        rarity: "common",
        stats: {
          defense: 2,
          mobility: 1,
          magicBoost: 1,
          durability: 3
        },
        properties: ["Lightweight", "Magic Affinity"]
      },
      "3": {
        name: "Sorcerer's Enchanted Tunic",
        description: "A tunic infused with low-level protective enchantments, shielding its wearer from minor magical threats.",
        type: "armor",
        subtype: "mage",
        rarity: "uncommon",
        stats: {
          defense: 2,
          mobility: 1,
          magicBoost: 2,
          durability: 3
        },
        properties: ["Enchanted", "Magic Resistance", "Spell Amplification"]
      },
      "4": {
        name: "Enchanter's Mystic Vestments",
        description: "Elegant robes adorned with mystic symbols, enhancing the wearer's affinity with certain spells.",
        type: "armor",
        subtype: "mage",
        rarity: "uncommon",
        stats: {
          defense: 2,
          mobility: 1,
          magicBoost: 2,
          durability: 3
        },
        properties: ["Enchanted", "Spell Focus", "Decorative"]
      },
      "5": {
        name: "Elemental Infused Robe",
        description: "A robe woven with threads from elemental planes, granting its wearer minor resistances to elemental forces.",
        type: "armor",
        subtype: "mage",
        rarity: "uncommon",
        stats: {
          defense: 2,
          mobility: 1,
          magicBoost: 2,
          durability: 3,
          resistance: {
            type: "elemental",
            value: 1
          }
        },
        properties: ["Elemental Affinity", "Elemental Resistance"],
        additionalDraw: {
          required: true,
          purpose: "Determine the elemental type"
        }
      },
      "6": {
        name: "Warlock's Eldritch Armor",
        description: "Dark vestments imbued with forbidden magics, offering protection and a sense of unease to those nearby.",
        type: "armor",
        subtype: "mage",
        rarity: "uncommon",
        stats: {
          defense: 3,
          mobility: 1,
          magicBoost: 2,
          durability: 4
        },
        properties: ["Eldritch", "Intimidating", "Otherworldly"]
      },
      "7": {
        name: "Wizard's Starlit Robes",
        description: "A robe shimmering like a night sky, enhancing the potency of cosmic and astral spells. Acts as a light source.",
        type: "armor",
        subtype: "mage",
        rarity: "rare",
        stats: {
          defense: 3,
          mobility: 1,
          magicBoost: 3,
          durability: 4
        },
        properties: ["Starlit", "Light Source", "Cosmic Affinity"]
      },
      "8": {
        name: "Archmage's Aura Armor",
        description: "Prestigious robes that emanate a powerful aura, signifying the wearer's high status and mastery over the arcane.",
        type: "armor",
        subtype: "mage",
        rarity: "rare",
        stats: {
          defense: 3,
          mobility: 1,
          magicBoost: 4,
          durability: 4
        },
        properties: ["Aura Manifestation", "Prestigious", "Spell Amplification"]
      },
      "9": {
        name: "Spellweaver's Mystic Mantle",
        description: "A robe adorned with intricate patterns, aiding in the weaving and casting of complex spells.",
        type: "armor",
        subtype: "mage",
        rarity: "rare",
        stats: {
          defense: 3,
          mobility: 1,
          magicBoost: 3,
          durability: 4
        },
        properties: ["Spell Weaving", "Mana Regeneration", "Pattern Magic"]
      },
      "10": {
        name: "Robe of the Celestial Order",
        description: "Ethereal vestments resonating with celestial energies, granting divine protection against dark magics.",
        type: "armor",
        subtype: "mage",
        rarity: "rare",
        stats: {
          defense: 3,
          mobility: 1,
          magicBoost: 3,
          durability: 4,
          resistance: {
            type: "dark",
            value: 2
          }
        },
        properties: ["Celestial", "Divine Protection", "Radiant"]
      },
      jack: {
        name: "Enchanted Vestments of the Void",
        description: "Robes interlaced with the essence of the void, offering protection against ethereal and otherworldly threats.",
        type: "armor",
        subtype: "mage",
        rarity: "very rare",
        stats: {
          defense: 4,
          mobility: 1,
          magicBoost: 4,
          durability: 5,
          resistance: {
            type: "ethereal",
            value: 3
          }
        },
        properties: ["Void Essence", "Ethereal Protection", "Reality Anchoring"]
      },
      queen: {
        name: "Sorceress's Gown of the Starry Abyss",
        description: "A flowing gown that mirrors the depth of space, amplifying the power of dark and cosmic magics.",
        type: "armor",
        subtype: "mage",
        rarity: "very rare",
        stats: {
          defense: 4,
          mobility: 2,
          magicBoost: 5,
          durability: 5
        },
        properties: ["Cosmic Power", "Dark Magic Affinity", "Reality Warping"]
      },
      king: {
        name: "Archwizard's Armor of the Timeless Archon",
        description: "A legendary armor worn by the most esteemed of wizards, offering supreme protection and channeling the power of ancient archons.",
        type: "armor",
        subtype: "mage",
        rarity: "legendary",
        stats: {
          defense: 5,
          mobility: 1,
          magicBoost: 6,
          durability: 6,
          resistance: {
            type: "all",
            value: 2
          }
        },
        properties: ["Timeless", "Archon Power", "Supreme Magic"]
      }
    },

    // Leather/Scale Armor (Clubs subset)
    clubs: {
      ace: {
        name: "Soft Leather Vest",
        description: "A basic vest made of supple leather, providing minimal protection.",
        type: "armor",
        subtype: "leather",
        rarity: "common",
        stats: {
          defense: 2,
          mobility: 2,
          durability: 3
        },
        properties: ["Lightweight", "Quiet"]
      },
      "2": {
        name: "Hardened Leather Armor",
        description: "Toughened leather armor offering improved resistance against slashes.",
        type: "armor",
        subtype: "leather",
        rarity: "common",
        stats: {
          defense: 3,
          mobility: 1,
          durability: 4
        },
        properties: ["Hardened", "Slash Resistant"]
      },
      "3": {
        name: "Studded Leather Armor",
        description: "Leather armor embedded with metal studs, enhancing its defensive capabilities.",
        type: "armor",
        subtype: "leather",
        rarity: "uncommon",
        stats: {
          defense: 4,
          mobility: 1,
          durability: 4
        },
        properties: ["Studded", "Balanced"]
      },
      "4": {
        name: "Chain Shirt",
        description: "A shirt made of interlocking metal rings, providing moderate protection.",
        type: "armor",
        subtype: "leather",
        rarity: "uncommon",
        stats: {
          defense: 4,
          mobility: 0,
          durability: 5
        },
        properties: ["Flexible", "Noisy"]
      },
      "5": {
        name: "Lizard Scale Armor",
        description: "Armor crafted from the scales of a lizard, offering both flexibility and protection.",
        type: "armor",
        subtype: "leather",
        rarity: "uncommon",
        stats: {
          defense: 4,
          mobility: 1,
          durability: 4
        },
        properties: ["Scaled", "Reptilian", "Heat Resistant"]
      },
      "6": {
        name: "Reinforced Hide Armor",
        description: "Thickened animal hide armor, strengthened for better durability.",
        type: "armor",
        subtype: "leather",
        rarity: "uncommon",
        stats: {
          defense: 4,
          mobility: 0,
          durability: 5
        },
        properties: ["Reinforced", "Animal Hide"]
      },
      "7": {
        name: "Enchanted Leather Breastplate",
        description: "A leather chest protector imbued with protective magic.",
        type: "armor",
        subtype: "leather",
        rarity: "rare",
        stats: {
          defense: 4,
          mobility: 1,
          durability: 5
        },
        properties: ["Enchanted", "Protective Aura"]
      },
      "8": {
        name: "Dragon Scale Vest",
        description: "A rare vest made of real dragon scales, offering superior protection against elemental threats.",
        type: "armor",
        subtype: "leather",
        rarity: "rare",
        stats: {
          defense: 5,
          mobility: 1,
          durability: 6,
          resistance: {
            type: "elemental",
            value: 2
          }
        },
        properties: ["Dragon Scales", "Elemental Resistance"]
      },
      "9": {
        name: "Mithril-Studded Leather",
        description: "Lightweight leather armor reinforced with mithril studs for enhanced protection.",
        type: "armor",
        subtype: "leather",
        rarity: "rare",
        stats: {
          defense: 5,
          mobility: 2,
          durability: 6
        },
        properties: ["Mithril", "Lightweight", "Premium"]
      },
      "10": {
        name: "Full Cobra Scale Mail",
        description: "Armor constructed from the gleaming scales of a cobra, offering venom resistance.",
        type: "armor",
        subtype: "leather",
        rarity: "rare",
        stats: {
          defense: 5,
          mobility: 1,
          durability: 5,
          resistance: {
            type: "poison",
            value: 3
          }
        },
        properties: ["Venomous", "Serpentine", "Intimidating"]
      },
      jack: {
        name: "Warforged Hide Armor",
        description: "Battle-ready hide armor, magically enhanced for war.",
        type: "armor",
        subtype: "leather",
        rarity: "very rare",
        stats: {
          defense: 6,
          mobility: 0,
          durability: 7
        },
        properties: ["Warforged", "Battle Tested", "Enchanted"]
      },
      queen: {
        name: "Elvish Crafted Ringmail",
        description: "Elven-made armor combining leather and metal rings, known for its balance of protection and mobility.",
        type: "armor",
        subtype: "leather",
        rarity: "very rare",
        stats: {
          defense: 6,
          mobility: 1,
          durability: 6
        },
        properties: ["Elvish Craftsmanship", "Balanced", "Quiet"]
      },
      king: {
        name: "Legendary Beastmaster's Scale Mail",
        description: "Mythical armor crafted from the scales of legendary beasts, resonating with primal energies.",
        type: "armor",
        subtype: "leather",
        rarity: "legendary",
        stats: {
          defense: 7,
          mobility: 1,
          durability: 8,
          resistance: {
            type: "primal",
            value: 3
          }
        },
        properties: ["Legendary Beast Scales", "Primal Energy", "Beast Affinity"]
      }
    },

    // Cloth/Padded armor (Spades subset)
    spades: {
      ace: {
        name: "Cloth Tunic",
        description: "A simple, lightweight tunic suitable for everyday wear.",
        type: "armor",
        subtype: "cloth",
        rarity: "common",
        stats: {
          defense: 0,
          mobility: 3,
          durability: 2
        },
        properties: ["Lightweight", "Common", "Comfortable"]
      },
      "2": {
        name: "Padded Vest",
        description: "A vest with padded layers, offering slight cushioning against blows.",
        type: "armor",
        subtype: "cloth",
        rarity: "common",
        stats: {
          defense: 1,
          mobility: 2,
          durability: 2
        },
        properties: ["Padded", "Lightweight"]
      },
      "3": {
        name: "Quilted Jacket",
        description: "A jacket with quilted stitching, providing minimal protection and warmth.",
        type: "armor",
        subtype: "cloth",
        rarity: "common",
        stats: {
          defense: 1,
          mobility: 2,
          durability: 3
        },
        properties: ["Quilted", "Warm", "Lightweight"]
      },
      "4": {
        name: "Lightweight Cloak",
        description: "A thin cloak designed for swift movement and minimal hindrance.",
        type: "armor",
        subtype: "cloth",
        rarity: "uncommon",
        stats: {
          defense: 1,
          mobility: 3,
          durability: 2
        },
        properties: ["Concealing", "Very Lightweight", "Weather Protection"]
      },
      "5": {
        name: "Thief's Padded Outfit",
        description: "Special attire designed for stealth, cushioned in key areas.",
        type: "armor",
        subtype: "cloth",
        rarity: "uncommon",
        stats: {
          defense: 2,
          mobility: 2,
          durability: 3
        },
        properties: ["Padded", "Stealthy", "Dark Colored"]
      },
      "6": {
        name: "Archer's Hooded Garb",
        description: "Lightweight garb with a hood, designed for archers to move and shoot with ease.",
        type: "armor",
        subtype: "cloth",
        rarity: "uncommon",
        stats: {
          defense: 1,
          mobility: 3,
          durability: 3
        },
        properties: ["Hooded", "Arm Freedom", "Ranged Bonus"]
      },
      "7": {
        name: "Monk's Silent Wrappings",
        description: "Wrappings that muffle movement, favored by monks and martial artists.",
        type: "armor",
        subtype: "cloth",
        rarity: "rare",
        stats: {
          defense: 2,
          mobility: 3,
          durability: 3
        },
        properties: ["Silent", "Flexible", "Meditative"]
      },
      "8": {
        name: "Assassin's Light Garb",
        description: "Attire made for quick and silent strikes, optimized for assassination missions.",
        type: "armor",
        subtype: "cloth",
        rarity: "rare",
        stats: {
          defense: 2,
          mobility: 3,
          durability: 3
        },
        properties: ["Concealed", "Silent", "Shadow Blending"]
      },
      "9": {
        name: "Nimble Outfit of Agility",
        description: "Garb crafted for acrobats and performers, allowing for agile maneuvers.",
        type: "armor",
        subtype: "cloth",
        rarity: "rare",
        stats: {
          defense: 1,
          mobility: 4,
          durability: 3
        },
        properties: ["Acrobatic", "Very Flexible", "Lightweight"]
      },
      "10": {
        name: "Padded Armor of Camouflage",
        description: "Armor designed to blend into surroundings, ideal for ambushes.",
        type: "armor",
        subtype: "cloth",
        rarity: "rare",
        stats: {
          defense: 2,
          mobility: 2,
          durability: 3
        },
        properties: ["Camouflaged", "Environment Blending", "Stealthy"]
      },
      jack: {
        name: "Duelist's Quickened Cloth Armor",
        description: "Cloth armor made for duelists, allowing rapid movement and swift retaliations.",
        type: "armor",
        subtype: "cloth",
        rarity: "very rare",
        stats: {
          defense: 2,
          mobility: 4,
          durability: 4
        },
        properties: ["Quick", "Dueling Enhancement", "Reactive"]
      },
      queen: {
        name: "Mistweaver's Soft Garb",
        description: "Mystical attire that seems to blend with the mists, aiding in stealth and evasion.",
        type: "armor",
        subtype: "cloth",
        rarity: "very rare",
        stats: {
          defense: 3,
          mobility: 3,
          durability: 4
        },
        properties: ["Mist Blending", "Ethereal", "Elusive"]
      },
      king: {
        name: "Phantom's Armor of Silent Movement",
        description: "Ghostly garb that allows near-silent movement, favored by elite spies.",
        type: "armor",
        subtype: "cloth",
        rarity: "legendary",
        stats: {
          defense: 3,
          mobility: 5,
          durability: 4
        },
        properties: ["Phantasmal", "Completely Silent", "Shadowmelding"]
      }
    }
  },

  // CONSUMABLES
  consumables: {
    // Healing items
    healing: {
      minor: {
        name: "Minor Healing Potion",
        description: "A small vial containing a red liquid that heals minor wounds.",
        type: "consumable",
        subtype: "potion",
        rarity: "common",
        effects: {
          healing: 2
        }
      },
      standard: {
        name: "Healing Potion",
        description: "A standard potion that restores health to the drinker.",
        type: "consumable",
        subtype: "potion",
        rarity: "uncommon",
        effects: {
          healing: 4
        }
      },
      greater: {
        name: "Greater Healing Potion",
        description: "A potent healing concoction that can cure serious injuries.",
        type: "consumable",
        subtype: "potion",
        rarity: "rare",
        effects: {
          healing: 8
        }
      },
      supreme: {
        name: "Supreme Healing Potion",
        description: "An extremely powerful healing elixir that can bring someone back from the brink of death.",
        type: "consumable",
        subtype: "potion",
        rarity: "very rare",
        effects: {
          healing: 12
        }
      }
    },
    
    // Buff items
    buff: {
      strength: {
        name: "Potion of Giant Strength",
        description: "A potion that temporarily grants the drinker extraordinary physical strength.",
        type: "consumable",
        subtype: "potion",
        rarity: "uncommon",
        effects: {
          statBoost: {
            stat: "strength",
            amount: 3,
            duration: "1 hour"
          }
        }
      },
      dexterity: {
        name: "Elixir of Cat's Grace",
        description: "An elixir that enhances agility and reflexes for a limited time.",
        type: "consumable",
        subtype: "potion",
        rarity: "uncommon",
        effects: {
          statBoost: {
            stat: "dexterity",
            amount: 3,
            duration: "1 hour"
          }
        }
      },
      intelligence: {
        name: "Tonic of Mental Clarity",
        description: "A clear liquid that sharpens the mind and enhances intellectual capabilities.",
        type: "consumable",
        subtype: "potion",
        rarity: "uncommon",
        effects: {
          statBoost: {
            stat: "intelligence",
            amount: 3,
            duration: "1 hour"
          }
        }
      }
    },
    
    // Utility items
    utility: {
      invisibility: {
        name: "Potion of Invisibility",
        description: "A translucent potion that renders the drinker invisible for a short time.",
        type: "consumable",
        subtype: "potion",
        rarity: "rare",
        effects: {
          status: {
            condition: "invisible",
            duration: "10 minutes"
          }
        }
      },
      fireResistance: {
        name: "Elixir of Flame Protection",
        description: "A bright orange liquid that grants temporary resistance to fire and heat.",
        type: "consumable",
        subtype: "potion",
        rarity: "uncommon",
        effects: {
          resistance: {
            type: "fire",
            amount: 3,
            duration: "1 hour"
          }
        }
      }
    }
  },

  // QUEST ITEMS
  questItems: {
    keys: {
      dungeon: {
        name: "Ancient Dungeon Key",
        description: "A weathered key that unlocks a specific dungeon entrance.",
        type: "quest",
        subtype: "key",
        rarity: "uncommon"
      },
      treasure: {
        name: "Ornate Treasure Chest Key",
        description: "A finely crafted key designed for a valuable treasure chest.",
        type: "quest",
        subtype: "key",
        rarity: "rare"
      }
    },
    artifacts: {
      amulet: {
        name: "Amulet of Lost Souls",
        description: "A mysterious amulet said to contain the essence of departed spirits.",
        type: "quest",
        subtype: "artifact",
        rarity: "rare"
      },
      scroll: {
        name: "Ancient Prophecy Scroll",
        description: "A fragile scroll containing cryptic prophecies about a coming darkness.",
        type: "quest",
        subtype: "artifact",
        rarity: "rare"
      }
    }
  }
};

// Helper function to get item category based on suit
function getItemCategory(suit) {
  const categories = {
    hearts: 'blade',
    diamonds: 'magic',
    clubs: 'blunt',
    spades: 'ranged'
  };
  
  return categories[suit] || 'unknown';
}

// Function to convert rarity to a numeric value for comparison
function rarityValue(rarity) {
  const values = {
    'common': 1,
    'uncommon': 2,
    'rare': 3,
    'very rare': 4,
    'legendary': 5
  };
  
  return values[rarity] || 0;
}

// Function to get a random consumable based on rarity
function getRandomConsumable(desiredRarity = 'common') {
  const consumableTypes = Object.keys(items.consumables);
  const type = consumableTypes[Math.floor(Math.random() * consumableTypes.length)];
  
  const potionKeys = Object.keys(items.consumables[type]);
  
  // Filter by rarity if specified
  const matchingPotions = potionKeys.filter(key => {
    const potion = items.consumables[type][key];
    return !desiredRarity || potion.rarity === desiredRarity;
  });
  
  // If no exact match, get closest rarity
  if (matchingPotions.length === 0 && desiredRarity) {
    const desiredValue = rarityValue(desiredRarity);
    let closestPotion = null;
    let smallestDiff = Infinity;
    
    potionKeys.forEach(key => {
      const potion = items.consumables[type][key];
      const diff = Math.abs(rarityValue(potion.rarity) - desiredValue);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closestPotion = potion;
      }
    });
    
    return closestPotion;
  }
  
  // Return a random matching potion
  const key = matchingPotions[Math.floor(Math.random() * matchingPotions.length)];
  return items.consumables[type][key];
}

// Function to get weapon data from a card
function getWeaponFromCard(card) {
  const { suit, rank } = card;
  
  // Check if we have data for this specific card in weapons
  if (items.weapons[suit] && items.weapons[suit][rank]) {
    return {
      ...items.weapons[suit][rank],
      cardDraw: card
    };
  }
  
  // Fallback for any missing data
  return {
    name: `Basic ${getItemCategory(suit)} Weapon`,
    description: `A simple weapon of the ${getItemCategory(suit)} type.`,
    type: "weapon",
    subtype: getItemCategory(suit),
    rarity: "common",
    stats: {
      damage: 1,
      durability: 3
    },
    properties: ["Basic"],
    cardDraw: card
  };
}

// Function to get armor data from a card
function getArmorFromCard(card) {
  const { suit, rank } = card;
  
  // Check if we have data for this specific card in armor
  if (items.armor[suit] && items.armor[suit][rank]) {
    return {
      ...items.armor[suit][rank],
      cardDraw: card
    };
  }
  
  // Fallback for any missing data
  const armorTypes = {
    hearts: 'metal',
    diamonds: 'mage',
    clubs: 'leather',
    spades: 'cloth'
  };
  
  return {
    name: `Basic ${armorTypes[suit] || 'padded'} Armor`,
    description: `A simple armor of the ${armorTypes[suit] || 'padded'} type.`,
    type: "armor",
    subtype: armorTypes[suit] || 'padded',
    rarity: "common",
    stats: {
      defense: 1,
      mobility: 1,
      durability: 3
    },
    properties: ["Basic"],
    cardDraw: card
  };
}

// Function to determine if additional cards need to be drawn for this item
function requiresAdditionalDraw(item) {
  return item?.additionalDraw?.required || false;
}

// Function to get the purpose of additional card draws
function getAdditionalDrawPurpose(item) {
  return item?.additionalDraw?.purpose || "Determine additional properties";
}

// Main function to get an item from a card draw
function getItemFromCard(card, specificType = null) {
  const { suit, rank } = card;
  
  // If a specific type is requested
  if (specificType) {
    switch (specificType.toLowerCase()) {
      case 'weapon':
        return getWeaponFromCard(card);
      case 'armor':
        return getArmorFromCard(card);
      case 'consumable':
        // For consumables, use rank to determine rarity
        const rarities = {
          'ace': 'common',
          '2': 'common',
          '3': 'common',
          '4': 'uncommon',
          '5': 'uncommon',
          '6': 'uncommon',
          '7': 'uncommon',
          '8': 'rare',
          '9': 'rare',
          '10': 'rare',
          'jack': 'very rare',
          'queen': 'very rare',
          'king': 'legendary'
        };
        return getRandomConsumable(rarities[rank]);
      default:
        // If unknown type, proceed to random selection
        break;
    }
  }
  
  // Random selection based on card
  const typeChance = Math.random();
  
  // Use suit to influence but not determine type
  if (typeChance < 0.4) {
    // 40% chance for weapon
    return getWeaponFromCard(card);
  } else if (typeChance < 0.7) {
    // 30% chance for armor
    return getArmorFromCard(card);
  } else {
    // 30% chance for consumable
    const rarities = {
      'ace': 'common',
      '2': 'common',
      '3': 'common',
      '4': 'uncommon',
      '5': 'uncommon',
      '6': 'uncommon',
      '7': 'uncommon',
      '8': 'rare',
      '9': 'rare',
      '10': 'rare',
      'jack': 'very rare',
      'queen': 'very rare',
      'king': 'legendary'
    };
    return getRandomConsumable(rarities[rank]);
  }
}

export default items;
export { 
  getWeaponFromCard, 
  getArmorFromCard, 
  getRandomConsumable,
  getItemFromCard,
  requiresAdditionalDraw,
  getAdditionalDrawPurpose,
  getItemCategory
};
