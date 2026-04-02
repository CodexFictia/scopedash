import { Trophy, TrendingUp, TrendingDown } from 'lucide-react'

const RANK_COLORS = ['#f97316', '#94a3b8', '#cd7c3b', '#8b949e', '#8b949e']
const BAR_COLORS = ['#f97316', '#388bfd', '#3fb950', '#d29922', '#8b5cf6']

function parseNum(v) {
  return parseFloat(String(v).replace(/[₹,L%Kk]/g, '')) || 0
}

export default function TopFiveList({ title, items, valueLabel }) {
  const max = Math.max(...items.map(it => parseNum(it.value)), 1)

  return (
    <div style={{ background: '#1c2333', border: '1px solid #30363d', borderRadius: 8, padding: '14px 16px' }}>
      <h3 style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 600, color: '#e6edf3', display: 'flex', alignItems: 'center', gap: 6 }}>
        <Trophy size={13} color="#f97316" /> {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 20, height: 20, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, color: i < 3 ? RANK_COLORS[i] : '#656d76',
                  background: i < 3 ? RANK_COLORS[i] + '20' : '#65706620', flexShrink: 0,
                }}>{i + 1}</span>
                <span style={{ fontSize: 12, color: '#e6edf3' }}>{it.label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                {it.change != null && (it.change > 0 ? <TrendingUp size={10} color="#3fb950" /> : <TrendingDown size={10} color="#f85149" />)}
                <span style={{ fontSize: 12, fontWeight: 600, color: '#e6edf3' }}>{it.value}</span>
                {valueLabel && <span style={{ fontSize: 10, color: '#8b949e' }}>{valueLabel}</span>}
              </div>
            </div>
            <div style={{ height: 3, background: '#30363d', borderRadius: 2 }}>
              <div style={{ height: '100%', width: `${(parseNum(it.value) / max) * 100}%`, background: BAR_COLORS[i], borderRadius: 2, transition: 'width 0.6s ease' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
