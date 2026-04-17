/**
 * Generic modal overlay.
 * Usage: <Modal title="..." onClose={fn} width={600}>{children}</Modal>
 */
import { X } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

export default function Modal({ title, subtitle, onClose, children, width = 640, footer }) {
  const { t } = useTheme()
  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(3px)',
      }}
    >
      <div style={{
        background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12,
        width: '90%', maxWidth: width, maxHeight: '80vh',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        boxShadow: `0 24px 64px ${t.shadow}`,
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          padding: '18px 20px 14px', borderBottom: `1px solid ${t.border}`, flexShrink: 0,
        }}>
          <div>
            <div style={{ color: t.textPrimary, fontWeight: 700, fontSize: 15 }}>{title}</div>
            {subtitle && <div style={{ color: t.textMuted, fontSize: 12, marginTop: 3 }}>{subtitle}</div>}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(128,128,128,0.1)', border: `1px solid ${t.border}`,
              borderRadius: 6, cursor: 'pointer', color: t.textMuted, padding: '4px 6px',
              display: 'flex', alignItems: 'center',
            }}
          >
            <X size={15} />
          </button>
        </div>

        {/* Content */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '16px 20px' }}>
          {children}
        </div>

        {/* Optional footer */}
        {footer && (
          <div style={{
            padding: '12px 20px', borderTop: `1px solid ${t.border}`,
            display: 'flex', justifyContent: 'flex-end', gap: 8, flexShrink: 0,
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
