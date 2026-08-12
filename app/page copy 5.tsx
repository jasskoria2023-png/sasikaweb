'use client';

import { useState, useMemo } from 'react';
import {
  Palmtree, Stethoscope, CloudRain, Cpu, Truck,
  Landmark, Sprout, Wallet, Building2, ArrowUpRight, ShieldCheck, BarChart3, PieChart, FlagIcon, Handshake, Target, TrendingUp, Lightbulb, Users, Blocks, Play, FileQuestion, DollarSign, Rocket, Crown, Filter
} from 'lucide-react';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

// Added country and month properties for filtering
const verticals = [
  {
    title: "Classic Singapore",
    image: "/images/singa.jpg",
    description: "Immerse in tropical beaches, temple tours, island hopping, and private villa stays with cultural dining experiences.",
    metrics: "5 Days / 4 Nights",
    color: "emerald",
    country: "Singapore",
    month: "October"
  },
  {
    title: "Classic European Delight",
    image: "/images/euro.jpg",
    description: "Explore Paris, Swiss Alps, and Rome with guided landmark tours, high-speed rail passes, and luxury stays.",
    metrics: "10 Days / 9 Nights",
    color: "slate",
    country: "France",
    month: "November"
  },
  {
    title: "Japan Cherry Blossom Special",
    image: "/images/japan.jpg",
    description: "Discover Tokyo, Kyoto, and Mt. Fuji featuring bullet train passes, traditional Ryokan stays, and tea ceremonies.",
    metrics: "7 Days / 6 Nights",
    color: "slate",
    country: "Japan",
    month: "April"
  },
  {
    title: "Dubai Luxury & Desert Safari",
    image: "/images/dubai.jpg",
    description: "Experience 5-star hospitality, dune bashing, Burj Khalifa entry, and private yacht cruises across Dubai Marina.",
    metrics: "4 Days / 3 Nights",
    color: "slate",
    country: "UAE",
    month: "December"
  },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedMonth, setSelectedMonth] = useState<string>('All');

  // Extract unique countries dynamically from data
  const availableCountries = useMemo(() => {
    const countries = verticals.map((item) => item.country);
    return ['All', ...Array.from(new Set(countries))];
  }, []);

  // Filter tour items based on active dynamic selections
  const filteredTours = useMemo(() => {
    return verticals.filter((tour) => {
      const matchCountry = selectedCountry === 'All' || tour.country === selectedCountry;
      const matchMonth = selectedMonth === 'All' || tour.month === selectedMonth;
      return matchCountry && matchMonth;
    });
  }, [selectedCountry, selectedMonth]);

  return (
    <main className="selection:bg-emerald-200 selection:text-emerald-900">
      {/* HERO SECTION */}
      <section id='hero' className='relative min-h-screen overflow-hidden'>
        <ImageSlider />
      </section>

      {/* LIFECYCLE GRID SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900">Upcoming Tours</h3>
            <p className="text-sm text-slate-500 mt-1">Filter trips by destination country or departure month.</p>
          </div>

          {/* FILTER CONTROLS */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-100 p-2 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 px-3 text-slate-500 font-medium text-sm">
              <Filter size={16} />
              <span>Filter:</span>
            </div>

            {/* Country Dropdown */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-white border border-slate-200 text-slate-800 text-sm rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="All">All Countries</option>
              {availableCountries.filter(c => c !== 'All').map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {/* Month Dropdown */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-white border border-slate-200 text-slate-800 text-sm rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="All">All Months</option>
              {MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* Reset Filters Button */}
            {(selectedCountry !== 'All' || selectedMonth !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCountry('All');
                  setSelectedMonth('All');
                }}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 px-2 py-1 underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* TOUR CARDS GRID */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredTours.map((v, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="relative w-full h-52 mb-6 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-white/90 via-slate-100/50 to-slate-200/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_10px_25px_-5px_rgba(0,0,0,0.05)] border border-white/60 group-hover:border-blue-400/30 transition-all duration-500">
                  <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden shadow-inner">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-white/10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    <span>{v.country}</span>
                    <span className="text-emerald-600 font-semibold">{v.month}</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-500 text-center mb-2">{v.title}</h3>
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
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium">No tours found matching your selected month and country.</p>
          </div>
        )}
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-emerald-500 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 text-emerald-500 mb-6">
              <div className="h-px w-10 bg-emerald-500" />
              <span className="font-bold uppercase tracking-[0.3em] text-xs">The Network</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Crafting Bespoke Journeys for Life’s Most Extraordinary Moments.<br />
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
    </main>
  );
}