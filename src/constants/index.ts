import {
  LayoutDashboard,
  Clock,
  Presentation,
  Users,
  BarChart3,
  UserPlus,
  CalendarDays,
  FileText,
  Settings,
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
    name: 'A H Shobuj',
    email: 'ahshobuj11@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },

  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
      roles: ['vendor', 'staff', 'customer'] as UserRole[],
    },
    {
      title: 'Time Tracking',
      url: '/time-tracking',
      icon: Clock,
      roles: ['staff'] as UserRole[],
    },
    {
      title: 'Meetings',
      url: '/meetings',
      icon: Presentation,
      roles: ['staff', 'customer'] as UserRole[],
    },
    {
      title: 'My Schedule',
      url: '/schedule',
      icon: CalendarDays,
      roles: ['customer'] as UserRole[],
    },
    {
      title: 'My Reports',
      url: '/reports',
      icon: FileText,
      roles: ['staff'] as UserRole[],
    },
    {
      title: 'Employees',
      url: '/employees',
      icon: Users,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Company Stats',
      url: '/statistics',
      icon: BarChart3,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Recruitment',
      url: '/recruitment',
      icon: UserPlus,
      roles: ['vendor'] as UserRole[],
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
      roles: ['vendor', 'staff', 'customer'] as UserRole[],
    },
  ] satisfies NavItem[],
};
