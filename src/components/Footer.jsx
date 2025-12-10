// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social-row">
          <a href="#" className="social-pill">
            in
          </a>
          <a href="#" className="social-pill">
            x
          </a>
          <a href="#" className="social-pill">
            m
          </a>
        </div>
        <span className="footer-text">
          © {new Date().getFullYear()} Deepak Joshi
        </span>
      </div>
    </footer>
  );
}

export default Footer;
