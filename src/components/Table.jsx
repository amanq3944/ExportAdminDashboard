import React from 'react';

const Table = () => {
  const meetings = [
    {
      dateTime: "01 May, 2025 at 2pm",
      status: "Completed",
      type: "Online",
      buyerName: "Manage Private Limited",
      brand: "Manage",
      dept: "Design",
      title: "Coating Discussion with Zero",
      meetingDate: "01 May, 2025"
    },
    {
      dateTime: "02 May, 2025 at 3pm",
      status: "Executive",
      type: "Offline",
      buyerName: "Cherry Innovations",
      brand: "Cherry",
      dept: "Development",
      title: "UI/LIX Review",
      meetingDate: "02 May, 2025"
    },
    {
      dateTime: "03 May, 2025 at 10pm",
      status: "Follow-up",
      type: "Offline",
      buyerName: "Fineapple Inc.",
      brand: "Fineapple",
      dept: "Marketing",
      title: "Campaign Strategy",
      meetingDate: "03 May, 2025"
    },
    {
      dateTime: "04 May, 2025 at 1pm",
      status: "Go to business",
      type: "Offline",
      buyerName: "Peach Corp.",
      brand: "Peach",
      dept: "Finance",
      title: "Budget Review",
      meetingDate: "04 May, 2025"
    },
    {
      dateTime: "05 May, 2025 at 4pm",
      status: "Creative",
      type: "Online",
      buyerName: "Banana Solutions",
      brand: "Banana",
      dept: "Product",
      title: "Feature Prioritization",
      meetingDate: "05 May, 2025"
    },
    {
      dateTime: "06 May, 2025 at 10pm",
      status: "Go to progress",
      type: "Offline",
      buyerName: "Coconut Group",
      brand: "Coconut",
      dept: "Support",
      title: "Customer Feedback",
      meetingDate: "06 May, 2025"
    },
    {
      dateTime: "07 May, 2025 at 3pm",
      status: "Creative",
      type: "Online",
      buyerName: "Lemon Technologies",
      brand: "Lemon",
      dept: "Sales",
      title: "Sales Strategy",
      meetingDate: "07 May, 2025"
    },
    {
      dateTime: "08 May, 2025 at 6pm",
      status: "Completed",
      type: "Offline",
      buyerName: "Grapefruit LLC",
      brand: "Grapefruit",
      dept: "Research",
      title: "Market Analysis",
      meetingDate: "08 May, 2025"
    },
    {
      dateTime: "09 May, 2025 at 3pm",
      status: "Event",
      type: "Offline",
      buyerName: "Kui Systems",
      brand: "Kui",
      dept: "HR",
      title: "Employee Engagement",
      meetingDate: "09 May, 2025"
    },
    {
      dateTime: "10 May, 2025 at 5pm",
      status: "Exhibited",
      type: "Offline",
      buyerName: "Orange Enterprises",
      brand: "Orange",
      dept: "Legal",
      title: "Contract Review",
      meetingDate: "10 May, 2025"
    }
  ];

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'executive':
        return 'status-executive';
      case 'follow-up':
        return 'status-follow-up';
      case 'creative':
        return 'status-creative';
      case 'event':
        return 'status-event';
      case 'exhibited':
        return 'status-exhibited';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="font-semibold">All</button>
          <button className="font-semibold">Draft</button>
          <button className="font-semibold">Archive</button>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search anything here..." 
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-8 gap-4 font-semibold text-sm text-gray-600">
          <div>Date & Time</div>
          <div>Status</div>
          <div>Type</div>
          <div>Buyer Name</div>
          <div>Brand</div>
          <div>Dept.</div>
          <div>Title</div>
          <div>Meeting Date</div>
        </div>
      </div>

      <div className="space-y-2">
        {meetings.map((meeting, index) => (
          <div key={index} className="grid grid-cols-8 gap-4 items-center p-3 bg-white border border-gray-200 rounded-md">
            <div className="text-sm">{meeting.dateTime}</div>
            <div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(meeting.status)}`}>
                {meeting.status}
              </span>
            </div>
            <div className="text-sm">{meeting.type}</div>
            <div className="text-sm">{meeting.buyerName}</div>
            <div className="text-sm">{meeting.brand}</div>
            <div className="text-sm">{meeting.dept}</div>
            <div className="text-sm">{meeting.title}</div>
            <div className="text-sm">{meeting.meetingDate}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Alarms selected</span>
          <button className="text-gray-500">X</button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Items Per Page</span>
            <select className="border border-gray-300 rounded-md px-2 py-1">
              <option>50</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm">1–50 of 100</span>
            <button className="px-2 py-1 border border-gray-300 rounded-md">0</button>
            <button className="px-2 py-1 border border-gray-300 rounded-md">2</button>
            <button className="px-2 py-1 border border-gray-300 rounded-md">3</button>
            <button className="px-2 py-1 border border-gray-300 rounded-md">4</button>
            <button className="px-2 py-1 border border-gray-300 rounded-md">10</button>
            <button className="px-2 py-1 border border-gray-300 rounded-md">11</button>
            <button className="px-2 py-1 border border-gray-300 rounded-md">12</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;