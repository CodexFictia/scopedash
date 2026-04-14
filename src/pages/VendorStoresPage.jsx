import DashboardPage from './DashboardPage'
import { vendorStoresPersonas, vendorStoresFilters, vendorStoresData } from '../data/vendorStoresData'

export default function VendorStoresPage() {
  return (
    <DashboardPage
      title="Vendor Stores"
      subtitle="Smart Cafe Commerce — Orders · Catalogue · Sales · Settlements"
      personas={vendorStoresPersonas}
      filters={vendorStoresFilters}
      dataMap={vendorStoresData}
      defaultPersona="vendor"
      periodOptions={['Today', 'This Week', 'This Month', 'This Quarter', 'Custom']}
      defaultPeriod="Today"
    />
  )
}
