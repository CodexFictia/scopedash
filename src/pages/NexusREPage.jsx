import DashboardPage from './DashboardPage'
import { nexusREPersonas, nexusREFilters, nexusREData } from '../data/nexusREData'

export default function NexusREPage() {
  return (
    <DashboardPage
      title="Nexus RE"
      subtitle="Real Estate — Deal Pipeline, Leasing & Portfolio Management"
      personas={nexusREPersonas}
      filters={nexusREFilters}
      dataMap={nexusREData}
      defaultPersona="mgmt"
    />
  )
}
