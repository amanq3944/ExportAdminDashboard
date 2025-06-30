import {
  FiHome,
  FiList,
  FiCalendar,
  FiDollarSign,
  FiPackage,
  FiLayers,
  FiFileText,
  FiShoppingBag,
  FiBox,
  FiCpu,
  FiSettings,
  FiUsers,
  FiTruck,
  FiBarChart2,
  FiDatabase,
} from 'react-icons/fi';
import { FaRegClipboard, FaChartLine } from 'react-icons/fa';
import { BsChevronRight } from 'react-icons/bs';

const menuItems = [
  { name: 'Dashboard', icon: <FiHome className="h-5 w-5" /> },
  { name: 'Tasks', icon: <FiList className="h-5 w-5" /> },
  { name: 'Buyer Meeting', icon: <FiCalendar className="h-5 w-5 text-purple-600" />, active: true },
  { name: 'Quick Costing', icon: <FiDollarSign className="h-5 w-5" /> },
  { name: 'Pre Order Costing', icon: <FiDollarSign className="h-5 w-5" /> },
  { name: 'Style Library', icon: <FiLayers className="h-5 w-5" /> },
  { name: 'Requisitions', icon: <FaRegClipboard className="h-5 w-5" />, hasSub: true },
  { name: 'Buyer Purchase', icon: <FiShoppingBag className="h-5 w-5" />, hasSub: true },
  { name: 'Inventory', icon: <FiBox className="h-5 w-5" />, hasSub: true },
  { name: 'Sample Development', icon: <FiCpu className="h-5 w-5" />, hasSub: true },
  { name: 'Production', icon: <FiPackage className="h-5 w-5" />, hasSub: true },
  { name: 'Master Admin', icon: <FiSettings className="h-5 w-5" />, hasSub: true },
  { name: 'Users', icon: <FiUsers className="h-5 w-5" />, hasSub: true },
  { name: 'Showroom', icon: <FiLayers className="h-5 w-5" />, hasSub: true },
  { name: 'Shipment', icon: <FiTruck className="h-5 w-5" />, hasSub: true },
  { name: 'KPI’s', icon: <FiBarChart2 className="h-5 w-5" />, hasSub: true },
  { name: 'E-Invoice / E-Way Bill', icon: <FiFileText className="h-5 w-5" />, hasSub: true },
  { name: 'Reports', icon: <FaChartLine className="h-5 w-5" /> },
  { name: 'Master Data', icon: <FiDatabase className="h-5 w-5" />, hasSub: true },
  { name: 'Settings', icon: <FiSettings className="h-5 w-5" />, hasSub: true },
];

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-64 bg-white shadow-md px-4 py-6 flex flex-col gap-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-6 px-2">
        {/* <img src="/logo.png" alt="Logo" className="w-8 h-8" /> */}
        <h1 className="text-xl font-semibold text-gray-900">
          <span className="font-bold">ADAM</span>{' '}
          <span className="text-orange-500 font-semibold">EXPORTS</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1">
        {menuItems.map(({ name, icon, active, hasSub }) => (
          <div
            key={name}
            className={`flex items-center gap-3 px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition
              ${active ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}
            `}
          >
            <div className="flex-shrink-0">{icon}</div>
            <span>{name}</span>
            {hasSub && <BsChevronRight className="ml-auto text-gray-400 h-4 w-4" />}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
