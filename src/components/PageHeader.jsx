import { FiDownload, FiPlus } from 'react-icons/fi';

export default function PageHeader() {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-50 rounded-t-md">
      {/* Left: Title + Breadcrumb */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Buyer Meeting List View</h2>
        <div className="text-sm text-gray-500 mt-1">
          <span className="text-purple-600 font-medium">Buyer Meeting</span>
          <span className="mx-1">››</span>
          Buyer Meeting List View
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-purple-500 text-white rounded hover:bg-purple-600 transition">
          <FiDownload className="text-base" />
          Export
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-black text-white rounded hover:bg-gray-800 transition">
          <FiPlus className="text-base" />
          Create New Meeting
        </button>
      </div>
    </div>
  );
}
