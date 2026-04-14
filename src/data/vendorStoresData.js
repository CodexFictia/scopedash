/**
 * Vendor Stores — Smart Cafe / Commerce
 * Personas: vendor (store owner), am (account manager), rehead (regional head)
 */

// ─── Shared filters ───────────────────────────────────────────────────────────
export const vendorStoresPersonas = [
  { id: 'vendor', label: 'Vendor' },
  { id: 'am',     label: 'Account Manager' },
  { id: 'rehead', label: 'Regional Head' },
]

export const vendorStoresFilters = [
  {
    id: 'region',
    label: 'Region',
    options: ['All Regions', 'North', 'South', 'East', 'West', 'Central'],
  },
  {
    id: 'city',
    label: 'City',
    options: ['All Cities', 'Gurugram', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai'],
  },
  {
    id: 'location',
    label: 'Location',
    options: ['All Locations', 'Unitech Cyber Park', 'DLF Cyberhub', 'Prestige Tech Park', 'Mindspace BKC'],
  },
  {
    id: 'vendor',
    label: 'Vendor',
    options: [
      'All Vendors',
      'Paksha Kitchen',
      'Desi Tadka',
      'The Brew House',
      'Freshbowl',
      'QuickBites Express',
      'Green Garden Cafe',
      'Mumbai Tiffins',
      'Chai & Co.',
    ],
  },
]

// ─── Vendor persona ───────────────────────────────────────────────────────────
// Single store: Paksha Kitchen – AP81
const vendor = {
  tasksList: [
    { label: 'Review 16 pending payment orders', priority: 'high', due: 'Now' },
    { label: 'Mark "Chikku Shake" as seasonal — update status', priority: 'medium', due: 'Today' },
    { label: 'Settlement cycle closes tomorrow — confirm bank details', priority: 'high', due: 'Tomorrow' },
    { label: 'Restock Masala Tea — inventory at 12 units', priority: 'medium', due: 'Today' },
    { label: 'Download April invoice report for accountant', priority: 'low', due: 'This week' },
  ],
  tasksTitle: 'Store tasks',

  metrics: [
    { label: "Today's Orders",     value: '349',      sub: '+12% vs yesterday',  status: 'positive', icon: 'ShoppingBag' },
    { label: "Today's Sales",      value: '₹27,471',  sub: 'Gross collected',    status: 'positive', icon: 'TrendingUp' },
    { label: 'Pending Payments',   value: '16',       sub: '₹1,381 at risk',     status: 'negative', icon: 'AlertCircle' },
    { label: 'Products Active',    value: '5 / 6',    sub: '1 item not selling', status: 'warning',  icon: 'Package' },
    { label: 'Settled This Month', value: '₹3,24,580', sub: '75% of gross sales', status: 'info',   icon: 'Banknote' },
    { label: 'Next Settlement',    value: '₹18,540',  sub: 'Due: 15 Apr 2026',   status: 'info',    icon: 'Calendar' },
  ],

  actions: [
    { text: '16 orders have pending payment — auto-cancel in < 15 min', severity: 'high' },
    { text: 'Chikku Shake is marked "Not Selling" — losing potential revenue', severity: 'medium' },
    { text: 'Masala Tea inventory low (12 units) — restock before lunch rush', severity: 'medium' },
    { text: 'Settlement of ₹18,540 due on 15 Apr — verify bank details', severity: 'low' },
    { text: 'April invoice report not yet downloaded', severity: 'low' },
  ],
  actionsTitle: 'Action Required',

  topFive: [
    {
      title: 'Top 5 Items — Today by Revenue',
      items: [
        { label: 'Paratha With Paneer Curry', value: '₹5,980', sub: '46 orders' },
        { label: 'Egg Fried Rice',            value: '₹4,550', sub: '35 orders' },
        { label: 'Dal Khichdi',               value: '₹3,740', sub: '34 orders' },
        { label: 'Hot Coffee',                value: '₹2,800', sub: '100 orders' },
        { label: 'Masala Tea',                value: '₹2,400', sub: '120 orders' },
      ],
    },
    {
      title: 'Top 5 Items — This Month by Volume',
      items: [
        { label: 'Masala Tea',                value: '3,842 units', sub: '₹76,840' },
        { label: 'Hot Coffee',                value: '3,210 units', sub: '₹90,880' },
        { label: 'Plain Maggi',               value: '2,960 units', sub: '₹1,48,000' },
        { label: 'Veg Maggie',                value: '2,810 units', sub: '₹1,82,650' },
        { label: 'Paratha With Paneer Curry', value: '2,640 units', sub: '₹3,43,200' },
      ],
    },
  ],

  charts: [
    {
      type: 'area',
      title: 'Daily Sales — Last 14 Days (₹)',
      data: [
        { name: '01 Apr', Sales: 28466 },
        { name: '02 Apr', Sales: 41119 },
        { name: '03 Apr', Sales: 35547 },
        { name: '04 Apr', Sales: 40857 },
        { name: '05 Apr', Sales: 39644 },
        { name: '06 Apr', Sales: 38993 },
        { name: '07 Apr', Sales: 40558 },
        { name: '08 Apr', Sales: 40857 },
        { name: '09 Apr', Sales: 37502 },
        { name: '10 Apr', Sales: 33796 },
        { name: '11 Apr', Sales: 36210 },
        { name: '12 Apr', Sales: 38440 },
        { name: '13 Apr', Sales: 27471 },
      ],
      lines: [{ key: 'Sales', color: '#f97316' }],
    },
    {
      type: 'bar',
      title: 'Daily Orders — Last 14 Days',
      data: [
        { name: '01 Apr', Orders: 427 },
        { name: '02 Apr', Orders: 545 },
        { name: '03 Apr', Orders: 464 },
        { name: '04 Apr', Orders: 523 },
        { name: '05 Apr', Orders: 557 },
        { name: '06 Apr', Orders: 481 },
        { name: '07 Apr', Orders: 499 },
        { name: '08 Apr', Orders: 523 },
        { name: '09 Apr', Orders: 499 },
        { name: '10 Apr', Orders: 500 },
        { name: '11 Apr', Orders: 478 },
        { name: '12 Apr', Orders: 511 },
        { name: '13 Apr', Orders: 349 },
      ],
      lines: [{ key: 'Orders', color: '#38bdf8' }],
    },
    {
      type: 'bar',
      title: 'Sales by Payment Channel — Last 7 Days (₹)',
      data: [
        { name: '07 Apr', Razorpay: 3057, Paytm: 36917, Wallet: 584 },
        { name: '08 Apr', Razorpay: 3816, Paytm: 36668, Wallet: 573 },
        { name: '09 Apr', Razorpay: 2408, Paytm: 34673, Wallet: 421 },
        { name: '10 Apr', Razorpay: 2900, Paytm: 30295, Wallet: 501 },
        { name: '11 Apr', Razorpay: 3210, Paytm: 32100, Wallet: 440 },
        { name: '12 Apr', Razorpay: 3540, Paytm: 34100, Wallet: 510 },
        { name: '13 Apr', Razorpay: 2406, Paytm: 24737, Wallet: 334 },
      ],
      lines: [
        { key: 'Razorpay', color: '#3b82f6' },
        { key: 'Paytm',    color: '#22c55e' },
        { key: 'Wallet',   color: '#a855f7' },
      ],
    },
  ],

  grid: [
    { 'Order No': '#004241142', Customer: 'Guest User', Items: 2, Amount: '₹48', Payment: 'Razorpay', Status: 'Completed', Time: '09:01 AM' },
    { 'Order No': '#004241147', Customer: 'Guest User', Items: 1, Amount: '₹20', Payment: 'Paytm', Status: 'Completed', Time: '09:04 AM' },
    { 'Order No': '#004241151', Customer: 'Guest User', Items: 3, Amount: '₹130', Payment: 'Pending', Status: 'Pending', Time: '09:07 AM' },
    { 'Order No': '#004241154', Customer: 'Guest User', Items: 1, Amount: '₹35', Payment: 'Pending', Status: 'Pending', Time: '09:09 AM' },
    { 'Order No': '#004240985', Customer: 'Sushmit Jain', Items: 2, Amount: '₹130', Payment: 'Paytm', Status: 'Completed', Time: '08:44 AM' },
    { 'Order No': '#004240988', Customer: 'Guest User', Items: 2, Amount: '₹76', Payment: 'Razorpay', Status: 'Completed', Time: '08:46 AM' },
    { 'Order No': '#004241398', Customer: 'Guest User', Items: 1, Amount: '₹20', Payment: 'Points', Status: 'Completed', Time: '09:15 AM' },
    { 'Order No': '#004244729', Customer: 'Guest User', Items: 1, Amount: '₹35', Payment: 'Pending', Status: 'Pending', Time: '09:22 AM' },
  ],
  columns: ['Order No', 'Customer', 'Items', 'Amount', 'Payment', 'Status', 'Time'],
  gridTitle: 'Recent Orders (Today)',
}

// ─── AM persona ───────────────────────────────────────────────────────────────
// Manages 8 vendor stores across a cluster of locations
const am = {
  tasksList: [
    { label: 'Follow up: Desi Tadka settlement overdue by 9 days', priority: 'high', due: 'Today' },
    { label: 'Chai & Co. has 4 items marked Not Selling — catalogue review', priority: 'high', due: 'Today' },
    { label: 'QuickBites Express store offline since 8 AM — check in', priority: 'high', due: 'Now' },
    { label: 'Green Garden Cafe inventory: 3 items below 50 units', priority: 'medium', due: 'Today' },
    { label: 'Monthly settlement report due to finance — 8 stores', priority: 'medium', due: 'Tomorrow' },
  ],
  tasksTitle: 'AM tasks',

  metrics: [
    { label: 'Stores Active Today',      value: '7 / 8',    sub: '1 store offline',              status: 'warning',  icon: 'Store' },
    { label: 'Total GMV Today',          value: '₹1,84,320', sub: 'Across 7 active stores',      status: 'positive', icon: 'TrendingUp' },
    { label: 'Pending Settlements',      value: '₹2,42,800', sub: '3 stores overdue',            status: 'negative', icon: 'AlertCircle' },
    { label: 'Settlement Overdue >7d',   value: '2 stores',  sub: 'Desi Tadka, Chai & Co.',      status: 'negative', icon: 'Clock' },
    { label: '"Not Selling" Items',      value: '11 items',  sub: 'Across 4 stores',             status: 'warning',  icon: 'PackageX' },
    { label: 'Low Inventory Alerts',     value: '7 items',   sub: 'Below 50 units across stores', status: 'warning', icon: 'Package' },
  ],

  actions: [
    { text: 'Desi Tadka: settlement of ₹68,200 overdue by 9 days — escalate to finance', severity: 'high' },
    { text: 'Chai & Co.: settlement of ₹41,500 overdue by 7 days — contact vendor', severity: 'high' },
    { text: 'QuickBites Express: store offline since 08:00 — lunch rush approaching', severity: 'high' },
    { text: 'Chai & Co. has 4 products "Not Selling" — losing ₹3,200/day estimated', severity: 'medium' },
    { text: 'Green Garden Cafe: Veg Wrap (34 units), Smoothie (28 units), Salad Bowl (19 units) — restock', severity: 'medium' },
    { text: 'Mumbai Tiffins: Dabba Meal marked "Not Selling" for 5 days — check reason', severity: 'medium' },
    { text: '3 stores yet to confirm bank details for April settlement cycle', severity: 'low' },
  ],
  actionsTitle: 'Action Required',

  topFive: [
    {
      title: 'Top 5 Stores — GMV This Week',
      items: [
        { label: 'Paksha Kitchen',      value: '₹2,14,680', sub: 'AP81 · On track' },
        { label: 'Freshbowl',           value: '₹1,98,420', sub: 'BKC · On track' },
        { label: 'The Brew House',      value: '₹1,74,900', sub: 'Cyberhub · On track' },
        { label: 'Mumbai Tiffins',      value: '₹1,52,300', sub: 'Powai · On track' },
        { label: 'Green Garden Cafe',   value: '₹1,38,750', sub: 'Tech Park · On track' },
      ],
    },
    {
      title: 'Bottom 5 Stores — GMV This Week',
      items: [
        { label: 'QuickBites Express',  value: '₹48,200',  sub: 'Offline today · At risk' },
        { label: 'Chai & Co.',          value: '₹61,400',  sub: 'Settlement overdue' },
        { label: 'Desi Tadka',          value: '₹72,100',  sub: 'Settlement overdue' },
        { label: 'Plain Bites',         value: '₹88,300',  sub: 'Below target' },
        { label: 'Snack Box',           value: '₹94,600',  sub: 'Catalogue issues' },
      ],
    },
    {
      title: 'Stores with Settlement Issues',
      items: [
        { label: 'Desi Tadka',          value: '₹68,200 overdue', sub: '9 days pending' },
        { label: 'Chai & Co.',          value: '₹41,500 overdue', sub: '7 days pending' },
        { label: 'QuickBites Express',  value: '₹32,100 pending', sub: 'Due in 2 days' },
        { label: 'Mumbai Tiffins',      value: '₹28,400 pending', sub: 'Due tomorrow' },
        { label: 'Freshbowl',           value: '₹18,600 pending', sub: 'Due in 4 days' },
      ],
    },
    {
      title: 'Catalogue Issues by Store',
      items: [
        { label: 'Chai & Co.',          value: '4 not selling',   sub: 'Est. ₹3,200/day lost' },
        { label: 'Mumbai Tiffins',      value: '3 not selling',   sub: 'Dabba Meal 5 days' },
        { label: 'Desi Tadka',          value: '2 not selling',   sub: 'Review needed' },
        { label: 'Green Garden Cafe',   value: '2 not selling',   sub: '+ 3 low inventory' },
        { label: 'Plain Bites',         value: '1 not selling',   sub: 'Restock flagged' },
      ],
    },
  ],

  charts: [
    {
      type: 'bar',
      title: 'GMV by Store — Last 7 Days (₹)',
      data: [
        { name: '07 Apr', 'Paksha Kitchen': 38993, 'Desi Tadka': 12400, 'The Brew House': 28700, Freshbowl: 31200, 'QuickBites': 14100 },
        { name: '08 Apr', 'Paksha Kitchen': 40857, 'Desi Tadka': 13200, 'The Brew House': 29100, Freshbowl: 32400, 'QuickBites': 0 },
        { name: '09 Apr', 'Paksha Kitchen': 37502, 'Desi Tadka': 11800, 'The Brew House': 27400, Freshbowl: 30100, 'QuickBites': 9800 },
        { name: '10 Apr', 'Paksha Kitchen': 33796, 'Desi Tadka': 10900, 'The Brew House': 25800, Freshbowl: 29200, 'QuickBites': 12400 },
        { name: '11 Apr', 'Paksha Kitchen': 36210, 'Desi Tadka': 11500, 'The Brew House': 26900, Freshbowl: 30800, 'QuickBites': 11200 },
        { name: '12 Apr', 'Paksha Kitchen': 38440, 'Desi Tadka': 12100, 'The Brew House': 28400, Freshbowl: 31900, 'QuickBites': 13100 },
        { name: '13 Apr', 'Paksha Kitchen': 27471, 'Desi Tadka': 8900, 'The Brew House': 20100, Freshbowl: 22400, 'QuickBites': 0 },
      ],
      lines: [
        { key: 'Paksha Kitchen', color: '#f97316' },
        { key: 'Desi Tadka',     color: '#ef4444' },
        { key: 'The Brew House', color: '#3b82f6' },
        { key: 'Freshbowl',      color: '#22c55e' },
        { key: 'QuickBites',     color: '#a855f7' },
      ],
    },
    {
      type: 'area',
      title: 'Settlement Amount Trend — Last 30 Days (₹)',
      data: [
        { name: '14 Mar', Settled: 22347, Pending: 0 },
        { name: '17 Mar', Settled: 23136, Pending: 0 },
        { name: '19 Mar', Settled: 22347, Pending: 0 },
        { name: '20 Mar', Settled: 22347, Pending: 0 },
        { name: '24 Mar', Settled: 30559, Pending: 0 },
        { name: '25 Mar', Settled: 33435, Pending: 0 },
        { name: '26 Mar', Settled: 30559, Pending: 0 },
        { name: '27 Mar', Settled: 25144, Pending: 0 },
        { name: '01 Apr', Settled: 21333, Pending: 0 },
        { name: '05 Apr', Settled: 29800, Pending: 41500 },
        { name: '10 Apr', Settled: 31200, Pending: 68200 },
        { name: '13 Apr', Settled: 0,     Pending: 133100 },
      ],
      lines: [
        { key: 'Settled', color: '#22c55e' },
        { key: 'Pending', color: '#ef4444' },
      ],
    },
  ],

  grid: [
    { Store: 'Paksha Kitchen',    Location: 'AP81 · Gurugram', 'GMV Today': '₹27,471', 'Settlement Pending': '₹18,540', 'Settlement Status': 'On Track',  'Not Selling': 1, 'Low Inventory': 1, 'Store Status': 'Open' },
    { Store: 'Desi Tadka',        Location: 'CP12 · Gurugram', 'GMV Today': '₹8,900',  'Settlement Pending': '₹68,200', 'Settlement Status': 'Overdue',   'Not Selling': 2, 'Low Inventory': 0, 'Store Status': 'Open' },
    { Store: 'The Brew House',    Location: 'BK04 · Gurugram', 'GMV Today': '₹20,100', 'Settlement Pending': '₹22,400', 'Settlement Status': 'On Track',  'Not Selling': 0, 'Low Inventory': 2, 'Store Status': 'Open' },
    { Store: 'Freshbowl',         Location: 'BKC02 · Mumbai',  'GMV Today': '₹22,400', 'Settlement Pending': '₹18,600', 'Settlement Status': 'On Track',  'Not Selling': 0, 'Low Inventory': 0, 'Store Status': 'Open' },
    { Store: 'QuickBites Express',Location: 'HY07 · Hyderabad','GMV Today': '₹0',       'Settlement Pending': '₹32,100', 'Settlement Status': 'Due Soon',  'Not Selling': 0, 'Low Inventory': 0, 'Store Status': 'Offline' },
    { Store: 'Green Garden Cafe', Location: 'PT03 · Bengaluru','GMV Today': '₹18,900', 'Settlement Pending': '₹24,200', 'Settlement Status': 'On Track',  'Not Selling': 2, 'Low Inventory': 3, 'Store Status': 'Open' },
    { Store: 'Mumbai Tiffins',    Location: 'PW01 · Mumbai',   'GMV Today': '₹16,400', 'Settlement Pending': '₹28,400', 'Settlement Status': 'Due Soon',  'Not Selling': 3, 'Low Inventory': 1, 'Store Status': 'Open' },
    { Store: 'Chai & Co.',        Location: 'PN05 · Pune',     'GMV Today': '₹9,200',  'Settlement Pending': '₹41,500', 'Settlement Status': 'Overdue',   'Not Selling': 4, 'Low Inventory': 2, 'Store Status': 'Open' },
  ],
  columns: ['Store', 'Location', 'GMV Today', 'Settlement Pending', 'Settlement Status', 'Not Selling', 'Low Inventory', 'Store Status'],
  gridTitle: 'All Stores — Live Status',
}

// ─── Regional Head persona ─────────────────────────────────────────────────────
// Oversees 3 AMs managing 24 stores across North + West regions
const rehead = {
  tasksList: [
    { label: 'Approve Q1 settlement exception for 3 overdue vendors', priority: 'high', due: 'Today' },
    { label: 'Review AM performance: Arjun cluster below GMV target', priority: 'high', due: 'Today' },
    { label: '5 stores still to onboard April product catalogue update', priority: 'medium', due: 'This week' },
    { label: 'Settlement reconciliation report — send to finance by EOD', priority: 'medium', due: 'Today' },
  ],
  tasksTitle: 'Regional tasks',

  metrics: [
    { label: 'Total Stores',          value: '24',        sub: '22 active today · 2 offline',  status: 'warning',  icon: 'Store' },
    { label: 'Total GMV This Week',   value: '₹18.2L',    sub: '+8.4% vs last week',            status: 'positive', icon: 'TrendingUp' },
    { label: 'Total GMV This Month',  value: '₹62.4L',    sub: 'Target: ₹80L · 78% achieved',  status: 'warning',  icon: 'Target' },
    { label: 'Total Settlement Pending', value: '₹8.6L',  sub: '6 stores overdue',             status: 'negative', icon: 'AlertCircle' },
    { label: 'Catalogue Issues',      value: '31 items',  sub: 'Not selling across 11 stores',  status: 'warning',  icon: 'PackageX' },
    { label: 'Avg Settlement %',      value: '75%',       sub: 'Post platform fee',             status: 'info',     icon: 'Percent' },
  ],

  actions: [
    { text: '6 stores with settlement overdue >5 days — total ₹2,18,400 blocked', severity: 'high' },
    { text: '2 stores offline today — QuickBites Express (Hyderabad), Snack Box (Pune)', severity: 'high' },
    { text: 'Region GMV 22% below monthly target — 17 days remaining', severity: 'high' },
    { text: 'Arjun Mehta (AM): 3 of 8 stores below weekly GMV target', severity: 'medium' },
    { text: '31 products marked "Not Selling" across 11 stores — revenue leakage', severity: 'medium' },
    { text: '5 stores not updated product catalogue for April — action needed', severity: 'low' },
  ],
  actionsTitle: 'Regional Alerts',

  topFive: [
    {
      title: 'Top 5 Stores — GMV This Month',
      items: [
        { label: 'Paksha Kitchen',    value: '₹3,24,580', sub: 'AP81 · Gurugram · AM: Priya' },
        { label: 'Freshbowl',         value: '₹3,08,200', sub: 'BKC · Mumbai · AM: Priya' },
        { label: 'The Brew House',    value: '₹2,84,900', sub: 'Cyberhub · Gurugram · AM: Arjun' },
        { label: 'Mumbai Tiffins',    value: '₹2,61,400', sub: 'Powai · Mumbai · AM: Priya' },
        { label: 'Green Garden Cafe', value: '₹2,38,700', sub: 'Tech Park · Bengaluru · AM: Rahul' },
      ],
    },
    {
      title: 'Bottom 5 Stores — GMV This Month',
      items: [
        { label: 'QuickBites Express',value: '₹72,400',   sub: 'Offline today · Hyderabad' },
        { label: 'Chai & Co.',        value: '₹91,600',   sub: 'Settlement overdue · Pune' },
        { label: 'Desi Tadka',        value: '₹1,08,200', sub: 'Settlement overdue · Gurugram' },
        { label: 'Snack Box',         value: '₹1,14,100', sub: 'Offline · Pune' },
        { label: 'Plain Bites',       value: '₹1,22,800', sub: 'Catalogue issues · Bengaluru' },
      ],
    },
    {
      title: 'AM Performance — GMV This Month',
      items: [
        { label: 'Priya Sharma',  value: '₹9.8L', sub: '8 stores · 122% of target' },
        { label: 'Rahul Nair',    value: '₹8.4L', sub: '8 stores · 105% of target' },
        { label: 'Arjun Mehta',   value: '₹6.2L', sub: '8 stores · 77% of target ⚠' },
      ],
    },
    {
      title: 'Top 5 Stores — Pending Settlements',
      items: [
        { label: 'Desi Tadka',        value: '₹68,200', sub: '9 days overdue' },
        { label: 'Chai & Co.',        value: '₹41,500', sub: '7 days overdue' },
        { label: 'QuickBites Express',value: '₹32,100', sub: 'Due in 2 days' },
        { label: 'Mumbai Tiffins',    value: '₹28,400', sub: 'Due tomorrow' },
        { label: 'Green Garden Cafe', value: '₹24,200', sub: 'Due in 3 days' },
      ],
    },
  ],

  charts: [
    {
      type: 'area',
      title: 'Regional GMV Trend — Last 4 Weeks (₹)',
      data: [
        { name: 'Wk 1 Mar', GMV: 1240000 },
        { name: 'Wk 2 Mar', GMV: 1380000 },
        { name: 'Wk 3 Mar', GMV: 1520000 },
        { name: 'Wk 4 Mar', GMV: 1680000 },
        { name: 'Wk 1 Apr', GMV: 1720000 },
        { name: 'Wk 2 Apr', GMV: 1820000 },
      ],
      lines: [{ key: 'GMV', color: '#f97316' }],
    },
    {
      type: 'bar',
      title: 'GMV by AM Cluster — This Month (₹)',
      data: [
        { name: 'Priya Sharma', GMV: 980000, Target: 800000 },
        { name: 'Rahul Nair',   GMV: 840000, Target: 800000 },
        { name: 'Arjun Mehta',  GMV: 620000, Target: 800000 },
      ],
      lines: [
        { key: 'GMV',    color: '#f97316' },
        { key: 'Target', color: '#8b949e' },
      ],
    },
    {
      type: 'bar',
      title: 'Settlement Processed vs Pending — Last 6 Weeks (₹)',
      data: [
        { name: 'Wk 4 Feb', Processed: 420000, Pending: 0 },
        { name: 'Wk 1 Mar', Processed: 460000, Pending: 0 },
        { name: 'Wk 2 Mar', Processed: 510000, Pending: 0 },
        { name: 'Wk 3 Mar', Processed: 490000, Pending: 18200 },
        { name: 'Wk 4 Mar', Processed: 540000, Pending: 42800 },
        { name: 'Wk 1 Apr', Processed: 380000, Pending: 218400 },
      ],
      lines: [
        { key: 'Processed', color: '#22c55e' },
        { key: 'Pending',   color: '#ef4444' },
      ],
    },
  ],

  grid: [
    { AM: 'Priya Sharma',  Store: 'Paksha Kitchen',     Location: 'Gurugram', 'GMV Month': '₹3,24,580', 'Settlement': 'On Track',  'Issues': 'Low inventory' },
    { AM: 'Priya Sharma',  Store: 'Freshbowl',          Location: 'Mumbai',   'GMV Month': '₹3,08,200', 'Settlement': 'On Track',  'Issues': '—' },
    { AM: 'Priya Sharma',  Store: 'Mumbai Tiffins',     Location: 'Mumbai',   'GMV Month': '₹2,61,400', 'Settlement': 'Due Soon',  'Issues': '3 not selling' },
    { AM: 'Rahul Nair',    Store: 'Green Garden Cafe',  Location: 'Bengaluru','GMV Month': '₹2,38,700', 'Settlement': 'On Track',  'Issues': '2 not selling' },
    { AM: 'Rahul Nair',    Store: 'The Brew House',     Location: 'Gurugram', 'GMV Month': '₹2,84,900', 'Settlement': 'On Track',  'Issues': 'Low inventory' },
    { AM: 'Arjun Mehta',   Store: 'Desi Tadka',         Location: 'Gurugram', 'GMV Month': '₹1,08,200', 'Settlement': 'Overdue',   'Issues': '2 not selling' },
    { AM: 'Arjun Mehta',   Store: 'Chai & Co.',         Location: 'Pune',     'GMV Month': '₹91,600',  'Settlement': 'Overdue',   'Issues': '4 not selling' },
    { AM: 'Arjun Mehta',   Store: 'QuickBites Express', Location: 'Hyderabad','GMV Month': '₹72,400',  'Settlement': 'Due Soon',  'Issues': 'Offline today' },
  ],
  columns: ['AM', 'Store', 'Location', 'GMV Month', 'Settlement', 'Issues'],
  gridTitle: 'All Stores — Regional Overview',
}

// ─── Export ────────────────────────────────────────────────────────────────────
export const vendorStoresData = { vendor, am, rehead }
