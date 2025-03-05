// Create a standard deck of cards
export function createDeck() {
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  
  const deck = [];
  
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }
  
  return deck;
}

// Shuffle a deck of cards using the Fisher-Yates algorithm
export function shuffleDeck(deck) {
  const shuffled = [...deck];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Draw a card from the deck
export function drawCard(deck, discard) {
  if (deck.length === 0) {
    // If deck is empty, shuffle discard pile and use as new deck
    if (discard.length === 0) {
      return { drawnCard: null, newDeck: [], newDiscard: [] };
    }
    
    const newDeck = shuffleDeck(discard);
    return { drawnCard: newDeck.pop(), newDeck, newDiscard: [] };
  }
  
  const newDeck = [...deck];
  const drawnCard = newDeck.pop();
  const newDiscard = [...discard, drawnCard];
  
  return { drawnCard, newDeck, newDiscard };
}
