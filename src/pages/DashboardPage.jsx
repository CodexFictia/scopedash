/**
 * Generic dashboard page — persona-driven, with modal system, collapsible metrics,
 * centre KPI cards, disputes panel, invoice alert panel, task delegation,
 * meetings calendar, and zone-level charts.
 */
import { useState } from 'react'
import TopBar from '../components/TopBar'
import MetricCard from '../components/MetricCard'
import ActionList from '../components/ActionList'
import TopFiveList from '../components/TopFiveList'
import TrendChart from '../components/TrendChart'
import DataGrid from '../components/DataGrid'
import CompositeRangeCard from '../components/CompositeRangeCard'
import CompositeNote from '../components/CompositeNote'
import WorkflowFunnel from '../components/WorkflowFunnel'
import TasksStrip from '../components/TasksStrip'
import MeetingsFilterableGrid from '../components/MeetingsFilterableGrid'
import MeetingsCalendar from '../components/MeetingsCalendar'
import Modal from '../components/Modal'
import CentreKPICard from '../components/CentreKPICard'
import DisputePanel from '../components/DisputePanel'
import InvoiceAlertPanel from '../components/InvoiceAlertPanel'
import {
  ChevronDown, ChevronUp, UserCheck, Bell, CheckCircle2, AlertCircle, Clock,
} from 'lucide-react'

// ─── Modal content renderers ──────────────────────────────────────────────────

const STATUS_DOT = {
  'Excellent': '#3fb950', 'Good': '#3fb950', 'Renewing': '#388bfd',
  'Monitor': '#d29922', 'At Risk': '#f85149', 'Notice': '#f85149',
  'In LI': '#8b949e', 'Out of LI': '#d29922',
}

function ClientListModal({ data }) {
  const [delegated, setDelegated]         = useState({})
  const [delegateTarget, setDelegateTarget] = useState(null)
  const clients     = data?.clients  || []
  const aamOptions  = data?.aamOptions || ['Ankit Kumar', 'Ritu Agarwal', 'Saurabh Pal']
  const canDelegate = data?.actions?.includes('delegate')
  const canRemind   = data?.actions?.includes('remind')

  return (
    <div>
      {data?.note && (
        <div style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 6, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#f97316' }}>
          {data.note}
        </div>
      )}
      {clients.length === 0 && (
        <div style={{ textAlign: 'center', color: '#8b949e', padding: '24px 0', fontSize: 13 }}>
          No clients currently in this status.
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {clients.map((c, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid #21262d',
            borderRadius: 6, padding: '10px 12px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 10, alignItems: 'center',
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#e6edf3', display: 'flex', alignItems: 'center', gap: 6 }}>
                {c.name}
                {c.status && <span style={{ width: 7, height: 7, borderRadius: '50%', background: STATUS_DOT[c.status] || '#8b949e', display: 'inline-block' }} />}
              </div>
              <div style={{ fontSize: 11, color: '#8b949e', marginTop: 2 }}>
                {[c.location, c.am && `AM: ${c.am}`, c.seats && `${c.seats} seats`, c.lockin, c.health && `Health: ${c.health}`, c.daysNoticed && `${c.daysNoticed}d noticed`].filter(Boolean).join(' · ')}
              </div>
              {c.unpaid && <div style={{ fontSize: 11, color: '#d29922', marginTop: 1 }}>{c.unpaid}</div>}
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {canRemind && (
                <button onClick={() => {}} style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 5, cursor: 'pointer', padding: '4px 8px', color: '#f97316', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Bell size={11} /> Remind
                </button>
              )}
              {canDelegate && !delegated[c.name] && (
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setDelegateTarget(delegateTarget === c.name ? null : c.name)}
                    style={{ background: 'rgba(56,139,253,0.1)', border: '1px solid rgba(56,139,253,0.25)', borderRadius: 5, cursor: 'pointer', padding: '4px 8px', color: '#388bfd', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
                  >
                    <UserCheck size={11} /> Assign AAM
                  </button>
                  {delegateTarget === c.name && (
                    <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: 4, zIndex: 200, background: '#1c2333', border: '1px solid #30363d', borderRadius: 6, minWidth: 160, boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                      {aamOptions.map(a => (
                        <button key={a} onClick={() => { setDelegated(d => ({ ...d, [c.name]: a })); setDelegateTarget(null) }}
                          style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '7px 12px', color: '#e6edf3', fontSize: 12, borderBottom: '1px solid #21262d' }}>
                          {a}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {delegated[c.name] && (
                <span style={{ fontSize: 11, color: '#3fb950', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <CheckCircle2 size={11} /> {delegated[c.name]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InvoiceListModal({ data }) {
  const [reminded, setReminded] = useState({})
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {(data?.invoices || []).map((inv, i) => {
        const sent = reminded[inv.id]
        return (
          <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #21262d', borderRadius: 6, padding: '10px 12px', display: 'grid', gridTemplateColumns: '1fr 100px 80px 110px', gap: 8, alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#e6edf3' }}>{inv.client}</div>
              <div style={{ fontSize: 11, color: '#8b949e', marginTop: 2 }}>{inv.invoiceNo} · {inv.category}</div>
            </div>
            <div style={{ fontWeight: 600, fontSize: 12, color: '#e6edf3' }}>{inv.amount}</div>
            <div>
              {inv.overdueDays > 0
                ? <span style={{ fontSize: 10, color: inv.overdueDays > 30 ? '#f85149' : '#d29922', fontWeight: 600 }}>{inv.overdueDays}d overdue</span>
                : <span style={{ fontSize: 10, color: '#388bfd' }}>Due soon</span>}
            </div>
            <div>
              {sent
                ? <span style={{ fontSize: 11, color: '#3fb950', display: 'flex', alignItems: 'center', gap: 4 }}><CheckCircle2 size={11} /> Sent</span>
                : <button onClick={() => setReminded(r => ({ ...r, [inv.id]: true }))} style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', borderRadius: 5, cursor: 'pointer', padding: '4px 8px', color: '#f97316', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Bell size={11} /> Remind
                  </button>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function TicketListModal({ data }) {
  const SLA_COLOR = { 'Breached': '#f85149', 'At Risk': '#d29922', 'Within SLA': '#3fb950' }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {(data?.tickets || []).map((t, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #21262d', borderRadius: 6, padding: '10px 12px', display: 'grid', gridTemplateColumns: '1fr 70px 90px 80px', gap: 8, alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 12, color: '#e6edf3' }}>{t.id} — {t.title}</div>
            <div style={{ fontSize: 11, color: '#8b949e', marginTop: 2 }}>{t.client} · {t.category} · P{t.priority}</div>
          </div>
          <span style={{ fontSize: 10, color: '#8b949e' }}>{t.openDays}d open</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: SLA_COLOR[t.slaStatus] || '#8b949e', background: (SLA_COLOR[t.slaStatus] || '#8b949e') + '18', borderRadius: 20, padding: '2px 7px', display: 'inline-block' }}>{t.slaStatus}</span>
          <span style={{ fontSize: 11, color: '#8b949e' }}>{t.assignee}</span>
        </div>
      ))}
    </div>
  )
}

function ChecklistModal({ data }) {
  const [done, setDone] = useState({})
  const items = data?.items || []
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((item, i) => {
        const isComplete = item.status === 'completed' || done[i]
        const C = isComplete ? '#3fb950' : item.status === 'overdue' ? '#f85149' : '#d29922'
        const Icon = isComplete ? CheckCircle2 : item.status === 'overdue' ? AlertCircle : Clock
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid #21262d', borderRadius: 6, padding: '10px 12px' }}>
            <Icon size={14} color={C} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: '#e6edf3' }}>{item.label}</div>
              {item.sub && <div style={{ fontSize: 11, color: '#8b949e', marginTop: 1 }}>{item.sub}</div>}
            </div>
            {!isComplete && (
              <button onClick={() => setDone(d => ({ ...d, [i]: true }))} style={{ background: 'rgba(63,185,80,0.1)', border: '1px solid rgba(63,185,80,0.25)', borderRadius: 5, cursor: 'pointer', padding: '3px 8px', color: '#3fb950', fontSize: 11, fontWeight: 600 }}>
                Mark Done
              </button>
            )}
            {isComplete && <span style={{ fontSize: 10, color: '#3fb950' }}>✓ Done</span>}
          </div>
        )
      })}
    </div>
  )
}

function TaskViewPanel({ taskView }) {
  const [tab, setTab]               = useState('daily')
  const [delegated, setDelegated]   = useState({})
  const [delegateTarget, setDelegateTarget] = useState(null)
  const tasks      = taskView?.[tab] || []
  const aamOptions = taskView?.aamOptions || ['Ankit Kumar', 'Ritu Agarwal', 'Saurabh Pal']
  const PRIORITY_COLOR = { high: '#f85149', medium: '#d29922', low: '#8b949e' }

  return (
    <div style={{ background: '#1c2333', border: '1px solid #30363d', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #30363d' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CheckCircle2 size={15} color="#f97316" />
          <span style={{ fontWeight: 700, fontSize: 14, color: '#e6edf3' }}>Task Management</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['daily', 'weekly'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background: tab === t ? 'rgba(249,115,22,0.15)' : 'transparent', color: tab === t ? '#f97316' : '#8b949e', border: `1px solid ${tab === t ? 'rgba(249,115,22,0.4)' : '#30363d'}`, borderRadius: 6, cursor: 'pointer', padding: '4px 12px', fontSize: 12, fontWeight: 600, textTransform: 'capitalize' }}>
              {t === 'daily' ? 'Today' : 'This Week'}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {tasks.map((task, i) => {
          const isDelegated = delegated[task.id]
          return (
            <div key={task.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 16px', borderBottom: i < tasks.length - 1 ? '1px solid #21262d' : 'none' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', marginTop: 5, flexShrink: 0, background: PRIORITY_COLOR[task.priority] || '#8b949e' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: '#e6edf3', fontWeight: 500 }}>{task.label}</div>
                <div style={{ fontSize: 11, color: '#8b949e', marginTop: 2 }}>
                  {[task.client, task.due && `Due: ${task.due}`, task.category].filter(Boolean).join(' · ')}
                </div>
              </div>
              {task.canDelegate && !isDelegated && (
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <button onClick={() => setDelegateTarget(delegateTarget === task.id ? null : task.id)} style={{ background: 'rgba(56,139,253,0.08)', border: '1px solid rgba(56,139,253,0.2)', borderRadius: 5, cursor: 'pointer', padding: '3px 8px', color: '#388bfd', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <UserCheck size={10} /> Assign AAM
                  </button>
                  {delegateTarget === task.id && (
                    <div style={{ position: 'absolute', right: 0, top: '100%', marginTop: 3, zIndex: 100, background: '#1c2333', border: '1px solid #30363d', borderRadius: 6, minWidth: 150, boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
                      {aamOptions.map(a => (
                        <button key={a} onClick={() => { setDelegated(d => ({ ...d, [task.id]: a })); setDelegateTarget(null) }} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '7px 12px', color: '#e6edf3', fontSize: 12, borderBottom: '1px solid #21262d' }}>
                          {a}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {isDelegated && <span style={{ fontSize: 10, color: '#3fb950', whiteSpace: 'nowrap', flexShrink: 0 }}>✓ {isDelegated}</span>}
            </div>
          )
        })}
        {tasks.length === 0 && <div style={{ padding: '20px', textAlign: 'center', color: '#8b949e', fontSize: 12 }}>No tasks for this period</div>}
      </div>
    </div>
  )
}

// ─── Main DashboardPage ───────────────────────────────────────────────────────

export default function DashboardPage({
  title, subtitle, personas, filters, dataMap,
  defaultPersona, periodOptions, defaultPeriod,
}) {
  const [activePersona, setActivePersona] = useState(defaultPersona || personas[0].id)
  const d = dataMap[activePersona]

  const [activeModal, setActiveModal] = useState(null)
  const [metricsOpen, setMetricsOpen] = useState(true)
  const openModal  = (modal) => setActiveModal(modal)
  const closeModal = () => setActiveModal(null)

  const handlePersonaChange = (p) => { setActiveModal(null); setMetricsOpen(true); setActivePersona(p) }

  const hideCharts          = d.hideCharts === true
  const hideTasksStrip      = d.hideTasksStrip === true
  const actionsFirst        = d.actionsFirst === true
  const actionsAfterComposites = d.actionsAfterComposites === true
  const composites          = [d.taskComposite, d.meetingComposite].filter(Boolean)
  const metricOnClick       = (m) => m.modal ? () => openModal(m.modal) : undefined

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <TopBar
        title={title} subtitle={subtitle}
        personas={personas} activePersona={activePersona}
        onPersonaChange={handlePersonaChange}
        filters={filters} periodOptions={periodOptions} defaultPeriod={defaultPeriod}
      />

      <div className="page-content">

        {/* 1. Composite metrics explainer (dismissable) */}
        {d.compositeNote && <CompositeNote title={d.compositeNote.title} items={d.compositeNote.items} />}

        {/* 2. Tasks strip (skipped if hideTasksStrip) */}
        {!hideTasksStrip && d.tasksList && d.tasksList.length > 0 && (
          <TasksStrip title={d.tasksTitle || 'Tasks for today'} tasks={d.tasksList} />
        )}

        {/* 3a. Actions FIRST (before composites — for AM) */}
        {actionsFirst && d.actions && d.actions.length > 0 && (
          <ActionList title={d.actionsTitle || 'Action Required'} items={d.actions} />
        )}

        {/* 3b. Top invoice alert (CM) */}
        {d.topInvoices && d.topInvoices.length > 0 && (
          <InvoiceAlertPanel title="Top Unpaid Invoices — By Value" invoices={d.topInvoices} onViewAll={d.invoicesPageLink ? () => {} : undefined} />
        )}

        {/* 4. Task management panel (daily/weekly) */}
        {d.taskView && <TaskViewPanel taskView={d.taskView} />}

        {/* 5. Centre KPI cards (rehead) — BEFORE composites */}
        {d.centreCards && d.centreCards.length > 0 && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#656d76', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 8 }}>Centre Overview</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 12 }}>
              {d.centreCards.map((c, i) => (
                <CentreKPICard key={i} name={c.name} location={c.location} cm={c.cm} status={c.status} metrics={c.metrics} sparkline={c.sparkline} onMetricClick={openModal} />
              ))}
            </div>
          </div>
        )}

        {/* 6. Composite task + meeting range cards */}
        {composites.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${composites.length}, minmax(0, 1fr))`, gap: 12 }}>
            {composites.map((c, i) => (
              <CompositeRangeCard key={i} title={c.title} total={c.total} subtitle={c.subtitle} segments={c.segments} icon={c.icon} accent={c.accent} />
            ))}
          </div>
        )}

        {/* 6b. Actions AFTER composites (for AAM — under task+meeting metrics) */}
        {actionsAfterComposites && d.actions && d.actions.length > 0 && (
          <ActionList title={d.actionsTitle || 'Action Required'} items={d.actions} />
        )}

        {/* 7. KPI Metrics row (collapsible when flag set; hidden if centreCards present) */}
        {d.metrics && d.metrics.length > 0 && (
          <div>
            {d.collapsibleMetrics && (
              <button onClick={() => setMetricsOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, background: 'none', border: 'none', cursor: 'pointer', color: '#8b949e', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', padding: 0 }}>
                {metricsOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                KPI Metrics
                <span style={{ color: '#656d76', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                  — {metricsOpen ? 'collapse' : 'expand'}
                </span>
              </button>
            )}
            {metricsOpen && (
              <div className="metric-row">
                {d.metrics.map((m, i) => <MetricCard key={i} {...m} onClick={metricOnClick(m)} />)}
              </div>
            )}
          </div>
        )}

        {/* 8. Workflow funnel */}
        {d.funnel && <WorkflowFunnel title={d.funnel.title} stages={d.funnel.stages} />}

        {/* 9. Dispute management panel (CM) */}
        {d.disputes && d.disputes.length > 0 && <DisputePanel title="Dispute Management" disputes={d.disputes} />}

        {/* 10. Mid-row: Actions (standard position) + TopFive */}
        {!actionsFirst && !actionsAfterComposites ? (
          <div className="mid-row">
            <ActionList title={d.actionsTitle || 'Action Required'} items={d.actions} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(d.topFive || []).map((tf, i) => <TopFiveList key={i} title={tf.title} items={tf.items} />)}
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(d.topFive || []).map((tf, i) => <TopFiveList key={i} title={tf.title} items={tf.items} />)}
          </div>
        )}

        {/* 11. Charts */}
        {!hideCharts && d.charts && d.charts.length === 3 ? (
          <div className="chart-row-3">
            {d.charts.map((c, i) => <TrendChart key={i} type={c.type} title={c.title} data={c.data} lines={c.lines} />)}
          </div>
        ) : !hideCharts && d.charts && d.charts.length === 2 ? (
          <div className="chart-row">
            {d.charts.map((c, i) => <TrendChart key={i} type={c.type} title={c.title} data={c.data} lines={c.lines} />)}
          </div>
        ) : !hideCharts && d.charts && d.charts.length === 1 ? (
          <TrendChart type={d.charts[0].type} title={d.charts[0].title} data={d.charts[0].data} lines={d.charts[0].lines} height={240} />
        ) : null}

        {/* 12. Meetings Calendar (CM) */}
        {d.meetingsCalendar && (
          <MeetingsCalendar title="Meetings Calendar — April 2026" meetings={d.meetingsCalendar} />
        )}

        {/* 13. Meetings filterable grid (AAM — now moving to CM, kept for backward compat) */}
        {d.meetingsGrid && (
          <MeetingsFilterableGrid title={d.meetingsGrid.title || 'Meetings'} meetings={d.meetingsGrid.meetings} />
        )}

        {/* 14. Data grid */}
        {d.grid && d.columns && <DataGrid title={d.gridTitle} columns={d.columns} data={d.grid} />}
      </div>

      {/* ── Modal overlay ─────────────────────────────────────────────────── */}
      {activeModal && (
        <Modal title={activeModal.title} subtitle={activeModal.subtitle} onClose={closeModal} width={activeModal.width || 680}>
          {activeModal.type === 'clientList'   && <ClientListModal   data={activeModal.data} />}
          {activeModal.type === 'invoiceList'  && <InvoiceListModal  data={activeModal.data} />}
          {activeModal.type === 'ticketList'   && <TicketListModal   data={activeModal.data} />}
          {activeModal.type === 'checklist'    && <ChecklistModal    data={activeModal.data} />}
          {activeModal.type === 'info' && (
            <div style={{ fontSize: 13, color: '#c9d1d9', lineHeight: 1.7 }}>{activeModal.data?.content}</div>
          )}
        </Modal>
      )}
    </div>
  )
}
