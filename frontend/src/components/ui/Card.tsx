"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type CardTheme = "violet" | "cyan" | "emerald" | "amber" | "rose" | "neutral" | (string & {});

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  theme?: CardTheme;
  isActive?: boolean;
  activeTheme?: CardTheme;
  children: React.ReactNode;
}

const themeStyles: Record<CardTheme, {
  hoverBorder: string;
  activeBorder: string;
  glow: string;
}> = {
  violet: {
    hoverBorder: "hover:border-violet-500/30",
    activeBorder: "border-violet-500/30",
    glow: "bg-violet-600/5",
  },
  cyan: {
    hoverBorder: "hover:border-cyan-500/30",
    activeBorder: "border-cyan-500/30",
    glow: "bg-cyan-600/5",
  },
  emerald: {
    hoverBorder: "hover:border-emerald-500/30",
    activeBorder: "border-emerald-500/30",
    glow: "bg-emerald-600/5",
  },
  amber: {
    hoverBorder: "hover:border-amber-500/30",
    activeBorder: "border-amber-500/30",
    glow: "bg-amber-600/5",
  },
  rose: {
    hoverBorder: "hover:border-rose-500/30",
    activeBorder: "border-rose-500/30",
    glow: "bg-rose-600/5",
  },
  neutral: {
    hoverBorder: "hover:border-neutral-500/30",
    activeBorder: "border-neutral-500/30",
    glow: "bg-neutral-600/5",
  },
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ theme = "violet", isActive = false, activeTheme, children, className, ...props }, ref) => {
    // Determine the theme applied when active (falls back to base theme if activeTheme is not provided)
    const effectiveActiveTheme = activeTheme || theme;
    const baseStyle = themeStyles[theme] || themeStyles.neutral;
    const activeStyle = themeStyles[effectiveActiveTheme] || themeStyles.neutral;

    return (
      <div
        ref={ref}
        className={cn(
          "h-full bg-[#111111] border rounded-2xl p-7 group transition-all duration-300 overflow-hidden relative flex flex-col justify-between",
          isActive
            ? cn("border-[#1e1e1e]", activeStyle.activeBorder)
            : cn("border-[#1e1e1e]", baseStyle.hoverBorder),
          className
        )}
        {...props}
      >
        {/* Ambient Hover / Active Glow */}
        <div
          className={cn(
            "absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-500",
            isActive
              ? cn(activeStyle.glow, "opacity-100")
              : cn(baseStyle.glow, "opacity-0 group-hover:opacity-100")
          )}
        />

        {/* 100% Flexible Children Slot */}
        <div className="relative z-10 flex flex-col h-full w-full">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";