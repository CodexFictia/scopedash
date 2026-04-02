import { useState } from 'react'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'

const BADGE = {
  Pending:    { color: '#d29922', bg: '#d2992225' },
  Completed:  { color: '#3fb950', bg: '#3fb95025' },
  Failed:     { color: '#f85149', bg: '#f8514925' },
  'In Progress':{ color: '#388bfd', bg: '#388bfd25' },
  Overdue:    { color: '#f85149', bg: '#f8514925' },
  Active:     { color: '#3fb950', bg: '#3fb95025' },
  'On Hold':  { color: '#8b5cf6', bg: '#8b5cf625' },
  Matched:    { color: '#3fb950', bg: '#3fb95025' },
  Unmatched:  { color: '#f85149', bg: '#f8514925' },
  Review:     { color: '#d29922', bg: '#d2992225' },
  High:       { color: '#f85149', bg: '#f8514925' },
  Medium:     { color: '#d29922', bg: '#d2992225' },
  Low:        { color: '#3fb950', bg: '#3fb95025' },
  Open:       { color: '#388bfd', bg: '#388bfd25' },
  Closed:     { color: '#656d76', bg: '#65707625' },
  Resolved:   { color: '#3fb950', bg: '#3fb95025' },
  Escalated:  { color: '#f85149', bg: '#f8514925' },
  Warm:       { color: '#d29922', bg: '#d2992225' },
  Hot:        { color: '#f85149', bg: '#f8514925' },
  Cold:       { color: '#388bfd', bg: '#388bfd25' },
  Won:        { color: '#3fb950', bg: '#3fb95025' },
  Lost:       { color: '#f85149', bg: '#f8514925' },
  'At Risk':  { color: '#f85149', bg: '#f8514925' },
  Healthy:    { color: '#3fb950', bg: '#3fb95025' },
  Negotiation:{ color: '#d29922', bg: '#d2992225' },
}

function StatusBadge({ value }) {
  const s = BADGE[value] || { color: '#8b949e', bg: '#8b949e20' }
  return (
    <span style={{ padding: '2px 8px', borderRadius: 10, fontSize: 11, fontWeight: 600, color: s.color, background: s.bg }}>
      {value}
    </span>
  )
}

export default function DataGrid({ title, columns, data }) {
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')
  const [page, setPage] = useState(0)
  const PAGE = 8

  const handleSort = key => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = sortKey
    ? [...data].sort((a, b) => {
        const av = a[sortKey], bv = b[sortKey]
        return sortDir === 'asc' ? (av < bv ? -1 : av > bv ? 1 : 0) : (bv < av ? -1 : bv > av ? 1 : 0)
      })
    : data

  const paged = sorted.slice(page * PAGE, (page + 1) * PAGE)
  const totalPages = Math.ceil(data.length / PAGE)

  return (
    <div style={{ background: '#1c2333', border: '1px solid #30363d', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#e6edf3' }}>{title}</h3>
        <span style={{ fontSize: 11, color: '#656d76' }}>{data.length} records</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
          <thead>
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  style={{
                    padding: '8px 14px', textAlign: 'left', fontSize: 10, fontWeight: 600,
                    color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.5px',
                    background: '#161b22', borderBottom: '1px solid #30363d',
                    cursor: col.sortable !== false ? 'pointer' : 'default',
                    whiteSpace: 'nowrap', userSelect: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {col.label}
                    {col.sortable !== false && (
                      sortKey === col.key
                        ? (sortDir === 'asc' ? <ChevronUp size={10} /> : <ChevronDown size={10} />)
                        : <ChevronsUpDown size={10} style={{ opacity: 0.4 }} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.map((row, i) => (
              <tr
                key={i}
                style={{ borderBottom: '1px solid #30363d', transition: 'background 0.1s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = '#21262d'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {columns.map(col => (
                  <td key={col.key} style={{ padding: '9px 14px', color: '#e6edf3', whiteSpace: 'nowrap' }}>
                    {col.type === 'status' ? (
                      <StatusBadge value={row[col.key]} />
                    ) : col.type === 'action' ? (
                      <button style={{ padding: '3px 10px', borderRadius: 4, border: '1px solid #f9731680', background: 'transparent', color: '#f97316', fontSize: 11, cursor: 'pointer', fontWeight: 500 }}>
                        {row[col.key] || 'View'}
                      </button>
                    ) : col.type === 'progress' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 60, height: 4, background: '#30363d', borderRadius: 2 }}>
                          <div style={{ width: `${row[col.key]}%`, height: '100%', background: row[col.key] >= 80 ? '#3fb950' : row[col.key] >= 50 ? '#d29922' : '#f85149', borderRadius: 2 }} />
                        </div>
                        <span style={{ color: '#8b949e', fontSize: 11 }}>{row[col.key]}%</span>
                      </div>
                    ) : (
                      <span style={{ color: col.muted ? '#8b949e' : '#e6edf3' }}>{row[col.key]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #30363d' }}>
          <span style={{ fontSize: 11, color: '#656d76' }}>
            {page * PAGE + 1}–{Math.min((page + 1) * PAGE, data.length)} of {data.length}
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setPage(i)} style={{ width: 24, height: 24, borderRadius: 4, border: '1px solid', borderColor: page === i ? '#f97316' : '#30363d', background: page === i ? 'rgba(249,115,22,0.15)' : 'transparent', color: page === i ? '#f97316' : '#8b949e', fontSize: 11, cursor: 'pointer' }}>{i + 1}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
