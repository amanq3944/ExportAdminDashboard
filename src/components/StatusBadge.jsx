const statusColors = {
  Completed: 'bg-green-100 text-green-700',
  Upcoming: 'bg-yellow-100 text-yellow-700',
  'Follow-up': 'bg-blue-100 text-blue-700',
  'Re-scheduled': 'bg-purple-100 text-purple-700',
  Overdue: 'bg-red-100 text-red-700',
  'In Progress': 'bg-orange-100 text-orange-700',
  Ongoing: 'bg-black text-white',
  Draft: 'bg-gray-200 text-gray-700',
  Archived: 'bg-red-200 text-red-800',
};

const StatusBadge = ({ status, icon, count }) => {
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap inline-flex items-center ${statusColors[status] || 'bg-gray-100 text-gray-600'}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {status}
      {count && <span className="ml-1">({count})</span>}
    </span>
  );
};

export default StatusBadge;
