import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* PRODUCTS */}
        <div className="footer-section">
          <h4>PRODUCTS</h4>
          <ul>
            <li>Web3Modal</li>
            <li>Web3Modal</li>
            <li>Web3Modal</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="footer-section">
          <h4>RESOURCES</h4>
          <ul>
            <li>Docs</li>
            <li>WalletConnect Cloud</li>
            <li>Github</li>
            <li>Status</li>
            <li>Explorer</li>
            <li>Explorer Guidelines</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Newsroom</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="footer-section">
          <h4>CONNECT</h4>
          <ul>
            <li>X (Twitter)</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Discord</li>
            <li>Get in touch</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-section newsletter">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>You can unsubscribe at any time. Our Privacy Policy is available here.</p>
          <form>
            <input type="email" placeholder="username@site.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;