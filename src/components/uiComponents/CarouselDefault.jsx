import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Clone slides for infinite edges: [last, ...real, first]
const slides = [images[images.length - 1], ...images, images[0]];
const AUTO_MS = 5000;

const CarouselDefault = () => {
  const [index, setIndex] = useState(1); // start at first real slide
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  // --- helpers: interval management (avoid duplicates) ---
  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAuto = () => {
    // ensure only one interval
    stopAuto();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_MS);
  };

  // init/cleanup
  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    setAnimate(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setAnimate(true);
    setIndex((prev) => prev - 1);
  };

  // When a transition ends at a clone, jump silently to the real slide,
  // then re-enable animation on the next frame so subsequent moves animate.
  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      // at last clone -> jump to first real
      setAnimate(false);
      setIndex(1);
      // re-enable animation on next paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    } else if (index === 0) {
      // at first clone -> jump to last real
      setAnimate(false);
      setIndex(slides.length - 2);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }
  };

  // Touch swipe
  const handleTouchStart = (e) => {
    stopAuto();
    touchStartRef.current = e.targetTouches[0].clientX;
    touchEndRef.current = null;
  };
  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const startX = touchStartRef.current;
    const endX = touchEndRef.current;
    if (startX != null && endX != null) {
      const delta = startX - endX;
      if (delta > 50) nextSlide();
      else if (delta < -50) prevSlide();
    }
    touchStartRef.current = null;
    touchEndRef.current = null;
    startAuto();
  };

  // Keyboard
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      stopAuto();
      prevSlide();
      startAuto();
    } else if (e.key === "ArrowRight") {
      stopAuto();
      nextSlide();
      startAuto();
    }
  };

  return (
    <div
      className="group mx-auto relative overflow-hidden h-screen"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      {/* Slider */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex h-full ${
          animate ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="w-full h-full object-cover flex-shrink-0"
            draggable="false"
            loading="lazy"
          />
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={() => {
          stopAuto();
          prevSlide();
          startAuto();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30
        bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full
        opacity-80 group-hover:opacity-100 transition-all"
        aria-label="Previous slide"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={() => {
          stopAuto();
          nextSlide();
          startAuto();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30
        bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full
        opacity-80 group-hover:opacity-100 transition-all"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, i) => {
          // map real indexes (1..images.length) to dots
          const active = index === i + 1 ||
            // also treat clone boundaries as active for UI consistency
            (index === 0 && i === images.length - 1) ||
            (index === slides.length - 1 && i === 0);

          return (
            <button
              key={i}
              onClick={() => {
                stopAuto();
                setAnimate(true);
                setIndex(i + 1);
                startAuto();
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                active ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselDefault;
