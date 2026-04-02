import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

const STATUS_COLOR = {
  positive: '#3fb950', warning: '#d29922', negative: '#f85149',
  info: '#388bfd', neutral: '#8b949e', purple: '#8b5cf6',
}

export default function MetricCard({ label, value, change, changeLabel, trend, status = 'neutral', icon: Icon, highlight }) {
  const color = STATUS_COLOR[status]
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus
  const trendColor = trend === 'up' ? '#3fb950' : trend === 'down' ? '#f85149' : '#8b949e'

  return (
    <div style={{
      background: '#1c2333', border: `1px solid ${highlight ? color + '60' : '#30363d'}`,
      borderRadius: 8, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top glow if highlight */}
      {highlight && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: color, borderRadius: '8px 8px 0 0' }} />
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: 1.3, maxWidth: '80%' }}>
          {label}
        </span>
        {Icon && (
          <div style={{ width: 28, height: 28, borderRadius: 6, background: color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={13} color={color} />
          </div>
        )}
      </div>

      <div style={{ fontSize: 22, fontWeight: 700, color: '#e6edf3', lineHeight: 1 }}>{value}</div>

      {change !== undefined && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11 }}>
          <TrendIcon size={11} color={trendColor} />
          <span style={{ color: trendColor, fontWeight: 500 }}>{change}</span>
          {changeLabel && <span style={{ color: '#656d76' }}> {changeLabel}</span>}
        </div>
      )}
    </div>
  )
}
