import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default" // Neutral/Background
  | "emerald" // Success/Complete/Active
  | "rose" // Error/High Priority/Delete
  | "amber" // Warning/Medium Priority
  | "violet" // Primary/AI Features
  | "blue" // Info/System/Links
  | "indigo" // Secondary/Docs
  | "cyan" // Tech/Features
  | "fuchsia"; // Special/EasterEgg/New

export type DotVariant =
  | "default" // Neutral/Background
  | "emerald" // Success/Complete/Active
  | "rose" // Error/High Priority/Delete
  | "amber" // Warning/Medium Priority
  | "violet" // Primary/AI Features
  | "blue" // Info/System/Links
  | "indigo" // Secondary/Docs
  | "cyan" // Tech/Features
  | "fuchsia"; // Special/EasterEgg/New

interface PillBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  showDot?: boolean;
  dotColor?: DotVariant;
}

export function PillBadge({
  children,
  variant = "default",
  className,
  showDot = true,
  dotColor= "default"
}: PillBadgeProps) {
  const variants = {
    default: "border-[#262626] bg-[#1a1a1a] text-[#A3A3A3]",
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    rose: "border-rose-500/20 bg-rose-500/10 text-rose-400",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    violet: "border-violet-500/20 bg-violet-500/10 text-violet-400",
    blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    indigo: "border-indigo-500/20 bg-indigo-500/10 text-indigo-400",
    cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    fuchsia: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-400",
  };

  const dotColorVariants = {
    default: "bg-[#525252]",
    emerald: "bg-emerald-500",
    rose: "bg-rose-500",
    amber: "bg-amber-500",
    violet: "bg-violet-500",
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    cyan: "bg-cyan-500",
    fuchsia: "bg-fuchsia-500",
  };


  return (
    <div
      className={cn(
        "inline-flex w-fit max-w-max items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-medium backdrop-blur-sm",
        variants[variant],
        className,
      )}
    >
      {showDot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColorVariants[dotColor],
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-1.5 w-1.5",
              dotColorVariants[dotColor],
            )}
          />
        </span>
      )}
      {children}
    </div>
  );
}
