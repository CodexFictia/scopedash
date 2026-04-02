import { Layers, Ticket, Building2, Users, Briefcase, Bell, MessageSquarePlus, ChevronRight, Zap, LayoutDashboard } from 'lucide-react'

const NAV = [
  { id: 'cspoc', label: 'CSPOC', Icon: Layers, desc: 'Client Single Point of Contact' },
  { id: 'ticketing', label: 'Ticketing', Icon: Ticket, desc: 'Service Desk & SLA' },
  { id: 'nexusRE', label: 'Nexus RE', Icon: Building2, desc: 'Real Estate' },
  { id: 'nexusAM', label: 'Nexus AM', Icon: Users, desc: 'Account Management' },
  { id: 'crm', label: 'CRM', Icon: Briefcase, desc: 'Sales Pipeline' },
]

const S = {
  sidebar: { width: 220, background: '#161b22', borderRight: '1px solid #30363d', display: 'flex', flexDirection: 'column', flexShrink: 0 },
  logo: { padding: '18px 16px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', gap: 10 },
  logoIcon: { width: 34, height: 34, background: 'linear-gradient(135deg, #f97316, #ea580c)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  logoText: { fontSize: 14, fontWeight: 700, color: '#e6edf3', lineHeight: 1.2 },
  logoSub: { fontSize: 10, color: '#8b949e', marginTop: 1 },
  nav: { flex: 1, padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto' },
  sectionLabel: { fontSize: 10, fontWeight: 600, color: '#656d76', textTransform: 'uppercase', letterSpacing: '0.6px', padding: '6px 8px 4px', marginBottom: 2 },
  bottom: { padding: '8px', borderTop: '1px solid #30363d', display: 'flex', flexDirection: 'column', gap: 2 },
}

function NavBtn({ id, label, Icon, desc, active, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      title={desc}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
        borderRadius: 6, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
        background: active ? 'rgba(249,115,22,0.12)' : 'transparent',
        color: active ? '#f97316' : '#8b949e', fontSize: 13,
        fontWeight: active ? 600 : 400, transition: 'all 0.15s',
      }}
    >
      <Icon size={15} style={{ flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{label}</span>
      {active && <ChevronRight size={11} />}
    </button>
  )
}

function BottomBtn({ icon: Icon, label, badge, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
        borderRadius: 6, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
        background: 'transparent', color: '#8b949e', fontSize: 12, transition: 'all 0.15s',
      }}
    >
      <Icon size={14} style={{ flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{label}</span>
      {badge && (
        <span style={{ background: '#f97316', color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 9999, padding: '1px 6px' }}>
          {badge}
        </span>
      )}
    </button>
  )
}

export default function Sidebar({ activePage, onPageChange, onNotifications, onProfile, onFeedback }) {
  return (
    <div style={S.sidebar}>
      {/* Logo */}
      <div style={S.logo}>
        <div style={S.logoIcon}><Zap size={16} color="white" /></div>
        <div>
          <div style={S.logoText}>Smartworks</div>
          <div style={S.logoSub}>Dashboard Suite</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={S.nav}>
        <div style={S.sectionLabel}>Products</div>
        {NAV.map(n => (
          <NavBtn key={n.id} {...n} active={activePage === n.id} onClick={onPageChange} />
        ))}
      </nav>

      {/* Bottom */}
      <div style={S.bottom}>
        <BottomBtn icon={MessageSquarePlus} label="Feedback" onClick={onFeedback} />
        <BottomBtn icon={Bell} label="Notifications" badge="7" onClick={onNotifications} />
        <button
          onClick={onProfile}
          style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
            borderRadius: 6, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
            background: 'transparent', color: '#8b949e', fontSize: 12, transition: 'all 0.15s',
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#f97316,#ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>J</div>
          <span style={{ flex: 1, fontSize: 12 }}>Jeet Parida</span>
        </button>
      </div>
    </div>
  )
}
