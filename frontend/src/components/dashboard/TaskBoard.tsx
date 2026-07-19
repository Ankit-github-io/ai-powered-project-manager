'use client';

import React from 'react';
import { Task, TaskStatus } from '@/types';
import TaskCard from './TaskCard';

// Nexus Figma-spec high fidelity Mock Data strictly respecting our Type Contracts
const mockTasks: Task[] = [
  {
    id: '1',
    projectId: 'p1',
    title: 'Map Nexus Design Token System to CSS Variables',
    description: 'Extract raw hex codes and 8px grid parameters into automated css layouts.',
    status: 'In Progress',
    priority: 'High',
    dueDate: 'Jul 15',
    createdAt: 'Jul 10',
    assignees: [{ id: 'u1', name: 'Ankit', email: 'ankit@example.com', avatarUrl: 'https://unsplash.com', role: 'Admin', provider: 'google', emailVerified: true }],
    aiInsight: {
      id: 'ai-1',
      targetId: '1',
      insightText: 'Blocker risk detected: Awaiting final design canvas asset sign-off.',
      riskLevel: 'High',
      confidenceScore: 0.94,
      generatedAt: 'Jul 10'
    }
  },
  {
    id: '2',
    projectId: 'p1',
    title: 'Configure JWT OAuth NextAuth Engine',
    description: 'Establish secure Google Cloud and GitHub identity handshakes.',
    status: 'To Do',
    priority: 'Critical',
    dueDate: 'Jul 18',
    createdAt: 'Jul 10',
    assignees: [{ id: 'u1', name: 'Ankit', email: 'ankit@example.com', avatarUrl: 'https://unsplash.com', role: 'Admin', provider: 'google', emailVerified: true }]
  },
  {
    id: '3',
    projectId: 'p1',
    title: 'Setup Redis Vector Caching Index Layer',
    description: 'Ensure flash queries for real-time model analysis pipelines.',
    status: 'Completed',
    priority: 'Medium',
    dueDate: 'Jul 08',
    createdAt: 'Jul 05',
    assignees: [{ id: 'u2', name: 'Sarah', email: 'sarah@example.com', avatarUrl: 'https://unsplash.com', role: 'Member', provider: 'github', emailVerified: true }],
    aiInsight: {
      id: 'ai-2',
      targetId: '3',
      insightText: 'Optimization complete. Context window database query latency slashed by 42%.',
      riskLevel: 'Low',
      confidenceScore: 0.98,
      generatedAt: 'Jul 08'
    }
  }
];

export default function TaskBoard() {
  // Exact 4 Kanban Columns from your Nexus Figma screen blueprint
  const columns: TaskStatus[] = ['To Do', 'In Progress', 'In Review', 'Completed'];

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 items-start">
      {columns.map((column) => {
        // Filter tasks belong to this column explicitly
        const columnTasks = mockTasks.filter((task) => task.status === column);
        
        return (
          <div key={column} className="flex flex-col rounded-xl bg-[#161618] border border-border p-4">
            
            {/* Column Title Header Meta Layout */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-bold tracking-wider text-white uppercase">{column}</h3>
                <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                  {columnTasks.length}
                </span>
              </div>
            </div>

            {/* Scrollable Column Cards Container */}
            <div className="flex flex-col gap-3 max-h-[calc(100vh-340px)] overflow-y-auto pr-0.5 scrollbar-thin">
              {columnTasks.length === 0 ? (
                <div className="text-center py-8 text-xs text-muted-foreground/40 border border-dashed border-border/50 rounded-lg bg-black/10">
                  No active tasks in scope
                </div>
              ) : (
                columnTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))
              )}
            </div>

          </div>
        );
      })}
    </section>
  );
}
