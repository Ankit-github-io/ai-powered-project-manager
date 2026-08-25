

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    
    <div className="flex flex-col justify-between  p-8 h-48 rounded-3xl border border-[#1e1e1e] bg-[#0c0c0c] hover:border-[#333] transition-all duration-300">
      
      <p className="text-[#A3A3A3] text-xs leading-relaxed italic line-clamp-5">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4 mt-4">
        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-xs font-bold text-white border border-[#262626] shrink-0">
          {name.charAt(0)}
        </div>
        <div className="overflow-hidden">
          <div className="text-sm font-medium text-white truncate">{name}</div>
          <div className="text-xs text-[#525252] truncate">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}