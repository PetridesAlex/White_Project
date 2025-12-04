import { useEffect, useRef } from 'react';
// Import features background image (cafe interior)
import featuresBackground from '../assets/images/download (2).jpeg';

const Features = () => {
  const featureItemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    featureItemsRef.current.forEach(item => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
      }
    });

    return () => {
      featureItemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const features = [
    {
      number: '01',
      title: '24/7 Availability',
      description: 'Open round the clock to serve you whenever you need us.'
    },
    {
      number: '02',
      title: 'State-of-the-Art Equipment',
      description: 'Latest technology and regularly maintained hardware for optimal performance.'
    },
    {
      number: '03',
      title: 'Affordable Pricing',
      description: 'Competitive rates with flexible hourly and package deals.'
    },
    {
      number: '04',
      title: 'Expert Support',
      description: 'Friendly staff ready to assist with any technical needs.'
    }
  ];

  // Set background image style with overlay
  const featuresStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(30, 60, 114, 0.85), rgba(42, 82, 152, 0.85), rgba(74, 144, 226, 0.85)), url(${featuresBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="features" className="features" style={featuresStyle}>
      <div className="features-wrapper">
        <h2 className="section-title-large">WHY CHOOSE US</h2>
        <div className="features-content">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item"
              ref={el => featureItemsRef.current[index] = el}
            >
              <div className="feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

