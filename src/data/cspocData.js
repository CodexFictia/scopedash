import { CreditCard, RefreshCw, Zap, UtensilsCrossed, Wallet, Star, ShoppingBag, Tv2, Server, Activity, Shield, Cpu, AlertTriangle } from 'lucide-react'

export const cspocPersonas = [
  { id: 'finance', label: 'Finance Team' },
  { id: 'vas',     label: 'VAS Team' },
  { id: 'techops', label: 'Tech Ops' },
]

export const cspocFilters = [
  { id: 'centre', label: 'Centre', options: ['All Centres', 'Bengaluru – Whitefield', 'Pune – Baner', 'Hyderabad – HiTec City', 'Mumbai – BKC', 'Delhi – Cyber City', 'Chennai – Tidel Park'] },
  { id: 'status', label: 'Status',  options: ['All Statuses', 'Pending', 'Completed', 'Failed', 'Review', 'Overdue'] },
  { id: 'type',   label: 'Type',    options: ['All Types', 'Vendor Payment', 'Settlement', 'Wallet Credit', 'Meal Plan', 'Reconciliation'] },
]

// ─── FINANCE TEAM ─────────────────────────────────────────────────────────────
const financeMetrics = [
  { label: 'Vendor Payments Pending', value: '₹4.2L',  change: '+2 from yesterday', trend: 'up',      status: 'warning', icon: CreditCard,       highlight: true },
  { label: 'Razorpay Match Rate',      value: '94.8%',  change: '247/261 matched',   trend: 'neutral', status: 'warning', icon: RefreshCw },
  { label: 'Auto Settlement Rate',     value: '97.2%',  change: '+1.3% vs last wk',  trend: 'up',      status: 'positive', icon: Zap },
  { label: 'Active Meal Plans',        value: '312',    change: '+8 this week',       trend: 'up',      status: 'positive', icon: UtensilsCrossed },
  { label: 'Wallet Points Issued MTD', value: '₹1.86L', change: '+12% MoM',          trend: 'up',      status: 'info',    icon: Wallet },
]

const financeActions = [
  { priority: 'high',   text: '14 RazorPay transactions unmatched — manual reconciliation required', due: 'Within 2 hrs', category: 'Reconciliation' },
  { priority: 'high',   text: 'Auto-settlement failed for 3 transactions (₹68,200 total) — retry or escalate', due: 'Today', category: 'Settlement' },
  { priority: 'high',   text: 'Vendor payment ₹2.8L to Café Supplies Pvt Ltd is 4 days overdue', due: 'Overdue', category: 'Payments' },
  { priority: 'medium', text: 'TechCorp wallet top-up batch (620 employees, ₹62,000) pending CFO auth', due: 'EOD', category: 'Wallet' },
  { priority: 'medium', text: '3 client-wise meal plan reports pending client sign-off before month close', due: 'Tomorrow', category: 'Reports' },
  { priority: 'low',    text: 'Monthly vendor reconciliation summary for April due in 5 days', due: 'Apr 7', category: 'Reports' },
]

const financeTopFive = [
  {
    title: 'Top 5 Vendors by Pending Amount',
    items: [
      { label: 'Café Supplies Pvt Ltd',  value: '₹2.8L', change: -1 },
      { label: 'CleanPro Services',       value: '₹1.4L', change: 0 },
      { label: 'TechFix Infra',           value: '₹88K',  change: 1 },
      { label: 'SecureGuard Systems',     value: '₹67K',  change: -1 },
      { label: 'AquaPure Solutions',      value: '₹45K',  change: 0 },
    ],
  },
  {
    title: 'Top 5 Clients by Wallet Balance',
    items: [
      { label: 'Deutsche Bank GCC', value: '₹1.2L', change: 1 },
      { label: 'TechCorp India',    value: '₹98K',  change: 1 },
      { label: 'Infosys BPO',       value: '₹76K',  change: 0 },
      { label: 'Cognizant',         value: '₹54K',  change: -1 },
      { label: 'Accenture',         value: '₹43K',  change: 0 },
    ],
  },
]

const financeCharts = [
  {
    type: 'line', title: 'Razorpay Daily Match Rate (%)',
    data: [
      { name: 'Mar 26', matched: 96.2, target: 98 },
      { name: 'Mar 27', matched: 97.1, target: 98 },
      { name: 'Mar 28', matched: 94.5, target: 98 },
      { name: 'Mar 29', matched: 98.2, target: 98 },
      { name: 'Mar 30', matched: 95.8, target: 98 },
      { name: 'Mar 31', matched: 96.4, target: 98 },
      { name: 'Apr 1',  matched: 94.8, target: 98 },
    ],
    lines: [{ key: 'matched', label: 'Match Rate %' }, { key: 'target', label: 'Target %' }],
  },
  {
    type: 'bar', title: 'Monthly Vendor Payments (₹L)',
    data: [
      { name: 'Oct', paid: 12.4, pending: 2.1 },
      { name: 'Nov', paid: 14.1, pending: 1.8 },
      { name: 'Dec', paid: 15.8, pending: 3.2 },
      { name: 'Jan', paid: 13.2, pending: 2.4 },
      { name: 'Feb', paid: 16.1, pending: 1.9 },
      { name: 'Mar', paid: 14.8, pending: 4.2 },
    ],
    lines: [{ key: 'paid', label: 'Paid' }, { key: 'pending', label: 'Pending' }],
  },
  {
    type: 'area', title: 'Daily Meal Plan Consumption (covers)',
    data: [
      { name: 'Mar 26', lunch: 820, dinner: 340 },
      { name: 'Mar 27', lunch: 875, dinner: 380 },
      { name: 'Mar 28', lunch: 812, dinner: 290 },
      { name: 'Mar 29', lunch: 830, dinner: 310 },
      { name: 'Mar 30', lunch: 0,   dinner: 0   },
      { name: 'Mar 31', lunch: 850, dinner: 360 },
      { name: 'Apr 1',  lunch: 890, dinner: 410 },
    ],
    lines: [{ key: 'lunch', label: 'Lunch' }, { key: 'dinner', label: 'Dinner' }],
  },
]

const financeColumns = [
  { key: 'vendor',  label: 'Vendor / Reference' },
  { key: 'amount',  label: 'Amount' },
  { key: 'type',    label: 'Type' },
  { key: 'centre',  label: 'Centre', muted: true },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'status',  label: 'Status', type: 'status' },
  { key: 'action',  label: 'Action', type: 'action', sortable: false },
]

const financeGrid = [
  { vendor: 'Café Supplies Pvt Ltd',   amount: '₹2,80,000', type: 'Vendor Payment', centre: 'Whitefield',    dueDate: 'Mar 29, 2026', status: 'Overdue',     action: 'Pay Now' },
  { vendor: 'CleanPro Services',        amount: '₹1,40,000', type: 'Vendor Payment', centre: 'Multiple',      dueDate: 'Apr 3, 2026',  status: 'Pending',     action: 'Review'  },
  { vendor: 'TechFix Infra',            amount: '₹88,000',   type: 'Vendor Payment', centre: 'Baner',         dueDate: 'Apr 5, 2026',  status: 'Pending',     action: 'Review'  },
  { vendor: 'RazorPay TXN#892341',     amount: '₹45,000',   type: 'Settlement',     centre: 'BKC',           dueDate: 'Apr 1, 2026',  status: 'Failed',      action: 'Retry'   },
  { vendor: 'RazorPay TXN#891204',     amount: '₹12,500',   type: 'Settlement',     centre: 'HiTec City',    dueDate: 'Apr 1, 2026',  status: 'Failed',      action: 'Retry'   },
  { vendor: 'SecureGuard Systems',      amount: '₹67,000',   type: 'Vendor Payment', centre: 'Cyber City',    dueDate: 'Apr 7, 2026',  status: 'Pending',     action: 'Review'  },
  { vendor: 'TechCorp Wallet Batch',    amount: '₹62,000',   type: 'Wallet Credit',  centre: 'Whitefield',    dueDate: 'Apr 2, 2026',  status: 'Pending',     action: 'Authorize' },
  { vendor: 'AquaPure Solutions',       amount: '₹45,000',   type: 'Vendor Payment', centre: 'Baner',         dueDate: 'Apr 8, 2026',  status: 'Pending',     action: 'Review'  },
  { vendor: 'RazorPay TXN#890123',     amount: '₹8,200',    type: 'Reconciliation', centre: 'Tidel Park',    dueDate: 'Apr 1, 2026',  status: 'Review',      action: 'Match'   },
  { vendor: 'Infosys BPO Meal Plan',    amount: '₹1,65,000', type: 'Meal Plan',      centre: 'Baner',         dueDate: 'Apr 10, 2026', status: 'In Progress', action: 'View'    },
  { vendor: 'Deutsche Bank Wallet',     amount: '₹40,000',   type: 'Wallet Credit',  centre: 'BKC',           dueDate: 'Apr 3, 2026',  status: 'Completed',   action: 'View'    },
  { vendor: 'Cognizant Meal Top-Up',    amount: '₹28,500',   type: 'Meal Plan',      centre: 'Whitefield',    dueDate: 'Apr 4, 2026',  status: 'Pending',     action: 'Authorize' },
]

// ─── VAS TEAM ─────────────────────────────────────────────────────────────────
const vasMetrics = [
  { label: 'Active VAS Subscriptions', value: '1,284', change: '+34 this month',  trend: 'up',      status: 'positive', icon: Star, highlight: true },
  { label: 'VAS Revenue MTD',          value: '₹8.4L', change: '+18% vs target',  trend: 'up',      status: 'positive', icon: ShoppingBag },
  { label: 'Avg Revenue / User',        value: '₹654',  change: '+₹42 vs last mo', trend: 'up',      status: 'positive', icon: Wallet },
  { label: 'New Enrollments Today',     value: '47',    change: '↑ 12 vs avg day', trend: 'up',      status: 'info',    icon: Star },
  { label: 'Churn Rate (30d)',          value: '2.1%',  change: '-0.3% MoM',       trend: 'down',    status: 'positive', icon: AlertTriangle },
]

const vasActions = [
  { priority: 'high',   text: 'Café kiosk subscription renewal for Accenture (340 users) expires in 3 days', due: 'Apr 5', category: 'Renewal' },
  { priority: 'high',   text: 'VAS onboarding blocked for Wipro (150 users) — payment gateway error on portal', due: 'Today', category: 'Onboarding' },
  { priority: 'medium', text: 'Amenity booking tier upgrade pending approval for Infosys BPO (Baner)', due: 'EOD', category: 'Upgrade' },
  { priority: 'medium', text: 'Monthly VAS usage report for 6 enterprise clients due for distribution', due: 'Apr 3', category: 'Reports' },
  { priority: 'low',    text: 'Loyalty points redemption batch (1,200 users, ₹3.6L) ready for processing', due: 'Apr 6', category: 'Loyalty' },
]

const vasTopFive = [
  {
    title: 'Top 5 VAS Categories by Revenue',
    items: [
      { label: 'Café & Food Services', value: '₹3.2L', change: 1 },
      { label: 'Wellness & Fitness',   value: '₹1.8L', change: 1 },
      { label: 'Concierge Services',   value: '₹1.4L', change: 0 },
      { label: 'Stationery & Store',   value: '₹92K',  change: -1 },
      { label: 'Event Spaces',         value: '₹68K',  change: 0 },
    ],
  },
  {
    title: 'Top 5 Clients by VAS Spend',
    items: [
      { label: 'Deutsche Bank GCC', value: '₹1.4L', change: 1 },
      { label: 'Infosys BPO',       value: '₹1.1L', change: 0 },
      { label: 'Accenture',         value: '₹98K',  change: 1 },
      { label: 'Wipro',             value: '₹76K',  change: -1 },
      { label: 'TechCorp India',    value: '₹64K',  change: 0 },
    ],
  },
]

const vasCharts = [
  {
    type: 'area', title: 'VAS Revenue Trend (₹L) — Daily',
    data: [
      { name: 'Mar 26', revenue: 28.4, target: 28 },
      { name: 'Mar 27', revenue: 31.2, target: 28 },
      { name: 'Mar 28', revenue: 27.8, target: 28 },
      { name: 'Mar 29', revenue: 33.1, target: 28 },
      { name: 'Mar 30', revenue: 12.4, target: 0  },
      { name: 'Mar 31', revenue: 29.8, target: 28 },
      { name: 'Apr 1',  revenue: 35.2, target: 28 },
    ],
    lines: [{ key: 'revenue', label: 'Revenue (₹K)' }, { key: 'target', label: 'Daily Target' }],
  },
  {
    type: 'bar', title: 'Enrollments by Service Category',
    data: [
      { name: 'Café',       current: 420, last: 390 },
      { name: 'Wellness',   current: 280, last: 240 },
      { name: 'Concierge',  current: 210, last: 195 },
      { name: 'Store',      current: 180, last: 175 },
      { name: 'Events',     current: 94,  last: 80  },
    ],
    lines: [{ key: 'current', label: 'This Month' }, { key: 'last', label: 'Last Month' }],
  },
  {
    type: 'pie', title: 'VAS Revenue Mix',
    data: [
      { name: 'Café',      value: 38 },
      { name: 'Wellness',  value: 21 },
      { name: 'Concierge', value: 17 },
      { name: 'Store',     value: 11 },
      { name: 'Events',    value: 8  },
      { name: 'Other',     value: 5  },
    ],
    lines: [],
  },
]

const vasColumns = [
  { key: 'service',   label: 'Service' },
  { key: 'client',    label: 'Client' },
  { key: 'users',     label: 'Users' },
  { key: 'revenue',   label: 'Revenue MTD' },
  { key: 'renewal',   label: 'Renewal Date' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]

const vasGrid = [
  { service: 'Café Kiosk',         client: 'Deutsche Bank GCC', users: '480',  revenue: '₹96,000', renewal: 'Apr 5, 2026',  status: 'Active',      action: 'View' },
  { service: 'Wellness Studio',    client: 'Infosys BPO',       users: '240',  revenue: '₹72,000', renewal: 'May 1, 2026',  status: 'Active',      action: 'View' },
  { service: 'Café Kiosk',         client: 'Accenture',         users: '340',  revenue: '₹68,000', renewal: 'Apr 5, 2026',  status: 'Active',      action: 'Renew' },
  { service: 'Concierge Plus',     client: 'TechCorp India',    users: '120',  revenue: '₹60,000', renewal: 'Apr 15, 2026', status: 'Active',      action: 'View' },
  { service: 'Wellness Studio',    client: 'Wipro',             users: '150',  revenue: '₹0',      renewal: 'Apr 2, 2026',  status: 'Pending',     action: 'Fix'  },
  { service: 'Store Subscription', client: 'Cognizant',         users: '200',  revenue: '₹30,000', renewal: 'Jun 1, 2026',  status: 'Active',      action: 'View' },
  { service: 'Event Space Pkg',    client: 'HSBC GCC',          users: 'N/A',  revenue: '₹45,000', renewal: 'Quarterly',    status: 'Active',      action: 'View' },
  { service: 'Café Kiosk',         client: 'Capgemini',         users: '180',  revenue: '₹36,000', renewal: 'Apr 20, 2026', status: 'Active',      action: 'View' },
  { service: 'Loyalty Program',    client: 'Multiple',          users: '1,200',revenue: '₹0',      renewal: 'Ongoing',      status: 'In Progress', action: 'View' },
]

// ─── TECH OPS ─────────────────────────────────────────────────────────────────
const techopsMetrics = [
  { label: 'Platform Uptime (30d)',   value: '99.7%',  change: 'SLA: 99.5%', trend: 'up',   status: 'positive', icon: Server, highlight: true },
  { label: 'Active Incidents',        value: '3',      change: '↓ 2 vs yesterday', trend: 'down', status: 'warning', icon: AlertTriangle },
  { label: 'Integration Health',      value: '94.2%',  change: '3 integrations degraded', trend: 'neutral', status: 'warning', icon: Activity },
  { label: 'Avg API Response Time',   value: '148ms',  change: '+12ms vs baseline', trend: 'up', status: 'warning', icon: Cpu },
  { label: 'Open Tech Tickets',       value: '18',     change: '5 P1 · 8 P2 · 5 P3', trend: 'up', status: 'negative', icon: Shield },
]

const techopsActions = [
  { priority: 'high',   text: 'P1: Payment gateway integration (Razorpay) returning 504 timeouts at peak load — 3 centres affected', due: 'Immediate', category: 'Incident' },
  { priority: 'high',   text: 'VBMS–Ticketing sync broken for Whitefield Centre (IoT events not creating tickets)', due: 'Within 4hrs', category: 'Integration' },
  { priority: 'medium', text: 'Café kiosk POS offline at Baner (3 terminals) — impacting VAS team SLA', due: 'Today', category: 'Hardware' },
  { priority: 'medium', text: 'SSL certificate expiry for client-portal.smartworks.in in 12 days — renew now', due: 'Apr 14', category: 'Security' },
  { priority: 'low',    text: 'DB maintenance window for CSPOC reporting DB scheduled — confirm with teams', due: 'Apr 5 2am', category: 'Maintenance' },
]

const techopsTopFive = [
  {
    title: 'Top 5 Active Incidents by Severity',
    items: [
      { label: 'Razorpay gateway 504',     value: 'P1', change: -1 },
      { label: 'VBMS-Ticketing sync fail', value: 'P1', change: -1 },
      { label: 'API latency spike — BKC',  value: 'P2', change: 0 },
      { label: 'POS offline — Baner',      value: 'P2', change: -1 },
      { label: 'Report builder timeout',   value: 'P3', change: 0 },
    ],
  },
  {
    title: 'Top 5 Integrations by Error Rate',
    items: [
      { label: 'Razorpay Payment GW',   value: '4.8%', change: -1 },
      { label: 'VBMS IoT Bridge',        value: '3.2%', change: -1 },
      { label: 'ERP–CSPOC Billing Sync', value: '1.1%', change: 0 },
      { label: 'CRM Lead Webhook',       value: '0.4%', change: 0 },
      { label: 'Super App Push GW',      value: '0.2%', change: 1 },
    ],
  },
]

const techopsCharts = [
  {
    type: 'line', title: 'API Response Time (ms) — Hourly',
    data: [
      { name: '8am',  p50: 110, p95: 185, threshold: 200 },
      { name: '9am',  p50: 125, p95: 210, threshold: 200 },
      { name: '10am', p50: 148, p95: 245, threshold: 200 },
      { name: '11am', p50: 142, p95: 230, threshold: 200 },
      { name: '12pm', p50: 138, p95: 220, threshold: 200 },
      { name: '1pm',  p50: 152, p95: 260, threshold: 200 },
      { name: '2pm',  p50: 145, p95: 240, threshold: 200 },
      { name: '3pm',  p50: 148, p95: 248, threshold: 200 },
    ],
    lines: [{ key: 'p50', label: 'P50 (ms)' }, { key: 'p95', label: 'P95 (ms)' }, { key: 'threshold', label: 'Threshold' }],
  },
  {
    type: 'bar', title: 'Incidents by Category (Last 30 days)',
    data: [
      { name: 'Integrations', open: 8, resolved: 22 },
      { name: 'Infrastructure', open: 3, resolved: 12 },
      { name: 'Application', open: 5, resolved: 18 },
      { name: 'Security', open: 1, resolved: 4 },
      { name: 'Hardware', open: 2, resolved: 9 },
    ],
    lines: [{ key: 'open', label: 'Open' }, { key: 'resolved', label: 'Resolved' }],
  },
  {
    type: 'area', title: 'Platform Uptime % (Daily)',
    data: [
      { name: 'Mar 26', uptime: 99.9 }, { name: 'Mar 27', uptime: 99.8 }, { name: 'Mar 28', uptime: 100 },
      { name: 'Mar 29', uptime: 99.5 }, { name: 'Mar 30', uptime: 99.9 }, { name: 'Mar 31', uptime: 99.6 },
      { name: 'Apr 1',  uptime: 99.7 },
    ],
    lines: [{ key: 'uptime', label: 'Uptime %' }],
  },
]

const techopsColumns = [
  { key: 'incident',  label: 'Incident / Ticket' },
  { key: 'severity',  label: 'Severity', type: 'status' },
  { key: 'system',    label: 'System' },
  { key: 'centre',    label: 'Centre', muted: true },
  { key: 'opened',    label: 'Opened' },
  { key: 'age',       label: 'Age' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]

const techopsGrid = [
  { incident: 'Razorpay 504 timeouts at peak',       severity: 'High',   system: 'Payment GW',    centre: 'BKC + 2',       opened: 'Apr 1, 09:12', age: '6h 22m', status: 'In Progress', action: 'View'    },
  { incident: 'VBMS-Ticketing sync failure',          severity: 'High',   system: 'VBMS Bridge',   centre: 'Whitefield',    opened: 'Apr 1, 11:45', age: '3h 49m', status: 'In Progress', action: 'View'    },
  { incident: 'Report builder query timeout',         severity: 'Medium', system: 'CSPOC DB',      centre: 'All',           opened: 'Mar 31, 16:00',age: '19h',    status: 'Open',        action: 'Assign'  },
  { incident: 'POS terminals offline — 3 units',      severity: 'Medium', system: 'Kiosk POS',     centre: 'Baner',         opened: 'Mar 31, 10:30',age: '25h',    status: 'In Progress', action: 'View'    },
  { incident: 'API latency spike > 300ms',            severity: 'Medium', system: 'API Gateway',   centre: 'BKC',           opened: 'Apr 1, 07:00', age: '8h',     status: 'Open',        action: 'Assign'  },
  { incident: 'SSL cert expiry warning',              severity: 'Low',    system: 'Client Portal', centre: 'Global',        opened: 'Apr 1, 08:00', age: '7h',     status: 'Open',        action: 'Renew'   },
  { incident: 'DB maintenance confirmation needed',   severity: 'Low',    system: 'Reporting DB',  centre: 'All',           opened: 'Apr 1, 06:00', age: '9h',     status: 'Pending',     action: 'Confirm' },
  { incident: 'Push notification delivery 89% (↓)',   severity: 'Low',    system: 'Super App',     centre: 'All',           opened: 'Mar 31',       age: '28h',    status: 'In Progress', action: 'View'    },
]

// ─── EXPORT ────────────────────────────────────────────────────────────────────
export const cspocData = {
  finance: { metrics: financeMetrics, actions: financeActions, topFive: financeTopFive, charts: financeCharts, columns: financeColumns, grid: financeGrid, gridTitle: 'Vendor Payment & Settlement Tracker' },
  vas:     { metrics: vasMetrics,     actions: vasActions,     topFive: vasTopFive,     charts: vasCharts,     columns: vasColumns,     grid: vasGrid,     gridTitle: 'VAS Subscription Register' },
  techops: { metrics: techopsMetrics, actions: techopsActions, topFive: techopsTopFive, charts: techopsCharts, columns: techopsColumns, grid: techopsGrid, gridTitle: 'Active Incidents & Open Tech Tickets' },
}
