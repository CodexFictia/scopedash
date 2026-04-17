import { Square, Clock } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

/**
 * Compact horizontal strip of "today's tasks" rendered at the top of a page.
 * tasks: [{ label, due, priority }]
 */
const PRIORITY_COLOR = { high: '#f85149', medium: '#d29922', low: '#8b949e' }

export default function TasksStrip({ title = 'Tasks for today', tasks = [] }) {
  const { t } = useTheme()
  return (
    <div
      style={{
        background: t.bgCard,
        border: `1px solid ${t.border}`,
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
          color: t.textMuted,
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
        {tasks.map((task, i) => {
          const dot = PRIORITY_COLOR[task.priority] || '#8b949e'
          return (
            <div
              key={i}
              style={{
                background: t.bgRoot,
                border: `1px solid ${t.border}`,
                borderRadius: 6,
                padding: '6px 10px',
                fontSize: 11,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                color: t.textPrimary,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: 3, background: dot, flexShrink: 0 }} />
              <Square size={11} color={t.textSubtle} />
              <span>{task.label}</span>
              {task.due && (
                <span style={{ color: t.textMuted, fontSize: 10, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Clock size={9} /> {task.due}
                </span>
              )}
            </div>
          )
        })}
        {!tasks.length && (
          <div style={{ fontSize: 11, color: t.textSubtle }}>No tasks pinned for today.</div>
        )}
      </div>
    </div>
  )
}
