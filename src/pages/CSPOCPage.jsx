import DashboardPage from './DashboardPage'
import { cspocPersonas, cspocFilters, cspocData } from '../data/cspocData'

export default function CSPOCPage() {
  return (
    <DashboardPage
      title="Vendor Reports"
      subtitle="Vendor & Store Operations — Finance · VAS · Tech Ops"
      personas={cspocPersonas}
      filters={cspocFilters}
      dataMap={cspocData}
      defaultPersona="finance"
      periodOptions={['Yesterday', 'Last Week', 'Last Month', 'Custom']}
      defaultPeriod="Yesterday"
    />
  )
}
