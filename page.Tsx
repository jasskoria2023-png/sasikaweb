'use client';

import React from 'react';
import { 
  Compass, Award, Users, ShieldCheck, Globe2, Heart, 
  MapPin, ArrowUpRight, Sparkles, CheckCircle2, Target, Eye
} from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutUs() {
  const stats = [
    { value: '12+', label: 'Years of Experience' },
    { value: '45+', label: 'Curated Destinations' },
    { value: '15k+', label: 'Happy Travelers' },
    { value: '99.4%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: Compass,
      title: 'Bespoke Precision',
      description: 'Every itinerary is crafted from scratch to align with your personal pace, travel preferences, and bucket-list aspirations.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Integrity',
      description: 'Transparent pricing, vetted premium accommodations, and round-the-clock ground support mean total peace of mind.'
    },
    {
      icon: Heart,
      title: 'Authentic Connection',
      description: 'We prioritize local immersion, pairing you with verified expert guides who reveal hidden cultural gems.'
    },
    {
      icon: Globe2,
      title: 'Sustainable Journeys',
      description: 'We actively partner with eco-conscious resorts and local communities to minimize environmental footprints.'
    }
  ];

  const team = [
    {
      name: 'Samantha Wickramasinghe',
      role: 'Founder & Chief Curator',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      bio: 'Over 15 years pioneering luxury experiential travel across Asia and Europe.'
    },
    {
      name: 'David Perera',
      role: 'Head of Destination Logistics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'Former expedition leader specializing in complex multi-country ground operations.'
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Private Concierge',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      bio: 'Dedicated to tailoring VIP cultural experiences and bespoke villa stays.'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800/80">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Our Story & Legacy
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Architects of <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">Unforgettable</span> Travel
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">
            We bridge the gap between ordinary tourism and extraordinary exploration—crafting bespoke journeys tailored to your unique story.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-slate-800 bg-slate-950/60 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-white font-mono tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT SECTION - WHITE BACKGROUND */}
      <section className="bg-white text-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* MISSION & VISION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Crafting Meaningful Journeys Beyond the Map
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Founded with a passion for authentic cultural immersion, our team combines insider access, meticulous planning, and elevated luxury standards to deliver travel experiences that linger long after you return home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-3">
                    <Target size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver effortless, highly personalized travel plans that honor regional cultures and natural landscapes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-3">
                    <Eye size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To redefine luxury travel through conscious exploration, local synergy, and flawless execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Accent Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000" 
                  alt="Travel Architect Planning Itinerary" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    <Award size={14} /> Certified Travel Specialists
                  </div>
                  <p className="text-sm font-semibold text-slate-200">
                    Trusted by global travelers to deliver tailored expeditions with zero friction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CORE VALUES */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                Our Core Pillars
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4">
                What Sets Our Service Apart
              </h2>
              <p className="text-slate-600 text-sm">
                Every route we design is built upon four non-negotiable principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3.5 bg-emerald-100/80 text-emerald-700 rounded-2xl w-fit border border-emerald-200 mb-5">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{val.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TEAM SECTION */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
                Leadership & Experts
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-4">
                Meet the Travel Architects
              </h2>
              <p className="text-slate-600 text-sm">
                Our seasoned planners bring decades of cumulative destination knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-0.5">{member.name}</h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="text-slate-600 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION BANNER */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Ready to Start?</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-1 mb-3">Let’s Plan Your Bespoke Journey</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect with our destination concierge today to turn your travel vision into an executable, seamless itinerary.
              </p>
            </div>

            <a
              href="/contactus"
              className="relative z-10 shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/20 flex items-center gap-2 group text-sm"
            >
              Contact Our Concierge
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}