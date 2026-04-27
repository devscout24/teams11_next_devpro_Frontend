'use client';

import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconVideo,
} from '@tabler/icons-react';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import Image from 'next/image';

interface BookingProps {
  name: string;
  service: string;
  date: string;
  time: string;
  type: 'Virtual' | 'In-person';
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  price: string;
  image: string;
}

export function BookingCard({
  name,
  service,
  date,
  time,
  type,
  status,
  price,
  image,
}: BookingProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-50 border border-gray-100">
            <Image
              src={image}
              className="w-full h-full object-cover"
              alt={name}
              width={200}
              height={200}
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
            <p className="text-sm text-gray-400">{service}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={cn(
              'text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider',
              status === 'Confirmed'
                ? 'bg-green-100 text-green-700'
                : status === 'Pending'
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-red-100 text-red-700',
            )}>
            {status}
          </span>
          <div className="flex items-center text-gray-900 font-bold">
            <span className="text-sm mr-0.5">$</span>
            <span className="text-lg">{price}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 text-gray-500 text-sm my-6">
        <div className="flex items-center gap-2">
          <IconCalendar className="w-4 h-4 text-gray-400" /> {date}
        </div>
        <div className="flex items-center gap-2">
          <IconClock className="w-4 h-4 text-gray-400" /> {time}
        </div>
        <div className="flex items-center gap-2">
          {type === 'Virtual' ? (
            <IconVideo className="w-4 h-4 text-gray-400" />
          ) : (
            <IconMapPin className="w-4 h-4 text-gray-400" />
          )}
          {type}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="h-12 rounded-xl bg-gray-100 border-none hover:bg-gray-200 text-gray-900 font-bold">
          Reschedule
        </Button>
        <Button className="h-12 rounded-xl bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold shadow-lg shadow-red-100">
          Cancel
        </Button>
      </div>
    </div>
  );
}
