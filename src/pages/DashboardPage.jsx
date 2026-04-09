/**
 * Generic dashboard page that renders any persona-driven dataset.
 * Used by all 5 product pages.
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

export default function DashboardPage({
  title,
  subtitle,
  personas,
  filters,
  dataMap,
  defaultPersona,
  periodOptions,
  defaultPeriod,
}) {
  const [activePersona, setActivePersona] = useState(defaultPersona || personas[0].id)
  const d = dataMap[activePersona]

  const hideCharts = d.hideCharts === true
  const composites = [d.taskComposite, d.meetingComposite].filter(Boolean)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <TopBar
        title={title}
        subtitle={subtitle}
        personas={personas}
        activePersona={activePersona}
        onPersonaChange={setActivePersona}
        filters={filters}
        periodOptions={periodOptions}
        defaultPeriod={defaultPeriod}
      />

      <div className="page-content">
        {/* Dismissable composite metrics explainer */}
        {d.compositeNote && (
          <CompositeNote title={d.compositeNote.title} items={d.compositeNote.items} />
        )}

        {/* Tasks strip at top */}
        {d.tasksList && d.tasksList.length > 0 && (
          <TasksStrip title={d.tasksTitle || 'Tasks for today'} tasks={d.tasksList} />
        )}

        {/* Composite task + meeting cards */}
        {composites.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${composites.length}, minmax(0, 1fr))`,
              gap: 12,
            }}
          >
            {composites.map((c, i) => (
              <CompositeRangeCard
                key={i}
                title={c.title}
                total={c.total}
                subtitle={c.subtitle}
                segments={c.segments}
                icon={c.icon}
                accent={c.accent}
              />
            ))}
          </div>
        )}

        {/* KPI Metrics Row */}
        {d.metrics && d.metrics.length > 0 && (
          <div className="metric-row">
            {d.metrics.map((m, i) => (
              <MetricCard key={i} {...m} />
            ))}
          </div>
        )}

        {/* Page-wide workflow funnel (e.g. AM) */}
        {d.funnel && (
          <WorkflowFunnel title={d.funnel.title} stages={d.funnel.stages} />
        )}

        {/* Actions + Top 5 stack */}
        <div className="mid-row">
          <ActionList title={d.actionsTitle || 'Action Required'} items={d.actions} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(d.topFive || []).map((tf, i) => (
              <TopFiveList key={i} title={tf.title} items={tf.items} />
            ))}
          </div>
        </div>

        {/* Charts */}
        {!hideCharts && d.charts && d.charts.length === 3 ? (
          <div className="chart-row-3">
            {d.charts.map((c, i) => (
              <TrendChart key={i} type={c.type} title={c.title} data={c.data} lines={c.lines} />
            ))}
          </div>
        ) : !hideCharts && d.charts && d.charts.length === 2 ? (
          <div className="chart-row">
            {d.charts.map((c, i) => (
              <TrendChart key={i} type={c.type} title={c.title} data={c.data} lines={c.lines} />
            ))}
          </div>
        ) : !hideCharts && d.charts && d.charts.length === 1 ? (
          <TrendChart
            type={d.charts[0].type}
            title={d.charts[0].title}
            data={d.charts[0].data}
            lines={d.charts[0].lines}
            height={240}
          />
        ) : null}

        {/* Meetings filterable grid (AAM) */}
        {d.meetingsGrid && (
          <MeetingsFilterableGrid
            title={d.meetingsGrid.title || 'Meetings'}
            meetings={d.meetingsGrid.meetings}
          />
        )}

        {/* Data Grid */}
        {d.grid && d.columns && (
          <DataGrid title={d.gridTitle} columns={d.columns} data={d.grid} />
        )}
      </div>
    </div>
  )
}
