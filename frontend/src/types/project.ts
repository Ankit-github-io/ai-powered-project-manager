export interface Project {
  id: string;
  name: string;
  category: 'Design' | 'Engineering' | 'Marketing' | 'Product';
  completedTasks: number;
  totalTasks: number;
  updatedAt: string;
  members: string[]; // Initials like ['AS', 'JK']
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string; // Initials
    colorClass: string; // Tailwind color string
  };
  action: string;
  target: string;
  timeAgo: string;
}

export interface Metric {
  title: string;
  value: string | number;
  subtext: string;
  type: 'up' | 'down' | 'neutral';
  iconType: 'folder' | 'check' | 'users' | 'sparkles';
}