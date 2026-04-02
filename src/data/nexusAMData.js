import { Users, TrendingUp, Building2, Star, Clock, AlertCircle, CheckCircle, DollarSign, BarChart3, Activity, FileText, MessageSquare, Calendar, ListChecks } from 'lucide-react'

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
  { id: 'city',    label: 'City',    options: ['All Cities', 'Bengaluru', 'Pune', 'Mumbai', 'Hyderabad', 'Delhi', 'Chennai'] },
  { id: 'client',  label: 'Client',  options: ['All Clients', 'Infosys BPO', 'Deutsche Bank GCC', 'Accenture India', 'Wipro Tech', 'Cognizant', 'HSBC GCC', 'XYZ Fintech'] },
  { id: 'status',  label: 'Status',  options: ['All Statuses', 'Paid', 'Pending', 'Overdue', 'Disputed', 'Partial Payment'] },
]

// ─── MANAGEMENT ───────────────────────────────────────────────────────────────
const mgmtMetrics = [
  { label: 'Total Client Locations',   value: '148',    change: '+6 this month',            trend: 'up',   status: 'positive', icon: Building2, highlight: true },
  { label: 'Invoice Collection Rate',  value: '84.6%',  change: '-2.1% vs last month',      trend: 'down', status: 'warning',  icon: DollarSign },
  { label: 'Overdue Invoice Value',    value: '₹2.8Cr', change: '42 invoices overdue',      trend: 'up',   status: 'negative', icon: AlertCircle },
  { label: 'Open Disputes',            value: '31',     change: '8 awaiting L2 approval',   trend: 'up',   status: 'negative', icon: MessageSquare },
  { label: 'Task SLA Compliance',      value: '78.4%',  change: '42 tasks breached SLA',    trend: 'down', status: 'warning',  icon: ListChecks },
]
const mgmtActions = [
  { priority: 'high',   text: 'Infosys BPO (4 invoices, ₹84L total) overdue >60 days — escalate to AM Head and initiate recovery', due: 'Apr 3', category: 'Invoice Recovery' },
  { priority: 'high',   text: '8 disputes at L2 approval pending for >7 days — review and resolve to unblock client payments', due: 'Apr 4', category: 'Dispute Approval' },
  { priority: 'medium', text: 'Monthly invoice collection rate dropped to 84.6% — identify top defaulters by region', due: 'Apr 5', category: 'Collections' },
  { priority: 'medium', text: 'Q1 FY26 review: 42 tasks breached SLA — root-cause analysis required before board report', due: 'Apr 8', category: 'SLA Review' },
  { priority: 'low',    text: 'Meeting completion rate at 68% for March — identify centres with low meeting adherence', due: 'Apr 10', category: 'Meeting Compliance' },
]
const mgmtTopFive = [
  {
    title: 'Top 5 Clients by Overdue Invoice Value',
    items: [
      { label: 'Infosys BPO',       value: '₹84L',   change: -1 },
      { label: 'XYZ Fintech',       value: '₹42L',   change: -1 },
      { label: 'GlobalCorp',        value: '₹28L',   change: 0 },
      { label: 'Wipro Tech',        value: '₹21L',   change: 0 },
      { label: 'TechStartup A',     value: '₹14L',   change: 0 },
    ],
  },
  {
    title: 'Top 5 Locations by Open Disputes',
    items: [
      { label: 'Whitefield, Blore',   value: '8',  change: -1 },
      { label: 'BKC, Mumbai',         value: '6',  change: 0 },
      { label: 'Baner, Pune',         value: '5',  change: 0 },
      { label: 'HiTec City, Hyd',     value: '4',  change: 0 },
      { label: 'Cyber City, Delhi',   value: '4',  change: 1 },
    ],
  },
]
const mgmtCharts = [
  {
    type: 'line', title: 'Invoice Collection Rate & Overdue Count (Monthly)',
    data: [
      { name: 'Oct', rate: 88.2, overdue: 28 }, { name: 'Nov', rate: 90.1, overdue: 22 },
      { name: 'Dec', rate: 87.4, overdue: 30 }, { name: 'Jan', rate: 89.0, overdue: 24 },
      { name: 'Feb', rate: 86.8, overdue: 36 }, { name: 'Mar', rate: 84.6, overdue: 42 },
    ],
    lines: [{ key: 'rate', label: 'Collection Rate %' }, { key: 'overdue', label: 'Overdue Count' }],
  },
  {
    type: 'pie', title: 'Invoice Status Breakdown',
    data: [
      { name: 'Paid',            value: 624 },
      { name: 'Pending',         value: 184 },
      { name: 'Overdue',         value: 42 },
      { name: 'Disputed',        value: 31 },
      { name: 'Partial Payment', value: 18 },
    ],
    lines: [],
  },
  {
    type: 'bar', title: 'Disputes by Status (Portfolio)',
    data: [
      { name: 'L1 Pending', count: 14 }, { name: 'L2 Pending', count: 8 },
      { name: 'Resolved',   count: 42 }, { name: 'Rejected',   count: 6 },
      { name: 'Withdrawn',  count: 3  },
    ],
    lines: [{ key: 'count', label: 'Disputes' }],
  },
]
const mgmtColumns = [
  { key: 'client',       label: 'Client' },
  { key: 'location',     label: 'Location' },
  { key: 'totalInvoices',label: 'Total Invoices', muted: true },
  { key: 'overdue',      label: 'Overdue (₹L)' },
  { key: 'openDisputes', label: 'Open Disputes' },
  { key: 'openTasks',    label: 'Tasks Pending' },
  { key: 'invoiceHealth',label: 'Invoice Health', type: 'status' },
  { key: 'action',       label: 'Action', type: 'action', sortable: false },
]
const mgmtGrid = [
  { client: 'Infosys BPO',       location: 'Baner, Pune',         totalInvoices: '28', overdue: '84',  openDisputes: '3', openTasks: '6', invoiceHealth: 'At Risk',  action: 'Escalate' },
  { client: 'Deutsche Bank GCC', location: 'Whitefield, Blore',   totalInvoices: '24', overdue: '0',   openDisputes: '1', openTasks: '2', invoiceHealth: 'Healthy',  action: 'View' },
  { client: 'Accenture India',   location: 'Whitefield, Blore',   totalInvoices: '18', overdue: '0',   openDisputes: '2', openTasks: '3', invoiceHealth: 'Healthy',  action: 'View' },
  { client: 'Wipro Tech',        location: 'HiTec City, Hyd',     totalInvoices: '22', overdue: '21',  openDisputes: '2', openTasks: '4', invoiceHealth: 'Warning',  action: 'Review' },
  { client: 'Cognizant',         location: 'Baner, Pune',         totalInvoices: '16', overdue: '0',   openDisputes: '0', openTasks: '1', invoiceHealth: 'Healthy',  action: 'View' },
  { client: 'XYZ Fintech',       location: 'BKC, Mumbai',         totalInvoices: '14', overdue: '42',  openDisputes: '4', openTasks: '5', invoiceHealth: 'At Risk',  action: 'Escalate' },
  { client: 'HSBC GCC',          location: 'BKC, Mumbai',         totalInvoices: '20', overdue: '0',   openDisputes: '2', openTasks: '2', invoiceHealth: 'Healthy',  action: 'View' },
  { client: 'GlobalCorp',        location: 'Cyber City, Delhi',   totalInvoices: '12', overdue: '28',  openDisputes: '3', openTasks: '4', invoiceHealth: 'At Risk',  action: 'Escalate' },
  { client: 'TechStartup A',     location: 'Whitefield, Blore',   totalInvoices: '8',  overdue: '14',  openDisputes: '1', openTasks: '2', invoiceHealth: 'Warning',  action: 'Review' },
  { client: 'BFSI Co.',          location: 'BKC, Mumbai',         totalInvoices: '14', overdue: '0',   openDisputes: '0', openTasks: '1', invoiceHealth: 'Healthy',  action: 'View' },
]

// ─── AM HEAD ──────────────────────────────────────────────────────────────────
const amheadMetrics = [
  { label: 'Invoices Overdue >30d',    value: '28',     change: '₹1.4Cr total overdue',     trend: 'up',   status: 'negative', icon: FileText,     highlight: true },
  { label: 'Dispute Escalation Rate',  value: '26.4%',  change: '8 of 31 at L2+',           trend: 'up',   status: 'negative', icon: MessageSquare },
  { label: 'Meeting Completion Rate',  value: '71.2%',  change: '-4% vs last month',         trend: 'down', status: 'warning',  icon: Calendar },
  { label: 'SLA Breach – Tasks',       value: '18',     change: '9 critical overdue',        trend: 'up',   status: 'negative', icon: ListChecks },
  { label: 'Renewal Pipeline (90d)',   value: '₹4.2Cr', change: '14 accounts due',           trend: 'up',   status: 'warning',  icon: TrendingUp },
]
const amheadActions = [
  { priority: 'high',   text: 'AM Neha: XYZ Fintech (₹42L overdue, 4 disputes) — no action in 10 days, escalation required', due: 'Today', category: 'AM Escalation' },
  { priority: 'high',   text: '9 critical tasks assigned to team are overdue — review and reassign with hard deadline', due: 'Apr 3', category: 'Task Overdue' },
  { priority: 'medium', text: '8 disputes at L2 pending — your approval needed to unblock ₹68L in disputed invoices', due: 'Apr 4', category: 'Dispute Approval' },
  { priority: 'medium', text: 'AM team meeting completion rate fell to 71.2% in March — identify AM-wise compliance gaps', due: 'Apr 5', category: 'Meeting Compliance' },
  { priority: 'low',    text: 'Infosys BPO renewal (₹3.6Cr ARR) — ensure AM has initiated pre-renewal conversation', due: 'Apr 10', category: 'Renewal' },
]
const amheadTopFive = [
  {
    title: 'Top 5 AMs by Overdue Invoice Count',
    items: [
      { label: 'Neha Sharma (AM)',      value: '12', change: -1 },
      { label: 'Rajan Mehta (AM)',      value: '8',  change: -1 },
      { label: 'Pooja Rao (AAM)',       value: '6',  change: 0 },
      { label: 'Vikram Kaul (AM)',      value: '4',  change: 0 },
      { label: 'Sonal Joshi (AAM)',     value: '3',  change: 0 },
    ],
  },
  {
    title: 'Top 5 Disputed Invoices by Value',
    items: [
      { label: 'INV-2024-1142 – XYZ',   value: '₹18.4L', change: -1 },
      { label: 'INV-2024-1089 – Wipro',  value: '₹14.2L', change: 0 },
      { label: 'INV-2024-1201 – GlobalCorp', value: '₹12.8L', change: 0 },
      { label: 'INV-2024-1168 – Infosys', value: '₹9.6L', change: 0 },
      { label: 'INV-2024-1215 – BFSI',   value: '₹6.4L', change: 0 },
    ],
  },
]
const amheadCharts = [
  {
    type: 'bar', title: 'Overdue Invoices by AM (Count)',
    data: [
      { name: 'Neha S.', overdue: 12 }, { name: 'Rajan M.', overdue: 8 },
      { name: 'Pooja R.', overdue: 6 }, { name: 'Vikram K.', overdue: 4 },
      { name: 'Sonal J.', overdue: 3 }, { name: 'Amit D.',   overdue: 2 },
    ],
    lines: [{ key: 'overdue', label: 'Overdue Invoices' }],
  },
  {
    type: 'pie', title: 'Invoice Aging Buckets (Team)',
    data: [
      { name: '0–30 days',  value: 48 },
      { name: '31–60 days', value: 22 },
      { name: '61–90 days', value: 12 },
      { name: '90+ days',   value: 8  },
    ],
    lines: [],
  },
]
const amheadColumns = [
  { key: 'invoiceNo',  label: 'Invoice No' },
  { key: 'client',     label: 'Customer' },
  { key: 'am',         label: 'AM Owner', muted: true },
  { key: 'dueDate',    label: 'Due Date' },
  { key: 'amount',     label: 'Amount (₹L)' },
  { key: 'remaining',  label: 'Remaining (₹L)' },
  { key: 'daysOverdue',label: 'Days Overdue', muted: true },
  { key: 'status',     label: 'Status', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const amheadGrid = [
  { invoiceNo: 'INV-2024-1142', client: 'XYZ Fintech',       am: 'Neha Sharma',  dueDate: 'Feb 15', amount: '18.4', remaining: '18.4', daysOverdue: '46',  status: 'Overdue',         action: 'Escalate' },
  { invoiceNo: 'INV-2024-1089', client: 'Wipro Tech',         am: 'Rajan Mehta',  dueDate: 'Feb 28', amount: '14.2', remaining: '14.2', daysOverdue: '33',  status: 'Overdue',         action: 'Escalate' },
  { invoiceNo: 'INV-2024-1201', client: 'GlobalCorp',         am: 'Neha Sharma',  dueDate: 'Mar 1',  amount: '12.8', remaining: '12.8', daysOverdue: '32',  status: 'Overdue',         action: 'Escalate' },
  { invoiceNo: 'INV-2024-1168', client: 'Infosys BPO',        am: 'Pooja Rao',    dueDate: 'Mar 5',  amount: '9.6',  remaining: '9.6',  daysOverdue: '28',  status: 'Overdue',         action: 'Review' },
  { invoiceNo: 'INV-2024-1215', client: 'BFSI Co.',           am: 'Vikram Kaul',  dueDate: 'Mar 10', amount: '6.4',  remaining: '6.4',  daysOverdue: '23',  status: 'Disputed',        action: 'Review' },
  { invoiceNo: 'INV-2024-1228', client: 'TechStartup A',      am: 'Sonal Joshi',  dueDate: 'Mar 15', amount: '4.8',  remaining: '2.4',  daysOverdue: '18',  status: 'Partial Payment', action: 'Follow Up' },
  { invoiceNo: 'INV-2024-1249', client: 'Deutsche Bank GCC',  am: 'Amit Deshpande', dueDate: 'Apr 5', amount: '24.6', remaining: '0',   daysOverdue: '0',   status: 'Paid',            action: 'View' },
  { invoiceNo: 'INV-2024-1262', client: 'Cognizant',          am: 'Rajan Mehta',  dueDate: 'Apr 10', amount: '11.2', remaining: '11.2', daysOverdue: '0',  status: 'Pending',         action: 'View' },
]

// ─── REGIONAL HEAD ────────────────────────────────────────────────────────────
const regionalMetrics = [
  { label: 'Regional Locations',       value: '38',     change: '2 new onboarded this month', trend: 'up',   status: 'positive', icon: Building2,    highlight: true },
  { label: 'Regional Collection Rate', value: '82.4%',  change: '-3.2% vs last month',         trend: 'down', status: 'warning',  icon: DollarSign },
  { label: 'Overdue Invoices',         value: '14',     change: '₹68L value at risk',          trend: 'up',   status: 'negative', icon: AlertCircle },
  { label: 'Open Disputes (Region)',   value: '9',      change: '3 at L2 approval',            trend: 'up',   status: 'negative', icon: MessageSquare },
  { label: 'Tasks Within SLA',         value: '72.6%',  change: '11 tasks breached SLA',       trend: 'down', status: 'warning',  icon: ListChecks },
]
const regionalActions = [
  { priority: 'high',   text: 'Whitefield Centre: 3 clients with invoices overdue >45 days — AM-level escalation needed', due: 'Apr 3', category: 'Invoice Recovery' },
  { priority: 'high',   text: '3 disputes at L2 approval pending your clearance — blocking ₹32L invoice release', due: 'Apr 4', category: 'Dispute Approval' },
  { priority: 'medium', text: 'BKC Mumbai: collection rate at 74% — lowest in region, review with AM', due: 'Apr 5', category: 'Collections' },
  { priority: 'medium', text: '11 tasks with SLA breach in region this month — assign ownership and set deadlines', due: 'Apr 7', category: 'Task SLA' },
  { priority: 'low',    text: 'Meeting completion rate at 68% for South Bengaluru — AMs to be counselled', due: 'Apr 8', category: 'Meeting Compliance' },
]
const regionalTopFive = [
  {
    title: 'Top 5 Clients by Overdue Value (Regional)',
    items: [
      { label: 'XYZ Fintech (BKC)',       value: '₹42L', change: -1 },
      { label: 'Wipro Tech (HiTec City)', value: '₹21L', change: 0 },
      { label: 'GlobalCorp (Cyber City)', value: '₹28L', change: -1 },
      { label: 'TechStartup A (WF)',      value: '₹14L', change: 0 },
      { label: 'Retail Co. (Baner)',      value: '₹8L',  change: 0 },
    ],
  },
  {
    title: 'Top 5 Centres by Invoice Health',
    items: [
      { label: 'Whitefield, Blore',  value: '92.4%', change: 0 },
      { label: 'Baner, Pune',        value: '90.1%', change: 1 },
      { label: 'Tidel Park, Chennai',value: '88.6%', change: 0 },
      { label: 'HiTec City, Hyd',    value: '82.4%', change: -1 },
      { label: 'BKC, Mumbai',        value: '74.0%', change: -1 },
    ],
  },
]
const regionalCharts = [
  {
    type: 'bar', title: 'Collection Rate by Centre (%)',
    data: [
      { name: 'Whitefield', rate: 92.4 }, { name: 'Baner',   rate: 90.1 },
      { name: 'Tidel Park', rate: 88.6 }, { name: 'HiTec',   rate: 82.4 },
      { name: 'Cyber City', rate: 80.2 }, { name: 'BKC',     rate: 74.0 },
    ],
    lines: [{ key: 'rate', label: 'Collection Rate %' }],
  },
  {
    type: 'area', title: 'Dispute Volume Trend (Monthly)',
    data: [
      { name: 'Oct', raised: 8, resolved: 6 }, { name: 'Nov', raised: 6, resolved: 7 },
      { name: 'Dec', raised: 10, resolved: 8 }, { name: 'Jan', raised: 7, resolved: 9 },
      { name: 'Feb', raised: 9, resolved: 6 }, { name: 'Mar', raised: 12, resolved: 8 },
    ],
    lines: [{ key: 'raised', label: 'Raised' }, { key: 'resolved', label: 'Resolved' }],
  },
]
const regionalColumns = amheadColumns
const regionalGrid = amheadGrid.filter(r => ['XYZ Fintech', 'Wipro Tech', 'HSBC GCC'].includes(r.client))

// ─── CENTRE MANAGER ───────────────────────────────────────────────────────────
const centreMetrics = [
  { label: 'Centre Locations',         value: '14',    change: '1 onboarding this week',    trend: 'up',   status: 'positive', icon: Building2, highlight: true },
  { label: 'Centre Collection Rate',   value: '88.4%', change: '-1.2% vs last month',       trend: 'down', status: 'warning',  icon: DollarSign },
  { label: 'Overdue Invoices (Centre)',value: '4',     change: '₹28L value at risk',        trend: 'up',   status: 'negative', icon: FileText },
  { label: 'Open Disputes (Centre)',   value: '6',     change: '2 awaiting L1 approval',    trend: 'up',   status: 'warning',  icon: MessageSquare },
  { label: 'Tasks Due Today',          value: '8',     change: '3 critical tasks',          trend: 'up',   status: 'warning',  icon: ListChecks },
]
const centreActions = [
  { priority: 'high',   text: 'Deutsche Bank GCC: L1 dispute approval pending 4 days — review and approve/reject to unblock AM', due: 'Today', category: 'Dispute Approval' },
  { priority: 'high',   text: 'XYZ Fintech invoice INV-2024-1142 (₹18.4L) overdue 46 days — contact client and document response', due: 'Today', category: 'Invoice Recovery' },
  { priority: 'medium', text: 'HSBC onboarding: 3 tasks pending completion (ID cards, IT handover, floor signage)', due: 'Apr 5', category: 'Onboarding Tasks' },
  { priority: 'medium', text: 'Monthly client meeting schedule for April not published — coordinate with AMs', due: 'Apr 4', category: 'Meeting Planning' },
  { priority: 'low',    text: '3 tasks assigned to facilities team SLA-breached by >1 day — escalate and get ETAs', due: 'Apr 6', category: 'Task SLA' },
]
const centreTopFive = [
  {
    title: 'Top 5 Clients by Invoice Outstanding',
    items: [
      { label: 'XYZ Fintech',       value: '₹18.4L', change: -1 },
      { label: 'Wipro Tech',        value: '₹14.2L', change: 0 },
      { label: 'TechStartup A',     value: '₹4.8L',  change: 0 },
      { label: 'Accenture India',   value: '₹0',     change: 1 },
      { label: 'Deutsche Bank GCC', value: '₹0',     change: 0 },
    ],
  },
  {
    title: 'Top 5 Open Dispute Categories (Centre)',
    items: [
      { label: 'Overbilling – Space', value: '3', change: 0 },
      { label: 'VAS Charges',        value: '2', change: 1 },
      { label: 'Security Deposit',   value: '2', change: 0 },
      { label: 'Cafeteria Charge',   value: '1', change: 0 },
      { label: 'Maintenance Levy',   value: '1', change: 0 },
    ],
  },
]
const centreCharts = [
  {
    type: 'bar', title: 'Tasks by Status (Centre)',
    data: [
      { name: 'Open',       count: 18 }, { name: 'Critical', count: 4 },
      { name: 'Overdue',    count: 6 },  { name: 'Within SLA', count: 12 },
      { name: 'Completed',  count: 42 },
    ],
    lines: [{ key: 'count', label: 'Tasks' }],
  },
  {
    type: 'area', title: 'Invoice Collections vs Overdue (Monthly, ₹L)',
    data: [
      { name: 'Oct', collected: 148, overdue: 8  }, { name: 'Nov', collected: 162, overdue: 6 },
      { name: 'Dec', collected: 140, overdue: 14 }, { name: 'Jan', collected: 158, overdue: 10 },
      { name: 'Feb', collected: 152, overdue: 16 }, { name: 'Mar', collected: 146, overdue: 28 },
    ],
    lines: [{ key: 'collected', label: 'Collected (₹L)' }, { key: 'overdue', label: 'Overdue (₹L)' }],
  },
]
const centreColumns = amheadColumns
const centreGrid = amheadGrid.slice(0, 6)

// ─── AAM / AM ─────────────────────────────────────────────────────────────────
const aamMetrics = [
  { label: 'My Locations',             value: '12',    change: '1 new onboarded',           trend: 'up',   status: 'positive', icon: Building2, highlight: true },
  { label: 'Open Invoices',            value: '8',     change: '3 overdue',                 trend: 'up',   status: 'warning',  icon: FileText },
  { label: 'Overdue Invoice Value',    value: '₹28L',  change: 'Oldest: 46 days',           trend: 'up',   status: 'negative', icon: AlertCircle },
  { label: 'Open Disputes',            value: '4',     change: '2 awaiting my L1 approval', trend: 'up',   status: 'warning',  icon: MessageSquare },
  { label: 'Tasks Due Today',          value: '5',     change: '2 critical, 1 overdue',     trend: 'up',   status: 'negative', icon: ListChecks },
]
const aamActions = [
  { priority: 'high',   text: 'INV-2024-1142 (XYZ Fintech, ₹18.4L) — 46 days overdue. Call client and log response today', due: 'Today', category: 'Invoice Recovery' },
  { priority: 'high',   text: 'Dispute DIS-0482 (XYZ Fintech, ₹8.2L) — L1 approval required from you. Review and approve/reject', due: 'Today', category: 'Dispute Approval' },
  { priority: 'medium', text: 'April QBR meeting for Deutsche Bank GCC — schedule, prepare deck and send agenda', due: 'Apr 8', category: 'Meetings' },
  { priority: 'medium', text: '2 tasks assigned to you are within SLA — complete before deadline to avoid breach', due: 'Apr 5', category: 'Tasks' },
  { priority: 'low',    text: 'Cognizant location: 2 maintenance requests pending client sign-off for >3 days', due: 'Apr 6', category: 'Operations' },
]
const aamTopFive = [
  {
    title: 'My Overdue Invoices by Amount',
    items: [
      { label: 'XYZ Fintech – INV-1142',    value: '₹18.4L', change: -1 },
      { label: 'Wipro Tech – INV-1089',     value: '₹14.2L', change: -1 },
      { label: 'TechStartup A – INV-1228',  value: '₹4.8L',  change: 0 },
      { label: 'BFSI Co. – INV-1215',       value: '₹6.4L',  change: -1 },
      { label: 'GlobalCorp – INV-1201',     value: '₹12.8L', change: -1 },
    ],
  },
  {
    title: 'My Tasks by Priority',
    items: [
      { label: 'Invoice recovery – XYZ',    value: 'Critical', change: -1 },
      { label: 'Dispute resolution – XYZ',  value: 'Critical', change: -1 },
      { label: 'QBR prep – Deutsche Bank',  value: 'High',     change: 0 },
      { label: 'April meeting schedule',    value: 'Medium',   change: 0 },
      { label: 'Cognizant sign-off follow', value: 'Low',      change: 0 },
    ],
  },
]
const aamCharts = [
  {
    type: 'bar', title: 'My Invoice Aging Breakdown',
    data: [
      { name: '0–30 days', count: 3 }, { name: '31–60 days', count: 2 },
      { name: '61–90 days', count: 1 }, { name: '90+ days', count: 0 },
    ],
    lines: [{ key: 'count', label: 'Invoices' }],
  },
  {
    type: 'area', title: 'My Task SLA Compliance (Weekly)',
    data: [
      { name: 'Wk 1 Mar', compliance: 88 }, { name: 'Wk 2 Mar', compliance: 82 },
      { name: 'Wk 3 Mar', compliance: 76 }, { name: 'Wk 4 Mar', compliance: 70 },
      { name: 'Wk 1 Apr', compliance: 74 },
    ],
    lines: [{ key: 'compliance', label: 'SLA Compliance %' }],
  },
]
const aamColumns = [
  { key: 'invoiceNo',   label: 'Invoice No' },
  { key: 'client',      label: 'Customer' },
  { key: 'type',        label: 'Type', muted: true },
  { key: 'date',        label: 'Date' },
  { key: 'dueDate',     label: 'Due Date' },
  { key: 'amount',      label: 'Amount (₹L)' },
  { key: 'remaining',   label: 'Remaining (₹L)' },
  { key: 'daysOverdue', label: 'Days Overdue', muted: true },
  { key: 'status',      label: 'Status', type: 'status' },
  { key: 'action',      label: 'Action', type: 'action', sortable: false },
]
const aamGrid = [
  { invoiceNo: 'INV-2024-1142', client: 'XYZ Fintech',       type: 'Monthly',           date: 'Jan 15', dueDate: 'Feb 15', amount: '18.4', remaining: '18.4', daysOverdue: '46',  status: 'Overdue',         action: 'Follow Up' },
  { invoiceNo: 'INV-2024-1089', client: 'Wipro Tech',         type: 'Monthly',           date: 'Jan 28', dueDate: 'Feb 28', amount: '14.2', remaining: '14.2', daysOverdue: '33',  status: 'Overdue',         action: 'Follow Up' },
  { invoiceNo: 'INV-2024-1201', client: 'GlobalCorp',         type: 'Monthly',           date: 'Feb 1',  dueDate: 'Mar 1',  amount: '12.8', remaining: '12.8', daysOverdue: '32',  status: 'Overdue',         action: 'Follow Up' },
  { invoiceNo: 'INV-2024-1215', client: 'BFSI Co.',           type: 'Quarterly',         date: 'Feb 8',  dueDate: 'Mar 10', amount: '6.4',  remaining: '6.4',  daysOverdue: '23',  status: 'Disputed',        action: 'View Dispute' },
  { invoiceNo: 'INV-2024-1228', client: 'TechStartup A',      type: 'Monthly',           date: 'Feb 15', dueDate: 'Mar 15', amount: '4.8',  remaining: '2.4',  daysOverdue: '18',  status: 'Partial Payment', action: 'Follow Up' },
  { invoiceNo: 'INV-2024-1249', client: 'Deutsche Bank GCC',  type: 'Monthly',           date: 'Mar 5',  dueDate: 'Apr 5',  amount: '24.6', remaining: '0',    daysOverdue: '0',   status: 'Paid',            action: 'View' },
  { invoiceNo: 'INV-2024-1262', client: 'Cognizant',          type: 'Monthly',           date: 'Mar 10', dueDate: 'Apr 10', amount: '11.2', remaining: '11.2', daysOverdue: '0',   status: 'Pending',         action: 'View' },
  { invoiceNo: 'INV-2024-1271', client: 'Accenture India',    type: 'Monthly',           date: 'Mar 12', dueDate: 'Apr 12', amount: '16.8', remaining: '16.8', daysOverdue: '0',   status: 'Pending',         action: 'View' },
  { invoiceNo: 'INV-2024-1108', client: 'XYZ Fintech',        type: 'Security Deposit',  date: 'Dec 1',  dueDate: 'Dec 15', amount: '8.4',  remaining: '8.4',  daysOverdue: '108', status: 'Disputed',        action: 'View Dispute' },
  { invoiceNo: 'INV-2024-1284', client: 'HSBC GCC',           type: 'VAS',               date: 'Mar 20', dueDate: 'Apr 20', amount: '3.2',  remaining: '3.2',  daysOverdue: '0',   status: 'Pending',         action: 'View' },
]

// ─── GRE ──────────────────────────────────────────────────────────────────────
const greMetrics = [
  { label: 'Meetings Scheduled Today', value: '14',    change: '8 completed, 4 in progress', trend: 'up',   status: 'positive', icon: Calendar,     highlight: true },
  { label: 'Visitor Check-ins',         value: '142',   change: '↑18 vs yesterday',           trend: 'up',   status: 'info',     icon: Users },
  { label: 'Open Guest Requests',       value: '8',     change: '2 overdue >1 hr',             trend: 'up',   status: 'warning',  icon: Clock },
  { label: 'Tasks Pending (Location)',  value: '6',     change: '2 critical tasks',            trend: 'up',   status: 'warning',  icon: ListChecks },
  { label: 'Avg Lobby Wait Time',       value: '3.2m',  change: '-0.8m vs yesterday',          trend: 'down', status: 'positive', icon: Activity },
]
const greActions = [
  { priority: 'high',   text: 'VIP visitor (CEO, Deutsche Bank) at 3pm — escort confirmed? Greeting protocol in place?', due: '3:00 PM', category: 'VIP Protocol' },
  { priority: 'high',   text: '2 guest requests (room setup, catering) unactioned for >90 mins — action immediately', due: 'Now', category: 'Guest Service' },
  { priority: 'medium', text: 'April meeting schedule not uploaded to system for 3 clients — upload before EOD', due: 'Today', category: 'Meeting Admin' },
  { priority: 'medium', text: 'Meeting room MR-4 display fault reported since morning — raise facilities task', due: 'Today', category: 'Facilities Task' },
  { priority: 'low',    text: 'Evening HSBC corporate event (25 pax, 6pm) — catering confirmation not received yet', due: '4:00 PM', category: 'Events' },
]
const greTopFive = [
  {
    title: 'Today\'s Meetings by Client',
    items: [
      { label: 'Deutsche Bank GCC', value: '4', change: 0 },
      { label: 'Accenture India',   value: '3', change: 1 },
      { label: 'HSBC GCC',          value: '3', change: 0 },
      { label: 'Cognizant',         value: '2', change: 0 },
      { label: 'Wipro Tech',        value: '2', change: -1 },
    ],
  },
  {
    title: 'Top 5 Visitor Request Types',
    items: [
      { label: 'Meeting Room Extension',  value: '28', change: 0 },
      { label: 'Guest Badge Reprint',     value: '12', change: 1 },
      { label: 'Cafe / Meal Request',     value: '10', change: 0 },
      { label: 'Taxi / Cab Assistance',   value: '8',  change: 0 },
      { label: 'Equipment Assistance',    value: '4',  change: -1 },
    ],
  },
]
const greCharts = [
  {
    type: 'bar', title: 'Meeting Status Breakdown (This Month)',
    data: [
      { name: 'Scheduled',      count: 62 }, { name: 'Completed',   count: 44 },
      { name: 'Cancelled',      count: 8  }, { name: 'With Recording', count: 28 },
    ],
    lines: [{ key: 'count', label: 'Meetings' }],
  },
  {
    type: 'area', title: 'Visitor Volume — Hourly Today',
    data: [
      { name: '8am',  visitors: 18 }, { name: '9am',  visitors: 42 },
      { name: '10am', visitors: 38 }, { name: '11am', visitors: 35 },
      { name: '12pm', visitors: 28 }, { name: '1pm',  visitors: 22 },
      { name: '2pm',  visitors: 32 }, { name: '3pm',  visitors: 14 },
    ],
    lines: [{ key: 'visitors', label: 'Check-ins' }],
  },
]
const greColumns = [
  { key: 'meetingId',  label: 'Meeting ID' },
  { key: 'client',     label: 'Client' },
  { key: 'host',       label: 'Host (AM)' },
  { key: 'time',       label: 'Time' },
  { key: 'type',       label: 'Type', muted: true },
  { key: 'attendees',  label: 'Attendees', muted: true },
  { key: 'room',       label: 'Room' },
  { key: 'status',     label: 'Status', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const greGrid = [
  { meetingId: 'MTG-0481', client: 'Deutsche Bank GCC', host: 'Amit Deshpande', time: '9:00 AM',  type: 'QBR',                 attendees: '6',  room: 'Boardroom',   status: 'Completed', action: 'View' },
  { meetingId: 'MTG-0482', client: 'Accenture India',   host: 'Pooja Rao',      time: '10:30 AM', type: 'Renewal Discussion',  attendees: '4',  room: 'Conf Room 1', status: 'Completed', action: 'View' },
  { meetingId: 'MTG-0483', client: 'HSBC GCC',          host: 'Rajan Mehta',    time: '11:00 AM', type: 'Onboarding',          attendees: '8',  room: 'Training Room',status: 'Completed',action: 'View' },
  { meetingId: 'MTG-0484', client: 'Wipro Tech',        host: 'Neha Sharma',    time: '12:30 PM', type: 'Complaint Resolution',attendees: '3',  room: 'Conf Room 2', status: 'Completed', action: 'View' },
  { meetingId: 'MTG-0485', client: 'Cognizant',         host: 'Vikram Kaul',    time: '2:00 PM',  type: 'Operations Review',   attendees: '5',  room: 'Boardroom',   status: 'Active',    action: 'View' },
  { meetingId: 'MTG-0486', client: 'Deutsche Bank GCC', host: 'Amit Deshpande', time: '3:00 PM',  type: 'VIP Visit',           attendees: '12', room: 'Boardroom',   status: 'Scheduled', action: 'Prepare' },
  { meetingId: 'MTG-0487', client: 'HSBC GCC',          host: 'Event Team',     time: '6:00 PM',  type: 'Corporate Event',     attendees: '25', room: 'Event Hall',  status: 'Scheduled', action: 'Confirm' },
  { meetingId: 'MTG-0488', client: 'XYZ Fintech',       host: 'Neha Sharma',    time: '4:00 PM',  type: 'Invoice Discussion',  attendees: '2',  room: 'Meeting Pod', status: 'Cancelled', action: 'Reschedule' },
]

export const nexusAMData = {
  mgmt:     { metrics: mgmtMetrics,     actions: mgmtActions,     topFive: mgmtTopFive,     charts: mgmtCharts,     columns: mgmtColumns,     grid: mgmtGrid,     gridTitle: 'Portfolio Invoice & Dispute Health Overview' },
  amhead:   { metrics: amheadMetrics,   actions: amheadActions,   topFive: amheadTopFive,   charts: amheadCharts,   columns: amheadColumns,   grid: amheadGrid,   gridTitle: 'Team Invoice Aging Report' },
  regional: { metrics: regionalMetrics, actions: regionalActions, topFive: regionalTopFive, charts: regionalCharts, columns: regionalColumns, grid: regionalGrid, gridTitle: 'Regional Invoice Overdue Tracker' },
  centre:   { metrics: centreMetrics,   actions: centreActions,   topFive: centreTopFive,   charts: centreCharts,   columns: centreColumns,   grid: centreGrid,   gridTitle: 'Centre Invoice & Dispute Register' },
  aam:      { metrics: aamMetrics,      actions: aamActions,      topFive: aamTopFive,      charts: aamCharts,      columns: aamColumns,      grid: aamGrid,      gridTitle: 'My Invoice Register' },
  gre:      { metrics: greMetrics,      actions: greActions,      topFive: greTopFive,      charts: greCharts,      columns: greColumns,      grid: greGrid,      gridTitle: 'Today\'s Meeting Log' },
}
