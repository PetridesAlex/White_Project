// Import useState to manage mobile menu state
import { useState } from 'react';

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = () => {
  // ============================================
  // STATE: Track if mobile menu is open
  // ============================================
  // menuOpen = true if menu is open, false if closed
  // setMenuOpen = function to change menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // ============================================
  // FUNCTION: Toggle mobile menu open/closed
  // ============================================
  // !menuOpen means "opposite of current value"
  // If menuOpen is true, set to false (close)
  // If menuOpen is false, set to true (open)
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // ============================================
  // FUNCTION: Smooth scroll to section
  // ============================================
  // e = event object
  // targetId = which section to scroll to (like '#home')
  const handleSmoothScroll = (e, targetId) => {
    // Stop default link behavior (jumping instantly)
    e.preventDefault();
    
    // Find the target element on the page
    const target = document.querySelector(targetId);
    
    if (target) {
      // Calculate position (accounting for navbar height)
      const offsetTop = target.offsetTop - 80;
      
      // Smoothly scroll to that position
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'  // Smooth animation instead of instant jump
      });
    }
    
    // Close mobile menu after clicking link
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <svg className="logo-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L60 40 L90 40 L70 60 L80 90 L50 70 L20 90 L30 60 L10 40 L40 40 Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="8" fill="#fff"/>
          </svg>
          <span className="logo-text">White Tiger</span>
        </div>
        {/* 
          Navigation menu
          className uses template literal to conditionally add 'active' class
          If menuOpen is true, class becomes "nav-menu active"
          If menuOpen is false, class is just "nav-menu"
        */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {/* 
            Navigation links
            onClick: When clicked, smoothly scroll to section
            (e) => handleSmoothScroll(e, '#home') is an arrow function
          */}
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
        </ul>
        
        <div className="nav-actions">
          {/* 
            Mobile menu toggle button (hamburger icon)
            onClick: Opens/closes mobile menu
            The three spans create the hamburger icon
            When menu is open, they transform into an X
          */}
          <button className="menu-toggle" aria-label="Toggle menu" onClick={handleMenuToggle}>
            {/* First line - rotates when menu opens */}
            <span style={{
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }}></span>
            {/* Middle line - fades out when menu opens */}
            <span style={{
              opacity: menuOpen ? 0 : 1
            }}></span>
            {/* Third line - rotates opposite direction when menu opens */}
            <span style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

