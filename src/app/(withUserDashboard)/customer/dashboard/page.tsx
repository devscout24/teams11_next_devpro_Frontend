'use client';

import React, {useState} from 'react';
import {BookingTabs} from './_components/BookingTabs';
import {BookingCard} from './_components/BookingCard';

const DUMMY_BOOKINGS = [
  // Upcoming Data
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

  // Previous Data (Exact as per your second screenshot)
  {
    id: 4,
    image: '/customer/profile.png',
    name: 'James Rodriguez',
    service: 'Beard Trim & Style',
    date: 'Jan 20, 2026',
    time: '10:30 AM',
    type: 'Virtual' as const,
    status: 'Confirmed' as const,
    price: '95',
    category: 'previous',
  },
  {
    id: 5,
    image: '/customer/user1.png',
    name: 'Sarah Mitchell',
    service: 'Classic Haircut',
    date: 'Jan 20, 2026',
    time: '10:30 AM',
    type: 'In-person' as const,
    status: 'Cancelled' as const,
    price: '95',
    category: 'previous',
  },
  {
    id: 6,
    image: '/customer/user2.png',
    name: 'Emily Chen',
    service: 'Full Color Treatment',
    date: 'Jan 20, 2026',
    time: '10:30 AM',
    type: 'In-person' as const,
    status: 'Confirmed' as const,
    price: '95',
    category: 'previous',
  },
];

export default function CustomerDashboardPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredBookings = DUMMY_BOOKINGS.filter(
    (b) => b.category === activeTab,
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Upcoming appointments
        </h2>
        <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="grid gap-4">
        {filteredBookings.map((booking) => (
          <BookingCard
            key={booking.id}
            {...booking}
            category={booking.category}
          />
        ))}
      </div>
    </div>
  );
}
