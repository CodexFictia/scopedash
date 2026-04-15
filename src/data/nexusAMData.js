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

// ─── Shared composite-metrics explainer ──────────────────────────────────────
const compositeNote = {
  title: 'About composite metrics',
  items: [
    {
      label: 'Health Score (0–100)',
      formula:
        'weighted blend of CSAT (25%), incident count last 90d (−15%), meeting cadence vs plan (15%), SLA compliance (15%), renewal history (10%), account age bonus (10%), escalations (−10%). Clients < 60 flagged as at-risk.',
    },
    {
      label: 'AM Performance Score (0–100)',
      formula:
        'CSAT across portfolio (25%) + task SLA compliance (25%) + collection rate (20%) + renewal win rate (15%) + avg client health (15%). Anything below 75 is a coaching flag.',
    },
    {
      label: 'Tasks (total)',
      formula: 'Open + Closed within SLA + Violated. Violated includes both closed-late and still-open-past-SLA.',
    },
    {
      label: 'Meetings (total)',
      formula: 'Booked (future) + Pending (past due, not done) + Completed. "Pending" is the SLA-risk bucket.',
    },
  ],
}

// Helpers to build composite cards consistently
const taskComposite = ({ total, open, closedSla, violated, subtitle }) => ({
  title: 'Tasks — Total · Open · Closed (SLA) · Violated',
  total,
  subtitle,
  icon: ListChecks,
  accent: '#f97316',
  segments: [
    { label: 'Open',          value: open,      color: '#388bfd' },
    { label: 'Closed in SLA', value: closedSla, color: '#3fb950' },
    { label: 'Violated',      value: violated,  color: '#f85149' },
  ],
})

const meetingComposite = ({ total, booked, pending, completed, subtitle }) => ({
  title: 'Meetings — Total · Booked · Pending · Completed',
  total,
  subtitle,
  icon: Calendar,
  accent: '#8b5cf6',
  segments: [
    { label: 'Booked',    value: booked,    color: '#388bfd' },
    { label: 'Pending',   value: pending,   color: '#d29922' },
    { label: 'Completed', value: completed, color: '#3fb950' },
  ],
})

// ─── MANAGEMENT (portfolio-wide) ──────────────────────────────────────────────
const mgmtTasks = [
  { label: 'Approve Q1 collection recovery plan',          priority: 'high',   due: 'Today' },
  { label: 'Review 18 at-risk clients with AM Head',       priority: 'high',   due: 'This week' },
  { label: 'Sign off 10 top renewal commercials',          priority: 'medium', due: 'Apr 15' },
  { label: 'Board deck — portfolio health section',        priority: 'medium', due: 'Apr 20' },
  { label: 'Monthly ELT review prep',                      priority: 'low',    due: 'Apr 22' },
]

const mgmtMetrics = [
  { label: 'Total Outstanding',       value: '₹6.30B', change: 'Without GST',                         trend: 'up',     status: 'warning',  icon: IndianRupee, highlight: true },
  { label: 'Total Invoiced',          value: '₹7.50B', change: '447 clients',                         trend: 'up',     status: 'positive', icon: FileText },
  { label: 'Total Overdue',           value: '₹426.5M',change: 'Oldest age: 328d',                    trend: 'up',     status: 'negative', icon: AlertCircle },
  { label: 'Collection Rate',         value: '15.13%', change: '-2.1% vs target 30%',                 trend: 'down',   status: 'negative', icon: TrendingDown },
  { label: 'Unpaid Invoices',         value: '1,284', change: '₹4.26B total value',                   trend: 'up',     status: 'warning',  icon: Receipt },
  { label: 'Out of Lock-in',          value: '163',    change: 'of 447 active · 284 in LI',           trend: 'up',     status: 'warning',  icon: LockOpen },
  { label: 'Under Notice Period',     value: '12',     change: '₹42Cr ARR at stake',                   trend: 'up',     status: 'negative', icon: LogOut },
  { label: 'Renewals Due (90d)',      value: '38',     change: '₹112Cr ARR',                           trend: 'up',     status: 'warning',  icon: RefreshCw },
  { label: 'Avg Portfolio Health',    value: '72/100', change: '18 clients < 60 (at-risk)',            trend: 'down',   status: 'warning',  icon: HeartPulse },
  { label: 'Avg CSAT',                value: '8.2/10', change: '+0.2 vs Q4',                            trend: 'up',     status: 'positive', icon: Star },
]

const mgmtTaskComposite = taskComposite({
  total: 15800, open: 4200, closedSla: 7800, violated: 3800,
  subtitle: 'Portfolio · SLA compliance 67.2% · 24% violated',
})
const mgmtMeetingComposite = meetingComposite({
  total: 1860, booked: 540, pending: 186, completed: 1134,
  subtitle: '6-week window · 10% pending past SLA',
})

const mgmtActions = [
  { priority: 'high',   text: '18 at-risk clients (health < 60) — review with AM Head and regional leads', due: 'This week', category: 'Retention' },
  { priority: 'high',   text: '12 clients under notice period — ₹42Cr ARR — final save attempts required', due: 'Apr 12', category: 'Exit Management' },
  { priority: 'high',   text: 'Portfolio collection rate at 15.13% vs 30% target — escalation needed', due: 'Immediate', category: 'Collections' },
  { priority: 'medium', text: '3,800 tasks violated SLA — root-cause with AM Head before board review', due: 'Apr 15', category: 'SLA Review' },
  { priority: 'medium', text: '38 renewals due in next 90 days — approve revised commercials for top 10', due: 'Apr 20', category: 'Renewals' },
  { priority: 'low',    text: 'Mod-project pipeline at ₹14.6Cr (136 projects) — review conversion rate', due: 'Apr 25', category: 'Pipeline' },
]

const mgmtTopFive = [
  {
    title: 'Top 5 Clients — Health Score',
    items: [
      { label: 'Deutsche Bank GCC — BKC',     value: '94', change: 1 },
      { label: 'Infosys BPO — Baner',          value: '91', change: 0 },
      { label: 'HSBC GCC — Whitefield',        value: '89', change: 1 },
      { label: 'Morgan Stanley — Lower Parel', value: '87', change: 0 },
      { label: 'Salesforce India — ORR',       value: '86', change: 1 },
    ],
  },
  {
    title: 'Bottom 5 Clients — Health Score',
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
  { key: 'outLI',        label: 'Out of LI' },
  { key: 'notice',       label: 'Under Notice' },
  { key: 'outstanding',  label: 'Outstanding' },
  { key: 'overdue',      label: 'Overdue' },
  { key: 'collection',   label: 'Collection %' },
  { key: 'health',       label: 'Avg Health', muted: true },
  { key: 'atRisk',       label: 'Status', type: 'status' },
]

const mgmtGrid = [
  { region: 'South — Bengaluru',      clients: '118', outLI: '38', notice: '2', outstanding: '₹182Cr', overdue: '₹112M', collection: '18.4%', health: '74', atRisk: 'On Track' },
  { region: 'West — Pune',            clients: '84',  outLI: '32', notice: '3', outstanding: '₹146Cr', overdue: '₹88M',  collection: '16.2%', health: '71', atRisk: 'Monitor' },
  { region: 'West — Mumbai',          clients: '76',  outLI: '28', notice: '2', outstanding: '₹128Cr', overdue: '₹72M',  collection: '14.8%', health: '70', atRisk: 'Monitor' },
  { region: 'South — Hyderabad',      clients: '68',  outLI: '24', notice: '3', outstanding: '₹92Cr',  overdue: '₹58M',  collection: '13.2%', health: '68', atRisk: 'At Risk' },
  { region: 'North — Delhi/NCR',      clients: '72',  outLI: '28', notice: '1', outstanding: '₹68Cr',  overdue: '₹64M',  collection: '12.6%', health: '69', atRisk: 'At Risk' },
  { region: 'South — Chennai',        clients: '29',  outLI: '13', notice: '1', outstanding: '₹14Cr',  overdue: '₹32M',  collection: '10.2%', health: '72', atRisk: 'Monitor' },
]

// ─── AM HEAD ──────────────────────────────────────────────────────────────────
const amheadTasks = [
  { label: '1:1 with 6 AMs below SLA',                     priority: 'high',   due: 'This week' },
  { label: 'Review Rahul\'s 4 at-risk clients',            priority: 'high',   due: 'Apr 11' },
  { label: 'Approve mod-projects > ₹5L (8 pending)',       priority: 'medium', due: 'Apr 12' },
  { label: 'Sign off renewal commercials — top 10',        priority: 'medium', due: 'Apr 14' },
  { label: 'Quarterly AM scorecard finalization',          priority: 'low',    due: 'Apr 20' },
]

const amheadMetrics = [
  { label: 'AMs Under Management',     value: '24',    change: '6 centres',                           trend: 'up',      status: 'positive', icon: UserCheck, highlight: true },
  { label: 'AMs Below SLA',             value: '6',     change: 'task SLA < 75%',                      trend: 'up',      status: 'negative', icon: AlertCircle },
  { label: 'Avg AM Performance Score',  value: '78/100',change: '3 AMs above 90',                      trend: 'up',      status: 'positive', icon: Target },
  { label: 'Out of Lock-in',            value: '163',   change: 'of 447 · 36% unlocked',               trend: 'up',      status: 'warning',  icon: LockOpen },
  { label: 'Under Notice Period',       value: '12',    change: '8 AMs impacted',                      trend: 'up',      status: 'warning',  icon: LogOut },
  { label: 'Unpaid Invoices',           value: '1,284', change: '₹4.26B value',                         trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Renewals Due (90d)',        value: '38',    change: 'across 12 AMs',                        trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects Pipeline',     value: '₹14.6Cr',change: '136 projects · 82 in progress',       trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Avg Team CSAT',             value: '8.2/10',change: '+0.2 MoM',                             trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Portfolio Health',      value: '72/100',change: '18 clients < 60',                      trend: 'down',   status: 'warning',  icon: HeartPulse },
]

const amheadTaskComposite = taskComposite({
  total: 15800, open: 4200, closedSla: 7800, violated: 3800,
  subtitle: 'Team-wide · 6 AMs driving 62% of violations',
})
const amheadMeetingComposite = meetingComposite({
  total: 1860, booked: 540, pending: 186, completed: 1134,
  subtitle: '186 pending meetings past SLA — bulk re-plan',
})

const amheadActions = [
  { priority: 'high',   text: '6 AMs below 75% task SLA — 1:1 reviews and reassignment plan', due: 'This week', category: 'AM Performance' },
  { priority: 'high',   text: 'Rahul Mehta — 4 at-risk clients in portfolio (health < 60), approve rescue plan', due: 'Apr 11', category: 'Escalation' },
  { priority: 'medium', text: 'Approve mod-project commercials > ₹5L for 8 pending projects', due: 'Apr 12', category: 'Approvals' },
  { priority: 'medium', text: '12 clients under notice period — coordinate with RE and Finance for exit', due: 'Apr 14', category: 'Exit Management' },
  { priority: 'low',    text: 'Quarterly AM performance review — finalize scorecard template', due: 'Apr 20', category: 'HR' },
]

const amheadTopFive = [
  {
    title: 'Top 5 Clients — Health Score',
    items: [
      { label: 'Deutsche Bank GCC — Karan',  value: '94', change: 1 },
      { label: 'Infosys BPO — Sneha',         value: '91', change: 0 },
      { label: 'HSBC GCC — Priya',            value: '89', change: 1 },
      { label: 'Morgan Stanley — Rohan',      value: '87', change: 0 },
      { label: 'Salesforce India — Aditi',    value: '86', change: 1 },
    ],
  },
  {
    title: 'Bottom 5 Clients — Health Score',
    items: [
      { label: 'XYZ Fintech — Vikram',        value: '48', change: -1 },
      { label: 'NorthStar Bank — Rahul',      value: '52', change: -1 },
      { label: 'QuantBridge Cap — Rahul',     value: '55', change: 0 },
      { label: 'GlobalMed — Anjali',          value: '57', change: -1 },
      { label: 'VectorAI Labs — Vikram',      value: '58', change: 0 },
    ],
  },
  {
    title: 'Top 5 Performing AMs',
    items: [
      { label: 'Priya Sharma — BLR',    value: '96', change: 1 },
      { label: 'Aditi Nair — HYD',      value: '93', change: 1 },
      { label: 'Sneha Iyer — PNQ',      value: '91', change: 0 },
      { label: 'Karan Patel — MUM',     value: '88', change: 1 },
      { label: 'Meera Krishnan — CHN',  value: '87', change: 0 },
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
  { key: 'outLI',       label: 'Out of LI' },
  { key: 'outstanding', label: 'Outstanding' },
  { key: 'csat',        label: 'CSAT' },
  { key: 'sla',         label: 'SLA %' },
  { key: 'perf',        label: 'Perf Score' },
  { key: 'atRisk',      label: 'Status', type: 'status' },
]

const amheadGrid = [
  { am: 'Priya Sharma',    centre: 'Whitefield',  clients: '22', outLI: '6',  outstanding: '₹42Cr', csat: '9.2', sla: '94%', perf: '96', atRisk: 'Excellent' },
  { am: 'Aditi Nair',      centre: 'HiTec City',  clients: '19', outLI: '5',  outstanding: '₹38Cr', csat: '9.0', sla: '91%', perf: '93', atRisk: 'Excellent' },
  { am: 'Sneha Iyer',      centre: 'Baner',       clients: '21', outLI: '8',  outstanding: '₹46Cr', csat: '8.8', sla: '90%', perf: '91', atRisk: 'Good' },
  { am: 'Karan Patel',     centre: 'BKC',         clients: '18', outLI: '4',  outstanding: '₹58Cr', csat: '8.6', sla: '88%', perf: '88', atRisk: 'Good' },
  { am: 'Meera Krishnan',  centre: 'Tidel Park',  clients: '16', outLI: '6',  outstanding: '₹14Cr', csat: '8.5', sla: '87%', perf: '87', atRisk: 'Good' },
  { am: 'Anjali Gupta',    centre: 'Cyber City',  clients: '17', outLI: '8',  outstanding: '₹28Cr', csat: '8.1', sla: '71%', perf: '71', atRisk: 'Monitor' },
  { am: 'Rohan Desai',     centre: 'Lower Parel', clients: '20', outLI: '10', outstanding: '₹46Cr', csat: '7.9', sla: '68%', perf: '68', atRisk: 'Monitor' },
  { am: 'Vikram Rao',      centre: 'Gachibowli',  clients: '16', outLI: '9',  outstanding: '₹32Cr', csat: '7.2', sla: '65%', perf: '62', atRisk: 'At Risk' },
  { am: 'Rahul Mehta',     centre: 'Golf Course', clients: '18', outLI: '11', outstanding: '₹48Cr', csat: '6.8', sla: '62%', perf: '58', atRisk: 'At Risk' },
]

// ─── REGIONAL HEAD ────────────────────────────────────────────────────────────
const reheadTasks = [
  { label: 'XYZ Fintech — exec meeting',              priority: 'high',   due: 'Apr 11' },
  { label: 'Approve Whitefield mod-projects (8)',     priority: 'high',   due: 'Apr 11' },
  { label: 'Deutsche renewal proposal review',        priority: 'medium', due: 'Apr 15' },
  { label: 'Region task velocity root-cause',         priority: 'medium', due: 'Apr 12' },
  { label: 'QBR deck for leadership',                 priority: 'low',    due: 'Apr 22' },
]

const reheadMetrics = [
  { label: 'Region Active Clients',     value: '118',   change: '28 centres',                          trend: 'up',      status: 'positive', icon: Building2, highlight: true },
  { label: 'Out of Lock-in',            value: '38',    change: '80 in LI · 32% unlocked',             trend: 'up',      status: 'warning',  icon: LockOpen },
  { label: 'Region Outstanding',        value: '₹182Cr',change: '₹112M overdue',                       trend: 'up',      status: 'warning',  icon: IndianRupee },
  { label: 'Unpaid Invoices',           value: '324',   change: '₹112Cr value',                         trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Under Notice Period',       value: '2',     change: 'NorthStar Bank · VectorAI',            trend: 'up',      status: 'warning',  icon: LogOut },
  { label: 'Collection Rate',           value: '18.4%', change: 'best performing region',               trend: 'up',      status: 'positive', icon: TrendingUp },
  { label: 'Avg CSAT',                  value: '8.3/10',change: '+0.3 vs prev quarter',                  trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Health Score',          value: '74/100',change: '4 clients < 60',                        trend: 'up',      status: 'positive', icon: HeartPulse },
  { label: 'Renewals Due (90d)',        value: '12',    change: '₹34Cr ARR at stake',                    trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects Pipeline',     value: '₹4.2Cr',change: '38 projects',                           trend: 'up',      status: 'positive', icon: Hammer },
]

const reheadTaskComposite = taskComposite({
  total: 3100, open: 820, closedSla: 1600, violated: 680,
  subtitle: 'Region · SLA compliance 70% · 22% violated',
})
const reheadMeetingComposite = meetingComposite({
  total: 420, booked: 128, pending: 38, completed: 254,
  subtitle: '38 pending past SLA · Whitefield leading',
})

const reheadActions = [
  { priority: 'high',   text: 'XYZ Fintech health dropped to 48 — schedule exec meeting with client & AM', due: 'Apr 11', category: 'Retention' },
  { priority: 'high',   text: 'Approve mod-project commercials for Whitefield (₹1.2Cr, 8 projects)', due: 'Apr 12', category: 'Pipeline' },
  { priority: 'medium', text: 'Review Deutsche Bank GCC renewal proposal — expires Jun 30', due: 'Apr 15', category: 'Renewal' },
  { priority: 'medium', text: 'Region tasks velocity dropped 8% WoW — investigate centre-wise', due: 'Apr 13', category: 'Operations' },
  { priority: 'low',    text: 'Quarterly business review deck due for regional leadership', due: 'Apr 22', category: 'Reporting' },
]

const reheadTopFive = [
  {
    title: 'Top 5 Clients — Health Score',
    items: [
      { label: 'Deutsche Bank GCC — BKC',    value: '94', change: 1 },
      { label: 'Infosys BPO — Baner',         value: '91', change: 0 },
      { label: 'HSBC GCC — Whitefield',       value: '89', change: 1 },
      { label: 'Morgan Stanley — Lower P.',   value: '87', change: 0 },
      { label: 'Salesforce India — ORR',      value: '86', change: 1 },
    ],
  },
  {
    title: 'Bottom 5 Clients — Health Score',
    items: [
      { label: 'XYZ Fintech — Cybercity Hyd', value: '48', change: -1 },
      { label: 'NorthStar Bank — BKC',         value: '52', change: -1 },
      { label: 'VectorAI Labs — Gachibowli',   value: '58', change: 0 },
      { label: 'GlobalMed — Kharadi',          value: '57', change: -1 },
      { label: 'QuantBridge Cap — Lower P.',   value: '55', change: 0 },
    ],
  },
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
  { key: 'outLI',       label: 'Out of LI' },
  { key: 'outstanding', label: 'Outstanding' },
  { key: 'csat',        label: 'CSAT' },
  { key: 'health',      label: 'Avg Health' },
  { key: 'renewals',    label: 'Renewals 90d' },
  { key: 'status',      label: 'Status', type: 'status' },
]

const reheadGrid = [
  { centre: 'Whitefield',      cm: 'Priya Sharma',    clients: '28', outLI: '6',  outstanding: '₹42Cr', csat: '8.6', health: '82', renewals: '4', status: 'Excellent' },
  { centre: 'Outer Ring Road', cm: 'Rajesh Kumar',    clients: '24', outLI: '8',  outstanding: '₹38Cr', csat: '8.4', health: '78', renewals: '3', status: 'Excellent' },
  { centre: 'Koramangala',     cm: 'Neha Singh',      clients: '22', outLI: '7',  outstanding: '₹32Cr', csat: '8.2', health: '76', renewals: '2', status: 'Good' },
  { centre: 'Indiranagar',     cm: 'Vikas Agarwal',   clients: '18', outLI: '6',  outstanding: '₹28Cr', csat: '8.0', health: '72', renewals: '1', status: 'Good' },
  { centre: 'MG Road',         cm: 'Deepa Menon',     clients: '14', outLI: '6',  outstanding: '₹22Cr', csat: '7.9', health: '70', renewals: '1', status: 'Monitor' },
  { centre: 'Electronic City', cm: 'Arjun Shah',      clients: '12', outLI: '5',  outstanding: '₹20Cr', csat: '7.8', health: '68', renewals: '1', status: 'Monitor' },
]

// ─── CENTRE MANAGER ───────────────────────────────────────────────────────────
const cmTasks = [
  { label: 'NorthStar Bank — retention meet',           priority: 'high',   due: 'Apr 10' },
  { label: 'Approve 3 mod-projects < ₹10L',             priority: 'high',   due: 'Apr 11' },
  { label: '6 P1 tickets joint resolution',             priority: 'high',   due: 'Today' },
  { label: 'Create Deutsche April invoice (₹62L)',      priority: 'medium', due: 'Apr 12' },
  { label: 'Issue 4 CNs for disputes (₹14.2L)',         priority: 'medium', due: 'Apr 13' },
]

const cmMetrics = [
  { label: 'Out of Lock-in',            value: '6 / 28', change: '6 can give notice · 22 in LI',     trend: 'up',      status: 'negative', icon: LockOpen, highlight: true },
  { label: 'Under Notice Period',       value: '1',      change: 'NorthStar Bank',                    trend: 'up',      status: 'warning',  icon: LogOut },
  { label: 'Unpaid Invoices',           value: '42',     change: '₹2.8Cr total value',                 trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Avg CSAT',                  value: '8.4/10', change: '2 clients < 7',                      trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Health Score',          value: '78/100', change: '1 client at-risk',                   trend: 'up',      status: 'positive', icon: HeartPulse },
  { label: 'Renewals Due (90d)',        value: '4',      change: '₹8.6Cr ARR',                         trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Mod Projects in Progress',  value: '₹1.2Cr', change: '14 projects · 8 < ₹10L',             trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Open Tickets',              value: '22',     change: '6 P1 · 10 P2 · 6 P3',                 trend: 'up',      status: 'warning',  icon: Shield },
  { label: 'Total Active Clients',      value: '28',     change: 'baseline',                            trend: 'neutral', status: 'info',     icon: Users },
  { label: 'Outstanding (Centre)',      value: '₹42Cr',  change: '₹11.2Cr overdue',                     trend: 'up',      status: 'warning',  icon: IndianRupee },
]

const cmTaskComposite = taskComposite({
  total: 842, open: 218, closedSla: 498, violated: 126,
  subtitle: 'Centre · SLA compliance 74% · 15% violated',
})
const cmMeetingComposite = meetingComposite({
  total: 96, booked: 28, pending: 12, completed: 56,
  subtitle: 'This week 62 scheduled · 4 violated SLA',
})

const cmActions = [
  { priority: 'high',   text: 'NorthStar Bank under notice — final retention meeting with AM & client CXO', due: 'Apr 10', category: 'Exit / Retention' },
  { priority: 'high',   text: 'Approve 3 mod-projects < ₹10L (fit-out refresh, HVAC upgrade, meeting-room AV)', due: 'Apr 11', category: 'Mod Projects' },
  { priority: 'high',   text: '6 P1 tickets open >24h — pull AM + tech ops for joint resolution', due: 'Today', category: 'Tickets' },
  { priority: 'medium', text: 'Create invoice for Deutsche Bank GCC April — amount ₹62L', due: 'Apr 12', category: 'Invoicing' },
  { priority: 'medium', text: 'Issue CN against 4 raised disputes — amount ₹14.2L', due: 'Apr 13', category: 'Disputes' },
  { priority: 'low',    text: 'Review top performing AM for the centre — recognition for monthly scorecard', due: 'Apr 15', category: 'Team' },
]

const cmTopFive = [
  {
    title: 'Top 5 Clients — Health Score',
    items: [
      { label: 'Deutsche Bank GCC', value: '94', change: 1 },
      { label: 'Infosys BPO',        value: '88', change: 0 },
      { label: 'HSBC GCC',           value: '86', change: 1 },
      { label: 'Accenture',          value: '82', change: 0 },
      { label: 'Capgemini',          value: '80', change: -1 },
    ],
  },
  {
    title: 'Bottom 5 Clients — Health Score',
    items: [
      { label: 'NorthStar Bank',     value: '52', change: -1 },
      { label: 'Wipro Tech',         value: '68', change: -1 },
      { label: 'TechCorp India',     value: '74', change: 0 },
      { label: 'Cognizant',          value: '76', change: 0 },
      { label: 'Capgemini',          value: '80', change: -1 },
    ],
  },
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
  { client: 'Deutsche Bank GCC', am: 'Karan Patel',    seats: '1,240', lockin: 'In LI',     csat: '9.2', health: '94', unpaid: '2',  renewal: 'Jun 2027', status: 'Excellent' },
  { client: 'Infosys BPO',       am: 'Sneha Iyer',     seats: '820',   lockin: 'In LI',     csat: '8.8', health: '88', unpaid: '4',  renewal: 'Sep 2026', status: 'Good' },
  { client: 'Accenture',         am: 'Priya Sharma',   seats: '640',   lockin: 'Out of LI', csat: '8.4', health: '82', unpaid: '6',  renewal: 'May 2026', status: 'Renewing' },
  { client: 'Cognizant',         am: 'Aditi Nair',     seats: '520',   lockin: 'In LI',     csat: '8.1', health: '76', unpaid: '3',  renewal: 'Aug 2026', status: 'Good' },
  { client: 'TechCorp India',    am: 'Meera Krishnan', seats: '380',   lockin: 'In LI',     csat: '8.0', health: '74', unpaid: '2',  renewal: 'Jan 2027', status: 'Monitor' },
  { client: 'Wipro Tech',        am: 'Rohan Desai',    seats: '320',   lockin: 'Out of LI', csat: '7.2', health: '68', unpaid: '5',  renewal: 'Jul 2026', status: 'Monitor' },
  { client: 'HSBC GCC',          am: 'Priya Sharma',   seats: '280',   lockin: 'In LI',     csat: '8.8', health: '86', unpaid: '1',  renewal: 'Oct 2026', status: 'Good' },
  { client: 'Capgemini',         am: 'Karan Patel',    seats: '220',   lockin: 'In LI',     csat: '8.2', health: '80', unpaid: '2',  renewal: 'Dec 2026', status: 'Good' },
  { client: 'NorthStar Bank',    am: 'Rahul Mehta',    seats: '180',   lockin: 'Out of LI', csat: '5.8', health: '52', unpaid: '8',  renewal: 'Notice',   status: 'At Risk' },
]

// ─── ACCOUNT MANAGER ──────────────────────────────────────────────────────────
const amTasks = [
  { label: 'Initiate Accenture renewal',            priority: 'high',   due: 'Apr 10' },
  { label: 'Create April invoices (4 clients)',     priority: 'high',   due: 'Apr 11' },
  { label: 'Schedule Wipro meeting (CSAT drop)',    priority: 'high',   due: 'Apr 10' },
  { label: 'Issue CN for Cognizant (₹4.8L)',        priority: 'medium', due: 'Apr 12' },
  { label: 'Infosys mod-project proposal',          priority: 'medium', due: 'Apr 14' },
  { label: 'Daily checklist close',                 priority: 'low',    due: 'EOD' },
]

const amMetrics = [
  { label: 'My Active Clients',        value: '22',    change: '14 in LI · 8 out of LI',             trend: 'up',      status: 'positive', icon: Users, highlight: true },
  { label: 'Out of Lock-in',           value: '8',     change: 'can give notice any time',            trend: 'up',      status: 'warning',  icon: LockOpen },
  { label: 'Under Notice Period',      value: '0',     change: 'none in exit flow',                    trend: 'neutral', status: 'positive', icon: LogOut },
  { label: 'Unpaid Invoices',          value: '12',    change: '₹84L total value',                     trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Renewals Due (90d)',       value: '3',     change: 'Accenture · HSBC · TechCorp',          trend: 'up',      status: 'warning',  icon: RefreshCw },
  { label: 'Avg CSAT (my clients)',    value: '8.6/10',change: '2 clients pending feedback',           trend: 'up',      status: 'positive', icon: Star },
  { label: 'Avg Health Score',         value: '82/100',change: '1 client < 60 (at-risk)',              trend: 'up',      status: 'positive', icon: HeartPulse },
  { label: 'My Performance Score',     value: '88/100',change: 'CSAT + SLA + collections composite',   trend: 'up',      status: 'positive', icon: Target },
  { label: 'Mod Projects (mine)',      value: '₹45L',  change: '6 projects · 4 in progress',           trend: 'up',      status: 'positive', icon: Hammer },
  { label: 'Outstanding (my book)',    value: '₹8.2Cr',change: '₹42L overdue >60d',                     trend: 'up',      status: 'warning',  icon: IndianRupee },
]

const amTaskComposite = taskComposite({
  total: 148, open: 42, closedSla: 88, violated: 18,
  subtitle: 'My book · SLA compliance 82% · 12% violated',
})
const amMeetingComposite = meetingComposite({
  total: 48, booked: 14, pending: 6, completed: 28,
  subtitle: '6 pending past SLA — schedule this week',
})

const amFunnel = {
  title: 'AM Client Workflow — Funnel View',
  stages: [
    {
      name: 'Onboard',
      count: 2,
      color: '#388bfd',
      prompts: [
        { client: 'HSBC GCC — Phase 2',    prompt: 'Schedule kick-off QBR · share onboarding checklist' },
        { client: 'TechCorp India — expansion', prompt: 'First walk-through + DQR setup' },
      ],
    },
    {
      name: 'Stabilize (0–90d)',
      count: 3,
      color: '#8b5cf6',
      prompts: [
        { client: 'Capgemini',     prompt: 'Submit first monthly report · CSAT survey' },
        { client: 'HSBC GCC',      prompt: 'Weekly cadence — 3 meets pending' },
      ],
    },
    {
      name: 'Engage (BAU)',
      count: 12,
      color: '#3fb950',
      prompts: [
        { client: 'Deutsche Bank GCC', prompt: 'Weekly sync · monthly QBR on Apr 18' },
        { client: 'Infosys BPO',       prompt: 'April invoice review pending' },
      ],
    },
    {
      name: 'Grow / Expand',
      count: 4,
      color: '#d29922',
      prompts: [
        { client: 'Accenture',  prompt: 'Mod project — meeting-room AV (₹6.2L)' },
        { client: 'Cognizant',  prompt: 'Fit-out refresh proposal (₹9.4L)' },
      ],
    },
    {
      name: 'Renew / At-Risk',
      count: 3,
      color: '#f85149',
      prompts: [
        { client: 'Accenture — renewing', prompt: 'Commercials draft — expires May 15' },
        { client: 'Wipro Tech — at-risk', prompt: 'CSAT 7.2 · book save meeting' },
      ],
    },
  ],
}

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
    title: 'Top 5 Clients — Health Score',
    items: [
      { label: 'Deutsche Bank GCC',  value: '94', change: 0 },
      { label: 'Infosys BPO',         value: '88', change: 1 },
      { label: 'HSBC GCC',            value: '86', change: 1 },
      { label: 'Accenture',           value: '82', change: 0 },
      { label: 'Capgemini',           value: '80', change: -1 },
    ],
  },
  {
    title: 'Bottom 5 Clients — Health Score',
    items: [
      { label: 'Wipro Tech',         value: '68', change: -1 },
      { label: 'TechCorp India',     value: '74', change: 0 },
      { label: 'Cognizant',          value: '76', change: 0 },
      { label: 'Capgemini',          value: '80', change: -1 },
      { label: 'Accenture',          value: '82', change: 0 },
    ],
  },
  {
    title: 'Top 3 AAMs — Most SLA Violations',
    items: [
      { label: 'Ankit Kumar — Baner',       value: '34', change: 1 },
      { label: 'Ritu Agarwal — Whitefield', value: '26', change: 1 },
      { label: 'Saurabh Pal — BKC',         value: '19', change: 0 },
    ],
  },
]

// AM charts: Line removed — keep bar (health vs CSAT) and area (outstanding ageing)
const amCharts = [
  {
    type: 'bar', title: 'My Clients — Health Score vs CSAT',
    data: [
      { name: 'Deutsche', health: 94, csat: 92 },
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
  { client: 'Deutsche Bank GCC', seats: '1,240', lockin: 'In LI',     csat: '9.2', health: '94', unpaid: '2', outstanding: '₹1.82Cr', renewal: 'Jun 2027', nextMeeting: 'Apr 18', status: 'Excellent' },
  { client: 'Infosys BPO',       seats: '820',   lockin: 'In LI',     csat: '9.0', health: '88', unpaid: '3', outstanding: '₹1.42Cr', renewal: 'Sep 2026', nextMeeting: 'Apr 15', status: 'Excellent' },
  { client: 'HSBC GCC',          seats: '280',   lockin: 'In LI',     csat: '8.8', health: '86', unpaid: '1', outstanding: '₹62L',    renewal: 'Oct 2026', nextMeeting: 'Apr 12', status: 'Good' },
  { client: 'Accenture',         seats: '640',   lockin: 'Out of LI', csat: '8.6', health: '82', unpaid: '2', outstanding: '₹1.18Cr', renewal: 'May 2026', nextMeeting: 'Apr 11', status: 'Renewing' },
  { client: 'Capgemini',         seats: '220',   lockin: 'In LI',     csat: '8.4', health: '80', unpaid: '1', outstanding: '₹48L',    renewal: 'Dec 2026', nextMeeting: 'Apr 20', status: 'Good' },
  { client: 'Cognizant',         seats: '520',   lockin: 'In LI',     csat: '8.1', health: '76', unpaid: '2', outstanding: '₹96L',    renewal: 'Aug 2026', nextMeeting: 'Apr 14', status: 'Good' },
  { client: 'TechCorp India',    seats: '380',   lockin: 'In LI',     csat: '7.9', health: '74', unpaid: '1', outstanding: '₹68L',    renewal: 'Jan 2027', nextMeeting: 'Apr 22', status: 'Monitor' },
  { client: 'Wipro Tech',        seats: '320',   lockin: 'Out of LI', csat: '7.2', health: '68', unpaid: '0', outstanding: '₹42L',    renewal: 'Jul 2026', nextMeeting: '—',      status: 'Monitor' },
]

// ─── ASSISTANT AM (AAM) ───────────────────────────────────────────────────────
const aamTasks = [
  { label: 'Complete daily walkthrough',        priority: 'high',   due: 'EOD' },
  { label: 'Create 3 incident tickets',         priority: 'high',   due: '2h' },
  { label: 'Book 3 client meetings',            priority: 'high',   due: 'Today' },
  { label: 'Raise April invoices (4)',          priority: 'medium', due: 'Apr 12' },
  { label: 'Create CNs for disputes (₹4.2L)',   priority: 'medium', due: 'Apr 11' },
]

const aamMetrics = [
  { label: 'Daily Checklist',          value: '6 / 8', change: '2 items pending',                    trend: 'up',      status: 'warning',  icon: CheckCircle2, highlight: true },
  { label: 'Incidents Open',           value: '6',     change: '2 created today',                     trend: 'up',      status: 'warning',  icon: Shield },
  { label: 'Disputes — CN Pending',    value: '3',     change: '₹4.2L total',                          trend: 'up',      status: 'warning',  icon: FileText },
  { label: 'Invoices to Create',       value: '4',     change: 'for Apr cycle',                        trend: 'up',      status: 'info',     icon: Receipt },
  { label: 'Out of Lock-in (AM book)', value: '8',     change: 'supporting AM portfolio',              trend: 'up',      status: 'warning',  icon: LockOpen },
  { label: 'Unpaid Invoices',          value: '12',    change: '₹84L value',                           trend: 'up',      status: 'warning',  icon: Receipt },
  { label: 'Under Notice Period',      value: '0',     change: 'none in exit',                         trend: 'neutral', status: 'positive', icon: LogOut },
  { label: 'Avg Client Health',        value: '82/100',change: '1 client < 60',                        trend: 'up',      status: 'positive', icon: HeartPulse },
]

const aamTaskComposite = taskComposite({
  total: 124, open: 84, closedSla: 28, violated: 12,
  subtitle: 'My task queue · 18 due in next 24h',
})
const aamMeetingComposite = meetingComposite({
  total: 22, booked: 8, pending: 6, completed: 8,
  subtitle: '6 pending past SLA — re-plan with AM',
})

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
    title: 'Top 5 Clients — Health Score',
    items: [
      { label: 'Deutsche Bank GCC',  value: '94', change: 0 },
      { label: 'Infosys BPO',         value: '88', change: 1 },
      { label: 'HSBC GCC',            value: '86', change: 1 },
      { label: 'Accenture',           value: '82', change: 0 },
      { label: 'Capgemini',           value: '80', change: -1 },
    ],
  },
  {
    title: 'Bottom 5 Clients — Health Score',
    items: [
      { label: 'Wipro Tech',         value: '68', change: -1 },
      { label: 'TechCorp India',     value: '74', change: 0 },
      { label: 'Cognizant',          value: '76', change: 0 },
      { label: 'Capgemini',          value: '80', change: -1 },
      { label: 'Accenture',          value: '82', change: 0 },
    ],
  },
]

// AAM: ONLY task velocity chart (remove others)
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
]

const aamMeetingsGrid = {
  title: 'Meetings — All / Pending / Completed',
  meetings: [
    { title: 'Weekly Sync',        client: 'Deutsche Bank GCC', date: 'Apr 12 · 11:00', type: 'Recurring',  state: 'booked' },
    { title: 'Monthly QBR',        client: 'Infosys BPO',       date: 'Apr 15 · 15:30', type: 'QBR',        state: 'booked' },
    { title: 'Kick-off',            client: 'HSBC GCC Phase 2',  date: 'Apr 12 · 10:00', type: 'Kick-off',   state: 'booked' },
    { title: 'Renewal Discussion', client: 'Accenture',         date: 'Apr 11 · 14:00', type: 'Renewal',    state: 'booked' },
    { title: 'Save Meeting',       client: 'Wipro Tech',        date: 'Apr 10 · 16:00', type: 'Escalation', state: 'pending' },
    { title: 'Dispute Review',     client: 'Cognizant',         date: 'Apr 09 · 15:00', type: 'Dispute',    state: 'pending' },
    { title: 'Incident RCA',       client: 'TechCorp India',    date: 'Apr 08 · 11:00', type: 'Incident',   state: 'pending' },
    { title: 'Weekly Sync',        client: 'Deutsche Bank GCC', date: 'Apr 05 · 11:00', type: 'Recurring',  state: 'completed' },
    { title: 'Walkthrough',        client: 'HSBC GCC',          date: 'Apr 04 · 10:00', type: 'Site Visit', state: 'completed' },
    { title: 'Weekly Sync',        client: 'Infosys BPO',       date: 'Apr 04 · 15:30', type: 'Recurring',  state: 'completed' },
    { title: 'CSAT Review',        client: 'Capgemini',         date: 'Apr 03 · 14:00', type: 'QBR',        state: 'completed' },
    { title: 'Budget Planning',    client: 'Accenture',         date: 'Apr 02 · 11:30', type: 'Commercial', state: 'completed' },
  ],
}

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
  { ref: 'DSP-0842', type: 'Dispute',   client: 'Cognizant',         category: 'CN Request',   due: 'Apr 11',    sla: '24h',       status: 'CN Pending', action: 'Create CN' },
  { ref: 'INV-9922', type: 'Invoice',   client: 'Deutsche Bank GCC', category: 'Monthly',      due: 'Apr 12',    sla: '48h',       status: 'To Create',  action: 'Create' },
  { ref: 'TSK-5521', type: 'Task',      client: 'HSBC GCC',          category: 'HVAC PM',      due: 'Apr 13',    sla: '72h',       status: 'Open',       action: 'Create' },
  { ref: 'TSK-5514', type: 'Task',      client: 'Multiple',          category: 'Housekeeping', due: 'Apr 10',    sla: '8h',        status: 'Violated',   action: 'Re-plan' },
]

// ─── NEW: AM — Task View (daily / weekly with delegate flag) ─────────────────
const amTaskView = {
  aamOptions: ['Ankit Kumar', 'Ritu Agarwal', 'Saurabh Pal'],
  daily: [
    { id: 'tv1', label: 'Initiate renewal process — Accenture (contract May 15)',    client: 'Accenture',         priority: 'high',   due: 'Today',   category: 'Renewal',        canDelegate: false },
    { id: 'tv2', label: 'Schedule save meeting — Wipro Tech (CSAT 7.2)',             client: 'Wipro Tech',        priority: 'high',   due: 'Today',   category: 'Meeting',        canDelegate: true  },
    { id: 'tv3', label: 'Create April invoices — Deutsche, Infosys, Cognizant, HSBC', client: 'Multiple',       priority: 'high',   due: 'Apr 11',  category: 'Invoicing',      canDelegate: true  },
    { id: 'tv4', label: 'Monthly QBR — prepare deck for Deutsche Bank GCC',          client: 'Deutsche Bank GCC', priority: 'medium', due: 'Apr 18',  category: 'Meeting',        canDelegate: true  },
    { id: 'tv5', label: 'Issue CN — Cognizant disputes (₹4.8L, finance approved)',   client: 'Cognizant',         priority: 'medium', due: 'Apr 12',  category: 'Dispute CN',     canDelegate: true  },
    { id: 'tv6', label: 'Daily checklist close',                                     client: '—',                 priority: 'low',    due: 'EOD',     category: 'Checklist',      canDelegate: false },
  ],
  weekly: [
    { id: 'wv1', label: 'Submit mod-project proposal — Infosys meeting-room refresh', client: 'Infosys BPO',     priority: 'medium', due: 'Apr 14',  category: 'Mod Project',    canDelegate: false },
    { id: 'wv2', label: 'Weekly sync — HSBC GCC (booked)',                            client: 'HSBC GCC',         priority: 'medium', due: 'Apr 12',  category: 'Meeting',        canDelegate: true  },
    { id: 'wv3', label: 'Follow up on Accenture commercial draft',                    client: 'Accenture',        priority: 'high',   due: 'Apr 15',  category: 'Renewal',        canDelegate: false },
    { id: 'wv4', label: 'Review Capgemini CSAT feedback — action response email',     client: 'Capgemini',        priority: 'low',    due: 'Apr 16',  category: 'CSAT',           canDelegate: true  },
    { id: 'wv5', label: 'Close 6 violated task SLAs — bulk plan with AAM',            client: 'Multiple',         priority: 'medium', due: 'Apr 13',  category: 'SLA Review',     canDelegate: true  },
    { id: 'wv6', label: 'CSAT survey follow-up — 2 clients pending response',         client: 'Multiple',         priority: 'low',    due: 'Apr 17',  category: 'CSAT',           canDelegate: true  },
  ],
}

// AM — modal data keyed by metric label
const amMetricModals = {
  'My Active Clients': {
    title: 'My Active Clients — All 22',
    subtitle: '14 in lock-in · 8 out of lock-in',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Deutsche Bank GCC', location: 'BKC',       am: 'Self', seats: '1,240', health: '94', lockin: 'In LI',     status: 'Excellent' },
        { name: 'Infosys BPO',       location: 'Baner',     am: 'Self', seats: '820',   health: '88', lockin: 'In LI',     status: 'Excellent' },
        { name: 'HSBC GCC',          location: 'Whitefield',am: 'Self', seats: '280',   health: '86', lockin: 'In LI',     status: 'Good' },
        { name: 'Accenture',         location: 'ORR',       am: 'Self', seats: '640',   health: '82', lockin: 'Out of LI', status: 'Renewing' },
        { name: 'Capgemini',         location: 'Whitefield',am: 'Self', seats: '220',   health: '80', lockin: 'In LI',     status: 'Good' },
        { name: 'Cognizant',         location: 'ORR',       am: 'Self', seats: '520',   health: '76', lockin: 'In LI',     status: 'Good' },
        { name: 'TechCorp India',    location: 'ORR',       am: 'Self', seats: '380',   health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Wipro Tech',        location: 'Whitefield',am: 'Self', seats: '320',   health: '68', lockin: 'Out of LI', status: 'Monitor' },
      ],
    },
  },
  'Out of Lock-in': {
    title: 'Out of Lock-in Clients — 8',
    subtitle: 'These clients can serve notice at any time — prioritise engagement',
    type: 'clientList',
    data: {
      note: '⚠ Clients out of lock-in can exit with standard notice. Immediate engagement recommended.',
      actions: ['delegate'],
      aamOptions: ['Ankit Kumar', 'Ritu Agarwal', 'Saurabh Pal'],
      clients: [
        { name: 'Accenture',    location: 'ORR',       seats: '640', health: '82', lockin: 'Out since Mar 2026', status: 'Renewing' },
        { name: 'Wipro Tech',   location: 'Whitefield',seats: '320', health: '68', lockin: 'Out since Jan 2026', status: 'Monitor'  },
        { name: 'GlobalTech',   location: 'BKC',       seats: '180', health: '72', lockin: 'Out since Feb 2026', status: 'Monitor'  },
        { name: 'NovaCorp',     location: 'Kharadi',   seats: '120', health: '74', lockin: 'Out since Apr 2026', status: 'Good'     },
        { name: 'AlphaFinance', location: 'ORR',       seats: '200', health: '71', lockin: 'Out since Mar 2026', status: 'Monitor'  },
        { name: 'TechVision',   location: 'Baner',     seats: '160', health: '75', lockin: 'Out since Apr 2026', status: 'Good'     },
        { name: 'DataBridge',   location: 'Whitefield',seats: '140', health: '69', lockin: 'Out since Feb 2026', status: 'Monitor'  },
        { name: 'CloudSystems', location: 'ORR',       seats: '110', health: '73', lockin: 'Out since Mar 2026', status: 'Good'     },
      ],
    },
  },
  'Unpaid Invoices': {
    title: 'Unpaid Invoices — My Book',
    subtitle: '12 invoices · ₹84L total outstanding',
    type: 'invoiceList',
    data: {
      invoices: [
        { id: 'INV-001', client: 'Infosys BPO',       invoiceNo: 'INF-APR-001', category: 'Monthly',      amount: '₹18.2L', dueDate: '20 Mar', overdueDays: 26 },
        { id: 'INV-002', client: 'Cognizant',          invoiceNo: 'COG-MAR-002', category: 'Monthly',      amount: '₹12.4L', dueDate: '25 Mar', overdueDays: 21 },
        { id: 'INV-003', client: 'Accenture',          invoiceNo: 'ACC-APR-001', category: 'Monthly',      amount: '₹9.8L',  dueDate: '01 Apr', overdueDays: 14 },
        { id: 'INV-004', client: 'Wipro Tech',         invoiceNo: 'WIP-MAR-003', category: 'VAS',          amount: '₹6.4L',  dueDate: '28 Mar', overdueDays: 18 },
        { id: 'INV-005', client: 'TechCorp India',     invoiceNo: 'TCI-APR-002', category: 'Monthly',      amount: '₹5.8L',  dueDate: '05 Apr', overdueDays: 10 },
        { id: 'INV-006', client: 'Capgemini',          invoiceNo: 'CAP-APR-001', category: 'Mod Project',  amount: '₹4.2L',  dueDate: '10 Apr', overdueDays: 3  },
        { id: 'INV-007', client: 'Deutsche Bank GCC',  invoiceNo: 'DBG-APR-001', category: 'Monthly',      amount: '₹16.4L', dueDate: '15 Apr', overdueDays: 0  },
        { id: 'INV-008', client: 'HSBC GCC',           invoiceNo: 'HSB-APR-001', category: 'Monthly',      amount: '₹7.8L',  dueDate: '15 Apr', overdueDays: 0  },
      ],
    },
  },
  'Renewals Due (90d)': {
    title: 'Renewals Due — Next 90 Days',
    subtitle: '3 accounts · ₹8.2Cr ARR at stake',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Accenture',    location: 'ORR',       seats: '640', health: '82', lockin: 'Out of LI', status: 'Renewing',  unpaid: '2 invoices pending' },
        { name: 'HSBC GCC',     location: 'Whitefield',seats: '280', health: '86', lockin: 'In LI',     status: 'Good',      unpaid: '1 invoice pending'  },
        { name: 'TechCorp India',location: 'ORR',      seats: '380', health: '74', lockin: 'In LI',     status: 'Monitor',   unpaid: '1 invoice pending'  },
      ],
    },
  },
  'Open Tickets (my clients)': {
    title: 'Open Tickets — My Client Portfolio',
    subtitle: 'Requires cross-collaboration with tech ops',
    type: 'ticketList',
    data: {
      tickets: [
        { id: 'TKT-4421', title: 'HVAC failure — floor 3', client: 'Deutsche Bank GCC', category: 'HVAC',       priority: 1, openDays: 1,  slaStatus: 'At Risk',   assignee: 'Tech Ops' },
        { id: 'TKT-4418', title: 'Lift outage',             client: 'Infosys BPO',       category: 'Mechanical', priority: 1, openDays: 2,  slaStatus: 'Breached',  assignee: 'Facilities' },
        { id: 'TKT-4410', title: 'WiFi drop — east wing',   client: 'Accenture',         category: 'IT/Network', priority: 2, openDays: 3,  slaStatus: 'Breached',  assignee: 'IT Ops' },
        { id: 'TKT-4402', title: 'Housekeeping complaint',  client: 'Wipro Tech',        category: 'FM',         priority: 2, openDays: 4,  slaStatus: 'Within SLA', assignee: 'FM Team' },
        { id: 'TKT-4398', title: 'Parking allocation issue',client: 'Cognizant',         category: 'Admin',      priority: 3, openDays: 5,  slaStatus: 'Within SLA', assignee: 'Admin' },
      ],
    },
  },
}

// ─── NEW: CM — Top unpaid invoices (by value, top 3) ─────────────────────────
const cmTopInvoices = [
  { id: 'INV-C001', client: 'NorthStar Bank',    invoiceNo: 'NSB-MAR-008', category: 'Monthly',     amount: '₹24.6L', dueDate: '15 Mar', overdueDays: 31 },
  { id: 'INV-C002', client: 'Wipro Tech',         invoiceNo: 'WIP-APR-002', category: 'Monthly + VAS',amount: '₹18.4L', dueDate: '25 Mar', overdueDays: 21 },
  { id: 'INV-C003', client: 'Accenture',          invoiceNo: 'ACC-APR-001', category: 'Monthly',     amount: '₹14.8L', dueDate: '01 Apr', overdueDays: 14 },
]

// ─── NEW: CM — Disputes ───────────────────────────────────────────────────────
const cmDisputes = [
  {
    id: 'DSP-0841', client: 'Cognizant',      category: 'Service Quality',  amount: '₹4.8L',  raised: 'Apr 08', overdueDays: 7,
    status: 'Under Review', am: 'Aditi Nair', financeApproved: false,
    description: 'Client raised dispute on HVAC downtime (14h) impacting 520 seats on Apr 6–7. Requesting credit for 2 days.',
  },
  {
    id: 'DSP-0837', client: 'Wipro Tech',     category: 'Billing Error',    amount: '₹3.2L',  raised: 'Apr 05', overdueDays: 10,
    status: 'Approved', am: 'Rohan Desai', financeApproved: true,
    description: 'Duplicate charge raised on VAS invoice (wifi premium). Finance confirmed billing error. CN to be issued.',
  },
  {
    id: 'DSP-0829', client: 'TechCorp India', category: 'SLA Breach',       amount: '₹2.4L',  raised: 'Apr 02', overdueDays: 13,
    status: 'CN Issued', am: 'Meera Krishnan', financeApproved: true,
    clientNotified: true,
    description: 'P1 ticket resolution took 38h vs 4h SLA. Credit note issued per SLA penalty clause. Client notified.',
  },
  {
    id: 'DSP-0818', client: 'Infosys BPO',   category: 'Mod Project Delay', amount: '₹5.8L',  raised: 'Mar 28', overdueDays: 18,
    status: 'CN Pending', am: 'Sneha Iyer', financeApproved: false,
    description: 'Cafeteria renovation delayed by 12 days. Client claiming penalty per contract clause 8.4. Awaiting legal review.',
  },
]

// CM — modal data keyed by metric label
const cmMetricModals = {
  'Out of Lock-in': {
    title: 'Out of Lock-in Clients — 6 of 28',
    subtitle: 'These clients can serve notice. Immediate retention action recommended.',
    type: 'clientList',
    data: {
      note: '⚠ 6 clients are outside lock-in period and can exit with 30-day notice.',
      actions: ['delegate'],
      aamOptions: ['Ankit Kumar', 'Ritu Agarwal', 'Saurabh Pal'],
      clients: [
        { name: 'Accenture',    location: 'ORR',       am: 'Priya Sharma',   seats: '640', health: '82', lockin: 'Out since Mar 2026', status: 'Renewing' },
        { name: 'Wipro Tech',   location: 'Whitefield',am: 'Rohan Desai',    seats: '320', health: '68', lockin: 'Out since Jan 2026', status: 'Monitor'  },
        { name: 'GlobalTech',   location: 'BKC',       am: 'Priya Sharma',   seats: '180', health: '72', lockin: 'Out since Feb 2026', status: 'Monitor'  },
        { name: 'NovaCorp',     location: 'Kharadi',   am: 'Aditi Nair',     seats: '120', health: '74', lockin: 'Out since Apr 2026', status: 'Good'     },
        { name: 'AlphaFinance', location: 'ORR',       am: 'Karan Patel',    seats: '200', health: '71', lockin: 'Out since Mar 2026', status: 'Monitor'  },
        { name: 'TechVision',   location: 'Baner',     am: 'Sneha Iyer',     seats: '160', health: '75', lockin: 'Out since Apr 2026', status: 'Good'     },
      ],
    },
  },
  'Under Notice Period': {
    title: 'Clients Under Notice Period',
    subtitle: '1 client in active exit process',
    type: 'clientList',
    data: {
      note: '⛔ Client has served notice. Coordinate exit checklist with operations and AM.',
      actions: ['delegate'],
      aamOptions: ['Ankit Kumar', 'Ritu Agarwal', 'Saurabh Pal'],
      clients: [
        { name: 'NorthStar Bank', location: 'BKC', am: 'Rahul Mehta', seats: '180', health: '52', lockin: 'Notice served Apr 01', daysNoticed: 14, status: 'Notice' },
      ],
    },
  },
  'Unpaid Invoices': {
    title: 'All Unpaid Invoices — This Centre',
    subtitle: '42 invoices · ₹2.8Cr outstanding',
    type: 'invoiceList',
    data: {
      invoices: [
        { id: 'C-INV-001', client: 'NorthStar Bank',    invoiceNo: 'NSB-MAR-008', category: 'Monthly',       amount: '₹24.6L', dueDate: '15 Mar', overdueDays: 31 },
        { id: 'C-INV-002', client: 'Wipro Tech',         invoiceNo: 'WIP-APR-002', category: 'Monthly + VAS', amount: '₹18.4L', dueDate: '25 Mar', overdueDays: 21 },
        { id: 'C-INV-003', client: 'Accenture',          invoiceNo: 'ACC-APR-001', category: 'Monthly',       amount: '₹14.8L', dueDate: '01 Apr', overdueDays: 14 },
        { id: 'C-INV-004', client: 'Cognizant',          invoiceNo: 'COG-APR-003', category: 'Monthly',       amount: '₹11.2L', dueDate: '05 Apr', overdueDays: 10 },
        { id: 'C-INV-005', client: 'TechCorp India',     invoiceNo: 'TCI-APR-002', category: 'VAS',           amount: '₹8.6L',  dueDate: '08 Apr', overdueDays: 7  },
        { id: 'C-INV-006', client: 'Infosys BPO',        invoiceNo: 'INF-APR-003', category: 'Mod Project',   amount: '₹7.4L',  dueDate: '10 Apr', overdueDays: 5  },
        { id: 'C-INV-007', client: 'Deutsche Bank GCC',  invoiceNo: 'DBG-APR-001', category: 'Monthly',       amount: '₹16.4L', dueDate: '15 Apr', overdueDays: 0  },
        { id: 'C-INV-008', client: 'HSBC GCC',           invoiceNo: 'HSB-APR-001', category: 'Monthly',       amount: '₹7.8L',  dueDate: '15 Apr', overdueDays: 0  },
      ],
    },
  },
  'Total Active Clients': {
    title: 'All Active Clients — This Centre',
    subtitle: '28 clients across all AMs',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Deutsche Bank GCC', am: 'Karan Patel',    seats: '1,240', health: '94', lockin: 'In LI',     status: 'Excellent' },
        { name: 'Infosys BPO',       am: 'Sneha Iyer',     seats: '820',   health: '88', lockin: 'In LI',     status: 'Excellent' },
        { name: 'HSBC GCC',          am: 'Priya Sharma',   seats: '280',   health: '86', lockin: 'In LI',     status: 'Good' },
        { name: 'Accenture',         am: 'Priya Sharma',   seats: '640',   health: '82', lockin: 'Out of LI', status: 'Renewing' },
        { name: 'Capgemini',         am: 'Karan Patel',    seats: '220',   health: '80', lockin: 'In LI',     status: 'Good' },
        { name: 'Cognizant',         am: 'Aditi Nair',     seats: '520',   health: '76', lockin: 'In LI',     status: 'Good' },
        { name: 'TechCorp India',    am: 'Meera Krishnan', seats: '380',   health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Wipro Tech',        am: 'Rohan Desai',    seats: '320',   health: '68', lockin: 'Out of LI', status: 'Monitor' },
        { name: 'NorthStar Bank',    am: 'Rahul Mehta',    seats: '180',   health: '52', lockin: 'Out of LI', status: 'At Risk' },
      ],
    },
  },
  'Open Tickets': {
    title: 'Open Tickets — This Centre',
    subtitle: '22 tickets · 6 P1 · 10 P2 · 6 P3',
    type: 'ticketList',
    data: {
      tickets: [
        { id: 'TKT-4421', title: 'HVAC failure — floor 3',       client: 'Deutsche Bank GCC', category: 'HVAC',       priority: 1, openDays: 1,  slaStatus: 'At Risk',    assignee: 'Tech Ops' },
        { id: 'TKT-4418', title: 'Lift outage — main bank',      client: 'Infosys BPO',       category: 'Mechanical', priority: 1, openDays: 2,  slaStatus: 'Breached',   assignee: 'Facilities' },
        { id: 'TKT-4410', title: 'WiFi drop — east wing',        client: 'Accenture',         category: 'IT/Network', priority: 1, openDays: 3,  slaStatus: 'Breached',   assignee: 'IT Ops' },
        { id: 'TKT-4405', title: 'Chiller unit trip',            client: 'NorthStar Bank',    category: 'HVAC',       priority: 1, openDays: 4,  slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'TKT-4401', title: 'Security access card failure', client: 'Wipro Tech',        category: 'Security',   priority: 1, openDays: 2,  slaStatus: 'At Risk',    assignee: 'Security' },
        { id: 'TKT-4398', title: 'Housekeeping complaint',       client: 'Cognizant',         category: 'FM',         priority: 2, openDays: 5,  slaStatus: 'Within SLA', assignee: 'FM Team' },
        { id: 'TKT-4392', title: 'Parking allocation issue',     client: 'TechCorp India',    category: 'Admin',      priority: 2, openDays: 6,  slaStatus: 'Within SLA', assignee: 'Admin' },
      ],
    },
  },
  'Renewals Due (90d)': {
    title: 'Renewals Due — Next 90 Days',
    subtitle: '4 accounts · ₹8.6Cr ARR',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Accenture',     am: 'Priya Sharma',   seats: '640', health: '82', lockin: 'Out of LI', status: 'Renewing',  unpaid: '2 invoices pending' },
        { name: 'Wipro Tech',    am: 'Rohan Desai',    seats: '320', health: '68', lockin: 'Out of LI', status: 'Monitor',   unpaid: '5 invoices pending' },
        { name: 'HSBC GCC',      am: 'Priya Sharma',   seats: '280', health: '86', lockin: 'In LI',     status: 'Good',      unpaid: '1 invoice pending'  },
        { name: 'TechCorp India',am: 'Meera Krishnan', seats: '380', health: '74', lockin: 'In LI',     status: 'Monitor',   unpaid: '2 invoices pending' },
      ],
    },
  },
}

// CM — updated metrics with modal data merged
const cmMetricsWithModals = cmMetrics.map(m => ({
  ...m,
  ...(cmMetricModals[m.label] ? { modal: cmMetricModals[m.label] } : {}),
}))

// AM — updated metrics with modal data merged
const amMetricsWithModals = amMetrics.map(m => ({
  ...m,
  ...(amMetricModals[m.label] ? { modal: amMetricModals[m.label] } : {}),
}))

// ─── NEW: AM — filtered actions (remove incidents open, disputes/CN — those are AAM/CM level) ──
const amActionsFiltered = amActions.filter(a => !['Dispute', 'Checklist'].includes(a.category))

// ─── NEW: Regional Head — Centre KPI Cards ────────────────────────────────────
const reheadCentreCards = [
  {
    name: 'Whitefield',
    location: 'Bengaluru',
    cm: 'Priya Sharma',
    status: 'excellent',
    sparkline: [72, 74, 76, 77, 78, 80, 82],
    metrics: [
      { label: 'Active Clients', value: '28', status: 'info', modal: { title: 'Whitefield — Active Clients', type: 'clientList', data: { clients: [{ name: 'Deutsche Bank GCC', am: 'Karan Patel', seats: '1,240', health: '94', lockin: 'In LI', status: 'Excellent' }, { name: 'Infosys BPO', am: 'Sneha Iyer', seats: '820', health: '88', lockin: 'In LI', status: 'Excellent' }, { name: 'HSBC GCC', am: 'Priya Sharma', seats: '280', health: '86', lockin: 'In LI', status: 'Good' }] } } },
      { label: 'Out of Lock-in', value: '6', status: 'warning', highlighted: true, modal: { title: 'Whitefield — Out of Lock-in', subtitle: '6 clients can give notice · Retention risk', type: 'clientList', data: { note: '⚠ These clients are outside lock-in period.', clients: [{ name: 'Accenture', am: 'Priya Sharma', seats: '640', health: '82', lockin: 'Out of LI', status: 'Renewing' }, { name: 'Wipro Tech', am: 'Rohan Desai', seats: '320', health: '68', lockin: 'Out of LI', status: 'Monitor' }] } } },
      { label: 'Under Notice', value: '1', status: 'negative', modal: { title: 'Whitefield — Under Notice', type: 'clientList', data: { clients: [{ name: 'NorthStar Bank', am: 'Rahul Mehta', seats: '180', health: '52', lockin: 'Notice served', daysNoticed: 14, status: 'Notice' }] } } },
      { label: 'Unpaid Inv.', value: '42 · ₹2.8Cr', status: 'warning', modal: { title: 'Whitefield — Unpaid Invoices', type: 'invoiceList', data: { invoices: [{ id: 'W-INV-001', client: 'NorthStar Bank', invoiceNo: 'NSB-MAR-008', category: 'Monthly', amount: '₹24.6L', dueDate: '15 Mar', overdueDays: 31 }, { id: 'W-INV-002', client: 'Wipro Tech', invoiceNo: 'WIP-APR-002', category: 'Monthly + VAS', amount: '₹18.4L', dueDate: '25 Mar', overdueDays: 21 }] } } },
      { label: 'Renewals 90d', value: '4', status: 'warning' },
      { label: 'Avg CSAT', value: '8.4', status: 'positive' },
      { label: 'Avg Health', value: '78', status: 'positive' },
      { label: 'Open Tickets', value: '22 · 6 P1', status: 'warning', modal: { title: 'Whitefield — Open Tickets', type: 'ticketList', data: { tickets: [{ id: 'TKT-4421', title: 'HVAC failure', client: 'Deutsche Bank GCC', category: 'HVAC', priority: 1, openDays: 1, slaStatus: 'At Risk', assignee: 'Tech Ops' }, { id: 'TKT-4418', title: 'Lift outage', client: 'Infosys BPO', category: 'Mechanical', priority: 1, openDays: 2, slaStatus: 'Breached', assignee: 'Facilities' }] } } },
    ],
  },
  {
    name: 'Outer Ring Road',
    location: 'Bengaluru',
    cm: 'Rajesh Kumar',
    status: 'good',
    sparkline: [70, 71, 73, 75, 76, 77, 78],
    metrics: [
      { label: 'Active Clients', value: '24', status: 'info' },
      { label: 'Out of Lock-in', value: '8', status: 'warning', highlighted: true, modal: { title: 'ORR — Out of Lock-in', type: 'clientList', data: { note: '⚠ 8 clients outside lock-in.', clients: [{ name: 'Accenture ORR', am: 'Priya Sharma', seats: '420', health: '78', lockin: 'Out of LI', status: 'Good' }, { name: 'GlobalTech', am: 'Vikram Rao', seats: '280', health: '72', lockin: 'Out of LI', status: 'Monitor' }] } } },
      { label: 'Under Notice', value: '0', status: 'positive' },
      { label: 'Unpaid Inv.', value: '38 · ₹2.4Cr', status: 'warning' },
      { label: 'Renewals 90d', value: '3', status: 'warning' },
      { label: 'Avg CSAT', value: '8.2', status: 'positive' },
      { label: 'Avg Health', value: '76', status: 'positive' },
      { label: 'Open Tickets', value: '18 · 4 P1', status: 'warning' },
    ],
  },
  {
    name: 'Koramangala',
    location: 'Bengaluru',
    cm: 'Neha Singh',
    status: 'good',
    sparkline: [68, 70, 72, 73, 74, 75, 76],
    metrics: [
      { label: 'Active Clients', value: '22', status: 'info' },
      { label: 'Out of Lock-in', value: '7', status: 'warning', highlighted: true },
      { label: 'Under Notice', value: '0', status: 'positive' },
      { label: 'Unpaid Inv.', value: '28 · ₹1.8Cr', status: 'warning' },
      { label: 'Renewals 90d', value: '2', status: 'info' },
      { label: 'Avg CSAT', value: '8.0', status: 'positive' },
      { label: 'Avg Health', value: '74', status: 'positive' },
      { label: 'Open Tickets', value: '14 · 3 P1', status: 'warning' },
    ],
  },
  {
    name: 'Indiranagar',
    location: 'Bengaluru',
    cm: 'Vikas Agarwal',
    status: 'monitor',
    sparkline: [65, 66, 68, 69, 70, 71, 72],
    metrics: [
      { label: 'Active Clients', value: '18', status: 'info' },
      { label: 'Out of Lock-in', value: '6', status: 'warning', highlighted: true },
      { label: 'Under Notice', value: '1', status: 'negative' },
      { label: 'Unpaid Inv.', value: '24 · ₹1.6Cr', status: 'warning' },
      { label: 'Renewals 90d', value: '1', status: 'info' },
      { label: 'Avg CSAT', value: '7.8', status: 'warning' },
      { label: 'Avg Health', value: '70', status: 'warning' },
      { label: 'Open Tickets', value: '11 · 2 P1', status: 'info' },
    ],
  },
  {
    name: 'MG Road',
    location: 'Bengaluru',
    cm: 'Deepa Menon',
    status: 'monitor',
    sparkline: [62, 63, 65, 66, 68, 69, 70],
    metrics: [
      { label: 'Active Clients', value: '14', status: 'info' },
      { label: 'Out of Lock-in', value: '6', status: 'negative', highlighted: true },
      { label: 'Under Notice', value: '1', status: 'negative' },
      { label: 'Unpaid Inv.', value: '20 · ₹1.4Cr', status: 'negative' },
      { label: 'Renewals 90d', value: '1', status: 'info' },
      { label: 'Avg CSAT', value: '7.6', status: 'warning' },
      { label: 'Avg Health', value: '68', status: 'warning' },
      { label: 'Open Tickets', value: '9 · 2 P1', status: 'info' },
    ],
  },
  {
    name: 'Electronic City',
    location: 'Bengaluru',
    cm: 'Arjun Shah',
    status: 'monitor',
    sparkline: [60, 62, 63, 64, 65, 67, 68],
    metrics: [
      { label: 'Active Clients', value: '12', status: 'info' },
      { label: 'Out of Lock-in', value: '5', status: 'negative', highlighted: true },
      { label: 'Under Notice', value: '0', status: 'positive' },
      { label: 'Unpaid Inv.', value: '16 · ₹1.1Cr', status: 'warning' },
      { label: 'Renewals 90d', value: '1', status: 'info' },
      { label: 'Avg CSAT', value: '7.5', status: 'warning' },
      { label: 'Avg Health', value: '66', status: 'warning' },
      { label: 'Open Tickets', value: '7 · 1 P1', status: 'info' },
    ],
  },
]

// Rehead — insight-focused charts (replace AM-specific metrics)
const reheadInsightCharts = [
  {
    type: 'line', title: 'Portfolio Health Score Trend by Centre — Last 6 Months',
    data: [
      { name: 'Oct', Whitefield: 72, ORR: 70, Koramangala: 68, Indiranagar: 65, 'MG Road': 62 },
      { name: 'Nov', Whitefield: 74, ORR: 71, Koramangala: 70, Indiranagar: 66, 'MG Road': 63 },
      { name: 'Dec', Whitefield: 76, ORR: 73, Koramangala: 72, Indiranagar: 68, 'MG Road': 65 },
      { name: 'Jan', Whitefield: 77, ORR: 75, Koramangala: 73, Indiranagar: 69, 'MG Road': 66 },
      { name: 'Feb', Whitefield: 78, ORR: 76, Koramangala: 74, Indiranagar: 70, 'MG Road': 68 },
      { name: 'Mar', Whitefield: 82, ORR: 78, Koramangala: 76, Indiranagar: 72, 'MG Road': 70 },
    ],
    lines: [
      { key: 'Whitefield',  color: '#3fb950' }, { key: 'ORR', color: '#388bfd' },
      { key: 'Koramangala', color: '#8b5cf6' }, { key: 'Indiranagar', color: '#d29922' },
      { key: 'MG Road',     color: '#f85149' },
    ],
  },
  {
    type: 'bar', title: 'Out of Lock-in vs Under Notice — By Centre',
    data: [
      { name: 'Whitefield',  outLI: 6, notice: 1 },
      { name: 'ORR',         outLI: 8, notice: 0 },
      { name: 'Koramangala', outLI: 7, notice: 0 },
      { name: 'Indiranagar', outLI: 6, notice: 1 },
      { name: 'MG Road',     outLI: 6, notice: 1 },
      { name: 'E-City',      outLI: 5, notice: 0 },
    ],
    lines: [{ key: 'outLI', color: '#d29922' }, { key: 'notice', color: '#f85149' }],
  },
  {
    type: 'area', title: 'Average CSAT Trend — Region (with decline tracking)',
    data: [
      { name: 'Oct', csat: 8.1, target: 8.5 },
      { name: 'Nov', csat: 8.2, target: 8.5 },
      { name: 'Dec', csat: 8.3, target: 8.5 },
      { name: 'Jan', csat: 8.2, target: 8.5 },
      { name: 'Feb', csat: 8.1, target: 8.5 },
      { name: 'Mar', csat: 8.3, target: 8.5 },
    ],
    lines: [{ key: 'csat', color: '#f97316' }, { key: 'target', color: '#8b949e' }],
  },
]

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const nexusAMData = {
  mgmt: {
    compositeNote,
    tasksList: mgmtTasks,
    tasksTitle: 'Leadership — priority tasks this week',
    taskComposite: mgmtTaskComposite,
    meetingComposite: mgmtMeetingComposite,
    metrics: mgmtMetrics,
    actions: mgmtActions,
    topFive: mgmtTopFive,
    charts: mgmtCharts,
    columns: mgmtColumns,
    grid: mgmtGrid,
    gridTitle: 'Regional Portfolio Summary',
  },
  amhead: {
    compositeNote,
    tasksList: amheadTasks,
    tasksTitle: 'AM Head — tasks this week',
    taskComposite: amheadTaskComposite,
    meetingComposite: amheadMeetingComposite,
    metrics: amheadMetrics,
    actions: amheadActions,
    topFive: amheadTopFive,
    charts: amheadCharts,
    columns: amheadColumns,
    grid: amheadGrid,
    gridTitle: 'AM Performance Scorecard',
  },
  rehead: {
    compositeNote,
    tasksList: reheadTasks,
    tasksTitle: 'Regional Head — priority decisions this week',
    // centreCards replaces metric row — rich per-centre KPI cards
    centreCards: reheadCentreCards,
    // Keep composites at portfolio level
    taskComposite: reheadTaskComposite,
    meetingComposite: reheadMeetingComposite,
    // Insight charts (health trend, out-of-LI by centre, CSAT decline)
    charts: reheadInsightCharts,
    // TopFive: client health + pending settlements (remove AM-specific lists)
    topFive: [reheadTopFive[0], reheadTopFive[1], reheadTopFive[2]],
    // Grid: centre overview (unchanged)
    columns: reheadColumns,
    grid: reheadGrid,
    gridTitle: 'Regional Centre Performance',
    // No AM-specific actions — rehead is insight/decision-making
    actions: reheadActions,
    actionsTitle: 'Regional Insights & Decisions',
  },
  cm: {
    compositeNote,
    tasksList: cmTasks,
    tasksTitle: 'Centre Manager — tasks this week',
    taskComposite: cmTaskComposite,
    meetingComposite: cmMeetingComposite,
    // Metrics with clickable modal data merged
    metrics: cmMetricsWithModals,
    // Top 3 unpaid invoices alert panel
    topInvoices: cmTopInvoices,
    invoicesPageLink: true,
    // Dispute management panel
    disputes: cmDisputes,
    // Actions — CM level (includes tickets, mod projects, invoicing)
    actions: cmActions,
    actionsTitle: 'Priority Actions — This Centre',
    topFive: cmTopFive,
    charts: cmCharts,
    columns: cmColumns,
    grid: cmGrid,
    gridTitle: 'Centre Client Book',
  },
  am: {
    compositeNote,
    tasksList: amTasks,
    tasksTitle: 'Account Manager — tasks this week',
    taskComposite: amTaskComposite,
    meetingComposite: amMeetingComposite,
    // Metrics with clickable modal data
    metrics: amMetricsWithModals,
    // Collapsible KPI section
    collapsibleMetrics: true,
    // Actions at top (AM workflow priority)
    actionsFirst: true,
    // Task management daily/weekly with AAM delegation
    taskView: amTaskView,
    funnel: amFunnel,
    // Filtered actions — incidents/disputes handled by AAM/CM
    actions: amActionsFiltered,
    actionsTitle: 'Action Required',
    topFive: amTopFive,
    charts: amCharts,
    columns: amColumns,
    grid: amGrid,
    gridTitle: 'My Client Book — Account Summary',
  },
  aam: {
    compositeNote,
    tasksList: aamTasks,
    tasksTitle: 'Assistant AM — tasks for shift',
    taskComposite: aamTaskComposite,
    meetingComposite: aamMeetingComposite,
    metrics: aamMetrics,
    actions: aamActions,
    topFive: aamTopFive,
    charts: aamCharts,
    meetingsGrid: aamMeetingsGrid,
    columns: aamColumns,
    grid: aamGrid,
    gridTitle: "Today's Task & Action Queue",
  },
}
