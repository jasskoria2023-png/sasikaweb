export default function Home() {
  const sections = [
    { id: 'hero', title: 'Architecting the Next Generation of Convergent ICT', color: 'bg-emerald-500 text-white', desc: 'We don’t just fund startups, we build them...' },
    { id: 'about', title: 'Get In Touch', color: 'bg-white text-black' }, 
    { id: 'how', title: 'How It Works: Our "Venture Engine"', color: 'bg-emerald-500 text-black' , desc:'Ideate & Prototype...'},
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
      {/* Left Sidebar Sections */}
      <div className="col-span-1 md:col-span-2 overflow-y-auto">
        {sections.map((section) => (
          <section 
            key={section.id} 
            className={`flex min-h-screen flex-col items-baseline justify-center p-12 ${section.color}`}
          >
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              {section.title}
            </h2>
            <p className="mt-4 text-xl opacity-100 text-slate-800">
              {section.desc}
            </p>
          </section>
          
        ))}
      </div>

            <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Key Operational Verticals
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
            Engineered systems designed to streamline key economic sectors through digitization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                    {item.metrics}
                  </span>
                  <div className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Right Content Area with Background SVG */}
      {/* 1. Added 'sticky top-0 h-screen' so it stays visible while scrolling */}
      {/* 2. Added 'flex items-center justify-center' to see the H1 */}
      <div className="col-span-1 md:col-span-4 sticky top-0 h-screen flex items-center justify-center bg-[url('/img1.svg')] bg-center bg-no-repeat bg-contain bg-slate-50">
          
          {/* Added a subtle white glow/background to the text to ensure it's readable over the lines */}
          <h1 className="relative z-10 text-4xl md:text-7xl font-bold text-slate-900 align-text-top drop-shadow-2xl px-10">
            Collaborative <br/> 
            <span className="text-emerald-600">Innovation</span>
          </h1>

      </div>
    </div>
    
  );
}