import DashboardPage from './DashboardPage'
import { nexusAMPersonas, nexusAMFilters, nexusAMData } from '../data/nexusAMData'

export default function NexusAMPage() {
  return (
    <DashboardPage
      title="Nexus AM"
      subtitle="Account Management — Retention · Expansion · Client Experience"
      personas={nexusAMPersonas}
      filters={nexusAMFilters}
      dataMap={nexusAMData}
      defaultPersona="am"
      periodOptions={['All Time', 'Today', 'This Week', 'This Month', 'This Quarter', 'This Year', 'Custom']}
      defaultPeriod="All Time"
    />
  )
}
