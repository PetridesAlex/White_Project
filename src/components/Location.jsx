// ============================================
// LOCATION COMPONENT
// ============================================
const Location = () => {
  // Google Maps embed URL with exact coordinates for accurate pin placement
  // Coordinates: 34.6982409, 33.0486068
  const latitude = 34.6982409;
  const longitude = 33.0489068;
  const address = "Spyrou Kyprianou 4";
  
  // Use coordinates for precise pin location
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=17&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <section id="location" className="location">
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
                <div className="location-item">
                  <svg className="location-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <p className="location-label">Phone</p>
                    <a href="tel:+35797973773" className="location-text location-phone">97973773</a>
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

