/**
 * Two-tiered composite card showing Total = sum of segments.
 * Tier 1: big total value + subtitle.
 * Tier 2: horizontal stacked bar + legend with label/value/share.
 *
 * Used for Tasks (Open + Closed-in-SLA + Violated) and
 * Meetings (Booked + Pending + Completed).
 */
import { useTheme } from '../ThemeContext.jsx'

export default function CompositeRangeCard({ title, total, subtitle, segments = [], icon: Icon, accent = '#f97316', onClick }) {
  const { t } = useTheme()
  const sum = segments.reduce((s, x) => s + (Number(x.value) || 0), 0) || 1
  const fmt = (n) => (n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 1 : 2) + 'K' : n.toLocaleString())

  return (
    <div
      onClick={onClick}
      title={onClick ? `Click to view all ${title.toLowerCase()} details` : undefined}
      style={{
        background: t.bgCard,
        border: `1px solid ${accent}40`,
        borderRadius: 8,
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        position: 'relative',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.15s, background 0.15s',
      }}
      onMouseEnter={e => { if (onClick) { e.currentTarget.style.borderColor = accent + '80'; e.currentTarget.style.background = t.bgCardHover } }}
      onMouseLeave={e => { if (onClick) { e.currentTarget.style.borderColor = accent + '40'; e.currentTarget.style.background = t.bgCard } }}
    >
      {/* accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: accent }} />

      {/* Tier 1: total */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: t.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              lineHeight: 1.3,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: t.textPrimary,
              marginTop: 6,
              lineHeight: 1,
            }}
          >
            {fmt(total ?? sum)}
          </div>
          {subtitle && (
            <div style={{ fontSize: 11, color: t.textSubtle, marginTop: 4 }}>{subtitle}</div>
          )}
        </div>
        {Icon && (
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              background: accent + '20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Icon size={15} color={accent} />
          </div>
        )}
      </div>

      {/* Tier 2: stacked bar */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: 12,
          borderRadius: 6,
          overflow: 'hidden',
          background: t.bgRoot,
          border: `1px solid ${t.border}`,
        }}
      >
        {segments.map((s, i) => (
          <div
            key={i}
            title={`${s.label}: ${s.value}`}
            style={{
              flex: (Number(s.value) || 0) + 0.001,
              background: s.color,
              borderRight: i < segments.length - 1 ? `1px solid ${t.bgRoot}` : 'none',
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {segments.map((s, i) => {
          const pct = Math.round(((Number(s.value) || 0) / sum) * 100)
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
              <div style={{ width: 9, height: 9, borderRadius: 2, background: s.color, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: t.textMuted }}>{s.label}</span>
              <span style={{ fontSize: 12, color: t.textPrimary, fontWeight: 700 }}>{fmt(s.value)}</span>
              <span style={{ fontSize: 10, color: t.textSubtle }}>({pct}%)</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
