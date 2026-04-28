'use client';

import React from 'react';
import {IconBell, IconCalendarEvent} from '@tabler/icons-react';
import {cn} from '@/lib/utils';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {BellDot} from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Assign a new customer.',
    desc: 'Sarah Johnson booked a haircut for 2:00 PM today.',
    time: '10 min ago',
    day: 'TODAY',
  },
  {
    id: 2,
    title: 'Assign a new customer.',
    desc: 'Sarah Johnson booked a haircut for 2:00 PM today.',
    time: '10 min ago',
    day: 'TODAY',
  },
  {
    id: 3,
    title: 'Assign a new customer.',
    desc: 'Sarah Johnson booked a haircut for 2:00 PM today.',
    time: '10 min ago',
    day: 'YESTERDAY',
  },
  {
    id: 4,
    title: 'Assign a new customer.',
    desc: 'Sarah Johnson booked a haircut for 2:00 PM today.',
    time: '10 min ago',
    day: 'YESTERDAY',
  },
];

export function NotificationModal() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="p-2 border border-gray-300 rounded-full cursor-pointer flex justify-center items-center hover:bg-gray-50 transition-colors relative active:scale-95">
          <BellDot className="w-4 h-4 text-primary" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
        </div>
      </PopoverTrigger>

      {/* align="end" dile eta icon-er sathe right side align hoye niche open hobe */}
      <PopoverContent
        align="end"
        sideOffset={10}
        className="w-[450px] p-0 overflow-hidden rounded-4xl border border-gray-100 shadow-2xl z-9999">
        <div className="p-6 bg-white">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                <IconBell className="text-[#D32F2F] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Notifications
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  You have 2 unread notifications
                </p>
              </div>
            </div>
            <button className="text-[#D32F2F] text-xs font-bold hover:underline transition-all">
              Mark all read
            </button>
          </div>

          {/* List Content */}
          <div className="space-y-6 max-h-[450px] overflow-y-auto pr-1 scrollbar-hide">
            {['TODAY', 'YESTERDAY'].map((day) => (
              <div key={day} className="space-y-3">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                  {day}
                </h3>
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                  {NOTIFICATIONS.filter((n) => n.day === day).map(
                    (notif, index) => (
                      <div
                        key={notif.id}
                        className={cn(
                          'p-4 flex gap-4 hover:bg-gray-50/80 transition-colors relative cursor-pointer',
                          index !== 0 && 'border-t border-gray-50',
                        )}>
                        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                          <IconCalendarEvent className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-gray-900 text-sm leading-tight">
                              {notif.title}
                            </h4>
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          </div>
                          <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                            {notif.desc}
                          </p>
                          <p className="text-[9px] font-bold text-gray-300 pt-1 uppercase tracking-tighter">
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
        </div>
      </PopoverContent>
    </Popover>
  );
}
