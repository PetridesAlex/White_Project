// ============================================
// IMPORTS: Bring in React features and components
// ============================================
import React, { useState, useEffect, Suspense, lazy } from 'react';

// Import critical components immediately
import Loader from './components/Loader';
import Hero from './components/Hero';

// Lazy load components for better performance (code splitting)
const Services = lazy(() => import('./components/Services'));
const Reviews = lazy(() => import('./components/Reviews'));
const FlowingMenuSection = lazy(() => import('./components/FlowingMenuSection'));
const Contact = lazy(() => import('./components/Contact'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));

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
  // Loading fallback component
  const LoadingFallback = () => (
    <div style={{ 
      minHeight: '200px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      opacity: 0.5
    }}>
      <div>Loading...</div>
    </div>
  );

  return (
    <div className="App">
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
      {/* All page sections */}
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Services />
        <Reviews />
        <FlowingMenuSection />
        <Contact />
        <Location />
        <Footer />
      </Suspense>
    </div>
  );
}

// Export this component so other files can use it
export default App;
