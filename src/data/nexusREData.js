import { Building2, TrendingUp, FileText, Clock, DollarSign, MapPin, BarChart3, CheckCircle, AlertCircle, ListChecks } from 'lucide-react'

export const nexusREPersonas = [
  { id: 'mgmt',    label: 'Management' },
  { id: 'rehead',  label: 'RE Head' },
  { id: 'txnmgr',  label: 'Transaction Manager' },
  { id: 'reuser',  label: 'RE User' },
  { id: 'finance', label: 'Finance' },
]

export const nexusREFilters = [
  { id: 'city',    label: 'City',    options: ['All Cities', 'Pune', 'Chennai', 'Bangalore', 'Mumbai', 'Gurgaon', 'Hyderabad', 'Noida', 'Kolkata', 'Indore', 'Kochi'] },
  { id: 'type',    label: 'Agreement Type', options: ['All Types', 'Leave & License', 'Lease Deed', 'MoU', 'Sub-Lease'] },
  { id: 'status',  label: 'Status',  options: ['All Statuses', 'Active', 'WIP', 'Inactive', 'Expired', 'Expiring Soon'] },
]

// ─── SHARED GRID: AGREEMENTS (real data from portal export) ───────────────────
const agreementsColumns = [
  { key: 'centreName',  label: 'Centre Name' },
  { key: 'centreCode',  label: 'Centre Code', muted: true },
  { key: 'city',        label: 'City' },
  { key: 'building',    label: 'Building' },
  { key: 'floor',       label: 'Floor', muted: true },
  { key: 'leaseEnd',    label: 'Lease End' },
  { key: 'monthlyRent', label: 'Monthly Rent' },
  { key: 'status',      label: 'Status', type: 'status' },
  { key: 'action',      label: 'Action', type: 'action', sortable: false },
]
const agreementsGrid = [
  { centreName: 'Emirates Stadium',      centreCode: 'GGN01', city: 'Gurgaon',   building: 'Emirates Stadium',    floor: '3, 4, 5',              leaseEnd: '31 Mar 2029', monthlyRent: '₹142L',  status: 'Active',          action: 'View' },
  { centreName: 'Highbury Stadium',      centreCode: 'GGN02', city: 'Gurgaon',   building: 'Highbury Stadium',    floor: '5, 6, 7',              leaseEnd: '31 Mar 2028', monthlyRent: '₹118L',  status: 'Active',          action: 'View' },
  { centreName: 'Grand Canyon',          centreCode: 'GGN03', city: 'Gurgaon',   building: 'Grand Canyon',        floor: '5',                    leaseEnd: '08 Sep 2027', monthlyRent: '₹64L',   status: 'Active',          action: 'View' },
  { centreName: 'DLF Commercial',        centreCode: 'GGN04', city: 'Gurgaon',   building: 'DLF Commercial',      floor: 'G + 5',                leaseEnd: '31 Oct 2030', monthlyRent: '₹88L',   status: 'Active',          action: 'View' },
  { centreName: 'RK4 Square',            centreCode: 'GGN05', city: 'Gurgaon',   building: 'RK4 Square',         floor: 'G + 4',                leaseEnd: '25 Nov 2038', monthlyRent: '₹72L',   status: 'Active',          action: 'View' },
  { centreName: 'Golf View',             centreCode: 'GGN06', city: 'Gurgaon',   building: 'Golf View',           floor: '2, 4 & 5',             leaseEnd: '08 Apr 2026', monthlyRent: '₹54L',   status: 'Expiring Soon',   action: 'Renew' },
  { centreName: 'Global Foyer',          centreCode: 'GGN07', city: 'Gurgaon',   building: 'Global Foyer',        floor: 'GF, 1, 2, 11',         leaseEnd: '31 Mar 2027', monthlyRent: '₹0',     status: 'Expiring Soon',   action: 'Renew' },
  { centreName: '43 EQ – Tower E',       centreCode: 'PUN11', city: 'Pune',      building: '43 EQ',               floor: 'Tower E, 4-8 Floors',  leaseEnd: '30 Jun 2029', monthlyRent: '₹149L',  status: 'Active',          action: 'View' },
  { centreName: 'Amar Tech Center',      centreCode: 'PUN14', city: 'Pune',      building: 'Amar Tech Center',    floor: '12',                   leaseEnd: '30 Jun 2028', monthlyRent: '₹96L',   status: 'Active',          action: 'View' },
  { centreName: 'Malpani Agile',         centreCode: 'PUN18', city: 'Pune',      building: 'Malpani Agile',       floor: '1st Phase 1-4',        leaseEnd: '01 Sep 2026', monthlyRent: '₹82L',   status: 'Expiring Soon',   action: 'Renew' },
  { centreName: 'Times Square – Fl 2',   centreCode: 'MUM06', city: 'Mumbai',    building: 'Times Square',        floor: '2 (Unit 1, 2, 3)',     leaseEnd: '31 May 2030', monthlyRent: '₹124L',  status: 'Active',          action: 'View' },
  { centreName: 'Times Square – Fl 7',   centreCode: 'MUM07', city: 'Mumbai',    building: 'Times Square',        floor: '7 (Unit 1, 2, 3, 4)',  leaseEnd: '15 Dec 2029', monthlyRent: '₹112L',  status: 'Active',          action: 'View' },
  { centreName: 'Fleet House',           centreCode: 'MUM10', city: 'Mumbai',    building: 'Fleet House',         floor: '1, 2, 4',              leaseEnd: '30 Jun 2029', monthlyRent: '₹98L',   status: 'Active',          action: 'View' },
  { centreName: 'Intellion Park B1',     centreCode: 'MUM12', city: 'Mumbai',    building: 'Intellion Park Bldg 1', floor: 'Ground',             leaseEnd: '31 Jul 2030', monthlyRent: '₹76L',   status: 'Active',          action: 'View' },
  { centreName: 'Eastbridge',            centreCode: 'MUM14', city: 'Mumbai',    building: 'Eastbridge',          floor: '2 - 6',                leaseEnd: '30 Nov 2032', monthlyRent: '₹108L',  status: 'Active',          action: 'View' },
  { centreName: 'Paradigm Tower',        centreCode: 'MUM16', city: 'Mumbai',    building: 'Paradigm Tower',      floor: '8, 9',                 leaseEnd: '26 May 2026', monthlyRent: '₹68L',   status: 'Expiring Soon',   action: 'Renew' },
  { centreName: 'DLF Cybercity',         centreCode: 'HYD03', city: 'Hyderabad', building: 'DLF Cybercity',       floor: '5 & 9',                leaseEnd: '31 Oct 2034', monthlyRent: '₹134L',  status: 'Active',          action: 'View' },
  { centreName: 'World Trade Tower',     centreCode: 'NOI04', city: 'Noida',     building: 'World Trade Tower',   floor: 'S1+S2+S3, G+1',        leaseEnd: '31 Dec 2030', monthlyRent: '₹92L',   status: 'Active',          action: 'View' },
  { centreName: 'Maple Corporate Park',  centreCode: 'NOI06', city: 'Noida',     building: 'Maple Corporate Park', floor: 'G+4',                 leaseEnd: '08 Aug 2026', monthlyRent: '₹62L',   status: 'Expiring Soon',   action: 'Renew' },
  { centreName: 'Godrej Genesis',        centreCode: 'KOL02', city: 'Kolkata',   building: 'Godrej Genesis',      floor: '7, 701-709',           leaseEnd: '15 Mar 2032', monthlyRent: '₹48L',   status: 'Active',          action: 'View' },
  { centreName: 'Brilliant Center',      centreCode: 'IND01', city: 'Indore',    building: 'Brilliant Center',    floor: 'Stilt, G-3 + 4-6',    leaseEnd: '01 Jun 2032', monthlyRent: '₹44L',   status: 'Active',          action: 'View' },
  { centreName: 'KCT Tech Park',         centreCode: 'CBE01', city: 'Coimbatore',building: 'KCT Tech Park',       floor: '3rd Floor, West Wing', leaseEnd: '15 Aug 2034', monthlyRent: '₹28L',   status: 'Active',          action: 'View' },
]

// ─── MANAGEMENT ───────────────────────────────────────────────────────────────
const mgmtMetrics = [
  { label: 'Total Cities',              value: '18',      change: '61 centres across India',      trend: 'up',   status: 'positive', icon: MapPin,      highlight: true },
  { label: 'Active Area (MSF)',         value: '11.64M',  change: 'WIP: 0M | All active',         trend: 'up',   status: 'positive', icon: Building2 },
  { label: 'Total Leases',             value: '206',     change: '190 active, 16 expiring soon',  trend: 'up',   status: 'positive', icon: FileText },
  { label: 'Expired Leases',          value: '98',      change: '11 expiring in 3 months',       trend: 'up',   status: 'negative', icon: AlertCircle },
  { label: 'Unregistered Agreements',  value: '205',     change: 'Only 1 of 206 registered',     trend: 'up',   status: 'warning',  icon: ListChecks },
]
const mgmtActions = [
  { priority: 'high',   text: '11 leases expiring within 3 months — initiate renewal or termination notices immediately', due: 'Apr 5', category: 'Lease Renewal' },
  { priority: 'high',   text: '205 of 206 agreements unregistered — significant legal and compliance risk, review with legal team', due: 'Apr 8', category: 'Compliance' },
  { priority: 'high',   text: 'Agreement approvals: 40 pending approvals stuck — review backlog and clear', due: 'Apr 4', category: 'Approvals' },
  { priority: 'medium', text: '6 leases expiring in 6 months — ensure renewal negotiations are in progress', due: 'Apr 15', category: 'Lease Renewal' },
  { priority: 'low',    text: '98 expired leases in system — audit and close out or document holdover status', due: 'Apr 20', category: 'Audit' },
]
const mgmtTopFive = [
  {
    title: 'Top 5 Cities by Centre Count',
    items: [
      { label: 'Bangalore',  value: '10', change: 1 },
      { label: 'Pune',       value: '9',  change: 0 },
      { label: 'Gurgaon',    value: '6',  change: 0 },
      { label: 'Chennai',    value: '6',  change: 0 },
      { label: 'Mumbai',     value: '5',  change: 1 },
    ],
  },
  {
    title: 'Top 5 Cities by Active Area (Sq Ft)',
    items: [
      { label: 'Pune',       value: '3.23M', change: 1 },
      { label: 'Bangalore',  value: '2.60M', change: 0 },
      { label: 'Chennai',    value: '1.30M', change: 0 },
      { label: 'Hyderabad',  value: '1.22M', change: 0 },
      { label: 'Mumbai',     value: '1.01M', change: 1 },
    ],
  },
]
const mgmtCharts = [
  {
    type: 'bar', title: 'Leases by City (Active/Expiring/WIP)',
    data: [
      { name: 'Pune',      active: 79, expiring: 6, wip: 0 }, { name: 'Chennai',   active: 42, expiring: 6, wip: 0 },
      { name: 'Bangalore', active: 38, expiring: 5, wip: 0 }, { name: 'Mumbai',    active: 42, expiring: 9, wip: 0 },
      { name: 'Gurgaon',   active: 14, expiring: 6, wip: 2 }, { name: 'Hyderabad', active: 8,  expiring: 3, wip: 0 },
      { name: 'Noida',     active: 8,  expiring: 2, wip: 0 },
    ],
    lines: [{ key: 'active', label: 'Active' }, { key: 'expiring', label: 'Expiring Soon' }, { key: 'wip', label: 'WIP' }],
  },
  {
    type: 'pie', title: 'Lease Expiry Status (Portfolio)',
    data: [
      { name: 'Active',           value: 190 },
      { name: 'Expiring 3M',      value: 11 },
      { name: 'Expiring 6M',      value: 6 },
      { name: 'Expiring 12M',     value: 18 },
      { name: 'Expired',          value: 98 },
    ],
    lines: [],
  },
  {
    type: 'bar', title: 'Area (Sq Ft) by City',
    data: [
      { name: 'Pune',       area: 3230 }, { name: 'Bangalore', area: 2600 },
      { name: 'Chennai',    area: 1300 }, { name: 'Hyderabad',  area: 1220 },
      { name: 'Mumbai',     area: 1010 }, { name: 'Noida',      area: 899 },
      { name: 'Gurgaon',    area: 787 },  { name: 'Kolkata',    area: 371 },
    ],
    lines: [{ key: 'area', label: 'Area (000 Sq Ft)' }],
  },
]
const mgmtColumns = agreementsColumns
const mgmtGrid = agreementsGrid

// ─── RE HEAD ──────────────────────────────────────────────────────────────────
const reheadMetrics = [
  { label: 'Agreement Approvals Pending', value: '40',   change: '40 pending with you',         trend: 'up',   status: 'negative', icon: AlertCircle, highlight: true },
  { label: 'Leases Expiring in 3M',       value: '11',   change: 'Renewal notices needed',      trend: 'up',   status: 'negative', icon: Clock },
  { label: 'Active Properties',           value: '65',   change: '206 total agreements',        trend: 'up',   status: 'positive', icon: Building2 },
  { label: 'Active Leads Pipeline',       value: '8',    change: '3 under negotiation',         trend: 'up',   status: 'info',     icon: TrendingUp },
  { label: 'Unregistered Agreements',     value: '205',  change: 'Out of 206 total',            trend: 'up',   status: 'warning',  icon: FileText },
]
const reheadActions = [
  { priority: 'high',   text: '40 agreement edit requests pending your approval (TM stage) — review and clear backlog', due: 'Apr 4', category: 'Approvals' },
  { priority: 'high',   text: 'Golf View, Gurgaon (₹54L/mo) — lease ending 08 Apr 2026, no renewal notice sent yet', due: 'Apr 3', category: 'Renewal Urgent' },
  { priority: 'high',   text: 'Paradigm Tower, Mumbai (₹68L/mo, Floors 8+9) — expiring 26 May 2026, negotiation status?', due: 'Apr 8', category: 'Renewal' },
  { priority: 'medium', text: 'Malpani Agile, Pune (₹82L/mo) — expiring Sep 2026, renewal discussions to begin', due: 'Apr 15', category: 'Renewal' },
  { priority: 'low',    text: 'New lead: Club 125, Noida — Under Negotiation stage, review proposal terms', due: 'Apr 10', category: 'Lead' },
]
const reheadTopFive = [
  {
    title: 'Top 5 Leases Expiring Soonest',
    items: [
      { label: 'Golf View, Gurgaon',          value: '6d',   change: -1 },
      { label: 'Paradigm Tower, Mumbai',      value: '54d',  change: -1 },
      { label: 'Malpani Agile, Pune',         value: '152d', change: 0 },
      { label: 'Global Foyer, Gurgaon',       value: '363d', change: 0 },
      { label: 'Maple Corporate Park, Noida', value: '128d', change: 0 },
    ],
  },
  {
    title: 'Top 5 Properties by Monthly Rent',
    items: [
      { label: '43 EQ, Pune (PUN11)',       value: '₹149L', change: 0 },
      { label: 'Emirates Stadium, GGN',     value: '₹142L', change: 0 },
      { label: 'DLF Cybercity, Hyd',        value: '₹134L', change: 1 },
      { label: 'Times Square Fl2, Mum',     value: '₹124L', change: 0 },
      { label: 'Highbury Stadium, GGN',     value: '₹118L', change: -1 },
    ],
  },
]
const reheadCharts = [
  {
    type: 'bar', title: 'Agreement Approval Pipeline',
    data: [
      { name: 'Pending w/ Me', count: 40 }, { name: 'All Pending',  count: 40 },
      { name: 'Approved',      count: 25 }, { name: 'Rejected',     count: 8 },
    ],
    lines: [{ key: 'count', label: 'Count' }],
  },
  {
    type: 'area', title: 'Lease Expiry Timeline (Next 24 Months)',
    data: [
      { name: 'Apr 26', expiring: 3 }, { name: 'May 26', expiring: 8 },
      { name: 'Jun 26', expiring: 4 }, { name: 'Jul 26', expiring: 2 },
      { name: 'Aug 26', expiring: 3 }, { name: 'Sep 26', expiring: 2 },
      { name: 'Q4 FY26', expiring: 5 }, { name: 'Q1 FY27', expiring: 6 },
      { name: 'Q2 FY27', expiring: 4 }, { name: 'FY28+', expiring: 12 },
    ],
    lines: [{ key: 'expiring', label: 'Leases Expiring' }],
  },
]
const reheadColumns = agreementsColumns
const reheadGrid = agreementsGrid.filter(r => ['Expiring Soon', 'WIP'].includes(r.status) || r.leaseEnd.includes('2026') || r.leaseEnd.includes('2027'))

// ─── TRANSACTION MANAGER ──────────────────────────────────────────────────────
const txnmgrMetrics = [
  { label: 'Active Leads / Deals',    value: '8',      change: '3 under negotiation',           trend: 'up',   status: 'info',     icon: TrendingUp,  highlight: true },
  { label: 'Approval Requests Sent',  value: '40',     change: '25 approved, 8 rejected',       trend: 'up',   status: 'warning',  icon: CheckCircle },
  { label: 'Leases to Renew (6M)',    value: '17',     change: '11 in 3M, 6 in 3-6M',           trend: 'up',   status: 'negative', icon: Clock },
  { label: 'New Agreements (Month)',  value: '4',      change: '2 in WIP stage',                 trend: 'up',   status: 'positive', icon: FileText },
  { label: 'Deals Closed (Qtr)',      value: '12',     change: '₹8.4Cr MSF signed',              trend: 'up',   status: 'positive', icon: Building2 },
]
const txnmgrActions = [
  { priority: 'high',   text: 'Club 125 (Noida, Under Negotiation) — landlord counter-offer received, respond before Apr 6', due: 'Apr 6', category: 'Negotiation' },
  { priority: 'high',   text: 'Emirates Stadium renewal (3 agreement edit requests) — submit for TM approval today', due: 'Apr 4', category: 'Agreement Edit' },
  { priority: 'medium', text: 'Golf View renewal: draft renewal terms for ₹54L/mo lease — coordinate with RE Head', due: 'Apr 5', category: 'Renewal' },
  { priority: 'medium', text: 'Paradigm Tower (Mumbai, Floors 8+9) — get landlord renewal intent before expiry', due: 'Apr 10', category: 'Renewal' },
  { priority: 'low',    text: 'Upload signed documents for 2 recently executed agreements — pending in portal', due: 'Apr 7', category: 'Documentation' },
]
const txnmgrTopFive = [
  {
    title: 'Active Leads by Stage',
    items: [
      { label: 'Under Negotiation',  value: '3',  change: 0 },
      { label: 'Sourced',            value: '3',  change: 1 },
      { label: 'LOI Issued',         value: '1',  change: 0 },
      { label: 'Due Diligence',      value: '1',  change: 0 },
      { label: 'Lost',               value: '2',  change: -1 },
    ],
  },
  {
    title: 'Top 5 Leads by Target Area',
    items: [
      { label: 'Club 125, Noida (Renewal)',     value: '39K sqft',  change: 0 },
      { label: 'Andheri Lead, Mumbai (New)',    value: '28K sqft',  change: 1 },
      { label: 'Viman Nagar, Pune (Renewal)',   value: '22K sqft',  change: 0 },
      { label: 'HITEC City, Hyd (Expansion)',   value: '18K sqft',  change: 0 },
      { label: 'Whitefield, Blore (New)',       value: '14K sqft',  change: 0 },
    ],
  },
]
const txnmgrCharts = [
  {
    type: 'bar', title: 'Lead Pipeline by Stage',
    data: [
      { name: 'Sourced',           count: 3 }, { name: 'Under Negotiation', count: 3 },
      { name: 'LOI Issued',        count: 1 }, { name: 'Due Diligence',     count: 1 },
      { name: 'Agreement Signing', count: 2 }, { name: 'Lost',              count: 2 },
    ],
    lines: [{ key: 'count', label: 'Leads' }],
  },
  {
    type: 'line', title: 'Agreement Edits — Approval Cycle Time (Days)',
    data: [
      { name: 'Jan', days: 6.2 }, { name: 'Feb', days: 5.8 }, { name: 'Mar', days: 7.4 }, { name: 'Apr', days: 8.1 },
    ],
    lines: [{ key: 'days', label: 'Avg Days to Approval' }],
  },
]
const txnmgrColumns = [
  { key: 'property',      label: 'Property Name' },
  { key: 'location',      label: 'Location' },
  { key: 'stage',         label: 'Stage' },
  { key: 'type',          label: 'Type', muted: true },
  { key: 'targetArea',    label: 'Target Area' },
  { key: 'landlord',      label: 'Landlord', muted: true },
  { key: 'expectedClose', label: 'Exp. Close' },
  { key: 'status',        label: 'Status', type: 'status' },
  { key: 'action',        label: 'Action', type: 'action', sortable: false },
]
const txnmgrGrid = [
  { property: 'Club 125',             location: 'Noida, Sector 125',    stage: 'Under Negotiation', type: 'Renewal',   targetArea: '39K sqft',  landlord: 'Pawan Impex Pvt',    expectedClose: 'Jun 2026', status: 'Active',    action: 'View' },
  { property: 'Andheri Skyview',      location: 'Mumbai, Andheri E',    stage: 'Under Negotiation', type: 'New',       targetArea: '28K sqft',  landlord: 'Runwal Group',        expectedClose: 'Jul 2026', status: 'Active',    action: 'View' },
  { property: 'Viman Nagar Park',     location: 'Pune, Viman Nagar',    stage: 'Under Negotiation', type: 'Renewal',   targetArea: '22K sqft',  landlord: 'Solitaire Group',     expectedClose: 'May 2026', status: 'Active',    action: 'View' },
  { property: 'HITEC Expansion',      location: 'Hyderabad, HITEC City',stage: 'Sourced',           type: 'Expansion', targetArea: '18K sqft',  landlord: 'TBD',                 expectedClose: 'Sep 2026', status: 'Pending',   action: 'View' },
  { property: 'Whitefield New',       location: 'Bangalore, Whitefield',stage: 'Sourced',           type: 'New',       targetArea: '14K sqft',  landlord: 'Embassy Group',       expectedClose: 'Aug 2026', status: 'Pending',   action: 'View' },
  { property: 'Sohna Road Ofc',       location: 'Gurgaon, Sohna Road',  stage: 'LOI Issued',        type: 'New',       targetArea: '12K sqft',  landlord: 'BPTP Ltd',            expectedClose: 'May 2026', status: 'Active',    action: 'View' },
  { property: 'Anna Nagar Blk A',     location: 'Chennai, Anna Nagar',  stage: 'Due Diligence',     type: 'New',       targetArea: '10K sqft',  landlord: 'CBRE India',          expectedClose: 'Jun 2026', status: 'Active',    action: 'View' },
  { property: 'Kalyani Magnum',       location: 'Kolkata, Sector V',    stage: 'Sourced',           type: 'New',       targetArea: '8K sqft',   landlord: 'Kalyani Developers',  expectedClose: 'Oct 2026', status: 'Pending',   action: 'View' },
  { property: 'Prestige Polygon',     location: 'Chennai, Old Madras',  stage: 'Lost',              type: 'Renewal',   targetArea: '18K sqft',  landlord: 'Prestige Group',      expectedClose: 'N/A',      status: 'Inactive',  action: 'Archive' },
  { property: 'Times Square Fl 3',    location: 'Mumbai, BKC',          stage: 'Expired',           type: 'Renewal',   targetArea: '14K sqft',  landlord: 'Times Developers',    expectedClose: 'N/A',      status: 'Inactive',  action: 'Archive' },
]

// ─── RE USER ──────────────────────────────────────────────────────────────────
const reuserMetrics = [
  { label: 'My Active Agreements',    value: '22',    change: '5 require action',           trend: 'up',   status: 'positive', icon: FileText,   highlight: true },
  { label: 'Expiring in 3 Months',    value: '4',     change: 'Renewal notices needed',     trend: 'up',   status: 'negative', icon: Clock },
  { label: 'Upcoming Notices',        value: '6',     change: '2 termination, 4 renewal',   trend: 'up',   status: 'warning',  icon: AlertCircle },
  { label: 'Agreement Edits Pending', value: '3',     change: '1 rejected, 2 in approval',  trend: 'up',   status: 'warning',  icon: CheckCircle },
  { label: 'Renewal Pipeline (6M)',   value: '9',     change: '₹4.8Cr rent at stake',       trend: 'up',   status: 'warning',  icon: TrendingUp },
]
const reuserActions = [
  { priority: 'high',   text: 'Golf View (GGN06) — lease ends 08 Apr 2026, send termination or renewal notice immediately', due: 'Today', category: 'Expiry Action' },
  { priority: 'high',   text: 'Paradigm Tower (MUM16) — lease ends 26 May 2026, landlord not contacted. Initiate renewal', due: 'Apr 5', category: 'Renewal' },
  { priority: 'medium', text: 'Agreement edit for Emirates Stadium (GGN01) — rejected by finance, resubmit with corrections', due: 'Apr 5', category: 'Agreement Edit' },
  { priority: 'medium', text: 'Upload renewal notice letter for Malpani Agile (PUN18) — due in portal before Apr 10', due: 'Apr 10', category: 'Documentation' },
  { priority: 'low',    text: 'Lease Expiry Calendar report for Q1 FY27 — generate and share with RE Head by Apr 15', due: 'Apr 15', category: 'Reports' },
]
const reuserTopFive = [
  {
    title: 'My Leases Expiring Soonest',
    items: [
      { label: 'Golf View, Gurgaon',          value: 'Apr 26', change: -1 },
      { label: 'Paradigm Tower, Mumbai',      value: 'May 26', change: -1 },
      { label: 'Maple Corporate Park, Noida', value: 'Aug 26', change: 0 },
      { label: 'Malpani Agile, Pune',         value: 'Sep 26', change: 0 },
      { label: 'Global Foyer, Gurgaon',       value: 'Mar 27', change: 0 },
    ],
  },
  {
    title: 'Lease Expiry Calendar — Status',
    items: [
      { label: 'Active',          value: '190', change: 0 },
      { label: 'Expiring 3M',     value: '11',  change: -1 },
      { label: 'Expiring 6M',     value: '6',   change: 0 },
      { label: 'Expiring 12M',    value: '18',  change: 0 },
      { label: 'Expired (total)', value: '98',  change: -1 },
    ],
  },
]
const reuserCharts = [
  {
    type: 'bar', title: 'My Leases by Expiry Status',
    data: [
      { name: 'Active',       count: 16 }, { name: 'Expiring 3M',  count: 2 },
      { name: 'Expiring 6M',  count: 2  }, { name: 'Expiring 12M', count: 2 },
    ],
    lines: [{ key: 'count', label: 'Agreements' }],
  },
  {
    type: 'area', title: 'Agreement Edits — Monthly Submissions',
    data: [
      { name: 'Oct', submitted: 4, approved: 3 }, { name: 'Nov', submitted: 6, approved: 5 },
      { name: 'Dec', submitted: 3, approved: 3 }, { name: 'Jan', submitted: 8, approved: 6 },
      { name: 'Feb', submitted: 5, approved: 4 }, { name: 'Mar', submitted: 7, approved: 5 },
    ],
    lines: [{ key: 'submitted', label: 'Submitted' }, { key: 'approved', label: 'Approved' }],
  },
]
const reuserColumns = [
  { key: 'city',        label: 'City' },
  { key: 'location',    label: 'Location' },
  { key: 'floor',       label: 'Floor', muted: true },
  { key: 'leaseEnd',    label: 'Lease End Date' },
  { key: 'currentRent', label: 'Current Rent' },
  { key: 'escalation',  label: 'Escalation %', muted: true },
  { key: 'noticeSent',  label: 'Renewal Notice' },
  { key: 'status',      label: 'Status', type: 'status' },
  { key: 'action',      label: 'Action', type: 'action', sortable: false },
]
const reuserGrid = [
  { city: 'Gurgaon',    location: 'Golf View',               floor: '2, 4 & 5',                  leaseEnd: '08 Apr 2026', currentRent: '₹54L',  escalation: 'N/A', noticeSent: 'No',  status: 'Expiring Soon', action: 'Send Notice' },
  { city: 'Mumbai',     location: 'Paradigm Tower',          floor: '8, 9',                       leaseEnd: '26 May 2026', currentRent: '₹68L',  escalation: 'N/A', noticeSent: 'No',  status: 'Expiring Soon', action: 'Send Notice' },
  { city: 'Noida',      location: 'Maple Corporate Park',    floor: 'G+4',                        leaseEnd: '08 Aug 2026', currentRent: '₹62L',  escalation: 'N/A', noticeSent: 'No',  status: 'Expiring Soon', action: 'Send Notice' },
  { city: 'Pune',       location: 'Malpani Agile',           floor: '1st Phase 1-4',              leaseEnd: '01 Sep 2026', currentRent: '₹82L',  escalation: 'N/A', noticeSent: 'No',  status: 'Expiring Soon', action: 'Send Notice' },
  { city: 'Gurgaon',    location: 'Global Foyer',            floor: 'GF, 1, 2, 11',               leaseEnd: '31 Mar 2027', currentRent: '₹0',    escalation: 'N/A', noticeSent: 'No',  status: 'Expiring Soon', action: 'Send Notice' },
  { city: 'Mumbai',     location: 'Times Square',            floor: 'Ground',                     leaseEnd: '07 Feb 2027', currentRent: '₹42L',  escalation: 'N/A', noticeSent: 'No',  status: 'Expiring Soon', action: 'Send Notice' },
  { city: 'Gurgaon',    location: 'Emirates Stadium',        floor: '3, 4, 5',                    leaseEnd: '31 Mar 2029', currentRent: '₹142L', escalation: 'N/A', noticeSent: 'No',  status: 'Active',        action: 'View' },
  { city: 'Gurgaon',    location: 'Highbury Stadium',        floor: '5, 6, 7',                    leaseEnd: '31 Mar 2028', currentRent: '₹118L', escalation: 'N/A', noticeSent: 'Yes', status: 'Active',        action: 'View' },
  { city: 'Pune',       location: '43 EQ – Tower E',         floor: 'Tower E, 4-8 Floors',        leaseEnd: '30 Jun 2029', currentRent: '₹149L', escalation: 'N/A', noticeSent: 'Yes', status: 'Active',        action: 'View' },
  { city: 'Hyderabad',  location: 'DLF Cybercity',           floor: '5 & 9',                      leaseEnd: '31 Oct 2034', currentRent: '₹134L', escalation: 'N/A', noticeSent: 'No',  status: 'Active',        action: 'View' },
]

// ─── FINANCE ──────────────────────────────────────────────────────────────────
const financeMetrics = [
  { label: 'Total Monthly Outgoings',  value: '₹18.4Cr', change: 'Rent + CAM across 206 leases', trend: 'up',   status: 'warning',  icon: DollarSign, highlight: true },
  { label: 'Security Deposits (Total)',value: '₹42.8Cr', change: '206 deposits tracked',          trend: 'up',   status: 'info',     icon: FileText },
  { label: 'Bank Guarantees Active',   value: '28',      change: '₹12.4Cr total BG value',        trend: 'up',   status: 'info',     icon: CheckCircle },
  { label: 'Escalations Due (Next 6M)',value: '14',      change: 'Avg 5% escalation',             trend: 'up',   status: 'warning',  icon: TrendingUp },
  { label: 'CAM Charges (Monthly)',    value: '₹2.8Cr',  change: 'Across active portfolio',       trend: 'up',   status: 'warning',  icon: BarChart3 },
]
const financeActions = [
  { priority: 'high',   text: 'BG expiry: 4 bank guarantees expiring within 60 days — renew or replace before expiry', due: 'Apr 10', category: 'Bank Guarantee' },
  { priority: 'high',   text: 'Stamp duty unpaid for 3 agreements executed in Q4 FY25 — pay before penalty kicks in', due: 'Apr 5', category: 'Stamp Duty' },
  { priority: 'medium', text: '14 rent escalations due in next 6 months — update payment instructions with banks', due: 'Apr 15', category: 'Escalations' },
  { priority: 'medium', text: 'Security deposit refund due for 2 terminated leases (₹1.2Cr total) — process and track', due: 'Apr 12', category: 'Deposit Refund' },
  { priority: 'low',    text: 'Annual financial schedule: reconcile lease payments vs SAP entries for FY25-26', due: 'Apr 20', category: 'Reconciliation' },
]
const financeTopFive = [
  {
    title: 'Top 5 Properties by Monthly Rent',
    items: [
      { label: '43 EQ, Pune (PUN11)',       value: '₹149.17L', change: 0 },
      { label: 'Emirates Stadium, Gurgaon', value: '₹142L',    change: 0 },
      { label: 'DLF Cybercity, Hyd',        value: '₹134L',    change: 1 },
      { label: 'Times Square Fl2+7, Mum',   value: '₹124L',    change: 0 },
      { label: 'Highbury Stadium, Gurgaon', value: '₹118L',    change: -1 },
    ],
  },
  {
    title: 'Top 5 Escalations Due (Next 6M)',
    items: [
      { label: 'Brilliant Center, Indore',  value: 'Jun 26', change: 0 },
      { label: 'DLF Cybercity, Hyd',        value: 'Jul 26', change: 0 },
      { label: 'Godrej Genesis, Kolkata',   value: 'Aug 26', change: 0 },
      { label: 'World Trade Tower, Noida',  value: 'Sep 26', change: 0 },
      { label: 'Eastbridge, Mumbai',        value: 'Sep 26', change: 0 },
    ],
  },
]
const financeCharts = [
  {
    type: 'bar', title: 'Monthly Rent by City (₹L)',
    data: [
      { name: 'Pune',      rent: 426 }, { name: 'Mumbai',    rent: 380 },
      { name: 'Gurgaon',   rent: 488 }, { name: 'Hyderabad', rent: 134 },
      { name: 'Bangalore', rent: 312 }, { name: 'Chennai',   rent: 248 },
      { name: 'Noida',     rent: 154 }, { name: 'Kolkata',   rent: 82 },
    ],
    lines: [{ key: 'rent', label: 'Monthly Rent (₹L)' }],
  },
  {
    type: 'pie', title: 'Security Deposit Distribution by City',
    data: [
      { name: 'Pune',      value: 28 }, { name: 'Mumbai',    value: 22 },
      { name: 'Gurgaon',   value: 18 }, { name: 'Bangalore', value: 14 },
      { name: 'Hyderabad', value: 10 }, { name: 'Others',    value: 8 },
    ],
    lines: [],
  },
]
const financeColumns = [
  { key: 'centreCode',   label: 'Centre Code', muted: true },
  { key: 'city',         label: 'City' },
  { key: 'building',     label: 'Building' },
  { key: 'monthlyRent',  label: 'Monthly Rent' },
  { key: 'camCharges',   label: 'CAM (₹L)' },
  { key: 'secDeposit',   label: 'Security Dep.' },
  { key: 'bgAmount',     label: 'BG Amount' },
  { key: 'escalation',   label: 'Next Escalation' },
  { key: 'status',       label: 'Status', type: 'status' },
  { key: 'action',       label: 'Action', type: 'action', sortable: false },
]
const financeGrid = [
  { centreCode: 'PUN11',  city: 'Pune',       building: '43 EQ',               monthlyRent: '₹149.17L', camCharges: '12.4',  secDeposit: '₹149.17L', bgAmount: 'N/A',      escalation: 'Jun 2026', status: 'Active',  action: 'View' },
  { centreCode: 'GGN01',  city: 'Gurgaon',    building: 'Emirates Stadium',    monthlyRent: '₹142L',    camCharges: '10.8',  secDeposit: '₹142L',    bgAmount: 'N/A',      escalation: 'Mar 2026', status: 'Active',  action: 'View' },
  { centreCode: 'HYD03',  city: 'Hyderabad',  building: 'DLF Cybercity',       monthlyRent: '₹134L',    camCharges: '11.2',  secDeposit: '₹134L',    bgAmount: '₹40L',     escalation: 'Jul 2026', status: 'Active',  action: 'View' },
  { centreCode: 'MUM06',  city: 'Mumbai',     building: 'Times Square Fl 2+7', monthlyRent: '₹124L',    camCharges: '9.6',   secDeposit: '₹124L',    bgAmount: '₹36L',     escalation: 'Dec 2026', status: 'Active',  action: 'View' },
  { centreCode: 'GGN02',  city: 'Gurgaon',    building: 'Highbury Stadium',    monthlyRent: '₹118L',    camCharges: '8.4',   secDeposit: '₹118L',    bgAmount: 'N/A',      escalation: 'Mar 2027', status: 'Active',  action: 'View' },
  { centreCode: 'GGN01',  city: 'Gurgaon',    building: 'Grand Canyon',        monthlyRent: '₹64L',     camCharges: '5.2',   secDeposit: '₹64L',     bgAmount: 'N/A',      escalation: 'Sep 2026', status: 'Active',  action: 'View' },
  { centreCode: 'MUM16',  city: 'Mumbai',     building: 'Paradigm Tower',      monthlyRent: '₹68L',     camCharges: '5.6',   secDeposit: '₹68L',     bgAmount: '₹20L',     escalation: 'N/A',      status: 'Expiring Soon', action: 'Renew' },
  { centreCode: 'GGN06',  city: 'Gurgaon',    building: 'Golf View',           monthlyRent: '₹54L',     camCharges: '4.4',   secDeposit: '₹54L',     bgAmount: 'N/A',      escalation: 'N/A',      status: 'Expiring Soon', action: 'Renew' },
  { centreCode: 'NOI04',  city: 'Noida',      building: 'World Trade Tower',   monthlyRent: '₹92L',     camCharges: '7.2',   secDeposit: '₹92L',     bgAmount: '₹28L',     escalation: 'Sep 2026', status: 'Active',  action: 'View' },
  { centreCode: 'IND01',  city: 'Indore',     building: 'Brilliant Center',    monthlyRent: '₹44L',     camCharges: '3.6',   secDeposit: '₹44L',     bgAmount: 'N/A',      escalation: 'Jun 2026', status: 'Active',  action: 'View' },
]

export const nexusREData = {
  mgmt:    { metrics: mgmtMetrics,    actions: mgmtActions,    topFive: mgmtTopFive,    charts: mgmtCharts,    columns: mgmtColumns,    grid: mgmtGrid,    gridTitle: 'Full Agreement Portfolio' },
  rehead:  { metrics: reheadMetrics,  actions: reheadActions,  topFive: reheadTopFive,  charts: reheadCharts,  columns: reheadColumns,  grid: reheadGrid,  gridTitle: 'Expiring & At-Risk Agreements' },
  txnmgr:  { metrics: txnmgrMetrics,  actions: txnmgrActions,  topFive: txnmgrTopFive,  charts: txnmgrCharts,  columns: txnmgrColumns,  grid: txnmgrGrid,  gridTitle: 'Property Leads Pipeline' },
  reuser:  { metrics: reuserMetrics,  actions: reuserActions,  topFive: reuserTopFive,  charts: reuserCharts,  columns: reuserColumns,  grid: reuserGrid,  gridTitle: 'Lease Expiry Calendar' },
  finance: { metrics: financeMetrics, actions: financeActions, topFive: financeTopFive, charts: financeCharts, columns: financeColumns, grid: financeGrid, gridTitle: 'Financial Obligations by Agreement' },
}
