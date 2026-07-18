import React from 'react';
import { ArrowRight, Trophy, TrendingUp, Heart } from 'lucide-react';
import './CTA.css';

const CTA_IMG = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=75';

const BADGES = [
  { title: 'High Performer', sub: 'Winter 2025', icon: <Trophy size={14} /> },
  { title: 'Momentum Leader', sub: 'Winter 2025', icon: <TrendingUp size={14} /> },
  { title: 'Users Love Us', sub: '2025', icon: <Heart size={14} fill="currentColor" /> },
];

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-panel">
        <div className="cta-left">
          <div className="cta-info">
            <div className="cta-badges">
              {BADGES.map((b) => (
                <span key={b.title} className="cta-award">
                  <span className="cta-award-mark">{b.icon}</span>
                  <span className="cta-award-txt">
                    <b>{b.title}</b>
                    <span>{b.sub}</span>
                  </span>
                </span>
              ))}
            </div>
            <h2 className="cta-title">Ready to run your entire<br />enterprise smarter?</h2>

            <div className="cta-actions">
              <div className="cta-field">
                <a className="cta-btn" href="#demo">
                  Get Started
                  <span className="cta-arrow"><ArrowRight size={18} /></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-right">
          <video className="cta-video" src="/images/newletter.mp4" autoPlay loop muted playsInline />
        </div>
      </div>
    </section>
  );
};

export default CTA;
