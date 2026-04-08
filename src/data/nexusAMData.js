import {
  Users, TrendingUp, TrendingDown, Building2, Star, Clock, AlertCircle, CheckCircle2,
  IndianRupee, FileText, MessageSquare, Calendar, ListChecks, HeartPulse, Lock, LockOpen,
  LogOut, RefreshCw, Hammer, UserCheck, Receipt, Activity, Shield, Sparkles, Target,
} from 'lucide-react'

export const nexusAMPersonas = [
  { id: 'mgmt',    label: 'Management' },
  { id: 'amhead',  label: 'AM Head' },
  { id: 'rehead',  label: 'Regional Head' },
  { id: 'cm',      label: 'Centre Manager' },
  { id: 'am',      label: 'Account Manager' },
  { id: 'aam',     label: 'Assistant AM' },
]

export const nexusAMFilters = [
  { id: 'region',   label: 'Region',   options: ['All Regions', 'North', 'South', 'East', 'West', 'Central'] },
  { id: 'city',     label: 'City',     options: ['All Cities', 'Bengaluru', 'Pune', 'Mumbai', 'Hyderabad', 'Delhi / NCR', 'Chennai', 'Gurgaon', 'Noida', 'Kolkata'] },
  { id: 'location', label: 'Location', options: ['All Locations', 'Whitefield', 'Outer Ring Road', 'Baner', 'Kharadi', 'BKC', 'Lower Parel', 'HiTec City', 'Gachibowli', 'Cyber City', 'Golf Course Road', 'Cybercity Hyd', 'Tidel Park'] },
  { id: 'amUser',   label: 'AM User',  options: ['All AMs', 'Priya Sharma', 'Rahul Mehta', 'Aditi Nair', 'Karan Patel', 'Sneha Iyer', 'Vikram Rao', 'Anjali Gupta', 'Rohan Desai', 'Meera Krishnan'] },
  { id: 'client',   label: 'Client',   options: ['All Clients', 'Infosys BPO', 'Deutsche Bank GCC', 'Accenture India', 'Wipro Tech', 'Cognizant', 'HSBC GCC', 'TechCorp India', 'Capgemini', 'XYZ Fintech'] },
]

// ─── MANAGEMENT (portfolio-wide) ──────────────────────────────────────────────
const mgmtMetrics = [
  { label: 'Total Outstanding',       value: '₹6.30B', change: 'Without GST',                       trend: 'up',     status: 'warning',  icon: IndianRupee, highlight: true },
  { label: 'Total Invoiced',          value: '₹7.50B', change: '447 clients',                       trend: 'up',     status: 'positive', icon: FileText },
  { label: 'Total Overdue',           value: '₹426.5M',change: 'Oldest age: 328d',                  trend: 'up',     status: 'negative', icon: AlertCircle },
  { label: 'Collection Rate',         value: '15.13%', change: '-2.1% vs target 30%',               trend: 'down',   status: 'negative', icon: TrendingDown },
  { label: 'Active Clients',          value: '447',    change: '284 in lock-in · 163 out of LI',    trend: 'up',     status: 'positive', icon: Users },
  { label: 'Notice Period Initiated', value: '12',     change: 'clients in exit flow',              trend: 'up',     status: 'warning',  icon: LogOut },
  { label: 'Renewals Due (90d)',      value: '38',     change: '₹112Cr ARR at stake',               trend: 'up',     status: 'warning',  icon: RefreshCw },
  { label: 'Avg Portfolio Health',    value: '72/100', change: '18 clients < 60 (at-risk)',         trend: 'down',   status: 'warning',  icon: HeartPulse },
  { label: 'Avg CSAT',                value: '8.2/10', change: '+0.2 vs Q4',                         trend: 'up',     status: 'positive', icon: Star },
  { label: 'Tasks · Open / Viol / Closed', value: '15.8K', change: '4.2K / 3.8K / 7.8K · 49% done', trend: 'neutral',status: 'warning',  icon: ListChecks },
]

const mgmtActions = [
  { priority: 'high',   text: '18 at-risk clients (health < 60) — review with AM Head and regional leads', due: 'This week', category: 'Retention' },
  { priority: 'high',   text: '12 clients in notice period — ₹42Cr ARR — final save attempts required', due: 'Apr 12', category: 'Exit Management' },
  { priority: 'high',   text: 'Portfolio collection rate at 15.13% vs 30% target — escalation needed', due: 'Immediate', category: 'Collections' },
  { priority: 'medium', text: '3,800 tasks violated SLA — root-cause with AM Head before board review', due: 'Apr 15', category: 'SLA Review' },
  { priority: 'medium', text: '38 renewals due in next 90 days — approve revised commercials for top 10', due: 'Apr 20', category: 'Renewals' },
  { priority: 'low',    text: 'Mod-project pipeline at ₹14.6Cr (136 projects) — review conversion rate', due: 'Apr 25', category: 'Pipeline' },
]

const mgmtTopFive = [
  {
    title: 'Top 5 Clients by Outstanding',
    items: [
      { label: 'Deutsche Bank GCC — BKC',    value: '₹84.2Cr', change: 0 },
      { label: 'Infosys BPO — Baner',         value: '₹62.4Cr', change: -1 },
      { label: 'Accenture — HiTec City',      value: '₹48.6Cr', change: 0 },
      { label: 'Cognizant — Whitefield',      value: '₹41.2Cr', change: 1 },
      { label: 'Wipro Tech — Cyber City',     value: '₹38.8Cr', change: -1 },
    ],
  },
  {
    title: 'Top 5 At-Risk Clients (Health < 60)',
    items: [
      { label: 'XYZ Fintech — Cybercity Hyd',  value: '48', change: -1 },
      { label: 'NorthStar Bank — BKC',          value: '52', change: -1 },
      { label: 'QuantBridge Cap — Lower Parel', value: '55', change: 0 },
      { label: 'GlobalMed — Kharadi',           value: '57', change: -1 },
      { label: 'VectorAI Labs — Gachibowli',    value: '58', change: 0 },
    ],
  },
]

const mgmtCharts = [
  {
    type: 'line', title: 'Portfolio Outstanding vs Collected (₹Cr) — Monthly',
    data: [
      { name: 'Oct', outstanding: 520, collected: 82 },
      { name: 'Nov', outstanding: 548, collected: 94 },
      { name: 'Dec', outstanding: 572, collected: 88 },
      { name: 'Jan', outstanding: 598, collected: 102 },
      { name: 'Feb', outstanding: 612, collected: 96 },
      { name: 'Mar', outstanding: 630, collected: 114 },
    ],
    lines: [{ key: 'outstanding', label: 'Outstanding' }, { key: 'collected', label: 'Collected' }],
  },
  {
    type: 'bar', title: 'Outstanding Ageing Buckets (₹Cr)',
    data: [
      { name: '0-30d',  amount: 142 },
      { name: '31-60d', amount:  98 },
      { name: '61-90d', amount:  76 },
      { name: '91-180d',amount: 112 },
      { name: '>180d',  amount: 202 },
    ],
    lines: [{ key: 'amount', label: 'Outstanding' }],
  },
  {
    type: 'area', title: 'Portfolio Health Score Distribution',
    data: [
      { name: '< 50',   count: 8  },
      { name: '50-60',  count: 18 },
      { name: '60-70',  count: 84 },
      { name: '70-80',  count: 186 },
      { name: '80-90',  count: 118 },
      { name: '90-100', count: 33 },
    ],
    lines: [{ key: 'count', label: 'Clients' }],
  },
]

const mgmtColumns = [
  { key: 'region',       label: 'Region' },
  { key: 'clients',      label: 'Clients' },
  { key: 'outstanding',  label: 'Outstanding' },
  { key: 'overdue',      label: 'Overdue' },
  { key: 'collection',   label: 'Collection %' },
  { key: 'health',       label: 'Avg Health' },
  { key: 'csat',         label: 'CSAT', muted: true },
  { key: 'atRisk',       label: 'At-Risk', type: 'status' },
]

const mgmtGrid = [
  { region: 'South — Bengaluru',      clients: '118', outstanding: '₹182Cr', overdue: '₹112M', collection: '18.4%', health: '74', csat: '8.3', atRisk: 'On Track' },
  { region: 'West — Pune',            clients: '84',  outstanding: '₹146Cr', overdue: '₹88M',  collection: '16.2%', health: '71', csat: '8.1', atRisk: 'Monitor' },
  { region: 'West — Mumbai',          clients: '76',  outstanding: '₹128Cr', overdue: '₹72M',  collection: '14.8%', health: '70', csat: '8.0', atRisk: 'Monitor' },
  { region: 'South — Hyderabad',      clients: '68',  outstanding: '₹92Cr',  overdue: '₹58M',  collection: '13.2%', health: '68', csat: '7.9', atRisk: 'At Risk' },
  { region: 'North — Delhi/NCR',      clients: '72',  outstanding: '₹68Cr',  overdue: '₹64M',  collection: '12.6%', health: '69', csat: '7.8', atRisk: 'At Risk' },
  { region: 'South — Chennai',        clients: '29',  outstanding: '₹14Cr',  overdue: '₹32M',  collection: '10.2%', health: '72', csat: '8.1', atRisk: 'Monitor' },
]

// ─── AM HEAD ──────────────────────────────────────────────────────────────────
const amheadMetrics = [
  { label: 'AMs Under Management',    value: '24',    change: '6 centres',                        trend: 'up',      status: 'positive', icon: UserCheck, highlight: true },
  { label: 'Avg AM Portfolio',         value: '18.6',  change: 'clients per AM',                   trend: 'neutral', status: 'info',     icon: Users },
  { label: 'AMs Below SLA',            value: '6',     change: 'task SLA < 75%',                   trend: 'up',      status: 'negative', icon: AlertCircle },
  { label: 'Avg Team CSAT',            value: '8.2/10',change: '+0.2 MoM',                         trend: 'up',      status: 'positive', icon: Star },
  { label: 'Renewals Due (90d)',       value: '38',    change: 'across 12 AMs',                    trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects Pipeline',    value: '₹14.6Cr',change: '136 projects · 82 in progress',   trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Notice Initiated',         value: '12',    change: '8 AMs impacted',                   trend: 'up',      status: 'warning',  icon: LogOut },
  { label: 'Tasks · Open / Viol / Closed', value: '15.8K', change: '4.2K / 3.8K / 7.8K',           trend: 'neutral', status: 'warning',  icon: ListChecks },
]

const amheadActions = [
  { priority: 'high',   text: '6 AMs below 75% task SLA — 1:1 reviews and reassignment plan', due: 'This week', category: 'AM Performance' },
  { priority: 'high',   text: 'Rahul Mehta — 4 at-risk clients in portfolio (health < 60), approve rescue plan', due: 'Apr 11', category: 'Escalation' },
  { priority: 'medium', text: 'Approve mod-project commercials > ₹5L for 8 pending projects', due: 'Apr 12', category: 'Approvals' },
  { priority: 'medium', text: '12 clients in notice period — coordinate with RE and Finance for exit', due: 'Apr 14', category: 'Exit Management' },
  { priority: 'low',    text: 'Quarterly AM performance review — finalize scorecard template', due: 'Apr 20', category: 'HR' },
]

const amheadTopFive = [
  {
    title: 'Top 5 Performing AMs (Composite Score)',
    items: [
      { label: 'Priya Sharma — BLR',    value: '96', change: 1 },
      { label: 'Aditi Nair — HYD',      value: '93', change: 1 },
      { label: 'Sneha Iyer — PNQ',      value: '91', change: 0 },
      { label: 'Karan Patel — MUM',     value: '88', change: 1 },
      { label: 'Meera Krishnan — CHN',  value: '87', change: 0 },
    ],
  },
  {
    title: 'Bottom 5 AMs (SLA Breach)',
    items: [
      { label: 'Rahul Mehta — DEL',     value: '62%', change: -1 },
      { label: 'Vikram Rao — HYD',      value: '65%', change: -1 },
      { label: 'Rohan Desai — MUM',     value: '68%', change: 0 },
      { label: 'Anjali Gupta — GGN',    value: '71%', change: -1 },
      { label: 'Arjun Shah — PNQ',      value: '73%', change: 0 },
    ],
  },
]

const amheadCharts = [
  {
    type: 'bar', title: 'AM Performance — CSAT vs SLA Compliance (%)',
    data: [
      { name: 'Priya',   csat: 92, sla: 94 },
      { name: 'Aditi',   csat: 90, sla: 91 },
      { name: 'Sneha',   csat: 88, sla: 90 },
      { name: 'Karan',   csat: 86, sla: 88 },
      { name: 'Meera',   csat: 85, sla: 87 },
      { name: 'Vikram',  csat: 72, sla: 65 },
      { name: 'Rahul',   csat: 68, sla: 62 },
    ],
    lines: [{ key: 'csat', label: 'CSAT Index' }, { key: 'sla', label: 'SLA %' }],
  },
  {
    type: 'area', title: 'Renewals Due — Next 6 Months',
    data: [
      { name: 'Apr', count: 12, arr: 34 },
      { name: 'May', count:  8, arr: 22 },
      { name: 'Jun', count: 18, arr: 56 },
      { name: 'Jul', count: 14, arr: 42 },
      { name: 'Aug', count: 11, arr: 28 },
      { name: 'Sep', count:  9, arr: 24 },
    ],
    lines: [{ key: 'count', label: '# Renewals' }, { key: 'arr', label: 'ARR ₹Cr' }],
  },
  {
    type: 'line', title: 'Team Task Velocity — Weekly',
    data: [
      { name: 'W1', open: 4100, closed: 3800 },
      { name: 'W2', open: 4200, closed: 3950 },
      { name: 'W3', open: 4350, closed: 4020 },
      { name: 'W4', open: 4180, closed: 4180 },
      { name: 'W5', open: 4240, closed: 4120 },
      { name: 'W6', open: 4200, closed: 4000 },
    ],
    lines: [{ key: 'open', label: 'Open' }, { key: 'closed', label: 'Closed' }],
  },
]

const amheadColumns = [
  { key: 'am',          label: 'Account Manager' },
  { key: 'centre',      label: 'Centre', muted: true },
  { key: 'clients',     label: '# Clients' },
  { key: 'outstanding', label: 'Outstanding' },
  { key: 'csat',        label: 'CSAT' },
  { key: 'sla',         label: 'SLA %' },
  { key: 'health',      label: 'Avg Health' },
  { key: 'atRisk',      label: 'Status', type: 'status' },
]

const amheadGrid = [
  { am: 'Priya Sharma',    centre: 'Whitefield',  clients: '22', outstanding: '₹42Cr', csat: '9.2', sla: '94%', health: '82', atRisk: 'Excellent' },
  { am: 'Aditi Nair',      centre: 'HiTec City',  clients: '19', outstanding: '₹38Cr', csat: '9.0', sla: '91%', health: '80', atRisk: 'Excellent' },
  { am: 'Sneha Iyer',      centre: 'Baner',       clients: '21', outstanding: '₹46Cr', csat: '8.8', sla: '90%', health: '78', atRisk: 'Good' },
  { am: 'Karan Patel',     centre: 'BKC',         clients: '18', outstanding: '₹58Cr', csat: '8.6', sla: '88%', health: '76', atRisk: 'Good' },
  { am: 'Meera Krishnan',  centre: 'Tidel Park',  clients: '16', outstanding: '₹14Cr', csat: '8.5', sla: '87%', health: '74', atRisk: 'Good' },
  { am: 'Anjali Gupta',    centre: 'Cyber City',  clients: '17', outstanding: '₹28Cr', csat: '8.1', sla: '71%', health: '68', atRisk: 'Monitor' },
  { am: 'Rohan Desai',     centre: 'Lower Parel', clients: '20', outstanding: '₹46Cr', csat: '7.9', sla: '68%', health: '66', atRisk: 'Monitor' },
  { am: 'Vikram Rao',      centre: 'Gachibowli',  clients: '16', outstanding: '₹32Cr', csat: '7.2', sla: '65%', health: '62', atRisk: 'At Risk' },
  { am: 'Rahul Mehta',     centre: 'Golf Course', clients: '18', outstanding: '₹48Cr', csat: '6.8', sla: '62%', health: '58', atRisk: 'At Risk' },
]

// ─── REGIONAL HEAD ────────────────────────────────────────────────────────────
const reheadMetrics = [
  { label: 'Region Active Clients',    value: '118',   change: '28 centres',                     trend: 'up',      status: 'positive', icon: Building2, highlight: true },
  { label: 'Region Outstanding',        value: '₹182Cr',change: '₹112M overdue',                  trend: 'up',      status: 'warning',  icon: IndianRupee },
  { label: 'Collection Rate',          value: '18.4%', change: 'best performing region',          trend: 'up',      status: 'positive', icon: TrendingUp },
  { label: 'Avg CSAT',                 value: '8.3/10',change: '+0.3 vs prev quarter',            trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Health Score',         value: '74/100',change: '4 clients < 60',                  trend: 'up',      status: 'positive', icon: HeartPulse },
  { label: 'Active AMs',               value: '6',     change: '2 above target, 1 below',         trend: 'neutral', status: 'info',     icon: Users },
  { label: 'Renewals Due (90d)',       value: '12',    change: '₹34Cr ARR at stake',              trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects Pipeline',    value: '₹4.2Cr',change: '38 projects',                     trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Tasks SLA %',              value: '82%',   change: '1.2K open, 680 violated',         trend: 'up',      status: 'positive', icon: ListChecks },
]

const reheadActions = [
  { priority: 'high',   text: 'XYZ Fintech health dropped to 48 — schedule exec meeting with client & AM', due: 'Apr 10', category: 'Retention' },
  { priority: 'high',   text: 'Approve mod-project commercials for Whitefield (₹1.2Cr, 8 projects)', due: 'Apr 11', category: 'Pipeline' },
  { priority: 'medium', text: 'Review Deutsche Bank GCC renewal proposal — expires Jun 30', due: 'Apr 15', category: 'Renewal' },
  { priority: 'medium', text: 'Region tasks velocity dropped 8% WoW — investigate centre-wise', due: 'Apr 12', category: 'Operations' },
  { priority: 'low',    text: 'Quarterly business review deck due for regional leadership', due: 'Apr 22', category: 'Reporting' },
]

const reheadTopFive = [
  {
    title: 'Top Centres by Collection %',
    items: [
      { label: 'Whitefield',       value: '22.4%', change: 1 },
      { label: 'Outer Ring Road',  value: '19.8%', change: 1 },
      { label: 'Koramangala',      value: '18.2%', change: 0 },
      { label: 'MG Road',          value: '16.4%', change: -1 },
      { label: 'Electronic City',  value: '14.8%', change: 0 },
    ],
  },
  {
    title: 'Top Locations by ARR',
    items: [
      { label: 'Whitefield — ORR',  value: '₹62Cr', change: 1 },
      { label: 'Outer Ring Road',   value: '₹48Cr', change: 0 },
      { label: 'Koramangala',       value: '₹34Cr', change: 1 },
      { label: 'Indiranagar',       value: '₹22Cr', change: 0 },
      { label: 'MG Road',           value: '₹16Cr', change: -1 },
    ],
  },
]

const reheadCharts = [
  {
    type: 'bar', title: 'Centre Performance — Outstanding vs Collected (₹Cr)',
    data: [
      { name: 'Whitefield', outstanding: 42, collected: 9.4 },
      { name: 'ORR',        outstanding: 38, collected: 7.5 },
      { name: 'Koramangala',outstanding: 32, collected: 5.8 },
      { name: 'Indiranagar',outstanding: 28, collected: 4.6 },
      { name: 'MG Road',    outstanding: 22, collected: 3.6 },
      { name: 'E-City',     outstanding: 20, collected: 2.9 },
    ],
    lines: [{ key: 'outstanding', label: 'Outstanding' }, { key: 'collected', label: 'Collected' }],
  },
  {
    type: 'line', title: 'CSAT Trend by Centre',
    data: [
      { name: 'Oct', wf: 8.1, orr: 8.0, kor: 7.8 },
      { name: 'Nov', wf: 8.2, orr: 8.0, kor: 7.9 },
      { name: 'Dec', wf: 8.3, orr: 8.1, kor: 8.0 },
      { name: 'Jan', wf: 8.4, orr: 8.2, kor: 8.1 },
      { name: 'Feb', wf: 8.5, orr: 8.3, kor: 8.2 },
      { name: 'Mar', wf: 8.6, orr: 8.4, kor: 8.2 },
    ],
    lines: [{ key: 'wf', label: 'Whitefield' }, { key: 'orr', label: 'ORR' }, { key: 'kor', label: 'Koramangala' }],
  },
  {
    type: 'area', title: 'Mod Projects Pipeline by Centre (₹L)',
    data: [
      { name: 'Whitefield', value: 128 },
      { name: 'ORR',        value:  96 },
      { name: 'Koramangala',value:  72 },
      { name: 'Indiranagar',value:  48 },
      { name: 'MG Road',    value:  32 },
      { name: 'E-City',     value:  28 },
    ],
    lines: [{ key: 'value', label: 'Pipeline ₹L' }],
  },
]

const reheadColumns = [
  { key: 'centre',      label: 'Centre' },
  { key: 'cm',          label: 'Centre Manager', muted: true },
  { key: 'clients',     label: 'Clients' },
  { key: 'outstanding', label: 'Outstanding' },
  { key: 'csat',        label: 'CSAT' },
  { key: 'health',      label: 'Avg Health' },
  { key: 'renewals',    label: 'Renewals 90d' },
  { key: 'status',      label: 'Status', type: 'status' },
]

const reheadGrid = [
  { centre: 'Whitefield',      cm: 'Priya Sharma',    clients: '28', outstanding: '₹42Cr', csat: '8.6', health: '82', renewals: '4', status: 'Excellent' },
  { centre: 'Outer Ring Road', cm: 'Rajesh Kumar',    clients: '24', outstanding: '₹38Cr', csat: '8.4', health: '78', renewals: '3', status: 'Excellent' },
  { centre: 'Koramangala',     cm: 'Neha Singh',      clients: '22', outstanding: '₹32Cr', csat: '8.2', health: '76', renewals: '2', status: 'Good' },
  { centre: 'Indiranagar',     cm: 'Vikas Agarwal',   clients: '18', outstanding: '₹28Cr', csat: '8.0', health: '72', renewals: '1', status: 'Good' },
  { centre: 'MG Road',         cm: 'Deepa Menon',     clients: '14', outstanding: '₹22Cr', csat: '7.9', health: '70', renewals: '1', status: 'Monitor' },
  { centre: 'Electronic City', cm: 'Arjun Shah',      clients: '12', outstanding: '₹20Cr', csat: '7.8', health: '68', renewals: '1', status: 'Monitor' },
]

// ─── CENTRE MANAGER ───────────────────────────────────────────────────────────
const cmMetrics = [
  { label: 'Active Clients',           value: '28',    change: '22 in lock-in · 6 out of LI',    trend: 'up',      status: 'positive', icon: Users, highlight: true },
  { label: 'Unpaid Invoices',          value: '42',    change: '₹2.8Cr total',                    trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Avg CSAT',                 value: '8.4/10',change: '2 clients < 7',                   trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Health Score',         value: '78/100',change: '1 client at-risk',                 trend: 'up',      status: 'positive', icon: HeartPulse },
  { label: 'Notice Initiated',         value: '1',     change: 'NorthStar Bank',                   trend: 'up',      status: 'warning',  icon: LogOut },
  { label: 'Renewals Due (90d)',       value: '4',     change: '₹8.6Cr ARR',                       trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects in Progress', value: '₹1.2Cr',change: '14 projects · 8 < ₹10L',           trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Tasks · Open / Viol / Closed', value: '842', change: '218 / 126 / 498 · SLA 74%',      trend: 'neutral', status: 'warning',  icon: ListChecks },
  { label: 'Meeting Tasks · Open / Viol', value: '18 / 4', change: 'of 62 scheduled this week',     trend: 'neutral', status: 'info',     icon: Calendar },
  { label: 'Open Tickets',             value: '22',    change: '6 P1 · 10 P2 · 6 P3',              trend: 'up',      status: 'warning',  icon: Shield },
]

const cmActions = [
  { priority: 'high',   text: 'NorthStar Bank initiated notice — final retention meeting with AM & client CXO', due: 'Apr 10', category: 'Exit / Retention' },
  { priority: 'high',   text: 'Approve 3 mod-projects < ₹10L (fit-out refresh, HVAC upgrade, meeting-room AV)', due: 'Apr 11', category: 'Mod Projects' },
  { priority: 'high',   text: '6 P1 tickets open >24h — pull AM + tech ops for joint resolution', due: 'Today', category: 'Tickets' },
  { priority: 'medium', text: 'Create invoice for Deutsche Bank GCC April — amount ₹62L', due: 'Apr 12', category: 'Invoicing' },
  { priority: 'medium', text: 'Issue CN against 4 raised disputes — amount ₹14.2L', due: 'Apr 13', category: 'Disputes' },
  { priority: 'low',    text: 'Review top performing AM for the centre — recognition for monthly scorecard', due: 'Apr 15', category: 'Team' },
]

const cmTopFive = [
  {
    title: 'Top 5 AMs at this Centre',
    items: [
      { label: 'Priya Sharma',    value: '96', change: 1 },
      { label: 'Sneha Iyer',      value: '91', change: 0 },
      { label: 'Karan Patel',     value: '88', change: 1 },
      { label: 'Aditi Nair',      value: '87', change: 0 },
      { label: 'Meera Krishnan',  value: '82', change: -1 },
    ],
  },
  {
    title: 'Top 5 Clients by Outstanding (Centre)',
    items: [
      { label: 'Deutsche Bank GCC',  value: '₹12.4Cr', change: 0 },
      { label: 'Infosys BPO',         value: '₹8.6Cr',  change: -1 },
      { label: 'Accenture',           value: '₹6.2Cr',  change: 1 },
      { label: 'Cognizant',           value: '₹4.8Cr',  change: 0 },
      { label: 'TechCorp India',      value: '₹3.2Cr',  change: -1 },
    ],
  },
]

const cmCharts = [
  {
    type: 'bar', title: 'Tasks by Status — Daily (Last 7 days)',
    data: [
      { name: 'Wed', open: 234, violated: 112, closed: 486 },
      { name: 'Thu', open: 228, violated: 118, closed: 492 },
      { name: 'Fri', open: 222, violated: 120, closed: 498 },
      { name: 'Sat', open: 180, violated:  92, closed: 412 },
      { name: 'Sun', open: 156, violated:  78, closed: 320 },
      { name: 'Mon', open: 218, violated: 122, closed: 510 },
      { name: 'Tue', open: 218, violated: 126, closed: 498 },
    ],
    lines: [
      { key: 'open',     label: 'Open' },
      { key: 'violated', label: 'Violated' },
      { key: 'closed',   label: 'Closed' },
    ],
  },
  {
    type: 'line', title: 'CSAT vs Health Score — Monthly',
    data: [
      { name: 'Oct', csat: 8.0, health: 72 },
      { name: 'Nov', csat: 8.1, health: 73 },
      { name: 'Dec', csat: 8.2, health: 74 },
      { name: 'Jan', csat: 8.2, health: 75 },
      { name: 'Feb', csat: 8.3, health: 77 },
      { name: 'Mar', csat: 8.4, health: 78 },
    ],
    lines: [{ key: 'csat', label: 'CSAT (x10)' }, { key: 'health', label: 'Health' }],
  },
  {
    type: 'pie', title: 'Ticket Mix by Category',
    data: [
      { name: 'HVAC / MEP',   value: 32 },
      { name: 'Housekeeping', value: 24 },
      { name: 'IT / Network', value: 18 },
      { name: 'Security',     value: 12 },
      { name: 'F&B',          value:  8 },
      { name: 'Other',        value:  6 },
    ],
    lines: [],
  },
]

const cmColumns = [
  { key: 'client',      label: 'Client' },
  { key: 'am',          label: 'AM', muted: true },
  { key: 'seats',       label: 'Seats' },
  { key: 'lockin',      label: 'Lock-in' },
  { key: 'csat',        label: 'CSAT' },
  { key: 'health',      label: 'Health' },
  { key: 'unpaid',      label: 'Unpaid Inv' },
  { key: 'renewal',     label: 'Renewal' },
  { key: 'status',      label: 'Status', type: 'status' },
]

const cmGrid = [
  { client: 'Deutsche Bank GCC', am: 'Karan Patel',    seats: '1,240', lockin: 'In LI',     csat: '9.2', health: '88', unpaid: '2',  renewal: 'Jun 2027', status: 'Excellent' },
  { client: 'Infosys BPO',       am: 'Sneha Iyer',     seats: '820',   lockin: 'In LI',     csat: '8.8', health: '82', unpaid: '4',  renewal: 'Sep 2026', status: 'Good' },
  { client: 'Accenture',         am: 'Priya Sharma',   seats: '640',   lockin: 'Out of LI', csat: '8.4', health: '78', unpaid: '6',  renewal: 'May 2026', status: 'Good' },
  { client: 'Cognizant',         am: 'Aditi Nair',     seats: '520',   lockin: 'In LI',     csat: '8.1', health: '74', unpaid: '3',  renewal: 'Aug 2026', status: 'Good' },
  { client: 'TechCorp India',    am: 'Meera Krishnan', seats: '380',   lockin: 'In LI',     csat: '8.0', health: '72', unpaid: '2',  renewal: 'Jan 2027', status: 'Monitor' },
  { client: 'Wipro Tech',        am: 'Rohan Desai',    seats: '320',   lockin: 'Out of LI', csat: '7.8', health: '68', unpaid: '5',  renewal: 'Jul 2026', status: 'Monitor' },
  { client: 'HSBC GCC',          am: 'Priya Sharma',   seats: '280',   lockin: 'In LI',     csat: '8.5', health: '80', unpaid: '1',  renewal: 'Oct 2026', status: 'Good' },
  { client: 'Capgemini',         am: 'Karan Patel',    seats: '220',   lockin: 'In LI',     csat: '8.2', health: '76', unpaid: '2',  renewal: 'Dec 2026', status: 'Good' },
  { client: 'NorthStar Bank',    am: 'Rahul Mehta',    seats: '180',   lockin: 'Out of LI', csat: '5.8', health: '52', unpaid: '8',  renewal: 'Notice',   status: 'At Risk' },
]

// ─── ACCOUNT MANAGER ──────────────────────────────────────────────────────────
const amMetrics = [
  { label: 'My Active Clients',        value: '22',    change: '14 in lock-in · 8 out of LI',    trend: 'up',      status: 'positive', icon: Users, highlight: true },
  { label: 'Unpaid Invoices',          value: '12',    change: '₹84L total',                      trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Avg CSAT (my clients)',    value: '8.6/10',change: '2 clients pending feedback',      trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Health Score',         value: '82/100',change: '1 client < 60 (at-risk)',         trend: 'up',      status: 'positive', icon: HeartPulse },
  { label: 'Notice Initiated',         value: '0',     change: 'none in exit flow',                trend: 'neutral', status: 'positive', icon: LogOut },
  { label: 'Renewals Due (90d)',       value: '3',     change: 'Accenture · HSBC · TechCorp',      trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects (mine)',      value: '₹45L',  change: '6 projects · 4 in progress',       trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Tasks · Open / Viol / Closed', value: '148', change: '42 / 18 / 88 · SLA 82%',         trend: 'neutral', status: 'info',     icon: ListChecks },
  { label: 'Meeting Tasks · Open / Viol',  value: '6 / 2', change: '12 scheduled this week',       trend: 'neutral', status: 'info',     icon: Calendar },
  { label: 'Outstanding (my portfolio)',   value: '₹8.2Cr', change: '₹42L overdue >60d',           trend: 'up',      status: 'warning',  icon: IndianRupee },
]

const amActions = [
  { priority: 'high',   text: 'Initiate renewal process for Accenture — contract expires May 15, 640 seats', due: 'Apr 10', category: 'Renewal' },
  { priority: 'high',   text: 'Create April invoices for 4 clients (Deutsche, Infosys, Cognizant, HSBC) — ₹2.1Cr total', due: 'Apr 11', category: 'Invoicing' },
  { priority: 'high',   text: 'Schedule meeting with Wipro Tech — CSAT dropped to 7.2, last meeting 45d ago', due: 'Apr 10', category: 'Client Meeting' },
  { priority: 'medium', text: 'Issue CN for 2 disputes raised by Cognizant (₹4.8L) — finance approved', due: 'Apr 12', category: 'Dispute' },
  { priority: 'medium', text: 'Create mod-project proposal (<₹10L) for Infosys meeting-room refresh', due: 'Apr 14', category: 'Mod Project' },
  { priority: 'medium', text: 'Monthly QBR meeting with Deutsche Bank GCC — prepare deck', due: 'Apr 18', category: 'Meeting' },
  { priority: 'low',    text: 'Complete daily checklist — shift close pending', due: 'EOD', category: 'Checklist' },
]

const amTopFive = [
  {
    title: 'My Top 5 Clients by Health',
    items: [
      { label: 'Deutsche Bank GCC',  value: '92', change: 0 },
      { label: 'Infosys BPO',         value: '88', change: 1 },
      { label: 'HSBC GCC',            value: '86', change: 1 },
      { label: 'Accenture',           value: '82', change: 0 },
      { label: 'Capgemini',           value: '80', change: -1 },
    ],
  },
  {
    title: 'Pending Actions (this week)',
    items: [
      { label: 'Invoices to create',        value: '4',  change: -1 },
      { label: 'Meetings to schedule',       value: '3',  change: -1 },
      { label: 'Disputes pending CN',        value: '2',  change: 0 },
      { label: 'Incidents to close',         value: '5',  change: 1 },
      { label: 'Mod projects to propose',    value: '2',  change: 0 },
    ],
  },
]

const amCharts = [
  {
    type: 'bar', title: 'My Clients — Health Score vs CSAT',
    data: [
      { name: 'Deutsche', health: 92, csat: 92 },
      { name: 'Infosys',  health: 88, csat: 90 },
      { name: 'HSBC',     health: 86, csat: 88 },
      { name: 'Accenture',health: 82, csat: 86 },
      { name: 'Capgemini',health: 80, csat: 84 },
      { name: 'TechCorp', health: 74, csat: 78 },
      { name: 'Wipro',    health: 68, csat: 72 },
    ],
    lines: [{ key: 'health', label: 'Health' }, { key: 'csat', label: 'CSAT (x10)' }],
  },
  {
    type: 'line', title: 'Meeting Cadence vs SLA (last 8 weeks)',
    data: [
      { name: 'W1', scheduled: 12, completed: 10, violated: 2 },
      { name: 'W2', scheduled: 14, completed: 11, violated: 3 },
      { name: 'W3', scheduled: 12, completed: 10, violated: 2 },
      { name: 'W4', scheduled: 16, completed: 14, violated: 2 },
      { name: 'W5', scheduled: 14, completed: 12, violated: 2 },
      { name: 'W6', scheduled: 15, completed: 13, violated: 2 },
      { name: 'W7', scheduled: 13, completed: 12, violated: 1 },
      { name: 'W8', scheduled: 12, completed: 10, violated: 2 },
    ],
    lines: [{ key: 'scheduled', label: 'Scheduled' }, { key: 'completed', label: 'Completed' }, { key: 'violated', label: 'Violated' }],
  },
  {
    type: 'area', title: 'My Outstanding Ageing (₹L)',
    data: [
      { name: '0-30d',  value: 142 },
      { name: '31-60d', value:  98 },
      { name: '61-90d', value:  42 },
      { name: '>90d',   value:  28 },
    ],
    lines: [{ key: 'value', label: 'Outstanding' }],
  },
]

const amColumns = [
  { key: 'client',    label: 'Client' },
  { key: 'seats',     label: 'Seats' },
  { key: 'lockin',    label: 'Lock-in' },
  { key: 'csat',      label: 'CSAT' },
  { key: 'health',    label: 'Health' },
  { key: 'unpaid',    label: 'Unpaid Inv' },
  { key: 'outstanding', label: 'Outstanding' },
  { key: 'renewal',   label: 'Renewal' },
  { key: 'nextMeeting', label: 'Next Meeting' },
  { key: 'status',    label: 'Status', type: 'status' },
]

const amGrid = [
  { client: 'Deutsche Bank GCC', seats: '1,240', lockin: 'In LI',     csat: '9.2', health: '92', unpaid: '2', outstanding: '₹1.82Cr', renewal: 'Jun 2027', nextMeeting: 'Apr 18', status: 'Excellent' },
  { client: 'Infosys BPO',       seats: '820',   lockin: 'In LI',     csat: '9.0', health: '88', unpaid: '3', outstanding: '₹1.42Cr', renewal: 'Sep 2026', nextMeeting: 'Apr 15', status: 'Excellent' },
  { client: 'HSBC GCC',          seats: '280',   lockin: 'In LI',     csat: '8.8', health: '86', unpaid: '1', outstanding: '₹62L',    renewal: 'Oct 2026', nextMeeting: 'Apr 12', status: 'Good' },
  { client: 'Accenture',         seats: '640',   lockin: 'Out of LI', csat: '8.6', health: '82', unpaid: '2', outstanding: '₹1.18Cr', renewal: 'May 2026', nextMeeting: 'Apr 11', status: 'Renewing' },
  { client: 'Capgemini',         seats: '220',   lockin: 'In LI',     csat: '8.4', health: '80', unpaid: '1', outstanding: '₹48L',    renewal: 'Dec 2026', nextMeeting: 'Apr 20', status: 'Good' },
  { client: 'Cognizant',         seats: '520',   lockin: 'In LI',     csat: '8.1', health: '76', unpaid: '2', outstanding: '₹96L',    renewal: 'Aug 2026', nextMeeting: 'Apr 14', status: 'Good' },
  { client: 'TechCorp India',    seats: '380',   lockin: 'In LI',     csat: '7.9', health: '74', unpaid: '1', outstanding: '₹68L',    renewal: 'Jan 2027', nextMeeting: 'Apr 22', status: 'Monitor' },
  { client: 'Wipro Tech',        seats: '320',   lockin: 'Out of LI', csat: '7.2', health: '68', unpaid: '0', outstanding: '₹42L',    renewal: 'Jul 2026', nextMeeting: '—',      status: 'Monitor' },
]

// ─── ASSISTANT AM (AAM) ───────────────────────────────────────────────────────
const aamMetrics = [
  { label: 'Daily Checklist',          value: '6 / 8', change: '2 items pending',                 trend: 'up',      status: 'warning',  icon: CheckCircle2, highlight: true },
  { label: 'Open Tasks (mine)',        value: '84',    change: 'due in next 24h: 18',             trend: 'up',      status: 'warning',  icon: ListChecks },
  { label: 'Violated Tasks',           value: '12',    change: 'needs re-plan',                    trend: 'up',      status: 'negative', icon: AlertCircle },
  { label: 'Meetings Today',           value: '4',     change: '2 scheduled · 1 done · 1 pending', trend: 'neutral', status: 'info',     icon: Calendar },
  { label: 'Open Meeting Tasks',       value: '14',    change: '3 out of SLA',                     trend: 'up',      status: 'warning',  icon: Calendar },
  { label: 'Incidents Open',           value: '6',     change: '2 created today',                  trend: 'up',      status: 'warning',  icon: Shield },
  { label: 'Disputes — CN Pending',    value: '3',     change: '₹4.2L total',                      trend: 'up',      status: 'warning',  icon: FileText },
  { label: 'Invoices to Create',       value: '4',     change: 'for Apr cycle',                    trend: 'up',      status: 'info',     icon: Receipt },
]

const aamActions = [
  { priority: 'high',   text: 'Complete daily checklist — shift close: 2 items pending (walkthrough, cafeteria inspection)', due: 'EOD', category: 'Checklist' },
  { priority: 'high',   text: 'Create incidents for 3 client complaints raised this morning (AC failure, lift outage, wifi drop)', due: 'Within 2h', category: 'Incidents' },
  { priority: 'high',   text: 'Schedule meetings for 3 AM clients — pending from weekly plan', due: 'Today', category: 'Meetings' },
  { priority: 'medium', text: 'Create CN for 3 disputes raised by Cognizant & Wipro — total ₹4.2L', due: 'Apr 11', category: 'Disputes' },
  { priority: 'medium', text: 'Create tasks for HVAC preventive maintenance (12 items from checklist)', due: 'Apr 12', category: 'Tasks' },
  { priority: 'medium', text: 'Raise 4 April invoices on portal — AM review pending for 2', due: 'Apr 12', category: 'Invoicing' },
  { priority: 'low',    text: '12 meeting tasks violated SLA — bulk close/re-plan with AM', due: 'Apr 13', category: 'Meeting Tasks' },
]

const aamTopFive = [
  {
    title: 'Task Queue by Category',
    items: [
      { label: 'Housekeeping walkthrough', value: '18', change: 1 },
      { label: 'HVAC / MEP checks',         value: '14', change: 0 },
      { label: 'Meeting coordination',      value: '12', change: -1 },
      { label: 'Incident follow-ups',       value:  '8', change: 0 },
      { label: 'Checklist items',           value:  '6', change: -1 },
    ],
  },
  {
    title: 'Client Requests (today)',
    items: [
      { label: 'Deutsche Bank — meeting room booking', value: '2', change: 0 },
      { label: 'Infosys — AC temp adjustment',          value: '1', change: 0 },
      { label: 'HSBC — pantry restock',                 value: '1', change: 0 },
      { label: 'Accenture — wifi drop',                 value: '1', change: 1 },
      { label: 'Cognizant — parking pass',              value: '1', change: 0 },
    ],
  },
]

const aamCharts = [
  {
    type: 'line', title: 'My Task Velocity — Last 7 Days',
    data: [
      { name: 'Wed', opened: 14, closed: 16 },
      { name: 'Thu', opened: 18, closed: 14 },
      { name: 'Fri', opened: 16, closed: 18 },
      { name: 'Sat', opened:  8, closed: 10 },
      { name: 'Sun', opened:  4, closed:  6 },
      { name: 'Mon', opened: 20, closed: 18 },
      { name: 'Tue', opened: 16, closed: 14 },
    ],
    lines: [{ key: 'opened', label: 'Opened' }, { key: 'closed', label: 'Closed' }],
  },
  {
    type: 'bar', title: 'Checklist Completion — Last 14 Days',
    data: [
      { name: 'D1', pct: 88 }, { name: 'D2', pct: 92 }, { name: 'D3', pct: 100 },
      { name: 'D4', pct: 94 }, { name: 'D5', pct: 88 }, { name: 'D6', pct: 96 },
      { name: 'D7', pct: 84 }, { name: 'D8', pct: 92 }, { name: 'D9', pct: 100 },
      { name: 'D10',pct: 88 }, { name: 'D11',pct: 96 }, { name: 'D12',pct: 92 },
      { name: 'D13',pct: 94 }, { name: 'D14',pct: 75 },
    ],
    lines: [{ key: 'pct', label: 'Checklist %' }],
  },
  {
    type: 'area', title: 'Meeting Tasks — Open vs Violated',
    data: [
      { name: 'W1', open: 12, violated: 2 },
      { name: 'W2', open: 14, violated: 3 },
      { name: 'W3', open: 11, violated: 2 },
      { name: 'W4', open: 16, violated: 4 },
      { name: 'W5', open: 14, violated: 3 },
      { name: 'W6', open: 14, violated: 3 },
    ],
    lines: [{ key: 'open', label: 'Open' }, { key: 'violated', label: 'Violated' }],
  },
]

const aamColumns = [
  { key: 'ref',      label: 'Reference' },
  { key: 'type',     label: 'Type' },
  { key: 'client',   label: 'Client' },
  { key: 'category', label: 'Category' },
  { key: 'due',      label: 'Due' },
  { key: 'sla',      label: 'SLA' },
  { key: 'status',   label: 'Status', type: 'status' },
  { key: 'action',   label: 'Action', type: 'action', sortable: false },
]

const aamGrid = [
  { ref: 'CHK-2204', type: 'Checklist', client: '—',                 category: 'Walkthrough',  due: 'EOD',       sla: 'Within 8h', status: 'Pending', action: 'Complete' },
  { ref: 'INC-1882', type: 'Incident',  client: 'Deutsche Bank GCC', category: 'HVAC',         due: 'Apr 10',    sla: '4h',        status: 'Open',    action: 'Create' },
  { ref: 'INC-1883', type: 'Incident',  client: 'Infosys BPO',       category: 'Lift',         due: 'Apr 10',    sla: '2h',        status: 'Open',    action: 'Create' },
  { ref: 'INC-1884', type: 'Incident',  client: 'Accenture',         category: 'IT / Wifi',    due: 'Apr 10',    sla: '4h',        status: 'Open',    action: 'Create' },
  { ref: 'MTG-1144', type: 'Meeting',   client: 'Wipro Tech',        category: 'Weekly Sync',  due: 'Apr 11',    sla: '24h',       status: 'Schedule',action: 'Book' },
  { ref: 'MTG-1145', type: 'Meeting',   client: 'Cognizant',         category: 'QBR Prep',     due: 'Apr 12',    sla: '48h',       status: 'Schedule',action: 'Book' },
  { ref: 'DSP-0842', type: 'Dispute',   client: 'Cognizant',         category: 'CN Request',   due: 'Apr 11',    sla: '24h',       status: 'CN Pending',action: 'Create CN' },
  { ref: 'INV-9922', type: 'Invoice',   client: 'Deutsche Bank GCC', category: 'Monthly',      due: 'Apr 12',    sla: '48h',       status: 'To Create', action: 'Create' },
  { ref: 'TSK-5521', type: 'Task',      client: 'HSBC GCC',          category: 'HVAC PM',      due: 'Apr 13',    sla: '72h',       status: 'Open',    action: 'Create' },
  { ref: 'TSK-5514', type: 'Task',      client: 'Multiple',          category: 'Housekeeping', due: 'Apr 10',    sla: '8h',        status: 'Violated',action: 'Re-plan' },
]

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const nexusAMData = {
  mgmt:   { metrics: mgmtMetrics,   actions: mgmtActions,   topFive: mgmtTopFive,   charts: mgmtCharts,   columns: mgmtColumns,   grid: mgmtGrid,   gridTitle: 'Regional Portfolio Summary' },
  amhead: { metrics: amheadMetrics, actions: amheadActions, topFive: amheadTopFive, charts: amheadCharts, columns: amheadColumns, grid: amheadGrid, gridTitle: 'AM Performance Scorecard' },
  rehead: { metrics: reheadMetrics, actions: reheadActions, topFive: reheadTopFive, charts: reheadCharts, columns: reheadColumns, grid: reheadGrid, gridTitle: 'Regional Centre Performance' },
  cm:     { metrics: cmMetrics,     actions: cmActions,     topFive: cmTopFive,     charts: cmCharts,     columns: cmColumns,     grid: cmGrid,     gridTitle: 'Centre Client Book' },
  am:     { metrics: amMetrics,     actions: amActions,     topFive: amTopFive,     charts: amCharts,     columns: amColumns,     grid: amGrid,     gridTitle: 'My Client Book — Account Summary' },
  aam:    { metrics: aamMetrics,    actions: aamActions,    topFive: aamTopFive,    charts: aamCharts,    columns: aamColumns,    grid: aamGrid,    gridTitle: "Today's Task & Action Queue" },
}
