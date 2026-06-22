import { Link, useLocation } from 'react-router-dom';
import { Code, Briefcase, Mail, GraduationCap } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/publications', label: 'Publications' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand text-gradient">Hejar Shahabi</Link>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-socials">
          {/* Replace placeholders with actual URLs later */}
          <a href="https://github.com/hejarshahabi" target="_blank" rel="noreferrer" title="GitHub"><Code size={20} /></a>
          <a href="https://www.linkedin.com/in/hejarshahabi" target="_blank" rel="noreferrer" title="LinkedIn"><Briefcase size={20} /></a>
          <a href="https://scholar.google.com/citations?user=vro-TaIAAAAJ&hl=en" target="_blank" rel="noreferrer" title="Google Scholar"><GraduationCap size={20} /></a>
          <a href="mailto:hejarshahabi@gmail.com" title="Email"><Mail size={20} /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
