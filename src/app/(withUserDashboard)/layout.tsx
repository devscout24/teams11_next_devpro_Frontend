'use client';

import React from 'react';
import {UserNavbar} from './_components/UserNavbar';
import {UserProfileSidebar} from './_components/UserProfileSidebar';

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Top Navbar */}
      <UserNavbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div>
          <h2 className="text-semibold text-3xl">My Account</h2>
          <p className="text-gray-400 mb-4">
            Manage your information, Booking, and preferences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Fixed Profile Card Navigation */}

          <aside className="w-full md:w-80 shrink-0">
            <UserProfileSidebar />
          </aside>

          {/* Right Side: Dynamic Content (Appointments, Info, etc.) */}
          <section className="flex-1">{children}</section>
        </div>
      </main>
    </div>
  );
}
