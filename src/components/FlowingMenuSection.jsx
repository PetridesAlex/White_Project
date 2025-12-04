import React from 'react';
import FlowingMenu from './FlowingMenu';

const pcGames = [
  { link: '#', text: 'League of Legends', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Warcraft', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'CS2', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'PUBG', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'Fortnite', image: 'https://picsum.photos/600/400?random=5' }
];

const playstationGames = [
  { link: '#', text: 'FIFA 26', image: 'https://picsum.photos/600/400?random=6' },
  { link: '#', text: 'NBA 2K26', image: 'https://picsum.photos/600/400?random=7' },
  { link: '#', text: 'UFC 5', image: 'https://picsum.photos/600/400?random=8' },
  { link: '#', text: 'Mortal Kombat', image: 'https://picsum.photos/600/400?random=9' }
];

const FlowingMenuSection = () => {
  return (
    <section id="flowing-menu" style={{ height: '600px', position: 'relative', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
      {/* First Row - PC Games */}
      <div className="menu-row menu-row--pc">
        <FlowingMenu items={pcGames} />
      </div>
      {/* Second Row - PlayStation Games */}
      <div className="menu-row menu-row--playstation">
        <FlowingMenu items={playstationGames} />
      </div>
    </section>
  );
};

export default FlowingMenuSection;

