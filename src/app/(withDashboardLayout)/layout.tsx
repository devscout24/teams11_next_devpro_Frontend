'use client';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useRole } from '@/hooks/use-role';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const role = useRole();

  return (
    <main>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }>
        {role !== 'customer' ? <AppSidebar variant="inset" /> : ''}

        <SidebarInset>
          {/* Header */}
          <SiteHeader />

          {/* Content Here */}
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
};

export default DashboardLayout;
