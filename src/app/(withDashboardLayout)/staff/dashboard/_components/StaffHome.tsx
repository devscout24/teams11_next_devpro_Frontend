'use client';

import React from 'react';
import {IconCalendarEvent, IconUsers} from '@tabler/icons-react';
import {cn} from '@/lib/utils';

const STATS = [
  {
    id: 1,
    label: "Today's Bookings",
    value: '12',
    icon: IconCalendarEvent,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-400',
  },
  {
    id: 2,
    label: 'Active Clients',
    value: '15',
    icon: IconUsers,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-400',
  },
];

const TODAY_BOOKINGS = [
  {
    id: 1,
    name: 'Robert Chen',
    initials: 'RC',
    service: 'Beard Trim + Haircut',
    time: '10:30 - 11:15',
    price: '55',
    status: 'Confirmed',
    avatarBg: 'bg-gray-400',
  },
  {
    id: 2,
    name: 'David Park',
    initials: 'DP',
    service: 'Hair Coloring',
    time: '14:00 - 15:30',
    price: '85',
    status: 'Confirmed',
    avatarBg: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'David Park',
    initials: 'DP',
    service: 'Hair Coloring',
    time: '14:00 - 15:30',
    price: '85',
    status: 'Confirmed',
    avatarBg: 'bg-blue-500',
  },
];

export default function StaffHome() {
  return (
    <div className="space-y-8 mx-auto">
      <h2 className="text-2xl font-bold text-gray-900">
        Today&apos;s Overview
      </h2>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STATS.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-5 shadow-sm">
            <div
              className={cn(
                'w-14 h-14 rounded-full flex items-center justify-center',
                stat.iconBg,
              )}>
              <stat.icon className={cn('w-7 h-7', stat.iconColor)} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Bookings List Section */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h3 className="font-bold text-gray-900">Today&apos;s Bookings</h3>
        </div>

        <div className="divide-y divide-gray-50">
          {TODAY_BOOKINGS.map((booking) => (
            <div
              key={booking.id}
              className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
              <div className="flex items-center gap-4">
                {/* Initials Avatar */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm',
                    booking.avatarBg,
                  )}>
                  {booking.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">
                    {booking.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    {booking.service}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="text-right">
                  <p className="text-[11px] font-bold text-gray-300 uppercase tracking-tighter">
                    {booking.time}
                  </p>
                  <p className="font-bold text-gray-900 text-lg">
                    <span className="text-sm font-medium opacity-50 mr-0.5">
                      $
                    </span>
                    {booking.price}
                  </p>
                </div>
                <span className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
