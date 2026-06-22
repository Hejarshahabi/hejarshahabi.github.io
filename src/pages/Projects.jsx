import { Code, Download, Star, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "GeoPatch",
      description: "Patch extraction for Remote Sensing imagery. Widely used with over 40k downloads.",
      tags: ["Python", "PyPI", "Remote Sensing", "Deep Learning"],
      badge: "https://static.pepy.tech/badge/geopatch",
      link: "https://pypi.org/project/geopatch/"
    },
    {
      name: "PySIC",
      description: "Machine Learning-based satellite image classification package.",
      tags: ["Python", "PyPI", "Machine Learning", "Classification"],
      badge: "https://static.pepy.tech/badge/pysic",
      link: "https://pypi.org/project/pysic/"
    },
    {
      name: "TerraTiff",
      description: "A lightweight, GDAL-free Python package for reading, writing, and exporting GeoTIFF raster files.",
      tags: ["Python", "PyPI", "GeoTIFF", "Lightweight"],
      badge: "https://static.pepy.tech/badge/terratiff",
      link: "https://pypi.org/project/terratiff/"
    }
  ];

  return (
    <div className="container section page-animate">
      <div className="page-header">
        <h1 className="text-gradient"><Code className="inline-icon" /> Open Source Projects</h1>
        <p className="page-subtitle">Tools and packages I've developed for the geospatial community.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card project-card" key={index}>
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="badge" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <div className="project-stats">
                <img src={project.badge} alt={`${project.name} downloads`} style={{ height: '24px' }} />
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View on PyPI <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
