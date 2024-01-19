import { create } from 'zustand'

type Store = {
  latitude: string
  longitude: string
  getLocations: (latitude: string, longitude: string) => void
};

export const useStore = create<Store>((set) => ({
  latitude: localStorage.getItem('latitude') || '',
  longitude: localStorage.getItem('longitude') || '',
  getLocations: (latitude, longitude) => {
    localStorage.setItem('latitude', latitude)
    localStorage.setItem('longitude', longitude)
    return set({ latitude, longitude })
  },
}))