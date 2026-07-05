import React from 'react';
import { Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-panel">
          {/* Main Footer Links & Newsletter */}
          <div className="footer-grid">
            
            {/* Column 1: Newsletter (Moved to left) */}
            <div className="footer-col col-newsletter">
              <div className="footer-logo">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#FF6B6B" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M16 8L8 13V19L16 24L24 19V13L16 8Z" stroke="#4ECDC4" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className="logo-text-footer">Emvive</span>
              </div>
              
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email Address*</label>
                </div>
                
                <div className="checkbox-group">
                  <input type="checkbox" id="privacy-consent" required />
                  <label htmlFor="privacy-consent">
                    I agree to Emvive processing my personal data in accordance with Emvive's <a href="#">Privacy Policy</a>.
                  </label>
                </div>
                
                <button type="submit" className="subscribe-btn">
                  SUBSCRIBE
                </button>
              </form>
            </div>
            
            {/* Column 2: Products (Large text) */}
            <div className="footer-col col-large">
              <h4 className="footer-heading">PRODUCTS</h4>
              <ul className="footer-links large-links">
                <li><a href="#products">Cloud ERP</a></li>
                <li><a href="#products">HR & Payroll</a></li>
                <li><a href="#products">CRM & Sales</a></li>
                <li><a href="#products">Advanced Reporting</a></li>
                <li><a href="#products">Workflow Automation</a></li>
                <li><a href="#products">E-Invoicing</a></li>
              </ul>
            </div>

            {/* Column 3: Industries */}
            <div className="footer-col">
              <h4 className="footer-heading">INDUSTRIES</h4>
              <ul className="footer-links">
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Retail & E-commerce</a></li>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Financial Services</a></li>
                <li><a href="#">Logistics & Supply Chain</a></li>
                <li><a href="#">Technology & SaaS</a></li>
                <li><a href="#">Government & Public Sector</a></li>
              </ul>
            </div>

            {/* Column 4: Legal & Social Pills */}
            <div className="footer-col col-pills">
              <h4 className="footer-heading">LEGAL & SOCIAL</h4>
              <div className="footer-legal-grid">
                <a href="#" className="legal-pill">Terms of Service</a>
                <a href="#" className="legal-pill">Privacy Policy</a>
                <a href="#" className="legal-pill">Cookie Policy</a>
                <a href="#" className="legal-pill">Brand Guidelines</a>
                <div className="legal-pill footer-social">
                  Follow us <a href="#" aria-label="Social"><Globe size={18} /></a>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Huge Typography Section */}
        <div className="footer-huge-text">
          <h1>Unify. Automate. Scale.</h1>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; 2026 Emvive Inc.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
