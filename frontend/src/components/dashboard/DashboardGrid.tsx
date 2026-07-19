import React from 'react';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface DashboardGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const DashboardGrid: React.FC<DashboardGridProps> = ({ projects, onSelectProject }) => {
  return (
    <div className="space-y-6">
      {/* Title block aligning with standard 8px Figma metrics spacing */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
          Active Projects
        </h2>
      </div>

      {/* Responsive Core Grid Layer Mapping */}
      {projects.length === 0 ? (
        <div className="border border-dashed border-zinc-800 rounded-xl p-12 text-center text-zinc-500 text-sm">
          No active projects found. Initialize a new canvas domain framework to begin.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
};