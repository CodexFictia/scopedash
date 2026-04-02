import { Users, TrendingUp, Building2, Star, Clock, AlertCircle, CheckCircle, DollarSign, BarChart3, Activity } from 'lucide-react'

export const nexusAMPersonas = [
  { id: 'mgmt',     label: 'Management' },
  { id: 'amhead',   label: 'AM Head' },
  { id: 'regional', label: 'Regional Head' },
  { id: 'centre',   label: 'Centre Manager' },
  { id: 'aam',      label: 'AAM / AM' },
  { id: 'gre',      label: 'GRE' },
]

export const nexusAMFilters = [
  { id: 'region',  label: 'Region',  options: ['All Regions', 'South – Bengaluru', 'West – Pune', 'West – Mumbai', 'South – Hyderabad', 'North – Delhi'] },
  { id: 'segment', label: 'Segment', options: ['All Segments', 'Enterprise', 'GCC', 'SME', 'Co-working'] },
  { id: 'health',  label: 'Health',  options: ['All', 'Healthy', 'At Risk', 'Churning'] },
]

// ─── MANAGEMENT ───────────────────────────────────────────────────────────────
const mgmtMetrics = [
  { label: 'Total Occupied Seats',     value: '12,480', change: '+340 this month',      trend: 'up',   status: 'positive', icon: Users, highlight: true },
  { label: 'Portfolio Occupancy',      value: '87.4%',  change: '+1.8% vs last month',  trend: 'up',   status: 'positive', icon: Building2 },
  { label: 'Gross Retention Rate',     value: '91.2%',  change: '+0.4% QoQ',            trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Expansion Revenue MTD',    value: '₹4.8Cr', change: '+22% vs target',       trend: 'up',   status: 'positive', icon: DollarSign },
  { label: 'Accounts at Churn Risk',   value: '8',      change: '₹1.2Cr ARR at risk',  trend: 'up',   status: 'negative', icon: AlertCircle },
]
const mgmtActions = [
  { priority: 'high',   text: '3 accounts (400 seats combined) not renewed — churn likely unless escalation in 7 days', due: 'Apr 8', category: 'Retention' },
  { priority: 'high',   text: 'Infosys BPO (1,200 seats) — contract expiry in 60 days, renewal not started', due: 'Apr 15', category: 'Renewal' },
  { priority: 'medium', text: 'Deutsche Bank GCC expansion (200 seats, Bengaluru) — approval pending board sign-off', due: 'Apr 10', category: 'Expansion' },
  { priority: 'medium', text: 'Quarterly business review pack for top 10 clients due for distribution', due: 'Apr 5', category: 'QBR' },
  { priority: 'low',    text: 'NPS survey batch (Q1 FY26) results in — 3 detractor accounts need follow-up', due: 'Apr 12', category: 'NPS' },
]
const mgmtTopFive = [
  {
    title: 'Top 5 Accounts by Seat Count',
    items: [
      { label: 'Infosys BPO',        value: '1,200', change: 0 },
      { label: 'Deutsche Bank GCC',  value: '840',   change: 1 },
      { label: 'Accenture India',    value: '680',   change: 0 },
      { label: 'Wipro Tech',         value: '540',   change: -1 },
      { label: 'Cognizant',          value: '480',   change: 0 },
    ],
  },
  {
    title: 'Top 5 Accounts by Churn Risk',
    items: [
      { label: 'XYZ Fintech (150 seats)',    value: 'High',   change: -1 },
      { label: 'GlobalCorp (80 seats)',      value: 'High',   change: -1 },
      { label: 'TechStartup A (40 seats)',   value: 'High',   change: 0 },
      { label: 'BFSI Co. (120 seats)',       value: 'Medium', change: 0 },
      { label: 'Retail Co. (60 seats)',      value: 'Medium', change: 0 },
    ],
  },
]
const mgmtCharts = [
  {
    type: 'line', title: 'Occupancy & Retention Trend (Monthly)',
    data: [
      { name: 'Oct', occupancy: 84.2, retention: 90.1 }, { name: 'Nov', occupancy: 85.8, retention: 90.8 },
      { name: 'Dec', occupancy: 84.6, retention: 89.4 }, { name: 'Jan', occupancy: 86.1, retention: 90.2 },
      { name: 'Feb', occupancy: 85.6, retention: 90.8 }, { name: 'Mar', occupancy: 87.4, retention: 91.2 },
    ],
    lines: [{ key: 'occupancy', label: 'Occupancy %' }, { key: 'retention', label: 'Retention %' }],
  },
  {
    type: 'bar', title: 'Expansion Revenue by Region (₹L MTD)',
    data: [
      { name: 'Bengaluru', expansion: 184 }, { name: 'Pune',       expansion: 96 },
      { name: 'Mumbai',    expansion: 112 }, { name: 'Hyderabad',  expansion: 64 },
      { name: 'Delhi',     expansion: 24 },
    ],
    lines: [{ key: 'expansion', label: 'Expansion Revenue (₹L)' }],
  },
  {
    type: 'pie', title: 'Accounts by Health Status',
    data: [
      { name: 'Healthy',    value: 68 }, { name: 'Needs Attention', value: 20 },
      { name: 'At Risk',    value: 8  }, { name: 'Churning',        value: 4  },
    ],
    lines: [],
  },
]
const mgmtColumns = [
  { key: 'account',   label: 'Account' },
  { key: 'seats',     label: 'Seats' },
  { key: 'centre',    label: 'Centre' },
  { key: 'occupancy', label: 'Occupancy', type: 'progress' },
  { key: 'renewal',   label: 'Renewal Date' },
  { key: 'nps',       label: 'NPS', muted: true },
  { key: 'health',    label: 'Health', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]
const mgmtGrid = [
  { account: 'Infosys BPO',       seats: '1,200', centre: 'Baner',      occupancy: 92, renewal: 'Jun 2026', nps: '42', health: 'Healthy',  action: 'View' },
  { account: 'Deutsche Bank GCC', seats: '840',   centre: 'Whitefield', occupancy: 96, renewal: 'Sep 2027', nps: '58', health: 'Healthy',  action: 'View' },
  { account: 'Accenture India',   seats: '680',   centre: 'Whitefield', occupancy: 88, renewal: 'Mar 2027', nps: '36', health: 'Healthy',  action: 'View' },
  { account: 'Wipro Tech',        seats: '540',   centre: 'HiTec City', occupancy: 84, renewal: 'Aug 2026', nps: '28', health: 'Active',   action: 'View' },
  { account: 'Cognizant',         seats: '480',   centre: 'Baner',      occupancy: 90, renewal: 'Jan 2027', nps: '44', health: 'Healthy',  action: 'View' },
  { account: 'XYZ Fintech',       seats: '150',   centre: 'BKC',        occupancy: 62, renewal: 'Apr 2026', nps: '-12',health: 'At Risk',  action: 'Intervene' },
  { account: 'GlobalCorp',        seats: '80',    centre: 'Cyber City', occupancy: 55, renewal: 'May 2026', nps: '-4', health: 'At Risk',  action: 'Intervene' },
  { account: 'HSBC GCC',          seats: '420',   centre: 'BKC',        occupancy: 86, renewal: 'Dec 2027', nps: '50', health: 'Healthy',  action: 'View' },
]

// ─── AM HEAD ──────────────────────────────────────────────────────────────────
const amheadMetrics = [
  { label: 'Accounts at Risk',       value: '8',     change: '2 new this week',        trend: 'up',   status: 'negative', icon: AlertCircle, highlight: true },
  { label: 'Renewals Due (90 days)', value: '14',    change: '₹4.2Cr ARR',             trend: 'up',   status: 'warning',  icon: Clock },
  { label: 'Upsell Pipeline',        value: '₹2.8Cr',change: '6 active opportunities', trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Portfolio NPS',          value: '38',    change: '+4 vs last quarter',      trend: 'up',   status: 'positive', icon: Star },
  { label: 'Gross Retention',        value: '91.2%', change: '+0.4% QoQ',              trend: 'up',   status: 'positive', icon: CheckCircle },
]
const amheadActions = [
  { priority: 'high',   text: 'XYZ Fintech (150 seats) flagged as "churning" — AM Neha has not actioned in 10 days', due: 'Today', category: 'Churn Risk' },
  { priority: 'high',   text: 'Infosys BPO renewal (1,200 seats, ₹3.6Cr) — assign senior AM and start negotiation', due: 'Apr 5', category: 'Renewal' },
  { priority: 'medium', text: 'Deutsche Bank GCC expansion proposal — review before client submission', due: 'Apr 4', category: 'Expansion' },
  { priority: 'medium', text: 'NPS detractors (3 accounts) — review action plans from AMs', due: 'Apr 8', category: 'NPS Recovery' },
  { priority: 'low',    text: 'AM team pipeline review call — schedule for Apr 5 (weekly cadence missed)', due: 'Apr 5', category: 'Team Review' },
]
const amheadTopFive = [
  {
    title: 'Top 5 Accounts by Renewal Risk',
    items: [
      { label: 'XYZ Fintech (Apr 26)',      value: '45d',  change: -1 },
      { label: 'GlobalCorp (May 26)',        value: '60d',  change: -1 },
      { label: 'Infosys BPO (Jun 26)',       value: '75d',  change: 0 },
      { label: 'Wipro Tech (Aug 26)',        value: '120d', change: 0 },
      { label: 'One Indiabulls Co. (May 26)',value: '58d',  change: 0 },
    ],
  },
  {
    title: 'Top 5 Upsell Opportunities',
    items: [
      { label: 'Deutsche Bank – 200 seats', value: '₹1.2Cr', change: 1 },
      { label: 'Cognizant – Bengaluru exp.', value: '₹68L',  change: 1 },
      { label: 'HSBC – VAS Bundle',          value: '₹48L',  change: 0 },
      { label: 'Accenture – Extra Floor',    value: '₹42L',  change: 0 },
      { label: 'Wipro – Flex Desk Add-on',   value: '₹28L',  change: 0 },
    ],
  },
]
const amheadCharts = [
  {
    type: 'bar', title: 'Renewal Pipeline by Quarter (₹Cr ARR)',
    data: [
      { name: 'Q1 FY26', value: 1.4 }, { name: 'Q2 FY26', value: 4.2 },
      { name: 'Q3 FY26', value: 3.8 }, { name: 'Q4 FY26', value: 2.6 },
    ],
    lines: [{ key: 'value', label: 'ARR (₹Cr)' }],
  },
  {
    type: 'line', title: 'Portfolio NPS Trend (Quarterly)',
    data: [
      { name: 'Q1 FY25', nps: 28 }, { name: 'Q2 FY25', nps: 32 },
      { name: 'Q3 FY25', nps: 30 }, { name: 'Q4 FY25', nps: 34 },
      { name: 'Q1 FY26', nps: 38 },
    ],
    lines: [{ key: 'nps', label: 'NPS Score' }],
  },
]
const amheadColumns = mgmtColumns
const amheadGrid = mgmtGrid

// ─── REGIONAL HEAD ────────────────────────────────────────────────────────────
const regionalMetrics = [
  { label: 'Regional Occupancy',      value: '88.2%', change: '+2.1% vs last month', trend: 'up',   status: 'positive', icon: Building2, highlight: true },
  { label: 'New Accounts (MoM)',      value: '3',     change: '+280 seats added',    trend: 'up',   status: 'positive', icon: Users },
  { label: 'Expansion Accounts',      value: '5',     change: '640 seats in flight', trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Churn Accounts (30d)',    value: '1',     change: '40 seats lost',       trend: 'up',   status: 'warning',  icon: AlertCircle },
  { label: 'Revenue vs Target',       value: '104%',  change: '+₹28L above target',  trend: 'up',   status: 'positive', icon: DollarSign },
]
const regionalActions = [
  { priority: 'high',   text: 'Whitefield Centre: 2 accounts on floor 4 with low utilization — risk of downsizing', due: 'Apr 5', category: 'Utilization' },
  { priority: 'medium', text: 'Baner Centre hit 94% occupancy — pre-empt waitlist and explore adjacent space', due: 'Apr 8', category: 'Capacity' },
  { priority: 'medium', text: 'New GCC client (HSBC, 200 seats) — onboarding starting Apr 6, ensure centre readiness', due: 'Apr 6', category: 'Onboarding' },
  { priority: 'low',    text: 'Quarterly account reviews for all regional accounts — schedule with AMs this week', due: 'Apr 7', category: 'QBR' },
]
const regionalTopFive = [
  {
    title: 'Top 5 Accounts by Regional Revenue',
    items: [
      { label: 'Deutsche Bank GCC', value: '₹1.8Cr', change: 1 },
      { label: 'Infosys BPO',       value: '₹1.4Cr', change: 0 },
      { label: 'Accenture India',   value: '₹98L',   change: 0 },
      { label: 'Cognizant',         value: '₹76L',   change: 0 },
      { label: 'HSBC GCC',          value: '₹42L',   change: 1 },
    ],
  },
  {
    title: 'Top 5 Centres by Occupancy',
    items: [
      { label: 'Baner, Pune',         value: '94.2%', change: 1 },
      { label: 'Whitefield, Blore',   value: '91.8%', change: 0 },
      { label: 'Tidel Park, Chennai', value: '88.6%', change: 0 },
      { label: 'HiTec City, Hyd',     value: '86.4%', change: -1 },
      { label: 'Cyber City, Delhi',   value: '84.2%', change: 0 },
    ],
  },
]
const regionalCharts = [
  {
    type: 'bar', title: 'Occupancy by Centre (%)',
    data: [
      { name: 'Baner',      occ: 94.2 }, { name: 'Whitefield', occ: 91.8 },
      { name: 'Tidel Park', occ: 88.6 }, { name: 'HiTec City', occ: 86.4 },
      { name: 'Cyber City', occ: 84.2 }, { name: 'BKC',        occ: 82.0 },
    ],
    lines: [{ key: 'occ', label: 'Occupancy %' }],
  },
  {
    type: 'area', title: 'Seat Additions & Churn (Monthly)',
    data: [
      { name: 'Oct', added: 120, churned: 40 }, { name: 'Nov', added: 180, churned: 20 },
      { name: 'Dec', added: 80,  churned: 60 }, { name: 'Jan', added: 200, churned: 30 },
      { name: 'Feb', added: 160, churned: 40 }, { name: 'Mar', added: 280, churned: 40 },
    ],
    lines: [{ key: 'added', label: 'Added' }, { key: 'churned', label: 'Churned' }],
  },
]
const regionalColumns = mgmtColumns
const regionalGrid = mgmtGrid

// ─── CENTRE MANAGER ───────────────────────────────────────────────────────────
const centreMetrics = [
  { label: 'Centre Occupancy',        value: '91.8%', change: '+1.4% vs last month',  trend: 'up',   status: 'positive', icon: Building2, highlight: true },
  { label: 'Active Client Accounts',  value: '14',    change: '1 onboarding this wk', trend: 'up',   status: 'info',    icon: Users },
  { label: 'Open Client Issues',      value: '6',     change: '2 escalated',          trend: 'up',   status: 'warning', icon: AlertCircle },
  { label: 'Seat Expansion Pipeline', value: '180',   change: '3 active expansions',  trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Client CSAT This Month',  value: '4.5/5', change: '+0.1 vs last month',   trend: 'up',   status: 'positive', icon: Star },
]
const centreActions = [
  { priority: 'high',   text: 'Floor 4: Client says AHU noise complaints for 3 days — HVAC team not yet deployed', due: 'Today', category: 'Facilities' },
  { priority: 'high',   text: 'HSBC onboarding Apr 6 — IT infra, access cards, floor signage not confirmed', due: 'Apr 5', category: 'Onboarding' },
  { priority: 'medium', text: 'XYZ Fintech utilization at 62% — low attendance for 3 weeks, flag to AM', due: 'Apr 4', category: 'Utilization' },
  { priority: 'medium', text: 'Monthly client newsletter for centre updates not sent yet (due Apr 1)', due: 'Today', category: 'Communication' },
  { priority: 'low',    text: 'Floor 2 seating reallocation for Deutsche Bank expansion — coordinate facilities', due: 'Apr 8', category: 'Space Planning' },
]
const centreTopFive = [
  {
    title: 'Top 5 Accounts by Occupancy',
    items: [
      { label: 'Deutsche Bank GCC', value: '96%', change: 0 },
      { label: 'Cognizant',         value: '92%', change: 1 },
      { label: 'Accenture India',   value: '88%', change: 0 },
      { label: 'Wipro Tech',        value: '84%', change: -1 },
      { label: 'XYZ Fintech',       value: '62%', change: -1 },
    ],
  },
  {
    title: 'Top 5 Recurring Client Issues',
    items: [
      { label: 'HVAC Noise/Temperature', value: '8', change: 1 },
      { label: 'Slow Internet',          value: '5', change: 0 },
      { label: 'Meeting Room Booking',   value: '4', change: 0 },
      { label: 'Pantry Restocking',      value: '3', change: 0 },
      { label: 'Visitor Management',     value: '2', change: 0 },
    ],
  },
]
const centreCharts = [
  {
    type: 'area', title: 'Daily Attendance (head count)',
    data: [
      { name: 'Mar 26', attendance: 920 }, { name: 'Mar 27', attendance: 980 },
      { name: 'Mar 28', attendance: 940 }, { name: 'Mar 29', attendance: 1010 },
      { name: 'Mar 30', attendance: 380 }, { name: 'Mar 31', attendance: 960 },
      { name: 'Apr 1',  attendance: 1020 },
    ],
    lines: [{ key: 'attendance', label: 'Attendance' }],
  },
  {
    type: 'bar', title: 'Client CSAT Score by Account',
    data: [
      { name: 'Deutsche Bank', csat: 4.8 }, { name: 'Cognizant', csat: 4.6 },
      { name: 'Accenture',    csat: 4.4 }, { name: 'Wipro',      csat: 4.2 },
      { name: 'XYZ Fintech',  csat: 2.8 }, { name: 'HSBC',       csat: 4.5 },
    ],
    lines: [{ key: 'csat', label: 'CSAT Score' }],
  },
]
const centreColumns = mgmtColumns
const centreGrid = mgmtGrid.filter(r => ['Whitefield', 'Baner'].includes(r.centre))

// ─── AAM / AM ─────────────────────────────────────────────────────────────────
const aamMetrics = [
  { label: 'My Accounts',             value: '8',     change: '2 at risk',            trend: 'up',   status: 'warning',  icon: Users, highlight: true },
  { label: 'Renewals Due (60 days)',  value: '2',     change: '₹1.2Cr ARR',           trend: 'up',   status: 'warning',  icon: Clock },
  { label: 'Expansion Opportunities', value: '3',     change: '₹86L in pipeline',     trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Open Tickets (all accts)',value: '12',    change: '2 escalated',          trend: 'up',   status: 'warning',  icon: AlertCircle },
  { label: 'Avg Days Since Touchpoint',value: '11d',  change: '2 accounts >21 days',  trend: 'up',   status: 'negative', icon: Activity },
]
const aamActions = [
  { priority: 'high',   text: 'XYZ Fintech — last AM touchpoint 18 days ago and NPS is -12. Call today.', due: 'Today', category: 'Risk Account' },
  { priority: 'high',   text: 'Wipro renewal (540 seats) due Aug 2026 — start pre-renewal conversation now', due: 'Apr 10', category: 'Renewal' },
  { priority: 'medium', text: 'Deutsche Bank expansion proposal (200 seats) — finalize and share draft', due: 'Apr 4', category: 'Expansion' },
  { priority: 'medium', text: '3 open tickets pending client confirmation for >3 days — chase responses', due: 'Today', category: 'Tickets' },
  { priority: 'low',    text: 'Cognizant QBR deck for Apr 10 meeting — prepare outcomes from last quarter', due: 'Apr 8', category: 'QBR' },
]
const aamTopFive = [
  {
    title: 'My Accounts by Touchpoint Recency',
    items: [
      { label: 'XYZ Fintech',      value: '18d', change: -1 },
      { label: 'GlobalCorp',       value: '14d', change: -1 },
      { label: 'BFSI Co.',         value: '11d', change: 0 },
      { label: 'Wipro Tech',       value: '8d',  change: 0 },
      { label: 'Deutsche Bank',    value: '3d',  change: 1 },
    ],
  },
  {
    title: 'My Accounts by Health',
    items: [
      { label: 'Deutsche Bank GCC', value: 'Healthy',  change: 0 },
      { label: 'Wipro Tech',        value: 'Active',   change: 0 },
      { label: 'Cognizant',         value: 'Healthy',  change: 1 },
      { label: 'XYZ Fintech',       value: 'At Risk',  change: -1 },
      { label: 'GlobalCorp',        value: 'At Risk',  change: -1 },
    ],
  },
]
const aamCharts = [
  {
    type: 'bar', title: 'My Account Health Distribution',
    data: [{ name: 'Healthy', count: 4 }, { name: 'Active', count: 1 }, { name: 'At Risk', count: 2 }, { name: 'Churning', count: 1 }],
    lines: [{ key: 'count', label: 'Accounts' }],
  },
  {
    type: 'area', title: 'Total Seats Under Management (Monthly)',
    data: [
      { name: 'Oct', seats: 1840 }, { name: 'Nov', seats: 1920 }, { name: 'Dec', seats: 1880 },
      { name: 'Jan', seats: 2040 }, { name: 'Feb', seats: 2020 }, { name: 'Mar', seats: 2080 },
    ],
    lines: [{ key: 'seats', label: 'Seats' }],
  },
]
const aamColumns = [
  { key: 'account',    label: 'Account' },
  { key: 'seats',      label: 'Seats' },
  { key: 'centre',     label: 'Centre' },
  { key: 'renewal',    label: 'Renewal' },
  { key: 'touchpoint', label: 'Last Touchpoint', muted: true },
  { key: 'openTkts',   label: 'Open Tkts', muted: true },
  { key: 'health',     label: 'Health', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const aamGrid = [
  { account: 'Deutsche Bank GCC', seats: '840',   centre: 'Whitefield', renewal: 'Sep 2027', touchpoint: '3 days ago',  openTkts: '1', health: 'Healthy', action: 'View' },
  { account: 'Cognizant',         seats: '480',   centre: 'Baner',      renewal: 'Jan 2027', touchpoint: '8 days ago',  openTkts: '2', health: 'Healthy', action: 'View' },
  { account: 'Wipro Tech',        seats: '540',   centre: 'HiTec City', renewal: 'Aug 2026', touchpoint: '8 days ago',  openTkts: '3', health: 'Active',  action: 'View' },
  { account: 'BFSI Co.',          seats: '120',   centre: 'BKC',        renewal: 'Jul 2026',  touchpoint: '11 days ago', openTkts: '2', health: 'Active',  action: 'View' },
  { account: 'XYZ Fintech',       seats: '150',   centre: 'BKC',        renewal: 'Apr 2026', touchpoint: '18 days ago', openTkts: '4', health: 'At Risk', action: 'Call Now' },
  { account: 'GlobalCorp',        seats: '80',    centre: 'Cyber City', renewal: 'May 2026', touchpoint: '14 days ago', openTkts: '2', health: 'At Risk', action: 'Call Now' },
  { account: 'Retail Co.',        seats: '60',    centre: 'Baner',      renewal: 'Dec 2026', touchpoint: '5 days ago',  openTkts: '1', health: 'Active',  action: 'View' },
  { account: 'TechStartup A',     seats: '40',    centre: 'Whitefield', renewal: 'May 2026', touchpoint: '21 days ago', openTkts: '1', health: 'At Risk', action: 'Contact' },
]

// ─── GRE ──────────────────────────────────────────────────────────────────────
const greMetrics = [
  { label: 'Visitor Check-ins Today',  value: '142',   change: '↑ 18 vs yesterday',    trend: 'up',   status: 'info',    icon: Users, highlight: true },
  { label: 'Visitor Satisfaction',     value: '4.6/5', change: '+0.1 vs last week',    trend: 'up',   status: 'positive', icon: Star },
  { label: 'Guest Requests Open',      value: '8',     change: '2 overdue >1hr',       trend: 'up',   status: 'warning', icon: Clock },
  { label: 'Avg Wait Time (lobby)',    value: '3.2min', change: '-0.8min vs yesterday', trend: 'down', status: 'positive', icon: Activity },
  { label: 'Meeting Rooms Utilized',  value: '68%',   change: 'Peak: 12–2pm',         trend: 'up',   status: 'info',    icon: Building2 },
]
const greActions = [
  { priority: 'high',   text: 'VIP visitor (CEO, Deutsche Bank) expected at 3pm — greeting protocol and escort confirmed?', due: '3:00 PM', category: 'VIP' },
  { priority: 'high',   text: '2 visitor requests unactioned for >90 mins — follow up and update guests', due: 'Now', category: 'Service' },
  { priority: 'medium', text: 'Meeting room MR-4 reported faulty display since morning — raise facilities ticket', due: 'Today', category: 'Facilities' },
  { priority: 'medium', text: 'Evening catering confirmation for HSBC event (25 pax, 6pm) — not yet confirmed', due: '4pm', category: 'Events' },
  { priority: 'low',    text: 'Weekly lobby experience feedback compilation for Centre Manager', due: 'Tomorrow', category: 'Reports' },
]
const greTopFive = [
  {
    title: 'Top 5 Visitor Request Types',
    items: [
      { label: 'Meeting Room Extension',  value: '28', change: 0 },
      { label: 'Guest Badge Reprint',     value: '12', change: 1 },
      { label: 'Café / Meal Request',     value: '10', change: 0 },
      { label: 'Taxi / Cab Assistance',   value: '8',  change: 0 },
      { label: 'Equipment Help',          value: '4',  change: -1 },
    ],
  },
  {
    title: 'Top 5 Busiest Times (Visitor Volume)',
    items: [
      { label: '9:30 – 10:30 AM',  value: '42', change: 0 },
      { label: '11:00 – 12:00 PM', value: '38', change: 1 },
      { label: '2:00 – 3:00 PM',   value: '32', change: 0 },
      { label: '3:30 – 4:30 PM',   value: '28', change: 0 },
      { label: '4:30 – 5:30 PM',   value: '24', change: -1 },
    ],
  },
]
const greCharts = [
  {
    type: 'area', title: 'Visitor Volume — Hourly Today',
    data: [
      { name: '8am', visitors: 18 }, { name: '9am', visitors: 42 }, { name: '10am', visitors: 38 },
      { name: '11am', visitors: 35 }, { name: '12pm', visitors: 28 }, { name: '1pm', visitors: 22 },
      { name: '2pm', visitors: 32 }, { name: '3pm', visitors: 0 },
    ],
    lines: [{ key: 'visitors', label: 'Check-ins' }],
  },
  {
    type: 'bar', title: 'Room Utilization by Type (%)',
    data: [
      { name: 'Boardroom', util: 82 }, { name: 'Conf (6-pax)', util: 74 },
      { name: 'Meeting (4)', util: 68 }, { name: 'Phone Booth', util: 58 },
      { name: 'Training Rm', util: 44 },
    ],
    lines: [{ key: 'util', label: 'Utilization %' }],
  },
]
const greColumns = [
  { key: 'visitor',  label: 'Visitor Name' },
  { key: 'company',  label: 'Company', muted: true },
  { key: 'host',     label: 'Host' },
  { key: 'time',     label: 'Check-in Time' },
  { key: 'purpose',  label: 'Purpose' },
  { key: 'badge',    label: 'Badge' },
  { key: 'status',   label: 'Status', type: 'status' },
  { key: 'action',   label: 'Action', type: 'action', sortable: false },
]
const greGrid = [
  { visitor: 'John Smith',      company: 'Deutsche Bank', host: 'Priya M.',   time: '09:15 AM', purpose: 'Business Review', badge: 'V-124', status: 'Active',    action: 'View' },
  { visitor: 'Anita Kapoor',    company: 'HSBC GCC',      host: 'Rajesh K.',  time: '10:00 AM', purpose: 'Onboarding',      badge: 'V-125', status: 'Active',    action: 'View' },
  { visitor: 'Mark Jensen',     company: 'Deutsche Bank', host: 'Seema G.',   time: '10:30 AM', purpose: 'IT Setup',        badge: 'V-126', status: 'Active',    action: 'View' },
  { visitor: 'Suresh Iyer',     company: 'Vendor',        host: 'Facilities', time: '11:00 AM', purpose: 'Maintenance',     badge: 'V-127', status: 'In Progress',action: 'View' },
  { visitor: 'CEO – Deutsche',  company: 'Deutsche Bank', host: 'Centre Mgr', time: '03:00 PM', purpose: 'VIP Visit',       badge: 'Pre-reg', status: 'Pending', action: 'Prepare' },
  { visitor: 'HSBC Event Guest', company: 'External',     host: 'Event Team', time: '06:00 PM', purpose: 'Corporate Event', badge: 'Batch',   status: 'Pending', action: 'Confirm' },
]

export const nexusAMData = {
  mgmt:     { metrics: mgmtMetrics,     actions: mgmtActions,     topFive: mgmtTopFive,     charts: mgmtCharts,     columns: mgmtColumns,     grid: mgmtGrid,     gridTitle: 'Portfolio Account Health Overview' },
  amhead:   { metrics: amheadMetrics,   actions: amheadActions,   topFive: amheadTopFive,   charts: amheadCharts,   columns: amheadColumns,   grid: amheadGrid,   gridTitle: 'Account Portfolio — At-Risk & Renewal Tracker' },
  regional: { metrics: regionalMetrics, actions: regionalActions, topFive: regionalTopFive, charts: regionalCharts, columns: regionalColumns, grid: regionalGrid, gridTitle: 'Regional Account Overview' },
  centre:   { metrics: centreMetrics,   actions: centreActions,   topFive: centreTopFive,   charts: centreCharts,   columns: centreColumns,   grid: centreGrid,   gridTitle: 'Centre Client Accounts' },
  aam:      { metrics: aamMetrics,      actions: aamActions,      topFive: aamTopFive,      charts: aamCharts,      columns: aamColumns,      grid: aamGrid,      gridTitle: 'My Accounts Dashboard' },
  gre:      { metrics: greMetrics,      actions: greActions,      topFive: greTopFive,      charts: greCharts,      columns: greColumns,      grid: greGrid,      gridTitle: 'Today\'s Visitor Log' },
}
