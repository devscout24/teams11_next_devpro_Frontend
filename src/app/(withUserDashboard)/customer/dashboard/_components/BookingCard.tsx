import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconVideo,
  IconBrandPaypal,
} from '@tabler/icons-react';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface BookingProps {
  name: string;
  service: string;
  date: string;
  time: string;
  type: 'Virtual' | 'In-person';
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  price: string;
  category?: string;
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
  category,
  image,
}: BookingProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image src={image} alt={name} width={200} height={200} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-xs text-gray-400">{service}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={cn(
              'text-[10px] font-bold px-3 py-1 rounded-full uppercase',
              status === 'Confirmed'
                ? 'bg-green-50 text-green-600'
                : status === 'Pending'
                  ? 'bg-orange-50 text-orange-600'
                  : 'bg-red-50 text-red-600',
            )}>
            {status}
          </span>
          <span className="text-sm font-bold text-gray-500 flex items-center gap-0.5">
            <span className="text-[10px] opacity-70">$</span>
            {price}
          </span>
        </div>
      </div>

      <div className="flex gap-6 text-gray-400 text-xs my-5">
        <div className="flex items-center gap-1.5">
          <IconCalendar className="w-4 h-4" /> {date}
        </div>
        <div className="flex items-center gap-1.5">
          <IconClock className="w-4 h-4" /> {time}
        </div>
        <div className="flex items-center gap-1.5">
          {type === 'Virtual' ? (
            <IconVideo className="w-4 h-4" />
          ) : (
            <IconMapPin className="w-4 h-4" />
          )}
          {type}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {category === 'previous' ? (
          <>
            <Button
              variant="outline"
              className="rounded-xl bg-gray-200 border-none hover:bg-gray-300 text-gray-700 font-bold flex gap-2">
              <IconBrandPaypal className="w-4 h-4 text-[#003087]" /> Pay Now
            </Button>
            {/* Add Review button links to your review page */}
            <Link href="/customer/reviews/add" className="w-full">
              <Button className="w-full rounded-xl bg-primary hover:bg-[#B71C1C] text-white font-bold">
                Add Review
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              className="rounded-xl bg-gray-200 border-none hover:bg-gray-300 text-gray-700 font-bold">
              Reschedule
            </Button>
            <Button className="rounded-xl bg-primary hover:bg-[#B71C1C] text-white font-bold">
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
