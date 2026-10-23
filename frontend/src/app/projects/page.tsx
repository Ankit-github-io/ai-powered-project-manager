import { 
  FaMagnifyingGlass, 
  FaBell, 
  FaPlus, 
  FaClock, 
  FaMessage, 
} from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

export default function ProjectBoardPage() {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-white selection:bg-purple-500 selection:text-white">
      {/* Sidebar Navigation */}

      {/* Main Board Canvas */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        <header className="h-16 border-b border-[#27272A] bg-[#0D0D0D] px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span>Workspace</span>
            <span>/</span>
            <span className="text-white font-semibold">Nexus Design System</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search... ⌘K"
                className="w-full bg-[#161618] border border-[#27272A] rounded-lg pl-9 pr-4 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button className="p-2 rounded-lg bg-[#161618] border border-[#27272A] text-zinc-400 hover:text-white">
              <FaBell className="w-4 h-4" />
            </button>

            <div className="w-8 h-8 rounded-full bg-purple-900 border border-purple-500/50 flex items-center justify-center font-bold text-xs text-purple-200">
              AS
            </div>
          </div>
        </header>

        {/* Board Title Bar & Actions */}
        <div className="p-6 border-b border-[#27272A] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-extrabold tracking-tight">Nexus Design System</h1>
              <span className="bg-purple-500/10 text-purple-400 text-xs font-semibold px-2.5 py-0.5 rounded border border-purple-500/20">
                DESIGN
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              18/25 tasks complete · Sprint ends Jul 28
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-[#161618] p-1 rounded-lg border border-[#27272A] text-xs">
              <button className="px-3 py-1 rounded bg-[#27272A] text-white font-medium">Board</button>
              <button className="px-3 py-1 text-zinc-400 hover:text-white">List</button>
            </div>

            <div className="flex -space-x-2">
              <span className="w-7 h-7 rounded-full bg-purple-900 border-2 border-[#0D0D0D] flex items-center justify-center text-[10px] font-bold">AS</span>
              <span className="w-7 h-7 rounded-full bg-blue-900 border-2 border-[#0D0D0D] flex items-center justify-center text-[10px] font-bold">JK</span>
              <span className="w-7 h-7 rounded-full bg-emerald-900 border-2 border-[#0D0D0D] flex items-center justify-center text-[10px] font-bold">MR</span>
            </div>

            <button className="bg-[#161618] border border-[#27272A] hover:bg-[#202023] px-3 py-2 rounded-lg text-xs font-medium">
              Invite
            </button>

            <button className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:opacity-90 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-lg shadow-purple-900/30">
              <HiSparkles className="w-4 h-4" />
              <span>Generate AI Roadmap</span>
            </button>
          </div>
        </div>

        {/* Kanban Board Columns Area */}
        <div className="p-6 flex-1 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-w-[1000px]">
            
            {/* Column 1: To Do */}
            <div className="bg-[#161618]/50 p-4 rounded-xl border border-[#27272A] flex flex-col">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                  <span>To Do</span>
                </div>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">3</span>
              </div>

              <div className="space-y-3 flex-1">
                {/* Task 1 */}
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all">
                  <p className="text-sm font-semibold mb-3">Define authentication & session flow</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">HIGH</span>
                    <span className="w-6 h-6 rounded-full bg-purple-900 text-[10px] font-bold flex items-center justify-center">AS</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded font-mono text-[10px]">AUTH</span>
                    <span className="flex items-center gap-1"><FaClock className="w-3 h-3" /> 3d</span>
                  </div>
                </div>

                {/* Task 2 */}
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all">
                  <p className="text-sm font-semibold mb-3">Set up CI/CD with GitHub Actions</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">MEDIUM</span>
                    <span className="w-6 h-6 rounded-full bg-emerald-900 text-[10px] font-bold flex items-center justify-center">MR</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-mono text-[10px]">DEVOPS</span>
                    <span className="flex items-center gap-1"><FaClock className="w-3 h-3" /> 2d</span>
                  </div>
                </div>

                {/* Task 3 */}
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all">
                  <p className="text-sm font-semibold mb-3">Design onboarding empty states</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">LOW</span>
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-[10px] font-bold flex items-center justify-center">JK</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded font-mono text-[10px]">DESIGN</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-dashed border-[#27272A] hover:border-zinc-500 rounded-lg text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
                <FaPlus className="w-3 h-3" />
                <span>Add task</span>
              </button>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-[#161618]/50 p-4 rounded-xl border border-[#27272A] flex flex-col">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>In Progress</span>
                </div>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">3</span>
              </div>

              <div className="space-y-3 flex-1">
                {/* Task 1 */}
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all">
                  <p className="text-sm font-semibold mb-3">Implement drag-and-drop Kanban board</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">HIGH</span>
                    <span className="w-6 h-6 rounded-full bg-orange-900 text-[10px] font-bold flex items-center justify-center">TP</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded font-mono text-[10px]">FRONTEND</span>
                    <span className="flex items-center gap-1 text-amber-400 font-medium">Jul 14</span>
                  </div>
                </div>

                {/* Task 2 */}
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all">
                  <p className="text-sm font-semibold mb-3">Build REST API: projects & tasks CRUD</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">HIGH</span>
                    <span className="w-6 h-6 rounded-full bg-purple-900 text-[10px] font-bold flex items-center justify-center">AS</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px]">BACKEND</span>
                    <span className="flex items-center gap-1 text-amber-400 font-medium">Jul 16</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-dashed border-[#27272A] hover:border-zinc-500 rounded-lg text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
                <FaPlus className="w-3 h-3" />
                <span>Add task</span>
              </button>
            </div>

            {/* Column 3: Under Review */}
            <div className="bg-[#161618]/50 p-4 rounded-xl border border-[#27272A] flex flex-col">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <span>Under Review</span>
                </div>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">2</span>
              </div>

              <div className="space-y-3 flex-1">
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all">
                  <p className="text-sm font-semibold mb-3">UX review — dashboard information arch</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">MEDIUM</span>
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-[10px] font-bold flex items-center justify-center">JK</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded font-mono text-[10px]">DESIGN</span>
                    <span className="flex items-center gap-1"><FaMessage className="w-3 h-3" /> 2</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-dashed border-[#27272A] hover:border-zinc-500 rounded-lg text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
                <FaPlus className="w-3 h-3" />
                <span>Add task</span>
              </button>
            </div>

            {/* Column 4: Complete */}
            <div className="bg-[#161618]/50 p-4 rounded-xl border border-[#27272A] flex flex-col">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Complete</span>
                </div>
                <span className="bg-[#27272A] px-2 py-0.5 rounded-full text-zinc-300">3</span>
              </div>

              <div className="space-y-3 flex-1">
                <div className="bg-[#161618] p-4 rounded-xl border border-[#27272A] hover:border-purple-500/40 transition-all opacity-80">
                  <p className="text-sm font-semibold mb-3 line-through text-zinc-400">Configure Tailwind design token system</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded font-mono font-semibold text-[10px]">LOW</span>
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-[10px] font-bold flex items-center justify-center">JK</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-dashed border-[#27272A] hover:border-zinc-500 rounded-lg text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
                <FaPlus className="w-3 h-3" />
                <span>Add task</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}