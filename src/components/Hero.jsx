import logo from '../assets/images/logo.png';
import LogoLoop from './LogoLoop';
import lolLogo from '../assets/images/image.png';
import warcraftLogo from '../assets/images/world of warcraft.png';
import pubgLogo from '../assets/images/PUBG.png';
import fortniteLogo from '../assets/images/Fortnite.png';
import fifaLogo from '../assets/images/FIFA2026.png';
import nbaLogo from '../assets/images/NBA2K26.png';
import ufc5Logo from '../assets/images/ufc 5.png';
import mortalKombatLogo from '../assets/images/Mortal Kombat.png';
import dotaLogo from '../assets/images/Dota 2.png';
import cs2Logo from '../assets/images/counter strike 2.png';
import valorantLogo from '../assets/images/valorant.png';
import rocketLeagueLogo from '../assets/images/rocket leugue.png';

const Hero = () => {
  // Game logos - using local images with proper labels
  const gameLogos = [
    { 
      src: lolLogo, 
      alt: 'League of Legends', 
      title: 'League of Legends',
      width: 120,
      height: 60
    },
    { 
      src: warcraftLogo, 
      alt: 'World of Warcraft', 
      title: 'World of Warcraft',
      width: 120,
      height: 60
    },
    { 
      src: pubgLogo, 
      alt: 'PUBG', 
      title: 'PUBG',
      width: 120,
      height: 60
    },
    { 
      src: fortniteLogo, 
      alt: 'Fortnite', 
      title: 'Fortnite',
      width: 120,
      height: 60
    },
    { 
      src: valorantLogo, 
      alt: 'Valorant', 
      title: 'Valorant',
      width: 120,
      height: 60
    },
    { 
      src: dotaLogo, 
      alt: 'Dota 2', 
      title: 'Dota 2',
      width: 120,
      height: 60
    },
    { 
      src: cs2Logo, 
      alt: 'Counter Strike 2', 
      title: 'Counter Strike 2',
      width: 120,
      height: 60
    },
    { 
      src: fifaLogo, 
      alt: 'FIFA 26', 
      title: 'FIFA 26',
      width: 120,
      height: 60
    },
    { 
      src: nbaLogo, 
      alt: 'NBA 2K26', 
      title: 'NBA 2K26',
      width: 120,
      height: 60
    },
    { 
      src: ufc5Logo, 
      alt: 'UFC 5', 
      title: 'UFC 5',
      width: 120,
      height: 60
    },
    { 
      src: mortalKombatLogo, 
      alt: 'Mortal Kombat', 
      title: 'Mortal Kombat',
      width: 120,
      height: 60
    },
    { 
      src: rocketLeagueLogo, 
      alt: 'Rocket League', 
      title: 'Rocket League',
      width: 120,
      height: 60
    }
  ];

  return (
    <section id="home" className="hero">
      {/* GhostCursor disabled for better performance */}
      <div className="hero-content">
        <div className="hero-logo-container">
          <h1 className="hero-welcome">White Tiger</h1>
          <p className="hero-tagline">Where Gaming Meets Good Vibes</p>
          <img src={logo} alt="White Tiger Logo" className="hero-logo" />
          <p className="hero-description">
            Welcome to White Tiger — a lively, modern hub designed for people who love to work smart, play hard, and enjoy life.
          </p>
        </div>
        <div className="hero-game-logos">
          <LogoLoop
            logos={gameLogos}
            speed={80}
            direction="left"
            logoHeight={100}
            gap={80}
            hoverSpeed={20}
            scaleOnHover={false}
            fadeOut={false}
            ariaLabel="Gaming partners"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

