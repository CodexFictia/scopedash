import { X, Building2, Shield, Mail, Edit2, Settings, LogOut, Key, Sun, Moon } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

export default function ProfilePanel({ onClose }) {
  const { t, isDark, toggleTheme } = useTheme()

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 40 }} />
      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0, width: 300,
        background: t.bgSurface, borderLeft: `1px solid ${t.border}`,
        zIndex: 50, display: 'flex', flexDirection: 'column',
        boxShadow: `-6px 0 30px ${t.shadow}`,
      }}>
        {/* Header */}
        <div style={{ padding: '16px 18px', borderBottom: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: t.textPrimary }}>My Profile</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: t.textMuted }}><X size={16} /></button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: 18, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Avatar */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'linear-gradient(135deg,#f97316,#ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 700, color: '#fff', margin: '0 auto 10px' }}>J</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: t.textPrimary }}>Jeet Parida</div>
            <div style={{ fontSize: 11, color: t.textMuted, margin: '3px 0 6px' }}>paridapurujeet@gmail.com</div>
            <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: 12, background: 'rgba(249,115,22,0.12)', color: '#f97316', fontSize: 11, fontWeight: 600 }}>Super Admin · All Access</span>
          </div>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { Icon: Building2, label: 'Organization', value: 'Smartworks' },
              { Icon: Shield,    label: 'Role',         value: 'Super Admin' },
              { Icon: Mail,      label: 'Email',        value: 'paridapurujeet@gmail.com' },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: t.bgCard, borderRadius: 6, border: `1px solid ${t.border}` }}>
                <Icon size={13} color={t.textMuted} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 9, color: t.textSubtle, textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>{label}</div>
                  <div style={{ fontSize: 12, color: t.textPrimary, marginTop: 1 }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Theme toggle ─────────────────────────────────────────────── */}
          <div style={{ padding: '12px 14px', background: t.bgCard, borderRadius: 8, border: `1px solid ${t.border}` }}>
            <div style={{ fontSize: 11, color: t.textSubtle, textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', marginBottom: 10 }}>Appearance</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {isDark
                  ? <Moon size={14} color={t.textMuted} />
                  : <Sun size={14} color="#f97316" />}
                <span style={{ fontSize: 13, color: t.textPrimary, fontWeight: 500 }}>
                  {isDark ? 'Dark mode' : 'Light mode'}
                </span>
              </div>
              {/* Toggle pill */}
              <button
                onClick={toggleTheme}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                  position: 'relative', width: 44, height: 24, borderRadius: 12,
                  background: isDark ? '#f97316' : t.border,
                  border: 'none', cursor: 'pointer', transition: 'background 0.2s', padding: 0,
                  flexShrink: 0,
                }}
              >
                <span style={{
                  position: 'absolute', top: 3, left: isDark ? 23 : 3,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {isDark
                    ? <Moon size={10} color="#f97316" />
                    : <Sun size={10} color="#f97316" />}
                </span>
              </button>
            </div>

            {/* Mode label row */}
            <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
              {[{ label: 'Light', val: false }, { label: 'Dark', val: true }].map(({ label, val }) => (
                <button
                  key={label}
                  onClick={() => { if (isDark !== val) toggleTheme() }}
                  style={{
                    flex: 1, padding: '6px 0', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', border: '1px solid',
                    borderColor: isDark === val ? '#f97316' : t.border,
                    background: isDark === val ? 'rgba(249,115,22,0.1)' : 'transparent',
                    color: isDark === val ? '#f97316' : t.textMuted,
                    transition: 'all 0.15s',
                  }}
                >
                  {label === 'Light' ? '☀ ' : '🌙 '}{label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[{ Icon: Edit2, label: 'Edit Profile' }, { Icon: Key, label: 'Change Password' }, { Icon: Settings, label: 'Preferences' }].map(({ Icon, label }) => (
              <button key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 6, border: `1px solid ${t.border}`, background: 'transparent', color: t.textPrimary, fontSize: 12, cursor: 'pointer', width: '100%', textAlign: 'left' }}>
                <Icon size={13} color={t.textMuted} />{label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: 12, borderTop: `1px solid ${t.border}` }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px', borderRadius: 6, border: '1px solid #f8514930', background: 'rgba(248,81,73,0.08)', color: '#f85149', fontSize: 12, cursor: 'pointer', justifyContent: 'center', fontWeight: 500 }}>
            <LogOut size={13} /> Sign Out
          </button>
        </div>
      </div>
    </>
  )
}
