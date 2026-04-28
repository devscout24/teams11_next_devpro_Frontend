import {
  LayoutDashboard,
  CalendarDays,
  HandPlatter,
  Users,
  Star,
  UserPlus,
  CreditCard,
  Settings,
  Ticket,
  Target,
} from 'lucide-react';
import {UserRole} from '@/hooks/use-role';

export interface NavItem {
  title: string;
  /** Path relative to the role prefix, e.g. "/dashboard" → "/vendor/dashboard" */
  url: string;
  icon: React.ElementType;
  roles: UserRole[];
}

export const sidebarItems = {
  user: {
    name: 'Thierry Pam',
    email: 'thierry@bookingpam.com',
    avatar: '/avatars/thierry.jpg',
    plan: 'Pro Plan',
  },

  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      roles: ['vendor', 'staff', 'customer'] as UserRole[],
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: CalendarDays,
      roles: ['vendor', 'staff', 'customer'] as UserRole[],
    },
    {
      title: 'Bookings',
      url: '/bookings',
      icon: Ticket,
      roles: ['vendor', 'customer'] as UserRole[],
    },
    {
      title: 'Services & Class',
      url: '/services',
      icon: HandPlatter,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Staff & Team',
      url: '/staff',
      icon: Users,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Reviews',
      url: '/reviews',
      icon: Star,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Invite Friends',
      url: '/invite',
      icon: UserPlus,
      roles: ['vendor', 'customer'] as UserRole[],
    },
    {
      title: 'Your Brand',
      url: '/brand',
      icon: Target,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Payments',
      url: '/payments',
      icon: CreditCard,
      roles: ['vendor', 'customer'] as UserRole[],
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
      roles: ['vendor', 'staff', 'customer'] as UserRole[],
    },
  ] satisfies NavItem[],
};
