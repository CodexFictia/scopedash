import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

export const CHART_COLORS = ['#f97316', '#388bfd', '#3fb950', '#d29922', '#f85149', '#8b5cf6', '#06b6d4']

const Tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#1c2333', border: '1px solid #30363d', borderRadius: 6, padding: '8px 12px', fontSize: 11 }}>
      {label && <p style={{ color: '#8b949e', marginBottom: 4 }}>{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color, margin: '2px 0' }}>{p.name}: <strong style={{ color: '#e6edf3' }}>{p.value}</strong></p>
      ))}
    </div>
  )
}

export default function TrendChart({ type = 'line', title, data, lines, height = 210 }) {
  const axisStyle = { stroke: '#656d76', tick: { fontSize: 10, fill: '#656d76' } }

  const inner = (() => {
    if (type === 'bar') return (
      <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
        <XAxis dataKey="name" {...axisStyle} />
        <YAxis {...axisStyle} />
        <Tooltip content={<Tip />} />
        <Legend wrapperStyle={{ fontSize: 11, color: '#8b949e' }} />
        {lines.map((l, i) => <Bar key={l.key} dataKey={l.key} name={l.label} fill={CHART_COLORS[i]} radius={[2, 2, 0, 0]} maxBarSize={32} />)}
      </BarChart>
    )
    if (type === 'area') return (
      <AreaChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <defs>
          {lines.map((l, i) => (
            <linearGradient key={l.key} id={`g${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={CHART_COLORS[i]} stopOpacity={0.25} />
              <stop offset="95%" stopColor={CHART_COLORS[i]} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
        <XAxis dataKey="name" {...axisStyle} />
        <YAxis {...axisStyle} />
        <Tooltip content={<Tip />} />
        <Legend wrapperStyle={{ fontSize: 11, color: '#8b949e' }} />
        {lines.map((l, i) => (
          <Area key={l.key} type="monotone" dataKey={l.key} name={l.label} stroke={CHART_COLORS[i]} fill={`url(#g${i})`} strokeWidth={2} dot={false} />
        ))}
      </AreaChart>
    )
    if (type === 'pie') return (
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={52} outerRadius={78} dataKey="value" paddingAngle={2}>
          {data.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
        </Pie>
        <Tooltip content={<Tip />} />
        <Legend wrapperStyle={{ fontSize: 11, color: '#8b949e' }} />
      </PieChart>
    )
    // default: line
    return (
      <LineChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
        <XAxis dataKey="name" {...axisStyle} />
        <YAxis {...axisStyle} />
        <Tooltip content={<Tip />} />
        <Legend wrapperStyle={{ fontSize: 11, color: '#8b949e' }} />
        {lines.map((l, i) => (
          <Line key={l.key} type="monotone" dataKey={l.key} name={l.label} stroke={CHART_COLORS[i]} strokeWidth={2} dot={{ r: 2 }} activeDot={{ r: 4 }} />
        ))}
      </LineChart>
    )
  })()

  return (
    <div style={{ background: '#1c2333', border: '1px solid #30363d', borderRadius: 8, padding: '14px 16px' }}>
      {title && <h3 style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 600, color: '#e6edf3' }}>{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>{inner}</ResponsiveContainer>
    </div>
  )
}
