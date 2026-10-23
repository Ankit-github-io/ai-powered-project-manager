"use client";

import * as React from "react";
import { useProjectStore } from "@/store/useProjectStore";
import { TaskStatus, Task } from "@/types";
import { Badge } from "@/components/ui/Badge";

const COLUMNS: { status: TaskStatus; label: string }[] = [
  { status: "TODO", label: "To Do" },
  { status: "IN_PROGRESS", label: "In Progress" },
  { status: "UNDER_REVIEW", label: "Under Review" },
  { status: "COMPLETE", label: "Complete" },
];

export const KanbanBoard: React.FC = () => {
  const { tasks, moveTask } = useProjectStore();
  const [draggedTaskId, setDraggedTaskId] = React.useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData("text/plain", taskId);
    setDraggedTaskId(taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetStatus: TaskStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain") || draggedTaskId;
    if (taskId) {
      moveTask(taskId, targetStatus);
      setDraggedTaskId(null);
    }
  };

  return (
    <div className="w-full bg-zinc-950/80 p-4 md:p-6 rounded-xl border border-zinc-800/80 shadow-2xl backdrop-blur-md">
      {/* Workspace Header Sub-Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800/60 text-xs font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          app.nexus.so/project/design-system
        </span>
        <span className="hidden sm:inline-block text-zinc-500">Live Socket Sync Active</span>
      </div>

      {/* Kanban Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {COLUMNS.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.status);

          return (
            <div
              key={col.status}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, col.status)}
              className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-800/50 min-h-95 flex flex-col gap-3 transition-colors duration-200"
            >
              {/* Column Title Header */}
              <div className="flex items-center justify-between px-1 py-1">
                <h3 className="text-sm font-medium text-zinc-200">{col.label}</h3>
                <span className="h-5 w-5 rounded-full bg-zinc-800 text-zinc-400 text-xs flex items-center justify-center font-mono font-bold">
                  {colTasks.length}
                </span>
              </div>

              {/* Task Items */}
              <div className="flex flex-col gap-2.5 flex-1">
                {colTasks.map((task: Task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className="group bg-zinc-800/60 hover:bg-zinc-800 p-3.5 rounded-md border border-zinc-700/40 hover:border-zinc-600/60 transition-all cursor-grab active:cursor-grabbing shadow-sm"
                  >
                    <p className="text-sm font-medium text-zinc-100 mb-3 line-clamp-2">
                      {task.title}
                    </p>

                    <div className="flex items-center justify-between">
                      <Badge priority={task.priority} />
                      <div className="h-6 w-6 rounded-full bg-purple-900/80 border border-purple-500/30 text-purple-300 text-[10px] font-semibold flex items-center justify-center">
                        {task.assignee.initials}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};