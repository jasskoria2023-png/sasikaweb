'use client';

import React, { useState } from 'react';
import { 
  Building2, Briefcase, Globe2, ShieldCheck, Zap, 
  ArrowUpRight, CheckCircle2, Plane, Award, Users, 
  Sparkles, Calendar, FileText, Headphones
} from 'lucide-react';
import Footer from '../components/Footer';

export default function CorporateToursPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    destination: '',
    paxCount: '',
    travelDate: '',
    notes: ''
  });

  const corporatePackages = [
    {
      title: "Singapore Tech & Innovation Summit",
      destination: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800",
      description: "Ideal for corporate delegations. Includes 5-star business stays, Marina Bay event venues, tech park tours, and private airport transfers.",
      duration: "5 Days / 4 Nights",
      category: "Delegation & Trade",
      highlights: ["MICE Venues", "Fast-track Visas", "Gala Dinner Setup"]
    },
    {
      title: "Swiss Alps Leadership Retreat",
      destination: "Switzerland",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
      description: "Executive leadership retreat featuring private chalet accommodation, high-speed Glacier Express passes, and curated team strategy sessions.",
      duration: "7 Days / 6 Nights",
      category: "Executive Retreat",
      highlights: ["Private Chalet", "Alpine Excursions", "Strategy Hubs"]
    },
    {
      title: "Japan Corporate Excellence Tour",
      destination: "Tokyo & Kyoto",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
      description: "Combine high-tech facility visits with cultural team bonding. Shinkansen bullet train passes, VIP dining, and dedicated ground handlers.",
      duration: "8 Days / 7 Nights",
      category: "Incentive Travel",
      highlights: ["Shinkansen Passes", "Cultural Bonding", "Dedicated Escort"]
    },
    {
      title: "Dubai MICE & Expo VIP Package",
      destination: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
      description: "Premium incentive program with Burj Khalifa VIP access, private desert gala dinners, luxury yacht charters, and convention support.",
      duration: "4 Days / 3 Nights",
      category: "Incentives & Expo",
      highlights: ["Yacht Charter", "Desert Gala", "Convention Passes"]
    }
  ];

  const corporatePillars = [
    {
      icon: ShieldCheck,
      title: "End-to-End Compliance",
      description: "Complete corporate invoicing, tax-compliant documentation, and streamlined group visa processing."
    },
    {
      icon: Plane,
      title: "GDS Flight & Hotel Block Booking",
      description: "Negotiated corporate airfares, flexible ticket reissuance, and reserved room blocks at tier-1 international business hotels."
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Account Manager",
      description: "A single point of contact on-site and remote to resolve flight changes, ground logistics, and emergency escalations."
    },
    {
      icon: Award,
      title: "Bespoke Event Branding",
      description: "Tailored airport welcomes, branded delegate kits, private gala setups, and customized conference logistics."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our Corporate Travel Manager will contact you within 2 business hours.');
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-emerald-200 selection:text-emerald-900">
      
{/* HERO SECTION */}
      <section className="relative py-32 px-6 overflow-hidden border-b border-slate-800/80 min-h-[85vh] flex items-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Corporate Skyscrapers Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-900" />
        </div>

        {/* Emerald Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none z-0" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <h1 className="text-1xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6 max-w-4xl">
            <span className="text-white">Corporate Escapes & </span> <br />
            <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">
              Seamless Outbound Journeys.
            </span>
          </h1>
          
          <p className="text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed mb-6 drop-shadow-sm">
            Elevate your international business travel. We manage end-to-end global itineraries for corporate incentive trips, trade delegations, leadership retreats, and overseas conferences.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#rfq-form"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/20 flex items-center gap-2 text-sm"
            >
              Request Corporate Proposal
              <ArrowUpRight size={18} />
            </a>
            <a 
              href="#featured-packages"
              className="bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md text-slate-200 border border-slate-700/80 font-bold px-8 py-4 rounded-xl transition-all text-sm"
            >
              Explore Sample Outbound Itineraries
            </a>
          </div>
        </div>
      </section>

      {/* VALUE METRICS STRIP */}
      <section className="border-b border-slate-800 bg-slate-950/60 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-1">500+</div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Corporate Groups Managed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-1">99.8%</div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Visa Processing Success</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-1">35+</div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">International Destinations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mb-1">24/7</div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">On-Ground Concierge</div>
          </div>
        </div>
      </section>

      {/* FEATURED OUTBOUND PACKAGES */}
      <section id="featured-packages" className="bg-white text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                Curated Corporate Journeys
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
                Featured Outbound Delegations & Retreats
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Every itinerary is fully customizable to match your organization’s schedule, headcount, and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePackages.map((pkg, i) => (
              <div 
                key={i} 
                className="group rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider bg-slate-900/90 text-emerald-400 px-3 py-1 rounded-full border border-slate-700">
                      {pkg.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Highlights Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.highlights.map((item, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-slate-700 bg-slate-200/80 px-2 py-0.5 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                    {pkg.duration}
                  </span>
                  <a 
                    href="#rfq-form"
                    className="text-xs font-bold text-slate-900 flex items-center gap-1 hover:text-emerald-600 transition-colors"
                  >
                    Inquire <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CORPORATES TRUST US (PILLARS) */}
      <section className="bg-slate-950 py-20 px-6 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              The Outbound Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Engineered for Enterprise Standards
            </h2>
            <p className="text-slate-400 text-sm">
              We eliminate administrative friction so your team can focus on business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporatePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl w-fit border border-emerald-500/20 mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORPORATE INQUIRY / RFQ SECTION */}
      <section id="rfq-form" className="bg-white text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                Corporate Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Let’s Plan Your Next International Delegation
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Submit your travel requirements to receive a customized corporate itinerary, estimated airfares, venue options, and visa timeline within 24 hours.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">Custom Group Quotes</h4>
                    <p className="text-xs text-slate-500">Tiered pricing tailored to your delegate count.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">Embassy Liaison & Visa Desk</h4>
                    <p className="text-xs text-slate-500">Fast-track documentation support for corporate teams.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">Flexible Cancellation Terms</h4>
                    <p className="text-xs text-slate-500">Protected corporate booking policies and flight alterations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7 bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-800">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-white mb-1">Request Corporate Proposal</h3>
                <p className="text-slate-400 text-xs">Fill in your requirements for a dedicated account manager response.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Corp Ltd" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Contact Person</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Work Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+94 77 123 4567" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Destination</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Singapore, Europe" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">No. of Delegates</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 25" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.paxCount}
                      onChange={(e) => setFormData({...formData, paxCount: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Approx. Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">Specific Requirements / Message</label>
                  <textarea 
                    rows={3}
                    placeholder="Mention event dates, conference venue preferences, or specialized visa needs..." 
                    className="w-full bg-slate-800 border border-slate-700 focus:border-emerald-500 rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-emerald-500/20 mt-2"
                >
                  Submit Corporate Inquiry <ArrowUpRight size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}