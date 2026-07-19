import { create } from 'zustand';

interface UIStore {
  activeProject: string;
  setActiveProject: (project: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  activeProject: 'Nexus Design System',
  setActiveProject: (project) => set({ activeProject: project }),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));