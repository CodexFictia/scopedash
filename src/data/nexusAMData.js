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
  { id: 'gre',     label: 'GRE' },
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
  { priority: 'high',   text: 'Collection rate 15.13% vs 30% target — investigate zone-wise breakdown. Is underperformance concentrated in specific AMs or regions?', due: 'Immediate', category: 'Anomaly: Collections' },
  { priority: 'high',   text: '163 clients out of lock-in (36% portfolio) — North zone highest risk. Request retention heat-map and AM-wise out-of-LI exposure from AM Head', due: 'This week', category: 'Anomaly: Retention' },
  { priority: 'high',   text: '12 clients under notice — ₹42Cr ARR. Verify AM Head has save-plan in place for each. Flag any missing coverage to regional leads', due: 'Apr 12', category: 'Anomaly: Exit Pipeline' },
  { priority: 'medium', text: '18 clients with health < 60 — investigate whether drop is systemic (infra/service) or relational (AM churn). Pull zone-level incident + CSAT correlation', due: 'Apr 15', category: 'Anomaly: Health Decline' },
  { priority: 'medium', text: '3,800 SLA violations across portfolio — analyse zone-wise and AM-wise concentration. Is the same AM driving violations across accounts?', due: 'Apr 15', category: 'Anomaly: SLA Breach' },
  { priority: 'low',    text: '₹4.26B unpaid — pull ageing concentration: is >60d overdue isolated to specific zones/AMs or portfolio-wide? Identify systemic billing gaps', due: 'Apr 20', category: 'Anomaly: Ageing Invoices' },
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

// ─── AM HEAD — task/meeting modal hierarchy + items ───────────────────────────
const amheadHierarchy = {
  zones: ['South', 'North', 'West', 'East'],
  cities: {
    South: ['Bengaluru', 'Hyderabad', 'Chennai'],
    North: ['Delhi', 'Gurgaon', 'Noida'],
    West:  ['Mumbai', 'Pune'],
    East:  ['Kolkata'],
  },
  centres: {
    Bengaluru:  ['Whitefield', 'ORR', 'Koramangala', 'Electronic City'],
    Hyderabad:  ['HiTec City', 'Gachibowli', 'Cyber City'],
    Chennai:    ['Tidel Park', 'OMR Hub'],
    Delhi:      ['Connaught Place', 'Aerocity'],
    Gurgaon:    ['Golf Course', 'Cyber City Gurgaon'],
    Noida:      ['Sector 62', 'Noida One'],
    Mumbai:     ['BKC', 'Lower Parel', 'Andheri'],
    Pune:       ['Baner', 'Kharadi'],
    Kolkata:    ['Salt Lake', 'New Town'],
  },
}

const amheadTaskItems = [
  { id: 'AT001', label: 'Deutsche Bank GCC — renewal commercial review',   am: 'Priya Sharma',   client: 'Deutsche Bank GCC',  category: 'Renewal',      zone: 'South', city: 'Bengaluru', centre: 'Whitefield',         status: 'open',       due: 'Apr 15' },
  { id: 'AT002', label: 'Approve mod-project commercials — 8 projects',    am: 'Priya Sharma',   client: 'Multi-client',        category: 'Approvals',    zone: 'South', city: 'Bengaluru', centre: 'Whitefield',         status: 'open',       due: 'Apr 12' },
  { id: 'AT003', label: 'XYZ Fintech — health intervention plan',          am: 'Sneha Iyer',     client: 'XYZ Fintech',         category: 'Retention',    zone: 'South', city: 'Bengaluru', centre: 'Koramangala',        status: 'open',       due: 'Apr 11' },
  { id: 'AT004', label: 'VectorAI Labs — exit notice response',            am: 'Meera Krishnan', client: 'VectorAI Labs',       category: 'Exit Mgmt',   zone: 'South', city: 'Bengaluru', centre: 'ORR',                status: 'violated',   due: 'Apr 2'  },
  { id: 'AT005', label: 'NorthStar Bank — overdue invoice 62d follow-up',  am: 'Anjali Gupta',   client: 'NorthStar Bank',      category: 'Collections',  zone: 'South', city: 'Bengaluru', centre: 'Electronic City',    status: 'violated',   due: 'Mar 28' },
  { id: 'AT006', label: 'Salesforce India — upgrade seat capacity plan',   am: 'Aditi Nair',     client: 'Salesforce India',    category: 'Expansion',    zone: 'South', city: 'Bengaluru', centre: 'ORR',                status: 'open',       due: 'Apr 14' },
  { id: 'AT007', label: 'Adani Group — Q2 service review package',         am: 'Aditi Nair',     client: 'Adani Group',         category: 'Account Review',zone: 'South', city: 'Hyderabad', centre: 'HiTec City',        status: 'closed-sla', due: 'Apr 9'  },
  { id: 'AT008', label: 'GlobalMed — CSAT improvement plan',               am: 'Vikram Rao',     client: 'GlobalMed',           category: 'CSAT',         zone: 'South', city: 'Hyderabad', centre: 'Gachibowli',         status: 'violated',   due: 'Apr 4'  },
  { id: 'AT009', label: 'HiTec City expansion — feasibility report',       am: 'Aditi Nair',     client: null,                  category: 'Project',      zone: 'South', city: 'Hyderabad', centre: 'HiTec City',         status: 'open',       due: 'Apr 16' },
  { id: 'AT010', label: 'QuantBridge Capital — credit note clearance',     am: 'Rahul Mehta',    client: 'QuantBridge Capital', category: 'Billing',      zone: 'South', city: 'Hyderabad', centre: 'Cyber City',          status: 'violated',   due: 'Apr 3'  },
  { id: 'AT011', label: 'Tidel Park — housekeeping SLA escalation',        am: 'Meera Krishnan', client: 'Cognizant',           category: 'FM',           zone: 'South', city: 'Chennai',   centre: 'Tidel Park',         status: 'violated',   due: 'Apr 5'  },
  { id: 'AT012', label: 'TCS GBS — renewal negotiation docs',              am: 'Meera Krishnan', client: 'TCS GBS',             category: 'Renewal',      zone: 'South', city: 'Chennai',   centre: 'OMR Hub',            status: 'open',       due: 'Apr 18' },
  { id: 'AT013', label: 'Chennai region — monthly MIS submission',         am: 'Meera Krishnan', client: null,                  category: 'Reporting',    zone: 'South', city: 'Chennai',   centre: 'Tidel Park',         status: 'closed-sla', due: 'Apr 11' },
  { id: 'AT014', label: 'HDFC Securities — lock-in expiry communication',  am: 'Rohan Desai',    client: 'HDFC Securities',     category: 'Retention',    zone: 'North', city: 'Delhi',     centre: 'Connaught Place',    status: 'open',       due: 'Apr 13' },
  { id: 'AT015', label: 'Air India GCC — billing dispute resolution',      am: 'Rohan Desai',    client: 'Air India GCC',       category: 'Billing',      zone: 'North', city: 'Delhi',     centre: 'Aerocity',           status: 'violated',   due: 'Apr 6'  },
  { id: 'AT016', label: 'Aerocity centre — IoT sensor replacement',        am: 'Rohan Desai',    client: null,                  category: 'Tech Ops',     zone: 'North', city: 'Delhi',     centre: 'Aerocity',           status: 'closed-sla', due: 'Apr 10' },
  { id: 'AT017', label: 'Rahul Mehta — rescue plan approval, 4 at-risk',  am: 'Rahul Mehta',    client: 'Multi-client',        category: 'Retention',    zone: 'North', city: 'Gurgaon',   centre: 'Golf Course',        status: 'open',       due: 'Apr 12' },
  { id: 'AT018', label: 'PwC India — expansion seat projection',           am: 'Rahul Mehta',    client: 'PwC India',           category: 'Expansion',    zone: 'North', city: 'Gurgaon',   centre: 'Golf Course',        status: 'open',       due: 'Apr 14' },
  { id: 'AT019', label: 'Cyber City Gurgaon — CSAT drop investigation',   am: 'Rahul Mehta',    client: null,                  category: 'CSAT',         zone: 'North', city: 'Gurgaon',   centre: 'Cyber City Gurgaon', status: 'violated',   due: 'Apr 7'  },
  { id: 'AT020', label: 'HCL Tech — notice period response plan',          am: 'Anjali Gupta',   client: 'HCL Tech',            category: 'Exit Mgmt',   zone: 'North', city: 'Noida',     centre: 'Sector 62',          status: 'open',       due: 'Apr 15' },
  { id: 'AT021', label: 'Noida One — security audit closure',              am: 'Anjali Gupta',   client: null,                  category: 'Compliance',   zone: 'North', city: 'Noida',     centre: 'Noida One',          status: 'closed-sla', due: 'Apr 8'  },
  { id: 'AT022', label: 'Morgan Stanley — renewal proposal submission',    am: 'Karan Patel',    client: 'Morgan Stanley',      category: 'Renewal',      zone: 'West',  city: 'Mumbai',    centre: 'BKC',                status: 'open',       due: 'Apr 16' },
  { id: 'AT023', label: 'Axis Bank — overdue 45d collection call',         am: 'Karan Patel',    client: 'Axis Bank',           category: 'Collections',  zone: 'West',  city: 'Mumbai',    centre: 'BKC',                status: 'violated',   due: 'Apr 1'  },
  { id: 'AT024', label: 'Lower Parel — FM vendor re-tendering',            am: 'Rohan Desai',    client: null,                  category: 'FM',           zone: 'West',  city: 'Mumbai',    centre: 'Lower Parel',        status: 'open',       due: 'Apr 19' },
  { id: 'AT025', label: 'Andheri centre — WiFi infra SLA escalation',      am: 'Rohan Desai',    client: 'Wipro Tech',          category: 'IT Ops',       zone: 'West',  city: 'Mumbai',    centre: 'Andheri',            status: 'violated',   due: 'Apr 3'  },
  { id: 'AT026', label: 'Bajaj Finserv — CSAT 90-day review',              am: 'Sneha Iyer',     client: 'Bajaj Finserv',       category: 'CSAT',         zone: 'West',  city: 'Pune',      centre: 'Baner',              status: 'closed-sla', due: 'Apr 9'  },
  { id: 'AT027', label: 'Kharadi — power backup maintenance closure',      am: 'Sneha Iyer',     client: null,                  category: 'Tech Ops',     zone: 'West',  city: 'Pune',      centre: 'Kharadi',            status: 'violated',   due: 'Apr 5'  },
  { id: 'AT028', label: 'Capgemini Pune — lock-in renewal discussion',     am: 'Sneha Iyer',     client: 'Capgemini',           category: 'Retention',    zone: 'West',  city: 'Pune',      centre: 'Baner',              status: 'open',       due: 'Apr 17' },
  { id: 'AT029', label: 'ITC GBC — new client onboarding plan',            am: 'Vikram Rao',     client: 'ITC GBC',             category: 'Onboarding',   zone: 'East',  city: 'Kolkata',   centre: 'Salt Lake',          status: 'open',       due: 'Apr 15' },
  { id: 'AT030', label: 'New Town centre — FM SLA report Apr',             am: 'Vikram Rao',     client: null,                  category: 'Reporting',    zone: 'East',  city: 'Kolkata',   centre: 'New Town',           status: 'closed-sla', due: 'Apr 12' },
  { id: 'AT031', label: 'Coal India — billing reconciliation Q4',          am: 'Vikram Rao',     client: 'Coal India',          category: 'Billing',      zone: 'East',  city: 'Kolkata',   centre: 'Salt Lake',          status: 'violated',   due: 'Apr 4'  },
  { id: 'AT032', label: 'East zone — SLA violation root cause analysis',   am: 'Vikram Rao',     client: null,                  category: 'Operations',   zone: 'East',  city: 'Kolkata',   centre: 'New Town',           status: 'open',       due: 'Apr 18' },
]

const amheadMeetingItems = [
  { id: 'AM001', label: 'Deutsche Bank GCC — renewal QBR',               am: 'Priya Sharma',   client: 'Deutsche Bank GCC',  category: 'Renewal',       zone: 'South', city: 'Bengaluru', centre: 'Whitefield',      status: 'booked',    due: 'Apr 15' },
  { id: 'AM002', label: 'XYZ Fintech — executive retention meeting',      am: 'Sneha Iyer',     client: 'XYZ Fintech',        category: 'Retention',     zone: 'South', city: 'Bengaluru', centre: 'Koramangala',     status: 'booked',    due: 'Apr 11' },
  { id: 'AM003', label: 'Salesforce India — expansion planning call',     am: 'Aditi Nair',     client: 'Salesforce India',   category: 'Expansion',     zone: 'South', city: 'Bengaluru', centre: 'ORR',             status: 'completed', due: 'Apr 10' },
  { id: 'AM004', label: 'VectorAI Labs — exit negotiation',               am: 'Meera Krishnan', client: 'VectorAI Labs',      category: 'Exit Mgmt',    zone: 'South', city: 'Bengaluru', centre: 'ORR',             status: 'violated',  due: 'Apr 2'  },
  { id: 'AM005', label: 'Adani Group — Q2 service review',                am: 'Aditi Nair',     client: 'Adani Group',        category: 'Account Review',zone: 'South', city: 'Hyderabad', centre: 'HiTec City',      status: 'completed', due: 'Apr 9'  },
  { id: 'AM006', label: 'GlobalMed — health score deep-dive',             am: 'Vikram Rao',     client: 'GlobalMed',          category: 'CSAT',          zone: 'South', city: 'Hyderabad', centre: 'Gachibowli',      status: 'violated',  due: 'Apr 4'  },
  { id: 'AM007', label: 'QuantBridge Capital — dispute hearing',          am: 'Rahul Mehta',    client: 'QuantBridge Capital',category: 'Billing',       zone: 'South', city: 'Hyderabad', centre: 'Cyber City',       status: 'pending',   due: 'Apr 14' },
  { id: 'AM008', label: 'TCS GBS — renewal negotiation session',          am: 'Meera Krishnan', client: 'TCS GBS',            category: 'Renewal',       zone: 'South', city: 'Chennai',   centre: 'OMR Hub',         status: 'booked',    due: 'Apr 18' },
  { id: 'AM009', label: 'Cognizant — CSAT feedback workshop',             am: 'Meera Krishnan', client: 'Cognizant',          category: 'CSAT',          zone: 'South', city: 'Chennai',   centre: 'Tidel Park',      status: 'pending',   due: 'Apr 16' },
  { id: 'AM010', label: 'HDFC Securities — retention call',               am: 'Rohan Desai',    client: 'HDFC Securities',    category: 'Retention',     zone: 'North', city: 'Delhi',     centre: 'Connaught Place', status: 'booked',    due: 'Apr 13' },
  { id: 'AM011', label: 'Air India GCC — billing resolution',             am: 'Rohan Desai',    client: 'Air India GCC',      category: 'Billing',       zone: 'North', city: 'Delhi',     centre: 'Aerocity',        status: 'violated',  due: 'Apr 6'  },
  { id: 'AM012', label: 'PwC India — expansion discussion',               am: 'Rahul Mehta',    client: 'PwC India',          category: 'Expansion',     zone: 'North', city: 'Gurgaon',   centre: 'Golf Course',     status: 'booked',    due: 'Apr 14' },
  { id: 'AM013', label: 'At-risk portfolio — AM rescue session',          am: 'Rahul Mehta',    client: 'Multi-client',       category: 'Retention',     zone: 'North', city: 'Gurgaon',   centre: 'Golf Course',     status: 'completed', due: 'Apr 9'  },
  { id: 'AM014', label: 'HCL Tech — notice response meeting',             am: 'Anjali Gupta',   client: 'HCL Tech',           category: 'Exit Mgmt',    zone: 'North', city: 'Noida',     centre: 'Sector 62',       status: 'pending',   due: 'Apr 15' },
  { id: 'AM015', label: 'Morgan Stanley — renewal signing call',          am: 'Karan Patel',    client: 'Morgan Stanley',     category: 'Renewal',       zone: 'West',  city: 'Mumbai',    centre: 'BKC',             status: 'booked',    due: 'Apr 16' },
  { id: 'AM016', label: 'Axis Bank — overdue resolution call',            am: 'Karan Patel',    client: 'Axis Bank',          category: 'Collections',   zone: 'West',  city: 'Mumbai',    centre: 'BKC',             status: 'violated',  due: 'Apr 1'  },
  { id: 'AM017', label: 'Andheri centre — infra escalation',              am: 'Rohan Desai',    client: 'Wipro Tech',         category: 'IT Ops',        zone: 'West',  city: 'Mumbai',    centre: 'Andheri',         status: 'completed', due: 'Apr 8'  },
  { id: 'AM018', label: 'Bajaj Finserv — CSAT review call',               am: 'Sneha Iyer',     client: 'Bajaj Finserv',      category: 'CSAT',          zone: 'West',  city: 'Pune',      centre: 'Baner',           status: 'completed', due: 'Apr 9'  },
  { id: 'AM019', label: 'Capgemini Pune — lock-in discussion',            am: 'Sneha Iyer',     client: 'Capgemini',          category: 'Retention',     zone: 'West',  city: 'Pune',      centre: 'Baner',           status: 'booked',    due: 'Apr 17' },
  { id: 'AM020', label: 'ITC GBC — onboarding kickoff',                   am: 'Vikram Rao',     client: 'ITC GBC',            category: 'Onboarding',    zone: 'East',  city: 'Kolkata',   centre: 'Salt Lake',       status: 'booked',    due: 'Apr 15' },
  { id: 'AM021', label: 'Coal India — billing clarification call',         am: 'Vikram Rao',     client: 'Coal India',         category: 'Billing',       zone: 'East',  city: 'Kolkata',   centre: 'Salt Lake',       status: 'violated',  due: 'Apr 4'  },
  { id: 'AM022', label: 'East zone portfolio review',                      am: 'Vikram Rao',     client: null,                 category: 'Ops Review',    zone: 'East',  city: 'Kolkata',   centre: 'New Town',        status: 'pending',   due: 'Apr 18' },
]

const amheadTaskCompositeWithModal = {
  ...amheadTaskComposite,
  modal: {
    type: 'taskMeetingList',
    title: 'All Team Tasks',
    subtitle: `${amheadTaskItems.length} tasks · National Portfolio`,
    width: 720,
    data: { kind: 'task', filterType: 'zone-city-centre', hierarchy: amheadHierarchy, items: amheadTaskItems },
  },
}
const amheadMeetingCompositeWithModal = {
  ...amheadMeetingComposite,
  modal: {
    type: 'taskMeetingList',
    title: 'All Team Meetings',
    subtitle: `${amheadMeetingItems.length} meetings · National Portfolio`,
    width: 720,
    data: { kind: 'meeting', filterType: 'zone-city-centre', hierarchy: amheadHierarchy, items: amheadMeetingItems },
  },
}

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

// ─── REGION HEAD — task/meeting modal hierarchy + items ───────────────────────
const reheadHierarchy = {
  cities: ['Bengaluru', 'Mysuru', 'Mangaluru'],
  centres: {
    Bengaluru:  ['Whitefield', 'ORR', 'Koramangala', 'Indiranagar', 'MG Road', 'Electronic City'],
    Mysuru:     ['Infosys Mysuru', 'Mysuru Centrium'],
    Mangaluru:  ['Coastal Hub'],
  },
}

const reheadTaskItems = [
  { id: 'RT001', label: 'Deutsche Bank GCC — renewal commercial review',  am: 'Priya Sharma',   client: 'Deutsche Bank GCC',  category: 'Renewal',     city: 'Bengaluru', centre: 'Whitefield',      status: 'open',       due: 'Apr 15' },
  { id: 'RT002', label: 'Approve mod-project commercials — 8 projects',   am: 'Priya Sharma',   client: 'Multi-client',        category: 'Approvals',   city: 'Bengaluru', centre: 'Whitefield',      status: 'open',       due: 'Apr 12' },
  { id: 'RT003', label: 'HSBC GCC — Q2 contract renewal docs',            am: 'Priya Sharma',   client: 'HSBC GCC',            category: 'Renewal',     city: 'Bengaluru', centre: 'Whitefield',      status: 'open',       due: 'Apr 18' },
  { id: 'RT004', label: 'Q1 CSAT survey follow-up — Whitefield',          am: 'Priya Sharma',   client: 'Multi-client',        category: 'CSAT',        city: 'Bengaluru', centre: 'Whitefield',      status: 'closed-sla', due: 'Apr 10' },
  { id: 'RT005', label: 'Security audit report submission',                am: 'Priya Sharma',   client: 'Deutsche Bank GCC',  category: 'Compliance',  city: 'Bengaluru', centre: 'Whitefield',      status: 'closed-sla', due: 'Apr 8'  },
  { id: 'RT006', label: 'Salesforce India — upgrade seat capacity plan',  am: 'Aditi Nair',     client: 'Salesforce India',   category: 'Expansion',   city: 'Bengaluru', centre: 'ORR',             status: 'open',       due: 'Apr 14' },
  { id: 'RT007', label: 'Billing dispute escalation — Q4 arrears',        am: 'Aditi Nair',     client: 'Infosys BPO',         category: 'Billing',     city: 'Bengaluru', centre: 'ORR',             status: 'violated',   due: 'Apr 5'  },
  { id: 'RT008', label: 'Infosys BPO — CSAT 30-day follow-up',           am: 'Aditi Nair',     client: 'Infosys BPO',         category: 'CSAT',        city: 'Bengaluru', centre: 'ORR',             status: 'closed-sla', due: 'Apr 9'  },
  { id: 'RT009', label: 'XYZ Fintech — health intervention plan',         am: 'Sneha Iyer',     client: 'XYZ Fintech',         category: 'Retention',   city: 'Bengaluru', centre: 'Koramangala',     status: 'open',       due: 'Apr 11' },
  { id: 'RT010', label: 'Parking reconfig — floor 3, Koramangala',        am: 'Sneha Iyer',     client: 'XYZ Fintech',         category: 'FM',          city: 'Bengaluru', centre: 'Koramangala',     status: 'violated',   due: 'Apr 3'  },
  { id: 'RT011', label: 'IBM India — renewal notice letter',               am: 'Sneha Iyer',     client: 'IBM India',           category: 'Renewal',     city: 'Bengaluru', centre: 'Koramangala',     status: 'open',       due: 'Apr 16' },
  { id: 'RT012', label: 'Capgemini — invoice reconciliation Apr',         am: 'Karan Patel',    client: 'Capgemini',           category: 'Billing',     city: 'Bengaluru', centre: 'Indiranagar',     status: 'open',       due: 'Apr 15' },
  { id: 'RT013', label: 'GRE handoff — chiller maintenance SLA',          am: 'Karan Patel',    client: 'Capgemini',           category: 'Operations',  city: 'Bengaluru', centre: 'Indiranagar',     status: 'closed-sla', due: 'Apr 7'  },
  { id: 'RT014', label: 'TechCorp — lock-in expiry communication',        am: 'Meera Krishnan', client: 'TechCorp India',      category: 'Retention',   city: 'Bengaluru', centre: 'MG Road',         status: 'open',       due: 'Apr 13' },
  { id: 'RT015', label: 'VectorAI Labs — exit notice response',           am: 'Meera Krishnan', client: 'VectorAI Labs',       category: 'Exit Mgmt',  city: 'Bengaluru', centre: 'MG Road',         status: 'violated',   due: 'Apr 2'  },
  { id: 'RT016', label: 'NorthStar Bank — overdue invoice 62d follow-up', am: 'Anjali Gupta',   client: 'NorthStar Bank',      category: 'Collections', city: 'Bengaluru', centre: 'Electronic City', status: 'violated',   due: 'Mar 28' },
  { id: 'RT017', label: 'Wipro Tech — CSAT improvement plan',             am: 'Anjali Gupta',   client: 'Wipro Tech',          category: 'CSAT',        city: 'Bengaluru', centre: 'Electronic City', status: 'open',       due: 'Apr 17' },
  { id: 'RT018', label: 'Region weekly ops report — Apr W2',              am: 'Anjali Gupta',   client: null,                  category: 'Reporting',   city: 'Bengaluru', centre: 'Electronic City', status: 'closed-sla', due: 'Apr 12' },
  { id: 'RT019', label: 'Infosys Campus — seat expansion feasibility',    am: 'Rohan Desai',    client: 'Infosys',             category: 'Expansion',   city: 'Mysuru',    centre: 'Infosys Mysuru',  status: 'open',       due: 'Apr 16' },
  { id: 'RT020', label: 'Power backup SLA breach — escalation',           am: 'Rohan Desai',    client: 'Infosys',             category: 'Tech Ops',    city: 'Mysuru',    centre: 'Infosys Mysuru',  status: 'violated',   due: 'Apr 6'  },
  { id: 'RT021', label: 'Mysuru Centrium — new client onboarding docs',   am: 'Vikram Rao',     client: 'GlobalMed',           category: 'Onboarding',  city: 'Mysuru',    centre: 'Mysuru Centrium', status: 'open',       due: 'Apr 14' },
  { id: 'RT022', label: 'Coastal Hub — housekeeping vendor renewal',      am: 'Vikram Rao',     client: null,                  category: 'FM',          city: 'Mangaluru', centre: 'Coastal Hub',     status: 'open',       due: 'Apr 20' },
  { id: 'RT023', label: 'QuantBridge Capital — credit note clearance',    am: 'Vikram Rao',     client: 'QuantBridge Capital', category: 'Billing',     city: 'Mangaluru', centre: 'Coastal Hub',     status: 'violated',   due: 'Apr 4'  },
]

const reheadMeetingItems = [
  { id: 'RM001', label: 'Deutsche Bank GCC — renewal QBR',               am: 'Priya Sharma',   client: 'Deutsche Bank GCC',  category: 'Renewal',       city: 'Bengaluru', centre: 'Whitefield',      status: 'booked',    due: 'Apr 15' },
  { id: 'RM002', label: 'HSBC GCC — Q2 service review',                  am: 'Priya Sharma',   client: 'HSBC GCC',           category: 'Service Review', city: 'Bengaluru', centre: 'Whitefield',      status: 'completed', due: 'Apr 8'  },
  { id: 'RM003', label: 'Mod-project stakeholder walkthrough',            am: 'Priya Sharma',   client: 'Multi-client',       category: 'Project',        city: 'Bengaluru', centre: 'Whitefield',      status: 'pending',   due: 'Apr 12' },
  { id: 'RM004', label: 'Salesforce India — expansion planning call',    am: 'Aditi Nair',     client: 'Salesforce India',   category: 'Expansion',      city: 'Bengaluru', centre: 'ORR',             status: 'booked',    due: 'Apr 14' },
  { id: 'RM005', label: 'Infosys BPO — collections escalation call',     am: 'Aditi Nair',     client: 'Infosys BPO',        category: 'Collections',    city: 'Bengaluru', centre: 'ORR',             status: 'violated',  due: 'Apr 3'  },
  { id: 'RM006', label: 'ORR centre — operations review',                 am: 'Aditi Nair',     client: null,                 category: 'Ops Review',     city: 'Bengaluru', centre: 'ORR',             status: 'completed', due: 'Apr 10' },
  { id: 'RM007', label: 'XYZ Fintech — executive retention meeting',      am: 'Sneha Iyer',     client: 'XYZ Fintech',        category: 'Retention',      city: 'Bengaluru', centre: 'Koramangala',     status: 'booked',    due: 'Apr 11' },
  { id: 'RM008', label: 'IBM India — renewal intro meeting',              am: 'Sneha Iyer',     client: 'IBM India',          category: 'Renewal',        city: 'Bengaluru', centre: 'Koramangala',     status: 'pending',   due: 'Apr 16' },
  { id: 'RM009', label: 'Capgemini — monthly account review',             am: 'Karan Patel',    client: 'Capgemini',          category: 'Account Review', city: 'Bengaluru', centre: 'Indiranagar',     status: 'completed', due: 'Apr 9'  },
  { id: 'RM010', label: 'TechCorp India — lock-in discussion',            am: 'Meera Krishnan', client: 'TechCorp India',     category: 'Retention',      city: 'Bengaluru', centre: 'MG Road',         status: 'booked',    due: 'Apr 13' },
  { id: 'RM011', label: 'VectorAI Labs — exit negotiation call',          am: 'Meera Krishnan', client: 'VectorAI Labs',      category: 'Exit Mgmt',     city: 'Bengaluru', centre: 'MG Road',         status: 'violated',  due: 'Apr 2'  },
  { id: 'RM012', label: 'NorthStar Bank — overdue resolution call',       am: 'Anjali Gupta',   client: 'NorthStar Bank',     category: 'Collections',    city: 'Bengaluru', centre: 'Electronic City', status: 'violated',  due: 'Apr 1'  },
  { id: 'RM013', label: 'Wipro Tech — CSAT deep-dive session',            am: 'Anjali Gupta',   client: 'Wipro Tech',         category: 'CSAT',           city: 'Bengaluru', centre: 'Electronic City', status: 'pending',   due: 'Apr 17' },
  { id: 'RM014', label: 'Infosys — seat expansion walk-through',          am: 'Rohan Desai',    client: 'Infosys',            category: 'Expansion',      city: 'Mysuru',    centre: 'Infosys Mysuru',  status: 'booked',    due: 'Apr 16' },
  { id: 'RM015', label: 'GlobalMed — onboarding kickoff',                 am: 'Vikram Rao',     client: 'GlobalMed',          category: 'Onboarding',     city: 'Mysuru',    centre: 'Mysuru Centrium', status: 'booked',    due: 'Apr 14' },
  { id: 'RM016', label: 'QuantBridge Capital — dispute resolution',       am: 'Vikram Rao',     client: 'QuantBridge Capital',category: 'Billing',        city: 'Mangaluru', centre: 'Coastal Hub',     status: 'violated',  due: 'Apr 4'  },
  { id: 'RM017', label: 'Coastal Hub — FM vendor review',                 am: 'Vikram Rao',     client: null,                 category: 'FM',             city: 'Mangaluru', centre: 'Coastal Hub',     status: 'pending',   due: 'Apr 20' },
]

const reheadTaskCompositeWithModal = {
  ...reheadTaskComposite,
  modal: {
    type: 'taskMeetingList',
    title: 'All Region Tasks',
    subtitle: `${reheadTaskItems.length} tasks · Bengaluru Region`,
    width: 700,
    data: { kind: 'task', filterType: 'city-centre', hierarchy: reheadHierarchy, items: reheadTaskItems },
  },
}
const reheadMeetingCompositeWithModal = {
  ...reheadMeetingComposite,
  modal: {
    type: 'taskMeetingList',
    title: 'All Region Meetings',
    subtitle: `${reheadMeetingItems.length} meetings · Bengaluru Region`,
    width: 700,
    data: { kind: 'meeting', filterType: 'city-centre', hierarchy: reheadHierarchy, items: reheadMeetingItems },
  },
}

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
  { label: 'NorthStar Bank — coordinate retention meeting with AM', priority: 'high',   due: 'Apr 10' },
  { label: 'Submit 3 mod-project proposals to AM Head',             priority: 'high',   due: 'Apr 11' },
  { label: '6 P1 tickets — coordinate joint resolution',           priority: 'high',   due: 'Today' },
  { label: 'Create Deutsche April invoice (₹62L)',                 priority: 'medium', due: 'Apr 12' },
  { label: 'Send payment reminders — 3 overdue clients',           priority: 'medium', due: 'Apr 14' },
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
  { priority: 'high',   text: 'NorthStar Bank under notice — coordinate retention meeting between AM Rahul Mehta and client CXO · book for Apr 10', due: 'Apr 10', category: 'Retention' },
  { priority: 'high',   text: '6 P1 tickets open >24h — coordinate joint resolution session with AM team and tech ops', due: 'Today', category: 'Tickets' },
  { priority: 'high',   text: 'Submit 3 mod-project proposals to AM Head for approval (fit-out refresh, HVAC upgrade, meeting-room AV)', due: 'Apr 11', category: 'Mod Projects' },
  { priority: 'medium', text: 'Create April invoice for Deutsche Bank GCC — ₹62L · share with AM Karan for review before sending', due: 'Apr 12', category: 'Invoicing' },
  { priority: 'medium', text: 'Schedule client meetings for Wipro Tech, Cognizant, TechCorp India — CSAT follow-up and SLA review', due: 'Apr 12', category: 'Meetings' },
  { priority: 'medium', text: 'Discuss 4 pending disputes with AM — ₹14.2L total outstanding · escalate to AM Head for CN sign-off', due: 'Apr 13', category: 'Disputes' },
  { priority: 'medium', text: 'Send payment reminders to NorthStar Bank, Wipro Tech, Accenture — invoices overdue >14d, ₹57.8L at stake', due: 'Apr 14', category: 'Collections' },
  { priority: 'low',    text: 'Share monthly AM performance feedback to AM Head for team scorecard', due: 'Apr 15', category: 'Team' },
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

// ─── AM Head — metric modal data keyed by label ───────────────────────────────
const amheadMetricModals = {
  'AMs Under Management': {
    title: 'AM Team — All 24 AMs',
    subtitle: 'National Portfolio · 6 zones · Performance scored 0–100',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Priya Sharma',   location: 'South · Bengaluru · Whitefield',    lockin: 'SLA 94%', health: '96', status: 'Excellent' },
        { name: 'Aditi Nair',     location: 'South · Hyderabad · HiTec City',    lockin: 'SLA 91%', health: '93', status: 'Excellent' },
        { name: 'Sneha Iyer',     location: 'West · Pune · Baner',               lockin: 'SLA 89%', health: '91', status: 'Excellent' },
        { name: 'Karan Patel',    location: 'West · Mumbai · BKC',               lockin: 'SLA 87%', health: '88', status: 'Good' },
        { name: 'Meera Krishnan', location: 'South · Chennai · Tidel Park',      lockin: 'SLA 85%', health: '87', status: 'Good' },
        { name: 'Rohan Desai',    location: 'North · Delhi · Connaught Place',   lockin: 'SLA 82%', health: '84', status: 'Good' },
        { name: 'Anjali Gupta',   location: 'North · Noida · Sector 62',         lockin: 'SLA 78%', health: '80', status: 'Monitor' },
        { name: 'Vikram Rao',     location: 'East · Kolkata · Salt Lake',        lockin: 'SLA 74%', health: '78', status: 'Monitor' },
        { name: 'Rahul Mehta',    location: 'North · Gurgaon · Golf Course',     lockin: 'SLA 68%', health: '72', status: 'At Risk' },
        { name: 'Dev Kapoor',     location: 'South · Bengaluru · ORR',           lockin: 'SLA 88%', health: '85', status: 'Good' },
        { name: 'Riya Menon',     location: 'South · Hyderabad · Gachibowli',    lockin: 'SLA 83%', health: '82', status: 'Good' },
        { name: 'Arun Mathews',   location: 'North · Delhi · Aerocity',          lockin: 'SLA 79%', health: '79', status: 'Monitor' },
      ],
    },
  },
  'AMs Below SLA': {
    title: 'AMs Below SLA Threshold — 6 AMs',
    subtitle: 'Task SLA < 75% · Immediate 1:1 review required',
    type: 'clientList',
    data: {
      note: '⚠ SLA threshold is 75%. These AMs require immediate performance intervention.',
      clients: [
        { name: 'Meera Krishnan', location: 'South · Chennai · OMR Hub',         lockin: 'SLA 65%', health: '65', status: 'At Risk' },
        { name: 'Rahul Mehta',    location: 'North · Gurgaon · Golf Course',     lockin: 'SLA 68%', health: '68', status: 'At Risk' },
        { name: 'Karan Patel',    location: 'West · Mumbai · Andheri',           lockin: 'SLA 68%', health: '68', status: 'At Risk' },
        { name: 'Rohan Desai',    location: 'North · Delhi · Aerocity',          lockin: 'SLA 70%', health: '70', status: 'At Risk' },
        { name: 'Anjali Gupta',   location: 'North · Noida · Sector 62',         lockin: 'SLA 72%', health: '72', status: 'At Risk' },
        { name: 'Vikram Rao',     location: 'East · Kolkata · Salt Lake',        lockin: 'SLA 74%', health: '74', status: 'Monitor' },
      ],
    },
  },
  'Out of Lock-in': {
    title: 'Out of Lock-in Clients — National Portfolio',
    subtitle: '163 of 447 clients outside lock-in · Highest-risk accounts shown',
    type: 'clientList',
    data: {
      note: '⚠ 163 clients (36%) are outside lock-in. Shown: highest-risk by health score.',
      clients: [
        { name: 'XYZ Fintech',      location: 'Koramangala · Bengaluru',  am: 'Sneha Iyer',     lockin: 'Out since Feb 2026', health: '48', status: 'At Risk' },
        { name: 'NorthStar Bank',   location: 'Whitefield · Bengaluru',   am: 'Rahul Mehta',    lockin: 'Out since Jan 2026', health: '52', status: 'At Risk' },
        { name: 'QuantBridge Cap',  location: 'Cyber City · Hyderabad',   am: 'Rahul Mehta',    lockin: 'Out since Mar 2026', health: '55', status: 'At Risk' },
        { name: 'GlobalMed',        location: 'Gachibowli · Hyderabad',   am: 'Vikram Rao',     lockin: 'Out since Feb 2026', health: '57', status: 'At Risk' },
        { name: 'VectorAI Labs',    location: 'ORR · Bengaluru',           am: 'Meera Krishnan', lockin: 'Out since Mar 2026', health: '58', status: 'At Risk' },
        { name: 'AlphaFinance',     location: 'ORR · Bengaluru',           am: 'Priya Sharma',   lockin: 'Out since Mar 2026', health: '71', status: 'Monitor' },
        { name: 'GlobalTech',       location: 'BKC · Mumbai',              am: 'Karan Patel',    lockin: 'Out since Feb 2026', health: '72', status: 'Monitor' },
        { name: 'Accenture ORR',    location: 'ORR · Bengaluru',           am: 'Dev Kapoor',     lockin: 'Out since Mar 2026', health: '78', health: '78', status: 'Good' },
        { name: 'Wipro Tech',       location: 'Whitefield · Bengaluru',    am: 'Rohan Desai',    lockin: 'Out since Jan 2026', health: '68', status: 'Monitor' },
        { name: 'HCL Tech',         location: 'Sector 62 · Noida',         am: 'Anjali Gupta',   lockin: 'Out since Apr 2026', health: '74', status: 'Monitor' },
      ],
    },
  },
  'Under Notice Period': {
    title: 'Clients Under Notice Period — National Portfolio',
    subtitle: '12 clients · Sorted by days remaining (ascending)',
    type: 'clientList',
    data: {
      note: '⛔ These clients have served notice. Coordinate exit checklist with RE, Finance & Ops.',
      clients: [
        { name: 'VectorAI Labs',    location: 'ORR · Bengaluru',           am: 'Meera Krishnan', lockin: 'Notice Apr 2 · 8d left',   health: '58', daysNoticed: 8,  status: 'Notice' },
        { name: 'Air India GCC',    location: 'Aerocity · Delhi',          am: 'Rohan Desai',    lockin: 'Notice Apr 6 · 9d left',   health: '62', daysNoticed: 9,  status: 'Notice' },
        { name: 'Coal India',       location: 'Salt Lake · Kolkata',       am: 'Vikram Rao',     lockin: 'Notice Apr 4 · 12d left',  health: '64', daysNoticed: 12, status: 'Notice' },
        { name: 'NorthStar Bank',   location: 'Whitefield · Bengaluru',    am: 'Rahul Mehta',    lockin: 'Notice Mar 28 · 14d left', health: '52', daysNoticed: 14, status: 'Notice' },
        { name: 'Axis Bank',        location: 'BKC · Mumbai',              am: 'Karan Patel',    lockin: 'Notice Apr 1 · 16d left',  health: '66', daysNoticed: 16, status: 'Notice' },
        { name: 'QuantBridge Cap',  location: 'Cyber City · Hyderabad',    am: 'Rahul Mehta',    lockin: 'Notice Apr 3 · 18d left',  health: '55', daysNoticed: 18, status: 'Notice' },
        { name: 'Wipro Tech',       location: 'Whitefield · Bengaluru',    am: 'Rohan Desai',    lockin: 'Notice Mar 15 · 22d left', health: '68', daysNoticed: 22, status: 'Notice' },
        { name: 'HCL Tech',         location: 'Sector 62 · Noida',         am: 'Anjali Gupta',   lockin: 'Notice Apr 8 · 24d left',  health: '74', daysNoticed: 24, status: 'Notice' },
        { name: 'GlobalMed',        location: 'Gachibowli · Hyderabad',    am: 'Vikram Rao',     lockin: 'Notice Mar 20 · 26d left', health: '57', daysNoticed: 26, status: 'Notice' },
        { name: 'XYZ Fintech',      location: 'Koramangala · Bengaluru',   am: 'Sneha Iyer',     lockin: 'Notice Apr 5 · 28d left',  health: '48', daysNoticed: 28, status: 'Notice' },
        { name: 'DataBridge',       location: 'Baner · Pune',              am: 'Sneha Iyer',     lockin: 'Notice Mar 25 · 30d left', health: '62', daysNoticed: 30, status: 'Notice' },
        { name: 'TechVision',       location: 'Golf Course · Gurgaon',     am: 'Rahul Mehta',    lockin: 'Notice Apr 10 · 30d left', health: '65', daysNoticed: 30, status: 'Notice' },
      ],
    },
  },
  'Unpaid Invoices': {
    title: 'Unpaid Invoices — National Portfolio (Top 10 by Value)',
    subtitle: '1,284 invoices · ₹4.26B total outstanding',
    type: 'invoiceList',
    data: {
      invoices: [
        { id: 'N-INV-001', client: 'Deutsche Bank GCC', invoiceNo: 'DBG-Q1-008',  category: 'Quarterly',    amount: '₹82.4L',  dueDate: '15 Mar', overdueDays: 31 },
        { id: 'N-INV-002', client: 'Infosys BPO',       invoiceNo: 'INF-APR-003', category: 'Monthly + VAS',amount: '₹64.8L',  dueDate: '20 Mar', overdueDays: 26 },
        { id: 'N-INV-003', client: 'Morgan Stanley',    invoiceNo: 'MS-Q1-004',   category: 'Quarterly',    amount: '₹58.6L',  dueDate: '25 Mar', overdueDays: 21 },
        { id: 'N-INV-004', client: 'HSBC GCC',          invoiceNo: 'HSB-APR-002', category: 'Monthly',      amount: '₹48.2L',  dueDate: '28 Mar', overdueDays: 18 },
        { id: 'N-INV-005', client: 'Accenture',         invoiceNo: 'ACC-Q1-006',  category: 'Quarterly',    amount: '₹42.4L',  dueDate: '01 Apr', overdueDays: 14 },
        { id: 'N-INV-006', client: 'PwC India',         invoiceNo: 'PWC-APR-001', category: 'Monthly',      amount: '₹36.8L',  dueDate: '05 Apr', overdueDays: 10 },
        { id: 'N-INV-007', client: 'Bajaj Finserv',     invoiceNo: 'BAJ-APR-002', category: 'Monthly + VAS',amount: '₹32.4L',  dueDate: '08 Apr', overdueDays: 7  },
        { id: 'N-INV-008', client: 'TCS GBS',           invoiceNo: 'TCS-APR-001', category: 'Monthly',      amount: '₹28.6L',  dueDate: '10 Apr', overdueDays: 5  },
        { id: 'N-INV-009', client: 'Capgemini',         invoiceNo: 'CAP-APR-003', category: 'Monthly',      amount: '₹24.8L',  dueDate: '12 Apr', overdueDays: 3  },
        { id: 'N-INV-010', client: 'NorthStar Bank',    invoiceNo: 'NSB-MAR-008', category: 'Overdue 31d',  amount: '₹24.6L',  dueDate: '15 Mar', overdueDays: 31 },
      ],
    },
  },
  'Renewals Due (90d)': {
    title: 'Renewals Due — Next 90 Days (38 Accounts)',
    subtitle: 'Sorted by days to renewal · ₹14.8Cr ARR at stake',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Accenture',       location: 'ORR · Bengaluru',           am: 'Dev Kapoor',     lockin: 'Exp Apr 20 · 8d',  health: '82', status: 'Renewing', unpaid: '2 invoices pending' },
        { name: 'HDFC Securities', location: 'Connaught Place · Delhi',   am: 'Rohan Desai',    lockin: 'Exp Apr 22 · 10d', health: '76', status: 'Monitor',  unpaid: '1 invoice pending'  },
        { name: 'HCL Tech',        location: 'Sector 62 · Noida',         am: 'Anjali Gupta',   lockin: 'Exp Apr 25 · 13d', health: '74', status: 'Monitor',  unpaid: '3 invoices pending' },
        { name: 'Wipro Tech',      location: 'Whitefield · Bengaluru',    am: 'Rohan Desai',    lockin: 'Exp Apr 28 · 16d', health: '68', status: 'At Risk',  unpaid: '5 invoices pending' },
        { name: 'Capgemini',       location: 'Baner · Pune',              am: 'Sneha Iyer',     lockin: 'Exp May 5 · 23d',  health: '80', status: 'Good',     unpaid: '1 invoice pending'  },
        { name: 'TCS GBS',         location: 'OMR Hub · Chennai',         am: 'Meera Krishnan', lockin: 'Exp May 12 · 30d', health: '78', status: 'Good',     unpaid: '0 invoices'         },
        { name: 'PwC India',       location: 'Golf Course · Gurgaon',     am: 'Rahul Mehta',    lockin: 'Exp May 18 · 36d', health: '84', status: 'Good',     unpaid: '1 invoice pending'  },
        { name: 'Morgan Stanley',  location: 'BKC · Mumbai',              am: 'Karan Patel',    lockin: 'Exp May 25 · 43d', health: '87', status: 'Renewing', unpaid: '0 invoices'         },
        { name: 'Bajaj Finserv',   location: 'Baner · Pune',              am: 'Sneha Iyer',     lockin: 'Exp Jun 5 · 54d',  health: '82', status: 'Good',     unpaid: '0 invoices'         },
        { name: 'HSBC GCC',        location: 'Whitefield · Bengaluru',    am: 'Priya Sharma',   lockin: 'Exp Jun 20 · 69d', health: '86', status: 'Good',     unpaid: '1 invoice pending'  },
      ],
    },
  },
  'Mod Projects Pipeline': {
    title: 'Mod Projects Pipeline — ₹14.6Cr (136 Projects)',
    subtitle: '82 in progress · 54 pending approval · Sorted by value (desc)',
    type: 'clientList',
    data: {
      clients: [
        { name: 'BKC Lobby Redesign',           location: 'BKC · Mumbai',              am: 'Karan Patel',    lockin: '₹2.4Cr',  health: '60', status: 'In Progress' },
        { name: 'Whitefield Cafeteria Reno.',   location: 'Whitefield · Bengaluru',    am: 'Priya Sharma',   lockin: '₹1.8Cr',  health: '75', status: 'In Progress' },
        { name: 'HiTec City Coworking Fit-out', location: 'HiTec City · Hyderabad',   am: 'Aditi Nair',     lockin: '₹1.6Cr',  health: '45', status: 'Pending Approval' },
        { name: 'Golf Course Wellness Zone',    location: 'Golf Course · Gurgaon',     am: 'Rahul Mehta',    lockin: '₹1.2Cr',  health: '80', status: 'In Progress' },
        { name: 'ORR Meeting Pods (Batch 2)',   location: 'ORR · Bengaluru',           am: 'Dev Kapoor',     lockin: '₹96L',    health: '65', status: 'In Progress' },
        { name: 'Salt Lake AV Upgrade',         location: 'Salt Lake · Kolkata',       am: 'Vikram Rao',     lockin: '₹84L',    health: '55', status: 'Pending Approval' },
        { name: 'Aerocity IoT Sensors (P2)',    location: 'Aerocity · Delhi',          am: 'Rohan Desai',    lockin: '₹72L',    health: '70', status: 'In Progress' },
        { name: 'Kharadi Server Room Fit-out',  location: 'Kharadi · Pune',            am: 'Sneha Iyer',     lockin: '₹64L',    health: '40', status: 'Pending Approval' },
        { name: 'Tidel Park Signage Refresh',   location: 'Tidel Park · Chennai',      am: 'Meera Krishnan', lockin: '₹48L',    health: '85', status: 'In Progress' },
        { name: 'Noida One Cabin Conversion',   location: 'Noida One · Noida',         am: 'Anjali Gupta',   lockin: '₹42L',    health: '60', status: 'Pending Approval' },
      ],
    },
  },
  'Avg Portfolio Health': {
    title: 'Portfolio Health — Clients Below 60',
    subtitle: '18 clients at-risk · Health < 60 · Sorted lowest first',
    type: 'clientList',
    data: {
      note: '⚠ 18 clients have portfolio health below 60. Immediate AM intervention recommended.',
      clients: [
        { name: 'XYZ Fintech',      location: 'Koramangala · Bengaluru',  am: 'Sneha Iyer',     lockin: 'Out since Feb 2026', health: '48', status: 'At Risk' },
        { name: 'NorthStar Bank',   location: 'Whitefield · Bengaluru',   am: 'Rahul Mehta',    lockin: 'Out since Jan 2026', health: '52', status: 'At Risk' },
        { name: 'QuantBridge Cap',  location: 'Cyber City · Hyderabad',   am: 'Rahul Mehta',    lockin: 'Out since Mar 2026', health: '55', status: 'At Risk' },
        { name: 'GlobalMed',        location: 'Gachibowli · Hyderabad',   am: 'Vikram Rao',     lockin: 'Out since Feb 2026', health: '57', status: 'At Risk' },
        { name: 'VectorAI Labs',    location: 'ORR · Bengaluru',           am: 'Meera Krishnan', lockin: 'Out since Mar 2026', health: '58', status: 'At Risk' },
        { name: 'Coal India',       location: 'Salt Lake · Kolkata',       am: 'Vikram Rao',     lockin: 'Notice served',      health: '59', status: 'Notice' },
        { name: 'DataBridge',       location: 'Baner · Pune',              am: 'Sneha Iyer',     lockin: 'Out since Mar 2026', health: '62', status: 'At Risk' },
        { name: 'Air India GCC',    location: 'Aerocity · Delhi',          am: 'Rohan Desai',    lockin: 'Notice served',      health: '62', status: 'Notice' },
        { name: 'TechVision',       location: 'Golf Course · Gurgaon',     am: 'Rahul Mehta',    lockin: 'Out since Apr 2026', health: '65', status: 'At Risk' },
        { name: 'Axis Bank',        location: 'BKC · Mumbai',              am: 'Karan Patel',    lockin: 'Notice served',      health: '66', status: 'Notice' },
      ],
    },
  },
}

// AM Head — updated metrics with modal data merged
const amheadMetricsWithModals = amheadMetrics.map(m => ({
  ...m,
  ...(amheadMetricModals[m.label] ? { modal: amheadMetricModals[m.label] } : {}),
}))

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
      { label: 'Active Clients', value: '24', status: 'info', modal: { title: 'ORR — Active Clients', type: 'clientList', data: { clients: [
        { name: 'Accenture ORR',   am: 'Dev Kapoor',   seats: '420', health: '78', lockin: 'In LI',     status: 'Good' },
        { name: 'Salesforce India', am: 'Dev Kapoor',   seats: '360', health: '86', lockin: 'In LI',     status: 'Good' },
        { name: 'VectorAI Labs',    am: 'Meera Krishnan',seats: '180', health: '58', lockin: 'Out of LI', status: 'At Risk' },
        { name: 'GlobalTech',       am: 'Dev Kapoor',   seats: '280', health: '72', lockin: 'Out of LI', status: 'Monitor' },
        { name: 'AlphaFinance',     am: 'Priya Sharma', seats: '200', health: '71', lockin: 'Out of LI', status: 'Monitor' },
      ] } } },
      { label: 'Out of Lock-in', value: '8', status: 'warning', highlighted: true, modal: { title: 'ORR — Out of Lock-in', type: 'clientList', data: { note: '⚠ 8 clients outside lock-in.', clients: [
        { name: 'Accenture ORR',  am: 'Dev Kapoor',    seats: '420', health: '78', lockin: 'Out since Mar 2026', status: 'Good' },
        { name: 'GlobalTech',      am: 'Dev Kapoor',    seats: '280', health: '72', lockin: 'Out since Feb 2026', status: 'Monitor' },
        { name: 'AlphaFinance',    am: 'Priya Sharma',  seats: '200', health: '71', lockin: 'Out since Mar 2026', status: 'Monitor' },
        { name: 'VectorAI Labs',   am: 'Meera Krishnan',seats: '180', health: '58', lockin: 'Out since Mar 2026', status: 'At Risk' },
        { name: 'CloudSystems',    am: 'Dev Kapoor',    seats: '110', health: '73', lockin: 'Out since Apr 2026', status: 'Good' },
      ] } } },
      { label: 'Under Notice', value: '0', status: 'positive' },
      { label: 'Unpaid Inv.', value: '38 · ₹2.4Cr', status: 'warning', modal: { title: 'ORR — Unpaid Invoices', type: 'invoiceList', data: { invoices: [
        { id: 'O-INV-001', client: 'Accenture ORR',   invoiceNo: 'ACC-MAR-004', category: 'Monthly',  amount: '₹36.8L', dueDate: '20 Mar', overdueDays: 26 },
        { id: 'O-INV-002', client: 'GlobalTech',       invoiceNo: 'GLT-APR-002', category: 'Monthly',  amount: '₹24.4L', dueDate: '01 Apr', overdueDays: 14 },
        { id: 'O-INV-003', client: 'AlphaFinance',     invoiceNo: 'ALF-APR-001', category: 'VAS',      amount: '₹18.2L', dueDate: '05 Apr', overdueDays: 10 },
        { id: 'O-INV-004', client: 'Salesforce India', invoiceNo: 'SAL-APR-003', category: 'Monthly',  amount: '₹14.6L', dueDate: '10 Apr', overdueDays: 5  },
      ] } } },
      { label: 'Renewals 90d', value: '3', status: 'warning' },
      { label: 'Avg CSAT', value: '8.2', status: 'positive' },
      { label: 'Avg Health', value: '76', status: 'positive' },
      { label: 'Open Tickets', value: '18 · 4 P1', status: 'warning', modal: { title: 'ORR — Open Tickets', type: 'ticketList', data: { tickets: [
        { id: 'TKT-4430', title: 'Chiller unit trip — east block',   client: 'Accenture ORR',  category: 'HVAC',       priority: 1, openDays: 2, slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'TKT-4426', title: 'Lift outage — tower B',            client: 'Salesforce India',category: 'Mechanical', priority: 1, openDays: 1, slaStatus: 'At Risk',    assignee: 'Facilities' },
        { id: 'TKT-4422', title: 'WiFi dead zone — floor 4',         client: 'GlobalTech',      category: 'IT/Network', priority: 1, openDays: 3, slaStatus: 'Breached',   assignee: 'IT Ops' },
        { id: 'TKT-4419', title: 'Access card reader failure',       client: 'AlphaFinance',    category: 'Security',   priority: 1, openDays: 2, slaStatus: 'At Risk',    assignee: 'Security' },
        { id: 'TKT-4414', title: 'Pantry equipment breakdown',       client: 'VectorAI Labs',   category: 'FM',         priority: 2, openDays: 4, slaStatus: 'Within SLA', assignee: 'FM Team' },
      ] } } },
    ],
  },
  {
    name: 'Koramangala',
    location: 'Bengaluru',
    cm: 'Neha Singh',
    status: 'good',
    sparkline: [68, 70, 72, 73, 74, 75, 76],
    metrics: [
      { label: 'Active Clients', value: '22', status: 'info', modal: { title: 'Koramangala — Active Clients', type: 'clientList', data: { clients: [
        { name: 'XYZ Fintech',      am: 'Sneha Iyer',  seats: '240', health: '48', lockin: 'Out of LI', status: 'At Risk' },
        { name: 'Cognizant KOR',    am: 'Sneha Iyer',  seats: '480', health: '76', lockin: 'In LI',     status: 'Good' },
        { name: 'TechCorp India',   am: 'Aditi Nair',  seats: '380', health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Capgemini South',  am: 'Sneha Iyer',  seats: '220', health: '80', lockin: 'In LI',     status: 'Good' },
        { name: 'Infosys Kora.',    am: 'Priya Sharma',seats: '320', health: '82', lockin: 'In LI',     status: 'Good' },
      ] } } },
      { label: 'Out of Lock-in', value: '7', status: 'warning', highlighted: true, modal: { title: 'Koramangala — Out of Lock-in', type: 'clientList', data: { note: '⚠ 7 clients outside lock-in.', clients: [
        { name: 'XYZ Fintech',      am: 'Sneha Iyer',  seats: '240', health: '48', lockin: 'Out since Feb 2026', status: 'At Risk' },
        { name: 'TechCorp India',   am: 'Aditi Nair',  seats: '380', health: '74', lockin: 'Out since Mar 2026', status: 'Monitor' },
        { name: 'NovaCorp',         am: 'Sneha Iyer',  seats: '120', health: '74', lockin: 'Out since Apr 2026', status: 'Good' },
        { name: 'DataBridge',       am: 'Priya Sharma',seats: '140', health: '69', lockin: 'Out since Feb 2026', status: 'Monitor' },
      ] } } },
      { label: 'Under Notice', value: '0', status: 'positive' },
      { label: 'Unpaid Inv.', value: '28 · ₹1.8Cr', status: 'warning', modal: { title: 'Koramangala — Unpaid Invoices', type: 'invoiceList', data: { invoices: [
        { id: 'K-INV-001', client: 'XYZ Fintech',     invoiceNo: 'XYZ-MAR-005', category: 'Monthly',  amount: '₹22.4L', dueDate: '25 Mar', overdueDays: 21 },
        { id: 'K-INV-002', client: 'Cognizant KOR',   invoiceNo: 'COG-APR-004', category: 'Monthly',  amount: '₹18.6L', dueDate: '05 Apr', overdueDays: 10 },
        { id: 'K-INV-003', client: 'TechCorp India',  invoiceNo: 'TCI-APR-003', category: 'VAS',      amount: '₹12.8L', dueDate: '10 Apr', overdueDays: 5  },
        { id: 'K-INV-004', client: 'Capgemini South', invoiceNo: 'CAP-APR-004', category: 'Monthly',  amount: '₹8.4L',  dueDate: '15 Apr', overdueDays: 0  },
      ] } } },
      { label: 'Renewals 90d', value: '2', status: 'info' },
      { label: 'Avg CSAT', value: '8.0', status: 'positive' },
      { label: 'Avg Health', value: '74', status: 'positive' },
      { label: 'Open Tickets', value: '14 · 3 P1', status: 'warning', modal: { title: 'Koramangala — Open Tickets', type: 'ticketList', data: { tickets: [
        { id: 'TKT-4432', title: 'HVAC fault — server room',   client: 'XYZ Fintech',   category: 'HVAC',       priority: 1, openDays: 3, slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'TKT-4428', title: 'Power fluctuation — wing A', client: 'Cognizant KOR', category: 'Electrical', priority: 1, openDays: 1, slaStatus: 'At Risk',    assignee: 'Tech Ops' },
        { id: 'TKT-4424', title: 'Washroom plumbing issue',    client: 'TechCorp India',category: 'FM',         priority: 1, openDays: 2, slaStatus: 'At Risk',    assignee: 'FM Team' },
        { id: 'TKT-4420', title: 'Meeting room AV failure',    client: 'Capgemini South',category: 'AV',        priority: 2, openDays: 4, slaStatus: 'Within SLA', assignee: 'IT Ops' },
      ] } } },
    ],
  },
  {
    name: 'Indiranagar',
    location: 'Bengaluru',
    cm: 'Vikas Agarwal',
    status: 'monitor',
    sparkline: [65, 66, 68, 69, 70, 71, 72],
    metrics: [
      { label: 'Active Clients', value: '18', status: 'info', modal: { title: 'Indiranagar — Active Clients', type: 'clientList', data: { clients: [
        { name: 'HDFC Bank Indi.',  am: 'Anjali Gupta', seats: '280', health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Wipro Indi.',      am: 'Rohan Desai',  seats: '240', health: '68', lockin: 'Out of LI', status: 'Monitor' },
        { name: 'Mindtree',         am: 'Anjali Gupta', seats: '200', health: '72', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Dell India',       am: 'Vikram Rao',   seats: '320', health: '76', lockin: 'In LI',     status: 'Good' },
        { name: 'IBM Indi.',        am: 'Rohan Desai',  seats: '180', health: '62', lockin: 'Notice',    status: 'Notice' },
      ] } } },
      { label: 'Out of Lock-in', value: '6', status: 'warning', highlighted: true, modal: { title: 'Indiranagar — Out of Lock-in', type: 'clientList', data: { note: '⚠ 6 clients outside lock-in.', clients: [
        { name: 'Wipro Indi.',      am: 'Rohan Desai',  seats: '240', health: '68', lockin: 'Out since Jan 2026', status: 'Monitor' },
        { name: 'Dell India',       am: 'Vikram Rao',   seats: '320', health: '76', lockin: 'Out since Mar 2026', status: 'Good' },
        { name: 'Mindtree',         am: 'Anjali Gupta', seats: '200', health: '72', lockin: 'Out since Feb 2026', status: 'Monitor' },
        { name: 'IBM Indi.',        am: 'Rohan Desai',  seats: '180', health: '62', lockin: 'Notice served',      status: 'Notice' },
      ] } } },
      { label: 'Under Notice', value: '1', status: 'negative', modal: { title: 'Indiranagar — Under Notice', type: 'clientList', data: { note: '⛔ Client has served notice. Coordinate exit with ops and AM.', clients: [
        { name: 'IBM Indi.', am: 'Rohan Desai', seats: '180', health: '62', lockin: 'Notice served Apr 03', daysNoticed: 12, status: 'Notice' },
      ] } } },
      { label: 'Unpaid Inv.', value: '24 · ₹1.6Cr', status: 'warning', modal: { title: 'Indiranagar — Unpaid Invoices', type: 'invoiceList', data: { invoices: [
        { id: 'I-INV-001', client: 'Wipro Indi.',   invoiceNo: 'WIP-MAR-006', category: 'Monthly',  amount: '₹18.4L', dueDate: '20 Mar', overdueDays: 26 },
        { id: 'I-INV-002', client: 'HDFC Bank I.',  invoiceNo: 'HDF-APR-002', category: 'Monthly',  amount: '₹14.6L', dueDate: '05 Apr', overdueDays: 10 },
        { id: 'I-INV-003', client: 'Mindtree',      invoiceNo: 'MDT-APR-001', category: 'VAS',      amount: '₹10.2L', dueDate: '10 Apr', overdueDays: 5  },
        { id: 'I-INV-004', client: 'Dell India',    invoiceNo: 'DEL-APR-003', category: 'Monthly',  amount: '₹8.8L',  dueDate: '15 Apr', overdueDays: 0  },
      ] } } },
      { label: 'Renewals 90d', value: '1', status: 'info' },
      { label: 'Avg CSAT', value: '7.8', status: 'warning' },
      { label: 'Avg Health', value: '70', status: 'warning' },
      { label: 'Open Tickets', value: '11 · 2 P1', status: 'info', modal: { title: 'Indiranagar — Open Tickets', type: 'ticketList', data: { tickets: [
        { id: 'TKT-4435', title: 'HVAC breakdown — floor 2',  client: 'IBM Indi.',   category: 'HVAC',       priority: 1, openDays: 3, slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'TKT-4431', title: 'Lift stuck — main tower',   client: 'Wipro Indi.', category: 'Mechanical', priority: 1, openDays: 2, slaStatus: 'At Risk',    assignee: 'Facilities' },
        { id: 'TKT-4427', title: 'Cafeteria equipment fault', client: 'Dell India',  category: 'FM',         priority: 2, openDays: 5, slaStatus: 'Within SLA', assignee: 'FM Team' },
        { id: 'TKT-4423', title: 'Parking bay allocation',    client: 'HDFC Bank I.',category: 'Admin',      priority: 3, openDays: 4, slaStatus: 'Within SLA', assignee: 'Admin' },
      ] } } },
    ],
  },
  {
    name: 'MG Road',
    location: 'Bengaluru',
    cm: 'Deepa Menon',
    status: 'monitor',
    sparkline: [62, 63, 65, 66, 68, 69, 70],
    metrics: [
      { label: 'Active Clients', value: '14', status: 'info', modal: { title: 'MG Road — Active Clients', type: 'clientList', data: { clients: [
        { name: 'ICICI Bank MG',    am: 'Karan Patel',  seats: '260', health: '68', lockin: 'Out of LI', status: 'Monitor' },
        { name: 'Mphasis MG',       am: 'Sneha Iyer',   seats: '200', health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'HP India MG',      am: 'Karan Patel',  seats: '180', health: '70', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Tata Comm. MG',    am: 'Vikram Rao',   seats: '240', health: '65', lockin: 'Notice',    status: 'Notice' },
        { name: 'LTIMindtree MG',   am: 'Sneha Iyer',   seats: '160', health: '76', lockin: 'In LI',     status: 'Good' },
      ] } } },
      { label: 'Out of Lock-in', value: '6', status: 'negative', highlighted: true, modal: { title: 'MG Road — Out of Lock-in', type: 'clientList', data: { note: '⚠ 6 clients outside lock-in — elevated exit risk.', clients: [
        { name: 'ICICI Bank MG',  am: 'Karan Patel', seats: '260', health: '68', lockin: 'Out since Jan 2026', status: 'Monitor' },
        { name: 'Tata Comm. MG',  am: 'Vikram Rao',  seats: '240', health: '65', lockin: 'Notice served',      status: 'Notice' },
        { name: 'HP India MG',    am: 'Karan Patel', seats: '180', health: '70', lockin: 'Out since Feb 2026', status: 'Monitor' },
        { name: 'CloudEdge',      am: 'Sneha Iyer',  seats: '120', health: '66', lockin: 'Out since Mar 2026', status: 'Monitor' },
      ] } } },
      { label: 'Under Notice', value: '1', status: 'negative', modal: { title: 'MG Road — Under Notice', type: 'clientList', data: { note: '⛔ Client has served notice. Coordinate exit checklist with ops.', clients: [
        { name: 'Tata Comm. MG', am: 'Vikram Rao', seats: '240', health: '65', lockin: 'Notice served Apr 04', daysNoticed: 11, status: 'Notice' },
      ] } } },
      { label: 'Unpaid Inv.', value: '20 · ₹1.4Cr', status: 'negative', modal: { title: 'MG Road — Unpaid Invoices', type: 'invoiceList', data: { invoices: [
        { id: 'M-INV-001', client: 'ICICI Bank MG', invoiceNo: 'ICI-MAR-004', category: 'Monthly',  amount: '₹22.4L', dueDate: '18 Mar', overdueDays: 28 },
        { id: 'M-INV-002', client: 'Tata Comm. MG', invoiceNo: 'TAT-APR-001', category: 'Monthly',  amount: '₹18.8L', dueDate: '01 Apr', overdueDays: 14 },
        { id: 'M-INV-003', client: 'HP India MG',   invoiceNo: 'HPI-APR-002', category: 'Monthly',  amount: '₹12.6L', dueDate: '08 Apr', overdueDays: 7  },
        { id: 'M-INV-004', client: 'Mphasis MG',    invoiceNo: 'MPH-APR-001', category: 'VAS',      amount: '₹8.4L',  dueDate: '12 Apr', overdueDays: 3  },
      ] } } },
      { label: 'Renewals 90d', value: '1', status: 'info' },
      { label: 'Avg CSAT', value: '7.6', status: 'warning' },
      { label: 'Avg Health', value: '68', status: 'warning' },
      { label: 'Open Tickets', value: '9 · 2 P1', status: 'info', modal: { title: 'MG Road — Open Tickets', type: 'ticketList', data: { tickets: [
        { id: 'TKT-4438', title: 'HVAC — entire floor down',    client: 'Tata Comm. MG', category: 'HVAC',       priority: 1, openDays: 4, slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'TKT-4434', title: 'Water leakage — server room', client: 'ICICI Bank MG', category: 'Plumbing',   priority: 1, openDays: 2, slaStatus: 'At Risk',    assignee: 'Tech Ops' },
        { id: 'TKT-4429', title: 'AV system down — conf rm',    client: 'HP India MG',   category: 'AV',         priority: 2, openDays: 5, slaStatus: 'Within SLA', assignee: 'IT Ops' },
        { id: 'TKT-4425', title: 'Housekeeping standard drop',  client: 'LTIMindtree MG',category: 'FM',         priority: 2, openDays: 3, slaStatus: 'Within SLA', assignee: 'FM Team' },
      ] } } },
    ],
  },
  {
    name: 'Electronic City',
    location: 'Bengaluru',
    cm: 'Arjun Shah',
    status: 'monitor',
    sparkline: [60, 62, 63, 64, 65, 67, 68],
    metrics: [
      { label: 'Active Clients', value: '12', status: 'info', modal: { title: 'Electronic City — Active Clients', type: 'clientList', data: { clients: [
        { name: 'NorthStar Bank EC', am: 'Anjali Gupta', seats: '180', health: '52', lockin: 'Out of LI', status: 'At Risk' },
        { name: 'Wipro EC',          am: 'Anjali Gupta', seats: '220', health: '68', lockin: 'Out of LI', status: 'Monitor' },
        { name: 'Infosys EC',        am: 'Priya Sharma', seats: '300', health: '76', lockin: 'In LI',     status: 'Good' },
        { name: 'Siemens India EC',  am: 'Vikram Rao',   seats: '160', health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Bosch India EC',    am: 'Anjali Gupta', seats: '140', health: '70', lockin: 'In LI',     status: 'Monitor' },
      ] } } },
      { label: 'Out of Lock-in', value: '5', status: 'negative', highlighted: true, modal: { title: 'Electronic City — Out of Lock-in', type: 'clientList', data: { note: '⚠ 5 clients outside lock-in — monitor closely.', clients: [
        { name: 'NorthStar Bank EC', am: 'Anjali Gupta', seats: '180', health: '52', lockin: 'Out since Jan 2026', status: 'At Risk' },
        { name: 'Wipro EC',          am: 'Anjali Gupta', seats: '220', health: '68', lockin: 'Out since Feb 2026', status: 'Monitor' },
        { name: 'Siemens India EC',  am: 'Vikram Rao',   seats: '160', health: '74', lockin: 'Out since Mar 2026', status: 'Monitor' },
      ] } } },
      { label: 'Under Notice', value: '0', status: 'positive' },
      { label: 'Unpaid Inv.', value: '16 · ₹1.1Cr', status: 'warning', modal: { title: 'Electronic City — Unpaid Invoices', type: 'invoiceList', data: { invoices: [
        { id: 'E-INV-001', client: 'NorthStar Bank EC', invoiceNo: 'NSB-MAR-010', category: 'Monthly',  amount: '₹18.4L', dueDate: '15 Mar', overdueDays: 31 },
        { id: 'E-INV-002', client: 'Wipro EC',           invoiceNo: 'WEC-APR-002', category: 'Monthly',  amount: '₹14.6L', dueDate: '25 Mar', overdueDays: 21 },
        { id: 'E-INV-003', client: 'Infosys EC',         invoiceNo: 'IEC-APR-003', category: 'Monthly',  amount: '₹10.2L', dueDate: '05 Apr', overdueDays: 10 },
        { id: 'E-INV-004', client: 'Siemens India EC',   invoiceNo: 'SIE-APR-001', category: 'VAS',      amount: '₹7.8L',  dueDate: '12 Apr', overdueDays: 3  },
      ] } } },
      { label: 'Renewals 90d', value: '1', status: 'info' },
      { label: 'Avg CSAT', value: '7.5', status: 'warning' },
      { label: 'Avg Health', value: '66', status: 'warning' },
      { label: 'Open Tickets', value: '7 · 1 P1', status: 'info', modal: { title: 'Electronic City — Open Tickets', type: 'ticketList', data: { tickets: [
        { id: 'TKT-4440', title: 'UPS failure — data centre',   client: 'NorthStar Bank EC',category: 'Power',      priority: 1, openDays: 2, slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'TKT-4436', title: 'Chiller maintenance overdue', client: 'Infosys EC',        category: 'HVAC',       priority: 2, openDays: 5, slaStatus: 'Within SLA', assignee: 'Tech Ops' },
        { id: 'TKT-4433', title: 'Security camera offline',     client: 'Wipro EC',          category: 'Security',   priority: 2, openDays: 3, slaStatus: 'Within SLA', assignee: 'Security' },
        { id: 'TKT-4430', title: 'Parking gate malfunction',    client: 'Siemens India EC',  category: 'Admin',      priority: 3, openDays: 6, slaStatus: 'Within SLA', assignee: 'Admin' },
      ] } } },
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

// ─── NEW: AM Head — Meetings completion trend (replaces aging area) ───────────
const amMeetingsTrendChart = {
  type: 'line', title: 'Meetings Completion Trend — My Book (Last 8 Weeks)',
  data: [
    { name: 'W1', booked: 12, completed: 8,  pending: 4 },
    { name: 'W2', booked: 14, completed: 10, pending: 4 },
    { name: 'W3', booked: 16, completed: 12, pending: 4 },
    { name: 'W4', booked: 14, completed: 11, pending: 3 },
    { name: 'W5', booked: 18, completed: 14, pending: 4 },
    { name: 'W6', booked: 16, completed: 13, pending: 3 },
    { name: 'W7', booked: 20, completed: 16, pending: 4 },
    { name: 'W8', booked: 18, completed: 14, pending: 6 },
  ],
  lines: [
    { key: 'booked',    label: 'Booked',    color: '#388bfd' },
    { key: 'completed', label: 'Completed', color: '#3fb950' },
    { key: 'pending',   label: 'Pending',   color: '#f85149' },
  ],
}

// ─── NEW: AM Head — Per-metric zone charts (8 centre metrics × 4 zones) ───────
// Mirrors exactly the 8 metrics shown per centre card in Regional Head view,
// but consolidated across zones so AM Head sees the national picture.
const amheadZoneCharts = [
  // 1. Active clients — pie gives instant share intuition
  {
    type: 'pie', title: 'Active Clients — By Zone',
    data: [
      { name: 'South (312)', value: 312 },
      { name: 'North (186)', value: 186 },
      { name: 'West (142)',  value: 142 },
      { name: 'East (78)',   value:  78 },
    ],
  },
  // 2. Out of Lock-in + Under Notice — retention risk side-by-side
  {
    type: 'bar', title: 'Retention Risk — Out of LI & Under Notice by Zone',
    data: [
      { name: 'South', outLI: 38, notice: 2 },
      { name: 'North', outLI: 28, notice: 1 },
      { name: 'West',  outLI: 21, notice: 1 },
      { name: 'East',  outLI: 14, notice: 0 },
    ],
    lines: [
      { key: 'outLI',  label: 'Out of Lock-in' },
      { key: 'notice', label: 'Under Notice' },
    ],
  },
  // 3. Unpaid invoices value by zone (₹Cr) — collection pressure
  {
    type: 'bar', title: 'Unpaid Invoice Value — By Zone (₹Cr)',
    data: [
      { name: 'South', value: 182 },
      { name: 'West',  value: 148 },
      { name: 'North', value:  68 },
      { name: 'East',  value:  52 },
    ],
    lines: [{ key: 'value', label: 'Unpaid ₹Cr' }],
  },
  // 4. Renewals due in 90d + count of at-risk renewals
  {
    type: 'bar', title: 'Renewals Due (90d) — By Zone',
    data: [
      { name: 'South', renewals: 14, atRisk: 6 },
      { name: 'West',  renewals: 10, atRisk: 4 },
      { name: 'North', renewals:  9, atRisk: 5 },
      { name: 'East',  renewals:  5, atRisk: 2 },
    ],
    lines: [
      { key: 'renewals', label: 'Renewals Due' },
      { key: 'atRisk',   label: 'At-Risk (OOL)' },
    ],
  },
  // 5. Avg CSAT + Avg Health — quality metrics by zone
  {
    type: 'bar', title: 'Avg CSAT & Health Score — By Zone',
    data: [
      { name: 'South', csat: 84, health: 74 },
      { name: 'West',  csat: 81, health: 72 },
      { name: 'North', csat: 79, health: 70 },
      { name: 'East',  csat: 78, health: 68 },
    ],
    lines: [
      { key: 'csat',   label: 'CSAT (×10)' },
      { key: 'health', label: 'Avg Health' },
    ],
  },
  // 6. Open tickets — P1 vs total; operational load distribution
  {
    type: 'bar', title: 'Open Tickets — P1 vs Total by Zone',
    data: [
      { name: 'South', total: 82, p1: 18 },
      { name: 'West',  total: 64, p1: 14 },
      { name: 'North', total: 48, p1: 12 },
      { name: 'East',  total: 28, p1:  6 },
    ],
    lines: [
      { key: 'total', label: 'Total Tickets' },
      { key: 'p1',    label: 'P1 Tickets' },
    ],
  },
]

const amheadZoneTopFive = [
  {
    title: 'Zone Portfolio — Health Score',
    items: [
      { label: 'South (312 clients)', value: '81', change: 1 },
      { label: 'West (142 clients)',  value: '76', change: 0 },
      { label: 'North (186 clients)', value: '76', change: 1 },
      { label: 'East (78 clients)',   value: '71', change: -1 },
    ],
  },
  {
    title: 'Zone Portfolio — Collection Rate',
    items: [
      { label: 'West',  value: '80%', change: 1 },
      { label: 'South', value: '77%', change: 0 },
      { label: 'North', value: '76%', change: 0 },
      { label: 'East',  value: '71%', change: -1 },
    ],
  },
  {
    title: 'Zone Portfolio — Out of Lock-in',
    items: [
      { label: 'South (42 clients)', value: '42', change: 1 },
      { label: 'North (28 clients)', value: '28', change: 1 },
      { label: 'West (21 clients)',  value: '21', change: 0 },
      { label: 'East (14 clients)',  value: '14', change: -1 },
    ],
  },
]

// ─── NEW: CM — Meetings Calendar Data ────────────────────────────────────────
const cmMeetingsCalendarData = [
  {
    id: 'cm-m01', title: 'Weekly Sync', client: 'Deutsche Bank GCC',
    am: 'Karan Patel', date: 'Apr 2', time: 'Wed · 11:00', type: 'Recurring',
    status: 'completed', csatScore: 5, csatComment: 'Very smooth. Team appreciated the facility updates.',
    tasks: [
      { label: 'Prepare agenda & client brief',    status: 'completed',  due: 'Apr 1' },
      { label: 'Share meeting notes within 24h',   status: 'completed',  due: 'Apr 2' },
    ],
  },
  {
    id: 'cm-m02', title: 'Budget Planning', client: 'Accenture',
    am: 'Priya Sharma', date: 'Apr 3', time: 'Thu · 14:00', type: 'Commercial',
    status: 'completed', csatScore: 4, csatComment: 'Good discussion. Some pricing concerns flagged.',
    tasks: [
      { label: 'Prepare commercial deck',       status: 'completed', due: 'Apr 2' },
      { label: 'Share proposal doc',            status: 'completed', due: 'Apr 4' },
    ],
  },
  {
    id: 'cm-m03', title: 'CSAT Review', client: 'Capgemini',
    am: 'Karan Patel', date: 'Apr 3', time: 'Thu · 16:00', type: 'QBR',
    status: 'completed', csatScore: 4, csatComment: 'Client satisfied. Raised minor housekeeping concern.',
    tasks: [
      { label: 'Pull last 90d CSAT data',      status: 'completed',  due: 'Apr 2' },
      { label: 'Action plan for P2 issues',    status: 'on-time',    due: 'Apr 5' },
    ],
  },
  {
    id: 'cm-m04', title: 'Weekly Sync', client: 'Infosys BPO',
    am: 'Sneha Iyer', date: 'Apr 4', time: 'Fri · 15:30', type: 'Recurring',
    status: 'completed', csatScore: 5, csatComment: '',
    tasks: [
      { label: 'Incident log review',           status: 'completed', due: 'Apr 4' },
      { label: 'April meeting plan',            status: 'completed', due: 'Apr 4' },
    ],
  },
  {
    id: 'cm-m05', title: 'Walkthrough', client: 'HSBC GCC',
    am: 'Priya Sharma', date: 'Apr 4', time: 'Fri · 10:00', type: 'Site Visit',
    status: 'completed', csatScore: 4, csatComment: 'Smooth walk. Client noted lift wait times.',
    tasks: [
      { label: 'Coordinate with security team', status: 'completed',  due: 'Apr 3' },
      { label: 'FM snag list post walkthrough', status: 'delayed',    due: 'Apr 5', delayedBy: '1d' },
    ],
  },
  {
    id: 'cm-m06', title: 'Renewal Discussion', client: 'Accenture',
    am: 'Priya Sharma', date: 'Apr 7', time: 'Mon · 14:00', type: 'Renewal',
    status: 'completed', csatScore: 3, csatComment: 'Pricing still a blocker. Requested discount approval.',
    tasks: [
      { label: 'Prepare renewal options deck',  status: 'completed', due: 'Apr 6' },
      { label: 'Escalate discount to AM Head',  status: 'on-time',   due: 'Apr 8' },
    ],
  },
  {
    id: 'cm-m07', title: 'Dispute Review', client: 'Cognizant',
    am: 'Aditi Nair', date: 'Apr 8', time: 'Tue · 15:00', type: 'Dispute',
    status: 'completed', csatScore: 3, csatComment: 'Tense meeting. Client firm on credit claim.',
    tasks: [
      { label: 'Pull HVAC downtime logs',        status: 'completed', due: 'Apr 7' },
      { label: 'Draft dispute response for CM',  status: 'completed', due: 'Apr 8' },
      { label: 'Issue CN post finance approval', status: 'pending',   due: 'Apr 12' },
    ],
  },
  {
    id: 'cm-m08', title: 'Incident RCA', client: 'TechCorp India',
    am: 'Meera Krishnan', date: 'Apr 9', time: 'Wed · 11:00', type: 'Incident',
    status: 'completed', csatScore: 3, csatComment: 'Client acknowledged RCA. Monitoring period agreed.',
    tasks: [
      { label: 'Prepare RCA document',           status: 'completed', due: 'Apr 8' },
      { label: 'Share corrective action plan',   status: 'completed', due: 'Apr 9' },
      { label: 'Follow-up review in 2 weeks',    status: 'pending',   due: 'Apr 22' },
    ],
  },
  {
    id: 'cm-m09', title: 'Save Meeting', client: 'Wipro Tech',
    am: 'Rohan Desai', date: 'Apr 10', time: 'Thu · 16:00', type: 'Escalation',
    status: 'completed', csatScore: 2, csatComment: 'Client very unhappy. Needs strong follow through.',
    tasks: [
      { label: 'Book meeting with client SPOC',  status: 'completed', due: 'Apr 9' },
      { label: 'FM action plan for complaints',  status: 'delayed',   due: 'Apr 10', delayedBy: '2d' },
      { label: 'Weekly check-in for 4 weeks',    status: 'pending',   due: 'Apr 17' },
    ],
  },
  {
    id: 'cm-m10', title: 'Monthly QBR', client: 'Infosys BPO',
    am: 'Sneha Iyer', date: 'Apr 11', time: 'Fri · 15:30', type: 'QBR',
    status: 'completed', csatScore: 5, csatComment: 'Excellent session. Client praised facilities team.',
    tasks: [
      { label: 'Prepare monthly QBR deck',      status: 'completed', due: 'Apr 10' },
      { label: 'Share action tracker',          status: 'completed', due: 'Apr 11' },
      { label: 'Schedule next QBR',             status: 'completed', due: 'Apr 12' },
    ],
  },
  {
    id: 'cm-m11', title: 'Weekly Sync', client: 'Deutsche Bank GCC',
    am: 'Karan Patel', date: 'Apr 14', time: 'Mon · 11:00', type: 'Recurring',
    status: 'booked',
    tasks: [
      { label: 'Prepare agenda',                status: 'pending', due: 'Apr 13' },
      { label: 'Pull last week incident log',   status: 'pending', due: 'Apr 14' },
    ],
  },
  {
    id: 'cm-m12', title: 'Kick-off', client: 'HSBC GCC Phase 2',
    am: 'Priya Sharma', date: 'Apr 15', time: 'Tue · 10:00', type: 'Kick-off',
    status: 'booked',
    tasks: [
      { label: 'Onboarding checklist ready',    status: 'pending', due: 'Apr 14' },
      { label: 'Facilities walk planned',       status: 'pending', due: 'Apr 15' },
      { label: 'Intro DQR presentation',        status: 'pending', due: 'Apr 15' },
    ],
  },
  {
    id: 'cm-m13', title: 'Weekly Sync', client: 'HSBC GCC',
    am: 'Priya Sharma', date: 'Apr 16', time: 'Wed · 14:00', type: 'Recurring',
    status: 'booked',
    tasks: [
      { label: 'Prepare agenda',                status: 'pending', due: 'Apr 15' },
    ],
  },
  {
    id: 'cm-m14', title: 'Monthly QBR', client: 'Deutsche Bank GCC',
    am: 'Karan Patel', date: 'Apr 18', time: 'Fri · 11:00', type: 'QBR',
    status: 'booked',
    tasks: [
      { label: 'Monthly QBR deck',             status: 'pending', due: 'Apr 17' },
      { label: 'Facilities scorecard update',  status: 'pending', due: 'Apr 16' },
      { label: 'Action tracker from Mar QBR',  status: 'pending', due: 'Apr 18' },
    ],
  },
  {
    id: 'cm-m15', title: 'Mod Project Review', client: 'Infosys BPO',
    am: 'Sneha Iyer', date: 'Apr 18', time: 'Fri · 14:30', type: 'Mod Project',
    status: 'booked',
    tasks: [
      { label: 'Cafeteria renovation update',  status: 'pending', due: 'Apr 17' },
      { label: 'Vendor coordination confirmed',status: 'pending', due: 'Apr 18' },
    ],
  },
  {
    id: 'cm-m16', title: 'Weekly Check-in', client: 'Wipro Tech',
    am: 'Rohan Desai', date: 'Apr 21', time: 'Mon · 11:00', type: 'Escalation',
    status: 'booked',
    tasks: [
      { label: 'FM action status update',      status: 'pending', due: 'Apr 20' },
      { label: 'Share improvement metrics',    status: 'pending', due: 'Apr 21' },
    ],
  },
  {
    id: 'cm-m17', title: 'Weekly Sync', client: 'Cognizant',
    am: 'Aditi Nair', date: 'Apr 22', time: 'Tue · 10:00', type: 'Recurring',
    status: 'booked',
    tasks: [
      { label: 'Prepare agenda',               status: 'pending', due: 'Apr 21' },
    ],
  },
  {
    id: 'cm-m18', title: 'HVAC RCA Review', client: 'TechCorp India',
    am: 'Meera Krishnan', date: 'Apr 22', time: 'Tue · 15:00', type: 'Incident',
    status: 'booked',
    tasks: [
      { label: '14-day corrective action report', status: 'pending', due: 'Apr 22' },
      { label: 'Maintenance vendor sign-off',    status: 'pending', due: 'Apr 22' },
    ],
  },
  {
    id: 'cm-m19', title: 'Quarterly Business Review', client: 'Accenture',
    am: 'Priya Sharma', date: 'Apr 25', time: 'Fri · 11:00', type: 'QBR',
    status: 'booked',
    tasks: [
      { label: 'Q1 facilities performance deck', status: 'pending', due: 'Apr 24' },
      { label: 'Renewal commercial summary',     status: 'pending', due: 'Apr 24' },
      { label: 'CSAT analysis across 6 months',  status: 'pending', due: 'Apr 25' },
    ],
  },
  {
    id: 'cm-m20', title: 'Monthly Sync', client: 'Capgemini',
    am: 'Karan Patel', date: 'Apr 28', time: 'Mon · 14:00', type: 'Recurring',
    status: 'booked',
    tasks: [
      { label: 'Prepare agenda',               status: 'pending', due: 'Apr 27' },
    ],
  },
  {
    id: 'cm-m21', title: 'Weekly Sync', client: 'NorthStar Bank',
    am: 'Rahul Mehta', date: 'Apr 9', time: 'Wed · 10:00', type: 'Notice Exit',
    status: 'violated',
    tasks: [
      { label: 'Exit checklist preparation',   status: 'delayed',  due: 'Apr 7', delayedBy: '3d' },
      { label: 'Data destruction compliance',  status: 'pending',  due: 'Apr 15' },
    ],
  },
  {
    id: 'cm-m22', title: 'Dispute Follow-up', client: 'Infosys BPO',
    am: 'Sneha Iyer', date: 'Apr 8', time: 'Tue · 11:00', type: 'Dispute',
    status: 'violated',
    tasks: [
      { label: 'Legal review on clause 8.4',   status: 'delayed',  due: 'Apr 5', delayedBy: '4d' },
      { label: 'Draft CN for ₹5.8L',           status: 'pending',  due: 'Apr 12' },
    ],
  },
]

// ─── NEW: AAM — Metric modal data ─────────────────────────────────────────────
const aamMetricModals = {
  'Daily Checklist': {
    title: 'Daily Checklist — Today',
    subtitle: '6 of 8 items completed · Shift close pending',
    type: 'checklist',
    data: {
      items: [
        { label: 'Morning walkthrough — all floors',    status: 'done' },
        { label: 'Housekeeping inspection sign-off',    status: 'done' },
        { label: 'HVAC + MEP system check & readings',  status: 'done' },
        { label: 'Cafeteria & pantry cleanliness check',status: 'done' },
        { label: 'Parking & security access log',       status: 'done' },
        { label: 'Lift & escalator daily check',        status: 'done' },
        { label: 'Vendor delivery & materials log',     status: 'pending' },
        { label: 'Shift close report submitted',        status: 'pending' },
      ],
    },
  },
  'Incidents Open': {
    title: 'Open Incidents — My Queue',
    subtitle: '6 incidents · 2 breached SLA',
    type: 'ticketList',
    data: {
      tickets: [
        { id: 'INC-1882', title: 'HVAC failure — floor 3',     client: 'Deutsche Bank GCC', category: 'HVAC',     priority: 1, openDays: 1, slaStatus: 'At Risk',    assignee: 'Tech Ops' },
        { id: 'INC-1883', title: 'Lift outage — main bank',    client: 'Infosys BPO',       category: 'Mechanical', priority: 1, openDays: 2, slaStatus: 'Breached',   assignee: 'Facilities' },
        { id: 'INC-1884', title: 'WiFi drop — east wing',      client: 'Accenture',         category: 'IT/Network', priority: 2, openDays: 1, slaStatus: 'Within SLA', assignee: 'IT Ops' },
        { id: 'INC-1876', title: 'Housekeeping complaint',     client: 'Wipro Tech',        category: 'FM',         priority: 2, openDays: 3, slaStatus: 'Breached',   assignee: 'FM Team' },
        { id: 'INC-1870', title: 'Chiller unit trip',          client: 'NorthStar Bank',    category: 'HVAC',       priority: 1, openDays: 4, slaStatus: 'Breached',   assignee: 'Tech Ops' },
        { id: 'INC-1865', title: 'Security access card fault', client: 'Cognizant',         category: 'Security',   priority: 2, openDays: 2, slaStatus: 'Within SLA', assignee: 'Security' },
      ],
    },
  },
  'Disputes — CN Pending': {
    title: 'Disputes — Credit Note Pending',
    subtitle: '3 disputes · ₹4.2L total',
    type: 'invoiceList',
    data: {
      invoices: [
        { id: 'DSP-0841', client: 'Cognizant',      invoiceNo: 'DSP-0841', category: 'Service Quality',  amount: '₹1.8L', dueDate: 'Apr 11', overdueDays: 5 },
        { id: 'DSP-0838', client: 'Wipro Tech',     invoiceNo: 'DSP-0838', category: 'Billing Error',    amount: '₹1.4L', dueDate: 'Apr 10', overdueDays: 6 },
        { id: 'DSP-0834', client: 'TechCorp India', invoiceNo: 'DSP-0834', category: 'SLA Breach',       amount: '₹1.0L', dueDate: 'Apr 09', overdueDays: 7 },
      ],
    },
  },
  'Invoices to Create': {
    title: 'Invoices to Create — April Cycle',
    subtitle: '4 invoices pending AM review',
    type: 'invoiceList',
    data: {
      invoices: [
        { id: 'INV-T01', client: 'Deutsche Bank GCC', invoiceNo: 'DBG-APR-DRAFT', category: 'Monthly',     amount: '₹16.4L', dueDate: 'Apr 15', overdueDays: 0 },
        { id: 'INV-T02', client: 'HSBC GCC',          invoiceNo: 'HSB-APR-DRAFT', category: 'Monthly',     amount: '₹7.8L',  dueDate: 'Apr 15', overdueDays: 0 },
        { id: 'INV-T03', client: 'Infosys BPO',       invoiceNo: 'INF-APR-DRAFT', category: 'VAS + Base',  amount: '₹10.2L', dueDate: 'Apr 18', overdueDays: 0 },
        { id: 'INV-T04', client: 'Cognizant',          invoiceNo: 'COG-APR-DRAFT', category: 'Monthly',    amount: '₹8.6L',  dueDate: 'Apr 20', overdueDays: 0 },
      ],
    },
  },
  'Out of Lock-in (AM book)': {
    title: 'Out of Lock-in — AM Portfolio',
    subtitle: '8 clients · Engagement support required',
    type: 'clientList',
    data: {
      note: '⚠ These clients are outside lock-in and can exit with 30d notice. Support AM in retention.',
      clients: [
        { name: 'Accenture',    location: 'ORR',       am: 'Priya Sharma',   seats: '640', health: '82', lockin: 'Out since Mar 2026', status: 'Renewing' },
        { name: 'Wipro Tech',   location: 'Whitefield',am: 'Rohan Desai',    seats: '320', health: '68', lockin: 'Out since Jan 2026', status: 'Monitor'  },
        { name: 'GlobalTech',   location: 'BKC',       am: 'Priya Sharma',   seats: '180', health: '72', lockin: 'Out since Feb 2026', status: 'Monitor'  },
        { name: 'NovaCorp',     location: 'Kharadi',   am: 'Aditi Nair',     seats: '120', health: '74', lockin: 'Out since Apr 2026', status: 'Good'     },
        { name: 'AlphaFinance', location: 'ORR',       am: 'Karan Patel',    seats: '200', health: '71', lockin: 'Out since Mar 2026', status: 'Monitor'  },
        { name: 'TechVision',   location: 'Baner',     am: 'Sneha Iyer',     seats: '160', health: '75', lockin: 'Out since Apr 2026', status: 'Good'     },
        { name: 'DataBridge',   location: 'Whitefield',am: 'Rohan Desai',    seats: '140', health: '69', lockin: 'Out since Feb 2026', status: 'Monitor'  },
        { name: 'CloudSystems', location: 'ORR',       am: 'Karan Patel',    seats: '110', health: '73', lockin: 'Out since Mar 2026', status: 'Good'     },
      ],
    },
  },
  'Unpaid Invoices': {
    title: 'Unpaid Invoices — AM Portfolio',
    subtitle: '12 invoices · ₹84L total outstanding',
    type: 'invoiceList',
    data: {
      invoices: [
        { id: 'INV-001', client: 'Infosys BPO',       invoiceNo: 'INF-APR-001', category: 'Monthly',     amount: '₹18.2L', dueDate: '20 Mar', overdueDays: 26 },
        { id: 'INV-002', client: 'Cognizant',          invoiceNo: 'COG-MAR-002', category: 'Monthly',     amount: '₹12.4L', dueDate: '25 Mar', overdueDays: 21 },
        { id: 'INV-003', client: 'Accenture',          invoiceNo: 'ACC-APR-001', category: 'Monthly',     amount: '₹9.8L',  dueDate: '01 Apr', overdueDays: 14 },
        { id: 'INV-004', client: 'Wipro Tech',         invoiceNo: 'WIP-MAR-003', category: 'VAS',         amount: '₹6.4L',  dueDate: '28 Mar', overdueDays: 18 },
        { id: 'INV-005', client: 'TechCorp India',     invoiceNo: 'TCI-APR-002', category: 'Monthly',     amount: '₹5.8L',  dueDate: '05 Apr', overdueDays: 10 },
        { id: 'INV-006', client: 'Capgemini',          invoiceNo: 'CAP-APR-001', category: 'Mod Project', amount: '₹4.2L',  dueDate: '10 Apr', overdueDays: 3  },
      ],
    },
  },
  'Under Notice Period': {
    title: 'Clients Under Notice Period',
    subtitle: 'No active notice exits currently',
    type: 'clientList',
    data: {
      note: '✅ No clients are in active exit process at this time.',
      clients: [],
    },
  },
  'Avg Client Health': {
    title: 'Client Health Scores — AM Portfolio',
    subtitle: '82/100 avg · 1 client below 60 (at-risk)',
    type: 'clientList',
    data: {
      clients: [
        { name: 'Deutsche Bank GCC', am: 'Self', seats: '1,240', health: '94', lockin: 'In LI',     status: 'Excellent' },
        { name: 'Infosys BPO',       am: 'Self', seats: '820',   health: '88', lockin: 'In LI',     status: 'Excellent' },
        { name: 'HSBC GCC',          am: 'Self', seats: '280',   health: '86', lockin: 'In LI',     status: 'Good' },
        { name: 'Accenture',         am: 'Self', seats: '640',   health: '82', lockin: 'Out of LI', status: 'Renewing' },
        { name: 'Capgemini',         am: 'Self', seats: '220',   health: '80', lockin: 'In LI',     status: 'Good' },
        { name: 'Cognizant',         am: 'Self', seats: '520',   health: '76', lockin: 'In LI',     status: 'Good' },
        { name: 'TechCorp India',    am: 'Self', seats: '380',   health: '74', lockin: 'In LI',     status: 'Monitor' },
        { name: 'Wipro Tech',        am: 'Self', seats: '320',   health: '68', lockin: 'Out of LI', status: 'Monitor' },
      ],
    },
  },
}

const aamMetricsWithModals = aamMetrics.map(m => ({
  ...m,
  ...(aamMetricModals[m.label] ? { modal: aamMetricModals[m.label] } : {}),
}))

// ─── GRE (Guest Relations Executive) ─────────────────────────────────────────
const greTasks = [
  { label: 'Morning walkthrough — visit sites for open P1 tickets', priority: 'high',   due: 'Today' },
  { label: 'Follow up IT team on 3 pending WiFi/network tickets',   priority: 'high',   due: 'Today' },
  { label: 'Close 5 verified-resolved tickets in Workctrl',         priority: 'high',   due: 'Today' },
  { label: 'Escalate 2 SLA-breached P1s to Ops Head',               priority: 'medium', due: 'Today' },
  { label: 'Assign 8 new Workctrl tickets to respective teams',      priority: 'medium', due: 'EOD' },
  { label: 'Update ticket states for afternoon handover',            priority: 'low',    due: 'EOD' },
]

const greMetrics = [
  { label: 'Total Open Tickets',   value: '28',   change: '14 assigned · 14 to do',              trend: 'up',   status: 'warning',  icon: Shield,       highlight: true },
  { label: 'To Do',                value: '14',   change: 'not yet picked up by teams',           trend: 'up',   status: 'negative', icon: Clock },
  { label: 'Under Review',         value: '8',    change: 'GRE verifying resolution on-site',     trend: 'up',   status: 'info',     icon: Activity },
  { label: 'SLA Breached',         value: '6',    change: '4 P1 · 2 P2 overdue',                  trend: 'up',   status: 'negative', icon: AlertCircle },
  { label: 'P1 Tickets Open',      value: '4',    change: '2 SLA breached · 2 at-risk',           trend: 'up',   status: 'negative', icon: AlertCircle },
  { label: 'Closed Today',         value: '5',    change: 'verified on-site and closed',          trend: 'up',   status: 'positive', icon: CheckCircle2 },
  { label: 'Avg Resolution Time',  value: '18h',  change: 'target 12h · P1 target 4h',            trend: 'down', status: 'warning',  icon: Clock },
  { label: 'SLA Compliance',       value: '78%',  change: 'target 90% · −12% gap this week',      trend: 'down', status: 'negative', icon: Shield },
]

const greTaskComposite = taskComposite({
  total: 28, open: 14, closedSla: 8, violated: 6,
  subtitle: 'My ticket queue · 6 SLA breached · 8 under verification',
})

const greActions = [
  { priority: 'high',   text: 'TKT-4421: HVAC failure floor 3 (Deutsche Bank GCC) — SLA breached 28h. Call Tech Ops lead, get ETA, update ticket', due: 'Immediate', category: 'P1 Escalation' },
  { priority: 'high',   text: 'TKT-4418: Lift outage main bank (Infosys BPO) — 2d open, Facilities not responding. Escalate to Ops Head immediately', due: 'Immediate', category: 'P1 Escalation' },
  { priority: 'high',   text: 'TKT-4410: WiFi drop east wing (Accenture) — IT team assigned 6h ago, no update. Follow up and log response on Workctrl', due: 'Today', category: 'P1 Follow-up' },
  { priority: 'medium', text: 'TKT-4405, TKT-4401: 2 P1s moved to Under Review — go on-site, verify fix, close in Workctrl and notify AM', due: 'Today', category: 'Close Tickets' },
  { priority: 'medium', text: 'TKT-4398: Housekeeping complaint (Cognizant) — FM claims resolved. Verify on-site. Close if confirmed; re-open with photo if not', due: 'Today', category: 'Verification' },
  { priority: 'medium', text: 'TKT-4392, TKT-4389: Parking + cafeteria tickets under review — check with Admin and FM, close verified ones by EOD', due: 'Today', category: 'Under Review' },
  { priority: 'low',    text: '8 new tickets in Workctrl today — assign: IT ×3 (TKT-4430, 31, 32), Tech Ops ×2 (TKT-4433, 34), FM ×2 (TKT-4435, 36), IoT ×1 (TKT-4437)', due: 'EOD', category: 'Assignment' },
]

const greColumns = [
  { key: 'id',        label: 'Ticket ID' },
  { key: 'title',     label: 'Issue' },
  { key: 'client',    label: 'Client' },
  { key: 'category',  label: 'Dept' },
  { key: 'priority',  label: 'Priority' },
  { key: 'openDays',  label: 'Open (d)' },
  { key: 'assignee',  label: 'Assigned To' },
  { key: 'slaStatus', label: 'SLA', type: 'status' },
  { key: 'state',     label: 'State', type: 'status' },
]

const greGrid = [
  { id: 'TKT-4421', title: 'HVAC failure — floor 3',       client: 'Deutsche Bank GCC', category: 'Tech Ops',   priority: 'P1', openDays: 2, assignee: 'Tech Ops',   slaStatus: 'Breached',    state: 'To Do' },
  { id: 'TKT-4418', title: 'Lift outage — main bank',      client: 'Infosys BPO',       category: 'Facilities', priority: 'P1', openDays: 2, assignee: 'Facilities',  slaStatus: 'Breached',    state: 'To Do' },
  { id: 'TKT-4410', title: 'WiFi drop — east wing',        client: 'Accenture',         category: 'IT Ops',     priority: 'P1', openDays: 1, assignee: 'IT Ops',      slaStatus: 'At Risk',     state: 'To Do' },
  { id: 'TKT-4405', title: 'Chiller unit trip',            client: 'NorthStar Bank',    category: 'Tech Ops',   priority: 'P1', openDays: 4, assignee: 'Tech Ops',   slaStatus: 'Breached',    state: 'Under Review' },
  { id: 'TKT-4401', title: 'Security access card failure', client: 'Wipro Tech',        category: 'Security',   priority: 'P2', openDays: 2, assignee: 'Security',    slaStatus: 'Breached',    state: 'Under Review' },
  { id: 'TKT-4398', title: 'Housekeeping complaint',       client: 'Cognizant',         category: 'FM',         priority: 'P2', openDays: 5, assignee: 'FM Team',     slaStatus: 'Within SLA',  state: 'Under Review' },
  { id: 'TKT-4392', title: 'Parking allocation issue',     client: 'TechCorp India',    category: 'Admin',      priority: 'P3', openDays: 6, assignee: 'Admin',       slaStatus: 'Within SLA',  state: 'Under Review' },
  { id: 'TKT-4389', title: 'Cafeteria cleanliness',        client: 'Capgemini',         category: 'FM',         priority: 'P3', openDays: 3, assignee: 'FM Team',     slaStatus: 'Within SLA',  state: 'To Do' },
  { id: 'TKT-4381', title: 'IoT sensor malfunction',       client: 'HSBC GCC',          category: 'IoT',        priority: 'P2', openDays: 1, assignee: 'IoT Team',    slaStatus: 'Within SLA',  state: 'To Do' },
  { id: 'TKT-4375', title: 'Printer offline — level 8',    client: 'Deutsche Bank GCC', category: 'IT Ops',     priority: 'P3', openDays: 1, assignee: 'IT Ops',      slaStatus: 'Within SLA',  state: 'To Do' },
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
    // Tasks strip hidden — AM Head looks at country-wide zones, not daily tasks
    hideTasksStrip: true,
    taskComposite: amheadTaskCompositeWithModal,
    meetingComposite: amheadMeetingCompositeWithModal,
    metrics: amheadMetricsWithModals,
    // Actions render standalone after composites + metrics, above Zone insights
    actionsAfterComposites: true,
    actions: amheadActions,
    actionsTitle: 'National Portfolio Decisions',
    // Zone-based charts + topFive wrapped in collapsible "Zone insights" section
    collapsibleZoneInsights: true,
    charts: amheadZoneCharts,
    // Zone comparison lists instead of AM-specific top/bottom
    topFive: amheadZoneTopFive,
    columns: amheadColumns,
    grid: amheadGrid,
    gridTitle: 'AM Performance Scorecard',
  },
  rehead: {
    compositeNote,
    // Tasks strip hidden
    hideTasksStrip: true,
    // Centre cards render first (before composites) via DashboardPage ordering
    centreCards: reheadCentreCards,
    taskComposite: reheadTaskCompositeWithModal,
    meetingComposite: reheadMeetingCompositeWithModal,
    charts: reheadInsightCharts,
    topFive: [reheadTopFive[0], reheadTopFive[1], reheadTopFive[2]],
    columns: reheadColumns,
    grid: reheadGrid,
    gridTitle: 'Regional Centre Performance',
    actions: reheadActions,
    actionsTitle: 'Regional Insights & Decisions',
  },
  cm: {
    compositeNote,
    // Tasks strip hidden — actions move to top
    hideTasksStrip: true,
    taskComposite: cmTaskComposite,
    meetingComposite: cmMeetingComposite,
    metrics: cmMetricsWithModals,
    topInvoices: cmTopInvoices,
    invoicesPageLink: true,
    disputes: cmDisputes,
    // Actions at top for CM
    actionsFirst: true,
    actions: cmActions,
    actionsTitle: 'Priority Actions — This Centre',
    topFive: cmTopFive,
    charts: cmCharts,
    columns: cmColumns,
    grid: cmGrid,
    gridTitle: 'Centre Client Book',
    // Monthly calendar view (moved from AAM meetings grid)
    meetingsCalendar: cmMeetingsCalendarData,
  },
  am: {
    compositeNote,
    // Tasks strip hidden
    hideTasksStrip: true,
    taskComposite: amTaskComposite,
    meetingComposite: amMeetingComposite,
    metrics: amMetricsWithModals,
    collapsibleMetrics: true,
    actionsFirst: true,
    taskView: amTaskView,
    // Funnel removed per round-2 requirements
    actions: amActionsFiltered,
    actionsTitle: 'Action Required',
    // Top 3 AAMs — SLA Violations removed (index 2); keep health top+bottom only
    topFive: [amTopFive[0], amTopFive[1]],
    // Chart 0: health vs CSAT bar | Chart 1: meetings trend line (replaces aging area)
    charts: [amCharts[0], amMeetingsTrendChart],
    columns: amColumns,
    grid: amGrid,
    gridTitle: 'My Client Book — Account Summary',
  },
  gre: {
    compositeNote,
    tasksList: greTasks,
    tasksTitle: 'GRE — tasks for today',
    taskComposite: greTaskComposite,
    // Actions at top — ticket follow-ups are the primary workflow
    actionsFirst: true,
    actions: greActions,
    actionsTitle: 'Action Required — Ticket Follow-ups',
    // Collapsible metric row — GRE needs quick scan, not deep dive
    metrics: greMetrics,
    collapsibleMetrics: true,
    // No charts, no meetings
    hideCharts: true,
    columns: greColumns,
    grid: greGrid,
    gridTitle: 'Ticket Queue — All Open',
  },
  aam: {
    compositeNote,
    // Tasks strip hidden
    hideTasksStrip: true,
    taskComposite: aamTaskComposite,
    meetingComposite: aamMeetingComposite,
    // All metrics clickable with modals
    metrics: aamMetricsWithModals,
    collapsibleMetrics: true,
    // Actions appear after composites (between composites and metric row)
    actionsAfterComposites: true,
    actions: aamActions,
    actionsTitle: 'Action Required',
    topFive: aamTopFive,
    charts: aamCharts,
    // meetingsGrid removed — moved to CM as calendar
    columns: aamColumns,
    grid: aamGrid,
    gridTitle: "Today's Task & Action Queue",
  },
}
