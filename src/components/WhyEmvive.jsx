import React from 'react';
import { Shield, Zap, BarChart3, Users, CheckCircle, Lock, Layout, TrendingUp } from 'lucide-react';
import './WhyEmvive.css';

// Card 1 Illustration: Horizontal bars with metric labels
const OutcomeIllustration = () => (
  <div className="why-illustration">
    <div className="bar-metrics">
      <div className="metric-row">
        <div className="metric-bar" style={{ width: '85%' }}></div>
        <span className="metric-pill"><Zap size={12} /> ERP</span>
      </div>
      <div className="metric-row">
        <div className="metric-bar" style={{ width: '95%' }}></div>
        <span className="metric-pill"><BarChart3 size={12} /> CRM</span>
      </div>
      <div className="metric-row">
        <div className="metric-bar" style={{ width: '70%' }}></div>
        <span className="metric-pill"><Users size={12} /> HR</span>
      </div>
      <div className="metric-row">
        <div className="metric-bar" style={{ width: '90%' }}></div>
        <span className="metric-pill"><TrendingUp size={12} /> Invoicing</span>
      </div>
    </div>
  </div>
);

// Card 2 Illustration: Three checkmark circles
const ReliabilityIllustration = () => (
  <div className="why-illustration">
    <div className="check-group">
      <div className="check-circle"><CheckCircle size={32} /></div>
      <div className="check-circle"><CheckCircle size={32} /></div>
      <div className="check-circle"><CheckCircle size={32} /></div>
    </div>
  </div>
);

// Card 3 Illustration: Shield with lock
const SecureIllustration = () => (
  <div className="why-illustration">
    <div className="shield-wrap">
      <svg viewBox="0 0 120 140" className="shield-svg">
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
        </defs>
        <path d="M60 10 L110 35 L110 80 Q110 120 60 135 Q10 120 10 80 L10 35 Z" 
          fill="none" stroke="#3b82f6" strokeWidth="2" />
        <path d="M60 20 L100 40 L100 78 Q100 112 60 125 Q20 112 20 78 L20 40 Z" 
          fill="url(#shieldGrad)" />
      </svg>
      <Lock size={28} className="shield-lock" />
    </div>
  </div>
);

// Card 4 Illustration: UI elements
const DesignIllustration = () => (
  <div className="why-illustration">
    <div className="design-ui">
      <div className="ui-window">
        <div className="ui-bar"></div>
        <div className="ui-bar short"></div>
        <div className="ui-bar shorter"></div>
      </div>
      <div className="ui-sidebar">
        <div className="ui-toggle"></div>
        <div className="ui-bar thin"></div>
        <div className="ui-bar thin short"></div>
        <div className="ui-check-big"><CheckCircle size={28} /></div>
      </div>
    </div>
  </div>
);

const benefits = [
  {
    id: 1,
    title: 'Unified Platform, Zero Silos',
    description: 'From Cloud ERP and CRM to HR & Payroll and E-Invoicing — Emvive connects every department on a single platform. No more juggling between disconnected tools or importing spreadsheets.',
    illustration: <OutcomeIllustration />,
  },
  {
    id: 2,
    title: '99.9% Uptime Guarantee',
    description: 'Our cloud infrastructure is built for mission-critical operations. Real-time monitoring, automatic failovers, and load balancing keep your business running 24/7 without disruption.',
    illustration: <ReliabilityIllustration />,
  },
  {
    id: 3,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption, role-based access control, SSO/SAML authentication, and comprehensive audit trails. Your financial data, HR records, and customer information stay protected.',
    illustration: <SecureIllustration />,
  },
  {
    id: 4,
    title: 'Intuitive by Design',
    description: 'Every module — from Workflow Automation to Advanced Reporting — is crafted with clean interfaces that your teams can adopt in days, not months. Less training, faster ROI.',
    illustration: <DesignIllustration />,
  },
];

const WhyEmvive = () => {
  return (
    <section className="why-emvive-section" id="why-emvive">
      <div className="why-emvive-container">
        {/* Section Header */}
        <div className="why-header">
          <span className="why-badge">
            <span className="badge-dot"></span>
            Benefits
          </span>
          <h2 className="why-title">Why Choose Emvive</h2>
          <p className="why-subtitle">
            One platform to run your entire enterprise — ERP, CRM, HR, Invoicing, and more — with the performance, security, and simplicity your teams deserve.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="why-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="why-card">
              {benefit.illustration}
              <h3 className="why-card-title">{benefit.title}</h3>
              <p className="why-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEmvive;
