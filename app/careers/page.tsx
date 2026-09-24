'use client';

import React, { useState } from 'react';
import { 
  MapPin, Clock, ArrowUpRight, CheckCircle2,
  Rocket, Heart, Globe, Plane
} from 'lucide-react';
import Footer from '../components/Footer';
import { sendJobApplicationEmail } from '../actions/sendEmail';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

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
      title: 'Joint Director – Outbound Holidays',
      department: 'Tour Operations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'We are looking for an experienced outbound travel professional to join our management team and take responsibility for the planning, coordination and execution of international group departures.',
      keyRequirements: [
        'Minimum 3 years of experience in outbound holiday operations',
        'Strong knowledge of international destinations, visas and travel logistics',
        'Excellent leadership, communication and customer-handling skills',
        'Excellent communication and customer relationship skills',
        'Strong leadership, negotiation and problem-solving abilities',
        'Ability to work with overseas suppliers, airlines and travel partners',
        'Passion for delivering high-quality travel experiences'
      ]
    },{
      id: '2',
      title: 'Joint Director – Visa Services',
      department: 'Tour Operations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'We are seeking an experienced visa professional with comprehensive knowledge of international tourist visa processes to lead and develop our visa services division.',
      keyRequirements: [
        'Minimum 3 years of experience handling tourist visas',
        'Strong experience with Schengen, UK, USA, China and Japan visas',
        'Knowledge of visa documentation, application procedures and requirements',
        'Ability to assess applications and identify documentation requirements',
        'Excellent customer handling and communication skills',
        'Strong attention to detail and accuracy',
        'Ability to manage a team and oversee visa operations'
      ]
    },{
      id: '3',
      title: 'Senior Executive – Outbound Holidays',
      department: 'Tour Operations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-Time',
      experience: '2+ Years',
      description: 'We are looking for a dynamic travel professional to join our outbound holidays team and assist in managing international group departures and customer travel arrangements.',
      keyRequirements: [
        'Minimum 2 years of experience handling outbound group departures',
        'Good knowledge of international tour destinations',
        'Experience in tour coordination and customer handling',
        'Strong communication and organisational skills',
        'Ability to coordinate with suppliers and overseas partners',
        'Customer-focused attitude with excellent attention to detail',
        'Ability to work in a fast-paced travel environment'
      ]
    },{
      id: '4',
      title: 'Senior Executive – Visa Services',
      department: 'Tour Operations',
      location: 'Colombo, Sri Lanka',
      type: 'Full-Time',
      experience: '2+ Years',
      description: 'We are looking for an experienced visa professional to support our growing visa services team.',
      keyRequirements: [
        'Minimum 2 years of experience handling tourist visas',
        'Good knowledge of visa application procedures and documentation',
        'Experience in preparing and checking visa applications',
        'Strong customer service and communication skills',
        'Excellent attention to detail',
        'Ability to work efficiently under deadlines',
        'Previous experience with multiple tourist visa destinations will be an advantage'
      ]
    },
 
  ];

  const departments = ['All', 'Tour Operations', 'Reservations', 'Marketing'];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingApplication(true);
    setApplicationStatus(null);

    const form = e.currentTarget;

    try {
      const result = await sendJobApplicationEmail(new FormData(form));

      if (result.success) {
        setApplicationStatus({ type: 'success', message: 'Your application has been sent successfully.' });
        form.reset();
      } else {
        setApplicationStatus({ type: 'error', message: result.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Job application submission failed:', error);
      setApplicationStatus({ type: 'error', message: 'Unable to connect to the email service. Please try again.' });
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] py-32 px-6 overflow-hidden border-b border-slate-800/80 flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000"
            alt="Young travelers exploring together"
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
           <span className='text-white'>Help Travelers Discover the</span>  <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-cyan-200 bg-clip-text text-transparent">World, Join the VTH Team</span>
          </h1>
          <p className="max-w-3xl text-slate-200/90 text-base md:text-lg leading-relaxed drop-shadow-[0_6px_18px_rgba(2,6,23,0.6)] font-medium">
           Vacation Travels and Holidays is expanding its team and looking for experienced, passionate and results-driven travel professionals to join our growing organisation.

If you have strong industry experience, excellent customer-handling skills and a passion for international travel, we invite you to take the next step in your career with VTH.

          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION - WHITE BACKGROUND */}
      <section className="bg-white text-slate-900 py-10 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* OPEN POSITIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
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
                    {job.keyRequirements && (
                      <div className="pt-2">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                          Key Requirements
                        </h4>
                        <ul className="space-y-1">
                          {job.keyRequirements.map((requirement) => (
                            <li key={requirement} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
                  alt="Travel professionals exploring together"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Build Your Future</p>
                  <p className="mt-2 text-lg font-extrabold leading-tight">Grow with a team that connects people to the world.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SPONTANEOUS APPLICATION FORM */}
          <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 w-100 h-100 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Join Our Talent Network</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-1 mb-3">Passion for International Travel?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Send your CV and covering letter to apply for a role with Vacation Travels and Holidays.
              </p>
            </div>

            <form onSubmit={handleApplicationSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <input name="name" required placeholder="Full name" aria-label="Full name" className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-500" />
              <input name="email" required type="email" placeholder="Email address" aria-label="Email address" className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-500" />
              <input name="phone" type="tel" placeholder="Phone number" aria-label="Phone number" className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-500" />
              <select name="role" required aria-label="Position applied for" className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white outline-none focus:border-emerald-500">
                <option value="">Select a position</option>
                {jobOpenings.map((job) => <option key={job.id} value={job.title}>{job.title}</option>)}
                <option value="General Application">General Application</option>
              </select>
              <label className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-300">
                <span className="mb-2 block font-semibold text-white">CV / Resume</span>
                <input name="cv" required type="file" accept=".pdf,.doc,.docx" className="block w-full text-xs text-slate-400 file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-3 file:py-2 file:text-xs file:font-bold file:text-white" />
              </label>
              <label className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-300">
                <span className="mb-2 block font-semibold text-white">Covering Letter</span>
                <input name="coverLetter" required type="file" accept=".pdf,.doc,.docx" className="block w-full text-xs text-slate-400 file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-600 file:px-3 file:py-2 file:text-xs file:font-bold file:text-white" />
              </label>
              <textarea name="message" rows={4} placeholder="Short message (optional)" aria-label="Short message" className="md:col-span-2 rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-500" />

              {applicationStatus && <p className={`md:col-span-2 text-sm ${applicationStatus.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`} role="status">{applicationStatus.message}</p>}

              <button type="submit" disabled={isSubmittingApplication} className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-extrabold text-white transition-all hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmittingApplication ? 'Sending Application...' : 'Submit Application'}
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}