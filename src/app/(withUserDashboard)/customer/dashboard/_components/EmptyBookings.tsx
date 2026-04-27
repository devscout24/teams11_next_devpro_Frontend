import {IconCalendarPlus} from '@tabler/icons-react';
import {Button} from '@/components/ui/button';

export function EmptyBookings() {
  return (
    <div className="bg-white border border-dashed border-gray-200 rounded-3xl p-12 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
        <IconCalendarPlus className="w-8 h-8 text-orange-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        No upcoming bookings
      </h3>
      <p className="text-gray-400 text-sm max-w-xs mb-6">
        Discover incredible local pros and reserve your next appointment in
        seconds.
      </p>
      <Button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 rounded-full">
        Book now
      </Button>
    </div>
  );
}
