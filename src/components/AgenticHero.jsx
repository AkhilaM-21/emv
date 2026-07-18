import React, { useRef, useState, useEffect } from 'react';
import {
  ArrowRight, Play, Check, Sparkles, Infinity as InfinityIcon,
  UserRound, Landmark, MonitorSmartphone, Scale, PackageSearch,
  ChevronLeft, ChevronRight, Factory, ShoppingBag, HeartPulse, Truck,
  X, Maximize2,
  LayoutGrid, Users, Clock, Wallet, UserPlus, BarChart3, Settings, Search,
} from 'lucide-react';
import './AgenticHero.css';

// HRM dashboard mock content (emerald theme — no blue)
const DASH_NAV = [
  { icon: <LayoutGrid size={17} />, label: 'Dashboard' },
  { icon: <Users size={17} />, label: 'Employees' },
  { icon: <Clock size={17} />, label: 'Attendance' },
  { icon: <Wallet size={17} />, label: 'Payroll' },
  { icon: <UserPlus size={17} />, label: 'Recruitment' },
  { icon: <BarChart3 size={17} />, label: 'Reports' },
  { icon: <Settings size={17} />, label: 'Settings' },
];
const RG = 'radial-gradient(90% 85% at 50% 15%,';
const DASH_STATS = [
  { icon: <Users size={18} />, value: '1,248', label: 'Total employees', trend: 4.2, bg: `${RG} #a7f3d0, #ffffff)`, fg: '#059669' },
  { icon: <Clock size={18} />, value: '1,180', label: 'Present today', trend: 2.1, bg: `${RG} #fed7aa, #ffffff)`, fg: '#c2410c' },
  { icon: <UserPlus size={18} />, value: '18', label: 'Open roles', trend: 6.0, bg: `${RG} #ddd6fe, #ffffff)`, fg: '#6d28d9' },
  { icon: <Wallet size={18} />, value: '$2.4M', label: 'Payroll (MTD)', trend: -1.4, bg: `${RG} #fbcfe8, #ffffff)`, fg: '#be185d' },
];
const DASH_HIRES = [
  { name: 'Marcus Lee', role: 'Product Designer', dept: 'Design', c: `${RG} #fcd34d, #f59e0b)`, i: 'ML' },
  { name: 'Aisha Khan', role: 'Backend Engineer', dept: 'Engineering', c: `${RG} #6ee7b7, #10b981)`, i: 'AK' },
  { name: 'Diego Torres', role: 'Sales Executive', dept: 'Sales', c: `${RG} #c4b5fd, #8b5cf6)`, i: 'DT' },
  { name: 'Emma Wilson', role: 'HR Coordinator', dept: 'People', c: `${RG} #f9a8d4, #ec4899)`, i: 'EW' },
];
const DASH_BARS = [62, 78, 70, 88, 95, 74, 58];
const DASH_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// dummy demo video (placeholder for now) — embedded YouTube link
const DEMO_VIDEO = 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0';

const IMG = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=640&q=70`;

// Hero screenshot + background texture (downloaded locally into /public/hero)
const HERO_SHOT = '/hero/hero-dashboard-2.jpg';
const HERO_BG = '/hero/hero-custom.png';

// departments that rotate into the headline one by one
const DEPTS = [
  'finance.', 'HR.', 'IT.', 'operations.', 'sales.', 'legal.',
  'marketing.', 'procurement.', 'payroll.', 'accounting.',
  'inventory.', 'manufacturing.', 'logistics.', 'projects.',
];

const FEATURES = [
  { icon: <Check size={22} />, color: 'linear-gradient(180deg,#ccf2c7,#9de195)', iconColor: '#156f08', title: 'All-in-one', sub: 'Unified ERP suite' },
  { icon: <Sparkles size={22} />, color: 'linear-gradient(180deg,#ede2fd,#d5c0f9)', iconColor: '#5a28b0', title: 'Automation', sub: 'Streamline every workflow' },
  { icon: <InfinityIcon size={22} />, color: 'linear-gradient(180deg,#e2ebff,#c0d3fd)', iconColor: '#003dc3', title: 'Enterprise-ready', sub: 'Secure & compliant' },
];

const INDUSTRIES = [
  { key: 'hr', title: 'HR', desc: 'Hire, pay and grow your people across every region.', img: IMG('1522071820081-009f0129c71c') },
  { key: 'finance', title: 'Finance', desc: 'Close faster and plan smarter from one real-time ledger.', img: IMG('1554224155-6726b3ff858f') },
  { key: 'it', title: 'IT', desc: 'One platform, one data model. Retire integration debt.', img: IMG('1518770660439-4636190af475') },
  { key: 'legal', title: 'Legal', desc: 'Compliance workflows and audit trails, live and localized.', img: IMG('1505664194779-8beaceb93744') },
  { key: 'ops', title: 'Operations', desc: 'Supply, inventory and logistics, orchestrated end to end.', img: IMG('1553413077-190dd305871c') },
  { key: 'mfg', title: 'Manufacturing', desc: 'Plan production, track output and cut waste in real time.', img: IMG('1581092160562-40aa08e78837') },
  { key: 'retail', title: 'Retail', desc: 'Unify online and in-store commerce with live data.', img: IMG('1441986300917-64674bd600d8') },
  { key: 'health', title: 'Healthcare', desc: 'Streamline care operations, staffing and billing.', img: IMG('1519494026892-80bbd2d6fd0d') },
  { key: 'supply', title: 'Supply Chain', desc: 'Forecast demand and automate fulfillment everywhere.', img: IMG('1566576912321-d58ddd7a6088') },
];

const AgenticHero = () => {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const videoRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [deptIndex, setDeptIndex] = useState(0);

  // rotate the department word one by one
  useEffect(() => {
    const t = setInterval(() => setDeptIndex((i) => (i + 1) % DEPTS.length), 2000);
    return () => clearInterval(t);
  }, []);

  // auto-scroll the industry cards (pauses on hover)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    const t = setInterval(() => {
      if (pausedRef.current) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 352, behavior: 'smooth' });
      }
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTiles = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * 336, behavior: 'smooth' });
  };

  const enlargeVideo = () => {
    const v = videoRef.current;
    if (v && v.requestFullscreen) v.requestFullscreen();
  };

  // close the popup on Escape
  useEffect(() => {
    if (!videoOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setVideoOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [videoOpen]);

  return (
    <>
    <section className="ah-section" id="agentic-hero">
      <div className="ah-panel">
        {/* Crisp CRM hero scene — real layered SVG assets, composed exactly like the reference */}
        <div className="ah-scene" aria-hidden="true">
          <img className="ah-layer ah-clouds" src="/hero/crm-bg/clouds_foreground.svg" alt="" />
          <img className="ah-layer ah-bld-l" src="/hero/crm-bg/left.png" alt="" />
          <img className="ah-layer ah-bld-r" src="/hero/crm-bg/right.png" alt="" />
          <img className="ah-layer ah-ground-l" src="/hero/crm-bg/ground_left.svg" alt="" />
          <img className="ah-layer ah-ground-r2" src="/hero/crm-bg/ground_left.svg" alt="" />
          <img className="ah-layer ah-ground-r" src="/hero/crm-bg/ground_right.svg" alt="" />
        </div>
      </div>
      <div className="ah-hero">
          <h1 className="ah-title">
            The one platform to run your <span className="ah-underline">entire enterprise.</span><br />
            Loved by teams in <span className="ah-rotate"><span key={deptIndex} className="ah-rotate-word">{DEPTS[deptIndex]}</span></span>
          </h1>

          <div className="ah-features">
            {FEATURES.map((f) => (
              <div key={f.title} className="ah-feat">
                <span className="ah-feat-icon" style={{ background: f.color, color: f.iconColor }}>{f.icon}</span>
                <div className="ah-feat-text">
                  <b>{f.title}</b>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ah-cta-field">
            <a href="#demo" className="ah-cta">
              Get Started
              <span className="ah-cta-arrow"><ArrowRight size={18} /></span>
            </a>
          </div>

          {/* Product screenshot with the ghost-frame border + faded bottom + play pill */}
          <div className="ah-app">
            <div className="ah-app-screen">
              <div className="dash">
                <aside className="dash-nav">
                  <div className="dash-brand"><span className="dash-logo">E</span> Emvive HR</div>
                  <span className="dash-nav-label">MENU</span>
                  {DASH_NAV.map((n, i) => (
                    <div key={n.label} className={`dash-nav-item ${i === 0 ? 'active' : ''}`}>{n.icon}<span>{n.label}</span></div>
                  ))}
                </aside>
                <main className="dash-body">
                  <div className="dash-top">
                    <div>
                      <h4>Good morning, Sarah</h4>
                      <p>Here's your team overview for today</p>
                    </div>
                    <div className="dash-top-right">
                      <span className="dash-search"><Search size={14} /> Search employees…</span>
                      <span className="dash-ava" style={{ background: `${RG} #c4b5fd, #7c3aed)` }}>SR</span>
                    </div>
                  </div>
                  <div className="dash-stats">
                    {DASH_STATS.map((s) => (
                      <div key={s.label} className="dash-stat">
                        <span className="dash-stat-ic" style={{ background: s.bg, color: s.fg }}>{s.icon}</span>
                        <div className="dash-stat-txt"><b>{s.value}</b><span>{s.label}</span></div>
                        <em className={s.trend > 0 ? 'up' : 'down'}>{s.trend > 0 ? '+' : ''}{s.trend}%</em>
                      </div>
                    ))}
                  </div>
                  <div className="dash-cards">
                    <div className="dash-chart">
                      <div className="dash-card-head"><b>Attendance overview</b><span>This week</span></div>
                      <div className="dash-bars">
                        {DASH_BARS.map((h, i) => (<div key={i} className="dash-bar" style={{ height: `${h}%` }} />))}
                      </div>
                      <div className="dash-bar-labels">{DASH_DAYS.map((d) => (<span key={d}>{d}</span>))}</div>
                    </div>
                    <div className="dash-list">
                      <div className="dash-card-head"><b>Recent hires</b><span>View all</span></div>
                      {DASH_HIRES.map((h) => (
                        <div key={h.name} className="dash-row">
                          <span className="dash-row-ava" style={{ background: h.c }}>{h.i}</span>
                          <div className="dash-row-txt"><b>{h.name}</b><span>{h.role}</span></div>
                          <span className="dash-badge">{h.dept}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <button className="ah-play" type="button" aria-label="Play video" onClick={() => setVideoOpen(true)}>
              <span className="ah-play-inner">
                <span className="ah-play-icon"><Play size={16} fill="#fff" color="#fff" /></span>
                <span className="ah-play-text">
                  <span className="ah-play-title">Discover Emvive</span>
                  <span className="ah-play-desc">Video, 2 mins</span>
                </span>
              </span>
            </button>
          </div>
      </div>
    </section>

    <section className="ah-tiles-section" id="industries">
      <div className="ah-industries-wrap">
        <div className="ah-tiles-nav">
          <button className="ah-tile-arrow" onClick={() => scrollTiles(-1)} aria-label="Previous"><ChevronLeft size={20} /></button>
          <button className="ah-tile-arrow" onClick={() => scrollTiles(1)} aria-label="Next"><ChevronRight size={20} /></button>
        </div>
        <div
          className="ah-industries"
          ref={trackRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {INDUSTRIES.map((ind) => (
            <div key={ind.key} className="fs-card">
              <div className="fs-preview">
                <img className="fs-img" src={ind.img} alt={ind.title} loading="lazy" />
              </div>
              <h3 className="fs-title">{ind.title}</h3>
              <p className="fs-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {videoOpen && (
      <div className="ah-modal" onClick={() => setVideoOpen(false)}>
        <div className="ah-modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="ah-modal-actions">
            <button className="ah-modal-btn" type="button" aria-label="Enlarge" onClick={enlargeVideo}>
              <Maximize2 size={18} />
            </button>
            <button className="ah-modal-btn" type="button" aria-label="Close" onClick={() => setVideoOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <iframe
            ref={videoRef}
            className="ah-modal-video"
            src={DEMO_VIDEO}
            title="Discover Emvive"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )}
    </>
  );
};

export default AgenticHero;
