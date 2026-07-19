'use client';

import React, { useState } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { HiXMark, HiSparkles } from 'react-icons/hi2';

export default function CreateTaskModal() {
  const { isCreateModalOpen, setCreateModalOpen } = useUIStore();
  
  // Local form variables state tracker
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [column, setColumn] = useState('To Do');

  if (!isCreateModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Translucent frosted glass backdrop veil */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={() => setCreateModalOpen(false)}
      />

      {/* Main Structural Dialog Container Box */}
      <div className="relative z-10 w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-[0_0_30px_rgba(124,58,237,0.15)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Row */}
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <HiSparkles className="h-4 w-4 text-primary animate-pulse" />
            <h2 className="text-base font-semibold text-foreground">Orchestrate New Task</h2>
          </div>
          <button 
            onClick={() => setCreateModalOpen(false)}
            className="rounded-lg p-1 text-muted-foreground hover:bg-border/40 hover:text-foreground transition-colors cursor-pointer"
          >
            <HiXMark className="h-5 w-5" />
          </button>
        </div>

        {/* Input Interactive Form Grid Layout */}
        <form onSubmit={(e) => { e.preventDefault(); setCreateModalOpen(false); }} className="mt-5 space-y-4">
          
          {/* Title Parameter Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Task Specification Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Build vector indexing processing loop"
              className="w-full rounded-lg border border-border bg-[#0D0D0D] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
            />
          </div>

          {/* Configuration Parameters Twin Split Selector Matrix */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* Priority Select Track */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Priority Severity</label>
              <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-lg border border-border bg-[#0D0D0D] px-3 py-2 text-sm text-foreground outline-none cursor-pointer focus:border-primary/60"
              >
                <option value="Low">Low (Emerald Badge)</option>
                <option value="Medium">Medium (Amber Badge)</option>
                <option value="High">High (Purple Badge)</option>
                <option value="Critical">Critical (Pink Badge)</option>
              </select>
            </div>

            {/* Target Column Pipeline Select */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Target Pipeline Stage</label>
              <select 
                value={column}
                onChange={(e) => setColumn(e.target.value)}
                className="w-full rounded-lg border border-border bg-[#0D0D0D] px-3 py-2 text-sm text-foreground outline-none cursor-pointer focus:border-primary/60"
              >
                <option value="To Do">To Do Pipeline</option>
                <option value="In Progress">In Progress Pipeline</option>
                <option value="Under Review">Under Review Pipeline</option>
                <option value="Complete">Complete Pipeline</option>
              </select>
            </div>

          </div>

          {/* Action Call Activation Buttons Footer Module */}
          <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={() => setCreateModalOpen(false)}
              className="rounded-lg border border-border bg-transparent px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:bg-border/30 hover:text-foreground cursor-pointer"
            >
              Cancel Operation
            </button>
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#9333EA] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Commit Task Node
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
