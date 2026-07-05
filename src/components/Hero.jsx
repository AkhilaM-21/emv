import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Briefcase, Wallet, Users, Settings, Package, TrendingUp,
  ChevronLeft, ChevronRight, Cpu, BarChart3,
} from 'lucide-react';
import LiquidBackground from './LiquidBackground';
import { NetworkViz, ParticleViz, ChartViz, CardFacets } from './HeroVisuals';
import './Hero.css';

const ROTATING_WORDS = [
  { word: 'Business', Icon: Briefcase },
  { word: 'Finance', Icon: Wallet },
  { word: 'Workforce', Icon: Users },
  { word: 'Operations', Icon: Settings },
  { word: 'Inventory', Icon: Package },
  { word: 'Sales', Icon: TrendingUp },
];

const SLIDES = [
  {
    eyebrow: 'THE INTELLIGENT ERP',
    title: 'Run your entire enterprise on one platform',
    desc: 'Unify ERP, HR & Payroll, CRM, Finance, Inventory and Workflow Automation into a single intelligent platform — built to help modern organizations run smarter and move faster.',
    cta: 'Book a Demo',
    Visual: NetworkViz,
    BadgeIcon: Package,
    badgeClass: 'badge-blue',
    rotating: true,
  },
  {
    eyebrow: 'AI-POWERED AUTOMATION',
    title: 'The agentic enterprise is here',
    desc: "AI agents that don't just report problems — they solve them. Automate approvals, invoicing and reconciliation end to end, so your teams focus on decisions, not busywork.",
    cta: 'Explore Automation',
    Visual: ParticleViz,
    BadgeIcon: Cpu,
    badgeClass: 'badge-violet',
    rotating: false,
  },
  {
    eyebrow: 'REAL-TIME INSIGHTS',
    title: 'Make faster decisions with live data',
    desc: 'Track revenue, orders, inventory and workforce in real time. Emvive turns your operational data into clear, actionable insights the moment you need them.',
    cta: 'See Analytics',
    Visual: ChartViz,
    BadgeIcon: BarChart3,
    badgeClass: 'badge-teal',
    rotating: false,
  },
];

const SLIDE_COUNT = SLIDES.length;

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  // Auto-advance the carousel through all three slides
  useEffect(() => {
    const slideId = setInterval(() => {
      setActiveSlide((s) => (s + 1) % SLIDE_COUNT);
    }, 8000);
    return () => clearInterval(slideId);
  }, []);

  const goPrev = () => setActiveSlide((s) => (s - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const goNext = () => setActiveSlide((s) => (s + 1) % SLIDE_COUNT);

  const { Icon: RotIcon, word: rotWord } = ROTATING_WORDS[wordIndex];

  return (
    <section id="home" className="hero-section">
      <LiquidBackground />

      <div className="hero-stage">
        <button className="hero-arrow prev" onClick={goPrev} aria-label="Previous slide">
          <ChevronLeft size={22} />
        </button>

        <div className="hero-card-track">
          {SLIDES.map((slide, i) => {
            const { Visual, BadgeIcon } = slide;
            return (
              <div
                key={i}
                className={`hero-card ${activeSlide === i ? 'active' : ''}`}
              >
                {/* Light faceted background */}
                <div className="hero-card-bg">
                  <CardFacets />
                </div>

                {/* Left: content */}
                <div className="hero-card-content">
                  <p className="hero-eyebrow">{slide.eyebrow}</p>

                  <h1 className="hero-title">
                    {slide.rotating ? (
                      <>
                        Run Your Entire{' '}
                        <span className="hero-rotator">
                          <span key={wordIndex} className="hero-rotate-word">
                            <span className="rotate-icon">
                              {React.createElement(RotIcon)}
                            </span>
                            {rotWord}
                          </span>
                        </span>{' '}
                        From One Platform
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>

                  <p className="hero-description">{slide.desc}</p>

                  <a href="#demo" className="hero-cta">
                    {slide.cta}
                    <ArrowRight size={18} />
                  </a>
                </div>

                {/* Right: image card overhanging the right edge */}
                <div className="hero-card-visual">
                  <div className="hero-visual-card">
                    <Visual />
                    <span className={`hero-visual-badge ${slide.badgeClass}`}>
                      <BadgeIcon size={26} color="#fff" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <button className="hero-arrow next" onClick={goNext} aria-label="Next slide">
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
