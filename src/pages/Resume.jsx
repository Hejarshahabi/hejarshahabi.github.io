import { Briefcase, Calendar, MapPin, GraduationCap, Code, Trophy, FileText } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      title: "Remote Sensing Analyst - Mitacs Internship",
      company: "Beneva Insurance Company",
      location: "Québec, Canada",
      date: "Jun 2024 – Apr 2026",
      bullets: [
        "Developed AI models for high-resolution flood risk mapping using deep learning on geospatial and remote sensing data.",
        "Analyzed aerial imagery to classify building materials (walls, chimneys, garages) for insurance risk modeling.",
        "Developed labeling protocols, annotated datasets, and built supervised and self-supervised AI models for segmentation and object detection."
      ]
    },
    {
      title: "Remote Sensing Analyst",
      company: "Statistics Canada",
      location: "Ottawa, Canada",
      date: "Sep 2022 – Jan 2023",
      bullets: [
        "Architected Python-based preprocessing workflows to standardize heterogeneous satellite and aerial imagery for geospatial machine learning applications.",
        "Deployed advanced computer vision models to detect and map solar infrastructure across high-resolution optical imagery.",
        "Automated the extraction and vectorization of raster predictions using Python and QGIS, compiling comprehensive datasets for national energy reporting."
      ]
    },
    {
      title: "Director, Geospatial & Surveying Division",
      company: "Sotorgsaz Company",
      location: "Urmia, Iran",
      date: "Sep 2017 – Aug 2020",
      bullets: [
        "Directed end-to-end GIS and land surveying projects, overseeing precise spatial data collection, advanced analysis, and cartographic mapping.",
        "Integrated modern GIS technologies into existing workflows, transforming raw geospatial data into actionable insights to drive strategic, data-informed decision-making.",
        "Cultivated a high-performing and collaborative team culture by mentoring staff, championing professional development, and optimizing division workflows.",
        "Enforced strict compliance with industry surveying and geospatial standards, elevating data accuracy and expanding the organization’s capacity to deliver robust geospatial solutions."
      ]
    },
    {
      title: "Remote Sensing & GIS Analyst",
      company: "Sadrab Niro Consulting",
      location: "Urmia, Iran",
      date: "Mar 2017 – Aug 2017",
      bullets: [
        "Curated and processed comprehensive spatial datasets to power Geographic Information Systems (GIS) for watershed management.",
        "Implemented semi-automated extraction techniques on high-resolution aerial and satellite imagery to accelerate watershed mapping and analysis.",
        "Optimized geodatabase design and maintenance, significantly streamlining enterprise GIS implementation and data management."
      ]
    }
  ];

  const education = [
    {
      degree: "PhD in Earth Sciences (Remote Sensing & GeoAI)",
      school: "Institut national de la recherche scientifique (INRS)",
      location: "Québec, Canada",
      date: "2022 – 2026"
    },
    {
      degree: "MSc in Remote Sensing and GIS",
      school: "University of Tabriz",
      location: "Tabriz, Iran",
      date: "2015 – 2017"
    },
    {
      degree: "BSc in Surveying Engineering",
      school: "University College of Omran and Tosseeh",
      location: "Hamadan, Iran",
      date: "2010 – 2013"
    }
  ];

  const skills = [
    { category: "Programming & ML/DL", items: "Python (expert), PyTorch, TensorFlow, scikit-learn, NumPy, Pandas, Matplotlib, JavaScript, HTML/CSS, Git" },
    { category: "Geospatial & Earth Observation", items: "Google Earth Engine (GEE), Geemap, GeoPandas, ArcGIS Pro, ArcMap, QGIS, ENVI, eCognition, ERDAS, SNAP, SARscape" },
    { category: "Other", items: "PostgreSQL, Survey 123, AutoCAD/Civil 3D, Microsoft Office" },
    { category: "Languages", items: "English (C1 Advanced), Farsi, Azerbaijani, Kurdish (Native), French (Basic), Turkish (Intermediate)" }
  ];

  const awards = [
    "Mitacs Internship Award, Beneva Insurance Company – Jul 2025–Apr 2026",
    "Mitacs Internship Award, Beneva Insurance Company – Jun 2024–Jan 2025",
    "PBEEE Doctoral Research Scholarship (FRQ) – May 2024–Dec 2025",
    "INRS PhD Scholarships & Tuition Exemption – 4-year funding (2022-2025)",
    "2nd Place, IEEE GRSS 3-Minute Thesis, Canadian Symposium on Remote Sensing (2022)",
    "Editor’s Choice Award, Remote Sensing Journal (2019) – Co-authored"
  ];

  return (
    <div className="container section page-animate">
      <div className="page-header">
        <h1 className="text-gradient"><FileText className="inline-icon" /> Resume</h1>
        <p className="page-subtitle">My professional experience, education, technical skills, and awards.</p>
      </div>

      {/* Experience Section */}
      <div className="resume-section-title">
        <h2><Briefcase className="inline-icon" /> Professional Experience</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="card timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="timeline-date"><Calendar size={14} /> {exp.date}</span>
              </div>
              <div className="timeline-company">
                <span className="company-name">{exp.company}</span>
                <span className="company-location"><MapPin size={14} /> {exp.location}</span>
              </div>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="resume-section-title">
        <h2><GraduationCap className="inline-icon" /> Education</h2>
      </div>
      <div className="timeline">
        {education.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="card timeline-content">
              <div className="timeline-header">
                <h3>{edu.degree}</h3>
                <span className="timeline-date"><Calendar size={14} /> {edu.date}</span>
              </div>
              <div className="timeline-company">
                <span className="company-name">{edu.school}</span>
                <span className="company-location"><MapPin size={14} /> {edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="resume-section-title">
        <h2><Code className="inline-icon" /> Skills & Expertise</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="card skill-card" key={index}>
            <h3>{skill.category}</h3>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <div className="resume-section-title">
        <h2><Trophy className="inline-icon" /> Awards & Professional Activities</h2>
      </div>
      <div className="card awards-card">
        <ul className="awards-list">
          {awards.map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Resume;
