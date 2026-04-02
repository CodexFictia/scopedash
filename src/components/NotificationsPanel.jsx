import { X, Bell, AlertCircle, CheckCircle, Info, Clock, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

const NOTIFS = [
  { id: 1, type: 'error',   title: 'Payment Settlement Failed',     msg: 'Auto-settlement failed for ₹45,000 (RazorPay TXN#892341). Manual action required.', time: '5 min ago',  read: false },
  { id: 2, type: 'warning', title: 'SLA Breach — Whitefield',       msg: '3 tickets (P1) at Whitefield Centre have breached 48hr resolution SLA.',             time: '12 min ago', read: false },
  { id: 3, type: 'success', title: 'Reconciliation Complete',        msg: 'Daily Razorpay reconciliation completed: 247/261 transactions matched (94.8%).',      time: '1 hr ago',   read: false },
  { id: 4, type: 'info',    title: 'New GCC Inquiry',                msg: '500-seat GCC inquiry from Deutsche Bank — assigned to Rahul Menon.',                  time: '2 hrs ago',  read: true  },
  { id: 5, type: 'warning', title: 'Overdue Approvals',              msg: '5 vendor payments (>48hrs) awaiting CFO approval — total ₹6.2L at risk.',            time: '3 hrs ago',  read: true  },
  { id: 6, type: 'success', title: 'Design Freeze Approved',         msg: 'Whitefield Phase 3 design freeze approved by client (Infosys). Fit-out can begin.',  time: '4 hrs ago',  read: true  },
  { id: 7, type: 'info',    title: 'Renewal Confirmed — Pune',       msg: 'Infosys BPO expanded by 120 seats at Baner Centre (3-yr lock-in).',                  time: '5 hrs ago',  read: true  },
]

const TYPE = {
  error:   { Icon: AlertCircle,   color: '#f85149' },
  warning: { Icon: AlertTriangle, color: '#d29922' },
  success: { Icon: CheckCircle,   color: '#3fb950' },
  info:    { Icon: Info,          color: '#388bfd' },
}

export default function NotificationsPanel({ onClose }) {
  const [notifs, setNotifs] = useState(NOTIFS)
  const unread = notifs.filter(n => !n.read).length

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 40 }} />
      <div style={{ position: 'fixed', right: 0, top: 0, bottom: 0, width: 380, background: '#161b22', borderLeft: '1px solid #30363d', zIndex: 50, display: 'flex', flexDirection: 'column', boxShadow: '-6px 0 30px rgba(0,0,0,0.5)' }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Bell size={15} color="#f97316" />
            <span style={{ fontSize: 14, fontWeight: 700, color: '#e6edf3' }}>Notifications</span>
            {unread > 0 && <span style={{ background: '#f97316', color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 9999, padding: '1px 7px' }}>{unread} new</span>}
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b949e', padding: 4 }}><X size={16} /></button>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
          {notifs.map(n => {
            const { Icon, color } = TYPE[n.type]
            return (
              <div key={n.id}
                onClick={() => setNotifs(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x))}
                style={{
                  padding: '10px 12px', borderRadius: 7, marginBottom: 5, cursor: 'pointer',
                  background: n.read ? 'transparent' : '#1c2333',
                  border: `1px solid ${n.read ? '#30363d' : color + '35'}`,
                  transition: 'all 0.15s',
                }}
              >
                <div style={{ display: 'flex', gap: 10 }}>
                  <Icon size={14} color={color} style={{ flexShrink: 0, marginTop: 1 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 12, fontWeight: n.read ? 400 : 600, color: '#e6edf3' }}>{n.title}</span>
                      {!n.read && <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />}
                    </div>
                    <p style={{ margin: '0 0 4px', fontSize: 11, color: '#8b949e', lineHeight: 1.45 }}>{n.msg}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 10, color: '#656d76' }}>
                      <Clock size={9} /> {n.time}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div style={{ padding: 12, borderTop: '1px solid #30363d' }}>
          <button
            onClick={() => setNotifs(prev => prev.map(n => ({ ...n, read: true })))}
            style={{ width: '100%', padding: '7px', borderRadius: 6, border: '1px solid #30363d', background: 'transparent', color: '#8b949e', fontSize: 12, cursor: 'pointer' }}
          >Mark all as read</button>
        </div>
      </div>
    </>
  )
}
