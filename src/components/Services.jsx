import React from 'react';
import { Cloud, Code, Database, Server } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Database size={40} />,
    title: 'Microsoft Dynamics',
    description: 'Empower your business with comprehensive ERP and CRM solutions tailored to streamline operations.'
  },
  {
    icon: <Cloud size={40} />,
    title: 'Cloud Computing',
    description: 'Secure, scalable, and efficient cloud infrastructure solutions to modernize your IT environment.'
  },
  {
    icon: <Code size={40} />,
    title: 'App Development',
    description: 'Custom application development leveraging the latest technologies for maximum performance.'
  },
  {
    icon: <Server size={40} />,
    title: 'IT Infrastructure',
    description: 'Robust and resilient IT infrastructure setup and management for uninterrupted business flow.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-title">
          <span className="text-gradient font-bold" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>Our Services</span>
          <h2>Intelligent Solutions for<br />Modern Enterprises</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card glass-panel" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#contact" className="service-link">
                Read More <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
