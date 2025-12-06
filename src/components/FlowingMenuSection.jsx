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
import tekken8Logo from '../assets/images/TEKKEN 8.png';
import gtaVLogo from '../assets/images/GTA V.png';

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
  { name: 'Rocket League', image: rocketLeagueLogo },
  { name: 'Tekken 8', image: tekken8Logo },
  { name: 'GTA V', image: gtaVLogo }
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
            {pcGames.map((game, index) => {
              // Add specific class names for games that need special styling
              const getImageClassName = (gameName) => {
                if (gameName === 'Counter Strike 2') {
                  return 'game-card-image image-tekken';
                }
                return 'game-card-image';
              };
              
              return (
                <div key={index} className="game-card">
                  <div className={getImageClassName(game.name)}>
                    <img src={game.image} alt={game.name} />
                  </div>
                  <h4 className="game-card-name">{game.name}</h4>
                </div>
              );
            })}
            {/* Special Card */}
            <div className="game-card special-card">
              <div className="special-card-content">
                <div className="special-card-text">
                  <TextType
                    text={["+2000\nGAMES"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
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
            {playstationGames.map((game, index) => {
              // Add specific class names for games that need special styling
              const getImageClassName = (gameName) => {
                if (gameName === 'NBA 2K26' || gameName === 'UFC 5') {
                  return 'game-card-image image-contain';
                }
                if (gameName === 'Tekken 8') {
                  return 'game-card-image image-tekken';
                }
                return 'game-card-image';
              };
              
              return (
                <div key={index} className="game-card">
                  <div className={getImageClassName(game.name)}>
                    <img src={game.image} alt={game.name} />
                  </div>
                  <h4 className="game-card-name">{game.name}</h4>
                </div>
              );
            })}
            {/* Special Card */}
            <div className="game-card special-card">
              <div className="special-card-content">
                <div className="special-card-text">
                  <TextType
                    text={["More games added regularly — stay tuned for updates!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    className="special-label-text playstation-special-text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowingMenuSection;

