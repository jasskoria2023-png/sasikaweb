'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  ArrowUpRight,
  Filter,
  ChevronLeft,
  ChevronRight,
  FilterX,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import { sendInquiryEmail } from './actions/sendEmail'; // Adjust path if needed

interface TourItem {
  title: string;
  image: string;
  description: string;
  metrics: string;
  color: string;
  country: string;
  month: string;
}

const verticals: TourItem[] = [
  {
    title: "Maldives Resort Escape",
    image: "/images/maldives.jpg",
    description: "Escape to the breathtaking Maldives and experience four days of pure relaxation in a luxurious island resort surrounded by crystal-clear turquoise waters and pristine white-sand beaches.",
    metrics: "4 Days / 3 Nights",
    color: "emerald",
    country: "Maldives",
    month: "October"
  },
  {
    title: "Chennai Shopping Escape",
    image: "/images/chennai.jpg",
    description: "Enjoy the perfect shopping getaway to Chennai! Explore popular malls, bustling local markets, and exclusive branded outlets while experiencing the city's vibrant culture and delicious South Indian cuisine. A perfect short holiday for shopaholics and leisure travellers alike.",
    metrics: "4 Days / 3 Nights",
    color: "slate",
    country: "India",
    month: "November"
  },
  {
    title: "Bangkok Shopping Escape",
    image: "/images/bankok.jpg",
    description: "Experience the ultimate shopping getaway in Bangkok! Discover world-famous malls, vibrant street markets, and unbeatable bargains while enjoying delicious Thai cuisine and the city's exciting nightlife. The perfect short break for shopping and leisure.",
    metrics: "4 Days / 3 Nights",
    color: "slate",
    country: "Thailand",
    month: "December"
  },
  {
    title: "Kuala Lumpur, Malaysia",
    image: "/images/malaysia.jpg",
    description: "Discover the vibrant city of Kuala Lumpur on a relaxing 3 Nights / 4 Days getaway. Explore iconic landmarks, enjoy world-class shopping, savour delicious Malaysian cuisine, and experience the perfect blend of modern attractions and rich cultural heritage. An ideal short holiday for couples, families, and friends.",
    metrics: "4 Days / 3 Nights",
    color: "slate",
    country: "Malaysia",
    month: "December"
  },
  {
    title: "Singapore – 3 Nights / 4 Days",
    image: "/images/singa.jpg",
    description: "Experience the best of Singapore on a 3 Nights / 4 Days city escape. Discover iconic attractions, enjoy world-class shopping, explore beautiful gardens, and indulge in diverse culinary delights. A perfect short holiday combining modern luxury, entertainment, and unforgettable experiences.",
    metrics: "4 Days / 5 Nights",
    color: "emerald",
    country: "Singapore",
    month: "October"
  },
  {
    title: "Dubai Shopping Escape",
    image: "/images/dubai.jpg",
    description: "Experience an exciting shopping getaway in Dubai with a 3 Nights / 4 Days holiday. Explore world-famous shopping malls, traditional souks, and unbeatable retail deals while enjoying iconic attractions, spectacular city views, and exceptional dining. The perfect short escape for shopping, leisure, and luxury.",
    metrics: "4 Days / 3 Nights",
    color: "slate",
    country: "Dubai",
    month: "November"
  },
  {
    title: "Phuket, Thailand",
    image: "/images/phuket.jpg",
    description: "Escape to the tropical paradise of Phuket with a 3 Nights / 4 Days holiday. Relax on stunning beaches, explore vibrant markets, enjoy exciting island adventures, and savour authentic Thai cuisine. The perfect getaway for couples, families, and beach lovers seeking sun, sea, and unforgettable memories.",
    metrics: "4 Days / 3 Nights",
    color: "slate",
    country: "Thailand",
    month: "November"
  }
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedMonth, setSelectedMonth] = useState<string>('All');

  // Form handling state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

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

  // Reset page number on filter selection change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry, selectedMonth]);

  // Calculate Pagination Slices
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const paginatedTours = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTours.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTours, currentPage, itemsPerPage]);

  const handleReset = () => {
    setSelectedCountry('All');
    setSelectedMonth('All');
    setCurrentPage(1);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendInquiryEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setStatus({ type: 'success', message: 'Thank you! Your inquiry has been sent successfully.' });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: 'error', message: result.error || 'Something went wrong.' });
    }
  };

  return (
    <main className="bg-white text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <ImageSlider />
      </section>

      {/* TOURS DISPLAY SECTION (WHITE BACKGROUND) */}
      <section className="py-0 px-6 max-w-7xl mx-auto bg-white rounded-3xl my-12 text-slate-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Upcoming Expeditions</h2>
            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredTours.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredTours.length)} of {filteredTours.length} available tours
            </p>
          </div>

          {/* FILTER CONTROLS */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 px-2 text-slate-500 font-medium text-sm">
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
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 px-2 py-1 transition-colors"
              >
                <FilterX size={14} /> Reset
              </button>
            )}
          </div>
        </div>

        {/* TOUR CARDS GRID */}
        {paginatedTours.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedTours.map((v, i) => (
                <div 
                  key={i} 
                  className="group rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={v.image}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-emerald-400 px-2.5 py-1 rounded-md border border-slate-700">
                        {v.country}
                      </span>

                      <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                        {v.month}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {v.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-slate-200 mt-2 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                      {v.metrics}
                    </span>
                    <button 
                      className="p-2 rounded-xl bg-slate-200 group-hover:bg-emerald-600 group-hover:text-white text-slate-700 transition-all"
                      aria-label="View Details"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 text-xs font-bold rounded-xl transition-all ${
                        pageNum === currentPage
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    aria-label="Next Page"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 max-w-xl mx-auto">
            <FilterX size={36} className="mx-auto text-slate-400 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Tours Found</h3>
            <p className="text-xs text-slate-500 mb-6">No tour packages match your current country or month filters.</p>
            <button
              onClick={handleReset}
              className="bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-emerald-600 py-20 px-6 border-t border-emerald-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-emerald-200 mb-4">
              <div className="h-px w-10 bg-emerald-200" />
              <span className="font-bold uppercase tracking-widest text-xs">The Network</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Crafting Bespoke Journeys for Life’s Most Extraordinary Moments.
            </h2>
            <p className="text-emerald-100 text-sm leading-relaxed max-w-md">
              Connect with our destination architects to arrange custom private departures, group airfares, and dedicated luxury itineraries.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-1">Plan Your Journey</h3>
            <p className="text-slate-400 text-xs mb-6">Fill in the details below and our team will craft a personalized itinerary for you.</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                required
                placeholder="Full Name" 
                className="w-full bg-slate-800 border border-slate-700/60 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
              />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address" 
                className="w-full bg-slate-800 border border-slate-700/60 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
              />
              <input 
                type="text" 
                name="phone"
                placeholder="Contact Number" 
                className="w-full bg-slate-800 border border-slate-700/60 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
              />
              <textarea 
                rows={3} 
                name="message"
                required
                placeholder="Tell us about your destination goals..." 
                className="w-full bg-slate-800 border border-slate-700/60 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
              />

              {status && (
                <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                  status.type === 'success' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' : 'bg-rose-950/80 text-rose-400 border border-rose-800'
                }`}>
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 text-slate-950 font-extrabold py-3.5 rounded-xl hover:bg-emerald-400 disabled:opacity-50 transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Details Required<ArrowUpRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}