import React from 'react';
import './FlowingMenu.css';

function FlowingMenu({ items = [], horizontal = false }) {
  return (
    <div className="menu-wrap">
      <nav className={`menu ${horizontal ? 'horizontal' : ''}`}>
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const repeatedMarqueeContent = Array.from({ length: 10 }).map((_, idx) => (
    <React.Fragment key={idx}>
      {text && <span>{text}</span>}
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div className="menu__item">
      <div className="marquee marquee--visible">
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;

