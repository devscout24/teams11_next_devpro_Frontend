'use client';

import React, {useState} from 'react';
import {BookingTabs} from './_components/BookingTabs';
import {BookingCard} from './_components/BookingCard';
import {EmptyBookings} from './_components/EmptyBookings';

// Dummy Data matching your screenshots
const DUMMY_BOOKINGS = [
  {
    id: 1,
    image: '/customer/profile.png',
    name: 'James Rodriguez',
    service: 'Beard Trim & Style',
    date: 'Jan 20, 2026',
    time: '10:30 AM',
    type: 'Virtual' as const,
    status: 'Pending' as const,
    price: '120',
    category: 'upcoming',
  },
  {
    id: 2,
    image: '/customer/user1.png',
    name: 'Sarah Mitchell',
    service: 'Classic Haircut',
    date: 'Jan 20, 2026',
    time: '10:30 AM',
    type: 'In-person' as const,
    status: 'Confirmed' as const,
    price: '95',
    category: 'upcoming',
  },
  {
    id: 3,
    image: '/customer/user2.png',
    name: 'Emily Chen',
    service: 'Full Color Treatment',
    date: 'Jan 20, 2026',
    time: '10:30 AM',
    type: 'In-person' as const,
    status: 'Confirmed' as const,
    price: '95',
    category: 'upcoming',
  },
];

export default function CustomerDashboardPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Filter data based on active tab
  const filteredBookings = DUMMY_BOOKINGS.filter(
    (booking) => booking.category === activeTab,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Upcoming appointments
        </h2>
        {/* Pass activeTab and setter to the tabs component */}
        <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {filteredBookings.length > 0 ? (
        <div className="grid gap-4">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} {...booking} />
          ))}
        </div>
      ) : (
        <EmptyBookings />
      )}
    </div>
  );
}
