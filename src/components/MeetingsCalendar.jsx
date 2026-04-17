/**
 * Monthly calendar view for meetings — Centre Manager persona.
 * Color-coded by status: booked=blue, pending=amber, completed=green, violated=red.
 * Click any meeting to drill down: tasks status + CSAT feedback form.
 */
import { useState } from 'react'
import { Calendar, CheckCircle2, Clock, AlertCircle, Star, ChevronDown, ChevronUp } from 'lucide-react'
import Modal from './Modal'
import { useTheme } from '../ThemeContext.jsx'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// April 2026: April 1 = Wednesday → offset 2 from Monday
const MONTH_OFFSET = 2
const DAYS_IN_MONTH = 30
const TOTAL_CELLS = Math.ceil((MONTH_OFFSET + DAYS_IN_MONTH) / 7) * 7 // 35
const TODAY = 16

const STATUS = {
  booked:    { bg: 'rgba(56,139,253,0.18)',  text: '#388bfd', dot: '#388bfd',  label: 'Booked' },
  pending:   { bg: 'rgba(210,153,34,0.18)',  text: '#d29922', dot: '#d29922',  label: 'Pending' },
  completed: { bg: 'rgba(63,185,80,0.18)',   text: '#3fb950', dot: '#3fb950',  label: 'Completed' },
  violated:  { bg: 'rgba(248,81,73,0.18)',   text: '#f85149', dot: '#f85149',  label: 'Past SLA' },
}

const TASK_COLOR = { completed: '#3fb950', 'on-time': '#388bfd', delayed: '#f85149', pending: '#d29922' }
const TASK_ICON  = { completed: CheckCircle2, 'on-time': CheckCircle2, delayed: AlertCircle, pending: Clock }

function StarRating({ value, onChange }) {
  const [hover, setHover] = useState(0)
  const { t } = useTheme()
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map(n => (
        <button key={n} onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}
        >
          <Star size={20}
            fill={(hover || value) >= n ? '#f97316' : 'none'}
            color={(hover || value) >= n ? '#f97316' : t.border}
          />
        </button>
      ))}
    </div>
  )
}

export default function MeetingsCalendar({ title = 'Meetings Calendar', meetings = [] }) {
  const { t } = useTheme()
  const [selected, setSelected]     = useState(null)
  const [scores, setScores]         = useState({})
  const [comments, setComments]     = useState({})
  const [submitted, setSubmitted]   = useState({})
  const [collapsed, setCollapsed]   = useState(false)

  // Group by day (parse "Apr DD" or "YYYY-04-DD")
  const byDay = {}
  meetings.forEach(m => {
    const s = m.date || ''
    const match = s.match(/Apr\s+(\d+)/) || s.match(/2026-04-(\d+)/)
    const d = match ? parseInt(match[1]) : null
    if (d && d >= 1 && d <= 30) {
      if (!byDay[d]) byDay[d] = []
      byDay[d].push(m)
    }
  })

  const cells = Array.from({ length: TOTAL_CELLS }, (_, i) => {
    const day = i - MONTH_OFFSET + 1
    return { day: day >= 1 && day <= DAYS_IN_MONTH ? day : null, mtgs: byDay[day] || [] }
  })

  const counts = { booked: 0, pending: 0, completed: 0, violated: 0 }
  meetings.forEach(m => { if (counts[m.status] !== undefined) counts[m.status]++ })

  return (
    <>
      <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 10, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px', borderBottom: `1px solid ${t.border}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Calendar size={15} color="#f97316" />
            <span style={{ fontWeight: 700, fontSize: 14, color: t.textPrimary }}>{title}</span>
            <span style={{ fontSize: 12, color: t.textMuted }}>April 2026</span>
            {/* Count pills */}
            {Object.entries(counts).map(([key, n]) => n > 0 && (
              <span key={key} style={{
                background: STATUS[key].bg, color: STATUS[key].text,
                fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '2px 7px',
              }}>
                {n} {STATUS[key].label}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Legend */}
            <div style={{ display: 'flex', gap: 10 }}>
              {Object.entries(STATUS).map(([k, v]) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: v.dot }} />
                  <span style={{ fontSize: 10, color: t.textMuted }}>{v.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setCollapsed(c => !c)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: t.textMuted, padding: 4 }}
            >
              {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
            </button>
          </div>
        </div>

        {!collapsed && (
          <>
            {/* Day-of-week headers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: `1px solid ${t.borderSub}` }}>
              {DAYS.map(d => (
                <div key={d} style={{ padding: '5px 0', textAlign: 'center', fontSize: 10, fontWeight: 700, color: t.textSubtle, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {cells.map((cell, i) => {
                const isToday = cell.day === TODAY
                const isPast  = cell.day && cell.day < TODAY
                const col = i % 7
                const row = Math.floor(i / 7)
                const totalRows = Math.floor(TOTAL_CELLS / 7)

                return (
                  <div key={i} style={{
                    minHeight: 88, padding: '5px 5px',
                    borderRight: col < 6 ? `1px solid ${t.borderSub}` : 'none',
                    borderBottom: row < totalRows - 1 ? `1px solid ${t.borderSub}` : 'none',
                    background: isToday
                      ? 'rgba(249,115,22,0.05)'
                      : isPast ? t.bgCardHover : 'transparent',
                  }}>
                    {cell.day && (
                      <>
                        {/* Day number */}
                        <div style={{ marginBottom: 3 }}>
                          {isToday ? (
                            <span style={{
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              width: 20, height: 20, borderRadius: '50%', background: '#f97316',
                              fontSize: 11, fontWeight: 700, color: '#fff',
                            }}>
                              {cell.day}
                            </span>
                          ) : (
                            <span style={{ fontSize: 11, color: isPast ? t.textSubtle : t.textMuted, fontWeight: 400 }}>
                              {cell.day}
                            </span>
                          )}
                        </div>

                        {/* Meeting pills */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {cell.mtgs.slice(0, 3).map((m, mi) => {
                            const sc = STATUS[m.status] || STATUS.booked
                            return (
                              <button key={mi} onClick={() => setSelected(m)}
                                style={{
                                  background: sc.bg, color: sc.text,
                                  border: 'none', borderRadius: 3, cursor: 'pointer',
                                  padding: '2px 5px', textAlign: 'left', fontSize: 9,
                                  fontWeight: 600, lineHeight: 1.4,
                                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                  width: '100%',
                                }}
                              >
                                {m.time ? m.time.split('·')[1]?.trim() + ' ' : ''}{m.client || m.title}
                              </button>
                            )
                          })}
                          {cell.mtgs.length > 3 && (
                            <span style={{ fontSize: 9, color: t.textSubtle, paddingLeft: 2 }}>
                              +{cell.mtgs.length - 3} more
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>

      {/* Meeting detail modal */}
      {selected && (() => {
        const m = selected
        const sc = STATUS[m.status] || STATUS.booked
        const score   = scores[m.id]   || m.csatScore   || 0
        const comment = comments[m.id] !== undefined ? comments[m.id] : (m.csatComment || '')
        const done    = submitted[m.id] || !!m.csatScore
        const isCompleted = m.status === 'completed'

        const taskCounts = (m.tasks || []).reduce((acc, task) => {
          acc[task.status] = (acc[task.status] || 0) + 1; return acc
        }, {})

        return (
          <Modal
            title={m.title}
            subtitle={`${m.client}  ·  ${m.date}  ·  ${m.type || 'Meeting'}`}
            onClose={() => setSelected(null)}
            width={560}
          >
            {/* Status row */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
              <span style={{ background: sc.bg, color: sc.text, fontSize: 11, fontWeight: 700, borderRadius: 20, padding: '3px 10px' }}>
                {sc.label}
              </span>
              {m.am    && <span style={{ fontSize: 12, color: t.textMuted }}>AM: {m.am}</span>}
              {m.time  && <span style={{ fontSize: 12, color: t.textMuted }}>{m.time}</span>}
            </div>

            {/* Task summary strip */}
            {m.tasks && m.tasks.length > 0 && (
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                {Object.entries(taskCounts).map(([status, count]) => {
                  const c = TASK_COLOR[status] || '#8b949e'
                  return (
                    <span key={status} style={{
                      background: c + '18', color: c,
                      fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '2px 8px',
                      textTransform: 'capitalize',
                    }}>
                      {count} {status}
                    </span>
                  )
                })}
              </div>
            )}

            {/* Tasks */}
            {m.tasks && m.tasks.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 8 }}>
                  Meeting Tasks
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {m.tasks.map((task, i) => {
                    const c = TASK_COLOR[task.status] || '#8b949e'
                    const TIcon = TASK_ICON[task.status] || Clock
                    return (
                      <div key={i} style={{
                        display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 8, alignItems: 'center',
                        background: t.bgCardHover, border: `1px solid ${t.borderSub}`,
                        borderRadius: 6, padding: '8px 10px',
                      }}>
                        <TIcon size={13} color={c} />
                        <div>
                          <div style={{ fontSize: 12, color: t.textPrimary }}>{task.label}</div>
                          <div style={{ fontSize: 10, color: t.textMuted, marginTop: 1 }}>
                            Due {task.due}
                            {task.delayedBy && <span style={{ color: '#f85149' }}> · Delayed {task.delayedBy}</span>}
                          </div>
                        </div>
                        <span style={{ fontSize: 10, fontWeight: 700, color: c, background: c + '18', borderRadius: 20, padding: '2px 8px', textTransform: 'capitalize', whiteSpace: 'nowrap' }}>
                          {task.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CSAT — completed meetings only */}
            {isCompleted && (
              <div style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.18)', borderRadius: 8, padding: '14px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: t.textPrimary, marginBottom: 10 }}>
                  Client Meeting Feedback
                </div>
                {done ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#3fb950', fontSize: 13 }}>
                    <CheckCircle2 size={16} /> Feedback recorded · {score}/5 stars
                    {comment && <span style={{ color: t.textMuted, fontSize: 11 }}>· "{comment}"</span>}
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontSize: 11, color: t.textMuted, marginBottom: 6 }}>Overall meeting rating</div>
                      <StarRating value={score} onChange={v => setScores(s => ({ ...s, [m.id]: v }))} />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 11, color: t.textMuted, marginBottom: 6 }}>Client notes / feedback</div>
                      <textarea
                        value={comment}
                        onChange={e => setComments(s => ({ ...s, [m.id]: e.target.value }))}
                        placeholder="e.g. Client satisfied with resolution. Flagged renewal discussion for next month."
                        rows={3}
                        style={{
                          width: '100%', background: t.bgInput, border: `1px solid ${t.border}`,
                          borderRadius: 6, padding: '8px 10px', color: t.textPrimary, fontSize: 12,
                          resize: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <button
                      onClick={() => score && setSubmitted(s => ({ ...s, [m.id]: true }))}
                      disabled={!score}
                      style={{
                        background: score ? 'rgba(249,115,22,0.15)' : t.bgCardHover,
                        border: `1px solid ${score ? 'rgba(249,115,22,0.35)' : t.border}`,
                        color: score ? '#f97316' : t.textMuted, borderRadius: 6,
                        cursor: score ? 'pointer' : 'default', padding: '6px 18px',
                        fontSize: 12, fontWeight: 600,
                      }}
                    >
                      Submit Feedback
                    </button>
                  </>
                )}
              </div>
            )}
          </Modal>
        )
      })()}
    </>
  )
}
