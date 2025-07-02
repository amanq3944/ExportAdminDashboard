import { FiMenu, FiSearch, FiMessageSquare, FiBell } from 'react-icons/fi';

const FilterBar = () => {
  return (
    <div className="flex flex-nowrap gap-3 mb-4 items-center overflow-x-auto">
      <div className="relative w-[200px] max-w-full">
        <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything here...."
          className="pl-10 pr-1 px-5 py-2 rounded-md border border-gray-300 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>
      {['Buyer Name', 'Brand', 'Dept', 'Meeting Type', 'Participants', 'Meeting Date', 'Status'].map((filter) => (
        <select
          key={filter}
          className="border border-gray-300 text-gray-400 rounded px-3 py-2 text-sm bg-white min-w-[100px]"
        >
          <option>{filter}</option>
        </select>
      ))}
    </div>

  );
};

export default FilterBar;
