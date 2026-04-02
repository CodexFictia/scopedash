import { DollarSign, TrendingUp, Users, Target, BarChart3, Building2, Clock, CheckCircle, AlertCircle, Briefcase } from 'lucide-react'

export const crmPersonas = [
  { id: 'mgmt',      label: 'Management' },
  { id: 'cbo',       label: 'CBO' },
  { id: 'salesmgmt', label: 'Sales Management' },
  { id: 'regional',  label: 'Regional Sales Head' },
  { id: 'saleslead', label: 'Sales Lead' },
]

export const crmFilters = [
  { id: 'city',    label: 'City',    options: ['All Cities', 'Bengaluru', 'Pune', 'Hyderabad', 'Mumbai', 'Delhi', 'Chennai'] },
  { id: 'segment', label: 'Segment', options: ['All Segments', 'Enterprise (>500 seats)', 'Mid-Market (100–499)', 'SME (<100)', 'GCC', 'Co-working'] },
  { id: 'stage',   label: 'Stage',   options: ['All Stages', 'Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won', 'Lost'] },
]

// ─── MANAGEMENT ───────────────────────────────────────────────────────────────
const mgmtMetrics = [
  { label: 'Total Pipeline Value',    value: '₹28.4Cr', change: '+14% vs last month',   trend: 'up',   status: 'positive', icon: DollarSign, highlight: true },
  { label: 'Revenue Attainment MTD',  value: '82.4%',   change: '₹4.1Cr of ₹5Cr target',trend: 'up',  status: 'warning',  icon: Target },
  { label: 'Win Rate (YTD)',          value: '34.2%',   change: '+2.1% vs last year',   trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Avg Deal Size',           value: '₹1.68Cr', change: '+18% vs last year',    trend: 'up',   status: 'positive', icon: Briefcase },
  { label: 'Deals Closing This Month',value: '8',       change: '₹6.2Cr at stake',      trend: 'up',   status: 'info',     icon: Clock },
]
const mgmtActions = [
  { priority: 'high',   text: 'Q1 FY26 Revenue: ₹4.1Cr vs ₹5Cr target — 4 deals must close by Apr 30', due: 'Apr 30', category: 'Target' },
  { priority: 'high',   text: '2 deals (>₹2Cr each) in "Negotiation" for >30 days — exec involvement needed', due: 'Apr 5', category: 'Deal Risk' },
  { priority: 'medium', text: 'GCC segment win rate at 28% vs 40% target — diagnostic review with CGO', due: 'Apr 7', category: 'Strategy' },
  { priority: 'medium', text: 'Sales team in Mumbai below 60% quota attainment — resource review', due: 'Apr 8', category: 'Team' },
  { priority: 'low',    text: 'Broker network quarterly performance review — 3 inactive brokers to flag', due: 'Apr 10', category: 'Channel' },
]
const mgmtTopFive = [
  {
    title: 'Top 5 Deals by Value',
    items: [
      { label: 'Deutsche Bank GCC (1,000 seats)', value: '₹5.2Cr', change: 1 },
      { label: 'HSBC India (600 seats)',           value: '₹3.1Cr', change: 0 },
      { label: 'Wipro Expansion (400 seats)',      value: '₹2.1Cr', change: 0 },
      { label: 'JP Morgan GCC (300 seats)',        value: '₹1.6Cr', change: 1 },
      { label: 'Standard Chartered (250 seats)',   value: '₹1.3Cr', change: -1 },
    ],
  },
  {
    title: 'Top 5 Cities by Pipeline',
    items: [
      { label: 'Bengaluru', value: '₹9.8Cr', change: 1 },
      { label: 'Mumbai',    value: '₹6.4Cr', change: 0 },
      { label: 'Hyderabad', value: '₹4.8Cr', change: 1 },
      { label: 'Pune',      value: '₹4.2Cr', change: -1 },
      { label: 'Delhi NCR', value: '₹3.2Cr', change: 0 },
    ],
  },
]
const mgmtCharts = [
  {
    type: 'bar', title: 'Monthly Revenue vs Target (₹Cr)',
    data: [
      { name: 'Oct', actual: 3.8, target: 4.0 }, { name: 'Nov', actual: 4.2, target: 4.0 },
      { name: 'Dec', actual: 4.8, target: 4.5 }, { name: 'Jan', actual: 3.6, target: 4.5 },
      { name: 'Feb', actual: 4.1, target: 5.0 }, { name: 'Mar', actual: 4.9, target: 5.0 },
    ],
    lines: [{ key: 'actual', label: 'Actual (₹Cr)' }, { key: 'target', label: 'Target' }],
  },
  {
    type: 'line', title: 'Win Rate & Pipeline Coverage Trend',
    data: [
      { name: 'Q2 FY25', winRate: 30, coverage: 1.8 }, { name: 'Q3 FY25', winRate: 32, coverage: 2.0 },
      { name: 'Q4 FY25', winRate: 34, coverage: 2.2 }, { name: 'Q1 FY26', winRate: 34, coverage: 2.4 },
    ],
    lines: [{ key: 'winRate', label: 'Win Rate %' }, { key: 'coverage', label: 'Pipeline Cover (x)' }],
  },
  {
    type: 'pie', title: 'Pipeline by Segment',
    data: [
      { name: 'Enterprise',  value: 38 }, { name: 'GCC',         value: 28 },
      { name: 'Mid-Market',  value: 20 }, { name: 'SME',         value: 8  },
      { name: 'Co-working',  value: 6  },
    ],
    lines: [],
  },
]
const mgmtColumns = [
  { key: 'account',   label: 'Account' },
  { key: 'city',      label: 'City' },
  { key: 'seats',     label: 'Seats' },
  { key: 'value',     label: 'Deal Value' },
  { key: 'stage',     label: 'Stage' },
  { key: 'asm',       label: 'ASM', muted: true },
  { key: 'closeDate', label: 'Close Date' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]
const mgmtGrid = [
  { account: 'Deutsche Bank GCC',      city: 'Bengaluru', seats: '1,000', value: '₹5.2Cr', stage: 'Negotiation', asm: 'Rahul M.', closeDate: 'Apr 25', status: 'Hot',         action: 'View' },
  { account: 'HSBC India',             city: 'Mumbai',    seats: '600',   value: '₹3.1Cr', stage: 'Proposal',    asm: 'Neha T.',  closeDate: 'May 5',  status: 'Hot',         action: 'View' },
  { account: 'Wipro Expansion',        city: 'Bengaluru', seats: '400',   value: '₹2.1Cr', stage: 'Negotiation', asm: 'Arjun S.', closeDate: 'Apr 20', status: 'Warm',        action: 'View' },
  { account: 'JP Morgan GCC',          city: 'Bengaluru', seats: '300',   value: '₹1.6Cr', stage: 'Due Diligence',asm: 'Kavya R.', closeDate: 'Apr 30', status: 'Warm',       action: 'View' },
  { account: 'Standard Chartered',     city: 'Mumbai',    seats: '250',   value: '₹1.3Cr', stage: 'Negotiation', asm: 'Neha T.',  closeDate: 'Apr 28', status: 'In Progress', action: 'View' },
  { account: 'ITC Infotech GCC',       city: 'Hyderabad', seats: '480',   value: '₹2.4Cr', stage: 'Proposal',    asm: 'Divya N.', closeDate: 'May 15', status: 'Warm',        action: 'View' },
  { account: 'Capgemini',              city: 'Pune',      seats: '200',   value: '₹1.0Cr', stage: 'Qualified',   asm: 'Amit D.',  closeDate: 'May 20', status: 'Warm',        action: 'View' },
  { account: 'EY India',               city: 'Delhi',     seats: '180',   value: '₹92L',   stage: 'Proposal',    asm: 'Sunita K.',closeDate: 'May 10', status: 'Warm',        action: 'View' },
  { account: 'Local Tech Startup',     city: 'Bengaluru', seats: '40',    value: '₹20L',   stage: 'Lead',        asm: 'Arjun S.', closeDate: 'Jun 1',  status: 'Cold',        action: 'Qualify' },
  { account: 'Retail Chain HO',        city: 'Mumbai',    seats: '60',    value: '₹30L',   stage: 'Lead',        asm: 'Neha T.',  closeDate: 'Jun 10', status: 'Cold',        action: 'Qualify' },
]

// ─── CBO ──────────────────────────────────────────────────────────────────────
const cboMetrics = [
  { label: 'Strategic Pipeline',        value: '₹18.6Cr', change: '6 deals >₹1Cr',         trend: 'up',   status: 'positive', icon: DollarSign, highlight: true },
  { label: 'GCC Pursuits Active',       value: '8',       change: '3 in advanced stage',    trend: 'up',   status: 'positive', icon: Building2 },
  { label: 'Key Account Health',        value: '82%',     change: '4 accounts healthy',     trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Revenue Forecast (Q2)',     value: '₹14.2Cr', change: '±12% confidence range',  trend: 'up',   status: 'info',     icon: BarChart3 },
  { label: 'Partner / Broker Deals',   value: '₹6.8Cr',  change: '24% of total pipeline',  trend: 'up',   status: 'info',     icon: Users },
]
const cboActions = [
  { priority: 'high',   text: 'Deutsche Bank GCC (1,000 seats, ₹5.2Cr) — MD-level decision pending. Exec engagement needed.', due: 'Apr 4', category: 'Strategic Deal' },
  { priority: 'high',   text: 'HSBC presentation scheduled Apr 6 — review solution deck before submission', due: 'Apr 5', category: 'Proposal Review' },
  { priority: 'medium', text: 'New GCC framework agreement with ANSR Source — legal review pending for 12 days', due: 'Apr 8', category: 'Partnership' },
  { priority: 'medium', text: 'Q2 FY26 expansion roadmap for board — cities, capex, inventory vs demand analysis', due: 'Apr 12', category: 'Strategy' },
  { priority: 'low',    text: 'RE India broker summit opportunity — Smartworks sponsorship & visibility decision needed', due: 'Apr 20', category: 'Branding' },
]
const cboTopFive = [
  {
    title: 'Top 5 Strategic Deals',
    items: [
      { label: 'Deutsche Bank GCC',   value: '₹5.2Cr', change: 0 },
      { label: 'HSBC India',          value: '₹3.1Cr', change: 1 },
      { label: 'ITC Infotech GCC',    value: '₹2.4Cr', change: 1 },
      { label: 'Wipro Expansion',     value: '₹2.1Cr', change: 0 },
      { label: 'JP Morgan GCC',       value: '₹1.6Cr', change: 1 },
    ],
  },
  {
    title: 'Top 5 GCC Markets by Opportunity',
    items: [
      { label: 'Bengaluru – Tech GCC',  value: '₹9.2Cr', change: 1 },
      { label: 'Hyderabad – BFSI GCC',  value: '₹4.8Cr', change: 1 },
      { label: 'Mumbai – BFSI GCC',     value: '₹3.6Cr', change: 0 },
      { label: 'Pune – Tech + BFSI',    value: '₹3.2Cr', change: -1 },
      { label: 'Delhi – Govt + IT',     value: '₹2.4Cr', change: 0 },
    ],
  },
]
const cboCharts = mgmtCharts
const cboColumns = mgmtColumns
const cboGrid = mgmtGrid

// ─── SALES MANAGEMENT ─────────────────────────────────────────────────────────
const salesmgmtMetrics = [
  { label: 'Team Quota Attainment',   value: '78.4%', change: '6 of 8 reps on track', trend: 'up',   status: 'warning',  icon: Target, highlight: true },
  { label: 'Pipeline Coverage',       value: '2.4x',  change: 'Target: 2.0x',         trend: 'up',   status: 'positive', icon: BarChart3 },
  { label: 'Forecast Accuracy',       value: '81.2%', change: '+3.4% vs last quarter',trend: 'up',   status: 'positive', icon: TrendingUp },
  { label: 'Deal Conversion (MoM)',   value: '34.2%', change: '+2.1% vs last month',  trend: 'up',   status: 'positive', icon: CheckCircle },
  { label: 'Win/Loss This Month',     value: '4W/2L', change: '2 no-decisions',       trend: 'neutral',status: 'info',   icon: BarChart3 },
]
const salesmgmtActions = [
  { priority: 'high',   text: 'Neha (Mumbai) at 54% quota — 2 deals stuck in negotiation >3 weeks, intervene', due: 'Apr 4', category: 'Quota Risk' },
  { priority: 'high',   text: 'Forecast review: 3 deals overridden to "commit" without pipeline evidence — recalibrate', due: 'Apr 5', category: 'Forecast' },
  { priority: 'medium', text: 'Win/loss report for Q1 FY26: GCC losses pattern (pricing, infra) needs product review', due: 'Apr 8', category: 'Win/Loss' },
  { priority: 'medium', text: 'Pipeline hygiene: 12 leads with no activity in >21 days — purge or reassign', due: 'Apr 6', category: 'CRM Hygiene' },
  { priority: 'low',    text: 'Team training: new SmartVantage pitch deck requires alignment session', due: 'Apr 10', category: 'Enablement' },
]
const salesmgmtTopFive = [
  {
    title: 'Top 5 Reps by Pipeline Value',
    items: [
      { label: 'Rahul Mehta (Bengaluru)', value: '₹8.4Cr', change: 1 },
      { label: 'Kavya Rao (Hyderabad)',   value: '₹5.2Cr', change: 1 },
      { label: 'Arjun Singh (Bengaluru)', value: '₹4.8Cr', change: 0 },
      { label: 'Divya Nair (Mumbai)',     value: '₹4.2Cr', change: -1 },
      { label: 'Sunita Kumar (Delhi)',    value: '₹3.6Cr', change: 0 },
    ],
  },
  {
    title: 'Team Quota Attainment Ranking',
    items: [
      { label: 'Rahul Mehta',  value: '112%', change: 1 },
      { label: 'Kavya Rao',    value: '98%',  change: 1 },
      { label: 'Arjun Singh',  value: '88%',  change: 0 },
      { label: 'Sunita Kumar', value: '76%',  change: -1 },
      { label: 'Neha Thakur',  value: '54%',  change: -1 },
    ],
  },
]
const salesmgmtCharts = [
  {
    type: 'bar', title: 'Team Quota Attainment by Rep (%)',
    data: [
      { name: 'Rahul M.', attain: 112 }, { name: 'Kavya R.',  attain: 98 },
      { name: 'Arjun S.', attain: 88  }, { name: 'Sunita K.', attain: 76 },
      { name: 'Amit D.',  attain: 74  }, { name: 'Divya N.',  attain: 68 },
      { name: 'Neha T.',  attain: 54  },
    ],
    lines: [{ key: 'attain', label: 'Attainment %' }],
  },
  {
    type: 'line', title: 'Pipeline Funnel by Stage (Count)',
    data: [
      { name: 'Lead', count: 42 }, { name: 'Qualified', count: 28 }, { name: 'Proposal', count: 16 },
      { name: 'Negotiation', count: 9 }, { name: 'Committed', count: 5 },
    ],
    lines: [{ key: 'count', label: 'Deals' }],
  },
  {
    type: 'area', title: 'Deal Velocity (Avg Days per Stage)',
    data: [
      { name: 'Lead→Qualify', days: 8 }, { name: 'Qualify→Prop', days: 14 },
      { name: 'Prop→Neg',     days: 18 }, { name: 'Neg→Close',   days: 22 },
    ],
    lines: [{ key: 'days', label: 'Avg Days' }],
  },
]
const salesmgmtColumns = mgmtColumns
const salesmgmtGrid = mgmtGrid

// ─── REGIONAL SALES HEAD ──────────────────────────────────────────────────────
const regionalMetrics = [
  { label: 'Regional Pipeline',       value: '₹9.8Cr', change: '+₹1.4Cr this month',   trend: 'up',   status: 'positive', icon: DollarSign, highlight: true },
  { label: 'Leads Added (30d)',       value: '18',     change: '+6 vs last month',      trend: 'up',   status: 'positive', icon: Users },
  { label: 'Site Visits Conducted',  value: '12',     change: '8 proposals pending',   trend: 'up',   status: 'info',     icon: Building2 },
  { label: 'Inventory vs Demand Gap',value: '420 seats',change: 'Fill target by Jul',  trend: 'up',   status: 'warning',  icon: AlertCircle },
  { label: 'Regional Quota Attain.',  value: '91.2%', change: '+4% vs last month',     trend: 'up',   status: 'positive', icon: Target },
]
const regionalActions = [
  { priority: 'high',   text: 'Deutsche Bank GCC (Bengaluru, 1,000 seats) — city head and landlord alignment needed for site', due: 'Apr 4', category: 'Deal Support' },
  { priority: 'high',   text: 'Whitefield inventory constraint: 800 committed seats but only 620 ready to deliver — flag to PMO', due: 'Apr 5', category: 'Inventory' },
  { priority: 'medium', text: 'JP Morgan (300 seats, Bengaluru) — competitor proposal received, accelerate our response', due: 'Apr 6', category: 'Competitive' },
  { priority: 'medium', text: '3 broker pipeline deals inactive for 2+ weeks — re-engage or reassign', due: 'Apr 8', category: 'Broker' },
  { priority: 'low',    text: 'City demand heat map for Q2 FY26 expansion planning — compile with RE team', due: 'Apr 12', category: 'Planning' },
]
const regionalTopFive = [
  {
    title: 'Top 5 Deals in My Region',
    items: [
      { label: 'Deutsche Bank GCC', value: '₹5.2Cr', change: 1 },
      { label: 'Wipro Expansion',   value: '₹2.1Cr', change: 0 },
      { label: 'JP Morgan GCC',     value: '₹1.6Cr', change: 1 },
      { label: 'Capgemini',         value: '₹1.0Cr', change: 0 },
      { label: 'ITC Infotech',      value: '₹2.4Cr', change: 1 },
    ],
  },
  {
    title: 'Lead Sources by Volume',
    items: [
      { label: 'Broker / Channel',  value: '42%', change: 0 },
      { label: 'Inbound / Digital', value: '24%', change: 1 },
      { label: 'Direct BD',         value: '18%', change: 0 },
      { label: 'GCC Partner Refs',  value: '10%', change: 1 },
      { label: 'Events / Conf.',    value: '6%',  change: -1 },
    ],
  },
]
const regionalCharts = [
  {
    type: 'bar', title: 'Stage-wise Pipeline (₹Cr) — My Region',
    data: [
      { name: 'Lead',       value: 2.4 }, { name: 'Qualified', value: 2.8 },
      { name: 'Proposal',   value: 2.2 }, { name: 'Negotiation',value: 1.8 },
      { name: 'Committed',  value: 0.6 },
    ],
    lines: [{ key: 'value', label: '₹Cr' }],
  },
  {
    type: 'line', title: 'Monthly Bookings — My Region (₹Cr)',
    data: [
      { name: 'Oct', bookings: 1.2 }, { name: 'Nov', bookings: 1.8 },
      { name: 'Dec', bookings: 1.4 }, { name: 'Jan', bookings: 2.0 },
      { name: 'Feb', bookings: 1.6 }, { name: 'Mar', bookings: 2.2 },
    ],
    lines: [{ key: 'bookings', label: 'Bookings (₹Cr)' }],
  },
]
const regionalColumns = mgmtColumns
const regionalGrid = mgmtGrid.filter(r => ['Bengaluru'].includes(r.city))

// ─── SALES LEAD ───────────────────────────────────────────────────────────────
const salesleadMetrics = [
  { label: 'My Active Deals',        value: '7',     change: '2 closing this month',  trend: 'up',   status: 'info',     icon: Briefcase, highlight: true },
  { label: 'My Pipeline Value',      value: '₹8.4Cr',change: '3 deals >₹1Cr',        trend: 'up',   status: 'positive', icon: DollarSign },
  { label: 'Follow-ups Overdue',     value: '3',     change: 'Oldest: 8 days',        trend: 'up',   status: 'negative', icon: Clock },
  { label: 'Proposals Sent (30d)',   value: '5',     change: '2 responses pending',   trend: 'up',   status: 'info',     icon: TrendingUp },
  { label: 'Meetings This Week',     value: '4',     change: '2 done, 2 upcoming',    trend: 'neutral',status: 'info',   icon: Users },
]
const salesleadActions = [
  { priority: 'high',   text: 'Deutsche Bank (1,000 seats) — decision-maker follow-up 5 days since last contact. Call now.', due: 'Today', category: 'Chase' },
  { priority: 'high',   text: 'JP Morgan proposal sent Mar 28 — no response. Follow up with procurement today.', due: 'Today', category: 'Proposal Chase' },
  { priority: 'medium', text: 'Wipro expansion: commercial terms agreed, legal docs pending from client for 10 days', due: 'Apr 4', category: 'Legal' },
  { priority: 'medium', text: 'ITC Infotech site shortlist presentation — Apr 7. Deck needs update with latest seat counts.', due: 'Apr 6', category: 'Presentation' },
  { priority: 'low',    text: 'Update CRM for all 7 active deals — last update was 3–8 days ago', due: 'Today', category: 'CRM Update' },
]
const salesleadTopFive = [
  {
    title: 'My Deals by Close Probability',
    items: [
      { label: 'Wipro Expansion (90%)',     value: '₹2.1Cr', change: 1 },
      { label: 'Capgemini (70%)',           value: '₹1.0Cr', change: 0 },
      { label: 'Deutsche Bank GCC (50%)',   value: '₹5.2Cr', change: 0 },
      { label: 'JP Morgan GCC (40%)',       value: '₹1.6Cr', change: -1 },
      { label: 'ITC Infotech (30%)',        value: '₹2.4Cr', change: 0 },
    ],
  },
  {
    title: 'My Next Actions by Priority',
    items: [
      { label: 'Deutsche Bank – Call',    value: 'Today',    change: -1 },
      { label: 'JP Morgan – Chase',       value: 'Today',    change: -1 },
      { label: 'Wipro – Legal',           value: 'Apr 4',    change: 0 },
      { label: 'ITC Deck Update',         value: 'Apr 6',    change: 0 },
      { label: 'Capgemini – Discovery',   value: 'Apr 7',    change: 0 },
    ],
  },
]
const salesleadCharts = [
  {
    type: 'bar', title: 'My Deal Pipeline by Stage',
    data: [
      { name: 'Lead', count: 1 }, { name: 'Qualified', count: 1 }, { name: 'Proposal', count: 2 },
      { name: 'Negotiation', count: 2 }, { name: 'Committed', count: 1 },
    ],
    lines: [{ key: 'count', label: 'Deals' }],
  },
  {
    type: 'line', title: 'My Meetings & Calls (Weekly)',
    data: [
      { name: 'Mar W1', meetings: 3, calls: 12 }, { name: 'Mar W2', meetings: 5, calls: 14 },
      { name: 'Mar W3', meetings: 4, calls: 10 }, { name: 'Mar W4', meetings: 6, calls: 16 },
      { name: 'Apr W1', meetings: 2, calls: 6 },
    ],
    lines: [{ key: 'meetings', label: 'Meetings' }, { key: 'calls', label: 'Calls/Emails' }],
  },
]
const salesleadColumns = [
  { key: 'account',   label: 'Account' },
  { key: 'city',      label: 'City' },
  { key: 'seats',     label: 'Seats' },
  { key: 'value',     label: 'Value' },
  { key: 'stage',     label: 'Stage' },
  { key: 'nextStep',  label: 'Next Step', muted: true },
  { key: 'followUp',  label: 'Follow-up Due' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]
const salesleadGrid = [
  { account: 'Deutsche Bank GCC',  city: 'Bengaluru', seats: '1,000', value: '₹5.2Cr', stage: 'Negotiation',  nextStep: 'Call decision-maker', followUp: 'Today',  status: 'Hot',         action: 'Call' },
  { account: 'Wipro Expansion',    city: 'Bengaluru', seats: '400',   value: '₹2.1Cr', stage: 'Negotiation',  nextStep: 'Chase legal docs',    followUp: 'Apr 4',  status: 'Hot',         action: 'Chase' },
  { account: 'ITC Infotech GCC',   city: 'Hyderabad', seats: '480',   value: '₹2.4Cr', stage: 'Proposal',     nextStep: 'Update site deck',    followUp: 'Apr 6',  status: 'Warm',        action: 'View' },
  { account: 'JP Morgan GCC',      city: 'Bengaluru', seats: '300',   value: '₹1.6Cr', stage: 'Proposal',     nextStep: 'Chase proposal resp.', followUp: 'Today', status: 'Warm',        action: 'Chase' },
  { account: 'Capgemini',          city: 'Pune',      seats: '200',   value: '₹1.0Cr', stage: 'Qualified',    nextStep: 'Discovery call',      followUp: 'Apr 7',  status: 'Warm',        action: 'Schedule' },
  { account: 'EY India',           city: 'Delhi',     seats: '180',   value: '₹92L',   stage: 'Lead',         nextStep: 'Qualify needs',       followUp: 'Apr 8',  status: 'Cold',        action: 'Qualify' },
  { account: 'Local Tech Co.',     city: 'Bengaluru', seats: '40',    value: '₹20L',   stage: 'Lead',         nextStep: 'Send intro deck',     followUp: 'Apr 10', status: 'Cold',        action: 'View' },
]

export const crmData = {
  mgmt:      { metrics: mgmtMetrics,      actions: mgmtActions,      topFive: mgmtTopFive,      charts: mgmtCharts,      columns: mgmtColumns,      grid: mgmtGrid,      gridTitle: 'Full Deal Pipeline' },
  cbo:       { metrics: cboMetrics,       actions: cboActions,       topFive: cboTopFive,       charts: cboCharts,       columns: cboColumns,       grid: cboGrid,       gridTitle: 'Strategic Deal Tracker' },
  salesmgmt: { metrics: salesmgmtMetrics, actions: salesmgmtActions, topFive: salesmgmtTopFive, charts: salesmgmtCharts, columns: salesmgmtColumns, grid: salesmgmtGrid, gridTitle: 'Team Pipeline & Forecast' },
  regional:  { metrics: regionalMetrics,  actions: regionalActions,  topFive: regionalTopFive,  charts: regionalCharts,  columns: regionalColumns,  grid: regionalGrid,  gridTitle: 'Regional Pipeline' },
  saleslead: { metrics: salesleadMetrics, actions: salesleadActions, topFive: salesleadTopFive, charts: salesleadCharts, columns: salesleadColumns, grid: salesleadGrid, gridTitle: 'My Deal Tracker' },
}
