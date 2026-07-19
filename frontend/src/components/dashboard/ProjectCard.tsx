import React from 'react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { name, tasks, healthIndex, activeRisksCount } = project;

  // Compute tasks metrics safely via relational backend state contract
  const totalTasks = tasks?.length || 0;
  const completedTasks = tasks?.filter((t) => t.status === 'Completed').length || 0;
  
  // Calculate dynamic progress mapping inside 100% frame grid boundary
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div 
      onClick={onClick}
      className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 transition-all duration-200 hover:border-zinc-700/60 hover:bg-zinc-900/60 cursor-pointer flex flex-col justify-between min-h-[200px]"
    >
      <div className="space-y-4">
        {/* Card Header & Dynamic Metadata Indicators */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
              {name}
            </h3>
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded bg-purple-950/40 text-purple-400 border border-purple-800/50 uppercase tracking-wider">
              {healthIndex >= 90 ? 'Stable' : 'At Risk'}
            </span>
          </div>

          {/* AI Risk Flag Counter Alert */}
          {activeRisksCount > 0 && (
            <div className="px-2 py-1 rounded bg-rose-950/40 border border-rose-900/50 text-rose-400 text-xs font-medium">
              ⚠️ {activeRisksCount} AI Risks
            </div>
          )}
        </div>

        {/* Dynamic Aggregation Progress Metric */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium text-zinc-400">
            <span>Progress</span>
            <span>{completedTasks} of {totalTasks} tasks completed</span>
          </div>
          {/* Custom Base Progress Track Layer mapped to 4px boundaries */}
          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer metadata segment - Health index display */}
      <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
        <div>
          Health Index: <span className="text-emerald-400 font-semibold">{healthIndex}%</span>
        </div>
        <div>
          Velocity: <span className="text-zinc-300 font-medium">{project.velocityPoints} pts</span>
        </div>
      </div>
    </div>
  );
};