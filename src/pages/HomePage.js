import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1 className="game-title">Card RPG</h1>
        <p className="game-subtitle">
          A card-driven persistent world adventure
        </p>
        
        <div className="card-display">
          <Card suit="hearts" rank="king" size="large" />
          <Card suit="diamonds" rank="queen" size="large" />
          <Card suit="clubs" rank="jack" size="large" />
          <Card suit="spades" rank="ace" size="large" />
        </div>
        
        <div className="game-description">
          <p>
            Adventure in a world where every encounter, challenge, and discovery is determined by the
            draw of a card. Build your character, face the great threat, and leave your mark on a 
            persistent world that evolves with each play.
          </p>
        </div>
        
        <div className="home-actions">
          <Link to="/worlds" className="primary-button">Begin Adventure</Link>
        </div>
        
        <div className="game-features">
          <div className="feature">
            <h3>Card-Driven Gameplay</h3>
            <p>Every aspect of the game is determined by card draws, creating endless variety.</p>
          </div>
          <div className="feature">
            <h3>Persistent World</h3>
            <p>Your actions permanently change the world. Death is not the end - your legacy continues.</p>
          </div>
          <div className="feature">
            <h3>Great Threats</h3>
            <p>Each world has a unique great threat to overcome. Prepare carefully before confronting it!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
