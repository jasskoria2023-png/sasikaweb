"use client"; // Required for useState and interactions

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Group Tours", href: "/grouptours" },
  { name: "Free and Easy", href: "/freeandeasy" },
  { name: "Corporate (MICE)", href: "/corporatetour" },
  { name: "Tour Album", href: "/touralbum" },
  { name: "About us", href: "/aboutus" },
  { name: "Careers", href: "/careers" },
  { name: "Contact us", href: "/contactus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-slate-900 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-blue-400">
              <Image
                src="/images/logo.jpg"
                alt="Vacations T&H logo"
                width={150}
                height={42}
                className="h-[42px] w-[150px] max-w-none shrink-0 object-contain"
              />
             
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-cyan-400 transition-colors hover:text-yellow-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Simple Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}