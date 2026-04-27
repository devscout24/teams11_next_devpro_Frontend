'use client';

import {cn} from '@/lib/utils';

const tabs = [
  {id: 'upcoming', label: 'Upcoming', count: 3},
  {id: 'waiting', label: 'Waiting', count: 0},
  {id: 'previous', label: 'Previous', count: 3},
];

interface BookingTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export function BookingTabs({activeTab, setActiveTab}: BookingTabsProps) {
  return (
    <div className="bg-white border border-gray-100 p-1.5 rounded-full flex gap-1 w-fit ml-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            'px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300',
            activeTab === tab.id
              ? 'bg-primary text-white shadow-lg shadow-red-100'
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50',
          )}>
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
