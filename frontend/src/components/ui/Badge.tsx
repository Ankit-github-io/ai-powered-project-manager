import * as React from "react";
import { cn } from "@/lib/utils";
import { TaskPriority } from "@/types";

export interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  priority?: TaskPriority;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, priority = "LOW", children, ...props }, ref) => {
    const priorityStyles: Record<TaskPriority, string> = {
      HIGH: "bg-red-500/10 text-red-400 border-red-500/20",
      MEDIUM: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      LOW: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border",
          priorityStyles[priority],
          className
        )}
        {...props}
      >
        {children || priority}
      </span>
    );
  }
);

Badge.displayName = "Badge";