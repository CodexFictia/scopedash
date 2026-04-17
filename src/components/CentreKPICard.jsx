/**
 * Rich multi-metric card for Regional Head persona.
 * Shows per-centre aggregated KPIs with health sparkline and status badge.
 * Each mini-metric is clickable to open a modal.
 */
import { Building2, ChevronRight } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'
import { useTheme } from '../ThemeContext.jsx'

const STATUS_COLOR = {
  positive: '#3fb950', warning: '#d29922', negative: '#f85149',
  info: '#388bfd', neutral: '#8b949e',
}
const STATUS_BG = {
  excellent: { bg: 'rgba(63,185,80,0.12)', color: '#3fb950', label: 'Excellent' },
  good:      { bg: 'rgba(56,139,253,0.12)', color: '#388bfd', label: 'Good' },
  monitor:   { bg: 'rgba(210,153,34,0.12)', color: '#d29922', label: 'Monitor' },
  'at-risk': { bg: 'rgba(248,81,73,0.12)', color: '#f85149', label: 'At Risk' },
}

function MiniMetric({ label, value, status = 'neutral', highlighted, onClick, t }) {
  const color = STATUS_COLOR[status] || STATUS_COLOR.neutral
  return (
    <div
      onClick={onClick}
      title={onClick ? `Click to view ${label} details` : undefined}
      style={{
        background: highlighted ? color + '14' : t.bgCardHover,
        border: `1px solid ${highlighted ? color + '50' : t.borderSub}`,
        borderRadius: 6, padding: '8px 10px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.15s', position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => { if (onClick) e.currentTarget.style.borderColor = color + '80' }}
      onMouseLeave={e => { if (onClick) e.currentTarget.style.borderColor = highlighted ? color + '50' : t.borderSub }}
    >
      {highlighted && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: color, borderRadius: '6px 6px 0 0' }} />
      )}
      <div style={{ fontSize: 10, color: t.textMuted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: t.textPrimary }}>{value}</div>
      {onClick && (
        <ChevronRight size={9} color={color} style={{ position: 'absolute', top: 8, right: 6, opacity: 0.6 }} />
      )}
    </div>
  )
}

export default function CentreKPICard({ name, location, cm, status = 'good', metrics = [], sparkline = [], onMetricClick }) {
  const { t } = useTheme()
  const badge = STATUS_BG[status] || STATUS_BG.good

  return (
    <div style={{
      background: t.bgCard, border: `1px solid ${t.border}`,
      borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column',
    }}>
      {/* Card header */}
      <div style={{
        padding: '12px 14px 10px',
        borderBottom: `1px solid ${t.borderSub}`,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg,#f97316,#ea580c)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Building2 size={14} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: t.textPrimary }}>{name}</div>
            <div style={{ fontSize: 11, color: t.textMuted, marginTop: 1 }}>
              {location}{cm ? ` · CM: ${cm}` : ''}
            </div>
          </div>
        </div>
        <span style={{
          background: badge.bg, color: badge.color,
          fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '3px 8px',
          textTransform: 'uppercase', letterSpacing: '0.5px',
        }}>
          {badge.label}
        </span>
      </div>

      {/* Mini metrics grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, padding: '10px 12px',
      }}>
        {metrics.map((m, i) => (
          <MiniMetric
            key={i}
            label={m.label}
            value={m.value}
            status={m.status}
            highlighted={m.highlighted}
            onClick={m.modal ? () => onMetricClick && onMetricClick(m.modal) : undefined}
            t={t}
          />
        ))}
      </div>

      {/* Mini sparkline */}
      {sparkline && sparkline.length > 1 && (
        <div style={{ height: 40, padding: '0 12px 10px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkline.map((v, i) => ({ v, i }))}>
              <defs>
                <linearGradient id={`sg-${name}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone" dataKey="v"
                stroke="#f97316" strokeWidth={1.5}
                fill={`url(#sg-${name})`} dot={false}
              />
              <Tooltip
                contentStyle={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 4, fontSize: 10, color: t.textPrimary }}
                labelFormatter={() => 'Health'}
                formatter={v => [v, '']}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
