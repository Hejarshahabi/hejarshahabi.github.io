import { useState, useEffect } from 'react';
import { Camera, Heart } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import './Gallery.css';

const GalleryItem = ({ photo }) => {
  const storageKey = `liked_photo_${photo.id}`;
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(photo.likes || 0);

  useEffect(() => {
    const isLiked = localStorage.getItem(storageKey) === 'true';
    if (isLiked) {
      setLiked(true);
      setLikesCount((photo.likes || 0) + 1);
    }
  }, [photo.id, photo.likes, storageKey]);

  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikesCount((photo.likes || 0));
      localStorage.removeItem(storageKey);
    } else {
      setLiked(true);
      setLikesCount((photo.likes || 0) + 1);
      localStorage.setItem(storageKey, 'true');
    }
  };

  return (
    <div 
      className={`gallery-item ${photo.orientation}`} 
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
      <div className="like-container">
        <button 
          className={`like-button ${liked ? 'liked' : ''}`}
          onClick={handleLike}
          aria-label={liked ? "Unlike photo" : "Like photo"}
        >
          <Heart 
            size={18} 
            className="heart-icon" 
            fill={liked ? "#ef4444" : "rgba(0,0,0,0.4)"} 
            color={liked ? "#ef4444" : "#ffffff"} 
          />
          <span className="likes-count">{likesCount}</span>
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="container section page-animate">
      <div className="page-header">
        <h1 className="text-gradient"><Camera className="inline-icon" /> Gallery</h1>
        <p className="page-subtitle">A collection of photos I took with my camera or phone.</p>
      </div>

      <div className="gallery-masonry">
        {galleryData.map((photo) => (
          <GalleryItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
