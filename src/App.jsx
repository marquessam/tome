import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';

// Import pages
import HomePage from './pages/HomePage';
import WorldSelectionPage from './pages/WorldSelectionPage';
import CharacterCreationPage from './pages/CharacterCreationPage';
import CharacterSelectionPage from './pages/CharacterSelectionPage';
import GamePage from './pages/GamePage';

// Import styles
import './App.css';

function App() {
  return (
    <Router>
      <GameProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/worlds" element={<WorldSelectionPage />} />
            <Route path="/worlds/:worldId/characters/new" element={<CharacterCreationPage />} />
            <Route path="/worlds/:worldId/characters" element={<CharacterSelectionPage />} />
            <Route path="/worlds/:worldId/play" element={<GamePage />} />
          </Routes>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
