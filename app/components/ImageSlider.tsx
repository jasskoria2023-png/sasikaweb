'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HorizontalFlagBar from './HorizontalFlagBar'

const slides = [
  {
    type: 'image',
    url: '/images/slide1.png',
    title: 'Explore the World',
    subtitle: 'Discover amazing destinations'
  },
  {
    type: 'image',
    url: '/images/slide2.png',
    title: 'Adventure Awaits',
    subtitle: 'Start your journey today'
  },
  {
    type: 'video',
    url: '/video/slide3.mp4',
    title: 'Luxury Travel',
    subtitle: 'Experience premium tours'
  }
]

export default function ImageSlider() {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-svh overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <img
              src={slide.url}
              className={`premium-slide-media w-full h-full object-cover ${index === current ? 'premium-slide-media-active' : ''}`}
              alt={slide.title}
            />
          ) : (
            <video
              src={slide.url}
              className={`premium-slide-media w-full h-full object-cover ${index === current ? 'premium-slide-media-active' : ''}`}
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          {/* Centered Overlay Content */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.72)_0%,rgba(15,23,42,0.22)_50%,rgba(2,6,23,0.58)_100%)] flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.28)_0%,transparent_40%,rgba(2,6,23,0.78)_100%)]" />
            <div className="relative z-10 text-center text-white px-6">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.16)] backdrop-blur-md mb-6">
                Vacation Travels &amp; Holidays
              </span>
              <h2 className="premium-slide-title text-4xl text-white md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.95] mb-5">
                {slide.title}
              </h2>
              <p className="max-w-xl mx-auto text-base md:text-xl text-slate-200/90 font-medium drop-shadow-lg">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Flag Bar - Pinned to the Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <HorizontalFlagBar />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white backdrop-blur-md transition-all hover:bg-emerald-500 hover:text-slate-950"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white backdrop-blur-md transition-all hover:bg-emerald-500 hover:text-slate-950"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <style jsx>{`
        .premium-slide-media {
          filter: brightness(0.72) saturate(1.2) contrast(1.12);
          transform: scale(1.08);
        }

        .premium-slide-media-active {
          animation: premiumHeroPush 5s ease-out forwards;
        }

        .premium-slide-title {
          text-shadow: 0 14px 42px rgba(2, 6, 23, 0.78);
        }

        @keyframes premiumHeroPush {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1.18);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-slide-media-active {
            animation: none;
          }
        }
      `}</style>

    </div>
  )
}