import { AlertCircle, AlertTriangle, Info, ArrowRight, Clock } from 'lucide-react'

const PRI = {
  high:   { Icon: AlertCircle,   color: '#f85149', bg: '#f8514912' },
  medium: { Icon: AlertTriangle, color: '#d29922', bg: '#d2992212' },
  low:    { Icon: Info,          color: '#388bfd', bg: '#388bfd12' },
}

export default function ActionList({ title, items }) {
  return (
    <div style={{ background: '#1c2333', border: '1px solid #30363d', borderRadius: 8, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <h3 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#e6edf3' }}>{title}</h3>
        <span style={{ fontSize: 11, color: '#656d76' }}>{items.length} items</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, i) => {
          const { Icon, color, bg } = PRI[item.priority] || PRI.low
          return (
            <div
              key={i}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 10px', borderRadius: 6, background: bg, border: `1px solid ${color}30`, cursor: 'pointer', transition: 'opacity 0.15s' }}
            >
              <Icon size={13} color={color} style={{ flexShrink: 0, marginTop: 1 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, color: '#e6edf3', lineHeight: 1.4, marginBottom: 3 }}>{item.text}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {item.category && <span style={{ fontSize: 10, color: '#8b949e', background: '#30363d', padding: '1px 6px', borderRadius: 4 }}>{item.category}</span>}
                  {item.due && (
                    <span style={{ fontSize: 10, color: color, display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Clock size={9} />{item.due}
                    </span>
                  )}
                </div>
              </div>
              <ArrowRight size={11} color="#656d76" style={{ flexShrink: 0, marginTop: 2 }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
