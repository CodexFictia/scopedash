import { Building2, TrendingUp, FileText, Clock, DollarSign, MapPin, BarChart3, Users, CheckCircle, AlertCircle } from 'lucide-react'

export const nexusREPersonas = [
  { id: 'mgmt',    label: 'Management' },
  { id: 'rehead',  label: 'RE Head' },
  { id: 'txnmgr',  label: 'Transaction Manager' },
  { id: 'reuser',  label: 'RE User' },
  { id: 'finance', label: 'Finance' },
]

export const nexusREFilters = [
  { id: 'city',    label: 'City',    options: ['All Cities', 'Bengaluru', 'Pune', 'Hyderabad', 'Mumbai', 'Delhi', 'Chennai'] },
  { id: 'type',    label: 'Type',    options: ['All Types', 'New Lease', 'Renewal', 'Expansion', 'Surrender', 'Acquisition'] },
  { id: 'status',  label: 'Status',  options: ['All Statuses', 'Active', 'In Progress', 'Pending', 'Completed', 'At Risk'] },
]

// ─── MANAGEMENT ───────────────────────────────────────────────────────────────
const mgmtMetrics = [
  { label: 'Total Portfolio Value',     value: '₹24.6Cr',  change: '+8.4% YoY',           trend: 'up',   status: 'positive', icon: DollarSign, highlight: true },
  { label: 'Active Transactions',       value: '18',       change: '6 closing this month', trend: 'up',   status: 'info',     icon: Building2 },
  { label: 'Avg Deal Size',             value: '₹1.37Cr',  change: '+12% vs last quarter', trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Pipeline Value',            value: '₹8.2Cr',   change: '14 qualified leads',   trend: 'up',   status: 'positive', icon: BarChart3 },
  { label: 'Lease Renewals Due (90d)',  value: '7',        change: '₹3.4Cr at risk',       trend: 'up',   status: 'warning',  icon: Clock },
]
const mgmtActions = [
  { priority: 'high',   text: '2 lease renewals (₹1.8Cr combined) expiring in 45 days — no negotiation started', due: 'Apr 5', category: 'Renewal' },
  { priority: 'high',   text: 'BKC site (12,000 sqft) — LOI deadline Apr 8, counter-offer pending sign-off', due: 'Apr 8', category: 'Acquisition' },
  { priority: 'medium', text: 'Market analysis for Q2 FY26 expansion plan (Hyderabad + Chennai) pending', due: 'Apr 10', category: 'Strategy' },
  { priority: 'medium', text: 'Vendor due diligence for 3 new landlord partners incomplete', due: 'Apr 12', category: 'Compliance' },
  { priority: 'low',    text: 'Portfolio valuation report (annual) — coordinate with Finance for submission', due: 'Apr 15', category: 'Reports' },
]
const mgmtTopFive = [
  {
    title: 'Top 5 Properties by Value',
    items: [
      { label: 'Whitefield Towers, Blore',  value: '₹5.8Cr', change: 1 },
      { label: 'One Indiabulls, Mumbai',     value: '₹4.2Cr', change: 0 },
      { label: 'Cyber Hub, Gurgaon',         value: '₹3.6Cr', change: 1 },
      { label: 'Embassy Tech Village, Blore',value: '₹3.1Cr', change: 0 },
      { label: 'Raheja Mindspace, Hyd',      value: '₹2.9Cr', change: -1 },
    ],
  },
  {
    title: 'Top 5 Cities by Active Deals',
    items: [
      { label: 'Bengaluru',   value: '6', change: 1 },
      { label: 'Pune',        value: '4', change: 0 },
      { label: 'Mumbai',      value: '3', change: 1 },
      { label: 'Hyderabad',   value: '3', change: -1 },
      { label: 'Delhi NCR',   value: '2', change: 0 },
    ],
  },
]
const mgmtCharts = [
  {
    type: 'bar', title: 'Deal Closures by Quarter (₹Cr)',
    data: [
      { name: 'Q2 FY25', closed: 4.2, target: 5.0 }, { name: 'Q3 FY25', closed: 5.8, target: 5.0 },
      { name: 'Q4 FY25', closed: 6.1, target: 6.0 }, { name: 'Q1 FY26', closed: 5.4, target: 6.5 },
    ],
    lines: [{ key: 'closed', label: 'Closed (₹Cr)' }, { key: 'target', label: 'Target' }],
  },
  {
    type: 'line', title: 'Pipeline Build vs Closures (Monthly)',
    data: [
      { name: 'Oct', pipeline: 7.2, closed: 1.8 }, { name: 'Nov', pipeline: 8.4, closed: 2.1 },
      { name: 'Dec', pipeline: 7.8, closed: 2.8 }, { name: 'Jan', pipeline: 8.8, closed: 1.6 },
      { name: 'Feb', pipeline: 9.2, closed: 2.4 }, { name: 'Mar', pipeline: 8.2, closed: 2.2 },
    ],
    lines: [{ key: 'pipeline', label: 'Pipeline (₹Cr)' }, { key: 'closed', label: 'Closed (₹Cr)' }],
  },
  {
    type: 'pie', title: 'Portfolio Mix by Transaction Type',
    data: [
      { name: 'New Lease',   value: 38 }, { name: 'Renewal',   value: 28 },
      { name: 'Expansion',   value: 18 }, { name: 'Acquisition',value: 10 },
      { name: 'Surrender',   value: 6  },
    ],
    lines: [],
  },
]
const mgmtColumns = [
  { key: 'property',  label: 'Property' },
  { key: 'city',      label: 'City' },
  { key: 'type',      label: 'Type' },
  { key: 'area',      label: 'Area (sqft)', muted: true },
  { key: 'value',     label: 'Deal Value' },
  { key: 'stage',     label: 'Stage' },
  { key: 'closeDate', label: 'Close Date' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]
const mgmtGrid = [
  { property: 'BKC Tower, Bandra',          city: 'Mumbai',    type: 'Acquisition',  area: '12,000', value: '₹2.4Cr', stage: 'LOI Stage',     closeDate: 'Apr 8',  status: 'In Progress', action: 'View' },
  { property: 'Embassy TechVillage Ext.',   city: 'Bengaluru', type: 'Expansion',    area: '8,500',  value: '₹1.8Cr', stage: 'Negotiation',   closeDate: 'Apr 15', status: 'In Progress', action: 'View' },
  { property: 'Prestige Shantiniketan',     city: 'Bengaluru', type: 'New Lease',    area: '6,200',  value: '₹1.2Cr', stage: 'Due Diligence', closeDate: 'Apr 20', status: 'In Progress', action: 'View' },
  { property: 'Raheja Mindspace T4',        city: 'Hyderabad', type: 'Renewal',      area: '9,000',  value: '₹1.8Cr', stage: 'Expiring',      closeDate: 'May 1',  status: 'At Risk',     action: 'Renew' },
  { property: 'One Indiabulls A5',          city: 'Mumbai',    type: 'Renewal',      area: '7,200',  value: '₹1.6Cr', stage: 'Expiring',      closeDate: 'May 15', status: 'Pending',     action: 'Renew' },
  { property: 'Cybercity Tower B',          city: 'Delhi NCR', type: 'New Lease',    area: '5,400',  value: '₹1.1Cr', stage: 'Final Docs',    closeDate: 'Apr 10', status: 'In Progress', action: 'View' },
  { property: 'Lakeview Towers, Pune',      city: 'Pune',      type: 'Expansion',    area: '3,800',  value: '₹78L',   stage: 'Signed',        closeDate: 'Closed', status: 'Completed',   action: 'View' },
  { property: 'Global Infocity, Chennai',   city: 'Chennai',   type: 'New Lease',    area: '4,200',  value: '₹84L',   stage: 'Site Survey',   closeDate: 'May 20', status: 'Pending',     action: 'View' },
]

// ─── RE HEAD ──────────────────────────────────────────────────────────────────
const reheadMetrics = [
  { label: 'Active Deals in Pipeline',   value: '14',    change: '3 added this week',    trend: 'up',   status: 'info',     icon: Building2, highlight: true },
  { label: 'Deal Conversion Rate',       value: '38.4%', change: '+2.1% vs last qtr',    trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Pipeline Coverage',          value: '2.4x',  change: 'Target: 2.0x',         trend: 'up',   status: 'positive', icon: BarChart3 },
  { label: 'Avg Deal Cycle (days)',       value: '42d',   change: '-6d vs last quarter',  trend: 'down', status: 'positive', icon: Clock },
  { label: 'Deals Closing This Month',   value: '4',     change: '₹2.8Cr total',         trend: 'up',   status: 'positive', icon: CheckCircle },
]
const reheadActions = [
  { priority: 'high',   text: 'Embassy TechVillage expansion: landlord wants commercial response within 72hrs', due: 'Apr 4', category: 'Negotiation' },
  { priority: 'high',   text: 'BKC LOI — legal review incomplete, blocking counter-offer to client', due: 'Apr 5', category: 'Legal' },
  { priority: 'medium', text: 'Hyderabad site shortlist for new 500-seat GCC client — 3 options ready for presentation', due: 'Apr 7', category: 'Site Selection' },
  { priority: 'medium', text: 'Market intel: DLF Cybercity offered competitor ₹20/sqft below our rate — respond', due: 'Apr 8', category: 'Market' },
  { priority: 'low',    text: 'Team velocity review: Rahul K. pipeline stale (>30d no movement on 4 deals)', due: 'Apr 5', category: 'Team' },
]
const reheadTopFive = [
  {
    title: 'Top 5 Deals by Value',
    items: [
      { label: 'BKC Tower Acquisition',      value: '₹2.4Cr', change: 0 },
      { label: 'Embassy Extension',          value: '₹1.8Cr', change: 1 },
      { label: 'Raheja Renewal',             value: '₹1.8Cr', change: -1 },
      { label: 'One Indiabulls Renewal',     value: '₹1.6Cr', change: 0 },
      { label: 'Prestige Shantiniketan',     value: '₹1.2Cr', change: 1 },
    ],
  },
  {
    title: 'Top 5 Deals by Velocity Risk',
    items: [
      { label: 'Cybercity Delhi (stale 32d)', value: 'High',   change: -1 },
      { label: 'Chennai Infocity (stale 24d)',value: 'High',   change: 0 },
      { label: 'Raheja Renewal (42d old)',    value: 'Medium', change: 0 },
      { label: 'Pune Lakeview (closed)',      value: 'Low',    change: 1 },
      { label: 'Embassy Ext (fast moving)',   value: 'Low',    change: 1 },
    ],
  },
]
const reheadCharts = [
  {
    type: 'bar', title: 'Deal Stage Distribution (count)',
    data: [
      { name: 'Prospecting', count: 4 }, { name: 'Site Survey', count: 3 }, { name: 'Negotiation', count: 3 },
      { name: 'Due Diligence', count: 2 }, { name: 'LOI Stage', count: 1 }, { name: 'Final Docs', count: 1 },
    ],
    lines: [{ key: 'count', label: 'Deals' }],
  },
  {
    type: 'line', title: 'Win Rate Trend (Monthly %)',
    data: [
      { name: 'Oct', winRate: 32 }, { name: 'Nov', winRate: 36 }, { name: 'Dec', winRate: 35 },
      { name: 'Jan', winRate: 38 }, { name: 'Feb', winRate: 36 }, { name: 'Mar', winRate: 38 },
    ],
    lines: [{ key: 'winRate', label: 'Win Rate %' }],
  },
]
const reheadColumns = mgmtColumns
const reheadGrid = mgmtGrid

// ─── TRANSACTION MANAGER ──────────────────────────────────────────────────────
const txnmgrMetrics = [
  { label: 'My Active Deals',           value: '6',    change: '2 closings this month', trend: 'up',   status: 'info',    icon: FileText, highlight: true },
  { label: 'Next Action Due',           value: 'Today',change: 'BKC LOI counter-offer', trend: 'up',   status: 'negative',icon: AlertCircle },
  { label: 'Deal Age (avg)',            value: '34d',  change: 'Oldest: 68 days',       trend: 'up',   status: 'warning', icon: Clock },
  { label: 'Documents Pending',         value: '8',    change: '3 critical for close',  trend: 'up',   status: 'warning', icon: FileText },
  { label: 'Site Visits Scheduled',     value: '3',    change: 'This week',             trend: 'up',   status: 'info',    icon: MapPin },
]
const txnmgrActions = [
  { priority: 'high',   text: 'BKC LOI counter-offer: rent ₹2,800/sqft vs asked ₹3,100 — draft response', due: 'Today', category: 'Negotiation' },
  { priority: 'high',   text: 'Prestige DD: structural report and RERA certificate missing — collect by Apr 5', due: 'Apr 5', category: 'Due Diligence' },
  { priority: 'medium', text: 'Chennai site visit with client GM scheduled Apr 4 — prep info deck', due: 'Apr 4', category: 'Site Visit' },
  { priority: 'medium', text: 'Cybercity Delhi: decision-maker not responding for 2 weeks — escalate to RE Head', due: 'Apr 5', category: 'Escalation' },
  { priority: 'low',    text: 'Update CRM stage and next steps for all 6 active deals — hygiene check', due: 'Apr 3', category: 'CRM Hygiene' },
]
const txnmgrTopFive = [
  {
    title: 'My Deals by Stage',
    items: [
      { label: 'BKC Tower – LOI Stage',        value: '68d', change: -1 },
      { label: 'Embassy Ext – Negotiation',    value: '42d', change: 0 },
      { label: 'Prestige – Due Diligence',     value: '28d', change: 0 },
      { label: 'Cybercity Delhi – Final Docs', value: '14d', change: 0 },
      { label: 'Chennai – Site Survey',        value: '8d',  change: 0 },
    ],
  },
  {
    title: 'Key Documents by Status',
    items: [
      { label: 'BKC – LOI Counter Draft',  value: 'Pending', change: -1 },
      { label: 'Prestige – RERA Cert',     value: 'Missing', change: -1 },
      { label: 'Prestige – Struct. Report',value: 'Missing', change: 0 },
      { label: 'Embassy – Lease Draft v3', value: 'Review',  change: 0 },
      { label: 'Delhi – Fit-out Spec',     value: 'Ready',   change: 1 },
    ],
  },
]
const txnmgrCharts = [
  {
    type: 'bar', title: 'My Deal Ages (days)',
    data: [
      { name: 'BKC Tower',     age: 68 }, { name: 'Embassy',   age: 42 }, { name: 'Prestige', age: 28 },
      { name: 'Cybercity',     age: 14 }, { name: 'Chennai',   age: 8  }, { name: 'Pune Ext', age: 5  },
    ],
    lines: [{ key: 'age', label: 'Age (days)' }],
  },
  {
    type: 'line', title: 'Deal Progress Score (0–100) by Deal',
    data: [
      { name: 'Week 1', BKC: 20, Embassy: 45, Prestige: 60, Cybercity: 75 },
      { name: 'Week 2', BKC: 30, Embassy: 55, Prestige: 68, Cybercity: 80 },
      { name: 'Week 3', BKC: 35, Embassy: 62, Prestige: 72, Cybercity: 85 },
      { name: 'Week 4', BKC: 40, Embassy: 70, Prestige: 75, Cybercity: 88 },
    ],
    lines: [
      { key: 'BKC', label: 'BKC Tower' }, { key: 'Embassy', label: 'Embassy' },
      { key: 'Prestige', label: 'Prestige' }, { key: 'Cybercity', label: 'Cybercity' },
    ],
  },
]
const txnmgrColumns = [
  { key: 'deal',       label: 'Deal / Property' },
  { key: 'city',       label: 'City' },
  { key: 'type',       label: 'Type' },
  { key: 'value',      label: 'Value' },
  { key: 'stage',      label: 'Stage' },
  { key: 'nextAction', label: 'Next Action', muted: true },
  { key: 'dueDate',    label: 'Due Date' },
  { key: 'status',     label: 'Status', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const txnmgrGrid = [
  { deal: 'BKC Tower, Bandra',        city: 'Mumbai',    type: 'Acquisition',  value: '₹2.4Cr', stage: 'LOI',           nextAction: 'Draft counter-offer',  dueDate: 'Today',  status: 'In Progress', action: 'Edit' },
  { deal: 'Embassy Extension',        city: 'Bengaluru', type: 'Expansion',    value: '₹1.8Cr', stage: 'Negotiation',   nextAction: 'Commercial response',  dueDate: 'Apr 4',  status: 'In Progress', action: 'Edit' },
  { deal: 'Prestige Shantiniketan',   city: 'Bengaluru', type: 'New Lease',    value: '₹1.2Cr', stage: 'Due Diligence', nextAction: 'Collect RERA + struct', dueDate: 'Apr 5',  status: 'In Progress', action: 'Edit' },
  { deal: 'Cybercity Tower B, Delhi', city: 'Delhi',     type: 'New Lease',    value: '₹1.1Cr', stage: 'Final Docs',    nextAction: 'Chase decision-maker', dueDate: 'Apr 5',  status: 'At Risk',     action: 'Escalate' },
  { deal: 'Global Infocity, Chennai', city: 'Chennai',   type: 'New Lease',    value: '₹84L',   stage: 'Site Survey',   nextAction: 'Client site visit',    dueDate: 'Apr 4',  status: 'In Progress', action: 'View' },
  { deal: 'Lakeview Towers, Pune',    city: 'Pune',      type: 'Expansion',    value: '₹78L',   stage: 'Signed',        nextAction: 'Handover to Ops',      dueDate: 'Done',   status: 'Completed',   action: 'View' },
]

// ─── RE USER ──────────────────────────────────────────────────────────────────
const reuserMetrics = [
  { label: 'My Tasks Due Today',     value: '4',    change: '2 critical',           trend: 'up',   status: 'warning', icon: CheckCircle, highlight: true },
  { label: 'Pending Approvals',      value: '2',    change: '1 awaiting >3 days',   trend: 'up',   status: 'warning', icon: Clock },
  { label: 'Docs to Collect',        value: '5',    change: '3 for active deals',   trend: 'up',   status: 'negative',icon: FileText },
  { label: 'Site Visits This Week',  value: '3',    change: '1 completed, 2 due',   trend: 'neutral',status: 'info',  icon: MapPin },
  { label: 'CRM Records Updated',    value: '78%',  change: '4 deals need update',  trend: 'down', status: 'warning', icon: BarChart3 },
]
const reuserActions = [
  { priority: 'high',   text: 'Site visit report for Chennai Infocity (Apr 2) not submitted yet', due: 'Today', category: 'Report' },
  { priority: 'high',   text: 'Collect RERA certificate from Prestige developer — follow up email sent 2 days ago', due: 'Today', category: 'Document' },
  { priority: 'medium', text: 'Prep client brief for Hyderabad site presentation (Apr 7)', due: 'Apr 6', category: 'Presentation' },
  { priority: 'medium', text: 'Update Cybercity deal stage in CRM — last updated 8 days ago', due: 'Today', category: 'CRM Update' },
  { priority: 'low',    text: 'Schedule Q2 market survey calls for Bengaluru micro-markets', due: 'Apr 10', category: 'Research' },
]
const reuserTopFive = [
  {
    title: 'My Tasks by Category',
    items: [
      { label: 'Document Collection', value: '5', change: -1 },
      { label: 'CRM Updates',         value: '4', change: 0 },
      { label: 'Site Visit Reports',  value: '3', change: -1 },
      { label: 'Client Presentations',value: '2', change: 0 },
      { label: 'Market Research',     value: '2', change: 0 },
    ],
  },
  {
    title: 'Deals I Support',
    items: [
      { label: 'Prestige Shantiniketan', value: 'Active', change: 0 },
      { label: 'Cybercity Tower B',      value: 'Active', change: 0 },
      { label: 'Chennai Infocity',       value: 'Active', change: 0 },
      { label: 'Hyderabad – Pipeline',   value: 'Active', change: 0 },
      { label: 'Pune Lakeview',          value: 'Closed', change: 1 },
    ],
  },
]
const reuserCharts = [
  {
    type: 'bar', title: 'My Task Completion Rate (Weekly)',
    data: [
      { name: 'Mar W1', done: 18, total: 22 }, { name: 'Mar W2', done: 21, total: 24 },
      { name: 'Mar W3', done: 16, total: 20 }, { name: 'Mar W4', done: 19, total: 23 },
      { name: 'Apr W1', done: 4,  total: 16 },
    ],
    lines: [{ key: 'done', label: 'Completed' }, { key: 'total', label: 'Assigned' }],
  },
]
const reuserColumns = [
  { key: 'task',     label: 'Task' },
  { key: 'deal',     label: 'Deal / Property' },
  { key: 'category', label: 'Category', muted: true },
  { key: 'due',      label: 'Due Date' },
  { key: 'priority', label: 'Priority', type: 'status' },
  { key: 'status',   label: 'Status', type: 'status' },
  { key: 'action',   label: 'Action', type: 'action', sortable: false },
]
const reuserGrid = [
  { task: 'Submit Chennai site visit report',    deal: 'Chennai Infocity',    category: 'Report',    due: 'Today',  priority: 'High',   status: 'Open',        action: 'Submit' },
  { task: 'Collect RERA cert – Prestige',        deal: 'Prestige Shantini.',  category: 'Document',  due: 'Today',  priority: 'High',   status: 'Pending',     action: 'Follow Up' },
  { task: 'Prep Hyderabad site brief',           deal: 'Hyd Pipeline',        category: 'Presentation', due: 'Apr 6', priority: 'Medium', status: 'In Progress', action: 'Edit' },
  { task: 'Update Cybercity CRM record',         deal: 'Cybercity, Delhi',    category: 'CRM Update',due: 'Today',  priority: 'Medium', status: 'Pending',     action: 'Update' },
  { task: 'Embassy commercial summary',          deal: 'Embassy Extension',   category: 'Document',  due: 'Apr 4',  priority: 'Medium', status: 'In Progress', action: 'Edit' },
  { task: 'Bengaluru micro-market research',     deal: 'Q2 Pipeline',         category: 'Research',  due: 'Apr 10', priority: 'Low',    status: 'Open',        action: 'Start' },
]

// ─── RE FINANCE ───────────────────────────────────────────────────────────────
const refinanceMetrics = [
  { label: 'Total Lease Obligations (PA)', value: '₹5.4Cr',  change: 'Active leases: 12',     trend: 'up',   status: 'info',    icon: DollarSign, highlight: true },
  { label: 'Payments Due This Month',      value: '₹68.2L',  change: '4 invoices pending',    trend: 'up',   status: 'warning', icon: Clock },
  { label: 'Security Deposits Held',       value: '₹2.1Cr',  change: '8 properties',          trend: 'neutral', status: 'neutral', icon: DollarSign },
  { label: 'CAM Charges Reconciled',       value: '92.4%',   change: '2 properties pending',  trend: 'up',   status: 'positive', icon: CheckCircle },
  { label: 'Overdue Rent Payments',        value: '0',       change: '100% on-time this month',trend: 'up',  status: 'positive', icon: CheckCircle },
]
const refinanceActions = [
  { priority: 'high',   text: 'Whitefield lease rent ₹18.4L due Apr 5 — initiate payment today', due: 'Today', category: 'Rent Payment' },
  { priority: 'medium', text: 'CAM charges for BKC property (₹3.2L) — reconcile against actual usage', due: 'Apr 8', category: 'CAM Reconciliation' },
  { priority: 'medium', text: 'Security deposit refund for Pune (surrendered) — ₹24L process with landlord', due: 'Apr 10', category: 'Deposit' },
  { priority: 'low',    text: 'Annual lease schedule update for FY26-27 budget planning', due: 'Apr 15', category: 'Planning' },
]
const refinanceTopFive = [
  {
    title: 'Top 5 Properties by Annual Rent',
    items: [
      { label: 'Whitefield Towers',  value: '₹96L', change: 0 },
      { label: 'One Indiabulls',     value: '₹84L', change: 0 },
      { label: 'Cyber Hub, Gurgaon', value: '₹72L', change: 0 },
      { label: 'Raheja Mindspace',   value: '₹66L', change: 0 },
      { label: 'Embassy TechVillage',value: '₹60L', change: 0 },
    ],
  },
  {
    title: 'Upcoming Payments (30 days)',
    items: [
      { label: 'Whitefield – Apr 5',     value: '₹18.4L', change: 0 },
      { label: 'Cybercity – Apr 10',     value: '₹14.2L', change: 0 },
      { label: 'One Indiabulls – Apr 12',value: '₹12.6L', change: 0 },
      { label: 'Raheja – Apr 18',        value: '₹11.8L', change: 0 },
      { label: 'Embassy – Apr 22',       value: '₹11.2L', change: 0 },
    ],
  },
]
const refinanceCharts = [
  {
    type: 'bar', title: 'Monthly Rent Payments (₹L)',
    data: [
      { name: 'Oct', paid: 56.2 }, { name: 'Nov', paid: 58.4 }, { name: 'Dec', paid: 62.1 },
      { name: 'Jan', paid: 60.8 }, { name: 'Feb', paid: 61.4 }, { name: 'Mar', paid: 63.2 },
    ],
    lines: [{ key: 'paid', label: 'Rent Paid (₹L)' }],
  },
  {
    type: 'pie', title: 'Lease Cost by City',
    data: [
      { name: 'Bengaluru', value: 36 }, { name: 'Mumbai', value: 28 },
      { name: 'Pune',      value: 14 }, { name: 'Hyderabad', value: 12 },
      { name: 'Delhi',     value: 10 },
    ],
    lines: [],
  },
]
const refinanceColumns = [
  { key: 'property',   label: 'Property' },
  { key: 'city',       label: 'City' },
  { key: 'annualRent', label: 'Annual Rent' },
  { key: 'dueDate',    label: 'Next Due' },
  { key: 'amount',     label: 'Amount Due' },
  { key: 'leaseEnd',   label: 'Lease End', muted: true },
  { key: 'status',     label: 'Status', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const refinanceGrid = [
  { property: 'Whitefield Towers',    city: 'Bengaluru', annualRent: '₹96L',  dueDate: 'Apr 5',  amount: '₹18.4L', leaseEnd: 'Mar 2028', status: 'Pending',   action: 'Pay'    },
  { property: 'Cybercity Tower B',    city: 'Delhi NCR', annualRent: '₹72L',  dueDate: 'Apr 10', amount: '₹14.2L', leaseEnd: 'Dec 2027', status: 'Pending',   action: 'Pay'    },
  { property: 'One Indiabulls A5',    city: 'Mumbai',    annualRent: '₹84L',  dueDate: 'Apr 12', amount: '₹12.6L', leaseEnd: 'May 2026', status: 'Pending',   action: 'Pay'    },
  { property: 'Raheja Mindspace T4',  city: 'Hyderabad', annualRent: '₹66L',  dueDate: 'Apr 18', amount: '₹11.8L', leaseEnd: 'Apr 2026', status: 'Pending',   action: 'Pay'    },
  { property: 'Embassy TechVillage',  city: 'Bengaluru', annualRent: '₹60L',  dueDate: 'Apr 22', amount: '₹11.2L', leaseEnd: 'Sep 2027', status: 'Pending',   action: 'Pay'    },
  { property: 'Prestige Shantini.',   city: 'Bengaluru', annualRent: '₹48L',  dueDate: 'May 1',  amount: '₹8.4L',  leaseEnd: 'Mar 2029', status: 'Active',    action: 'View'   },
  { property: 'Baner Lakeview',       city: 'Pune',      annualRent: '₹42L',  dueDate: 'Paid',   amount: '—',      leaseEnd: 'Aug 2027', status: 'Completed', action: 'View'   },
]

export const nexusREData = {
  mgmt:    { metrics: mgmtMetrics,    actions: mgmtActions,    topFive: mgmtTopFive,    charts: mgmtCharts,    columns: mgmtColumns,    grid: mgmtGrid,    gridTitle: 'RE Portfolio — All Active Transactions' },
  rehead:  { metrics: reheadMetrics,  actions: reheadActions,  topFive: reheadTopFive,  charts: reheadCharts,  columns: reheadColumns,  grid: reheadGrid,  gridTitle: 'Deal Pipeline Overview' },
  txnmgr:  { metrics: txnmgrMetrics,  actions: txnmgrActions,  topFive: txnmgrTopFive,  charts: txnmgrCharts,  columns: txnmgrColumns,  grid: txnmgrGrid,  gridTitle: 'My Active Deals — Tracker' },
  reuser:  { metrics: reuserMetrics,  actions: reuserActions,  topFive: reuserTopFive,  charts: reuserCharts,  columns: reuserColumns,  grid: reuserGrid,  gridTitle: 'My Task List' },
  finance: { metrics: refinanceMetrics, actions: refinanceActions, topFive: refinanceTopFive, charts: refinanceCharts, columns: refinanceColumns, grid: refinanceGrid, gridTitle: 'Lease Payment Schedule' },
}
