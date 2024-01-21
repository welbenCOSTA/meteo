import { create } from 'zustand';

interface Store {
  latitude: string;
  longitude: string;
  getLocations: (latitude: string, longitude: string) => void;
}

export const useStore = create<Store>((set) => ({
  latitude: localStorage.getItem('latitude') || '',
  longitude: localStorage.getItem('longitude') || '',
  getLocations: (latitude, longitude) => {
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
    set({ latitude, longitude });
  },
}));
