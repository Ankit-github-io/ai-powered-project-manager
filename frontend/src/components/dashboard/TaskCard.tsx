'use client';

import React from 'react';
import { Task } from '@/types';
import Image from 'next/image';
import { HiCalendar, HiSparkles } from 'react-icons/hi2';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  // Nexus Design Priority Color Tokens mapping to your theme specs
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'High': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    }
  };

  return (
    <div className="group rounded-lg border border-border bg-[#161618] p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 cursor-grab active:cursor-grabbing">
      
      {/* Top Section: Dynamic Priority Badges */}
      <div className="mb-3">
        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${getPriorityStyles(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      {/* Task Specification Title */}
      <h4 className="text-sm font-semibold leading-tight text-white transition-colors group-hover:text-primary">
        {task.title}
      </h4>

      {/* Optional Core Description */}
      {task.description && (
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      )}

      {/* Lower Meta Grid: Calendar Dates & Team Avatars */}
      <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50 pt-3">
        <div className="flex items-center gap-1.5">
          <HiCalendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span>{task.dueDate}</span>
        </div>
        
        {/* Responsive Stacked Avatar Overlays */}
        <div className="flex -space-x-1.5 overflow-hidden">
          {task.assignees.map((user) => (
            <Image 
              key={user.id}
              className="h-5 w-5 rounded-full border border-card object-cover ring-1 ring-border" 
              src={user.avatarUrl} 
              alt={user.name} 
              title={user.name}
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>

      {/* Embedded High-Tech AI Predictive Insight Box Container */}
      {task.aiInsight && (
        <div className="mt-3.5 rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10 p-2.5 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-primary mb-1">
            <HiSparkles className="h-3 w-3 animate-pulse" />
            <span>AI Predictive Insight</span>
            <span className="ml-auto text-[10px] font-medium text-muted-foreground bg-black/40 px-1.5 py-0.5 rounded-md">
              {Math.round(task.aiInsight.confidenceScore * 100)}% Confidence
            </span>
          </div>
          <p className="text-muted-foreground leading-normal font-medium">{task.aiInsight.insightText}</p>
        </div>
      )}
    </div>
  );
}
