import React from 'react';
import { CircleDollarSign, TrendingUp, Users, Package, Megaphone, ShieldCheck, Hexagon } from 'lucide-react';
import './Features.css';

const featuresLeft = [
  {
    id: 1,
    Icon: CircleDollarSign,
    title: 'Finance & Accounting',
    description: 'Automate invoicing, track cash flow in real-time, and streamline compliance. Connect every transaction directly to your core ledger.'
  },
  {
    id: 2,
    Icon: TrendingUp,
    title: 'Sales & CRM',
    description: 'Manage pipelines, forecast revenue accurately, and close deals faster. Give your sales team full visibility into customer history.'
  },
  {
    id: 3,
    Icon: Users,
    title: 'Human Resources',
    description: 'Simplify onboarding, automate complex payroll calculations, and empower your workforce with intuitive self-service portals.'
  }
];

const featuresRight = [
  {
    id: 4,
    Icon: Package,
    title: 'Operations & Supply Chain',
    description: 'Optimize inventory levels, manage vendor relationships, and track logistics from procurement all the way to final delivery.'
  },
  {
    id: 5,
    Icon: Megaphone,
    title: 'Marketing',
    description: 'Launch targeted campaigns, track ROI on marketing spend, and seamlessly hand off qualified leads to your sales teams.'
  },
  {
    id: 6,
    Icon: ShieldCheck,
    title: 'IT & Security',
    description: 'Maintain complete control over user access, monitor system health, and ensure enterprise-grade data security across all modules.'
  }
];

// A single department card with a hover "light reveal" media layer
const FeatureCard = ({ feature }) => {
  const { Icon } = feature;
  return (
    <div className="feature-card">
      {/* Hover media: department icon revealed with a light effect */}
      <div className="feature-media" aria-hidden="true">
        <span className="feature-media-light" />
        <Icon size={150} className="feature-media-icon" />
      </div>

      <div className="feature-icon-box">
        <Icon size={24} />
      </div>
      <h3 className="feature-card-title">{feature.title}</h3>
      <p className="feature-card-desc">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <span className="features-badge">
            <span className="badge-dot-blue"></span>
            Departments
          </span>
          <h2 className="features-title">One Platform for Every Team</h2>
        </div>

        <div className="features-layout">
          {/* Background SVG Connectors with glowing animation */}
          <svg className="connector-svg" preserveAspectRatio="none" viewBox="0 0 1000 600">
            {/* Left Lines */}
            <path className="conn-line" d="M 500 300 L 400 300 L 400 100 L 300 100" />
            <path className="conn-glow" d="M 500 300 L 400 300 L 400 100 L 300 100" />
            
            <path className="conn-line" d="M 500 300 L 300 300" />
            <path className="conn-glow glow-delay-1" d="M 500 300 L 300 300" />
            
            <path className="conn-line" d="M 500 300 L 400 300 L 400 500 L 300 500" />
            <path className="conn-glow glow-delay-2" d="M 500 300 L 400 300 L 400 500 L 300 500" />

            {/* Right Lines */}
            <path className="conn-line" d="M 500 300 L 600 300 L 600 100 L 700 100" />
            <path className="conn-glow glow-delay-3" d="M 500 300 L 600 300 L 600 100 L 700 100" />
            
            <path className="conn-line" d="M 500 300 L 700 300" />
            <path className="conn-glow glow-delay-1" d="M 500 300 L 700 300" />
            
            <path className="conn-line" d="M 500 300 L 600 300 L 600 500 L 700 500" />
            <path className="conn-glow glow-delay-2" d="M 500 300 L 600 300 L 600 500 L 700 500" />
          </svg>

          {/* Left Column Cards */}
          <div className="features-column left-col">
            {featuresLeft.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>

          {/* Center Logo Hub */}
          <div className="features-center">
            <div className="hub-logo-box">
              <Hexagon size={48} className="hub-icon" />
              <span className="hub-text">Emvive</span>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="features-column right-col">
            {featuresRight.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
