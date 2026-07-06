import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Users, LineChart, PieChart, GitMerge, FileCheck, Search, LayoutDashboard, Briefcase, Headphones, Folder, Handshake, MessageSquare, Settings, LogOut, ChevronDown, Bell, User, CheckCircle, Clock } from 'lucide-react';
import './Products.css';

const productsList = [
  {
    id: 1,
    title: 'Cloud ERP',
    description: 'A comprehensive, scalable Enterprise Resource Planning solution that integrates all your core business processes in real-time. Unify your financials, supply chain, operations, and commerce.',
    industries: ['Manufacturing', 'Retail', 'Logistics', 'Wholesale', 'Construction'],
    icon: <Zap size={22} color="#fff" />
  },
  {
    id: 2,
    title: 'HR & Payroll',
    description: 'Streamline your human resources management and payroll processing. Automate employee onboarding, attendance tracking, and ensure accurate, timely compensation.',
    industries: ['Healthcare', 'Education', 'Corporate', 'Hospitality', 'Non-Profit'],
    icon: <Users size={22} color="#fff" />
  },
  {
    id: 3,
    title: 'CRM & Sales',
    description: 'Build stronger customer relationships and drive sales growth. Track interactions, manage pipelines, and leverage actionable insights to close deals faster.',
    industries: ['Real Estate', 'Finance', 'E-commerce', 'Consulting', 'SaaS'],
    icon: <LineChart size={22} color="#fff" />
  },
  {
    id: 4,
    title: 'Advanced Reporting',
    description: 'Transform your raw data into meaningful intelligence. Create custom dashboards, visualize trends, and make data-driven decisions with powerful analytics.',
    industries: ['Technology', 'Telecom', 'Government', 'Marketing', 'Energy'],
    icon: <PieChart size={22} color="#fff" />
  },
  {
    id: 5,
    title: 'Workflow Automation',
    description: 'Eliminate manual tasks and optimize business efficiency. Design custom workflows that automatically route approvals, trigger actions, and reduce human error.',
    industries: ['IT Services', 'Media', 'Operations', 'Legal', 'Customer Support'],
    icon: <GitMerge size={22} color="#fff" />
  },
  {
    id: 6,
    title: 'E-Invoicing',
    description: 'Secure, compliant, and seamless electronic invoicing. Digitize your billing process, track invoice statuses, and integrate directly with your financial systems.',
    industries: ['Accounting', 'B2B Trade', 'Freelance', 'Supply Chain', 'Legal'],
    icon: <FileCheck size={22} color="#fff" />
  }
];

// Custom CountUp Component
const CountUp = ({ end, duration = 2000, prefix='', suffix='', inView, isFloat=false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0); // Reset count when out of view
      return;
    }
    let startTime = null;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(ease * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return (
    <span>
      {prefix}
      {isFloat ? (count).toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

// Helper to wrap dashboards in the common Mac-like window
const DashboardWindow = ({ title, sidebarItems, children, inView }) => {
  const { t } = useTranslation();
  return (
  <div className={`detailed-dashboard ${inView ? 'is-visible' : ''}`}>
    {/* Sidebar */}
    <div className="dd-sidebar">
      <div className="dd-logo">
        <div className="dd-logo-icon"></div>
        <span>{title}</span>
      </div>
      <nav className="dd-nav">
        {sidebarItems.map((item, i) => (
          <div key={i} className={`dd-nav-item ${i===0 ? 'active':''}`}>{item.icon} {item.label}</div>
        ))}
      </nav>
      <div className="dd-sidebar-footer">
        <div className="dd-nav-item"><Settings size={14} /> {t('products.dash.settings', 'Settings')}</div>
      </div>
    </div>

    {/* Main Area */}
    <div className="dd-main">
      <header className="dd-header">
        <div className="dd-header-title">{t('products.dash.dashboard', 'Dashboard')} <span>/{t('products.dash.overview', 'Overview')}</span></div>
        <div className="dd-header-actions">
          <button className="dd-icon-btn"><Bell size={14} /></button>
          <div className="dd-profile">
            <div className="dd-avatar"><User size={12} /></div>
          </div>
        </div>
      </header>
      <div className="dd-content">
        {children}
      </div>
    </div>
  </div>
  );
};

// 1. Cloud ERP Dashboard
const DashboardERP = ({ inView }) => {
  const { t } = useTranslation();
  return (
  <DashboardWindow title={t('products.dash.erp.title', 'Cloud ERP')} inView={inView} sidebarItems={[{icon: <LayoutDashboard size={14}/>, label: t('products.dash.overview', 'Overview')}, {icon: <Briefcase size={14}/>, label: t('products.dash.erp.resources', 'Resources')}, {icon: <Folder size={14}/>, label: t('products.dash.erp.inventory', 'Inventory')}]}>
    <div className="db-grid erp-grid">
      <div className="db-card stat"><div className="lbl">{t('products.dash.erp.globalRevenue', 'Global Revenue')}</div><div className="val"><CountUp end={1.2} isFloat={true} prefix="$" suffix="M" inView={inView} /></div></div>
      <div className="db-card stat"><div className="lbl">{t('products.dash.erp.activeSupplyNodes', 'Active Supply Nodes')}</div><div className="val text-blue"><CountUp end={342} inView={inView} /></div></div>
      <div className="db-card stat"><div className="lbl">{t('products.dash.erp.operationsEfficiency', 'Operations Efficiency')}</div><div className="val text-green"><CountUp end={94} suffix="%" inView={inView} /></div></div>
      <div className="db-card main-chart">
        <h4>{t('products.dash.erp.resourceAllocation', 'Resource Allocation (Global)')}</h4>
        <div className={`chart-bars ${inView ? 'in-view' : ''}`}>
           <div className="c-bar blue" style={{'--target-h': '60%'}}></div><div className="c-bar blue" style={{'--target-h': '80%'}}></div>
           <div className="c-bar blue" style={{'--target-h': '40%'}}></div><div className="c-bar blue" style={{'--target-h': '90%'}}></div>
           <div className="c-bar blue" style={{'--target-h': '50%'}}></div>
        </div>
      </div>
      <div className="db-card side-list">
        <h4>{t('products.dash.erp.recentShipments', 'Recent Shipments')}</h4>
        <div className="list-item"><span>#SHP-091</span><span className="badge green">{t('products.dash.delivered', 'Delivered')}</span></div>
        <div className="list-item"><span>#SHP-092</span><span className="badge orange">{t('products.dash.inTransit', 'In Transit')}</span></div>
        <div className="list-item"><span>#SHP-093</span><span className="badge orange">{t('products.dash.inTransit', 'In Transit')}</span></div>
      </div>
    </div>
  </DashboardWindow>
  );
};

// 2. HR & Payroll
const DashboardHR = ({ inView }) => {
  const { t } = useTranslation();
  return (
  <DashboardWindow title={t('products.dash.hr.title', 'HR Hub')} inView={inView} sidebarItems={[{icon: <Users size={14}/>, label: t('products.dash.hr.employees', 'Employees')}, {icon: <FileCheck size={14}/>, label: t('products.dash.hr.payroll', 'Payroll')}, {icon: <Clock size={14}/>, label: t('products.dash.hr.timeOff', 'Time Off')}]}>
    <div className="db-grid hr-grid">
      <div className="db-card stat"><div className="lbl">{t('products.dash.hr.totalHeadcount', 'Total Headcount')}</div><div className="val"><CountUp end={1402} inView={inView} /></div></div>
      <div className="db-card stat"><div className="lbl">{t('products.dash.hr.onLeaveToday', 'On Leave Today')}</div><div className="val text-orange"><CountUp end={24} inView={inView} /></div></div>
      <div className="db-card stat"><div className="lbl">{t('products.dash.hr.nextPayroll', 'Next Payroll')}</div><div className="val text-blue">Oct 15</div></div>
      <div className="db-card roster">
        <h4>{t('products.dash.hr.recentHires', 'Recent Hires')}</h4>
        <div className="avatar-list">
           <div className="av-row"><div className="av"></div><div className="av-info"><b>Sarah J.</b><span>{t('products.dash.dept.engineering', 'Engineering')}</span></div></div>
           <div className="av-row"><div className="av"></div><div className="av-info"><b>Mike T.</b><span>{t('products.dash.dept.marketing', 'Marketing')}</span></div></div>
           <div className="av-row"><div className="av"></div><div className="av-info"><b>Elena R.</b><span>{t('products.dash.dept.sales', 'Sales')}</span></div></div>
        </div>
      </div>
      <div className="db-card payroll-chart">
        <h4>{t('products.dash.hr.salaryDistribution', 'Salary Distribution')}</h4>
        <div className={`donut-wrap ${inView ? 'in-view' : ''}`}>
          <svg viewBox="0 0 100 100" className="mini-donut">
             <circle className="d-layer l1" cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="15" fill="none" strokeDasharray="180 300" strokeDashoffset="300"/>
             <circle className="d-layer l2" cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="15" fill="none" strokeDasharray="60 300" strokeDashoffset="300"/>
             <circle className="d-layer l3" cx="50" cy="50" r="40" stroke="#f97316" strokeWidth="15" fill="none" strokeDasharray="30 300" strokeDashoffset="300"/>
          </svg>
        </div>
      </div>
    </div>
  </DashboardWindow>
  );
};

// 3. CRM & Sales
const DashboardCRM = ({ inView }) => {
  const { t } = useTranslation();
  return (
  <DashboardWindow title={t('products.dash.crm.title', 'CRM Pro')} inView={inView} sidebarItems={[{icon: <LineChart size={14}/>, label: t('products.dash.crm.pipeline', 'Pipeline')}, {icon: <Handshake size={14}/>, label: t('products.dash.crm.deals', 'Deals')}, {icon: <MessageSquare size={14}/>, label: t('products.dash.crm.inbox', 'Inbox')}]}>
    <div className="db-grid crm-grid">
      <div className="db-card stat"><div className="lbl">{t('products.dash.crm.winRate', 'Win Rate')}</div><div className="val text-green"><CountUp end={68} suffix="%" inView={inView} /></div></div>
      <div className="db-card stat"><div className="lbl">{t('products.dash.crm.activeDeals', 'Active Deals')}</div><div className="val"><CountUp end={142} inView={inView} /></div></div>
      <div className="db-card funnel">
        <h4>{t('products.dash.crm.salesFunnel', 'Sales Funnel')}</h4>
        <div className={`funnel-chart ${inView ? 'in-view' : ''}`}>
           <div className="f-layer l1" style={{'--target-w': '100%'}}>Leads (1,200)</div>
           <div className="f-layer l2" style={{'--target-w': '80%'}}>Qualified (800)</div>
           <div className="f-layer l3" style={{'--target-w': '60%'}}>Proposal (300)</div>
           <div className="f-layer l4" style={{'--target-w': '40%'}}>Won (142)</div>
        </div>
      </div>
      <div className="db-card deal-list">
        <h4>{t('products.dash.crm.topOpportunities', 'Top Opportunities')}</h4>
        <div className="list-item"><span>Acme Corp</span><b className="text-green">$45,000</b></div>
        <div className="list-item"><span>Globex Inc</span><b className="text-green">$32,000</b></div>
        <div className="list-item"><span>Initech</span><b className="text-green">$28,500</b></div>
        <div className="list-item"><span>Soylent</span><b className="text-green">$15,000</b></div>
      </div>
    </div>
  </DashboardWindow>
  );
};

// 4. Advanced Reporting
const DashboardReporting = ({ inView }) => {
  const { t } = useTranslation();
  return (
  <DashboardWindow title={t('products.dash.reporting.title', 'Analytics')} inView={inView} sidebarItems={[{icon: <PieChart size={14}/>, label: t('products.dash.reporting.dashboards', 'Dashboards')}, {icon: <Search size={14}/>, label: t('products.dash.reporting.queries', 'Queries')}, {icon: <Folder size={14}/>, label: t('products.dash.reporting.reports', 'Reports')}]}>
    <div className="db-grid report-grid">
      <div className="db-card kpi"><div className="lbl">{t('products.dash.reporting.mrr', 'MRR')}</div><div className="val"><CountUp end={248} prefix="$" suffix="K" inView={inView} /></div><div className="line-graph blue"></div></div>
      <div className="db-card kpi"><div className="lbl">{t('products.dash.reporting.churn', 'Churn')}</div><div className="val text-orange"><CountUp end={1.2} isFloat={true} suffix="%" inView={inView} /></div><div className="line-graph orange"></div></div>
      <div className="db-card kpi"><div className="lbl">{t('products.dash.reporting.cac', 'CAC')}</div><div className="val"><CountUp end={450} prefix="$" inView={inView} /></div><div className="line-graph green"></div></div>
      <div className="db-card radar">
        <h4>{t('products.dash.reporting.marketPenetration', 'Market Penetration')}</h4>
        <div className={`radar-circle ${inView ? 'in-view' : ''}`}>
           <div className="r-line"></div><div className="r-line rot1"></div><div className="r-line rot2"></div>
           <div className="r-poly"></div>
        </div>
      </div>
      <div className="db-card bars">
        <h4>{t('products.dash.reporting.yoyGrowth', 'YoY Growth')}</h4>
        <div className={`chart-bars multi ${inView ? 'in-view' : ''}`}>
           <div className="c-bar-group"><div className="c-bar blue" style={{'--target-h': '40%'}}></div><div className="c-bar green" style={{'--target-h': '60%'}}></div></div>
           <div className="c-bar-group"><div className="c-bar blue" style={{'--target-h': '50%'}}></div><div className="c-bar green" style={{'--target-h': '70%'}}></div></div>
           <div className="c-bar-group"><div className="c-bar blue" style={{'--target-h': '60%'}}></div><div className="c-bar green" style={{'--target-h': '85%'}}></div></div>
        </div>
      </div>
    </div>
  </DashboardWindow>
  );
};

// 5. Workflow Automation
const DashboardWorkflow = ({ inView }) => {
  const { t } = useTranslation();
  return (
  <DashboardWindow title={t('products.dash.workflow.title', 'AutoFlow')} inView={inView} sidebarItems={[{icon: <GitMerge size={14}/>, label: t('products.dash.workflow.workflows', 'Workflows')}, {icon: <CheckCircle size={14}/>, label: t('products.dash.workflow.tasks', 'Tasks')}, {icon: <LogOut size={14}/>, label: t('products.dash.workflow.integrations', 'Integrations')}]}>
    <div className="db-grid flow-grid">
      <div className="db-card header-stat">
         <div className="lbl">{t('products.dash.workflow.executed', 'Workflows Executed (24h)')}</div>
         <div className="val text-blue"><CountUp end={14204} inView={inView} /></div>
      </div>
      <div className="db-card flow-canvas">
        <h4>{t('products.dash.workflow.visualBuilder', 'Visual Builder')}</h4>
        <div className={`node-map ${inView ? 'in-view' : ''}`}>
           <div className="node trigger">{t('products.dash.workflow.webhook', 'Webhook')}</div>
           <div className="line-down"></div>
           <div className="node action">{t('products.dash.workflow.filterData', 'Filter Data')}</div>
           <div className="line-split"></div>
           <div className="node-row">
              <div className="node end blue">{t('products.dash.workflow.updateCrm', 'Update CRM')}</div>
              <div className="node end green">{t('products.dash.workflow.sendEmail', 'Send Email')}</div>
           </div>
        </div>
      </div>
    </div>
  </DashboardWindow>
  );
};

// 6. E-Invoicing
const DashboardInvoice = ({ inView }) => {
  const { t } = useTranslation();
  return (
  <DashboardWindow title={t('products.dash.invoice.title', 'InvoiceHub')} inView={inView} sidebarItems={[{icon: <FileCheck size={14}/>, label: t('products.dash.invoice.invoices', 'Invoices')}, {icon: <Users size={14}/>, label: t('products.dash.invoice.clients', 'Clients')}, {icon: <Briefcase size={14}/>, label: t('products.dash.invoice.payments', 'Payments')}]}>
    <div className="db-grid inv-grid">
      <div className="db-card stat"><div className="lbl">{t('products.dash.invoice.awaitingPayment', 'Awaiting Payment')}</div><div className="val text-orange"><CountUp end={42500} prefix="$" inView={inView} /></div></div>
      <div className="db-card stat"><div className="lbl">{t('products.dash.invoice.paidThisMonth', 'Paid (This Month)')}</div><div className="val text-green"><CountUp end={12800} prefix="$" inView={inView} /></div></div>
      <div className="db-card inv-preview">
        <div className={`inv-doc ${inView ? 'in-view' : ''}`}>
           <div className="inv-head"><b>{t('products.dash.invoice.invoiceLabel', 'INVOICE')} #1042</b><span>$4,500.00</span></div>
           <div className="inv-line"></div>
           <div className="inv-row"><span>{t('products.dash.invoice.consulting', 'Consulting')}</span><span>$2,000</span></div>
           <div className="inv-row"><span>{t('products.dash.invoice.development', 'Development')}</span><span>$2,500</span></div>
           <div className="inv-total">{t('products.dash.invoice.total', 'Total')}: $4,500.00</div>
           <div className="badge green paid-stamp">{t('products.dash.invoice.paidStamp', 'PAID')}</div>
        </div>
      </div>
      <div className="db-card inv-list">
        <h4>{t('products.dash.invoice.recentActivity', 'Recent Activity')}</h4>
        <div className="list-item"><span>#1041 (Stripe)</span><span className="badge green">{t('products.dash.paid', 'Paid')}</span></div>
        <div className="list-item"><span>#1043 (Wire)</span><span className="badge orange">{t('products.dash.pending', 'Pending')}</span></div>
        <div className="list-item"><span>#1044 (Card)</span><span className="badge orange">{t('products.dash.pending', 'Pending')}</span></div>
      </div>
    </div>
  </DashboardWindow>
  );
};

// Remove Network Constellation Component completely

const DashboardWrapper = ({ product, inView }) => {
  switch(product.id) {
    case 1: return <DashboardERP inView={inView} />;
    case 2: return <DashboardHR inView={inView} />;
    case 3: return <DashboardCRM inView={inView} />;
    case 4: return <DashboardReporting inView={inView} />;
    case 5: return <DashboardWorkflow inView={inView} />;
    case 6: return <DashboardInvoice inView={inView} />;
    default: return <DashboardERP inView={inView} />;
  }
};

// Parametric line-art ribbon (fans out smoothly, no hard cut) — sits on the right
const ParametricLines = () => {
  const W = 620;
  const H = 300;
  const count = 30;
  const lines = [];
  for (let i = 0; i < count; i++) {
    const phase = i * 0.26;
    const amp = 10 + i * 1.4;
    const yBase = 14 + i * 6;
    let d = `M 0 ${yBase}`;
    for (let x = 20; x <= W; x += 18) {
      const t = x / W;
      const y = yBase + Math.sin(x * 0.013 + phase) * amp * t;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    lines.push(
      <path
        key={i}
        d={d}
        stroke="#2563eb"
        strokeWidth="1"
        fill="none"
        opacity={(0.05 + (i / count) * 0.13).toFixed(3)}
      />,
    );
  }
  return (
    <svg className="product-lines-right" viewBox={`0 0 ${W} ${H}`} fill="none" preserveAspectRatio="none" aria-hidden="true">
      {lines}
    </svg>
  );
};

// Flowing dotted wave (halftone ribbon) — sits at the bottom-left
const DotWave = () => {
  const cols = 58;
  const rows = 10;
  const dots = [];
  for (let c = 0; c < cols; c++) {
    const x = c * 11;
    const center = 90 + Math.sin(c * 0.26) * 40;
    for (let r = 0; r < rows; r++) {
      const off = r - (rows - 1) / 2;
      const y = center + off * 10;
      const dist = Math.abs(off) / ((rows - 1) / 2);
      const rad = (1.9 - dist * 1.1).toFixed(2);
      const op = (0.28 - dist * 0.18).toFixed(3);
      dots.push(<circle key={`${c}-${r}`} cx={x} cy={y.toFixed(1)} r={rad} fill="#7db4ff" opacity={op} />);
    }
  }
  return (
    <svg className="product-dots-left" viewBox="0 0 640 220" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {dots}
    </svg>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 0;
      // Loop through refs to find the highest index card that has reached its sticky position
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const stickyTop = 100 + (index * 20); // matching the inline style top position
          // If the top of the card is at or above its sticky point, it is active
          if (rect.top <= stickyTop + 10) {
            currentActive = index;
          }
        }
      });
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="global-section-badge"><span className="global-badge-dot"></span> {t('products.badge', 'Our Products')}</span>
          <h2 className="product-title-top">{t('products.title', 'Intelligent Enterprise Solutions')}</h2>
        </div>

        <div className="timeline-container">
          {productsList.map((product, index) => {
            const itemZIndex = index + 10;
            const isActive = activeIndex === index;

            return (
              <div 
                key={product.id} 
                className="timeline-item"
                style={{ zIndex: itemZIndex, top: `${100 + (index * 20)}px` }}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                
                {/* Parametric line art — right side, above the dashboard */}
                <ParametricLines />

                {/* Dotted flowing wave — bottom-left, below the industries */}
                <DotWave />

                <div className="timeline-content">
                  <div className="product-info">
                    {/* 3D Glowing Icon & Title Header */}
                    <div className="product-header-top">
                      <div className="product-icon-3d">
                        {product.icon}
                      </div>
                      <h3 className="product-title-top">{t(`productsData.p${product.id}_title`, product.title)}</h3>
                    </div>

                    <p className="product-desc">{t(`productsData.p${product.id}_desc`, product.description)}</p>

                    {/* Industries Tags */}
                    <div className="product-industries">
                      <span className="industry-label">{t('productsData.targetIndustries', 'Target Industries')}</span>
                      <div className="industry-tags">
                        {product.industries.map((ind, i) => (
                          <span key={i} className="industry-tag">{t(`productsData.industries.${ind.replace(/\\s+/g, '')}`, ind)}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pass isActive down to DashboardWrapper */}
                  <div className="product-dashboard">
                     <DashboardWrapper product={product} inView={isActive} />
                  </div>

                </div>

              </div>
            );
          })}

          {/* Spacer gives the LAST card real in-flow room to stay pinned/stacked
              (a container padding-bottom can't do this — sticky is bounded by the
              content box, and the last card's own margin collapses through it). */}
          <div className="timeline-end-spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Products;
