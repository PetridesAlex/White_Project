// ============================================
// IMPORTS: Bring in React features and components
// ============================================
import React, { useState, useEffect } from 'react';

// Import all our custom components (like importing functions)
import Loader from './components/Loader';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import FlowingMenuSection from './components/FlowingMenuSection';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

// ============================================
// MAIN APP COMPONENT
// ============================================
// This is the "brain" of our app - it controls everything
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  // Enhanced lazy scroll with Intersection Observer
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [isLoading]);

  // ============================================
  // RENDER: What the component displays
  // ============================================
  // This JSX (HTML-like code) is what users see
  return (
    <div className="App">
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      {/* All page sections */}
      <Hero />
      <Services />
      <Reviews />
      <FlowingMenuSection />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

// Export this component so other files can use it
export default App;
