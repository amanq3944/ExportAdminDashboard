import { FiMenu, FiSearch, FiMessageSquare, FiBell } from 'react-icons/fi';

const Topbar = ({ onToggleSidebar }) => {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="text-gray-700 text-2xl focus:outline-none hover:cursor-pointer">
          <FiMenu />
        </button>

        <div className="relative w-[300px] max-w-full">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything here...."
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 bg-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FiMessageSquare className="text-2xl text-gray-700" />
          <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white rounded-full px-1.5">
            10
          </span>
        </div>

        <div className="relative">
          <FiBell className="text-2xl text-gray-700" />
          <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white rounded-full px-1.5">
            10
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="text-sm leading-tight">
            <p className="font-semibold text-gray-800">Aman Qureshi</p>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
