'use client';

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Search, 
  Calendar, 
  Globe2, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  FilterX,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Footer from '../components/Footer';
import { sendInquiryEmail } from '../actions/sendEmail';

interface TourPackage {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  duration: string;
  departureMonths: string[];
  category: string;
  priceFrom: string;
}

export default function GroupToursPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    month: 'Any Month',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const availableMonths = [
    "All", "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const categories = ["All", "Cultural", "Luxury", "Leisure", "Seasonal"];

  const tours: TourPackage[] = [
    {
      id: "Azerbaijan and Georgia",
      title: "Journey through the breathtaking landscapes",
      destination: "Azerbaijan & Georgia",
      image: "/images/azerbaijan.jpeg",
      description: "Embark on an unforgettable 11-day journey through the breathtaking landscapes, rich history and vibrant cultures of Azerbaijan and Georgia. Discover the modern charm of Baku, explore spectacular mountain scenery, experience ancient cities and charming villages, and enjoy the unique flavours and traditions of the Caucasus. From iconic landmarks and scenic countryside to memorable cultural experiences, this carefully designed group tour offers the perfect combination of sightseeing, comfort and adventure",
      duration: "11 Days / 10 Nights",
      departureMonths: ["December", "February", "April"],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Philippines",
      title: "Breathtaking beauty of the Philippines ",
      destination: "Philippines",
      image: "/images/Phillipinnes.jpeg",
      description: "Experience the breathtaking beauty of the Philippines on our unforgettable 9-day group tour! Discover pristine white-sand beaches, crystal-clear turquoise waters, spectacular islands and vibrant cities while enjoying the warm hospitality and unique culture of this tropical paradise. From exciting island adventures and scenic landscapes to relaxing beach experiences, this carefully designed journey offers the perfect combination of adventure, relaxation and unforgettable memories.",
      duration: "9 Days / 8 Nights",
      departureMonths: ["January", "December"],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Vietnam",
      title: "Beauty, history and culture ",
      destination: "Vietnam",
      image: "/images/Vietnam.jpeg",
      description: "Embark on an unforgettable 12-day journey through the captivating beauty, history and culture of Vietnam. From vibrant cities and ancient heritage sites to breathtaking mountain landscapes, scenic coastlines and spectacular natural wonders, this carefully crafted group tour offers an incredible variety of experiences. Discover the authentic flavours of Vietnamese cuisine, explore iconic attractions and create lifelong memories while travelling with a fun and friendly group.",
      duration: "12 Days / 11 Nights",
      departureMonths: ["February", "November"],
      category: "Leisure",
      priceFrom: "Please contact for " 
    },
    {
      id: "China",
      title: "wonders of China",
      destination: "China",
      image: "/images/China.jpeg",
      description: "Discover the wonders of China on an unforgettable 9-day group tour! Explore a fascinating blend of ancient history, vibrant culture and modern innovation while visiting iconic landmarks, breathtaking landscapes and world-famous cities. From magnificent historical sites to exciting cultural experiences, this carefully designed journey promises unforgettable memories and an incredible taste of China.",
      duration: "9 Days / 8 Nights",
      departureMonths: ["March", "September"],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Turkey",
      title: "Magic of Turkey",
      destination: "Turkey",
      image: "/images/Turkey.jpeg",
      description: "Discover the magic of Turkey on an unforgettable 8-day group tour! Explore Istanbul’s iconic landmarks, experience the beauty of the Bosphorus, discover ancient history, breathtaking landscapes and vibrant Turkish culture. From fascinating historical sites and colourful bazaars to delicious cuisine and unforgettable scenic experiences, this journey offers the perfect blend of history, culture, adventure and relaxation.",
      duration: "8 Days / 7 Nights",
      departureMonths: ["March", "October"],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "South-Korea",
      title: "Beauty of South Korea ",
      destination: "South Korea",
      image: "/images/SouthKorea.jpeg",
      description: "Discover the captivating beauty of South Korea on an unforgettable 10-day group tour! Explore vibrant Seoul, ancient palaces, scenic mountains, charming traditional villages and modern city life. Experience Korea’s unique culture, delicious cuisine and breathtaking landscapes while creating unforgettable memories with your group.",
      duration: "10 Days / 9 Nights",
      departureMonths: ["April", "October"],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Japan",
      title: "Timeless beauty of Japan",
      destination: "Japan",
      image: "/images/Japan.jpeg",
      description: "Experience the timeless beauty of Japan on an unforgettable 10-day group tour! Discover vibrant cities, ancient temples, stunning natural landscapes and unique Japanese traditions. From the excitement of Tokyo to cultural treasures and scenic destinations, enjoy the perfect blend of tradition, technology, culture and unforgettable experiences.",
      duration: "10 Days / 9 Nights",
      departureMonths: ["April", "October"],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Morocco",
      title: "Enchanting Beauty of Morocco",
      destination: "Morocco",
      image: "/images/Morocco.jpeg",
      description: "Discover the enchanting beauty of Morocco on an unforgettable 9-day group tour! Explore vibrant souks, ancient medinas, magnificent palaces and breathtaking landscapes, from the Atlas Mountains to the golden Sahara Desert. Experience Morocco’s rich culture, fascinating history, traditional cuisine and warm hospitality on a journey filled with unforgettable moments.",
      duration: "9 Days / 8 Nights",
      departureMonths: ["May", "December"],
      category: "Leisure",
      priceFrom: "Please contact for "
    }
  ];


  // Filter Logic
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesSearch = 
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMonth = 
        selectedMonth === 'All' || tour.departureMonths.includes(selectedMonth);

      const matchesCategory = 
        selectedCategory === 'All' || tour.category === selectedCategory;

      return matchesSearch && matchesMonth && matchesCategory;
    });
  }, [searchQuery, selectedMonth, selectedCategory, tours]);

  // Calculate Pagination
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const paginatedTours = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTours.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTours, currentPage, itemsPerPage]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMonth('All');
    setSelectedCategory('All');
    setCurrentPage(1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await sendInquiryEmail(new FormData(e.currentTarget));

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({ type: 'success', message: 'Thank you! Your inquiry has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', month: 'Any Month', message: '' });
    } else {
      setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong.' });
    }
  };

  return (
    <div className="bg-white text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-slate-950">
      
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Globe2 size={14} /> Curated International Group Tours
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
            Discover The World <span className="text-emerald-400">Together.</span>
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Expertly planned group itineraries with end-to-end logistics, quality accommodations, and dedicated on-ground guides.
          </p>

          {/* SEARCH & FILTER BAR */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 md:p-6 rounded-3xl shadow-2xl max-w-4xl mx-auto text-left backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Keyword Search */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search destination or tour..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-800/80 border border-slate-700/80 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Month Selector */}
              <div className="md:col-span-4 relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <select 
                  value={selectedMonth}
                  onChange={(e) => {
                    setSelectedMonth(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-800/80 border border-slate-700/80 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none appearance-none cursor-pointer transition-colors"
                >
                  <option value="All">All Departure Months</option>
                  {availableMonths.filter(m => m !== 'All').map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Category Selector */}
              <div className="md:col-span-3">
                <select 
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-800/80 border border-slate-700/80 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none appearance-none cursor-pointer transition-colors"
                >
                  <option value="All">All Travel Types</option>
                  {categories.filter(c => c !== 'All').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TOURS DISPLAY SECTION (WHITE BACKGROUND) */}
      <section className="py-5 px-6 max-w-7xl mx-auto bg-white   text-slate-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Upcoming Group Expeditions</h2>
            <p className="text-slate-500 text-sm mt-1">
              Showing {filteredTours.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredTours.length)} of {filteredTours.length} tours 
              {selectedMonth !== 'All' && ` departing in ${selectedMonth}`}
            </p>
          </div>

          {(searchQuery || selectedMonth !== 'All' || selectedCategory !== 'All') && (
            <button 
              onClick={resetFilters}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <FilterX size={14} /> Reset Filters
            </button>
          )}
        </div>

        {/* Dynamic Grid */}
        {paginatedTours.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedTours.map((tour) => (
                <div 
                  key={tour.id} 
                  className="group rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-emerald-400 px-2.5 py-1 rounded-md border border-slate-700">
                        {tour.category}
                      </span>

                      <span className="absolute bottom-3 left-3 text-xs font-semibold text-white flex items-center gap-1">
                        <MapPin size={12} className="text-emerald-400" /> {tour.destination}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                        {tour.description}
                      </p>

                      {/* Departure Badges */}
                      <div className="space-y-2 mb-4">
                        <span className="text-[11px] font-semibold text-slate-500 block">Departures:</span>
                        <div className="flex flex-wrap gap-1">
                          {tour.departureMonths.map((m) => (
                            <span 
                              key={m} 
                              className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                                m === selectedMonth 
                                  ? 'bg-emerald-600 text-white font-bold' 
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0 border-t border-slate-200 mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <Clock size={14} className="text-emerald-600" />
                      <span>{tour.duration}</span>
                    </div>

                    <a 
                      href="#inquiry"
                      className="p-2 rounded-xl bg-slate-200 group-hover:bg-emerald-600 group-hover:text-white text-slate-700 transition-all"
                      aria-label="Inquire about this tour"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
              <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
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

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
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
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 max-w-xl mx-auto">
            <FilterX size={36} className="mx-auto text-slate-400 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Matching Tours Found</h3>
            <p className="text-xs text-slate-500 mb-6">Try adjusting your departure month or search keyword.</p>
            <button 
              onClick={resetFilters}
              className="bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-emerald-500 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* PLAN YOUR JOURNEY INQUIRY SECTION */}
      <section id="inquiry" className="bg-slate-800 border-t border-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Personalized Consultation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Crafting Journeys For Life’s Great Moments.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you are joining an upcoming scheduled departure or looking for a customized private group itinerary, our travel specialists are here to assist.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Custom private group bookings & tailored schedules</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Dedicated visa assistance & flight coordination</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                <span>End-to-end travel insurance and ground protection</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-6 bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1">Plan Your Journey</h3>
            <p className="text-xs text-slate-400 mb-6">Fill in your details for a tailored response within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Preferred Travel Month</label>
                <select
                  name="month"
                  value={formData.month}
                  onChange={(e) => setFormData({...formData, month: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Any Month">Any Month</option>
                  {availableMonths.filter(m => m !== 'All').map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Special Requirements / Message</label>
                <textarea 
                  name="message"
                  rows={3} 
                  required
                  placeholder="Tell us about your target destinations, group size, or travel dates..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors" 
                />
              </div>

              {submitStatus && (
                <p className={`text-sm ${submitStatus.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`} role="status">
                  {submitStatus.message}
                </p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-emerald-500 text-slate-950 font-extrabold py-3.5 rounded-xl hover:bg-emerald-400 transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <ArrowUpRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}