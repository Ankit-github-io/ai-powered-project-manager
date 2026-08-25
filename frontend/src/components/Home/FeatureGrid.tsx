import { KanbanCard } from "./cards/KanbanCard";
import { RoadmapCard } from "./cards/RoadmapCard";
import { PricingCard } from "./cards/PricingCard";
import { AnalyticsCard } from "./cards/AnalyticsCard";
import { cn } from "@/lib/utils";

const GRID_CONFIG = [
  { component: KanbanCard, col: "md:col-span-7", row: "row-span-4" },
  { component: RoadmapCard, col: "md:col-span-5", row: "row-span-4" },
  { component: PricingCard, col: "md:col-span-5", row: "row-span-4" },
  { component: AnalyticsCard, col: "md:col-span-7", row: "row-span-4" },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {GRID_CONFIG.map((item, i) => (
        <div key={i} className={cn(item.col, item.row, "relative")}>
          <item.component />
        </div>
      ))}
    </div>
  );
}