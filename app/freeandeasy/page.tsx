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
      id: "Maldives_freeandeasy",
      title: "Escape to paradise ",
      destination: "Maldives",
      image: "/images/Maldives.jpeg",
      description: "Escape to paradise with our Maldives Free & Easy Tour! Enjoy pristine beaches, crystal-clear turquoise waters and stunning island scenery at your own pace. Relax, unwind and create your perfect tropical getaway with the freedom to explore, enjoy water activities or simply soak up the sun in one of the world’s most beautiful destinations.",
      duration: "",
      departureMonths: [],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Phuket_Thailand__freeandeasy",
      title: "Discover the tropical paradise ",
      destination: "Phuket, Thailand",
      image: "/images/Phuket_Thailand.jpeg",
      description: "Discover the tropical paradise of Phuket, where stunning beaches, turquoise waters and vibrant island life come together. Enjoy breathtaking scenery, exciting excursions, delicious Thai cuisine and unforgettable coastal experiences. Perfect for travellers looking for the ideal mix of relaxation, adventure and fun.",
      duration: "",
      departureMonths: [],
      category: "Leisure",
      priceFrom: "Please contact for "
    },
    {
      id: "Langkawi",
      title: "Breathtaking beauty of Langkawi ",
      destination: "Langkawi",
      image: "/images/Langkawi.jpeg",
      description: "Discover the breathtaking beauty of Langkawi, Malaysia’s tropical island paradise. Enjoy pristine beaches, turquoise waters, stunning viewpoints, island adventures and rich natural scenery. From relaxing escapes to exciting experiences, Langkawi offers the perfect blend of nature, adventure and relaxation for an unforgettable holiday.",
      duration: "",
      departureMonths: [],
      category: "Leisure",
      priceFrom: "Please contact for " 
    },
    {
      id: "Chennai_freeandeasy",
      title: "Chennai Shopping Tour",
      destination: "Chennai, India",
      image: "/images/Chennai.jpeg",
      description: "Experience the best of Chennai on a 4-day shopping getaway, exploring popular shopping destinations for sarees, fashion, jewellery, accessories and traditional Indian products. Enjoy comfortable accommodation, delicious local cuisine and plenty of time to shop, explore and experience the vibrant city of Chennai.",
      duration: "4 Days / 3 Nights",
      departureMonths: [],
      category: "Shopping",
      priceFrom: "Please contact for "
    },
    {
      id: "Bangkok_Shopping_freeandeasy",
      title: "Bangkok Shopping Tour",
      destination: "Bangkok, Thailand",
      image: "/images/Bangkok_Thailand.jpeg",
      description: "Discover Bangkok, a shopper’s paradise offering everything from trendy fashion and electronics to beauty products, souvenirs and local treasures. Enjoy a fun-filled shopping escape with vibrant markets, modern malls, delicious Thai cuisine and the exciting atmosphere of Thailand’s capital.",
      duration: "",
      departureMonths: [""],
      category: "Shopping",
      priceFrom: "Please contact for "
    },
    {
      id: "Kuala_Lumpur_Malayasia_freeandeasy ",
      title: "World-class shopping malls",
      destination: "Kuala Lumpur, Malaysia",
      image: "/images/Kuala_Lumpur.jpeg",
      description: "Experience the vibrant city of Kuala Lumpur at your own pace. Enjoy a relaxing getaway with the freedom to explore iconic landmarks, world-class shopping malls, lively markets and delicious Malaysian cuisine. Perfect for travellers looking for a flexible city escape filled with shopping, sightseeing and leisure.",
      duration: "",
      departureMonths: [],
      category: "Shopping",
      priceFrom: "Please contact for "
    },
    {
      id: "Dubai_freeandeasy",
      title: " Glamour and excitement of Dubai ",
      destination: "Dubai",
      image: "/images/Dubai.jpeg",
      description: "Experience the glamour and excitement of Dubai on a flexible 4-day getaway. Discover iconic landmarks, world-class shopping, stunning architecture and vibrant entertainment at your own pace. Enjoy the freedom to create your own Dubai experience—perfect for shopping, sightseeing, dining and leisure.",
      duration: "",
      departureMonths: [],
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
      <section className="relative min-h-[85vh] py-32 px-6 border-b border-slate-800 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Maldives.jpeg"
            alt="Maldives tropical island background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-900" />
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Globe2 size={14} /> Curated International Free and Easy Tours
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 max-w-4xl">
            Discover The World <span className="text-emerald-400">Together.</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed mb-10 drop-shadow-sm">
            Expertly planned Free and Easy Tours itineraries with end-to-end logistics, quality accommodations, and dedicated on-ground guides.
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Upcoming Free and Easy Tours</h2>
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
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                      
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