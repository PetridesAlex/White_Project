// ============================================
// LOCATION COMPONENT
// ============================================
import locationBackground from '../assets/images/download (2).jpeg';

const Location = () => {
  // Google Maps embed URL with exact coordinates for accurate pin placement
  // Coordinates: 34.6982409, 33.0486068
  const latitude = 34.6982409;
  const longitude = 33.0489068;
  const address = "Spyrou Kyprianou 4";
  
  // Better Google Maps embed URL format
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=17&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const locationStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${locationBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="location" className="location" style={locationStyle}>
      <div className="location-wrapper">
        <div className="location-content">
          <div className="location-info-wrapper">
            <h2 className="section-title-large">Location</h2>
            <div className="location-info">
              <div className="location-details">
                <div className="location-item">
                  <svg className="location-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="location-label">Address</p>
                    <p className="location-text">Spyrou Kyprianou 4</p>
                    <p className="location-text">Cyprus</p>
                  </div>
                </div>
              </div>
              <a 
                href={googleMapsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary location-btn"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <div className="location-map">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="White Tiger Location"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

