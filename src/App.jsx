import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatusTabs from './components/StatusTabs'
import MeetingTable from './components/MeetingTable'
import PageHeader from './components/PageHeader'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <PageHeader />
        <StatusTabs />
        <MeetingTable />
      </div>
    </div>
  )
}

export default App