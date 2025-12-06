import React from 'react';
import './FlowingMenuSection.css';
import TextType from './TextType';
// Import all game logos with renamed filenames
import lolLogo from '../assets/images/image.png';
import pubgLogo from '../assets/images/PUBG.png';
import fortniteLogo from '../assets/images/Fortnite.png';
import warcraftLogo from '../assets/images/world of warcraft.png';
import valorantLogo from '../assets/images/valorant.png';
import dotaLogo from '../assets/images/Dota 2.png';
import cs2Logo from '../assets/images/counter strike 2.png';
import nbaLogo from '../assets/images/NBA2K26.png';
import fifaLogo from '../assets/images/FIFA2026.png';
import ufcLogo from '../assets/images/ufc 5.png';
import mortalKombatLogo from '../assets/images/Mortal Kombat.png';
import rocketLeagueLogo from '../assets/images/rocket leugue.png';

// PC GAMES - using correct images
const pcGames = [
  { name: 'PUBG', image: pubgLogo },
  { name: 'League of Legends', image: lolLogo },
  { name: 'Warcraft', image: warcraftLogo },
  { name: 'Valorant', image: valorantLogo },
  { name: 'Dota', image: dotaLogo },
  { name: 'Fortnite', image: fortniteLogo },
  { name: 'Counter Strike 2', image: cs2Logo }
];

// PLAYSTATION GAMES - using correct images
const playstationGames = [
  { name: 'NBA 2K26', image: nbaLogo },
  { name: 'FIFA 26', image: fifaLogo },
  { name: 'UFC 5', image: ufcLogo },
  { name: 'Mortal Kombat', image: mortalKombatLogo },
  { name: 'Rocket League', image: rocketLeagueLogo }
];

const FlowingMenuSection = () => {
  return (
    <section id="games" className="games-section">
      <div className="games-wrapper">
        <h2 className="section-title-large">AVAILABLE GAMES</h2>
        
        {/* PC Games */}
        <div className="games-category">
          <h3 className="games-category-title">PC GAMES</h3>
          <div className="games-grid">
            {pcGames.map((game, index) => (
              <div key={index} className="game-card">
                <div className="game-card-image">
                  <img src={game.image} alt={game.name} />
                </div>
                <h4 className="game-card-name">{game.name}</h4>
              </div>
            ))}
            {/* Special Card */}
            <div className="game-card special-card">
              <div className="special-card-content">
                <div className="special-card-text">
                  <TextType
                    text={["+ 2000\nGAMES"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className="special-label-text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PlayStation Games */}
        <div className="games-category">
          <h3 className="games-category-title">PLAYSTATION GAMES</h3>
          <div className="games-grid">
            {playstationGames.map((game, index) => (
              <div key={index} className="game-card">
                <div className="game-card-image">
                  <img src={game.image} alt={game.name} />
                </div>
                <h4 className="game-card-name">{game.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowingMenuSection;

