import { useState } from 'react'

/**
 * Meetings grid with All / Pending / Completed filter tabs.
 * meetings: [{ title, client, date, type, state: 'pending'|'completed'|'booked' }]
 */
const STATE_COLOR = {
  completed: '#3fb950',
  pending: '#d29922',
  booked: '#388bfd',
  violated: '#f85149',
}

export default function MeetingsFilterableGrid({ title = 'Meetings', meetings = [] }) {
  const [filter, setFilter] = useState('all')

  const counts = {
    all: meetings.length,
    pending: meetings.filter((m) => m.state === 'pending' || m.state === 'booked').length,
    completed: meetings.filter((m) => m.state === 'completed').length,
  }

  const filtered =
    filter === 'all'
      ? meetings
      : filter === 'pending'
      ? meetings.filter((m) => m.state === 'pending' || m.state === 'booked')
      : meetings.filter((m) => m.state === 'completed')

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'completed', label: 'Completed' },
  ]

  return (
    <div
      style={{
        background: '#1c2333',
        border: '1px solid #30363d',
        borderRadius: 8,
        padding: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
          gap: 10,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3' }}>{title}</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {tabs.map((t) => {
            const active = filter === t.id
            return (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                style={{
                  padding: '5px 12px',
                  fontSize: 11,
                  borderRadius: 14,
                  cursor: 'pointer',
                  border: `1px solid ${active ? '#f97316' : '#30363d'}`,
                  background: active ? 'rgba(249,115,22,0.12)' : 'transparent',
                  color: active ? '#f97316' : '#8b949e',
                  fontWeight: active ? 600 : 400,
                  transition: 'all 0.15s',
                }}
              >
                {t.label} ({counts[t.id]})
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ color: '#656d76', textAlign: 'left' }}>
              <th style={{ padding: '6px 8px', fontWeight: 500 }}>Meeting</th>
              <th style={{ padding: '6px 8px', fontWeight: 500 }}>Client</th>
              <th style={{ padding: '6px 8px', fontWeight: 500 }}>Date</th>
              <th style={{ padding: '6px 8px', fontWeight: 500 }}>Type</th>
              <th style={{ padding: '6px 8px', fontWeight: 500 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m, i) => (
              <tr key={i} style={{ borderTop: '1px solid #30363d', color: '#e6edf3' }}>
                <td style={{ padding: '8px' }}>{m.title}</td>
                <td style={{ padding: '8px' }}>{m.client}</td>
                <td style={{ padding: '8px', color: '#8b949e' }}>{m.date}</td>
                <td style={{ padding: '8px', color: '#8b949e' }}>{m.type}</td>
                <td style={{ padding: '8px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: 10,
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: 'capitalize',
                      color: STATE_COLOR[m.state] || '#8b949e',
                      background: (STATE_COLOR[m.state] || '#8b949e') + '20',
                    }}
                  >
                    {m.state}
                  </span>
                </td>
              </tr>
            ))}
            {!filtered.length && (
              <tr>
                <td colSpan={5} style={{ padding: 14, color: '#656d76', textAlign: 'center' }}>
                  No meetings in this view.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
