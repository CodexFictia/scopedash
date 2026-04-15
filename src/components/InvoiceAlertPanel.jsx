/**
 * Top outstanding invoices panel — CM persona.
 * Shows top 3 unpaid invoices by value with overdue days and Remind action.
 */
import { useState } from 'react'
import { Receipt, Bell, ExternalLink, AlertTriangle } from 'lucide-react'

export default function InvoiceAlertPanel({ title = 'Top Unpaid Invoices', invoices = [], onViewAll }) {
  const [reminded, setReminded] = useState({})
  const [animating, setAnimating] = useState(null)

  const sendReminder = (id, client) => {
    setAnimating(id)
    setTimeout(() => {
      setReminded(r => ({ ...r, [id]: true }))
      setAnimating(null)
    }, 600)
  }

  return (
    <div style={{ background: '#1c2333', border: '1px solid rgba(248,81,73,0.3)', borderRadius: 10, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '11px 16px', borderBottom: '1px solid rgba(248,81,73,0.15)',
        background: 'rgba(248,81,73,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <AlertTriangle size={14} color="#f85149" />
          <span style={{ fontWeight: 700, fontSize: 13, color: '#e6edf3' }}>{title}</span>
          <span style={{ fontSize: 10, color: '#8b949e' }}>— by value</span>
        </div>
        {onViewAll && (
          <button
            onClick={onViewAll}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#f97316', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4,
            }}
          >
            View all invoices <ExternalLink size={10} />
          </button>
        )}
      </div>

      {/* Invoice rows */}
      {invoices.slice(0, 3).map((inv, i) => {
        const isOverdue = inv.overdueDays > 0
        const urgency = inv.overdueDays > 30 ? '#f85149' : inv.overdueDays > 14 ? '#d29922' : '#388bfd'

        return (
          <div
            key={inv.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 110px 80px 100px',
              gap: 12, padding: '10px 16px', alignItems: 'center',
              borderBottom: i < 2 ? '1px solid #21262d' : 'none',
            }}
          >
            {/* Client + invoice ref */}
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#e6edf3' }}>{inv.client}</div>
              <div style={{ fontSize: 10, color: '#8b949e', marginTop: 2 }}>
                {inv.invoiceNo} · {inv.category}
              </div>
            </div>

            {/* Amount */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#e6edf3' }}>{inv.amount}</div>
              <div style={{ fontSize: 10, color: '#8b949e', marginTop: 1 }}>Due {inv.dueDate}</div>
            </div>

            {/* Overdue badge */}
            <div>
              {isOverdue ? (
                <span style={{
                  background: urgency + '18', color: urgency,
                  fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '3px 8px',
                  display: 'inline-block',
                }}>
                  {inv.overdueDays}d overdue
                </span>
              ) : (
                <span style={{
                  background: 'rgba(56,139,253,0.12)', color: '#388bfd',
                  fontSize: 10, fontWeight: 700, borderRadius: 20, padding: '3px 8px',
                  display: 'inline-block',
                }}>
                  Due soon
                </span>
              )}
            </div>

            {/* Remind button */}
            <div>
              {reminded[inv.id] ? (
                <span style={{ fontSize: 11, color: '#3fb950', display: 'flex', alignItems: 'center', gap: 4 }}>
                  ✓ Reminder sent
                </span>
              ) : (
                <button
                  onClick={() => sendReminder(inv.id, inv.client)}
                  disabled={animating === inv.id}
                  style={{
                    background: animating === inv.id ? 'rgba(249,115,22,0.08)' : 'rgba(249,115,22,0.12)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    borderRadius: 6, cursor: 'pointer', padding: '5px 10px',
                    color: '#f97316', fontSize: 11, fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 5,
                    transition: 'all 0.2s',
                  }}
                >
                  <Bell size={11} />
                  {animating === inv.id ? 'Sending…' : 'Send Reminder'}
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
