import { TrendingUp, TrendingDown, Minus, ChevronRight } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

const STATUS_COLOR = {
  positive: '#3fb950', warning: '#d29922', negative: '#f85149',
  info: '#388bfd', neutral: '#8b949e', purple: '#8b5cf6',
}

export default function MetricCard({ label, value, sub, change, changeLabel, trend, status = 'neutral', icon: Icon, highlight, onClick }) {
  const { t } = useTheme()
  const color = STATUS_COLOR[status]
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus
  const trendColor = trend === 'up' ? '#3fb950' : trend === 'down' ? '#f85149' : '#8b949e'
  const isClickable = !!onClick

  return (
    <div
      onClick={onClick}
      title={isClickable ? `Click to view ${label} details` : undefined}
      style={{
        background: t.bgCard,
        border: `1px solid ${highlight ? color + '60' : t.border}`,
        borderRadius: 8, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8,
        position: 'relative', overflow: 'hidden',
        cursor: isClickable ? 'pointer' : 'default',
        transition: isClickable ? 'border-color 0.15s, background 0.15s' : 'none',
      }}
      onMouseEnter={e => { if (isClickable) { e.currentTarget.style.background = t.bgCardHover; e.currentTarget.style.borderColor = color + '90' } }}
      onMouseLeave={e => { if (isClickable) { e.currentTarget.style.background = t.bgCard; e.currentTarget.style.borderColor = highlight ? color + '60' : t.border } }}
    >
      {/* Top glow strip if highlight */}
      {highlight && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: color, borderRadius: '8px 8px 0 0' }} />
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: 1.3, maxWidth: '78%' }}>
          {label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          {Icon && (
            <div style={{ width: 26, height: 26, borderRadius: 6, background: color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={12} color={color} />
            </div>
          )}
          {isClickable && <ChevronRight size={10} color={color} style={{ opacity: 0.7 }} />}
        </div>
      </div>

      <div style={{ fontSize: 22, fontWeight: 700, color: t.textPrimary, lineHeight: 1 }}>{value}</div>

      {(sub || change) !== undefined && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11 }}>
          {trend && <TrendIcon size={11} color={trendColor} />}
          <span style={{ color: trend ? trendColor : t.textMuted, fontWeight: trend ? 500 : 400 }}>
            {sub || change}
          </span>
          {changeLabel && <span style={{ color: t.textSubtle }}> {changeLabel}</span>}
        </div>
      )}
    </div>
  )
}
