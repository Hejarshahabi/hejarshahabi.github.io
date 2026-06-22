import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Hejar Shahabi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
