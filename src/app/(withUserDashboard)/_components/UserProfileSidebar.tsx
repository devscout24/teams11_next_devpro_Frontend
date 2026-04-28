'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {
  IconLayoutGrid,
  IconUser,
  IconSettings,
  IconUsers,
  IconLogout,
} from '@tabler/icons-react';
import Image from 'next/image';

const menuItems = [
  {title: 'My Bookings', href: '/customer/dashboard', icon: IconLayoutGrid},
  {title: 'My Information', href: '/customer/info', icon: IconUser},
  {title: 'Settings', href: '/customer/settings', icon: IconSettings},
  {title: 'Invite Friends', href: '/customer/invite', icon: IconUsers},
];

export function UserProfileSidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-50">
          <Image
            src="/customer/profile.png"
            alt="Alex Morgan"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Alex Morgan</h3>
          <p className="text-sm text-gray-400">alex.morgan@email.com</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium',
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-red-100'
                  : 'text-gray-600 hover:bg-gray-50',
              )}>
              <item.icon
                className={cn(
                  'w-5 h-5',
                  isActive ? 'text-white' : 'text-gray-400',
                )}
              />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Sign Out Section */}
      <div className="mt-12 pt-6 border-t border-gray-50">
        <Link href={'/'}>
          <button className="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-red-600 transition-colors font-medium">
            <IconLogout className="w-5 h-5" />
            Sign out
          </button>
        </Link>
      </div>
    </div>
  );
}
