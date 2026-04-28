import {IconBell, IconHeart, IconSearch} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export function UserNavbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <Link href={'/'}>BookingPam</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full bg-gray-100 border-none rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-red-100 outline-none transition-all"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-5">
          <button className="text-gray-500 hover:text-gray-900 transition-colors">
            <IconHeart className="w-6 h-6" />
          </button>
          <div className="relative cursor-pointer">
            <IconBell className="w-6 h-6 text-gray-500" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image
              src="/customer/profile.png"
              alt="User"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
