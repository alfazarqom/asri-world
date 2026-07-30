import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Zap, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

const slides = [
  {
    title: 'Mega Tech Sale',
    subtitle: 'Up to 40% off premium gadgets',
    description: 'Shop the latest smartphones, laptops, and accessories at unbeatable prices.',
    cta: 'Shop Deals',
    link: '/products?tag=deal',
    bg: 'from-primary-600 via-primary-700 to-primary-900',
    accent: 'from-accent-400/20 to-transparent',
  },
  {
    title: 'New Arrivals Just Landed',
    subtitle: 'Fresh tech for the new season',
    description: 'Discover the newest devices that just hit our shelves — be the first to own them.',
    cta: 'Explore New',
    link: '/products?tag=new',
    bg: 'from-slate-800 via-slate-900 to-black',
    accent: 'from-primary-500/20 to-transparent',
  },
  {
    title: 'Flash Sale — 24 Hours Only',
    subtitle: 'Limited stock, unlimited savings',
    description: 'Grab these lightning deals before they\'re gone. Prices drop every hour.',
    cta: 'Catch the Flash',
    link: '/products?tag=flash',
    bg: 'from-accent-600 via-accent-700 to-accent-900',
    accent: 'from-warning-400/20 to-transparent',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="relative h-[420px] sm:h-[460px] md:h-[520px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}>
              <div className={`absolute inset-0 bg-gradient-to-tr ${slide.accent}`} />
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            </div>
            <div className="container-x relative z-10 flex h-full items-center">
              <div className="max-w-lg animate-fade-up" key={current}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  <Zap className="h-3.5 w-3.5 text-accent-300" /> {slide.subtitle}
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl text-balance">
                  {slide.title}
                </h2>
                <p className="mt-3 text-base text-white/80 sm:text-lg">{slide.description}</p>
                <Link to={slide.link} className="btn-accent mt-6 group">
                  {slide.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 transition" aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 transition" aria-label="Next slide">
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
