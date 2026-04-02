import { useState } from 'react'
import { X, Bug, Lightbulb, Send, CheckCircle } from 'lucide-react'

const INPUT = {
  width: '100%', padding: '8px 10px', background: '#0d1117', border: '1px solid #30363d',
  borderRadius: 6, color: '#e6edf3', fontSize: 12, fontFamily: 'inherit',
}

export default function FeedbackModal({ onClose }) {
  const [type, setType] = useState('feature')
  const [form, setForm] = useState({ title: '', description: '', priority: 'medium', page: 'General' })
  const [done, setDone] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setDone(true)
    setTimeout(onClose, 2200)
  }

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 60 }} />
      <div style={{
        position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 480, background: '#161b22', borderRadius: 12, border: '1px solid #30363d',
        zIndex: 70, padding: 24, boxShadow: '0 24px 64px rgba(0,0,0,0.75)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#e6edf3' }}>Share Feedback</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b949e' }}><X size={16} /></button>
        </div>

        {done ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle size={40} color="#3fb950" style={{ margin: '0 auto 12px' }} />
            <p style={{ color: '#3fb950', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Feedback submitted!</p>
            <p style={{ color: '#8b949e', fontSize: 12 }}>We'll review it shortly. Thank you.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            {/* Type toggle */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              {[{ id: 'feature', label: 'Suggest Feature', Icon: Lightbulb }, { id: 'bug', label: 'Report Bug', Icon: Bug }].map(({ id, label, Icon }) => (
                <button key={id} type="button" onClick={() => setType(id)} style={{
                  flex: 1, padding: '7px 10px', borderRadius: 6,
                  border: `1px solid ${type === id ? '#f97316' : '#30363d'}`,
                  background: type === id ? 'rgba(249,115,22,0.12)' : 'transparent',
                  color: type === id ? '#f97316' : '#8b949e', fontSize: 12, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontWeight: 500,
                }}>
                  <Icon size={13} />{label}
                </button>
              ))}
            </div>

            <Label>Page / Module</Label>
            <select value={form.page} onChange={set('page')} style={{ ...INPUT, marginBottom: 10 }}>
              {['General', 'CSPOC', 'Ticketing', 'Nexus RE', 'Nexus AM', 'CRM'].map(o => <option key={o}>{o}</option>)}
            </select>

            <Label>Title *</Label>
            <input required value={form.title} onChange={set('title')} placeholder={type === 'feature' ? 'Short feature description...' : 'Brief bug summary...'} style={{ ...INPUT, marginBottom: 10 }} />

            <Label>Description *</Label>
            <textarea required rows={4} value={form.description} onChange={set('description')}
              placeholder={type === 'feature' ? 'What problem would this solve? Who needs it?' : 'Steps to reproduce, expected vs actual behavior...'}
              style={{ ...INPUT, resize: 'vertical', marginBottom: 10 }} />

            <Label>Priority</Label>
            <select value={form.priority} onChange={set('priority')} style={{ ...INPUT, marginBottom: 18 }}>
              {['low', 'medium', 'high', 'critical'].map(o => <option key={o} value={o}>{o.charAt(0).toUpperCase() + o.slice(1)}</option>)}
            </select>

            <button type="submit" style={{
              width: '100%', padding: '9px', background: '#f97316', border: 'none', borderRadius: 6,
              color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              <Send size={13} /> Submit Feedback
            </button>
          </form>
        )}
      </div>
    </>
  )
}

function Label({ children }) {
  return <label style={{ display: 'block', fontSize: 11, color: '#8b949e', marginBottom: 5, fontWeight: 500 }}>{children}</label>
}
