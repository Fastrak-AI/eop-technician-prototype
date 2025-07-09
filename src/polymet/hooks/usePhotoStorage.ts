import { useState, useCallback } from 'react';

export interface StoredPhoto {
  id: string;
  type: 'before' | 'after' | 'general';
  file: File;
  preview: string;
  timestamp: Date;
  jobId: string;
}

export function usePhotoStorage() {
  const [photos, setPhotos] = useState<StoredPhoto[]>([]);

  const addPhoto = useCallback((photo: Omit<StoredPhoto, 'id' | 'timestamp'>) => {
    const newPhoto: StoredPhoto = {
      ...photo,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setPhotos(prev => {
      // Remove any existing photos of the same type for the same job
      const filtered = prev.filter(p => !(p.jobId === photo.jobId && p.type === photo.type));
      return [...filtered, newPhoto];
    });
    return newPhoto.id;
  }, []);

  const removePhoto = useCallback((id: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
  }, []);

  const getPhotosByJob = useCallback((jobId: string) => {
    return photos.filter(photo => photo.jobId === jobId);
  }, [photos]);

  const getPhotosByType = useCallback((jobId: string, type: StoredPhoto['type']) => {
    return photos.filter(photo => photo.jobId === jobId && photo.type === type);
  }, [photos]);

  return {
    photos,
    addPhoto,
    removePhoto,
    getPhotosByJob,
    getPhotosByType,
  };
}