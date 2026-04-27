'use client';

import { usePathname } from 'next/navigation';

export type UserRole = 'vendor' | 'staff' | 'customer';

/**
 * useRole — returns the current user's role based ONLY on the URL path.
 * This ensures the sidebar correctly reflects the current dashboard view.
 */
export function useRole(): UserRole {
  const pathname = usePathname();
  
  if (pathname.startsWith('/vendor')) {
    return 'vendor';
  }
  
  if (pathname.startsWith('/staff')) {
    return 'staff';
  }
  
  if (pathname.startsWith('/customer')) {
    return 'customer';
  }
  
  return 'customer'; // Default fallback
}
