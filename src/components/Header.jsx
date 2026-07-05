import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Globe, ChevronDown, ShoppingCart, Calculator, Truck, Activity, FileText, Users, Settings, Box, CheckCircle, Package, PenTool, BarChart2, X, Moon, Sun } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = ['Products', 'Enterprise', 'Customers', 'Partners', 'Resources'];
const REGIONS = ['India', 'Saudi Arabia', 'Dubai'];
const LANGUAGES = ['English', 'العربية'];

import { MEGA_MENU_DATA } from '../data/megaMenuData';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // The home hero is dark; every other route has a light background, so the
  // header must be solid (dark logo/nav) there from the top.
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'region' | 'lang' | null
  const [region, setRegion] = useState('India');
  const [lang, setLang] = useState('English');
  const [openNav, setOpenNav] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // Apply / persist the dark theme
  useEffect(() => {
    const stored = localStorage.getItem('emvive-theme');
    if (stored === 'dark') {
      document.body.classList.add('dark-theme');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle('dark-theme', next);
      localStorage.setItem('emvive-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  // Mega Menu State
  const [activeProductTab, setActiveProductTab] = useState('Cloud ERP');
  const [activeIndustryTab, setActiveIndustryTab] = useState('Retail & POS');
  
  const actionsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Turn the whole nav solid-white once we've scrolled past the hero
      setIsScrolled(window.scrollY > window.innerHeight - 120);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', handleClick);
    return () => document.removeEventListener('pointerdown', handleClick);
  }, []);

  const toggle = (menu) => setOpenMenu((prev) => (prev === menu ? null : menu));

  return (
    <header className={`neurox-header ${isScrolled || openNav || !isHome ? 'scrolled' : ''}`}>
      {/* Static Announcement Bar */}
      <div className="announcement-bar">
        <span className="announcement-item">🚀 Introducing E-Invoicing: Secure, compliant, and seamless electronic billing.</span>
      </div>

      <div className="header-container">

        {/* Left Side: Logo (click → home) */}
        <Link
          to="/"
          className="header-logo"
          onClick={() => {
            setOpenNav(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" stroke="#FF6B6B" strokeWidth="2" strokeLinejoin="round"/>
             <path d="M16 8L8 13V19L16 24L24 19V13L16 8Z" stroke="#4ECDC4" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">Emvive</span>
        </Link>

        {/* Right Side: White Background Section */}
        <div className={`header-right-bg ${isScrolled ? 'scrolled' : ''}`}>

          <nav className="header-nav">
            {NAV_ITEMS.map((item) => {
              const isOpen = openNav === item;
              const hasMegaMenu = item === 'Products';
              
              return (
                <div key={item} className="nav-item">
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      if (hasMegaMenu) {
                        e.preventDefault();
                        setOpenNav(isOpen ? null : item);
                      }
                    }}
                  >
                    {item}
                  </a>
                  <button
                    className={`nav-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => setOpenNav(isOpen ? null : item)}
                    aria-label={`${isOpen ? 'Close' : 'Open'} ${item} menu`}
                    aria-expanded={isOpen}
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="header-actions" ref={actionsRef}>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <div className="selector-wrap">
              <button
                className="selector-btn"
                onClick={() => toggle('region')}
                aria-expanded={openMenu === 'region'}
              >
                <MapPin size={16} />
                {region}
                <ChevronDown size={14} className={`selector-caret ${openMenu === 'region' ? 'flip' : ''}`} />
              </button>

              {openMenu === 'region' && (
                <div className="dropdown">
                  <div className="dropdown-title">Region</div>
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      className={`dropdown-row ${region === r ? 'active' : ''}`}
                      onClick={() => { setRegion(r); setOpenMenu(null); }}
                    >
                      <MapPin size={16} />
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="selector-wrap">
              <button
                className="selector-btn"
                onClick={() => toggle('lang')}
                aria-expanded={openMenu === 'lang'}
              >
                <Globe size={16} />
                {lang}
                <ChevronDown size={14} className={`selector-caret ${openMenu === 'lang' ? 'flip' : ''}`} />
              </button>

              {openMenu === 'lang' && (
                <div className="dropdown">
                  <div className="dropdown-title">Language</div>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l}
                      className={`dropdown-row ${lang === l ? 'active' : ''}`}
                      onClick={() => { setLang(l); setOpenMenu(null); }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#started" className="btn-get-started">
              Get Started
              <span className="arrow-circle">
                <ArrowRight size={14} color="#fff" />
              </span>
            </a>
          </div>

        </div>

      </div>

      {/* PRODUCTS MEGA MENU */}
      {openNav === 'Products' && (
        <div className="mega-menu-wrapper">
          <div className="mega-menu-inner">
            
            {/* Top Navigation Tabs */}
            <div className="mega-top-nav">
              <div className="mega-tabs">
                {Object.keys(MEGA_MENU_DATA).map((tab) => (
                  <button 
                    key={tab} 
                    className={`mega-tab ${activeProductTab === tab ? 'active' : ''}`}
                    onClick={() => {
                      setActiveProductTab(tab);
                      const firstIndustry = Object.keys(MEGA_MENU_DATA[tab])[0];
                      setActiveIndustryTab(firstIndustry);
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="mega-top-actions">
                <a href="#all-products" className="explore-all">EXPLORE ALL PRODUCTS &rarr;</a>
                <button className="mega-close" onClick={() => setOpenNav(null)}><X size={20} /></button>
              </div>
            </div>

            <div className="mega-body">
              {/* Left Sidebar (Industries) */}
              <div className="mega-sidebar">
                {Object.keys(MEGA_MENU_DATA[activeProductTab] || {}).map((ind) => (
                  <button 
                    key={ind}
                    className={`sidebar-tab ${activeIndustryTab === ind ? 'active' : ''}`}
                    onClick={() => setActiveIndustryTab(ind)}
                  >
                    {ind}
                    {activeIndustryTab === ind && <span className="arrow">&rarr;</span>}
                  </button>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="mega-content">
                {MEGA_MENU_DATA[activeProductTab] && MEGA_MENU_DATA[activeProductTab][activeIndustryTab] && (
                  <>
                    <div className="mega-content-header">
                      <h2>{MEGA_MENU_DATA[activeProductTab][activeIndustryTab].title}</h2>
                      <p>{MEGA_MENU_DATA[activeProductTab][activeIndustryTab].subtitle}</p>
                    </div>

                    <div className="mega-modules-grid">
                      {(MEGA_MENU_DATA[activeProductTab][activeIndustryTab].modules || []).map((mod, i) => {
                        const Icon = mod.icon;
                        return (
                          <div 
                            key={i} 
                            className="module-card"
                            onClick={() => {
                              if (mod.title === 'Inventory for Retail & POS') {
                                navigate('/products/retail-inventory');
                                setOpenNav(null);
                              }
                            }}
                            style={{ cursor: mod.title === 'Inventory for Retail & POS' ? 'pointer' : 'default' }}
                          >
                            <div className="module-icon"><Icon size={24} /></div>
                            <div className="module-text">
                              <h3>{mod.title}</h3>
                              <p>{mod.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Header;
