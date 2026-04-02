import DashboardPage from './DashboardPage'
import { cspocPersonas, cspocFilters, cspocData } from '../data/cspocData'

export default function CSPOCPage() {
  return (
    <DashboardPage
      title="CSPOC"
      subtitle="Client Single Point of Contact — Finance · VAS · Tech Ops"
      personas={cspocPersonas}
      filters={cspocFilters}
      dataMap={cspocData}
      defaultPersona="finance"
    />
  )
}
