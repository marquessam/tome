import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import Home from './components/Game/Home';
import CharacterCreation from './components/Character/CharacterCreation';
import GameScreen from './components/Game/GameScreen';
import './App.css';

function App() {
  return (
    <Router>
      <GameProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-character" element={<CharacterCreation />} />
            <Route path="/game" element={<GameScreen />} />
          </Routes>
        </div>
      </GameProvider>
    </Router>
  );
}

export default App;
