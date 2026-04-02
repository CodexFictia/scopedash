import { useState } from 'react'
import { Search, SlidersHorizontal, RefreshCw, Calendar, ChevronDown } from 'lucide-react'

const S = {
  wrap: { background: '#0d1117', borderBottom: '1px solid #30363d', padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 },
  row1: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  titleGroup: {},
  title: { fontSize: 17, fontWeight: 700, color: '#e6edf3', margin: 0 },
  subtitle: { fontSize: 11, color: '#8b949e', margin: '2px 0 0' },
  controls: { display: 'flex', alignItems: 'center', gap: 8 },
  searchWrap: { position: 'relative' },
  searchInput: {
    background: '#1c2333', border: '1px solid #30363d', borderRadius: 6,
    padding: '6px 10px 6px 30px', color: '#e6edf3', fontSize: 12, width: 200,
  },
  btn: {
    display: 'flex', alignItems: 'center', gap: 5, padding: '6px 10px',
    borderRadius: 6, border: '1px solid #30363d', background: 'transparent',
    color: '#8b949e', fontSize: 12, cursor: 'pointer',
  },
  iconBtn: {
    display: 'flex', alignItems: 'center', padding: 6,
    borderRadius: 6, border: '1px solid #30363d', background: 'transparent',
    color: '#8b949e', cursor: 'pointer',
  },
  personaRow: { display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2, alignItems: 'center' },
  personaLabel: { fontSize: 11, color: '#656d76', marginRight: 4, flexShrink: 0, fontWeight: 500 },
  filterPanel: {
    display: 'flex', gap: 12, flexWrap: 'wrap', padding: '10px 12px',
    background: '#1c2333', borderRadius: 6, border: '1px solid #30363d', alignItems: 'center',
  },
  filterGroup: { display: 'flex', alignItems: 'center', gap: 6 },
  filterLabel: { fontSize: 11, color: '#8b949e', fontWeight: 500 },
  select: { background: '#0d1117', border: '1px solid #30363d', borderRadius: 4, padding: '4px 8px', color: '#e6edf3', fontSize: 12, cursor: 'pointer' },
}

function PersonaChip({ id, label, active, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      style={{
        padding: '5px 14px', borderRadius: 20, border: '1px solid',
        borderColor: active ? '#f97316' : '#30363d',
        background: active ? 'rgba(249,115,22,0.12)' : 'transparent',
        color: active ? '#f97316' : '#8b949e', fontSize: 12,
        fontWeight: active ? 600 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  )
}

export default function TopBar({ title, subtitle, personas, activePersona, onPersonaChange, filters }) {
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [period, setPeriod] = useState('This Month')
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div style={S.wrap}>
      <div style={S.row1}>
        <div style={S.titleGroup}>
          <h1 style={S.title}>{title}</h1>
          <p style={S.subtitle}>{subtitle || `Live · Updated ${now}`}</p>
        </div>
        <div style={S.controls}>
          {/* Search */}
          <div style={S.searchWrap}>
            <Search size={13} style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', color: '#656d76' }} />
            <input
              type="text" placeholder="Search..." value={search}
              onChange={e => setSearch(e.target.value)} style={S.searchInput}
            />
          </div>
          {/* Period selector */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select
              value={period} onChange={e => setPeriod(e.target.value)}
              style={{ ...S.select, paddingLeft: 28, appearance: 'none', width: 130 }}
            >
              {['Today', 'This Week', 'This Month', 'Last Month', 'Q4 FY25', 'Q1 FY26', 'FY25–26'].map(o => <option key={o}>{o}</option>)}
            </select>
            <Calendar size={12} style={{ position: 'absolute', left: 8, color: '#8b949e', pointerEvents: 'none' }} />
          </div>
          {/* Filters toggle */}
          <button
            onClick={() => setShowFilters(f => !f)}
            style={{ ...S.btn, borderColor: showFilters ? '#f97316' : '#30363d', color: showFilters ? '#f97316' : '#8b949e' }}
          >
            <SlidersHorizontal size={13} /> Filters
          </button>
          <button style={S.iconBtn} title="Refresh"><RefreshCw size={13} /></button>
        </div>
      </div>

      {/* Persona switcher */}
      <div style={S.personaRow}>
        <span style={S.personaLabel}>View as:</span>
        {personas.map(p => (
          <PersonaChip key={p.id} id={p.id} label={p.label} active={activePersona === p.id} onClick={onPersonaChange} />
        ))}
      </div>

      {/* Filter panel */}
      {showFilters && filters && (
        <div style={S.filterPanel}>
          {filters.map(f => (
            <div key={f.id} style={S.filterGroup}>
              <label style={S.filterLabel}>{f.label}:</label>
              <select style={S.select}>
                {f.options.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
