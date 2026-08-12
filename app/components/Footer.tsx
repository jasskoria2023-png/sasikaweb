import React from 'react';
import { Rocket, Github, Linkedin, Twitter, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { TikTok_Sans } from 'next/font/google';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Rocket className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight">Vactionstnh</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
             Vacations TSH is a Sri Lanka-based outbound travel agency offering customized international tour packages, flight ticketing, visa assistance, and complete itinerary planning for overseas holidays, family trips, and group travel.</p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Venture Studio Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Countries</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">East Asia</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Central Asia</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Europe</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Middle East</a></li>
            </ul>
          </div>

          {/* Sector Focus */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Outbound Tours</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Inbound Tours</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Visa Consultation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Flight Bookings</a></li>
            </ul>
          </div>

          {/* Contact / Sri Lanka Context */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Tech Hub District,<br />Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>info@vacationstnh.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} vactionstnh. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Governance</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;