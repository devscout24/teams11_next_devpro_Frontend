'use client';

import * as React from 'react';
import {NavMain} from '@/components/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import {sidebarItems} from '@/constants';
import {IconLogout} from '@tabler/icons-react';
import {useRole, UserRole} from '@/hooks/use-role';

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  const role = useRole();

  const filteredNavMain = sidebarItems.navMain
    .filter((item) => item.roles.includes(role))
    .map((item) => ({
      ...item,
      // Build full URL: /vendor/dashboard, /user/time-tracking, etc.
      url: `/${role}${item.url}`,
    }));

  const roleLabels: Record<UserRole, string> = {
    vendor: 'Vendor Portal',
    staff: 'Staff Portal',
    customer: 'Customer Portal',
  };

  const roleLabel = roleLabels[role];

  const handleLogout = () => {
    // Clear the role cookie
    document.cookie = 'user-role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    // Redirect to login
    window.location.href = '/auth/login';
  };

  return (
    <Sidebar collapsible="icon" {...props} className="border-r border-gray-100">
      <SidebarHeader className="pt-6 px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-auto p-0 hover:bg-transparent"
            >
              <Link href={`/`} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D32F2F] text-white font-bold text-xl shrink-0">
                  BP
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-gray-900 leading-tight">
                    BookingPam
                  </span>
                  <span className="text-[11px] font-medium text-gray-500">
                    {roleLabel}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2 mt-2">
        <NavMain items={filteredNavMain} role={role} />
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-100">
        <button className="w-full group" onClick={handleLogout}>
          <span className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <IconLogout className="w-5 h-5 text-gray-400 group-hover:text-gray-900" />
            Log out
          </span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
