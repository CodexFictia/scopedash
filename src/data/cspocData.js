import {
  CreditCard, RefreshCw, Wallet, UtensilsCrossed, Store, ShoppingBag, Coins,
  Receipt, TrendingUp, TrendingDown, BarChart3, PieChart, Banknote, IndianRupee,
  Sparkles, Activity, AlertTriangle, CheckCircle2, XCircle, Clock,
  UserPlus, Ticket, BookOpen, Settings2, Building2,
} from 'lucide-react'

export const cspocPersonas = [
  { id: 'finance', label: 'Finance Team' },
  { id: 'vas',     label: 'VAS Team' },
  { id: 'techops', label: 'Tech Ops' },
]

export const cspocFilters = [
  { id: 'client',   label: 'Client',   options: ['All Clients', 'Deutsche Bank GCC', 'TechCorp India', 'Infosys BPO', 'Accenture', 'Cognizant', 'Wipro', 'HSBC GCC', 'Capgemini', 'Multiple'] },
  { id: 'location', label: 'Location', options: ['All Locations', 'Bengaluru – Whitefield', 'Pune – Baner', 'Hyderabad – HiTec City', 'Mumbai – BKC', 'Delhi – Cyber City', 'Chennai – Tidel Park'] },
  { id: 'status',   label: 'Status',   options: ['All Statuses', 'Pending', 'Completed', 'Failed', 'Review', 'Overdue'] },
  { id: 'type',     label: 'Type',     options: ['All Types', 'Workctrl', 'Paytm DQR', 'Wallet', 'Vendor Payment', 'Wallet Topup', 'Meal Plan'] },
]

// ─── FINANCE TEAM ─────────────────────────────────────────────────────────────
// Yesterday-centric reporting view: Workctrl, Paytm DQR, Wallet sales + vendor & wallet ops
const financeMetrics = [
  { label: 'Workctrl Payments',         value: '₹3.42L', change: '412 txns yesterday',  trend: 'up',      status: 'positive', icon: CreditCard },
  { label: 'Paytm DQR Payments',        value: '₹1.85L', change: '287 txns yesterday',  trend: 'up',      status: 'positive', icon: Receipt },
  { label: 'Wallet Points Spent',       value: '₹68.4K', change: '198 txns yesterday',  trend: 'up',      status: 'info',     icon: Coins },
  { label: 'Total Sales (Yesterday)',   value: '₹5.95L', change: 'WC + DQR + Wallet',   trend: 'up',      status: 'positive', icon: IndianRupee, highlight: true },
  { label: 'Smart Store Sales (#)',     value: '384',    change: 'transactions',         trend: 'up',      status: 'positive', icon: Store },
  { label: 'Food Vendor Sales (#)',     value: '513',    change: 'transactions',         trend: 'up',      status: 'positive', icon: UtensilsCrossed },
  { label: 'Vendor Payments Pending',   value: '₹4.20L', change: '18 vendors · 3 overdue', trend: 'up',  status: 'warning',  icon: Banknote },
  { label: 'Razorpay Actions Pending',  value: '14',     change: 'unmatched txns',       trend: 'neutral', status: 'warning',  icon: RefreshCw },
  { label: 'B2B Wallet Top-ups',        value: '8 / ₹1.86L', change: 'batches / value', trend: 'up',      status: 'info',     icon: Wallet },
  { label: 'Meal Plans',                value: '248 / 312', change: 'consumed / active', trend: 'up',     status: 'positive', icon: UtensilsCrossed },
]

const financeActions = [
  { priority: 'high',   text: 'Reconcile 14 Razorpay txns with invoices and approve vendor payments', due: 'Today', category: 'Reconciliation' },
  { priority: 'medium', text: 'B2B wallet top-up batches pending CFO approval — 8 batches, ₹1.86L total', due: 'EOD', category: 'Wallet' },
  { priority: 'low',    text: 'Send monthly meal-plan & store consumption report to client finance teams', due: 'Apr 30', category: 'Reports' },
]

const financeTopFive = [
  {
    title: 'Top 5 Stores by Sales Yesterday',
    items: [
      { label: 'Café Verde — Whitefield',    value: '₹84K', change: 1 },
      { label: 'Smart Store — BKC',          value: '₹71K', change: 1 },
      { label: 'Dosa Plaza — HiTec City',    value: '₹62K', change: 0 },
      { label: 'BrewPoint — Cyber City',     value: '₹58K', change: -1 },
      { label: 'Smart Store — Baner',        value: '₹49K', change: 0 },
    ],
  },
  {
    title: 'Top 5 Vendors by Pending Amount',
    items: [
      { label: 'Café Supplies Pvt Ltd', value: '₹2.8L', change: -1 },
      { label: 'CleanPro Services',     value: '₹1.4L', change: 0 },
      { label: 'TechFix Infra',         value: '₹88K',  change: 1 },
      { label: 'SecureGuard Systems',   value: '₹67K',  change: -1 },
      { label: 'AquaPure Solutions',    value: '₹45K',  change: 0 },
    ],
  },
]

const financeCharts = [
  {
    type: 'bar', title: 'Daily Sales Split (₹K) — Workctrl · Paytm DQR · Wallet',
    data: [
      { name: 'Mar 26', workctrl: 312, dqr: 168, wallet: 58 },
      { name: 'Mar 27', workctrl: 348, dqr: 182, wallet: 64 },
      { name: 'Mar 28', workctrl: 296, dqr: 154, wallet: 51 },
      { name: 'Mar 29', workctrl: 364, dqr: 198, wallet: 72 },
      { name: 'Mar 30', workctrl: 128, dqr:  62, wallet: 22 },
      { name: 'Mar 31', workctrl: 332, dqr: 176, wallet: 66 },
      { name: 'Apr 1',  workctrl: 342, dqr: 185, wallet: 68 },
    ],
    lines: [
      { key: 'workctrl', label: 'Workctrl' },
      { key: 'dqr',      label: 'Paytm DQR' },
      { key: 'wallet',   label: 'Wallet' },
    ],
  },
  {
    type: 'bar', title: 'Vendor Payments — Paid vs Pending (₹L)',
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
    type: 'area', title: 'B2B Wallet Top-ups (₹K) — Daily',
    data: [
      { name: 'Mar 26', topups: 142 },
      { name: 'Mar 27', topups: 168 },
      { name: 'Mar 28', topups:  88 },
      { name: 'Mar 29', topups: 210 },
      { name: 'Mar 30', topups:  44 },
      { name: 'Mar 31', topups: 156 },
      { name: 'Apr 1',  topups: 186 },
    ],
    lines: [{ key: 'topups', label: 'Top-ups (₹K)' }],
  },
]

const financeColumns = [
  { key: 'reference', label: 'Reference / Vendor' },
  { key: 'client',    label: 'Client' },
  { key: 'location',  label: 'Location', muted: true },
  { key: 'type',      label: 'Type' },
  { key: 'amount',    label: 'Amount' },
  { key: 'date',      label: 'Date' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]

const financeGrid = [
  { reference: 'WC#88412 — Café Verde',         client: 'Deutsche Bank GCC', location: 'Whitefield',    type: 'Workctrl',       amount: '₹84,200', date: 'Apr 1',  status: 'Completed',   action: 'View' },
  { reference: 'DQR#22871 — Smart Store',       client: 'TechCorp India',    location: 'BKC',           type: 'Paytm DQR',      amount: '₹71,300', date: 'Apr 1',  status: 'Completed',   action: 'View' },
  { reference: 'WL#10544 — Dosa Plaza',         client: 'Infosys BPO',       location: 'HiTec City',    type: 'Wallet',         amount: '₹38,900', date: 'Apr 1',  status: 'Completed',   action: 'View' },
  { reference: 'RZP TXN#892341 — Settlement',   client: 'Multiple',          location: 'BKC',           type: 'Vendor Payment', amount: '₹45,000', date: 'Apr 1',  status: 'Failed',      action: 'Match' },
  { reference: 'RZP TXN#891204 — Settlement',   client: 'Multiple',          location: 'HiTec City',    type: 'Vendor Payment', amount: '₹12,500', date: 'Apr 1',  status: 'Review',      action: 'Match' },
  { reference: 'Café Supplies Pvt Ltd',         client: 'Multiple',          location: 'Whitefield',    type: 'Vendor Payment', amount: '₹2,80,000', date: 'Mar 29', status: 'Overdue',    action: 'Pay Now' },
  { reference: 'TechCorp Wallet Batch #B-7711', client: 'TechCorp India',    location: 'Whitefield',    type: 'Wallet Topup',   amount: '₹62,000', date: 'Apr 2',  status: 'Pending',     action: 'Authorize' },
  { reference: 'Cognizant Wallet Batch #B-7714',client: 'Cognizant',         location: 'BKC',           type: 'Wallet Topup',   amount: '₹38,500', date: 'Apr 2',  status: 'Pending',     action: 'Authorize' },
  { reference: 'CleanPro Services',             client: 'Multiple',          location: 'Multiple',      type: 'Vendor Payment', amount: '₹1,40,000', date: 'Apr 3', status: 'Pending',     action: 'Review' },
  { reference: 'Infosys BPO Meal Plan — Mar',   client: 'Infosys BPO',       location: 'Baner',         type: 'Meal Plan',      amount: '₹1,65,000', date: 'Apr 1', status: 'Completed',   action: 'View' },
  { reference: 'TechFix Infra',                 client: 'Multiple',          location: 'Baner',         type: 'Vendor Payment', amount: '₹88,000', date: 'Apr 5',  status: 'Pending',     action: 'Review' },
  { reference: 'SecureGuard Systems',           client: 'Multiple',          location: 'Cyber City',    type: 'Vendor Payment', amount: '₹67,000', date: 'Apr 7',  status: 'Pending',     action: 'Review' },
]

// ─── VAS TEAM ─────────────────────────────────────────────────────────────────
// Meal plan + stores + rent commercial view
const vasMetrics = [
  { label: 'Meal Plan Amount (Yesterday)', value: '₹84.2K', change: '+6.3% vs avg',          trend: 'up',   status: 'positive', icon: UtensilsCrossed, highlight: true },
  { label: 'Meal Plan Coverage',           value: '38 / 61', change: 'active / total locations', trend: 'up', status: 'positive', icon: Building2 },
  { label: 'Meal Plan Usage',              value: '4,820',   change: 'covers yesterday',     trend: 'up',   status: 'positive', icon: UtensilsCrossed },
  { label: 'Previous Period Amount',       value: '₹79.2K',  change: 'AI: weather +rainy day uplift', trend: 'up', status: 'info', icon: Sparkles, ai: true },
  { label: 'Previous Period Usage',        value: '4,510',   change: 'AI: 2 new clients onboarded', trend: 'up', status: 'info', icon: Sparkles, ai: true },
  { label: 'Avg Meal Plan Utilisation',    value: '78.4%',   change: '+2.1% MoM',            trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Avg Store Revenue',            value: '₹42.0K',  change: 'per store / day',      trend: 'up',   status: 'positive', icon: Store },
  { label: 'Rent Revenue (MTD)',           value: '₹1.24Cr', change: '38 stores billable',   trend: 'up',   status: 'positive', icon: Banknote },
  { label: 'Avg Margin %',                 value: '21.6%',   change: '+0.4% vs target',      trend: 'up',   status: 'positive', icon: TrendingUp },
]

const vasActions = [
  { priority: 'high',   text: 'Meal plan renewal pending for Accenture (340 users) — expires in 3 days', due: 'Apr 5', category: 'Renewal' },
  { priority: 'high',   text: 'AI flag: Wipro Baner meal usage dropped 38% vs 4-week avg — investigate', due: 'Today', category: 'AI Insight' },
  { priority: 'medium', text: 'Store onboarding: 3 new food vendors at HiTec City awaiting menu sign-off', due: 'Apr 4', category: 'Stores' },
  { priority: 'medium', text: 'Margin below target (18.2%) at Tidel Park — review vendor pricing', due: 'Apr 6', category: 'Commercial' },
  { priority: 'low',    text: 'Quarterly rent escalation for 6 stores due — share commercials with Finance', due: 'Apr 15', category: 'Rent' },
]

const vasTopFive = [
  {
    title: 'Top 5 Clients by Meal Plan Amount',
    items: [
      { label: 'Deutsche Bank GCC', value: '₹1.42L', change: 1 },
      { label: 'Infosys BPO',       value: '₹1.18L', change: 0 },
      { label: 'Accenture',         value: '₹0.96L', change: 1 },
      { label: 'Wipro',             value: '₹0.62L', change: -1 },
      { label: 'HSBC GCC',          value: '₹0.58L', change: 0 },
    ],
  },
  {
    title: 'Top 5 Stores by Revenue (Yesterday)',
    items: [
      { label: 'Café Verde — Whitefield',  value: '₹84K', change: 1 },
      { label: 'Smart Store — BKC',         value: '₹71K', change: 1 },
      { label: 'Dosa Plaza — HiTec City',   value: '₹62K', change: 0 },
      { label: 'BrewPoint — Cyber City',    value: '₹58K', change: -1 },
      { label: 'Smart Store — Baner',       value: '₹49K', change: 0 },
    ],
  },
]

const vasCharts = [
  {
    type: 'area', title: 'Meal Plan Amount (₹K) — Daily',
    data: [
      { name: 'Mar 26', current: 78, prev: 74 },
      { name: 'Mar 27', current: 82, prev: 76 },
      { name: 'Mar 28', current: 71, prev: 73 },
      { name: 'Mar 29', current: 88, prev: 80 },
      { name: 'Mar 30', current: 22, prev: 20 },
      { name: 'Mar 31', current: 80, prev: 78 },
      { name: 'Apr 1',  current: 84, prev: 79 },
    ],
    lines: [{ key: 'current', label: 'This Week' }, { key: 'prev', label: 'Prev Week' }],
  },
  {
    type: 'bar', title: 'Meal Plan Utilisation by Client (%)',
    data: [
      { name: 'Deutsche', current: 88, target: 80 },
      { name: 'Infosys',  current: 82, target: 80 },
      { name: 'Accenture',current: 79, target: 80 },
      { name: 'Wipro',    current: 56, target: 80 },
      { name: 'HSBC',     current: 84, target: 80 },
    ],
    lines: [{ key: 'current', label: 'Utilisation %' }, { key: 'target', label: 'Target %' }],
  },
  {
    type: 'line', title: 'Avg Store Revenue & Margin',
    data: [
      { name: 'Oct', revenue: 38, margin: 20.1 },
      { name: 'Nov', revenue: 39, margin: 20.4 },
      { name: 'Dec', revenue: 41, margin: 21.0 },
      { name: 'Jan', revenue: 40, margin: 20.8 },
      { name: 'Feb', revenue: 41, margin: 21.2 },
      { name: 'Mar', revenue: 42, margin: 21.6 },
    ],
    lines: [{ key: 'revenue', label: 'Revenue ₹K/day' }, { key: 'margin', label: 'Margin %' }],
  },
]

const vasColumns = [
  { key: 'client',    label: 'Client' },
  { key: 'location',  label: 'Location', muted: true },
  { key: 'plan',      label: 'Meal Plan' },
  { key: 'users',     label: 'Active Users' },
  { key: 'amount',    label: 'Amount (Yest)' },
  { key: 'usage',     label: 'Usage %' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]

const vasGrid = [
  { client: 'Deutsche Bank GCC', location: 'BKC',         plan: 'Lunch + Snacks', users: '480', amount: '₹1,42,000', usage: '88%', status: 'Active',  action: 'View' },
  { client: 'Infosys BPO',       location: 'Baner',       plan: 'Full Day',       users: '420', amount: '₹1,18,000', usage: '82%', status: 'Active',  action: 'View' },
  { client: 'Accenture',         location: 'HiTec City',  plan: 'Lunch',          users: '340', amount: '₹96,000',  usage: '79%', status: 'Renewing',action: 'Renew' },
  { client: 'Wipro',             location: 'Baner',       plan: 'Lunch',          users: '210', amount: '₹62,000',  usage: '56%', status: 'Review',  action: 'Investigate' },
  { client: 'HSBC GCC',          location: 'Whitefield',  plan: 'Full Day',       users: '180', amount: '₹58,000',  usage: '84%', status: 'Active',  action: 'View' },
  { client: 'Cognizant',         location: 'BKC',         plan: 'Lunch + Snacks', users: '200', amount: '₹52,000',  usage: '74%', status: 'Active',  action: 'View' },
  { client: 'TechCorp India',    location: 'Whitefield',  plan: 'Full Day',       users: '120', amount: '₹38,000',  usage: '81%', status: 'Active',  action: 'View' },
  { client: 'Capgemini',         location: 'Cyber City',  plan: 'Lunch',          users: '150', amount: '₹34,000',  usage: '70%', status: 'Active',  action: 'View' },
  { client: 'Multiple — Café Verde Store', location: 'Whitefield', plan: 'Smart Store', users: 'N/A', amount: '₹84,000', usage: 'N/A', status: 'Active', action: 'View' },
]

// ─── TECH OPS ─────────────────────────────────────────────────────────────────
// Vendor onboarding + ticketing pipeline by category
const techopsMetrics = [
  { label: 'Onboarding — In Progress', value: '8',  change: '4 stores · 4 vendors', trend: 'up',   status: 'info',     icon: UserPlus, highlight: true },
  { label: 'Onboarding — Completed',   value: '24', change: 'this month',           trend: 'up',   status: 'positive', icon: CheckCircle2 },
  { label: 'Onboarding — Rejected',    value: '3',  change: 'KYC / docs failed',    trend: 'down', status: 'warning',  icon: XCircle },
  { label: 'Open Tickets',             value: '14', change: 'all categories',       trend: 'up',   status: 'warning',  icon: Ticket },
  { label: 'In-Progress Tickets',      value: '6',  change: 'avg age 11h',          trend: 'neutral', status: 'info',  icon: Clock },
  { label: 'Closed Tickets (MTD)',     value: '47', change: '92% within SLA',       trend: 'up',   status: 'positive', icon: CheckCircle2 },
]

const techopsActions = [
  { priority: 'high',   text: 'Complete Store KT for 4 newly onboarded stores (Café Verde Whitefield, Dosa Plaza HiTec City, BrewPoint Cyber City, Smart Store Baner)', due: 'Apr 10', category: 'Onboarding' },
  { priority: 'high',   text: 'DQR setup pending for 6 stores — coordinate with Paytm and store owners to install QR & POS', due: 'Apr 12', category: 'DQR Setup' },
  { priority: 'medium', text: '3 onboarding cases stuck in KYC review — chase docs from vendors', due: 'Apr 6', category: 'Onboarding' },
  { priority: 'medium', text: 'Workctrl integration ticket (P2) at Cyber City — 504 errors at peak hours', due: 'Today', category: 'Tickets' },
]

const techopsTopFive = [
  {
    title: 'Top 5 Ticket Categories (Open)',
    items: [
      { label: 'Workctrl integration', value: '5', change: 1 },
      { label: 'DQR setup / sync',     value: '4', change: -1 },
      { label: 'Wallet top-ups',       value: '2', change: 0 },
      { label: 'Meal plan portal',     value: '2', change: 0 },
      { label: 'Store hardware',       value: '1', change: -1 },
    ],
  },
  {
    title: 'Top 5 Stores in Onboarding Queue',
    items: [
      { label: 'Café Verde — Whitefield',     value: 'Day 4', change: 1 },
      { label: 'Dosa Plaza — HiTec City',     value: 'Day 6', change: 0 },
      { label: 'BrewPoint — Cyber City',      value: 'Day 3', change: 1 },
      { label: 'Smart Store — Baner',         value: 'Day 8', change: -1 },
      { label: 'Juice Junction — Tidel Park', value: 'Day 2', change: 1 },
    ],
  },
]

const techopsCharts = [
  {
    type: 'bar', title: 'Tickets by Category — Open · In Progress · Closed',
    data: [
      { name: 'Workctrl',  open: 5, inprog: 2, closed: 14 },
      { name: 'DQR',       open: 4, inprog: 1, closed: 12 },
      { name: 'Wallet',    open: 2, inprog: 1, closed:  9 },
      { name: 'Meal Plan', open: 2, inprog: 1, closed:  8 },
      { name: 'Hardware',  open: 1, inprog: 1, closed:  4 },
    ],
    lines: [
      { key: 'open',   label: 'Open' },
      { key: 'inprog', label: 'In Progress' },
      { key: 'closed', label: 'Closed' },
    ],
  },
  {
    type: 'bar', title: 'Vendor Onboarding Funnel (this month)',
    data: [
      { name: 'Lead',      count: 42 },
      { name: 'KYC',       count: 38 },
      { name: 'Agreement', count: 32 },
      { name: 'Setup',     count: 27 },
      { name: 'Live',      count: 24 },
    ],
    lines: [{ key: 'count', label: 'Vendors' }],
  },
  {
    type: 'line', title: 'Tickets Opened vs Closed (Daily)',
    data: [
      { name: 'Mar 26', opened: 4, closed: 5 },
      { name: 'Mar 27', opened: 6, closed: 4 },
      { name: 'Mar 28', opened: 3, closed: 6 },
      { name: 'Mar 29', opened: 5, closed: 4 },
      { name: 'Mar 30', opened: 1, closed: 2 },
      { name: 'Mar 31', opened: 4, closed: 5 },
      { name: 'Apr 1',  opened: 5, closed: 6 },
    ],
    lines: [{ key: 'opened', label: 'Opened' }, { key: 'closed', label: 'Closed' }],
  },
]

const techopsColumns = [
  { key: 'reference', label: 'Reference' },
  { key: 'kind',      label: 'Type' },
  { key: 'category',  label: 'Category' },
  { key: 'client',    label: 'Client / Vendor' },
  { key: 'location',  label: 'Location', muted: true },
  { key: 'age',       label: 'Age' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]

const techopsGrid = [
  { reference: 'ONB-2204', kind: 'Onboarding', category: 'Store',    client: 'Café Verde',          location: 'Whitefield', age: '4d',   status: 'KT Pending', action: 'Resume' },
  { reference: 'ONB-2207', kind: 'Onboarding', category: 'Store',    client: 'Dosa Plaza',          location: 'HiTec City', age: '6d',   status: 'DQR Pending', action: 'Setup' },
  { reference: 'ONB-2210', kind: 'Onboarding', category: 'Store',    client: 'BrewPoint',           location: 'Cyber City', age: '3d',   status: 'KT Pending', action: 'Resume' },
  { reference: 'ONB-2212', kind: 'Onboarding', category: 'Store',    client: 'Smart Store',         location: 'Baner',      age: '8d',   status: 'KYC Review', action: 'Chase' },
  { reference: 'ONB-2185', kind: 'Onboarding', category: 'Vendor',   client: 'Juice Junction',      location: 'Tidel Park', age: '2d',   status: 'Agreement',  action: 'Send' },
  { reference: 'TKT-9182', kind: 'Ticket',     category: 'Workctrl', client: 'Deutsche Bank GCC',   location: 'Cyber City', age: '6h',   status: 'In Progress',action: 'View' },
  { reference: 'TKT-9176', kind: 'Ticket',     category: 'DQR',      client: 'TechCorp India',     location: 'BKC',        age: '11h',  status: 'Open',       action: 'Assign' },
  { reference: 'TKT-9171', kind: 'Ticket',     category: 'Wallet',   client: 'Infosys BPO',         location: 'Baner',      age: '1d',   status: 'In Progress',action: 'View' },
  { reference: 'TKT-9168', kind: 'Ticket',     category: 'Meal Plan',client: 'Wipro',               location: 'Baner',      age: '1d',   status: 'Open',       action: 'Assign' },
  { reference: 'TKT-9163', kind: 'Ticket',     category: 'Hardware', client: 'Multiple',            location: 'Baner',      age: '2d',   status: 'In Progress',action: 'View' },
]

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export const cspocData = {
  finance: { metrics: financeMetrics, actions: financeActions, topFive: financeTopFive, charts: financeCharts, columns: financeColumns, grid: financeGrid, gridTitle: 'Sales · Vendor Payments · Wallet Top-ups (Yesterday)' },
  vas:     { metrics: vasMetrics,     actions: vasActions,     topFive: vasTopFive,     charts: vasCharts,     columns: vasColumns,     grid: vasGrid,     gridTitle: 'Meal Plans & Store Performance' },
  techops: { metrics: techopsMetrics, actions: techopsActions, topFive: techopsTopFive, charts: techopsCharts, columns: techopsColumns, grid: techopsGrid, gridTitle: 'Vendor Onboarding & Tickets' },
}
