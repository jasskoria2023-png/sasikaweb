
"use client";
import React from 'react';
import { User, Mail, School, Rocket, Send } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-3xl ">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Become a Founder</h2>
        <p className="text-slate-600">Join the ecosystem. From Lab to Launch.</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">University Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input 
              type="email" 
              placeholder="name@university.ac.lk"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
            />
          </div>
        </div>

        {/* University/Year */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">University</label>
            <div className="relative">
              <School className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="e.g. SLIIT"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Graduation Year</label>
            <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition appearance-none">
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>
          </div>
        </div>

        {/* Project/Interest */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Primary Interest Area</label>
          <div className="relative">
            <Rocket className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <select className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition appearance-none">
              <option>Digital Convergence</option>
              <option>FinTech / Payments</option>
              <option>AgriTech Solutions</option>
              <option>Public Sector Tech</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full flex items-center justify-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl transition-all shadow-md active:transform active:scale-95"
        >
          <Send className="w-5 h-5" />
          Apply to the Studio
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;