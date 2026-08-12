import { Handshake, Target, TrendingUp, Lightbulb, Users, Blocks, Play, FileQuestion, DollarSign, Rocket, Crown } from 'lucide-react';
import Image from 'next/image'
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="selection:bg-emerald-200 selection:text-emerald-900">
      {/* HERO SECTION */}
      <section id='hero' className='relative min-h-screen overflow-hidden'>
        <div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
          {/* Left Panel: Content */}
          <div className="col-span-1 md:col-span-2 bg-emerald-500 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              From Student <br />to Founder
            </h2>
            <p className="mt-6 text-lg md:text-xl text-slate-900/80 font-medium leading-relaxed">
              Architecting Sri Lanka’s next $1B tech ecosystem. We transform elite university talent into the next generation of founders through high-velocity development and professional governance.
            </p>
            <div className="mt-8">
              <a href="#section3" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl">
                Start Your Journey
              </a>
            </div>
          </div>

          {/* Right Panel: Interactive Visual */}
          <div className="col-span-1 md:col-span-4 relative flex items-center justify-center bg-white p-12">
            {/* Background SVG / Image Container */}
            <div className="absolute inset-0 opacity-10 bg-[url('/img1.svg')] bg-center bg-no-repeat bg-contain animate-pulse" />
            
            <h1 className="relative text-5xl md:text-7xl font-black text-slate-900 text-center tracking-tight">
              Collaborative <br />
              <span className="text-emerald-600 italic">Innovation</span>
            </h1>
          </div>
        </div>
      </section>

      {/* LIFECYCLE GRID SECTION */}
      <section id='section1' className="border-y border-emerald-100">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {[
            { icon: Lightbulb, label: 'Idea', bg: 'bg-emerald-500' },
            { icon: Users, label: 'Build Team', bg: 'bg-emerald-600' },
            { icon: Blocks, label: 'Create MVP', bg: 'bg-emerald-700' },
            { icon: Play, label: 'Run', bg: 'bg-emerald-800' },
            { icon: FileQuestion, label: 'Validate', bg: 'bg-emerald-900' },
            { icon: DollarSign, label: 'Invest', bg: 'bg-emerald-950' },
            { icon: Rocket, label: 'Fly', bg: 'bg-slate-900' },
            { icon: Crown, label: 'Unicorn', bg: 'bg-orange-500' },
          ].map((step, index) => (
            <div key={index} className={`${step.bg} aspect-square flex flex-col items-center justify-center p-4 transition-all hover:scale-105 hover:z-10 group cursor-default`}>
              <step.icon className="w-12 h-12 text-white mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <p className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id='section2' className='bg-slate-900 py-24 md:py-32 px-6 flex items-center justify-center'>
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">The Vision</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight">
            "Stop building the basics and <span className="text-emerald-500">start building the future</span>: We eliminate technical friction and capital waste to turn your vision into a vetted, de-risked reality."
          </h2>
        </div>
      </section>

      {/* REGISTRATION SECTION */}
      <section id='section3' className='min-h-screen bg-slate-50'>
        <div className="grid grid-cols-1 lg:grid-cols-6 min-h-screen">
          {/* Text Content */}
          <div className="lg:col-span-3 bg-slate-900 flex flex-col justify-center p-8 md:p-16 lg:p-24 text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-emerald-500 mb-8">
              Join With Us
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
              We don't just provide internships; we provide the <span className="text-white font-semibold">blueprint for your future as a CEO.</span>
            </p>
            <p className="mt-6 text-lg text-slate-400">
              Join our ecosystem to build on a world-class technical foundation, access immediate seed capital, and transition from graduate to Founder.
            </p>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-emerald-500">
                <div className="h-px w-8 bg-emerald-500" />
                <span className="font-bold tracking-widest uppercase text-sm">Now recruiting for 2026</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-3 flex items-center justify-center p-6 md:p-12 bg-white">
            <div className="w-full max-w-lg">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}