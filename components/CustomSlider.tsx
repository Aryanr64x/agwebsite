"use client";

import { useState, useEffect, useCallback } from "react";

interface SliderProps {
  slides: React.ReactNode[];
}

export default function CustomSlider({ slides }: SliderProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard events
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);


  return (
    <div className="relative w-full flex items-center justify-center">

      {/* LEFT ARROW completely outside */}
      <button
        onClick={prevSlide}
        className="mr-6 bg-fuchsia-200/60 text-black h-12 w-12 flex items-center justify-center rounded-full hover:bg-fuchsia-500/80 transition-all duration-100"
      >
        ←
      </button>

      {/* SLIDER */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full shrink-0">
              {slide}
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                current === i ? "bg-fuchsia-950 w-6" : "bg-fuchsia-400/40 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT ARROW completely outside */}
      <button
        onClick={nextSlide}
        className="ml-6 bg-fuchsia-200/60 text-black text-xl h-12 w-12 flex items-center justify-center rounded-full hover:bg-fuchsia-500/80 transition-all duration-100"
      >
        →
      </button>

    </div>
  );
}
