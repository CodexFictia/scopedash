/**
 * Dispute management panel for Centre Manager persona.
 * Shows open disputes with approve / reject actions and CN generation.
 */
import { useState } from 'react'
import { CheckCircle2, XCircle, FileText, Bell, ChevronDown, ChevronRight } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

const STATUS_STYLE = {
  'CN Pending':  { color: '#d29922', bg: 'rgba(210,153,34,0.12)' },
  'Approved':    { color: '#3fb950', bg: 'rgba(63,185,80,0.12)' },
  'Rejected':    { color: '#f85149', bg: 'rgba(248,81,73,0.12)' },
  'Under Review':{ color: '#388bfd', bg: 'rgba(56,139,253,0.12)' },
  'CN Issued':   { color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)' },
}

function StatusBadge({ status }) {
  const s = STATUS_STYLE[status] || { color: '#8b949e', bg: 'rgba(139,148,158,0.1)' }
  return (
    <span style={{
      background: s.bg, color: s.color,
      fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '2px 8px',
      textTransform: 'uppercase', letterSpacing: '0.4px', whiteSpace: 'nowrap',
    }}>
      {status}
    </span>
  )
}

export default function DisputePanel({ title = 'Dispute Management', disputes = [] }) {
  const { t } = useTheme()
  const [rows, setRows] = useState(disputes)
  const [expanded, setExpanded] = useState(null)
  const [notification, setNotification] = useState(null)

  const updateRow = (id, patch) => {
    setRows(r => r.map(x => x.id === id ? { ...x, ...patch } : x))
    if (patch.status === 'Approved') showNotif(`Dispute ${id} approved — CN generation ready`)
    if (patch.status === 'Rejected') showNotif(`Dispute ${id} rejected — client notified`)
    if (patch.cnIssued) showNotif(`Credit note issued for ${id} — email sent to client`)
  }

  const showNotif = msg => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  const openCount = rows.filter(r => !['Rejected', 'CN Issued'].includes(r.status)).length

  return (
    <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 10 }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px', borderBottom: `1px solid ${t.border}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <FileText size={15} color="#f97316" />
          <span style={{ fontWeight: 700, fontSize: 14, color: t.textPrimary }}>{title}</span>
          {openCount > 0 && (
            <span style={{
              background: 'rgba(249,115,22,0.15)', color: '#f97316',
              fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '2px 7px',
            }}>
              {openCount} open
            </span>
          )}
        </div>
      </div>

      {/* Toast notification */}
      {notification && (
        <div style={{
          margin: '8px 16px', padding: '8px 12px', borderRadius: 6,
          background: 'rgba(63,185,80,0.12)', border: '1px solid rgba(63,185,80,0.3)',
          color: '#3fb950', fontSize: 12,
        }}>
          ✓ {notification}
        </div>
      )}

      {/* Rows */}
      {rows.length === 0 ? (
        <div style={{ padding: '24px', textAlign: 'center', color: t.textMuted, fontSize: 13 }}>
          No disputes open
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rows.map((d, i) => {
            const isOpen = expanded === d.id
            return (
              <div
                key={d.id}
                style={{ borderBottom: i < rows.length - 1 ? `1px solid ${t.borderSub}` : 'none' }}
              >
                {/* Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 90px 90px auto',
                  gap: 12, padding: '10px 16px', alignItems: 'center',
                }}>
                  {/* Client + ID */}
                  <div>
                    <button
                      onClick={() => setExpanded(isOpen ? null : d.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 4 }}
                    >
                      {isOpen ? <ChevronDown size={12} color={t.textMuted} /> : <ChevronRight size={12} color={t.textMuted} />}
                      <span style={{ fontWeight: 600, fontSize: 13, color: t.textPrimary }}>{d.client}</span>
                    </button>
                    <div style={{ fontSize: 10, color: t.textMuted, marginTop: 2, paddingLeft: 16 }}>{d.id} · {d.category}</div>
                  </div>

                  {/* Amount + raised */}
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: t.textPrimary }}>{d.amount}</div>
                    <div style={{ fontSize: 10, color: t.textMuted, marginTop: 1 }}>Raised {d.raised} · {d.overdueDays}d old</div>
                  </div>

                  {/* Status badge */}
                  <StatusBadge status={d.status} />

                  {/* Action buttons */}
                  <div style={{ display: 'flex', gap: 4 }}>
                    {d.status === 'Under Review' && (
                      <>
                        <button
                          onClick={() => updateRow(d.id, { status: 'Approved' })}
                          title="Approve dispute"
                          style={{
                            background: 'rgba(63,185,80,0.12)', border: '1px solid rgba(63,185,80,0.3)',
                            borderRadius: 4, cursor: 'pointer', padding: '4px 6px',
                            display: 'flex', alignItems: 'center', color: '#3fb950',
                          }}
                        >
                          <CheckCircle2 size={13} />
                        </button>
                        <button
                          onClick={() => updateRow(d.id, { status: 'Rejected' })}
                          title="Reject dispute"
                          style={{
                            background: 'rgba(248,81,73,0.12)', border: '1px solid rgba(248,81,73,0.3)',
                            borderRadius: 4, cursor: 'pointer', padding: '4px 6px',
                            display: 'flex', alignItems: 'center', color: '#f85149',
                          }}
                        >
                          <XCircle size={13} />
                        </button>
                      </>
                    )}
                    {d.status === 'Approved' && !d.cnIssued && (
                      <button
                        onClick={() => updateRow(d.id, { status: 'CN Issued', cnIssued: true })}
                        style={{
                          background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)',
                          borderRadius: 4, cursor: 'pointer', padding: '4px 8px',
                          color: '#8b5cf6', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
                        }}
                      >
                        Issue CN
                      </button>
                    )}
                    {d.status === 'CN Issued' && (
                      <button
                        onClick={() => { showNotif(`Reminder sent to ${d.client}`) }}
                        style={{
                          background: 'rgba(56,139,253,0.1)', border: '1px solid rgba(56,139,253,0.25)',
                          borderRadius: 4, cursor: 'pointer', padding: '4px 6px',
                          display: 'flex', alignItems: 'center', color: '#388bfd',
                        }}
                        title="Notify client"
                      >
                        <Bell size={12} />
                      </button>
                    )}
                    {d.status === 'CN Pending' && (
                      <button
                        onClick={() => updateRow(d.id, { status: 'Under Review' })}
                        style={{
                          background: 'rgba(210,153,34,0.1)', border: '1px solid rgba(210,153,34,0.25)',
                          borderRadius: 4, cursor: 'pointer', padding: '4px 8px',
                          color: '#d29922', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
                        }}
                      >
                        Review
                      </button>
                    )}
                  </div>

                  {/* Notify indicator */}
                  <div>
                    {d.clientNotified && (
                      <span style={{ fontSize: 10, color: '#3fb950', whiteSpace: 'nowrap' }}>✓ Notified</span>
                    )}
                  </div>
                </div>

                {/* Expanded detail */}
                {isOpen && (
                  <div style={{
                    padding: '0 16px 12px', paddingLeft: 32,
                    background: t.bgCardHover,
                    borderTop: `1px solid ${t.borderSub}`,
                  }}>
                    <div style={{ fontSize: 12, color: t.textMuted, paddingTop: 10, lineHeight: 1.8 }}>
                      <span style={{ color: t.textPrimary, fontWeight: 600 }}>Description: </span>{d.description}
                    </div>
                    {d.am && (
                      <div style={{ fontSize: 11, color: t.textMuted, marginTop: 4 }}>
                        <span style={{ color: t.textPrimary }}>AM: </span>{d.am} &nbsp;·&nbsp;
                        <span style={{ color: t.textPrimary }}>Finance approved: </span>{d.financeApproved ? 'Yes' : 'Pending'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
