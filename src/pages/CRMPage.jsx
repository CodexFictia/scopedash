import DashboardPage from './DashboardPage'
import { crmPersonas, crmFilters, crmData } from '../data/crmData'

export default function CRMPage() {
  return (
    <DashboardPage
      title="CRM"
      subtitle="Sales Pipeline — Leads, Proposals, Negotiations & Forecasting"
      personas={crmPersonas}
      filters={crmFilters}
      dataMap={crmData}
      defaultPersona="salesmgmt"
    />
  )
}
