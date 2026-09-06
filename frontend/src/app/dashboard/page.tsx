
import { Header } from '@/components/dashboard/Header';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { Project, Metric } from '@/types/project';

// Strictly Mocked Safe Typed Data arrays
const METRICS_DATA: Metric[] = [
  { title: 'Active Projects', value: 6, subtext: '+2 this month', type: 'neutral', iconType: 'folder' },
  { title: 'Tasks Complete', value: 34, subtext: '18% vs last wk', type: 'up', iconType: 'check' },
  { title: 'Team Members', value: 12, subtext: '2 pending invite', type: 'neutral', iconType: 'users' },
  { title: 'On-Time Rate', value: '91%', subtext: '4% vs last mo', type: 'up', iconType: 'sparkles' },
];

const PROJECTS_DATA: Project[] = [
  { id: '1', name: 'Nexus Design System', category: 'Design', completedTasks: 18, totalTasks: 25, updatedAt: '2h ago', members: ['AS', 'JK', 'MR'] },
  { id: '2', name: 'API v3 Migration', category: 'Engineering', completedTasks: 9, totalTasks: 20, updatedAt: 'Yesterday', members: ['JK', 'MR', 'TP'] },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-white">
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header breadcrumb="Alex's Workspace" />
        
        <main className="max-w-[1600px] mx-auto px-6 py-8 w-full">
          {/* Metrics Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            
          </div>

          {/* Project List Rendering Component */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}