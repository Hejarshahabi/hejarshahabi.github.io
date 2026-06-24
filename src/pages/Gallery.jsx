import { useState, useEffect } from 'react';
import { Camera, Heart } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import { databases, appwriteConfig } from '../appwriteClient';
import './Gallery.css';

const GalleryItem = ({ photo }) => {
  const storageKey = `liked_photo_${photo.id}`;
  const documentId = String(photo.id);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(photo.likes || 0);

  useEffect(() => {
    // Check local storage
    const isLiked = localStorage.getItem(storageKey) === 'true';
    if (isLiked) {
      setLiked(true);
    }
    
    // Fetch live global count from Appwrite
    const fetchLikes = async () => {
      try {
        const doc = await databases.getDocument(
          appwriteConfig.databaseId, 
          appwriteConfig.collectionId, 
          documentId
        );
        setLikesCount(doc.likes_count);
      } catch (error) {
        console.error('Failed to fetch likes for photo ' + photo.id, error);
      }
    };
    
    fetchLikes();
  }, [photo.id, storageKey, documentId]);

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
    
    // Update Appwrite Database
    try {
      await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collectionId,
        documentId,
        { likes_count: newCount }
      );
    } catch (error) {
      if (error.code === 404) {
        // Document doesn't exist yet, let's create it!
        try {
          // Note: The Appwrite collection must have "Create" permission enabled for "Any"
          await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.collectionId,
            documentId,
            { id: photo.id, likes_count: newCount }
          );
        } catch (createError) {
          console.error('Failed to create initial likes document for photo ' + photo.id, createError);
        }
      } else {
        console.error('Failed to update likes for photo ' + photo.id, error);
      }
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
