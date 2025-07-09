import React, { createContext, useContext, ReactNode } from 'react';
import { usePhotoStorage, StoredPhoto } from '../hooks/usePhotoStorage';

interface PhotoStorageContextType {
  photos: StoredPhoto[];
  addPhoto: (photo: Omit<StoredPhoto, 'id' | 'timestamp'>) => string;
  removePhoto: (id: string) => void;
  getPhotosByJob: (jobId: string) => StoredPhoto[];
  getPhotosByType: (jobId: string, type: StoredPhoto['type']) => StoredPhoto[];
}

const PhotoStorageContext = createContext<PhotoStorageContextType | undefined>(undefined);

export function PhotoStorageProvider({ children }: { children: ReactNode }) {
  const photoStorage = usePhotoStorage();

  return (
    <PhotoStorageContext.Provider value={photoStorage}>
      {children}
    </PhotoStorageContext.Provider>
  );
}

export function usePhotoStorageContext() {
  const context = useContext(PhotoStorageContext);
  if (context === undefined) {
    throw new Error('usePhotoStorageContext must be used within a PhotoStorageProvider');
  }
  return context;
}