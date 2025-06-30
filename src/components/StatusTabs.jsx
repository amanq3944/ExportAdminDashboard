import { useState } from 'react';

const tabs = [
  { label: 'All', count: 100, activeBg: 'bg-purple-100', activeText: 'text-purple-700', badgeBg: 'bg-purple-600' },
  { label: 'Draft', count: 50, activeBg: 'bg-gray-100', activeText: 'text-gray-700', badgeBg: 'bg-gray-700' },
  { label: 'Archive', count: 75, activeBg: 'bg-gray-100', activeText: 'text-gray-700', badgeBg: 'bg-gray-700' },
];

export default function StatusTabs() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex items-center gap-4 bg-white p-2 rounded-md border-gray-300 border ml-3 my-2">
      {tabs.map((tab) => {
        const isActive = tab.label === activeTab;
        return (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md font-medium text-sm transition
              ${isActive ? `${tab.activeBg} ${tab.activeText}` : 'text-gray-500 hover:bg-gray-100'}
            `}
          >
            <span>{tab.label}</span>
            <span
              className={`text-white text-xs font-semibold px-2 py-0.5 rounded-full
                ${isActive ? tab.badgeBg : 'bg-gray-700'}
              `}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
