import React from 'react';
import { DashboardMetric } from '@/types';

interface MetricCardProps {
  metric: DashboardMetric;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, icon }) => {
  const { title, value, changeLabel, isPositive } = metric;

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-all duration-200 hover:border-zinc-700/80 flex items-start justify-between min-h-[140px]">
      <div className="flex flex-col space-y-3">
        {/* Title text */}
        <span className="text-zinc-400 text-sm font-medium tracking-wide">
          {title}
        </span>
        
        {/* Aggregated Value */}
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
          {value}
        </h2>
        
        {/* Trend Indicators matching Figma 8px scaling grid */}
        <div className="flex items-center space-x-1.5 pt-1">
          <span 
            className={`text-xs font-semibold ${
              isPositive ? 'text-emerald-500' : 'text-rose-500'
            }`}
          >
            {isPositive ? '↑' : '↓'} {changeLabel}
          </span>
        </div>
      </div>

      {/* Modern High-Tech Actionable Icon Slot */}
      {icon && (
        <div className="p-3 rounded-lg bg-zinc-800/40 border border-zinc-800 text-zinc-300">
          {icon}
        </div>
      )}
    </div>
  );
};