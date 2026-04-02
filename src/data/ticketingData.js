import { Ticket, Clock, ThumbsUp, RefreshCw, BarChart3, AlertCircle, Users, TrendingDown, CheckCircle, DollarSign } from 'lucide-react'

export const ticketingPersonas = [
  { id: 'requester', label: 'Requester' },
  { id: 'l1',        label: 'L1 — Resolver' },
  { id: 'l2',        label: 'L2 — Specialist' },
  { id: 'l3',        label: 'L3 — Manager' },
  { id: 'l4',        label: 'L4 — Leadership' },
]

export const ticketingFilters = [
  { id: 'centre',   label: 'Centre',   options: ['All Centres', 'Whitefield', 'Baner', 'HiTec City', 'BKC', 'Cyber City'] },
  { id: 'category', label: 'Category', options: ['All Categories', 'Facilities', 'IT / Tech', 'Admin', 'Pantry & Food', 'Security', 'HVAC', 'Housekeeping'] },
  { id: 'priority', label: 'Priority', options: ['All Priorities', 'P1 – Critical', 'P2 – High', 'P3 – Medium', 'P4 – Low'] },
]

// ─── REQUESTER ────────────────────────────────────────────────────────────────
const requesterMetrics = [
  { label: 'My Open Tickets',         value: '4',     change: '2 awaiting response',   trend: 'neutral', status: 'info',     icon: Ticket, highlight: true },
  { label: 'Avg Resolution Time',     value: '6.4h',  change: '-1.2h vs last month',   trend: 'down',    status: 'positive', icon: Clock },
  { label: 'CSAT Score',              value: '4.6/5', change: '+0.2 vs last quarter',  trend: 'up',      status: 'positive', icon: ThumbsUp },
  { label: 'Reopen Rate',             value: '3.2%',  change: '-0.8% this month',      trend: 'down',    status: 'positive', icon: RefreshCw },
  { label: 'Self-Service Usage',      value: '42%',   change: '+8% vs last month',     trend: 'up',      status: 'positive', icon: BarChart3 },
]
const requesterActions = [
  { priority: 'high',   text: 'Ticket #5821 — AC not working in bay D4 (open 22hrs, no response)', due: 'Follow up', category: 'HVAC' },
  { priority: 'high',   text: 'Ticket #5803 — Internet down at my desk since morning (P1 pending)', due: 'Escalate', category: 'IT' },
  { priority: 'medium', text: 'Ticket #5814 — Printer on Floor 3 still jammed (assigned, no update)', due: 'Check status', category: 'IT' },
  { priority: 'medium', text: 'Ticket #5778 — Pantry coffee machine repaired — rate your experience', due: 'Rate now', category: 'Feedback' },
  { priority: 'low',    text: 'Ticket #5762 — Resolved: Desk lamp replacement. Was this resolved to your satisfaction?', due: 'Confirm', category: 'Feedback' },
]
const requesterTopFive = [
  {
    title: 'Most Common Issues I Raise',
    items: [
      { label: 'HVAC / AC Issues',    value: '8', change: 0 },
      { label: 'IT / Connectivity',   value: '6', change: 1 },
      { label: 'Pantry & Food',       value: '5', change: 0 },
      { label: 'Printer / Copier',    value: '3', change: -1 },
      { label: 'Access / Door',       value: '2', change: 0 },
    ],
  },
  {
    title: 'My Recent Tickets by Status',
    items: [
      { label: 'Open / In Progress', value: '4', change: 0 },
      { label: 'Awaiting My Input',  value: '2', change: 0 },
      { label: 'Resolved This Week', value: '5', change: 1 },
      { label: 'Closed (30 days)',   value: '18', change: 1 },
      { label: 'Reopened',           value: '1', change: 0 },
    ],
  },
]
const requesterCharts = [
  {
    type: 'area', title: 'My Ticket Activity (last 7 days)',
    data: [
      { name: 'Mar 26', raised: 1, resolved: 2 }, { name: 'Mar 27', raised: 0, resolved: 1 },
      { name: 'Mar 28', raised: 2, resolved: 1 }, { name: 'Mar 29', raised: 1, resolved: 2 },
      { name: 'Mar 30', raised: 0, resolved: 0 }, { name: 'Mar 31', raised: 1, resolved: 1 },
      { name: 'Apr 1',  raised: 2, resolved: 0 },
    ],
    lines: [{ key: 'raised', label: 'Raised' }, { key: 'resolved', label: 'Resolved' }],
  },
  {
    type: 'bar', title: 'First Response Time — My Tickets (hrs)',
    data: [
      { name: '#5821', response: 22 }, { name: '#5803', response: 8 }, { name: '#5814', response: 4 },
      { name: '#5778', response: 2 },  { name: '#5762', response: 1 }, { name: '#5740', response: 3 },
    ],
    lines: [{ key: 'response', label: 'Response Time (hrs)' }],
  },
]
const requesterColumns = [
  { key: 'id',       label: 'Ticket ID' },
  { key: 'subject',  label: 'Subject' },
  { key: 'category', label: 'Category', muted: true },
  { key: 'raised',   label: 'Raised On' },
  { key: 'sla',      label: 'SLA' },
  { key: 'status',   label: 'Status', type: 'status' },
  { key: 'action',   label: 'Action', type: 'action', sortable: false },
]
const requesterGrid = [
  { id: '#5821', subject: 'AC not working – Bay D4',          category: 'HVAC',       raised: 'Apr 1, 07:30', sla: 'Breached', status: 'Open',        action: 'Follow Up' },
  { id: '#5803', subject: 'Internet down at desk B12',        category: 'IT',         raised: 'Apr 1, 09:00', sla: 'Breaching', status: 'In Progress', action: 'Escalate' },
  { id: '#5814', subject: 'Printer jam – Floor 3 copier',     category: 'IT',         raised: 'Apr 1, 10:15', sla: 'OK',       status: 'In Progress', action: 'View' },
  { id: '#5800', subject: 'Visitor badge printing error',     category: 'Admin',      raised: 'Mar 31',       sla: 'OK',       status: 'Resolved',    action: 'Rate' },
  { id: '#5778', subject: 'Coffee machine not dispensing',    category: 'Pantry',     raised: 'Mar 30',       sla: 'Met',      status: 'Resolved',    action: 'Rate' },
  { id: '#5762', subject: 'Desk lamp flickering – B08',       category: 'Facilities', raised: 'Mar 29',       sla: 'Met',      status: 'Closed',      action: 'View' },
  { id: '#5740', subject: 'Room booking not reflecting',      category: 'IT',         raised: 'Mar 28',       sla: 'Met',      status: 'Closed',      action: 'View' },
]

// ─── L1 RESOLVER ─────────────────────────────────────────────────────────────
const l1Metrics = [
  { label: 'Tickets Resolved Today',   value: '14',    change: 'Avg: 12/day',           trend: 'up',   status: 'positive', icon: CheckCircle, highlight: true },
  { label: 'SLA Compliance',           value: '87.4%', change: '-2.1% vs last week',    trend: 'down', status: 'warning',  icon: Clock },
  { label: 'Avg First Response Time',  value: '42min', change: 'SLA: 60min',            trend: 'up',   status: 'positive', icon: Clock },
  { label: 'Escalation Rate',          value: '11.2%', change: '+1.8% this week',       trend: 'up',   status: 'warning',  icon: AlertCircle },
  { label: 'Pending Tickets Ageing',   value: '23',    change: '5 over 48hrs',          trend: 'up',   status: 'negative', icon: Ticket },
]
const l1Actions = [
  { priority: 'high',   text: 'Ticket #5821: AC – Bay D4 (22hrs open, P1) — assign HVAC tech immediately', due: 'Now', category: 'HVAC' },
  { priority: 'high',   text: '5 tickets breaching 48hr SLA — need resolution or escalation today', due: 'Today', category: 'SLA' },
  { priority: 'high',   text: 'Ticket #5803: Internet outage Bay B12 (P1, 6hrs) — coordinate with IT', due: '2hrs', category: 'IT' },
  { priority: 'medium', text: 'Morning shift checklist not submitted by 3 ops staff — reminder sent', due: 'EOD', category: 'Compliance' },
  { priority: 'medium', text: '8 tickets in "pending client" queue over 12hrs — send follow-up', due: 'Today', category: 'Follow-up' },
  { priority: 'low',    text: 'CSAT feedback for 6 closed tickets outstanding — remind requesters', due: 'Tomorrow', category: 'CSAT' },
]
const l1TopFive = [
  {
    title: 'Top 5 Issue Categories Today',
    items: [
      { label: 'HVAC / AC',          value: '18', change: 1 },
      { label: 'IT / Connectivity',  value: '14', change: 0 },
      { label: 'Housekeeping',       value: '12', change: 0 },
      { label: 'Pantry & Food',      value: '9',  change: -1 },
      { label: 'Security / Access',  value: '6',  change: 0 },
    ],
  },
  {
    title: 'Top 5 SLA Breaches by Category',
    items: [
      { label: 'HVAC / AC',         value: '4', change: -1 },
      { label: 'IT / Network',      value: '3', change: 0 },
      { label: 'Lift / Elevator',   value: '2', change: -1 },
      { label: 'Admin / Access',    value: '1', change: 0 },
      { label: 'Pantry',            value: '1', change: 0 },
    ],
  },
]
const l1Charts = [
  {
    type: 'bar', title: 'Tickets Resolved vs Received (Daily)',
    data: [
      { name: 'Mar 26', received: 42, resolved: 38 }, { name: 'Mar 27', received: 38, resolved: 40 },
      { name: 'Mar 28', received: 45, resolved: 39 }, { name: 'Mar 29', received: 50, resolved: 44 },
      { name: 'Mar 30', received: 18, resolved: 22 }, { name: 'Mar 31', received: 46, resolved: 42 },
      { name: 'Apr 1',  received: 48, resolved: 14 },
    ],
    lines: [{ key: 'received', label: 'Received' }, { key: 'resolved', label: 'Resolved' }],
  },
  {
    type: 'area', title: 'Ticket Ageing Buckets (count)',
    data: [
      { name: 'Mar 26', u24: 28, u48: 8, over48: 2 }, { name: 'Mar 27', u24: 30, u48: 6, over48: 1 },
      { name: 'Mar 28', u24: 25, u48: 10, over48: 3 }, { name: 'Mar 29', u24: 32, u48: 8, over48: 4 },
      { name: 'Mar 30', u24: 12, u48: 5, over48: 2 }, { name: 'Mar 31', u24: 29, u48: 9, over48: 3 },
      { name: 'Apr 1',  u24: 34, u48: 12, over48: 5 },
    ],
    lines: [{ key: 'u24', label: '0–24h' }, { key: 'u48', label: '24–48h' }, { key: 'over48', label: '>48h' }],
  },
]
const l1Columns = [
  { key: 'id',        label: 'ID' },
  { key: 'subject',   label: 'Issue' },
  { key: 'requester', label: 'Requester', muted: true },
  { key: 'category',  label: 'Category' },
  { key: 'age',       label: 'Age' },
  { key: 'priority',  label: 'Priority', type: 'status' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]
const l1Grid = [
  { id: '#5821', subject: 'AC not working – Bay D4',       requester: 'Priya S.', category: 'HVAC',  age: '22h', priority: 'High',   status: 'Open',        action: 'Assign' },
  { id: '#5803', subject: 'Internet down – Bay B12',       requester: 'Rahul K.', category: 'IT',    age: '6h',  priority: 'High',   status: 'In Progress', action: 'Update' },
  { id: '#5819', subject: 'Elevator stuck – Tower A',      requester: 'Asha M.',  category: 'Lift',  age: '18h', priority: 'High',   status: 'In Progress', action: 'Update' },
  { id: '#5814', subject: 'Printer jam – Floor 3',         requester: 'Jeet P.',  category: 'IT',    age: '5h',  priority: 'Medium', status: 'In Progress', action: 'Update' },
  { id: '#5812', subject: 'Broken chair – Conference Rm 4',requester: 'Neha T.',  category: 'Fac',   age: '4h',  priority: 'Low',    status: 'Open',        action: 'Assign' },
  { id: '#5810', subject: 'Water dispenser empty – F2',    requester: 'Amit D.',  category: 'Pantry',age: '3h',  priority: 'Medium', status: 'Open',        action: 'Assign' },
  { id: '#5807', subject: 'Projector cable missing',       requester: 'Sonal R.', category: 'AV',    age: '2h',  priority: 'Low',    status: 'Open',        action: 'Assign' },
  { id: '#5805', subject: 'Security door not unlocking',   requester: 'Dev N.',   category: 'Access',age: '1h',  priority: 'High',   status: 'Open',        action: 'Assign' },
]

// ─── L2 SPECIALIST ────────────────────────────────────────────────────────────
const l2Metrics = [
  { label: 'Tickets Received from L1',      value: '28',    change: '6 new today',          trend: 'up',   status: 'info',    icon: Ticket, highlight: true },
  { label: 'Resolution SLA Compliance',     value: '83.1%', change: '-3.4% vs last week',   trend: 'down', status: 'warning', icon: Clock },
  { label: 'Avg Resolution (Complex)',       value: '11.2h', change: 'SLA target: 8h',      trend: 'up',   status: 'warning', icon: Clock },
  { label: 'Approval Turnaround',           value: '3.4h',  change: 'SLA: 4h',              trend: 'down', status: 'positive', icon: CheckCircle },
  { label: 'Escalation to L3 Rate',         value: '8.4%',  change: '-1.2% this month',     trend: 'down', status: 'positive', icon: AlertCircle },
]
const l2Actions = [
  { priority: 'high',   text: '4 HVAC tickets awaiting vendor dispatch — confirm availability now', due: 'Now', category: 'HVAC' },
  { priority: 'high',   text: 'Network outage B12 needs ISP escalation — open vendor ticket', due: '1hr', category: 'IT / Network' },
  { priority: 'medium', text: 'AMC vendor for elevator (Tower A) yet to confirm ETA — follow up', due: '2hrs', category: 'Maintenance' },
  { priority: 'medium', text: '3 tickets pending management approval for external spend >₹10K', due: 'EOD', category: 'Approvals' },
  { priority: 'low',    text: 'Root cause report for last week AC failures due — share with L3', due: 'Apr 3', category: 'Reports' },
]
const l2TopFive = [
  {
    title: 'Top 5 Complex Issue Types',
    items: [
      { label: 'HVAC Compressor Failure', value: '7', change: 0 },
      { label: 'Network Infrastructure',  value: '5', change: 1 },
      { label: 'Lift / Elevator',         value: '4', change: 0 },
      { label: 'BMS / Access Control',    value: '3', change: -1 },
      { label: 'Electrical Faults',       value: '3', change: 0 },
    ],
  },
  {
    title: 'Top 5 Pending Approvals',
    items: [
      { label: 'HVAC Spare ₹42,000',   value: '28h', change: -1 },
      { label: 'ISP Call-out ₹15,000', value: '14h', change: -1 },
      { label: 'Lift AMC Emergency',   value: '10h', change: 0 },
      { label: 'AHU Filter Repl.',     value: '6h',  change: 0 },
      { label: 'Cable Patch Rewire',   value: '4h',  change: 0 },
    ],
  },
]
const l2Charts = [
  {
    type: 'line', title: 'L2 SLA Compliance % (Daily)',
    data: [
      { name: 'Mar 26', sla: 88.2 }, { name: 'Mar 27', sla: 85.4 }, { name: 'Mar 28', sla: 82.1 },
      { name: 'Mar 29', sla: 86.8 }, { name: 'Mar 30', sla: 90.0 }, { name: 'Mar 31', sla: 84.5 },
      { name: 'Apr 1',  sla: 83.1 },
    ],
    lines: [{ key: 'sla', label: 'SLA %' }],
  },
  {
    type: 'bar', title: 'Dependency Delay by Vendor (hrs avg)',
    data: [
      { name: 'HVAC Vendor', delay: 6.4 }, { name: 'ISP',       delay: 4.2 },
      { name: 'Lift AMC',    delay: 8.1 }, { name: 'Electrical', delay: 3.2 },
      { name: 'BMS Vendor',  delay: 2.8 },
    ],
    lines: [{ key: 'delay', label: 'Avg Delay (hrs)' }],
  },
]
const l2Columns = [
  { key: 'id',        label: 'ID' },
  { key: 'subject',   label: 'Issue' },
  { key: 'centre',    label: 'Centre', muted: true },
  { key: 'vendor',    label: 'Vendor', muted: true },
  { key: 'age',       label: 'Age' },
  { key: 'approval',  label: 'Approval' },
  { key: 'status',    label: 'Status', type: 'status' },
  { key: 'action',    label: 'Action', type: 'action', sortable: false },
]
const l2Grid = [
  { id: '#5821', subject: 'AC compressor failure – D4',    centre: 'Whitefield', vendor: 'HVAC Vendor', age: '22h', approval: 'Pending ₹42K', status: 'In Progress', action: 'Approve' },
  { id: '#5803', subject: 'Network outage – Bay B12',      centre: 'Baner',      vendor: 'ISP',         age: '6h',  approval: 'Pending ₹15K', status: 'In Progress', action: 'Approve' },
  { id: '#5819', subject: 'Elevator stuck – Tower A',      centre: 'Whitefield', vendor: 'Lift AMC',    age: '18h', approval: 'Approved',     status: 'In Progress', action: 'Update' },
  { id: '#5788', subject: 'AHU filter replacement – F4',   centre: 'BKC',        vendor: 'HVAC Vendor', age: '32h', approval: 'Pending ₹8K',  status: 'Open',        action: 'Approve' },
  { id: '#5775', subject: 'Access control BMS fault',      centre: 'HiTec City', vendor: 'BMS Vendor',  age: '14h', approval: 'N/A',          status: 'In Progress', action: 'Update' },
  { id: '#5760', subject: 'Fire alarm panel fault',        centre: 'Cyber City', vendor: 'Fire Safety', age: '8h',  approval: 'Pending ₹22K', status: 'Escalated',   action: 'View' },
  { id: '#5745', subject: 'UPS failure – Server room',     centre: 'Baner',      vendor: 'Electrical',  age: '4h',  approval: 'Approved',     status: 'In Progress', action: 'Update' },
]

// ─── L3 MANAGER ───────────────────────────────────────────────────────────────
const l3Metrics = [
  { label: 'SLA Compliance (Dept)',    value: '86.2%', change: '-1.4% vs last week',    trend: 'down', status: 'warning',  icon: Clock, highlight: true },
  { label: 'Active Backlog',           value: '82',    change: '18 over 48hrs',         trend: 'up',   status: 'negative', icon: Ticket },
  { label: 'Escalation Rate',         value: '9.8%',  change: '+0.6% this week',       trend: 'up',   status: 'warning',  icon: AlertCircle },
  { label: 'Tickets per 100 Seats',   value: '3.4',   change: 'Benchmark: <3.0',       trend: 'up',   status: 'warning',  icon: Users },
  { label: 'Reopen Rate (30d)',        value: '5.1%',  change: '-0.4% vs last month',   trend: 'down', status: 'positive', icon: RefreshCw },
]
const l3Actions = [
  { priority: 'high',   text: 'Whitefield Centre: 7 overdue P1 tickets — team capacity issue, intervention needed', due: 'Now', category: 'SLA Breach' },
  { priority: 'high',   text: 'Workload imbalance: Ops Exec A handling 22 tickets, Exec B only 6 — reassign', due: 'Today', category: 'Resource' },
  { priority: 'medium', text: 'HVAC issues (18 tickets this week) — systematic, not ad-hoc — trigger PM', due: 'Today', category: 'Root Cause' },
  { priority: 'medium', text: 'CSAT score for BKC Centre dropped to 3.8 — investigate complaint pattern', due: 'Apr 3', category: 'CSAT' },
  { priority: 'low',    text: 'Monthly SLA performance deck for leadership review due Friday', due: 'Apr 4', category: 'Reports' },
]
const l3TopFive = [
  {
    title: 'Top 5 Centres by Ticket Backlog',
    items: [
      { label: 'Whitefield',  value: '34', change: -1 },
      { label: 'BKC',         value: '18', change: -1 },
      { label: 'HiTec City',  value: '12', change: 0 },
      { label: 'Baner',       value: '11', change: 0 },
      { label: 'Cyber City',  value: '7',  change: 0 },
    ],
  },
  {
    title: 'Top 5 Team Members by Workload',
    items: [
      { label: 'Arun Mehta',    value: '22', change: -1 },
      { label: 'Priya Sharma',  value: '19', change: 0 },
      { label: 'Kishore M.',    value: '16', change: 0 },
      { label: 'Divya Nair',    value: '14', change: 0 },
      { label: 'Suresh Kumar',  value: '11', change: 0 },
    ],
  },
]
const l3Charts = [
  {
    type: 'bar', title: 'SLA Compliance % by Centre',
    data: [
      { name: 'Whitefield', sla: 79.2, target: 90 }, { name: 'Baner',      sla: 91.4, target: 90 },
      { name: 'HiTec City', sla: 88.1, target: 90 }, { name: 'BKC',        sla: 84.6, target: 90 },
      { name: 'Cyber City', sla: 93.2, target: 90 },
    ],
    lines: [{ key: 'sla', label: 'SLA %' }, { key: 'target', label: 'Target %' }],
  },
  {
    type: 'line', title: 'Backlog Trend (30 days)',
    data: [
      { name: 'Mar 5',  backlog: 68 }, { name: 'Mar 10', backlog: 72 }, { name: 'Mar 15', backlog: 65 },
      { name: 'Mar 20', backlog: 78 }, { name: 'Mar 25', backlog: 75 }, { name: 'Mar 31', backlog: 80 },
      { name: 'Apr 1',  backlog: 82 },
    ],
    lines: [{ key: 'backlog', label: 'Backlog' }],
  },
  {
    type: 'pie', title: 'Ticket Volume by Category',
    data: [
      { name: 'HVAC / AC',       value: 28 }, { name: 'IT / Network', value: 22 },
      { name: 'Housekeeping',    value: 18 }, { name: 'Pantry',       value: 12 },
      { name: 'Security/Access', value: 10 }, { name: 'Other',        value: 10 },
    ],
    lines: [],
  },
]
const l3Columns = [
  { key: 'centre',     label: 'Centre' },
  { key: 'open',       label: 'Open Tickets' },
  { key: 'breached',   label: 'SLA Breached' },
  { key: 'sla',        label: 'SLA %' },
  { key: 'tickets100', label: 'Per 100 Seats', muted: true },
  { key: 'csat',       label: 'CSAT' },
  { key: 'trend',      label: 'Trend', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const l3Grid = [
  { centre: 'Whitefield',  open: 34, breached: 7, sla: '79.2%', tickets100: 4.2, csat: '4.1/5', trend: 'At Risk', action: 'Intervene' },
  { centre: 'BKC',         open: 18, breached: 4, sla: '84.6%', tickets100: 3.6, csat: '3.8/5', trend: 'At Risk', action: 'Intervene' },
  { centre: 'HiTec City',  open: 12, breached: 2, sla: '88.1%', tickets100: 2.8, csat: '4.4/5', trend: 'Pending', action: 'View' },
  { centre: 'Baner',       open: 11, breached: 1, sla: '91.4%', tickets100: 2.4, csat: '4.6/5', trend: 'Healthy', action: 'View' },
  { centre: 'Cyber City',  open: 7,  breached: 0, sla: '93.2%', tickets100: 2.1, csat: '4.7/5', trend: 'Healthy', action: 'View' },
  { centre: 'Tidel Park',  open: 0,  breached: 0, sla: '97.4%', tickets100: 1.8, csat: '4.8/5', trend: 'Healthy', action: 'View' },
]

// ─── L4 LEADERSHIP ────────────────────────────────────────────────────────────
const l4Metrics = [
  { label: 'Overall SLA Compliance',  value: '88.4%', change: '-0.8% vs last month', trend: 'down', status: 'warning',  icon: Clock, highlight: true },
  { label: 'Portfolio CSAT Score',    value: '4.4/5', change: '+0.1 vs last quarter',trend: 'up',   status: 'positive', icon: ThumbsUp },
  { label: 'Cost per Ticket',         value: '₹284',  change: '-₹18 vs last quarter',trend: 'down', status: 'positive', icon: DollarSign },
  { label: 'Repeat Issue Rate',       value: '12.4%', change: '-1.8% MoM',          trend: 'down', status: 'positive', icon: RefreshCw },
  { label: 'Productivity/100 Seats',  value: '2.8',   change: 'Benchmark: <3.0',    trend: 'down', status: 'positive', icon: BarChart3 },
]
const l4Actions = [
  { priority: 'high',   text: 'Whitefield SLA at 79% (target 90%) for 2nd consecutive week — exec review needed', due: 'Today', category: 'SLA' },
  { priority: 'high',   text: 'Vendor SLA for HVAC contractor breached across 3 centres — contract penalty review', due: 'Apr 3', category: 'Vendor' },
  { priority: 'medium', text: 'CSAT at BKC dropped to 3.8 — risk to renewal for Infosys (300 seats)', due: 'Apr 4', category: 'Retention Risk' },
  { priority: 'medium', text: 'Q1 FY26 ops performance report for board pack — due in 5 days', due: 'Apr 7', category: 'Board Report' },
  { priority: 'low',    text: 'Benchmark study: competitor CSAT at 4.6 — identify improvement initiatives', due: 'Apr 10', category: 'Strategy' },
]
const l4TopFive = [
  {
    title: 'Top 5 Locations by Performance Rank',
    items: [
      { label: 'Tidel Park',   value: '97.4%', change: 1 },
      { label: 'Cyber City',   value: '93.2%', change: 0 },
      { label: 'Baner',        value: '91.4%', change: 1 },
      { label: 'HiTec City',   value: '88.1%', change: -1 },
      { label: 'BKC',          value: '84.6%', change: -1 },
    ],
  },
  {
    title: 'Top 5 Issue Categories by Volume',
    items: [
      { label: 'HVAC / AC',        value: '348', change: 1 },
      { label: 'IT / Network',     value: '286', change: 0 },
      { label: 'Housekeeping',     value: '212', change: 0 },
      { label: 'Pantry & Food',    value: '148', change: -1 },
      { label: 'Security/Access',  value: '112', change: 0 },
    ],
  },
]
const l4Charts = [
  {
    type: 'line', title: 'SLA Compliance Trend (Monthly)',
    data: [
      { name: 'Oct', sla: 91.2 }, { name: 'Nov', sla: 90.8 }, { name: 'Dec', sla: 89.4 },
      { name: 'Jan', sla: 90.1 }, { name: 'Feb', sla: 89.6 }, { name: 'Mar', sla: 88.4 },
    ],
    lines: [{ key: 'sla', label: 'SLA %' }],
  },
  {
    type: 'area', title: 'Ticket Volume Trend MoM',
    data: [
      { name: 'Oct', volume: 1240 }, { name: 'Nov', volume: 1380 }, { name: 'Dec', volume: 1520 },
      { name: 'Jan', volume: 1410 }, { name: 'Feb', volume: 1480 }, { name: 'Mar', volume: 1560 },
    ],
    lines: [{ key: 'volume', label: 'Ticket Volume' }],
  },
  {
    type: 'bar', title: 'CSAT Score by Centre (This Quarter)',
    data: [
      { name: 'Tidel Park',  csat: 4.8 }, { name: 'Cyber City', csat: 4.7 },
      { name: 'Baner',       csat: 4.6 }, { name: 'HiTec City', csat: 4.4 },
      { name: 'Whitefield',  csat: 4.1 }, { name: 'BKC',        csat: 3.8 },
    ],
    lines: [{ key: 'csat', label: 'CSAT Score' }],
  },
]
const l4Columns = [
  { key: 'centre',     label: 'Centre / Region' },
  { key: 'sla',        label: 'SLA Compliance' },
  { key: 'volume',     label: 'Ticket Volume' },
  { key: 'csat',       label: 'CSAT' },
  { key: 'costTicket', label: 'Cost / Ticket', muted: true },
  { key: 'vendorSLA',  label: 'Vendor SLA', muted: true },
  { key: 'status',     label: 'Status', type: 'status' },
  { key: 'action',     label: 'Action', type: 'action', sortable: false },
]
const l4Grid = [
  { centre: 'All Centres (Portfolio)', sla: '88.4%', volume: '1,560', csat: '4.4/5', costTicket: '₹284', vendorSLA: '84.2%', status: 'Active',  action: 'Drill Down' },
  { centre: 'South – Bengaluru',       sla: '82.1%', volume: '580',   csat: '4.2/5', costTicket: '₹302', vendorSLA: '80.1%', status: 'At Risk', action: 'View' },
  { centre: 'West – Pune',             sla: '91.4%', volume: '380',   csat: '4.6/5', costTicket: '₹264', vendorSLA: '88.2%', status: 'Healthy', action: 'View' },
  { centre: 'West – Mumbai',           sla: '84.6%', volume: '290',   csat: '3.8/5', costTicket: '₹312', vendorSLA: '82.4%', status: 'At Risk', action: 'View' },
  { centre: 'South – Hyderabad',       sla: '88.1%', volume: '180',   csat: '4.4/5', costTicket: '₹276', vendorSLA: '86.1%', status: 'Active',  action: 'View' },
  { centre: 'North – Delhi',           sla: '93.2%', volume: '130',   csat: '4.7/5', costTicket: '₹248', vendorSLA: '91.4%', status: 'Healthy', action: 'View' },
]

export const ticketingData = {
  requester: { metrics: requesterMetrics, actions: requesterActions, topFive: requesterTopFive, charts: requesterCharts, columns: requesterColumns, grid: requesterGrid, gridTitle: 'My Ticket History' },
  l1:        { metrics: l1Metrics,        actions: l1Actions,        topFive: l1TopFive,        charts: l1Charts,        columns: l1Columns,        grid: l1Grid,        gridTitle: 'My Active Ticket Queue' },
  l2:        { metrics: l2Metrics,        actions: l2Actions,        topFive: l2TopFive,        charts: l2Charts,        columns: l2Columns,        grid: l2Grid,        gridTitle: 'Escalated Ticket Queue' },
  l3:        { metrics: l3Metrics,        actions: l3Actions,        topFive: l3TopFive,        charts: l3Charts,        columns: l3Columns,        grid: l3Grid,        gridTitle: 'Centre-wise SLA Performance' },
  l4:        { metrics: l4Metrics,        actions: l4Actions,        topFive: l4TopFive,        charts: l4Charts,        columns: l4Columns,        grid: l4Grid,        gridTitle: 'Portfolio Performance Overview' },
}
