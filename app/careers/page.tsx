'use client';

import React, { useState } from 'react';
import { 
  MapPin, Clock, ArrowUpRight, CheckCircle2,
  Rocket, Heart, Globe, Plane
} from 'lucide-react';
import Footer from '../components/Footer';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const benefits = [
    {
      icon: Plane,
      title: 'Annual Overseas FAM Trips',
      description: 'Experience international destinations firsthand through company-sponsored familiarization trips.'
    },
    {
      icon: Globe,
      title: 'Global Travel Discounts',
      description: 'Exclusive staff rates on outbound flight bookings, foreign holiday packages, and luxury hotels.'
    },
    {
      icon: Rocket,
      title: 'Continuous IATA & Destination Training',
      description: 'Fully funded certifications in international ticketing, visa compliance, and luxury travel consulting.'
    },
    {
      icon: Heart,
      title: 'Comprehensive Healthcare & Wellness',
      description: 'Medical coverage, paid annual leave, and flexible hybrid working arrangements.'
    }
  ];

  const jobOpenings = [
    {
      id: '1',
      title: 'Outbound Tour & Visa Specialist',
      department: 'Tour Operations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Design bespoke outbound holiday packages (Europe, Asia, Middle East) and manage end-to-end visa application workflows.'
    },
    {
      id: '2',
      title: 'International Flight & Ticketing Executive (IATA)',
      department: 'Reservations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-Time',
      experience: '2+ Years',
      description: 'Handle GDS reservations (Amadeus/Galileo), complex international routing, and group flight bookings for outbound travelers.'
    },
    {
      id: '3',
      title: 'Outbound Marketing & Campaign Strategist',
      department: 'Marketing',
      location: 'Hybrid / Colombo',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Drive seasonal campaigns for long-haul vacation packages, visa-free destinations, and corporate outbound group travel.'
    },
 
  ];

  const departments = ['All', 'Tour Operations', 'Reservations', 'Marketing'];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
           <span className='text-white'>Help Travelers Discover the</span>  <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">World</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">
            We send passionate travelers on unforgettable overseas journeys. Join our team of international travel specialists, flight experts, and digital innovators.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION - WHITE BACKGROUND */}
      <section className="bg-white text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* WHY JOIN US / CULTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                Outbound Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Connecting Sri Lankan Travelers to World Destinations
              </h2>
              <p className="text-slate-600 leading-relaxed">
                From complex multi-country visa assistance to curated European tours and luxury island getaways across Asia, our team handles every detail of international departure with precision.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  'Direct partnerships with major international airlines & global hotel chains',
                  'Dedicated visa assistance and embassy liaison specialists',
                  'Hands-on exposure to global destination management & trade fairs'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Accent */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000" 
                  alt="International Outbound Aviation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    <Globe size={14} /> Global Outbound Travel
                  </div>
                  <p className="text-sm font-semibold text-slate-200">
                    Seamless flight ticketing, overseas holiday packages, and hassle-free visa processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PERKS & BENEFITS */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                Outbound Team Perks
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4">
                Benefits Designed for Global Minds
              </h2>
              <p className="text-slate-600 text-sm">
                We reward travel expertise with global exposure and industry-leading perks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3.5 bg-emerald-100/80 text-emerald-700 rounded-2xl w-fit border border-emerald-200 mb-5">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OPEN POSITIONS */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                Career Opportunities
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4">
                Explore Outbound Openings
              </h2>
              <p className="text-slate-600 text-sm">
                Join our Colombo headquarters or remote team to drive global travel experiences.
              </p>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job Listings List */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {job.department}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <Clock size={12} /> {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">{job.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{job.description}</p>
                  </div>

                  <a
                    href={`/contactus?role=${encodeURIComponent(job.title)}`}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all duration-300 group"
                  >
                    Apply Now
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
w-[400px]
          {/* SPONTANEOUS APPLICATION CTA BANNER */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0  h-100 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Join Our Talent Network</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-1 mb-3">Passion for International Travel?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                If you have experience in outbound tour consulting, Schengen/US visa processing, or GDS ticketing, send us your resume anytime.
              </p>
            </div>

            <a
              href="/contactus"
              className="relative z-10 shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/20 flex items-center gap-2 group text-sm"
            >
              Submit Resume
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}