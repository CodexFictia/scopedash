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

export default function DashboardPage({ title, subtitle, personas, filters, dataMap, defaultPersona }) {
  const [activePersona, setActivePersona] = useState(defaultPersona || personas[0].id)
  const d = dataMap[activePersona]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <TopBar
        title={title}
        subtitle={subtitle}
        personas={personas}
        activePersona={activePersona}
        onPersonaChange={setActivePersona}
        filters={filters}
      />

      <div className="page-content">
        {/* KPI Metrics Row */}
        <div className="metric-row">
          {d.metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </div>

        {/* Actions + Top 5 */}
        <div className="mid-row">
          <ActionList title="Action Required" items={d.actions} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {d.topFive.map((tf, i) => (
              <TopFiveList key={i} title={tf.title} items={tf.items} />
            ))}
          </div>
        </div>

        {/* Charts */}
        {d.charts.length === 3 ? (
          <div className="chart-row-3">
            {d.charts.map((c, i) => (
              <TrendChart key={i} type={c.type} title={c.title} data={c.data} lines={c.lines} />
            ))}
          </div>
        ) : d.charts.length === 2 ? (
          <div className="chart-row">
            {d.charts.map((c, i) => (
              <TrendChart key={i} type={c.type} title={c.title} data={c.data} lines={c.lines} />
            ))}
          </div>
        ) : d.charts.length === 1 ? (
          <TrendChart type={d.charts[0].type} title={d.charts[0].title} data={d.charts[0].data} lines={d.charts[0].lines} height={240} />
        ) : null}

        {/* Data Grid */}
        <DataGrid title={d.gridTitle} columns={d.columns} data={d.grid} />
      </div>
    </div>
  )
}
