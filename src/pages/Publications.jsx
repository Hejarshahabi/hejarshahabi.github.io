import { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, Calendar, Quote, RefreshCw } from 'lucide-react';
import './Publications.css';

const Publications = () => {
  const initialPapers = [
    {
        "authors": "Shahabi, Hejar; Homayouni, Saeid; Ghorbanzadeh, Omid; Perret, Didier; Giroux, Bernard; Poulin, Jimmy;",
        "title": "Unsupervised deep learning for environmental risk monitoring: Landslide detection from multi-resolution remote sensing imagery",
        "journal": "Science of Remote Sensing, 100375",
        "year": 2026,
        "link": "https://doi.org/10.2139/ssrn.5271057",
        "citations": 1096
    },
    {
        "authors": "Ghorbanzadeh, Omid; Shahabi, Hejar; Piralilou, Sepideh Tavakkoli; Crivellari, Alessandro; La Rosa, Laura Elena Cue; Atzberger, Clement; Li, Jonathan; Ghamisi, Pedram;",
        "title": "Contrastive self-supervised learning for globally distributed landslide detection",
        "journal": "IEEE Access, 12, 118453-118466",
        "year": 2024,
        "link": "https://doi.org/10.1109/access.2024.3449447",
        "citations": 33
    },
    {
        "authors": "Kariminejad, Narges; Shahabi, Hejar; Ghorbanzadeh, Omid; Shafaie, Vahid; Hosseinalizadeh, Mohsen; Homayouni, Saied; Pourghasemi, Hamid Reza;",
        "title": "Evaluation of various deep learning algorithms for landslide and sinkhole detection from UAV imagery in a semi-arid environment",
        "journal": "Earth Systems and Environment, 8(4), 1387-1398",
        "year": 2024,
        "link": "https://doi.org/10.1007/s41748-024-00419-8",
        "citations": 26
    },
    {
        "authors": "Shahabi, Hejar; Homayouni, Saeid; Perret, Didier; Giroux, Bernard;",
        "title": "Mapping complex landslide scars using deep learning and high-resolution topographic derivatives from LiDAR data in Quebec, Canada",
        "journal": "Canadian Journal of Remote Sensing, 50(1), 2418087",
        "year": 2024,
        "link": "https://doi.org/10.1080/07038992.2024.2418087",
        "citations": 7
    },
    {
        "authors": "Azhand, Donya; Pirasteh, Saied; Varshosaz, Masood; Shahabi, Hejar; Abdollahabadi, Salimeh; Teimouri, Hossein; Pirnazar, Mojtaba; Wang, Xiuqing; Li, Weilian;",
        "title": "Sentinel 1a-2a incorporating an object-based image analysis method for flood mapping and extent assessment",
        "journal": "ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences, 10, 7-17",
        "year": 2024,
        "link": "https://doi.org/10.5194/isprs-annals-x-1-2024-7-2024",
        "citations": 5
    },
    {
        "authors": "Shahabi, Hejar; Ghorbanzadeh, Omid; Homayouni, Saeid; Ghamisi, Pedram;",
        "title": "A Comparison of SimCLR and SwAV Contrastive Self-Supervised Learning Models For Landslide Detection",
        "journal": "European Geosciences Union General Assembly 2024 (EGU24), 4772",
        "year": 2024,
        "link": "https://doi.org/10.5194/egusphere-egu24-4772",
        "citations": 4
    },
    {
        "authors": "Ghorbanzadeh, Omid; Shahabi, Hejar; Crivellari, Alessandro; Homayouni, Saeid; Blaschke, Thomas; Ghamisi, Pedram;",
        "title": "Landslide detection using deep learning and object-based image analysis",
        "journal": "Landslides, 19(4), 929-939",
        "year": 2022,
        "link": "https://doi.org/10.1007/s10346-021-01843-x",
        "citations": 198
    },
    {
        "authors": "Shahabi, H; Rahimzad, M; Ghorbanzadeh, O; Piralilou, ST; Blaschke, T; Homayouni, S; Ghamisi, P;",
        "title": "Rapid mapping of landslides from Sentinel-2 data using unsupervised deep learning",
        "journal": "2022 IEEE Mediterranean and Middle-East Geoscience and Remote Sensing Symposium (M2GARSS), 17-20",
        "year": 2022,
        "link": "https://doi.org/10.1109/m2garss52314.2022.9840273",
        "citations": 9
    },
    {
        "authors": "Ghorbanzadeh, Omid; Crivellari, Alessandro; Ghamisi, Pedram; Shahabi, Hejar; Blaschke, Thomas;",
        "title": "A comprehensive transferability evaluation of U-Net and ResU-Net for landslide detection from Sentinel-2 data (case study areas from Taiwan, China, and Japan)",
        "journal": "Scientific Reports, 11(1), 14629",
        "year": 2021,
        "link": "https://doi.org/10.1038/s41598-021-94190-9",
        "citations": 153
    },
    {
        "authors": "Shahabi, Hejar; Rahimzad, Maryam; Tavakkoli Piralilou, Sepideh; Ghorbanzadeh, Omid; Homayouni, Saied; Blaschke, Thomas; Lim, Samsung; Ghamisi, Pedram;",
        "title": "Unsupervised deep learning for landslide detection from multispectral sentinel-2 imagery",
        "journal": "Remote Sensing, 13(22), 4698",
        "year": 2021,
        "link": "https://doi.org/10.3390/rs13224698",
        "citations": 76
    },
    {
        "authors": "Piralilou, Sepideh Tavakkoli; Shahabi, Hejar; Pazur, Robert;",
        "title": "Automatic landslide detection using bi-temporal sentinel 2 imagery",
        "journal": "GI_Forum, 9(1), 39-45",
        "year": 2021,
        "link": "https://doi.org/10.1553/giscience2021_01_s39",
        "citations": 18
    },
    {
        "authors": "Lei, Xinxiang; Chen, Wei; Avand, Mohammadtaghi; Janizadeh, Saeid; Kariminejad, Narges; Shahabi, Hejar; Costache, Romulus; Shahabi, Himan; Shirzadi, Ataollah; Mosavi, Amir;",
        "title": "GIS-based machine learning algorithms for gully erosion susceptibility mapping in a semi-arid region of Iran",
        "journal": "Remote Sensing, 12(15), 2478",
        "year": 2020,
        "link": "https://doi.org/10.3390/rs12152478",
        "citations": 133
    },
    {
        "authors": "Ghorbanzadeh, Omid; Shahabi, Hejar; Mirchooli, Fahimeh; Valizadeh Kamran, Khalil; Lim, Samsung; Aryal, Jagannath; Jarihani, Ben; Blaschke, Thomas;",
        "title": "Gully erosion susceptibility mapping (GESM) using machine learning methods optimized by the multi‑collinearity analysis and K-fold cross-validation",
        "journal": "Geomatics, Natural Hazards and Risk, 11(1), 1653-1678",
        "year": 2020,
        "link": "https://doi.org/10.1080/19475705.2020.1810138",
        "citations": 69
    },
    {
        "authors": "Ghorbanzadeh, Omid; Meena, Sansar Raj; Abadi, Hejar Shahabi Sorman; Piralilou, Sepideh Tavakkoli; Zhiyong, Lv; Blaschke, Thomas;",
        "title": "Landslide mapping using two main deep-learning convolution neural network streams combined by the Dempster–Shafer model",
        "journal": "IEEE Journal of selected topics in applied earth observations and remote sensing, 14, 452-463",
        "year": 2020,
        "link": "https://doi.org/10.1109/jstars.2020.3043836",
        "citations": 64
    },
    {
        "authors": "Tavakkoli Piralilou, Sepideh; Shahabi, Hejar; Jarihani, Ben; Ghorbanzadeh, Omid; Blaschke, Thomas; Gholamnia, Khalil; Meena, Sansar Raj; Aryal, Jagannath;",
        "title": "Landslide detection using multi-scale image segmentation and different machine learning models in the higher himalayas",
        "journal": "Remote Sensing, 11(21), 2575",
        "year": 2019,
        "link": "https://doi.org/10.3390/rs11212575",
        "citations": 187
    },
    {
        "authors": "Shahabi, Hejar; Jarihani, Ben; Tavakkoli Piralilou, Sepideh; Chittleborough, David; Avand, Mohammadtaghi; Ghorbanzadeh, Omid;",
        "title": "A semi-automated object-based gully networks detection using different machine learning models: A case study of Bowen catchment, Queensland, Australia",
        "journal": "Sensors, 19(22), 4893",
        "year": 2019,
        "link": "https://doi.org/10.3390/s19224893",
        "citations": 92
    },
    {
        "authors": "Shahabi, Hejar; Jarihani, Ben; Chittleborough, David; Piralilo, Sepideh Tavakkoli;",
        "title": "Gully Networks Detection by Integration of Machine Learning and Geographic Object-Based Image Analysis",
        "journal": "8th International Symposium on Gully Erosion",
        "year": 2019,
        "link": "https://doi.org/10.21203/rs.3.rs-3299903/v1",
        "citations": 92
    },
    {
        "authors": "Gudiyangada Nachappa, Thimmaiah; Tavakkoli Piralilou, Sepideh; Ghorbanzadeh, Omid; Shahabi, Hejar; Blaschke, Thomas;",
        "title": "Landslide susceptibility mapping for Austria using geons and optimization with the Dempster-Shafer theory",
        "journal": "Applied Sciences, 9(24), 5393",
        "year": 2019,
        "link": "https://doi.org/10.3390/app9245393",
        "citations": 59
    },
    {
        "authors": "Feizizadeh, Bakhtiar; Shahabi Sorman Abadi, Hejar; Didehban, Khalil; Blaschke, Thomas; Neubauer, Franz;",
        "title": "Object-based thermal remote-sensing analysis for fault detection in Mashhad County, Iran",
        "journal": "Canadian Journal of Remote Sensing, 45(6), 847-861",
        "year": 2019,
        "link": "https://doi.org/10.1080/07038992.2019.1704622",
        "citations": 5
    },
    {
        "authors": "ROSTAMZADEH, Hashem; Darabi, Sadrolah; Shahabi, Hejar;",
        "title": "Change detection of Oak forests using object-based classification of multitemporal Landsat imageries (Case study: forests of the northern province of Ilam)",
        "journal": "",
        "year": 2017,
        "link": "https://doi.org/10.5897/ajar11.2041",
        "citations": 1
    },
    {
        "authors": "Feizizadeh, Bakhtiar; Shahabi, Hejar; Seyfei, Houshang;",
        "title": "Application of fuzzy-object based image analysis approach for identifying and zoning salt-dust storms of Urmia Lake eastern plain",
        "journal": "Environmental Management Hazards, 3(3), 269-284",
        "year": 2016,
        "link": "https://doi.org/10.4314/jasem.v23i8.15",
        "citations": 22
    }
];

  const [papers, setPapers] = useState(initialPapers);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchLiveCitations = async () => {
      setIsUpdating(true);
      try {
        const doiMappings = [];
        const doisToFetch = [];
        
        initialPapers.forEach((paper, index) => {
          if (paper.link && paper.link.includes('doi.org/')) {
            const doi = paper.link.split('doi.org/')[1];
            doiMappings.push({ index, doi: doi.toLowerCase() });
            doisToFetch.push(doi);
          }
        });

        if (doisToFetch.length > 0) {
          const response = await fetch(`https://api.openalex.org/works?filter=doi:${doisToFetch.join('|')}&per-page=50`);
          const data = await response.json();
          
          if (data && data.results) {
            const updatedPapers = [...initialPapers];
            
            data.results.forEach(work => {
              if (work.doi) {
                const workDoi = work.doi.replace('https://doi.org/', '').toLowerCase();
                const match = doiMappings.find(m => m.doi === workDoi);
                if (match && work.cited_by_count !== undefined) {
                  updatedPapers[match.index].citations = work.cited_by_count;
                }
              }
            });
            
            setPapers(updatedPapers);
          }
        }
      } catch (error) {
        console.error("Failed to fetch live citations:", error);
      } finally {
        setIsUpdating(false);
      }
    };

    fetchLiveCitations();
  }, []);

  return (
    <div className="container section page-animate">
      <div className="page-header">
        <h1 className="text-gradient"><BookOpen className="inline-icon" /> Publications</h1>
        <p className="page-subtitle">
          My complete list of research contributions and peer-reviewed papers.
          {isUpdating ? 
            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginTop: '10px', fontSize: '0.9rem', color: 'var(--primary-color)'}}>
              <RefreshCw size={14} className="spin" /> Syncing live citations...
            </span> : 
            <span style={{display: 'block', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)'}}>
              ✓ Citations auto-synced via OpenAlex Academic Database
            </span>
          }
        </p>
      </div>

      <div className="publications-list">
        {papers.map((paper, index) => (
          <div className="card publication-card" key={index}>
            <div className="pub-header-row" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className="pub-year badge"><Calendar size={12} className="inline-icon" style={{marginRight: '2px', marginBottom: '0'}}/> {paper.year}</div>
              {paper.citations > 0 && (
                <div className="pub-citations badge" style={{background: 'rgba(255,255,255,0.1)', color: 'var(--text-color)', borderColor: 'transparent'}}>
                  <Quote size={12} className="inline-icon" style={{marginRight: '4px', marginBottom: '0'}}/> {paper.citations} citations
                </div>
              )}
            </div>
            <h3 className="pub-title">{paper.title}</h3>
            <p className="pub-authors">{paper.authors}</p>
            <div className="pub-meta">
              <span className="pub-journal">{paper.journal}</span>
              {paper.link && (
                <a href={paper.link} className="pub-link" target="_blank" rel="noreferrer">
                  Read Paper <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
