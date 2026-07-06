import React from 'react';
import { useTranslation } from 'react-i18next';
import './Clients.css';
import { Target, Layers, Cpu, Cloud, Box, Database } from 'lucide-react';

const CLIENTS = [
  { id: 1, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/brand-1.png' },
  { id: 2, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/brand-2.png' },
  { id: 3, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/brand-3.png' },
  { id: 4, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/top-logo-New.png' },
  { id: 5, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/brand-4.png' },
  { id: 6, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/header-logo.png' },
  { id: 7, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/ship_logo.png' },
  { id: 8, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/taxillalogo_l.png' },
  { id: 9, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/logo-h.png' },
  { id: 10, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/sappco.png' },
  { id: 11, imgSrc: 'https://tekspurts.com/EMvive/assets/img/brand/home-3/saptex.jpg' }
];

const Clients = () => {
  const { t } = useTranslation();
  return (
    <section className="neurox-clients-section">
      <div className="nc-dark-bg">
        {/* Diagonal Stripes Background */}
        <div className="nc-stripes"></div>

        {/* Logos Marquee */}
        <div className="nc-marquee-container" dir="ltr">
          <div className="nc-marquee-track">
            {/* Double the array for infinite scroll effect */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div className="nc-logo-card" key={idx}>
                <div className="nc-logo-content">
                  <img src={client.imgSrc} alt={`Client ${client.id}`} className="nc-client-img" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cutout */}
        <div className="nc-bottom-cutout">
          <div className="nc-cutout-inner">
            <span className="nc-cutout-text">
              <span className="text-blue">3600+</span> {t('clients.trusted', 'Trusted companies all over the world').replace('3600+ ', '')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
