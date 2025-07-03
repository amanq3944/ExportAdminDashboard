import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatusTabs from './components/StatusTabs';
import MeetingTable from './components/MeetingTable';
import PageHeader from './components/PageHeader';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={sidebarOpen} />
      <div className="w-[80%] pr-1 flex-1 flex flex-col transition-all duration-300">
        <Topbar onToggleSidebar={toggleSidebar} />
        <PageHeader />
        <StatusTabs />
        <MeetingTable />
      </div>
    </div>
  );
}

export default App;
