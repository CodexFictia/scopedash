import { X, Building2, Shield, Mail, Edit2, Settings, LogOut, Key } from 'lucide-react'

export default function ProfilePanel({ onClose }) {
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 40 }} />
      <div style={{ position: 'fixed', right: 0, top: 0, bottom: 0, width: 300, background: '#161b22', borderLeft: '1px solid #30363d', zIndex: 50, display: 'flex', flexDirection: 'column', boxShadow: '-6px 0 30px rgba(0,0,0,0.5)' }}>
        {/* Header */}
        <div style={{ padding: '16px 18px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#e6edf3' }}>My Profile</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b949e' }}><X size={16} /></button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: 18, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Avatar */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'linear-gradient(135deg,#f97316,#ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 700, color: '#fff', margin: '0 auto 10px' }}>J</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#e6edf3' }}>Jeet Parida</div>
            <div style={{ fontSize: 11, color: '#8b949e', margin: '3px 0 6px' }}>paridapurujeet@gmail.com</div>
            <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: 12, background: 'rgba(249,115,22,0.12)', color: '#f97316', fontSize: 11, fontWeight: 600 }}>Super Admin · All Access</span>
          </div>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { Icon: Building2, label: 'Organization', value: 'Smartworks' },
              { Icon: Shield,    label: 'Role',         value: 'Super Admin' },
              { Icon: Mail,      label: 'Email',        value: 'paridapurujeet@gmail.com' },
            ].map(({ Icon, label, value }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: '#1c2333', borderRadius: 6, border: '1px solid #30363d' }}>
                <Icon size={13} color="#8b949e" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 9, color: '#656d76', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px' }}>{label}</div>
                  <div style={{ fontSize: 12, color: '#e6edf3', marginTop: 1 }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[{ Icon: Edit2, label: 'Edit Profile' }, { Icon: Key, label: 'Change Password' }, { Icon: Settings, label: 'Preferences' }].map(({ Icon, label }) => (
              <button key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 6, border: '1px solid #30363d', background: 'transparent', color: '#e6edf3', fontSize: 12, cursor: 'pointer', width: '100%', textAlign: 'left' }}>
                <Icon size={13} color="#8b949e" />{label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: 12, borderTop: '1px solid #30363d' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px', borderRadius: 6, border: '1px solid #f8514930', background: 'rgba(248,81,73,0.08)', color: '#f85149', fontSize: 12, cursor: 'pointer', justifyContent: 'center', fontWeight: 500 }}>
            <LogOut size={13} /> Sign Out
          </button>
        </div>
      </div>
    </>
  )
}
