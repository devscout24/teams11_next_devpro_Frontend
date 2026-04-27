'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {cn} from '@/lib/utils';
import {type UserRole} from '@/hooks/use-role';
import type React from 'react';

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  roles?: UserRole[];
}

interface NavMainProps {
  items: NavItem[];
  role: UserRole;
}

export function NavMain({items, role}: NavMainProps) {
  const pathname = usePathname();

  const groupLabel = role === 'vendor' ? 'Vendor Menu' : 'User Menu';

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 mb-1">
        {groupLabel}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => {
            const isActive =
              pathname === item.url ||
              (item.url !== `/${role}/dashboard` &&
                pathname.startsWith(item.url));

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    'flex items-center gap-3 px-4 py-6 rounded-xl text-[14px] font-medium transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-[#FFF1F1] text-[#D32F2F] font-semibold'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
                  )}>
                  <Link
                    href={item.url}
                    className="flex items-center gap-3 w-full">
                    <item.icon
                      className={cn(
                        'w-[18px] h-[18px] shrink-0',
                        isActive ? 'text-[#D32F2F]' : 'text-gray-400',
                      )}
                    />
                    <span>{item.title}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
