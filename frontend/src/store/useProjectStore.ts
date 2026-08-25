import { create } from "zustand";
import { Task, TaskStatus } from "@/types";

interface ProjectStoreState {
  tasks: Task[];
  activeProjectId: string;
  isGeneratingRoadmap: boolean;
  setTasks: (tasks: Task[]) => void;
  moveTask: (taskId: string, targetStatus: TaskStatus) => void;
  addTask: (task: Task) => void;
  setIsGeneratingRoadmap: (isGenerating: boolean) => void;
}

const INITIAL_MOCK_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Design token audit",
    priority: "HIGH",
    status: "TODO",
    assignee: { id: "u1", name: "Alex Smith", email: "alex@nexus.so", initials: "AS" },
    order: 1,
    projectId: "p1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "task-2",
    title: "Set up Storybook",
    priority: "MEDIUM",
    status: "TODO",
    assignee: { id: "u2", name: "Jordan Kim", email: "jordan@nexus.so", initials: "JK" },
    order: 2,
    projectId: "p1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "task-3",
    title: "Component library v2",
    priority: "HIGH",
    status: "IN_PROGRESS",
    assignee: { id: "u3", name: "Morgan Reed", email: "morgan@nexus.so", initials: "MR" },
    order: 1,
    projectId: "p1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "task-4",
    title: "Dark mode tokens",
    priority: "MEDIUM",
    status: "IN_PROGRESS",
    assignee: { id: "u1", name: "Alex Smith", email: "alex@nexus.so", initials: "AS" },
    order: 2,
    projectId: "p1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "task-5",
    title: "Icon set export",
    priority: "MEDIUM",
    status: "UNDER_REVIEW",
    assignee: { id: "u2", name: "Jordan Kim", email: "jordan@nexus.so", initials: "JK" },
    order: 1,
    projectId: "p1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "task-6",
    title: "Grid system",
    priority: "LOW",
    status: "COMPLETE",
    assignee: { id: "u3", name: "Morgan Reed", email: "morgan@nexus.so", initials: "MR" },
    order: 1,
    projectId: "p1",
    createdAt: new Date().toISOString(),
  },
];

export const useProjectStore = create<ProjectStoreState>((set) => ({
  tasks: INITIAL_MOCK_TASKS,
  activeProjectId: "p1",
  isGeneratingRoadmap: false,
  setTasks: (tasks) => set({ tasks }),
  moveTask: (taskId, targetStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: targetStatus } : task
      ),
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  setIsGeneratingRoadmap: (isGeneratingRoadmap) => set({ isGeneratingRoadmap }),
}));