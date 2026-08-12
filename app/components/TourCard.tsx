import { ArrowUpRight } from "lucide-react";

export function TourCard({ v }) {
  return (
    <div className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all duration-300">
      <div>
        {/* Image Container */}
        <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center overflow-hidden mb-4">
          <img 
            src={v.image} 
            alt={v.title} 
            className="w-[200px] h-[200px] object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Title with Stretched Link */}
        <h3 className="text-xl font-bold text-slate-900 text-center">
          <a 
            href={v.link || "#"} 
            className="before:absolute before:inset-0 focus:outline-none"
          >
            {v.title}
          </a>
        </h3>

        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {v.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
            {v.metrics}
          </span>
          <div className="text-slate-400 group-hover:text-emerald-600 transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}