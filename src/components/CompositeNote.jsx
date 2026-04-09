import { useState } from 'react'
import { Info, X } from 'lucide-react'

/**
 * Dismissable info banner that explains how composite metrics
 * (Health Score, AM Performance Score, Task/Meeting composites) are calculated.
 */
export default function CompositeNote({ title = 'About composite metrics', items = [] }) {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div
      style={{
        background: 'rgba(56,139,253,0.08)',
        border: '1px solid rgba(56,139,253,0.35)',
        borderRadius: 8,
        padding: '12px 14px',
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 6,
          background: 'rgba(56,139,253,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Info size={14} color="#388bfd" />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>{title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {items.map((it, i) => (
            <div key={i} style={{ fontSize: 11, color: '#8b949e', lineHeight: 1.55 }}>
              <span style={{ color: '#c9d1d9', fontWeight: 600 }}>{it.label}: </span>
              {it.formula}
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Dismiss"
        onClick={() => setOpen(false)}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#8b949e',
          cursor: 'pointer',
          padding: 2,
          borderRadius: 4,
          flexShrink: 0,
        }}
      >
        <X size={14} />
      </button>
    </div>
  )
}
