'use client';

import React from 'react';
import {IconEdit, IconMail, IconPhone} from '@tabler/icons-react';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';

const workingHours = [
  {day: 'Sunday', time: 'OFF day', isOff: true},
  {day: 'Monday', time: '9:00 AM - 5:00 PM'},
  {day: 'Tuesday', time: '9:00 AM - 5:00 PM'},
  {day: 'Wednesday', time: '9:00 AM - 5:00 PM'},
  {day: 'Thursday', time: '09:00 AM - 5:00 PM', isToday: true},
  {day: 'Friday', time: '9:00 AM - 5:00 PM'},
  {day: 'Saturday', time: '9:00 AM - 5:00 PM'},
];

const services = [
  'Classic Haircut',
  'Hair Coloring',
  'Beard Trim',
  'Hot Towel Shave',
];

export default function StaffProfile() {
  return (
    <div className="space-y-6 mx-auto pb-10">
      {/* Profile Header Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            MJ
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900">Marcus Johnson</h2>
            <p className="text-sm text-gray-400 font-medium italic">
              Senior Barber
            </p>
            <div className="flex flex-col gap-1 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <IconMail className="w-3.5 h-3.5" /> yesitisnayan@gmail.com
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <IconPhone className="w-3.5 h-3.5" /> +8801406903682
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="rounded-md bg-red-50! border-none text-primary hover:bg-red-100 font-bold px-6 flex gap-2">
          <IconEdit className="w-4 h-4" /> Edit profile
        </Button>
      </div>

      {/* Specialties & Services Section */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h3 className="font-bold text-gray-900 mb-4">Specialties & Services</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service) => (
            <Badge
              key={service}
              className="bg-red-50 text-red-400 hover:bg-red-50 border-none px-4 py-1.5 rounded-full font-medium text-[11px]">
              {service}
            </Badge>
          ))}
        </div>
        <p className="text-[11px] text-gray-400">
          Services you&apos;re certified to perform. Contact admin to update.
        </p>
      </div>

      {/* Working Hours Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-6">Working Hours</h3>
        <div className="divide-y divide-gray-50">
          {workingHours.map((item) => (
            <div
              key={item.day}
              className="py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'text-sm font-medium',
                    item.isToday ? 'text-primary font-bold' : 'text-gray-600',
                  )}>
                  {item.day}
                </span>
                {item.isToday && (
                  <Badge className="bg-red-50 text-primary hover:bg-red-50 border-none text-[10px] px-2 py-0.5">
                    Today
                  </Badge>
                )}
              </div>
              <span
                className={cn(
                  'text-sm font-bold',
                  item.isOff
                    ? 'text-gray-400'
                    : item.isToday
                      ? 'text-primary'
                      : 'text-gray-800',
                )}>
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
