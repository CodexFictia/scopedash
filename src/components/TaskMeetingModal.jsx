import { useState, useMemo } from 'react'
import { ChevronDown, ChevronRight, Filter } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

/**
 * Filterable task/meeting list modal.
 * filterType = 'city-centre'      → Region Head: city pills top + centres expandable
 * filterType = 'zone-city-centre' → AM Head: zone pills top + cities expandable + centres expandable
 *
 * hierarchy (city-centre):        { cities: [str], centres: { city: [str] } }
 * hierarchy (zone-city-centre):   { zones: [str], cities: { zone: [str] }, centres: { city: [str] } }
 * items:  [{ id, label, am, client, category, zone?, city, centre, status, due }]
 */

const TASK_STATUS   = {
  open:        { label: 'Open',         color: '#388bfd', bg: 'rgba(56,139,253,0.13)'  },
  'closed-sla':{ label: 'Closed ✓ SLA', color: '#3fb950', bg: 'rgba(63,185,80,0.13)'  },
  violated:    { label: 'Violated',     color: '#f85149', bg: 'rgba(248,81,73,0.13)'   },
}
const MEETING_STATUS = {
  booked:    { label: 'Booked',    color: '#388bfd', bg: 'rgba(56,139,253,0.13)'  },
  pending:   { label: 'Pending',   color: '#d29922', bg: 'rgba(210,153,34,0.13)'  },
  completed: { label: 'Completed', color: '#3fb950', bg: 'rgba(63,185,80,0.13)'  },
  violated:  { label: 'Past SLA',  color: '#f85149', bg: 'rgba(248,81,73,0.13)'   },
}

function Pill({ label, active, onClick }) {
  const { t } = useTheme()
  return (
    <button onClick={onClick} style={{
      padding: '4px 11px', borderRadius: 20, fontSize: 11, fontWeight: 600,
      border: `1px solid ${active ? '#f97316' : t.border}`,
      background: active ? 'rgba(249,115,22,0.12)' : 'transparent',
      color: active ? '#f97316' : t.textMuted,
      cursor: 'pointer', transition: 'all 0.12s', whiteSpace: 'nowrap',
    }}>
      {label}
    </button>
  )
}

function ExpandSection({ label, count, children }) {
  const { t } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', gap: 5,
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '4px 0', color: t.textMuted, fontSize: 10,
        fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px',
      }}>
        {open ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
        {label}
        {count > 0 && (
          <span style={{ color: '#f97316', fontSize: 10 }}>· {count} selected</span>
        )}
      </button>
      {open && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 6, paddingLeft: 2 }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function TaskMeetingModal({ data }) {
  const { t } = useTheme()
  const { kind = 'task', filterType = 'city-centre', hierarchy = {}, items = [] } = data
  const STATUS = kind === 'meeting' ? MEETING_STATUS : TASK_STATUS
  const isAMHead = filterType === 'zone-city-centre'

  const [selZone,    setSelZone]    = useState('All')
  const [selCity,    setSelCity]    = useState('All')
  const [selCentres, setSelCentres] = useState(new Set())

  // Resolve visible cities based on zone
  const visCities = useMemo(() => {
    if (!isAMHead) return hierarchy.cities || []
    if (selZone === 'All') return Object.values(hierarchy.cities || {}).flat()
    return hierarchy.cities?.[selZone] || []
  }, [isAMHead, selZone, hierarchy])

  // Resolve visible centres based on city
  const visCentres = useMemo(() => {
    if (selCity === 'All') return []
    return hierarchy.centres?.[selCity] || []
  }, [selCity, hierarchy])

  const handleZone = (z) => { setSelZone(z); setSelCity('All'); setSelCentres(new Set()) }
  const handleCity = (c) => { setSelCity(c); setSelCentres(new Set()) }
  const toggleCentre = (c) => {
    const s = new Set(selCentres)
    if (c === 'All') { s.clear() } else { s.has(c) ? s.delete(c) : s.add(c) }
    setSelCentres(s)
  }

  const hasFilter = (isAMHead && selZone !== 'All') || selCity !== 'All' || selCentres.size > 0
  const clearAll  = () => { setSelZone('All'); setSelCity('All'); setSelCentres(new Set()) }

  // Filter items
  const filtered = useMemo(() => items.filter(item => {
    if (isAMHead && selZone !== 'All' && item.zone !== selZone) return false
    if (selCity !== 'All' && item.city !== selCity) return false
    if (selCentres.size > 0 && !selCentres.has(item.centre)) return false
    return true
  }), [items, isAMHead, selZone, selCity, selCentres])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

      {/* ── Filter box ─────────────────────────────────────────── */}
      <div style={{
        background: t.bgCardHover, border: `1px solid ${t.borderSub}`,
        borderRadius: 8, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Filter size={11} color={t.textMuted} />
            <span style={{ fontSize: 10, fontWeight: 700, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Filters
            </span>
          </div>
          {hasFilter && (
            <button onClick={clearAll} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#f97316', fontSize: 10, fontWeight: 600,
            }}>Clear all</button>
          )}
        </div>

        {/* AM Head: Zone pills at top */}
        {isAMHead && (
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: t.textSubtle, textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: 5 }}>Zone</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              <Pill label="All" active={selZone === 'All'} onClick={() => handleZone('All')} />
              {(hierarchy.zones || []).map(z => (
                <Pill key={z} label={z} active={selZone === z} onClick={() => handleZone(z)} />
              ))}
            </div>
          </div>
        )}

        {/* Region Head: City pills at top (NOT expandable) */}
        {!isAMHead && (
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: t.textSubtle, textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: 5 }}>City</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              <Pill label="All" active={selCity === 'All'} onClick={() => handleCity('All')} />
              {(hierarchy.cities || []).map(c => (
                <Pill key={c} label={c} active={selCity === c} onClick={() => handleCity(c)} />
              ))}
            </div>
          </div>
        )}

        {/* AM Head: Cities expandable */}
        {isAMHead && (
          <ExpandSection label={`Cities${selCity !== 'All' ? ` · ${selCity}` : ''}`} count={0}>
            <Pill label="All" active={selCity === 'All'} onClick={() => handleCity('All')} />
            {visCities.map(c => (
              <Pill key={c} label={c} active={selCity === c} onClick={() => handleCity(c)} />
            ))}
          </ExpandSection>
        )}

        {/* Centres expandable (both personas) */}
        <ExpandSection label="Centres" count={selCentres.size}>
          {visCentres.length === 0 ? (
            <span style={{ fontSize: 11, color: t.textSubtle, fontStyle: 'italic' }}>
              {selCity === 'All' ? 'Select a city to filter by centre' : 'No centres available'}
            </span>
          ) : (
            <>
              <Pill label="All" active={selCentres.size === 0} onClick={() => toggleCentre('All')} />
              {visCentres.map(c => (
                <Pill key={c} label={c} active={selCentres.has(c)} onClick={() => toggleCentre(c)} />
              ))}
            </>
          )}
        </ExpandSection>
      </div>

      {/* ── Result count ──────────────────────────────────────── */}
      <div style={{ fontSize: 11, color: t.textMuted, fontWeight: 600 }}>
        {filtered.length} {kind === 'meeting' ? 'meetings' : 'tasks'}
        {filtered.length !== items.length && ` · filtered from ${items.length}`}
      </div>

      {/* ── Item list ─────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, maxHeight: 420, overflowY: 'auto', paddingRight: 2 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px 0', color: t.textMuted, fontSize: 12 }}>
            No {kind === 'meeting' ? 'meetings' : 'tasks'} match the selected filters.
          </div>
        ) : (
          filtered.map((item, i) => {
            const sc = STATUS[item.status] || { label: item.status, color: '#8b949e', bg: 'rgba(139,148,158,0.1)' }
            return (
              <div key={item.id ?? i} style={{
                background: t.bgCardHover, border: `1px solid ${t.borderSub}`,
                borderRadius: 6, padding: '9px 12px',
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 10, alignItems: 'start',
              }}>
                {/* Left */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: t.textPrimary, lineHeight: 1.4 }}>{item.label}</div>
                  <div style={{ fontSize: 10, color: t.textMuted, marginTop: 3, display: 'flex', flexWrap: 'wrap', gap: '2px 8px', lineHeight: 1.6 }}>
                    {item.am      && <span>AM: {item.am}</span>}
                    {item.client  && <span>{item.client}</span>}
                    {item.category && <span>{item.category}</span>}
                  </div>
                  {(item.centre || item.city) && (
                    <div style={{ fontSize: 10, color: t.textSubtle, marginTop: 2 }}>
                      📍 {[item.centre, item.city].filter(Boolean).join(', ')}
                    </div>
                  )}
                </div>
                {/* Right */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                  <span style={{
                    background: sc.bg, color: sc.color,
                    fontSize: 9, fontWeight: 700, borderRadius: 20, padding: '2px 7px',
                    textTransform: 'uppercase', letterSpacing: '0.3px', whiteSpace: 'nowrap',
                  }}>
                    {sc.label}
                  </span>
                  {item.due && <span style={{ fontSize: 10, color: t.textMuted, whiteSpace: 'nowrap' }}>Due {item.due}</span>}
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
