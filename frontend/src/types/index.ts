// 1. User & Assignee Contract
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'Admin' | 'Member' | 'Viewer';
  provider: 'google' | 'github' | 'credentials';
  emailVerified: boolean;
}

// 2. AI Predictive Insight Contract
export interface AIInsight {
  id: string;
  targetId: string; // Maps to Task ID or Project ID
  insightText: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  confidenceScore: number; // e.g., 0.94 for 94% accuracy
  generatedAt: string;
}

// 3. Kanban Column Types
export type TaskStatus = 'To Do' | 'In Progress' | 'In Review' | 'Completed';
export type TaskPriority = 'Low' | 'Medium' | 'High' | 'Critical';

// 4. Task Object Contract
export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignees: User[];
  aiInsight?: AIInsight; // Embedded or nested AI predictive model data
  createdAt: string;
}

// 5. Project Module Contract
export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  description?: string;
  healthIndex: number; // Percentage e.g., 94.2
  velocityPoints: number;
  activeRisksCount: number;
  tasks: Task[];
  createdAt: string;
}

// 6. Global Workspace State Template (For Zustand Store Integration)
export interface WorkspaceState {
  currentProject: Project | null;
  tasks: Task[];
  isLoading: boolean;
  sidebarOpen: boolean;
}
