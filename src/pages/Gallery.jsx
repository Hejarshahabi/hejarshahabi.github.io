import { useState, useEffect } from 'react';
import { Camera, Heart } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import { supabase } from '../supabaseClient';
import './Gallery.css';

const GalleryItem = ({ photo }) => {
  const storageKey = `liked_photo_${photo.id}`;
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(photo.likes || 0);

  useEffect(() => {
    // Check local storage
    const isLiked = localStorage.getItem(storageKey) === 'true';
    if (isLiked) {
      setLiked(true);
    }
    
    // Fetch live global count from Supabase
    const fetchLikes = async () => {
      const { data, error } = await supabase
        .from('gallery_likes')
        .select('likes_count')
        .eq('id', photo.id)
        .single();
        
      if (data && !error) {
        setLikesCount(data.likes_count);
      }
    };
    
    fetchLikes();
  }, [photo.id, storageKey]);

  const handleLike = async (e) => {
    e.stopPropagation();
    
    // Optimistic UI update
    let newCount;
    if (liked) {
      setLiked(false);
      newCount = likesCount - 1;
      setLikesCount(newCount);
      localStorage.removeItem(storageKey);
    } else {
      setLiked(true);
      newCount = likesCount + 1;
      setLikesCount(newCount);
      localStorage.setItem(storageKey, 'true');
    }
    
    // Update Supabase Database
    await supabase
      .from('gallery_likes')
      .update({ likes_count: newCount })
      .eq('id', photo.id);
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
