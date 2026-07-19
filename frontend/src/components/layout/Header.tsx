import { FaMagnifyingGlass, FaBell, FaPlus } from 'react-icons/fa6';

interface HeaderProps {
  breadcrumb: string;
}

export function Header({ breadcrumb }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className="text-muted-foreground">Workspace</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-semibold">{breadcrumb}</span>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-72">
            <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search... ⌘K"
              className="w-full bg-input border border-border rounded-md pl-9 pr-4 py-1.5 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <button className="p-2 rounded-md bg-card border border-border text-muted-foreground hover:text-foreground transition-colors relative cursor-pointer">
            <FaBell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
          </button>

          <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-4 py-2 rounded-md text-xs font-semibold shadow-md shadow-primary/20 cursor-pointer">
            <FaPlus className="w-3 h-3" />
            <span>New Project</span>
          </button>
        </div>
      </div>
    </header>
  );
}