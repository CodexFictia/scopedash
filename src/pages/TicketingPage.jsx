import DashboardPage from './DashboardPage'
import { ticketingPersonas, ticketingFilters, ticketingData } from '../data/ticketingData'

export default function TicketingPage() {
  return (
    <DashboardPage
      title="Ticketing"
      subtitle="Service Desk & SLA Performance — All Centres"
      personas={ticketingPersonas}
      filters={ticketingFilters}
      dataMap={ticketingData}
      defaultPersona="l3"
    />
  )
}
