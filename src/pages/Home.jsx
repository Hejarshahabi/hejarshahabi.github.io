import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/header.jpg" alt="Header Background" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="profile-wrap-container">
            <div className="profile-image-container">
              <img src="/portrait.png" alt="Hejar Shahabi" className="profile-image" />
            </div>
            
            <h1 className="text-gradient">Hejar Shahabi</h1>
            <h2 className="profile-title">GeoAI and Remote Sensing</h2>
            
            <p className="location"><MapPin size={18} className="inline-icon" style={{marginRight: '6px'}}/> Québec, QC, Canada</p>
            
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/hejarshahabi" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
              <a href="https://x.com/HejarShahabi" className="social-icon" aria-label="Twitter" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
              <a href="mailto:hejarshahabi@gmail.com" className="social-icon" aria-label="Email"><FaEnvelope size={20} /></a>
            </div>
            
            <div className="professional-summary-text">
              <p style={{ marginBottom: '1rem' }}>
                I am an Earth Sciences and GeoAI Specialist with over five years of experience translating complex spatial data into scalable solutions. I apply advanced machine learning to multi-source datasets (LiDAR, multispectral, hyperspectral) and build automated image processing pipelines utilizing spatial geodatabases, algorithmic scripting, and cloud-based GIS platforms. Currently, my work focuses on pioneering GeoFoundation models and advancing Earth observation through data fusion and AI-driven workflows.
              </p>
            </div>
            
            <div className="hero-actions">
              <Link to="/resume" className="btn btn-glass btn-glass-primary">
                Resume <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-glass">
                Projects
              </Link>
              <a href="mailto:hejarshahabi@gmail.com" className="btn btn-glass">
                Contact
              </a>
            </div>
            
            <div style={{ clear: 'both' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
