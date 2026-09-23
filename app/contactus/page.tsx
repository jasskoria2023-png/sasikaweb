'use client';

import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, 
  Compass, Globe2, Plane, Sparkles
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [tripTypes, setTripTypes] = useState<string[]>([]);

  const toggleTripType = (type: string) => {
    setTripTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-emerald-200 selection:text-emerald-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] py-32 px-6 overflow-hidden border-b border-slate-800/80 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/outbound2.png"
            alt="Global travel destinations background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-900" />
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
            <span className="text-white" >Let’s Design Your</span> <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">Next Journey</span>
          </h1>
          <p className="max-w-3xl text-slate-300 text-base md:text-lg leading-relaxed drop-shadow-sm">
            Whether you are booking an upcoming group tour or customizing a private multi-destination expedition, our travel architects are ready to assist you.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION - WHITE BACKGROUND */}
      <section className="bg-white text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* CONTACT INFO CARDS (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">Direct Channels</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-6">Get in Touch Directly</h2>
            </div>

            {/* Office Location */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700 shrink-0 border border-emerald-200"> <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Office</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tower 1, World Trade center<br />
                  Sri Lanka 80456
                </p>
              </div>
            </div>

            {/* Phone Support */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700 shrink-0 border border-emerald-200">   <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Direct Concierge Line</h3>
                <p className="text-slate-800 font-mono text-sm mb-1 font-semibold">+94 77 6789 0123</p>
                <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Mon – Fri: 9:00 AM – 6:00 PM (SGT)
                </p>
              </div>
            </div>

            {/* Direct Email */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700 shrink-0 border border-emerald-200">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Specialist Support</h3>
                <p className="text-slate-600 text-sm">info@vactionstnh.com</p>
              </div>
            </div>

            {/* Tour Guarantee Box */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700 shrink-0 border border-emerald-200">
                <Globe2 size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-emerald-900 mb-1">Tailored Travel Guarantee</h4>
                <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                  Every inquiry is reviewed by a dedicated destination expert to ensure personalized group pricing, seamless flights, and private transfers.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM (7 Cols - Light Gray Container on White) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-slate-50 text-slate-900 shadow-xl border border-slate-200 relative overflow-hidden">
              
              {/* Tour Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600" />

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                  Interactive Request
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock size={13} /> 24-hr reply promise
                </span>
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Start Your Trip Inquiry</h2>
              <p className="text-slate-600 text-sm mb-8">
                Tell us where you want to go and how you like to travel.
              </p>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 shadow-inner">
                    <CheckCircle2 size={52} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Your Travel Inquiry is Sent!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting us. A dedicated destination specialist is reviewing your trip parameters and will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-emerald-600 hover:text-emerald-700 underline font-bold uppercase tracking-wider"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* TOUR TYPE PREFERENCES */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                      Select Travel Preference(s)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'group', label: 'Group Tour', icon: UsersIcon },
                        { id: 'luxury', label: 'Luxury & Villa', icon: Sparkles },
                        { id: 'family', label: 'Family Vacation', icon: Plane },
                        { id: 'custom', label: 'Custom Private Itinerary', icon: Compass },
                      ].map((type) => {
                        const active = tripTypes.includes(type.id);
                        const Icon = type.icon;
                        return (
                          <button
                            type="button"
                            key={type.id}
                            onClick={() => toggleTripType(type.id)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                              active
                                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <Icon size={14} />
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* NAME FIELDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        First Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John"
                        className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 text-sm outline-none transition font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Last Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 text-sm outline-none transition font-medium"
                      />
                    </div>
                  </div>

                  {/* CONTACT FIELDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 text-sm outline-none transition font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Contact / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+65 9123 4567"
                        className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 text-sm outline-none transition font-medium"
                      />
                    </div>
                  </div>

                  {/* TOUR SELECTION DROPDOWN & PARTY SIZE */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Destination or Featured Tour
                      </label>
                      <select className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 text-sm outline-none transition cursor-pointer font-medium">
                        <option value="">Select a destination / package...</option>
                        <option value="singapore">Classic Singapore (5D/4N)</option>
                        <option value="europe">Classic European Delight (10D/9N)</option>
                        <option value="japan">Japan Cherry Blossom Special (7D/6N)</option>
                        <option value="dubai">Dubai Luxury & Desert Safari (4D/3N)</option>
                        <option value="custom">Bespoke Custom Route</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Travelers
                      </label>
                      <select className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 text-sm outline-none transition cursor-pointer font-medium">
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3-5">3-5 Persons</option>
                        <option value="6+">6+ (Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Trip Details & Special Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your travel dates, preferred hotel class, dietary needs, or specific landmarks you wish to visit..."
                      className="w-full bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 rounded-xl p-3.5 text-slate-900 placeholder-slate-400 text-sm outline-none transition resize-none font-medium"
                    ></textarea>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group cursor-pointer text-base"
                  >
                    Request Bespoke Itinerary
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper Users Icon Component
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}