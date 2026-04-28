'use client';

import {Separator} from '@/components/ui/separator';
import {SidebarTrigger} from '@/components/ui/sidebar';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import {SearchIcon} from 'lucide-react';
import {NavUser} from './nav-user';
import {sidebarItems} from '@/constants';
import {NotificationModal} from './shared/common/NotificationModal';

export function SiteHeader() {
  return (
    <header className="flex py-4 shrink-0 items-center gap-2 border-b group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <InputGroup className="max-w-[470px]">
          <InputGroupInput placeholder="Search something here..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>

        <div className="ml-auto flex items-center gap-2">
          {/* Use the standalone component */}
          <NotificationModal />

          <span className="w-px h-10 bg-gray-300"></span>
          <NavUser user={sidebarItems.user} />
        </div>
      </div>
    </header>
  );
}
