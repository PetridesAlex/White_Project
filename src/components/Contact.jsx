// Import useState hook to manage form data
import { useState } from 'react';
import contactBackground from '../assets/images/download (2).jpeg';

// Contact component - handles the contact form
const Contact = () => {
  // ============================================
  // STATE: Store form input values
  // ============================================
  // formData = object containing all form fields
  // setFormData = function to update form data
  // Starting values are all empty strings
  const [formData, setFormData] = useState({
    name: '',      // User's name
    email: '',     // User's email
    message: ''    // User's message
  });

  // ============================================
  // FUNCTION: Handle input changes
  // ============================================
  // This runs every time user types in any input field
  // 'e' = event object (contains info about what happened)
  const handleChange = (e) => {
    // Update formData state
    setFormData({
      ...formData,              // Keep all existing values (spread operator)
      [e.target.name]: e.target.value  // Update only the field that changed
      // e.target.name = 'name', 'email', or 'message'
      // e.target.value = what user typed
    });
  };

  // ============================================
  // FUNCTION: Handle form submission
  // ============================================
  // This runs when user clicks "Send Message" button
  const handleSubmit = (e) => {
    // Prevent default form submission (stops page from reloading)
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }
    
    // Create Gmail compose URL with pre-filled form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open Gmail compose in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=whitetigerbypro@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    
    // Reset form after opening Gmail
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Show confirmation message
    alert('Opening Gmail to send your message. Please complete the email and send it.');
  };

  return (
    <section 
      id="contact" 
      className="contact" 
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${contactBackground}") center/cover no-repeat`
      }}
    >
      <div className="contact-wrapper">
        <h2 className="section-title-large">VISIT US TODAY</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Location</h3>
              <a 
                href="https://maps.google.com/?q=Spyrou+Kyprianou+Ave+4,+Limassol+4003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-button"
              >
                📍 Spyrou Kyprianou Ave 4, Limassol 4003
              </a>
            </div>
            <div className="info-item">
              <h3>🕐 Hours</h3>
              <div className="contact-button">
                Friday 09:00am-03:00am<br />
                Saturday 09:00am-03:00am<br />
                Sunday 09:00am-03:00am<br />
                Monday 09:00am-03:00am<br />
                Tuesday 09:00am-03:00am<br />
                Wednesday 09:00am-03:00am<br />
                Thursday 09:00am-03:00am
              </div>
            </div>
            <div className="info-item">
              <h3>📞 Contact</h3>
              <div className="contact-buttons">
                <a href="tel:+35797973773" className="contact-button">
                  📞 Phone: +35797973773
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=whitetigerbypro@gmail.com&su=Contact%20from%20White%20Tiger%20Website" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  ✉️ Email: whitetigerbypro@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3 className="contact-form-title">Ready to Connect?</h3>
            {/* 
              Form element
              onSubmit: When form is submitted, run handleSubmit function
            */}
            <form onSubmit={handleSubmit}>
              {/* 
                Controlled Input: React controls the value
                - value: Shows formData.name (what's in state)
                - onChange: When user types, update state via handleChange
                - name: Must match the key in formData object
              */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}        // Controlled by React state
                onChange={handleChange}      // Update state when typing
                required                      // HTML5 validation
              />
              
              {/* Email input - same pattern */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              {/* Textarea - same pattern */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              
              {/* Submit button - triggers form submission */}
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

