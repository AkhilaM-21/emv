import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { geoOrthographic, geoPath } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import './GlobeSection.css';

// Office regions: [lon, lat, label]
const OFFICES = [
  { coords: [77.21, 28.61], label: 'India', regionKey: 'india' },        // Delhi
  { coords: [46.72, 24.63], label: 'Saudi Arabia', regionKey: 'saudi' }, // Riyadh
  { coords: [55.27, 25.20], label: 'Dubai', regionKey: 'dubai' },        // Dubai
];

const Globe = () => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const badgeRefs = useRef([]);
  const cardRef = useRef(null);

  useEffect(() => {
    let raf;
    let destroyed = false;
    let land;
    let borders;
    let frame = 0;

    // rotation state (rotate([lon,lat])); start framed on the office region
    let rotLon = -32;
    let rotLat = 18;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const geoDistance = (a, b) => {
      const r = Math.PI / 180;
      const lat1 = a[1] * r;
      const lat2 = b[1] * r;
      const dLon = (b[0] - a[0]) * r;
      const c = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon);
      return Math.acos(Math.max(-1, Math.min(1, c)));
    };

    // --- drag to rotate ---
    const onDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.style.cursor = 'grabbing';
    };
    const onMove = (e) => {
      if (!dragging) return;
      rotLon += (e.clientX - lastX) * 0.25;
      rotLat -= (e.clientY - lastY) * 0.25;
      rotLat = Math.max(-85, Math.min(85, rotLat));
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => {
      dragging = false;
      canvas.style.cursor = 'grab';
    };
    canvas.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    canvas.style.cursor = 'grab';

    fetch('/countries-110m.json')
      .then((res) => res.json())
      .then((world) => {
        if (destroyed) return;
        land = feature(world, world.objects.countries);
        borders = mesh(world, world.objects.countries, (a, b) => a !== b);
        loop();
      });

    const draw = () => {
      const wrap = wrapRef.current;
      const w = wrap.offsetWidth;
      const h = wrap.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== w * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const scale = Math.min(w * 0.40, 560);
      const cx = w / 2;
      const cy = scale + 60;

      const projection = geoOrthographic()
        .scale(scale)
        .translate([cx, cy])
        .rotate([rotLon, rotLat, 0])
        .clipAngle(90);

      // Unclipped variant so back-side offices still return coordinates (arcs)
      const projArc = geoOrthographic()
        .scale(scale)
        .translate([cx, cy])
        .rotate([rotLon, rotLat, 0])
        .clipAngle(180);

      const path = geoPath(projection, ctx);

      const dark = document.body.classList.contains('dark-theme');
      const oceanColor = dark ? '#0f1e46' : '#dbeafe';
      const landColor = dark ? '#2b4a8a' : '#a6c8f6';
      const borderColor = dark ? 'rgba(120, 160, 255, 0.35)' : 'rgba(255, 255, 255, 0.7)';

      // Ocean
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fillStyle = oceanColor;
      ctx.fill();

      // Land
      ctx.beginPath();
      path(land);
      ctx.fillStyle = landColor;
      ctx.fill();

      // Borders
      ctx.beginPath();
      path(borders);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = borderColor;
      ctx.stroke();

      // 3D sphere shading
      ctx.save();
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.clip();
      const shade = ctx.createRadialGradient(
        cx - scale * 0.35, cy - scale * 0.55, scale * 0.1,
        cx, cy, scale,
      );
      if (dark) {
        shade.addColorStop(0, 'rgba(90, 140, 255, 0.28)');
        shade.addColorStop(0.5, 'rgba(90, 140, 255, 0)');
        shade.addColorStop(1, 'rgba(3, 8, 26, 0.55)');
      } else {
        shade.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
        shade.addColorStop(0.45, 'rgba(255, 255, 255, 0)');
        shade.addColorStop(1, 'rgba(37, 99, 235, 0.18)');
      }
      ctx.fillStyle = shade;
      ctx.beginPath();
      path({ type: 'Sphere' });
      ctx.fill();
      ctx.restore();

      const center = [-rotLon, -rotLat];
      const isVisible = (c) => geoDistance(c, center) < Math.PI / 2;

      // Customers card — fixed at the centre of the globe
      const cardX = cx;
      const cardY = h * 0.44;
      if (cardRef.current) {
        cardRef.current.style.transform =
          `translate(${cardX}px, ${cardY}px) translate(-50%, -50%)`;
      }

      // origin dot at the card
      ctx.save();
      ctx.beginPath();
      ctx.arc(cardX, cardY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(37, 99, 235, 0.85)';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // White glowing dotted arcs from the card to each office (faded on the back)
      OFFICES.forEach((m) => {
        const p = projArc(m.coords);
        if (!p) return;
        const onFront = isVisible(m.coords);
        const alpha = onFront ? 1 : 0.28;   // dimmer when the region is behind

        const ax = cardX;
        const ay = cardY;
        const bx = p[0];
        const by = p[1];
        const mx = (ax + bx) / 2;
        const my = (ay + by) / 2;

        const dx = bx - ax;
        const dy = by - ay;
        const len = Math.hypot(dx, dy) || 1;
        let px = -dy / len;
        let py = dx / len;
        if (py > 0) { px = -px; py = -py; }
        const lift = len * 0.28;
        const ctrlX = mx + px * lift;
        const ctrlY = my + py * lift;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(ctrlX, ctrlY, bx, by);
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.setLineDash([0.5, 9]);
        ctx.lineDashOffset = -frame * 0.6;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = `rgba(37, 99, 235, ${0.85 * alpha})`;
        ctx.shadowBlur = 9;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // glowing endpoint at the office
        ctx.save();
        ctx.beginPath();
        ctx.arc(bx, by, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = `rgba(37, 99, 235, ${0.9 * alpha})`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      });

      // Office pins (HTML badges)
      OFFICES.forEach((m, i) => {
        const el = badgeRefs.current[i];
        if (!el) return;
        const p = projection(m.coords);
        if (p && isVisible(m.coords)) {
          el.style.opacity = '1';
          el.style.transform = `translate(-50%, -140%) translate(${p[0]}px, ${p[1]}px)`;
        } else {
          el.style.opacity = '0';
        }
      });
    };

    // Home framing keeps the office region (India / Saudi / Dubai) on the front
    const HOME_LON = -32;
    const HOME_LAT = 18;

    const loop = () => {
      if (destroyed) return;
      frame += 1;
      if (!dragging) {
        // wobble the rotation in a circle so the region traces a circle on screen
        const t = frame * 0.005;
        const A = 22; // circle radius in degrees
        const targetLon = HOME_LON + A * Math.cos(t);
        const targetLat = HOME_LAT + A * Math.sin(t);
        rotLon += (targetLon - rotLon) * 0.1;
        rotLat += (targetLat - rotLat) * 0.1;
      }
      draw();
      raf = requestAnimationFrame(loop);
    };

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <div className="globe-wrap" ref={wrapRef}>
      <canvas ref={canvasRef} className="globe-canvas" />
      {OFFICES.map((m, i) => (
        <div key={i} ref={(el) => (badgeRefs.current[i] = el)} className="globe-pin">
          <span className="globe-pin-flag" />
          {t(`header.regions.${m.regionKey}`, m.label)}
          <span className="globe-pin-dot" />
        </div>
      ))}

      {/* Customers card (positioned by JS) */}
      <div className="globe-customers-card" ref={cardRef}>
        <span className="gc-flag">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
        </span>
        <div className="gc-text">
          <div className="gc-count">{t('globe.customers', '+2,781 Customers')}</div>
          <div className="gc-sub">{t('globe.scaling', 'Scaling their business with us')}</div>
        </div>
      </div>
    </div>
  );
};

const GlobeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="globe-section" id="global">
      <div className="globe-container">
        <div className="globe-header">
          <span className="globe-eyebrow">
            <span className="eyebrow-dot" />
            {t('globe.badge', 'GLOBAL PRESENCE')}
          </span>
          <h2 className="globe-title">{t('globe.title', 'One platform, offices across the globe')}</h2>
          <p className="globe-subtitle">
            {t('globe.subtitle', 'From India to Saudi Arabia and Dubai, Emvive powers enterprises across regions — drag the globe to explore where we operate.')}
          </p>
        </div>
      </div>
      <Globe />
    </section>
  );
};

export default GlobeSection;
