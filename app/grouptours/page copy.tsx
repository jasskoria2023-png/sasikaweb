import { ShieldCheck, BarChart3, PieChart, Landmark, ArrowUpRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function InvestorPage() {


  const verticals = [
  {
    title: "Clasic Singapore",
    image: "/images/singa.jpg",
    description: "Immerse in tropical beaches, temple tours, island hopping, and private villa stays with cultural dining experiences.",
    metrics: "5 Days / 4 Nights",
    color: "emerald"
  },
  {
    title: "Classic European Delight",
    image: "/images/euro.jpg",
    description: "Explore Paris, Swiss Alps, and Rome with guided landmark tours, high-speed rail passes, and luxury stays.",
    metrics: "10 Days / 9 Nights",
    color: "slate"
  },
  {
    title: "Japan Cherry Blossom Special",
    image: "/images/japan.jpg",
    description: "Discover Tokyo, Kyoto, and Mt. Fuji featuring bullet train passes, traditional Ryokan stays, and tea ceremonies.",
    metrics: "7 Days / 6 Nights",
    color: "slate"
  },
  {
    title: "Dubai Luxury & Desert Safari",
    image: "/images/dubai.jpg",
    description: "Experience 5-star hospitality, dune bashing, Burj Khalifa entry, and private yacht cruises across Dubai Marina.",
    metrics: "4 Days / 3 Nights",
    color: "slate"
  },
  
];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
           Discover <span className="text-emerald-500">World</span> Together
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
          Explore the world together with expertly planned itineraries, shared experiences, and end-to-end travel support—offering seamless logistics, quality accommodations, and unforgettable memories every step of the way.</p>
        </div>
      </section>

      {/* Why Invest Section */}
 <section className="py-5 max-w-7xl mx-auto">
        <h3>Up Comming Group Tours</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {verticals.map((v, i) => (
          <div 
            key={i} 
            className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between h-full"
          >
           <div className="relative w-full h-52 mb-6 rounded-3xl overflow-hidden p-1.5 bg-linear-to-b from-white/90 via-slate-100/50 to-slate-200/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-white/60 group-hover:border-blue-400/30 transition-all duration-500">
          
          {/* Inner Highlight Layer for 3D Relief Effect */}
          <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden shadow-inner">
            <img
              src={v.image}
              alt={v.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Overlay for visual depth */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-white/10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        </div>
            <div>
              {/* Centered Image Container (50px x 50px) */}
              

              <h3 className="text-xl font-bold text-emerald-500 text-center">{v.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {v.description}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  {v.metrics}
                </span>
                <button className="text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* The Governance Pillar */}
      <section className="bg-emerald-500 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-emerald-500 mb-6">
            <div className="h-px w-10 bg-emerald-500" />
            <span className="font-bold uppercase tracking-[0.3em] text-xs">The Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Crafting Group Journeys for Life’s Most Extraordinary Moments.<br />
            <span className="text-emerald-500">Strategic Alliances.</span>
          </h1>
        
        </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-emerald-500 font-bold mb-4">Plan your journey</h3>
            <p className="text-slate-400 text-sm mb-6">Fill in the details below and our team will craft a personalised itinerary for you.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-slate-800 border-none rounded-xl p-3 text-white" />
              <input type="email" placeholder="Email" className="w-full bg-slate-800 border-none rounded-xl p-3 text-white" />
              <input type="text" placeholder="Contact Number" className="w-full bg-slate-800 border-none rounded-xl p-3 text-white" />
              <textarea placeholder="Message" className="w-full bg-slate-800 border-none rounded-xl p-3 text-white" />

              <button className="w-full bg-emerald-500 text-slate-900 font-bold py-3 rounded-xl hover:bg-emerald-400 transition flex items-center justify-center gap-2">
                Request Access <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}