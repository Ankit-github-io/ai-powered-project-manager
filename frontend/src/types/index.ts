export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'UNDER_REVIEW' | 'COMPLETE';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  initials: string;
}

export interface Task {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignee: User;
  order: number;
  projectId: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  tasks: Task[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface SprintRoadmapPayload {
  projectId: string;
  goalPrompt: string;
}

export interface SprintRoadmapResponse {
  roadmapId: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  suggestedTasks: Omit<Task, 'id' | 'createdAt'>[];
}