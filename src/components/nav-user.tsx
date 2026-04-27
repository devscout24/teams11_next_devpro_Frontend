'use client';

import {
 IconCreditCard,
 IconLogout,
 IconNotification,
 IconUserCircle,
} from '@tabler/icons-react';

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 useSidebar,
} from '@/components/ui/sidebar';

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
    plan?: string;
  };
}) {
  const {isMobile} = useSidebar();

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent cursor-pointer data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent"
            >
              <Avatar className="h-9 w-9 rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xs">
                  {initials[0]}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight ml-2">
                <span className="truncate font-bold text-foreground">{user.name}</span>
                <span className="text-muted-foreground truncate text-[11px] font-medium">
                  {user.plan || user.email}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 mt-2 rounded-xl border-border shadow-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-3 py-2.5 text-left text-sm">
                <Avatar className="h-9 w-9 rounded-full">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xs">
                    {initials[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-foreground">{user.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border/50" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer py-2 px-3 focus:bg-muted rounded-lg">
                <IconUserCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-2 px-3 focus:bg-muted rounded-lg">
                <IconCreditCard className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-2 px-3 focus:bg-muted rounded-lg">
                <IconNotification className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Notifications</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-border/50" />
            <DropdownMenuItem className="cursor-pointer py-2 px-3 focus:bg-muted rounded-lg text-destructive focus:text-destructive">
              <IconLogout className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

