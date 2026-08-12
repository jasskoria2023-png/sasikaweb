'use client'

import { useEffect, useState } from 'react'
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
              className="w-full h-full object-cover"
              alt={slide.title}
            />
          ) : (
            <video
              src={slide.url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          {/* Centered Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl text-white md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-white">{slide.subtitle}</p>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full z-20 hover:bg-white transition-colors"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full z-20 hover:bg-white transition-colors"
      >
        ›
      </button>

    </div>
  )
}