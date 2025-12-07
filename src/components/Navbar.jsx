// Import useState and useEffect to manage mobile menu state
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

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
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language] || translations.en;
  const langMenuRef = useRef(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };

    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

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
        <a 
          href="#home" 
          className="logo"
          onClick={(e) => handleSmoothScroll(e, '#home')}
          aria-label="Go to homepage"
        >
          <img src={logo} alt="White Tiger Logo" className="logo-image" />
          <span className="logo-text">White Tiger</span>
        </a>
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
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>{t.nav.home}</a></li>
          <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>{t.nav.services}</a></li>
          <li><a href="#games" onClick={(e) => handleSmoothScroll(e, '#games')}>{t.nav.games}</a></li>
          <li><a href="#location" onClick={(e) => handleSmoothScroll(e, '#location')}>{t.nav.location}</a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>{t.nav.contact}</a></li>
        </ul>
        
        <div className="nav-actions">
          {/* Language Selector */}
          <div className="language-selector" ref={langMenuRef}>
            <button 
              className="language-toggle"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              aria-label="Change language"
            >
              {language === 'en' ? 'EN' : language === 'el' ? 'EL' : 'RU'}
            </button>
            {langMenuOpen && (
              <div className="language-dropdown">
                <button
                  className={`lang-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('en');
                    setLangMenuOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className={`lang-option ${language === 'el' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('el');
                    setLangMenuOpen(false);
                  }}
                >
                  Ελληνικά
                </button>
                <button
                  className={`lang-option ${language === 'ru' ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage('ru');
                    setLangMenuOpen(false);
                  }}
                >
                  Русский
                </button>
              </div>
            )}
          </div>
          {/* WhatsApp link */}
          <a 
            href="https://wa.me/35797973773" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-icon"
            aria-label="Contact us on WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
            </svg>
          </a>
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

