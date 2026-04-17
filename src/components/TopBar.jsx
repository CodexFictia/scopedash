import { useState } from 'react'
import { Search, SlidersHorizontal, RefreshCw, Calendar } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

function PersonaChip({ id, label, active, onClick, t }) {
  return (
    <button
      onClick={() => onClick(id)}
      style={{
        padding: '5px 14px', borderRadius: 20, border: '1px solid',
        borderColor: active ? '#f97316' : t.border,
        background: active ? 'rgba(249,115,22,0.12)' : 'transparent',
        color: active ? '#f97316' : t.textMuted, fontSize: 12,
        fontWeight: active ? 600 : 400, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  )
}

const DEFAULT_PERIOD_OPTIONS = ['Today', 'This Week', 'This Month', 'Last Month', 'Q4 FY25', 'Q1 FY26', 'FY25–26']

export default function TopBar({ title, subtitle, personas, activePersona, onPersonaChange, filters, periodOptions, defaultPeriod }) {
  const { t } = useTheme()
  const opts = periodOptions && periodOptions.length ? periodOptions : DEFAULT_PERIOD_OPTIONS
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [period, setPeriod] = useState(defaultPeriod || opts[2] || opts[0])
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const S = {
    wrap:      { background: t.bgRoot, borderBottom: `1px solid ${t.border}`, padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 },
    title:     { fontSize: 17, fontWeight: 700, color: t.textPrimary, margin: 0 },
    subtitle:  { fontSize: 11, color: t.textMuted, margin: '2px 0 0' },
    searchInput: { background: t.bgInput, border: `1px solid ${t.border}`, borderRadius: 6, padding: '6px 10px 6px 30px', color: t.textPrimary, fontSize: 12, width: 200 },
    btn:       { display: 'flex', alignItems: 'center', gap: 5, padding: '6px 10px', borderRadius: 6, border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, fontSize: 12, cursor: 'pointer' },
    iconBtn:   { display: 'flex', alignItems: 'center', padding: 6, borderRadius: 6, border: `1px solid ${t.border}`, background: 'transparent', color: t.textMuted, cursor: 'pointer' },
    select:    { background: t.bgSelect, border: `1px solid ${t.border}`, borderRadius: 4, padding: '4px 8px', color: t.textPrimary, fontSize: 12, cursor: 'pointer' },
    filterPanel: { display: 'flex', gap: 12, flexWrap: 'wrap', padding: '10px 12px', background: t.bgCard, borderRadius: 6, border: `1px solid ${t.border}`, alignItems: 'center' },
  }

  return (
    <div style={S.wrap}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <h1 style={S.title}>{title}</h1>
          <p style={S.subtitle}>{subtitle || `Live · Updated ${now}`}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Search */}
          <div style={{ position: 'relative' }}>
            <Search size={13} style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', color: t.textSubtle }} />
            <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} style={S.searchInput} />
          </div>
          {/* Period selector */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select value={period} onChange={e => setPeriod(e.target.value)} style={{ ...S.select, paddingLeft: 28, appearance: 'none', width: 130 }}>
              {['Today', 'This Week', 'This Month', 'Last Month', 'Q4 FY25', 'Q1 FY26', 'FY25–26'].map(o => <option key={o}>{o}</option>)}
            </select>
            <Calendar size={12} style={{ position: 'absolute', left: 8, color: t.textMuted, pointerEvents: 'none' }} />
          </div>
          {/* Filters toggle */}
          <button onClick={() => setShowFilters(f => !f)} style={{ ...S.btn, borderColor: showFilters ? '#f97316' : t.border, color: showFilters ? '#f97316' : t.textMuted }}>
            <SlidersHorizontal size={13} /> Filters
          </button>
          <button style={S.iconBtn} title="Refresh"><RefreshCw size={13} /></button>
        </div>
      </div>

      {/* Persona switcher */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2, alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: t.textSubtle, marginRight: 4, flexShrink: 0, fontWeight: 500 }}>View as:</span>
        {personas.map(p => (
          <PersonaChip key={p.id} id={p.id} label={p.label} t={t} active={activePersona === p.id} onClick={onPersonaChange} />
        ))}
      </div>

      {/* Filter panel */}
      {showFilters && filters && (
        <div style={S.filterPanel}>
          {filters.map(f => (
            <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <label style={{ fontSize: 11, color: t.textMuted, fontWeight: 500 }}>{f.label}:</label>
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
