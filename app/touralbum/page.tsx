'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Play,
  CheckCircle2,
  Compass,
  Radio,
  MapPin,
  Camera
} from 'lucide-react';

interface TourVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  duration: string;
  category: string;
  location: string;
  description: string;
}

// PAST TOURS & TRAVEL HIGHLIGHTS VIDEO DATA
const tourVideos: TourVideoItem[] = [
  {
    id: "tour-1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Ella & Central Highlands Scenic Rail Odyssey",
    duration: "5:20",
    category: "Scenic Train Tour",
    location: "Ella, Sri Lanka",
    description: "Journey through mist-covered tea plantations, historic viaducts, and panoramic mountain passes.",
  },
  {
    id: "tour-2",
    youtubeId: "3JZ_D3ELwOQ",
    title: "Sigiriya Rock Fortress & Ancient Heritage Walk",
    duration: "6:45",
    category: "Heritage & History",
    location: "Dambulla, Sri Lanka",
    description: "Explore 5th-century royal gardens, water moats, and breathtaking summit vistas at the Lion Rock.",
  },
  {
    id: "tour-3",
    youtubeId: "L_LUpnjgPso",
    title: "Mirissa Blue Whale Safari & Coastal Excursions",
    duration: "4:30",
    category: "Wildlife & Ocean",
    location: "Mirissa, Sri Lanka",
    description: "An offshore expedition tracking giant blue whales, dolphins, and secluded southern coves.",
  },
  {
    id: "tour-4",
    youtubeId: "fJ9rUzIMcZQ",
    title: "Galle Dutch Fort Culinary & Sunset Stroll",
    duration: "7:15",
    category: "Culture & Cuisine",
    location: "Galle, Sri Lanka",
    description: "Walk colonial cobblestone ramparts, sample local spiced cuisine, and enjoy Indian Ocean sunsets.",
  },
  {
    id: "tour-5",
    youtubeId: "dQw4w9WgXcQ",
    title: "Yala National Park Leopard Safari Highlights",
    duration: "6:10",
    category: "Wildlife Safari",
    location: "Yala, Sri Lanka",
    description: "Deep-jungle game drives tracking elusive leopards, wild elephants, and tropical bird species.",
  },
  {
    id: "tour-6",
    youtubeId: "3JZ_D3ELwOQ",
    title: "Kandy Sacred Temple & Cultural Dance Showcase",
    duration: "5:50",
    category: "Cultural Experience",
    location: "Kandy, Sri Lanka",
    description: "Immerse in traditional drum rhythms, sacred rituals, and royal botanical gardens in the hill capital.",
  },
  {
    id: "tour-7",
    youtubeId: "L_LUpnjgPso",
    title: "Trincomalee Coral Island & Snorkeling Retreat",
    duration: "4:40",
    category: "Beach & Lagoon",
    location: "Trincomalee, Sri Lanka",
    description: "Crystal clear marine sanctuaries, turquoise lagoons, and underwater reef exploration.",
  },
  {
    id: "tour-8",
    youtubeId: "fJ9rUzIMcZQ",
    title: "Sinharaja Rainforest Eco-Trek & Bird Watching",
    duration: "8:05",
    category: "Eco Adventure",
    location: "Sinharaja, Sri Lanka",
    description: "Guided hikes through primary rainforest canopy, natural rock pools, and endemic wildlife habitats.",
  },
];

export default function TourAlbumPage() {
  const [activeVideo, setActiveVideo] = useState<TourVideoItem>(tourVideos[0]);
  const playerRef = useRef<HTMLDivElement>(null);

  const handleSelectVideo = (video: TourVideoItem) => {
    setActiveVideo(video);
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] py-32 px-6 overflow-hidden border-b border-slate-900 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/imgbg3.png"
            alt="Illustrated world landmarks and travel destinations"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-950" />
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-emerald-500/15 blur-[130px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-6">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15]">
            <span className="text-white">Relive Our </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500 underline decoration-emerald-500/30 underline-offset-8">
              Unforgettable Journeys
            </span>
          </h1>

          <p className="max-w-3xl text-slate-300 text-sm md:text-base leading-relaxed drop-shadow-sm">
            Watch real footage from our previous group tours, wilderness safaris, heritage walks, and island getaways. See what awaits on your next voyage.
          </p>
        </div>
      </section>

      {/* FEATURED TOUR VIDEO PLAYER */}
      <section ref={playerRef} className="py-12 px-6 relative z-10 bg-slate-950">
        <div className="max-w-5xl mx-auto space-y-4">
          
          {/* Active Video Header Info */}
         

          {/* Video Player Frame */}
          <div className="relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 bg-linear-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            <div className="relative w-full aspect-video rounded-4xl overflow-hidden p-2 bg-slate-900 border border-slate-800 shadow-2xl">
              <iframe
                className="w-full h-full rounded-[1.4rem] border border-slate-800 shadow-inner bg-slate-950"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-400 px-2 pt-1 leading-relaxed">
            {activeVideo.description}
          </p>
        </div>
      </section>

      {/* TOUR VIDEO GALLERY GRID */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Camera size={14} /> Travel Video Library
            </div>
            <h3 className="text-2xl font-extrabold text-white">Select a Past Expedition</h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
            <Compass size={14} className="text-emerald-400" />
            <span>{tourVideos.length} Tour Recaps Available</span>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tourVideos.map((item) => {
            const isActive = activeVideo.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectVideo(item)}
                className={`group text-left relative flex flex-col justify-between p-3.5 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? "bg-slate-900/90 border-emerald-500/80 shadow-[0_0_25px_rgba(16,185,129,0.18)] ring-1 ring-emerald-500/30"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3 bg-slate-950 border border-slate-800">
                    <Image
                      src={`https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`}
                      alt={item.title}
                      fill
                      unoptimized
                      className={`object-cover transition-transform duration-500 ${
                        isActive ? "scale-105" : "group-hover:scale-105"
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent group-hover:opacity-60 transition-opacity" />

                    {/* Center Play / Active Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`p-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-emerald-500 text-slate-950 scale-110 shadow-lg shadow-emerald-500/30"
                            : "bg-slate-900/90 text-white border border-slate-700 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 group-hover:scale-110"
                        }`}
                      >
                        {isActive ? (
                          <CheckCircle2 size={18} className="stroke-[2.5]" />
                        ) : (
                          <Play size={18} className="fill-current ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950/90 text-slate-300 border border-slate-800 backdrop-blur-sm">
                      {item.duration}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 mb-1">
                    <span>{item.category}</span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-white line-clamp-2 mb-1 group-hover:text-emerald-300 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-2">
                    <MapPin size={12} className="text-emerald-500 shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer Status Bar */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className={`font-semibold ${isActive ? "text-emerald-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                    {isActive ? "Currently Watching" : "Watch Tour Highlights"}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className={`transition-transform duration-300 ${
                      isActive
                        ? "text-emerald-400 translate-x-0.5 -translate-y-0.5"
                        : "text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

    </div>
  );
}