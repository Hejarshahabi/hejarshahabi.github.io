import { Camera } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="container section page-animate">
      <div className="page-header">
        <h1 className="text-gradient"><Camera className="inline-icon" /> Gallery</h1>
        <p className="page-subtitle">A collection of photos I took with my camera or phone.</p>
      </div>

      <div className="gallery-masonry">
        {galleryData.map((photo) => (
          <div 
            className={`gallery-item ${photo.orientation}`} 
            key={photo.id}
            onContextMenu={(e) => e.preventDefault()}
          >
            <img 
              src={photo.src} 
              alt={`Gallery capture ${photo.id}`} 
              className="gallery-image" 
              loading="lazy" 
              onContextMenu={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
