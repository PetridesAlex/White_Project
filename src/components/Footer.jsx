// ============================================
// FOOTER COMPONENT
// ============================================
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="White Tiger Logo" className="footer-logo-img" />
            <span className="footer-logo-text">White Tiger</span>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://www.instagram.com/white_tiger_cy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@white.tiger725?_r=1&_d=secCgYIASAHKAESPgo8guzou0Zf8hr6L6z6PT46qj2uc3y%2Fegh2uRVZk4WDPKMwPArXA4X8EuzHZiwhyusI%2Ba4pJi4pDtb1l4QPGgA%3D&_svg=2&checksum=2508b71bb3da817ab60864a4eba786fddd0c2eabbd323d6e2aeaea90eced51de&item_author_type=2&sec_uid=MS4wLjABAAAA81mhP4qz6hEs6RjjgMjwm7uqxw8aa7MncMGTJPo1jWPsOaxTe9eaKWCbBu8Fu8E6&sec_user_id=MS4wLjABAAAA6FpvxDCFzHjlDla-RlEYWt4SI77kJQWauyI28TovWR-Jl3PkRnpBQeEc19Gst1yP&share_app_id=1233&share_author_id=7568839364731880470&share_link_id=5D7857F8-D920-4FBB-B606-7F9099851A09&share_region=CY&share_scene=1&sharer_language=en&social_share_type=5&source=h5_m&timestamp=1764946291&tt_from=copy&u_code=dbf8j07g87kmff&ug_btm=b6880%2Cb5836&user_id=6808191380541342726&utm_campaign=client_share&utm_medium=ios&utm_source=copy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="TikTok"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.83 6.83 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </a>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Discord"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

