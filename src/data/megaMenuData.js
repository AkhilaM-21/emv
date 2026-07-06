import { 
  ShoppingCart, Calculator, Truck, Activity, FileText, Users, 
  Settings, Box, CheckCircle, Package, PenTool, BarChart2,
  Heart, Shield, Stethoscope, Clipboard, UserPlus, Clock,
  HardHat, Map, Wrench, Briefcase, Ruler, Zap,
  Coffee, Utensils, Droplet, Star, TrendingUp, Key,
  CreditCard, PieChart, Database, Server, Smartphone, Lock,
  Globe, MessageSquare, Send, Mail, Phone, Video,
  Home, Camera, Search, Layout, Wifi, Link2
} from 'lucide-react';

export const getMegaMenuData = (t) => ({
  [t('megaMenu.products.cloudErp', 'Cloud ERP')]: {
    [t('megaMenu.retail.title', 'Retail & POS')]: {
      title: t('megaMenu.retail.title', 'Retail & POS'),
      subtitle: t('megaMenu.retail.subtitle', 'Discover how we tailor this product specifically for the Retail & POS sector.'),
      modules: [
        { icon: ShoppingCart, title: t('megaMenu.retail.inventory', "Inventory for Retail & POS"), desc: t('megaMenu.retail.inventoryDesc', "Real-time stock tracking tailored for Retail & POS operations.") },
        { icon: Calculator, title: t('megaMenu.retail.financial', "Financial Management"), desc: t('megaMenu.retail.financialDesc', "ZATCA-compliant accounting and ledger.") },
        { icon: Truck, title: t('megaMenu.retail.supplyChain', "Supply Chain"), desc: t('megaMenu.retail.supplyChainDesc', "Automate POs and supplier management seamlessly.") },
        { icon: Activity, title: t('megaMenu.retail.pos', "Advanced POS"), desc: t('megaMenu.retail.posDesc', "Unified commerce and quick multi-branch sales processing.") },
        { icon: FileText, title: t('megaMenu.retail.invoicing', "Invoicing & Billing"), desc: t('megaMenu.retail.invoicingDesc', "Generate e-invoices instantly.") },
        { icon: Users, title: t('megaMenu.retail.vendor', "Vendor Portal"), desc: t('megaMenu.retail.vendorDesc', "Self-service access for your vendors.") }
      ]
    },
    [t('megaMenu.manufacturing.title', 'Manufacturing')]: {
      title: t('megaMenu.manufacturing.title', 'Manufacturing'),
      subtitle: t('megaMenu.manufacturing.subtitle', 'Optimize production lines, track materials, and manage your manufacturing workforce.'),
      modules: [
        { icon: Settings, title: t('megaMenu.manufacturing.production', "Production Planning"), desc: t('megaMenu.manufacturing.productionDesc', "Optimize shop floor operations") },
        { icon: Box, title: t('megaMenu.manufacturing.quality', "Quality Control"), desc: t('megaMenu.manufacturing.qualityDesc', "Automated inspection workflows") },
        { icon: CheckCircle, title: t('megaMenu.manufacturing.maintenance', "Predictive Maintenance"), desc: t('megaMenu.manufacturing.maintenanceDesc', "IoT-driven asset management") },
        { icon: Package, title: "Warehouse Management", desc: "Advanced bin and batch tracking." },
        { icon: PenTool, title: "Maintenance", desc: "Predictive maintenance schedules." },
        { icon: BarChart2, title: "Cost Accounting", desc: "Real-time cost variance analysis." }
      ]
    },
    [t('megaMenu.healthcare.title', 'Healthcare')]: {
      title: t('megaMenu.healthcare.title', 'Healthcare'),
      subtitle: t('megaMenu.healthcare.subtitle', 'Tailored for clinics and hospitals to manage patient data and billing.'),
      modules: [
        { icon: Heart, title: t('megaMenu.healthcare.patient', "Patient Records"), desc: t('megaMenu.healthcare.patientDesc', "HIPAA-compliant data management") },
        { icon: Shield, title: "Compliance", desc: "HIPAA and local data privacy compliance tools." },
        { icon: Stethoscope, title: "Clinic Operations", desc: "Manage appointments, doctors, and staff schedules." },
        { icon: Clipboard, title: t('megaMenu.healthcare.billing', "Medical Billing"), desc: t('megaMenu.healthcare.billingDesc', "Automated insurance claims") },
        { icon: Box, title: "Pharmacy Inventory", desc: "Track medicines, expiry dates, and stock levels." },
        { icon: Users, title: "Patient Portal", desc: "Online portal for patients to view test results." }
      ]
    }
  },
  [t('megaMenu.products.hrPayroll', 'HR & Payroll')]: {
    "Core HR": {
      title: "Core HR & Payroll",
      subtitle: "Comprehensive HR management for modern organizations.",
      modules: [
        { icon: Users, title: "Employee Directory", desc: "Centralized database for all employee records." },
        { icon: CreditCard, title: "Automated Payroll", desc: "One-click payroll processing with tax compliance." },
        { icon: Clock, title: "Time & Attendance", desc: "Biometric integration and leave management." },
        { icon: UserPlus, title: "Recruitment", desc: "Applicant tracking and onboarding workflows." },
        { icon: Star, title: "Performance", desc: "KPI tracking and regular appraisal cycles." },
        { icon: Shield, title: "Employee Self-Service", desc: "Mobile app for payslips and leave requests." }
      ]
    },
    "Retail & Shift Work": {
      title: "Retail & Shift Work HR",
      subtitle: "Specialized tools for managing hourly and shift-based workers.",
      modules: [
        { icon: Clock, title: "Advanced Rostering", desc: "AI-driven shift scheduling and swap requests." },
        { icon: Map, title: "Geo-fenced Attendance", desc: "Mobile check-ins restricted to store locations." },
        { icon: Calculator, title: "Overtime Rules", desc: "Automated calculation of complex overtime rates." },
        { icon: TrendingUp, title: "Sales Commission", desc: "Link POS data to employee commission payouts." },
        { icon: Users, title: "Temporary Staffing", desc: "Manage contracts for seasonal retail workers." },
        { icon: MessageSquare, title: "Team Comms", desc: "Broadcast messages to all store staff instantly." }
      ]
    },
    "Healthcare Staffing": {
      title: t('megaMenu.healthcare.title', 'Healthcare') + " Staffing",
      subtitle: "Manage complex medical rosters and credential tracking.",
      modules: [
        { icon: Stethoscope, title: "Credential Tracking", desc: "Monitor license expiries and certifications." },
        { icon: Clock, title: "On-Call Rostering", desc: "Manage complex 24/7 on-call schedules." },
        { icon: Heart, title: "Burnout Prevention", desc: "Track consecutive shifts to ensure compliance." },
        { icon: FileText, title: "Shift Differentials", desc: "Automate pay rates for night and weekend shifts." },
        { icon: Shield, title: "Compliance Audits", desc: "Automated reporting for healthcare regulations." },
        { icon: Users, title: "Locum Management", desc: "Manage temporary doctors and agency staff." }
      ]
    }
  },
  [t('megaMenu.products.crmSales', 'CRM & Sales')]: {
    "B2B Enterprise": {
      title: "B2B Sales CRM",
      subtitle: "Drive revenue with advanced pipeline and account management.",
      modules: [
        { icon: Briefcase, title: "Account Management", desc: "360-degree view of corporate clients." },
        { icon: TrendingUp, title: "Pipeline Tracking", desc: "Visual drag-and-drop sales pipelines." },
        { icon: FileText, title: "Quotes & Proposals", desc: "Generate professional quotes in seconds." },
        { icon: Mail, title: "Email Integration", desc: "Sync with Outlook and Gmail automatically." },
        { icon: PieChart, title: "Sales Forecasting", desc: "AI-driven revenue predictions." },
        { icon: Shield, title: "Territory Management", desc: "Assign leads based on geography and rules." }
      ]
    },
    "Retail & E-commerce": {
      title: t('megaMenu.retail.title', 'Retail & POS') + " CRM",
      subtitle: "Omnichannel customer engagement and loyalty.",
      modules: [
        { icon: Heart, title: "Loyalty Programs", desc: "Points, tiers, and rewards management." },
        { icon: UserPlus, title: "Customer Profiles", desc: "Unified view of online and in-store purchases." },
        { icon: Send, title: "Marketing Automation", desc: "Triggered SMS and email campaigns." },
        { icon: Activity, title: "Behavior Analytics", desc: "Track browsing and purchase patterns." },
        { icon: MessageSquare, title: "Support Tickets", desc: "Manage customer complaints and returns." },
        { icon: Star, title: "Feedback & Reviews", desc: "Automated post-purchase survey collection." }
      ]
    },
    "Real Estate": {
      title: "Real Estate CRM",
      subtitle: "Manage properties, leads, and agent commissions.",
      modules: [
        { icon: Home, title: "Property Listings", desc: "Centralized database of available inventory." },
        { icon: Users, title: "Lead Matching", desc: "Auto-match buyer preferences to new listings." },
        { icon: Camera, title: "Virtual Tours", desc: "Integrate 3D tours directly into client portals." },
        { icon: Calculator, title: "Commission Splits", desc: "Automate complex broker and agent payouts." },
        { icon: FileText, title: "Contract Management", desc: "Digital signatures and lease tracking." },
        { icon: Phone, title: "Call Tracking", desc: "Log agent calls and texts automatically." }
      ]
    }
  },
  [t('megaMenu.products.reporting', 'Advanced Reporting')]: {
    "Business Intelligence": {
      title: "Business Intelligence",
      subtitle: "Turn your raw data into actionable insights.",
      modules: [
        { icon: BarChart2, title: "Custom Dashboards", desc: "Drag-and-drop widget builder." },
        { icon: PieChart, title: "Financial Reports", desc: "P&L, Balance Sheets, and Cash Flow statements." },
        { icon: Database, title: "Data Warehousing", desc: "Consolidate data from multiple sources." },
        { icon: Activity, title: "Real-time Metrics", desc: "Live monitoring of critical KPIs." },
        { icon: Send, title: "Scheduled Reports", desc: "Automated email delivery to stakeholders." },
        { icon: Shield, title: "Role-based Access", desc: "Control who sees sensitive financial data." }
      ]
    },
    "Financial Analytics": {
      title: "Financial Analytics",
      subtitle: "Deep-dive into revenue, costs, and profit margins.",
      modules: [
        { icon: TrendingUp, title: "Revenue Forecasting", desc: "Predictive models based on historical sales." },
        { icon: Calculator, title: "Cost Allocation", desc: "Track expenses across departments and projects." },
        { icon: Search, title: "Audit Trails", desc: "Detailed logs for compliance and auditing." },
        { icon: CreditCard, title: "Cash Flow Analysis", desc: "Real-time liquidity and burn rate tracking." },
        { icon: Briefcase, title: "Budget vs Actuals", desc: "Variance reporting for strict budget control." },
        { icon: FileText, title: "Tax Reporting", desc: "Automated generation of local tax documents." }
      ]
    },
    "Operational Metrics": {
      title: "Operational Metrics",
      subtitle: "Monitor efficiency and output across your supply chain.",
      modules: [
        { icon: Truck, title: "Logistics Tracking", desc: "Delivery times and fleet efficiency stats." },
        { icon: Box, title: "Inventory Turnover", desc: "Identify slow-moving stock and optimize space." },
        { icon: Settings, title: "Production Yield", desc: "Monitor manufacturing defect rates and output." },
        { icon: Users, title: "Labor Efficiency", desc: "Track output per hour for shift workers." },
        { icon: CheckCircle, title: "Quality Metrics", desc: "Analyze return rates and defect reasons." },
        { icon: Zap, title: "Downtime Analysis", desc: "Track and minimize equipment failure times." }
      ]
    }
  },
  [t('megaMenu.products.workflow', 'Workflow Automation')]: {
    "Process Management": {
      title: "Process Management",
      subtitle: "Automate repetitive tasks and approval chains.",
      modules: [
        { icon: Layout, title: "Visual Builder", desc: "No-code drag-and-drop workflow creator." },
        { icon: CheckCircle, title: "Approval Matrices", desc: "Multi-level conditional approval routing." },
        { icon: Zap, title: "Event Triggers", desc: "Launch workflows based on system events." },
        { icon: Clock, title: "SLA Tracking", desc: "Monitor bottlenecks and task turnaround times." },
        { icon: Mail, title: "Notifications", desc: "Automated alerts via email, SMS, or Slack." },
        { icon: FileText, title: "Audit Trails", desc: "Complete history of every workflow action." }
      ]
    },
    "IT Service Management": {
      title: "IT Service Management",
      subtitle: "Automate internal IT ticketing and asset provisioning.",
      modules: [
        { icon: Shield, title: "Access Requests", desc: "Automate software provisioning approvals." },
        { icon: Wrench, title: "Incident Routing", desc: "Auto-assign tickets based on issue type." },
        { icon: Server, title: "Asset Deployment", desc: "Track laptops and software licenses." },
        { icon: Lock, title: "Security Alerts", desc: "Trigger lockdown workflows on breach detection." },
        { icon: Users, title: "Vendor Onboarding", desc: "Streamline IT setup for new contractors." },
        { icon: FileText, title: "Compliance Logs", desc: "Automated reporting for IT audits." }
      ]
    },
    "HR Onboarding": {
      title: "HR Onboarding",
      subtitle: "Seamlessly transition new hires into the company.",
      modules: [
        { icon: UserPlus, title: "Document Collection", desc: "Automate ID and tax form submissions." },
        { icon: PenTool, title: "Digital Signatures", desc: "Route contracts for legally binding signatures." },
        { icon: Settings, title: "Account Setup", desc: "Trigger IT workflows to create emails." },
        { icon: Heart, title: "Welcome Journeys", desc: "Drip-feed company culture and training emails." },
        { icon: CheckCircle, title: "Task Checklists", desc: "Ensure managers complete desk setup." },
        { icon: BarChart2, title: "Feedback Surveys", desc: "Automated 30-60-90 day check-ins." }
      ]
    }
  },
  [t('megaMenu.products.noCode', 'No-Code App Builder')]: {
    "Internal Portals": {
      title: "Internal Portals",
      subtitle: "Build secure dashboards for your team without coding.",
      modules: [
        { icon: Database, title: "Data Connections", desc: "Link directly to Emvive ERP tables securely." },
        { icon: Layout, title: "Drag-and-Drop UI", desc: "Build interfaces with pre-made components." },
        { icon: Shield, title: "Role-Based Logic", desc: "Show or hide elements based on user roles." },
        { icon: Search, title: "Advanced Filtering", desc: "Create custom search views for employees." },
        { icon: Link2, title: "Workflow Hooks", desc: "Trigger automations from button clicks." },
        { icon: Lock, title: "SSO Integration", desc: "Seamless login using corporate credentials." }
      ]
    },
    "Customer Apps": {
      title: "Customer Apps",
      subtitle: "Create white-labeled portals for your clients.",
      modules: [
        { icon: Smartphone, title: "Mobile Optimized", desc: "Responsive designs that look great on phones." },
        { icon: Globe, title: "Custom Domains", desc: "Host portals on your company URL." },
        { icon: CreditCard, title: "Payment Gateways", desc: "Accept invoices directly through the portal." },
        { icon: MessageSquare, title: "Support Chat", desc: "Embed live chat widgets for customers." },
        { icon: Star, title: "White Labeling", desc: "Full control over colors, logos, and fonts." },
        { icon: Activity, title: "Usage Analytics", desc: "Track how clients interact with the app." }
      ]
    },
    "Field Service Apps": {
      title: "Field Service Apps",
      subtitle: "Empower remote workers with custom mobile tools.",
      modules: [
        { icon: Wifi, title: "Offline Mode", desc: "Data syncs automatically when signal returns." },
        { icon: Map, title: "GPS Tracking", desc: "Log locations for deliveries and site visits." },
        { icon: Camera, title: "Photo Uploads", desc: "Capture proof of delivery or site damage." },
        { icon: PenTool, title: "E-Signatures", desc: "Collect customer sign-offs in the field." },
        { icon: Clock, title: "Time Tracking", desc: "Start and stop timers for billable hours." },
        { icon: Truck, title: "Inventory Check", desc: "Scan barcodes to view van stock levels." }
      ]
    }
  }
});
