import { create } from 'zustand';
import { Project, Task, WorkspaceState } from '@/types';

interface WorkspaceActions {
  setCurrentProject: (project: Project | null) => void;
  setTasks: (tasks: Task[]) => void;
  setLoading: (isLoading: boolean) => void;
  toggleSidebar: () => void;
  updateTaskStatus: (taskId: string, status: Task['status']) => void;
}

// Combining standard contract state with explicit validation actions
export const useWorkspaceStore = create<WorkspaceState & WorkspaceActions>((set) => ({
  currentProject: null,
  tasks: [],
  isLoading: false,
  sidebarOpen: true,

  setCurrentProject: (project) => set({ currentProject: project }),
  
  setTasks: (tasks) => set({ tasks }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // Asynchronous optimization: Multi-tier target state modification without direct component drops
  updateTaskStatus: (taskId, status) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      );
      
      // Sync change down into deep relation inside current project matrix if matched
      let updatedProject = state.currentProject;
      if (updatedProject && updatedProject.tasks) {
        updatedProject = {
          ...updatedProject,
          tasks: updatedProject.tasks.map((t) => (t.id === taskId ? { ...t, status } : t)),
        };
      }

      return { tasks: updatedTasks, currentProject: updatedProject };
    }),
}));