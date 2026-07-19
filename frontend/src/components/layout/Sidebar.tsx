'use client';

import Link from 'next/link';
import { 
  FaHouse, 
  FaChartColumn, 
  FaFolderClosed, 
  FaUsers, 
  FaChartLine, 
  FaGear, 
  FaPlus 
} from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

const PROJECTS = [
  'Nexus Design System',
  'API v3 Migration',
  'Mobile App Launch',
  'Q3 Campaign'
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#0D0D0D] border-r border-[#27272A] flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="p-4 border-b border-[#27272A] flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] flex items-center justify-center text-white shadow-lg shadow-purple-900/40">
            <HiSparkles className="w-5 h-5" />
          </span>
          <div>
            <h1 className="font-bold text-sm leading-none text-white">Nexus</h1>
            <span className="text-[10px] text-zinc-500 font-medium">Workspace</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-3 space-y-6 text-xs font-medium">
          <div>
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider px-3 mb-2">Workspace</p>
            <nav className="space-y-1">
              <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#161618] transition-colors">
                <FaHouse className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#161618] transition-colors">
                <FaChartColumn className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link href="/projects" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#7C3AED]/15 text-purple-300 border border-[#7C3AED]/30 font-semibold">
                <FaFolderClosed className="w-4 h-4 text-purple-400" />
                <span>Projects</span>
              </Link>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#161618] transition-colors">
                <FaUsers className="w-4 h-4" />
                <span>Team</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#161618] transition-colors">
                <FaChartLine className="w-4 h-4" />
                <span>Analytics</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#161618] transition-colors">
                <FaGear className="w-4 h-4" />
                <span>Settings</span>
              </a>
            </nav>
          </div>

          {/* Projects List Section */}
          <div>
            <div className="flex items-center justify-between px-3 mb-2">
              <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Projects</p>
              <button className="text-zinc-500 hover:text-white transition-colors">
                <FaPlus className="w-3 h-3" />
              </button>
            </div>
            <nav className="space-y-1">
              {PROJECTS.map((project, idx) => (
                <button
                  key={project}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors truncate ${
                    idx === 0 
                      ? 'bg-[#161618] text-white font-medium border border-[#27272A]' 
                      : 'text-zinc-400 hover:text-white hover:bg-[#161618]'
                  }`}
                >
                  {project}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Profile Footer */}
      <div className="p-3 border-t border-[#27272A] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-900 border border-purple-500/50 flex items-center justify-center font-bold text-xs text-purple-200">
            AS
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-white leading-tight">Alex Soto</p>
            <p className="text-[10px] text-zinc-500 truncate">alex@nexus.so</p>
          </div>
        </div>
      </div>
    </aside>
  );
}