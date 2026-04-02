import { useState } from 'react'
import Sidebar from './components/Sidebar'
import CSPOCPage from './pages/CSPOCPage'
import TicketingPage from './pages/TicketingPage'
import NexusREPage from './pages/NexusREPage'
import NexusAMPage from './pages/NexusAMPage'
import CRMPage from './pages/CRMPage'
import NotificationsPanel from './components/NotificationsPanel'
import FeedbackModal from './components/FeedbackModal'
import ProfilePanel from './components/ProfilePanel'

export default function App() {
  const [activePage, setActivePage] = useState('cspoc')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const renderPage = () => {
    switch (activePage) {
      case 'cspoc': return <CSPOCPage />
      case 'ticketing': return <TicketingPage />
      case 'nexusRE': return <NexusREPage />
      case 'nexusAM': return <NexusAMPage />
      case 'crm': return <CRMPage />
      default: return <CSPOCPage />
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0d1117', overflow: 'hidden' }}>
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
        onNotifications={() => setShowNotifications(true)}
        onProfile={() => setShowProfile(true)}
        onFeedback={() => setShowFeedback(true)}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {renderPage()}
      </div>

      {showNotifications && <NotificationsPanel onClose={() => setShowNotifications(false)} />}
      {showProfile && <ProfilePanel onClose={() => setShowProfile(false)} />}
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </div>
  )
}
