import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column-logo">
          <div className="footer-logo"><img src="../../../public/icons/logoFooter.png" alt="Logo" /></div>
        </div>
        <div className="footer-column">
          <div className="footer-menu">
            <h2 className="footer-title">Menu</h2>
            <ul>
              <li>Our countries and cities</li>
              <li>Become a Localie</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h2 className="footer-title">Contact Us</h2>
          <div className="footer-contact">
            <ul>
              <li>WhatsApp: +123456789</li>
              <li>E-mail: example@example.com</li>
              <li>Telegram: @example</li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h2 className="footer-title">Social Media</h2>
          <div className="footer-social">
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-copyright">
        © 2024 GO Trip, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
