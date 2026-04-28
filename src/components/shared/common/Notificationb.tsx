'use client';

import React, {useState} from 'react';
import {IconBell, IconCalendarEvent, IconCreditCard} from '@tabler/icons-react';
import {cn} from '@/lib/utils';

const tabs = ['All', 'Bookings', 'Payments'];

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'booking confirmed',
    description: 'Sarah Johnson booked a haircut for 2:00 PM today.',
    time: '10 min ago',
    type: 'booking',
    isRead: false,
    day: 'TODAY',
  },
  {
    id: 2,
    title: 'payment successfully.',
    description: '$45.00 received from Emily Davis for hair color service.',
    time: '1 hr ago',
    type: 'payment',
    isRead: false,
    day: 'TODAY',
  },
  {
    id: 3,
    title: 'booking confirmed',
    description: 'Sarah Johnson booked a haircut for 2:00 PM today.',
    time: '10 min ago',
    type: 'booking',
    isRead: false,
    day: 'YESTERDAY',
  },
  {
    id: 4,
    title: 'payment successfully.',
    description: '$45.00 received from Emily Davis for hair color service.',
    time: '1 hr ago',
    type: 'payment',
    isRead: true,
    day: 'YESTERDAY',
  },
];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-6 shadow-sm mt-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
            <IconBell className="text-primary w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
            <p className="text-sm text-gray-400">
              You have 2 unread notifications
            </p>
          </div>
        </div>
        <button className="text-primary text-sm font-medium hover:underline">
          Mark all read
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-50/50 border border-gray-100 p-1.5 rounded-2xl flex gap-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all',
              activeTab === tab
                ? 'bg-primary text-white shadow-md shadow-red-100'
                : 'text-gray-400 hover:text-gray-600',
            )}>
            {tab}
          </button>
        ))}
      </div>

      {/* Notification Groups */}
      {['TODAY', 'YESTERDAY'].map((day) => (
        <div key={day} className="mb-8 last:mb-0">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 ml-1">
            {day}
          </h3>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            {NOTIFICATIONS_DATA.filter((n) => n.day === day).map(
              (notif, index) => (
                <div
                  key={notif.id}
                  className={cn(
                    'p-5 flex gap-4 transition-colors hover:bg-gray-50/50 cursor-pointer relative',
                    index !== 0 && 'border-t border-gray-50',
                  )}>
                  {/* Icon Container */}
                  <div
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
                      notif.type === 'booking' ? 'bg-red-50' : 'bg-green-50',
                    )}>
                    {notif.type === 'booking' ? (
                      <IconCalendarEvent className="w-6 h-6 text-red-500" />
                    ) : (
                      <IconCreditCard className="w-6 h-6 text-green-500" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 capitalize leading-none">
                        {notif.title}
                      </h4>
                      {!notif.isRead && (
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400 leading-snug">
                      {notif.description}
                    </p>
                    <p className="text-[11px] font-medium text-gray-300 pt-1">
                      {notif.time}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
