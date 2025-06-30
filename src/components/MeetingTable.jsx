import { useState } from 'react';
import StatusBadge from './StatusBadge';
import FilterBar from './FilterBar';
import BulkActionBar from './BulkActionBar';
import Pagination from './Pagination';

const data = [
  {
    date: '01 May, 2025 at 2pm',
    status: 'Completed',
    type: 'Online',
    buyer: 'Mango Private Limited',
    brand: 'Mango',
    dept: 'Design',
    title: 'Costing Discussion with Zara',
    meetingDate: '01 May, 2025 at 2pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '02 May, 2025 at 3pm',
    status: 'Upcoming',
    type: 'Offline',
    buyer: 'Cherry Innovations',
    brand: 'Cherry',
    dept: 'Development',
    title: 'UI/UX Review',
    meetingDate: '02 May, 2025 at 3pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '03 May, 2025 at 10am',
    status: 'Follow-up 🔔 (3)',
    type: 'Offline',
    buyer: 'Pineapple Inc.',
    brand: 'Pineapple',
    dept: 'Marketing',
    title: 'Campaign Strategy',
    meetingDate: '03 May, 2025 at 10am',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '04 May, 2025 at 1pm',
    status: 'Re-scheduled',
    type: 'Offline',
    buyer: 'Peach Corp.',
    brand: 'Peach',
    dept: 'Finance',
    title: 'Budget Review',
    meetingDate: '04 May, 2025 at 1pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '05 May, 2025 at 4pm',
    status: 'Overdue',
    type: 'Online',
    buyer: 'Banana Solutions',
    brand: 'Banana',
    dept: 'Product',
    title: 'Feature Prioritization',
    meetingDate: '05 May, 2025 at 4pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '06 May, 2025 at 11am',
    status: 'In Progress 🔄 (1/3)',
    type: 'Online',
    buyer: 'Coconut Group',
    brand: 'Coconut',
    dept: 'Support',
    title: 'Customer Feedback',
    meetingDate: '06 May, 2025 at 11am',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '07 May, 2025 at 2pm',
    status: 'Ongoing',
    type: 'Online',
    buyer: 'Lemon Technologies',
    brand: 'Lemon',
    dept: 'Sales',
    title: 'Sales Strategy',
    meetingDate: '07 May, 2025 at 2pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '08 May, 2025 at 9am',
    status: 'Completed',
    type: 'Offline',
    buyer: 'Grapefruit LLC',
    brand: 'Grapefruit',
    dept: 'Research',
    title: 'Market Analysis',
    meetingDate: '08 May, 2025 at 9am',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '09 May, 2025 at 3pm',
    status: 'Draft',
    type: 'Offline',
    buyer: 'Kiwi Systems',
    brand: 'Kiwi',
    dept: 'HR',
    title: 'Employee Engagement',
    meetingDate: '09 May, 2025 at 3pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  },
  {
    date: '10 May, 2025 at 5pm',
    status: 'Archived',
    type: 'Offline',
    buyer: 'Orange Enterprises',
    brand: 'Orange',
    dept: 'Legal',
    title: 'Contract Review',
    meetingDate: '10 May, 2025 at 5pm',
    participants: 'Mohd Saleem +2\nBuyer, Sales'
  }
];

export default function MeetingTable() {
  const [selected, setSelected] = useState([]);
  const toggleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-4 bg-white rounded-md shadow border-gray-300 border ml-3 overflow-x-auto">
      <FilterBar />
      <div className="min-w-[1200px] relative">
        <table className="w-full text-sm table-auto">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Type</th>
              <th className="p-3">Buyer Name</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Dept.</th>
              <th className="p-3">Title</th>
              <th className="p-3">Meeting Date</th>
              <th className="p-3">Participants</th>
              <th className="p-3 sticky right-0 bg-gray-50 z-10">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(idx)}
                    onChange={() => toggleSelect(idx)}
                  />
                </td>
                <td className="p-3 whitespace-nowrap">{row.date}</td>
                <td className="p-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="p-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${row.type === 'Online' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>
                    {row.type}
                  </span>
                </td>
                <td className="p-3 whitespace-nowrap font-medium underline underline-offset-2 cursor-pointer">{row.buyer}</td>
                <td className="p-3 font-medium">{row.brand}</td>
                <td className="p-3 font-medium">{row.dept}</td>
                <td className="p-3 font-medium underline underline-offset-2 cursor-pointer">{row.title}</td>
                <td className="p-3 whitespace-nowrap">{row.meetingDate}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">M</div>
                    <div className="text-sm leading-4">
                      <div className="font-medium">Mohd Saleem +2</div>
                      <div className="text-xs text-gray-500">Buyer, Sales</div>
                    </div>
                  </div>
                </td>
                <td className={`p-3 text-gray-400 sticky right-0 z-10 whitespace-nowrap ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BulkActionBar selectedCount={selected.length} onClear={() => setSelected([])} />
      <Pagination totalPages={12} currentPage={1} onPageChange={() => {}} />
    </div>
  );
}
