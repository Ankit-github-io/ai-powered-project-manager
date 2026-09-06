"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./avatar";

// 1. Type Definitions
interface KanbanCard {
  tittle: string;
  priorty: "High" | "Medium" | "Low";
  avatar: string;
}

interface KanbanColumn {
  label: string;
  count: number;
  accent?: boolean;
  cards: KanbanCard[];
}

// 2. Data Structure
const KANBAN_DATA: KanbanColumn[] = [
  {
    label: "To Do",
    count: 3,
    cards: [
      { tittle: "Design token audit", priorty: "High", avatar: "AS" },
      { tittle: "Set up Storybook", priorty: "Medium", avatar: "JK" },
    ],
  },
  {
    label: "In Progress",
    count: 3,
    accent: true,
    cards: [
      { tittle: "Component library v2", priorty: "High", avatar: "MR" },
      { tittle: "Dark mode tokens", priorty: "Medium", avatar: "AS" },
      { tittle: "Typography system", priorty: "Low", avatar: "TP" },
    ],
  },
  {
    label: "Under Review",
    count: 2,
    cards: [
      { tittle: "Icon set export", priorty: "Medium", avatar: "JK" },
      { tittle: "Color ramp docs", priorty: "Low", avatar: "EL" },
    ],
  },
  {
    label: "Complete",
    count: 5,
    cards: [
      { tittle: "Grid system", priorty: "Low", avatar: "MR" },
      { tittle: "Motion principles", priorty: "Low", avatar: "TP" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 3. Helper Utility
const getAvatarBg = (initials: string): string => {
  const bgColors = [
    "bg-red-900/90",
    "bg-orange-900/90",
    "bg-amber-900/90",
    "bg-lime-900/90",
    "bg-green-900/90",
    "bg-emerald-900/90",
    "bg-teal-900/90",
    "bg-cyan-900/90",
    "bg-blue-900/90",
    "bg-indigo-900/90",
    "bg-violet-900/90",
    "bg-purple-900/90",
    "bg-fuchsia-900/90",
    "bg-pink-900/90",
    "bg-rose-900/90",
  ];
  let hash = 0;
  for (let i = 0; i < initials.length; i++)
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  return bgColors[Math.abs(hash) % bgColors.length];
};

export function FloatingUIPreview({ className }: { className?: string }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("relative max-w-4xl mx-auto mt-16", className)}
    >
      <div className="rounded-2xl border border-[#262626] bg-[#111111] backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_rgba(124,58,237,0.15)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-[#1a1a1a]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c940]" />
          <div className="ml-3 flex-1 max-w-xs bg-[#1a1a1a] border border-[#262626] rounded-md px-3 py-1 text-[11px] text-[#525252]">
            app.SprintAI.so/project/design-system
          </div>
        </div>
        {/* {MINI Kanban preview} */}
        <div className="p-4 flex flex-col md:flex-row gap-3 overflow-hidden">
          {KANBAN_DATA.map((column, i) => (
            <motion.div
              key={i}
              variants={columnVariants}
              className={cn(
                "flex-1 w-full min-w-70 md:min-w-40 rounded-xl border",
                column.accent
                  ? "border-violet-500/30 bg-violet-600/5"
                  : "border-[#1a1a1a] bg-[#0d0d0d]",
              )}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#1a1a1a]">
                <span className="text-[10px] font-semibold text-[#A3A3A3]">
                  {column.label}
                </span>
                <span className="text-[9px] bg-[#1f1f1f] text-[#A3A3A3] px-1.5 py-0.5 rounded font-medium">
                  {column.cards.length}
                </span>
              </div>

              {/* Cards */}
              <div className="p-2 space-y-1.5">
                {column.cards.map((card, i) => (
                  <div
                    key={i}
                    className="flex flex-col bg-[#171717] border border-[#222] rounded-lg p-2.5 hover:border-[#333] transition-colors"
                  >
                    <p className="text-start text-[10px] text-[#EDEDED] font-medium leading-tight mb-1.5">
                      {card.tittle}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "text-[8px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider",
                          card.priorty === "High"
                            ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                            : card.priorty === "Medium"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                        )}
                      >
                        {card.priorty}
                      </span>
                      <Avatar className="h-6 w-6 border border-black">
                        <AvatarFallback
                          className={cn(
                            "text-[8px] font-semibold text-white",
                            getAvatarBg(card.avatar),
                          )}
                        >
                          {card.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Glow under preview */}{" "}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-violet-600/20 blur-3xl rounded-full pointer-events-none" />
    </motion.div>
  );
}
