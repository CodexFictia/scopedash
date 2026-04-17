import { Layers, Ticket, Building2, Users, Briefcase, Bell, MessageSquarePlus, ChevronRight, Zap, ShoppingBag } from 'lucide-react'
import { useTheme } from '../ThemeContext.jsx'

const NAV = [
  { id: 'cspoc',         label: 'Vendor Reports',  Icon: Layers,       desc: 'Vendor Reports — Finance · VAS · Tech Ops' },
  { id: 'vendorStores',  label: 'Vendor Stores',   Icon: ShoppingBag,  desc: 'Smart Cafe — Orders · Catalogue · Settlements' },
  { id: 'ticketing',     label: 'Ticketing',        Icon: Ticket,       desc: 'Service Desk & SLA' },
  { id: 'nexusRE',       label: 'Nexus RE',         Icon: Building2,    desc: 'Real Estate' },
  { id: 'nexusAM',       label: 'Nexus AM',         Icon: Users,        desc: 'Account Management' },
  { id: 'crm',           label: 'CRM',              Icon: Briefcase,    desc: 'Sales Pipeline' },
]

function NavBtn({ id, label, Icon, desc, active, onClick, t }) {
  return (
    <button
      onClick={() => onClick(id)}
      title={desc}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
        borderRadius: 6, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
        background: active ? 'rgba(249,115,22,0.12)' : 'transparent',
        color: active ? '#f97316' : t.textMuted, fontSize: 13,
        fontWeight: active ? 600 : 400, transition: 'all 0.15s',
      }}
    >
      <Icon size={15} style={{ flexShrink: 0 }} />
      <span style={{ flex: 1 }}>{label}</span>
      {active && <ChevronRight size={11} />}
    </button>
  )
}

function BottomBtn({ icon: Icon, label, badge, onClick, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
        borderRadius: 6, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
        background: 'transparent', color: t.textMuted, fontSize: 12, transition: 'all 0.15s',
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
  const { t } = useTheme()
  return (
    <div style={{ width: 220, background: t.bgSurface, borderRight: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ padding: '18px 16px', borderBottom: `1px solid ${t.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 34, height: 34, background: 'linear-gradient(135deg, #f97316, #ea580c)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Zap size={16} color="white" />
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: t.textPrimary, lineHeight: 1.2 }}>Smartworks</div>
          <div style={{ fontSize: 10, color: t.textMuted, marginTop: 1 }}>Dashboard Suite</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto' }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: t.textSubtle, textTransform: 'uppercase', letterSpacing: '0.6px', padding: '6px 8px 4px', marginBottom: 2 }}>Products</div>
        {NAV.map(n => (
          <NavBtn key={n.id} {...n} t={t} active={activePage === n.id} onClick={onPageChange} />
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ padding: '8px', borderTop: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <BottomBtn icon={MessageSquarePlus} label="Feedback" onClick={onFeedback} t={t} />
        <BottomBtn icon={Bell} label="Notifications" badge="7" onClick={onNotifications} t={t} />
        <button
          onClick={onProfile}
          style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
            borderRadius: 6, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
            background: 'transparent', color: t.textMuted, fontSize: 12, transition: 'all 0.15s',
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#f97316,#ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>J</div>
          <span style={{ flex: 1, fontSize: 12 }}>Jeet Parida</span>
        </button>
      </div>
    </div>
  )
}
