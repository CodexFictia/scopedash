import { Square, Clock } from 'lucide-react'

/**
 * Compact horizontal strip of "today's tasks" rendered at the top of a page.
 * tasks: [{ label, due, priority }]
 */
const PRIORITY_COLOR = { high: '#f85149', medium: '#d29922', low: '#8b949e' }

export default function TasksStrip({ title = 'Tasks for today', tasks = [] }) {
  return (
    <div
      style={{
        background: '#1c2333',
        border: '1px solid #30363d',
        borderRadius: 8,
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: '#8b949e',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          flexShrink: 0,
        }}
      >
        {title}
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          paddingBottom: 2,
        }}
      >
        {tasks.map((t, i) => {
          const dot = PRIORITY_COLOR[t.priority] || '#8b949e'
          return (
            <div
              key={i}
              style={{
                background: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: 6,
                padding: '6px 10px',
                fontSize: 11,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                color: '#e6edf3',
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: 3, background: dot, flexShrink: 0 }} />
              <Square size={11} color="#656d76" />
              <span>{t.label}</span>
              {t.due && (
                <span style={{ color: '#8b949e', fontSize: 10, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Clock size={9} /> {t.due}
                </span>
              )}
            </div>
          )
        })}
        {!tasks.length && (
          <div style={{ fontSize: 11, color: '#656d76' }}>No tasks pinned for today.</div>
        )}
      </div>
    </div>
  )
}
