import ElectricBorder from './ElectricBorder';

const Services = () => {

  const services = [
    {
      icon: '🚀',
      title: 'High-Speed Internet',
      description: 'Experience ultra-fast fiber-optic internet built for gamers, creators, and professionals. Enjoy seamless browsing, lightning-quick downloads, and zero-lag online performance.'
    },
    {
      icon: '🎮',
      title: 'Gaming Zone',
      description: 'Premium gaming PCs with the latest hardware and top-tier graphics cards.'
    },
    {
      icon: '💼',
      title: 'Business Center',
      description: 'Quiet workspace with meeting facilities.'
    },
    {
      icon: '☕',
      title: 'Cafe & Lounge',
      description: 'Comfortable seating, refreshments, and a relaxing atmosphere for all your needs.'
    }
  ];

  // Set white solid background
  const servicesStyle = {
    background: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <section id="services" className="services" style={servicesStyle}>
      <div className="services-content">
        <h2 className="section-title-large">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-wrapper"
            >
              <ElectricBorder
                color="#00f0ff"
                speed={1.2}
                chaos={1.2}
                thickness={3}
                style={{ borderRadius: 16 }}
              >
                <div className="service-card">
                  <div className="service-card-front">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-card-back">
                    <p>{service.description}</p>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

