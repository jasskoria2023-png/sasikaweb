'use client';

import React from 'react';
import { 
  Compass, Award, Users, ShieldCheck, Globe2, Heart, 
  MapPin, ArrowUpRight, Sparkles, CheckCircle2, Target, Eye, Linkedin
} from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutUs() {
  const stats = [
    { value: '2+', label: 'Years of Experience' },
    { value: '10+', label: 'Curated Destinations' },
    { value: '100+', label: 'Happy Travelers' },
    { value: '99.4%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      icon: Globe2,
      title: 'International Group Tours',
      description: 'We specialize in meticulously curated group tours across Asia, Europe, and the Middle East, offering immersive cultural experiences and seamless travel logistics.'
    },
    {
      icon: Globe2,
      title: 'Tailor-Made & Private Holidays',
      description: 'Our team crafts bespoke itineraries for discerning travelers, ensuring every detail—from accommodations to activities—is personalized to your preferences.'
    },
    {
      icon: Globe2,
      title: 'Corporate & Incentive Travel',
      description: 'We design corporate travel programs and incentive trips that align with your business objectives, fostering team engagement and rewarding performance.'
    },
    {
      icon: Globe2,
      title: 'Family & Leisure Holidays',
      description: 'We create unforgettable family vacations and leisure holidays, balancing relaxation, adventure, and cultural exploration for travelers of all ages.'
    },
    {
      icon: Globe2,
      title: 'Business & Executive Travel',
      description: 'Our business travel services ensure executives and professionals experience efficient, comfortable, and productive journeys, with attention to every logistical detail.'
    },
    {
      icon: Globe2,
      title: 'Destination Experiences',
      description: 'We offer curated destination experiences, from culinary tours to adventure activities, allowing travelers to engage deeply with local cultures and environments.'
    },
    {
      icon: Globe2,
      title: 'Air Ticketing & Travel Services',
      description: 'We provide comprehensive air ticketing and travel services, including flight bookings, visa assistance, and travel insurance, ensuring a smooth and hassle-free travel experience.'
    },
    {
      icon: Globe2,
      title: 'Educational & Special Interest Tours',
      description: 'We organize educational and special interest tours, catering to groups seeking knowledge-based travel experiences, such as historical tours, art-focused journeys, and academic excursions.'
    }
  ];


  const team = [
    {
      name: 'Shasika Rathnyake',
      title: 'Founder & Managing Director',
      jobTitle: '“Travel has always been more than a business to me — it is a passion and a way of connecting people with the world.”»',
      image: '/images/sashika.jpeg',
      description: `When I founded Vacation Travels and Holidays, my vision was to create a travel company that goes beyond simply selling tours and tickets. I wanted to build a brand where every journey is carefully planned, every traveller is genuinely valued, and every experience becomes a cherished memory.
Having experienced the travel industry from different perspectives, I understand how important trust, professionalism and attention to detail are when people place their holiday plans in our hands.
Our ambition is to take Vacation Travels and Holidays beyond Sri Lanka and build a globally recognised travel brand, while always maintaining the personalised service and genuine care that our clients deserve.
Every destination we introduce, every itinerary we design and every group we lead is guided by one simple belief:
Our clients deserve to experience the world at its very best.
I am incredibly grateful to every traveller, corporate client, partner and member of our team who has been part of our journey so far.
The world is waiting. Let us discover it together.`
,
      linkedin: 'https://www.linkedin.com/'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] py-32 px-6 overflow-hidden border-b border-slate-800/80 flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/outbound2.png"
            alt="Travelers exploring destinations around the world"
            className="cinematic-hero-image w-full h-full object-cover object-center"
          />
          <div className="cinematic-light-streak" />
          <div className="cinematic-light-streak cinematic-light-streak-two" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(15,23,42,0.68)_38%,rgba(15,23,42,0.52)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.12)_0%,rgba(15,23,42,0.22)_38%,rgba(2,6,23,0.72)_100%)]" />
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="premium-hero-title text-4xl md:text-6xl font-extrabold tracking-[-0.04em] mb-6 max-w-4xl leading-[0.96]">
            <span className='text-white'>Architects of </span><span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-cyan-200 bg-clip-text text-transparent">Unforgettable</span> <span className='text-white'>Travel</span>
          </h1>
          <p className="max-w-3xl text-slate-200/90 text-base md:text-lg leading-relaxed drop-shadow-[0_6px_18px_rgba(2,6,23,0.6)] font-medium">
            We bridge the gap between ordinary tourism and extraordinary exploration, crafting bespoke journeys tailored to your unique story.
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
                Your Journey. Our Passion. The World Awaits.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At Vacation Travels and Holidays, we believe travel is more than simply visiting a destination. It is about discovering new cultures, experiencing unforgettable moments, connecting with people, and creating memories that last a lifetime.

We are a Sri Lankan travel company specialising in international group tours, tailor-made holidays, corporate and incentive travel, family vacations, and personalised travel experiences.

From carefully planned group departures to private and customised journeys, our team takes care of every detail to ensure our clients can travel with confidence, comfort and peace of mind.

With a strong focus on professional service, destination expertise, quality experiences and trusted international partnerships, we continuously strive to make every journey special.

              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-3">
                    <Target size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver exceptional, reliable and personalised travel experiences through professional travel management, thoughtfully designed itineraries, trusted global partnerships and innovative travel solutions.</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-3">
                    <Eye size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                  To become a leading and trusted global travel brand from Sri Lanka, connecting travellers with extraordinary destinations and creating journeys that inspire, connect and create lasting memories.</p>
                </div>
              </div>
            </div>

            {/* Visual Accent Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000" 
                  alt="Travel Architect Planning Itinerary" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
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
                
              </p>
            </div>

            <div className="flex justify-center">
              {team.map((member, idx) => (
                <article key={idx} className="w-full max-w-4xl rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all md:flex">
                  <div className="h-72 md:h-auto md:w-2/5 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">{member.jobTitle}</p>
                    <h3 className="font-bold text-slate-900 text-2xl mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-slate-500 mb-4">{member.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.description}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <Linkedin size={18} />
                      LinkedIn Profile
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CALL TO ACTION BANNER */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-100 h-100 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            
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