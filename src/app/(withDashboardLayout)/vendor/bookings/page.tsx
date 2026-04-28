'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar as CalendarIcon,
  Clock,
  User,
  ChevronRight
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type BookingStatus = 'Pending' | 'Waiting' | 'Confirmed' | 'History';

interface Booking {
  id: number;
  customer: string;
  avatar: string;
  avatarColor: string;
  service: string;
  status: string;
  statusColor: string;
  date: string;
  time: string;
  staff: string;
  price: string;
  duration: string;
  tab: BookingStatus;
}

const ALL_BOOKINGS: Booking[] = [
  {
    id: 1,
    customer: "Fatima Al-Rashid",
    avatar: "FA",
    avatarColor: "bg-[#0EA5E9]",
    service: "Manicure & Pedicure",
    status: "Pending",
    statusColor: "#F97316",
    date: "27 Jan",
    time: "10:30 - 60 min",
    staff: "Lisa M.",
    price: "$55",
    duration: "60 min",
    tab: 'Pending'
  },
  {
    id: 2,
    customer: "Priya Sharma",
    avatar: "PS",
    avatarColor: "bg-[#EC4899]",
    service: "Manicure & Pedicure",
    status: "Pending",
    statusColor: "#F97316",
    date: "28 Jan",
    time: "09:30 - 60 min",
    staff: "Lisa M.",
    price: "$55",
    duration: "60 min",
    tab: 'Pending'
  },
  {
    id: 3,
    customer: "Zainab Ahmed",
    avatar: "ZA",
    avatarColor: "bg-[#8B5CF6]",
    service: "Hair Styling",
    status: "Waiting",
    statusColor: "#6B7280",
    date: "27 Jan",
    time: "12:00 - 45 min",
    staff: "Sarah J.",
    price: "$45",
    duration: "45 min",
    tab: 'Waiting'
  },
  {
    id: 4,
    customer: "Layla Mensah",
    avatar: "LM",
    avatarColor: "bg-[#F59E0B]",
    service: "Eyebrow Threading",
    status: "Confirmed",
    statusColor: "#16A34A",
    date: "29 Jan",
    time: "14:00 - 30 min",
    staff: "Lisa M.",
    price: "$25",
    duration: "30 min",
    tab: 'Confirmed'
  },
  {
    id: 5,
    customer: "Fatima Al-Rashid",
    avatar: "FA",
    avatarColor: "bg-[#0EA5E9]",
    service: "Manicure & Pedicure",
    status: "Completed",
    statusColor: "#16A34A",
    date: "24 Jan",
    time: "10:30 - 60 min",
    staff: "Lisa M.",
    price: "$55",
    duration: "60 min",
    tab: 'History'
  },
  {
    id: 6,
    customer: "Priya Sharma",
    avatar: "PS",
    avatarColor: "bg-[#EC4899]",
    service: "Manicure & Pedicure",
    status: "Cancelled",
    statusColor: "#EF4444",
    date: "23 Jan",
    time: "09:30 - 60 min",
    staff: "Lisa M.",
    price: "$55",
    duration: "60 min",
    tab: 'History'
  }
];

const FilterTab = ({ 
  label, 
  count, 
  active, 
  onClick 
}: { 
  label: string, 
  count: number, 
  active?: boolean,
  onClick: () => void 
}) => (
  <div 
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-6 py-2.5 rounded-xl cursor-pointer transition-all shrink-0",
      active ? "bg-primary text-primary-foreground shadow-sm" : "text-slate-500 hover:bg-slate-50"
    )}
  >
    <span className="text-[15px] font-medium whitespace-nowrap">{label}</span>
    <span className={cn(
      "flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold",
      active ? "bg-white/20 text-white" : "bg-slate-100 text-muted-foreground"
    )}>
      {count}
    </span>
  </div>
);

const BookingCard = ({ booking, activeTab }: { booking: Booking, activeTab: BookingStatus }) => (
  <div className="bg-white rounded-[20px] p-5 border border-slate-50 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-slate-200 transition-all">
    <div className="flex items-start gap-4 flex-1">
      <Avatar className="h-[52px] w-[52px] rounded-full shrink-0">
        <AvatarFallback className={cn(booking.avatarColor, "text-white text-base font-bold")}>
          {booking.avatar}
        </AvatarFallback>
      </Avatar>
      
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-bold text-foreground">{booking.customer}</h3>
          <span className={cn(
            "inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold border",
            booking.status === 'Pending' ? "bg-[#FFF7ED] border-[#FFEDD5] text-[#F97316]" :
            booking.status === 'Waiting' ? "bg-slate-50 border-slate-100 text-slate-500" :
            booking.status === 'Confirmed' || booking.status === 'Completed' ? "bg-[#F0FDF4] border-[#DCFCE7] text-[#16A34A]" :
            "bg-red-50 border-red-100 text-[#EF4444]"
          )}>
            <span className={cn(
              "w-1.5 h-1.5 rounded-full",
              booking.status === 'Pending' ? "bg-[#F97316]" :
              booking.status === 'Waiting' ? "bg-slate-400" :
              booking.status === 'Confirmed' || booking.status === 'Completed' ? "bg-[#16A34A]" :
              "bg-[#EF4444]"
            )} />
            {booking.status}
          </span>
        </div>
        
        <p className="text-sm font-medium text-muted-foreground">{booking.service}</p>
        
        <div className="flex items-center gap-4 pt-1 opacity-40">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-foreground">
            <CalendarIcon className="w-3 h-3" />
            {booking.date}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-foreground">
            <Clock className="w-3 h-3" />
            {booking.time}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-foreground">
            <User className="w-3 h-3" />
            {booking.staff}
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 md:gap-10">
      <div className="text-right">
        <p className="text-lg font-black text-foreground">{booking.price}</p>
        <p className="text-[11px] text-muted-foreground font-medium">{booking.duration}</p>
      </div>

      <div className="flex items-center gap-2">
        {activeTab === 'History' ? (
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground">
            <ChevronRight className="w-5 h-5" />
          </Button>
        ) : (
          <>
            <Button 
              variant="outline" 
              className="h-9 px-5 rounded-lg text-[11px] font-bold border-[#FCA5A5] text-[#EF4444] hover:bg-red-50 hover:text-[#EF4444]"
            >
              Cancel
            </Button>
            {(activeTab === 'Pending' || activeTab === 'Waiting') && (
              <Button 
                className="h-9 px-5 rounded-lg text-[11px] font-bold bg-[#DCFCE7] text-[#16A34A] hover:bg-[#BBF7D0] border-none shadow-none"
              >
                Confirm
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  </div>
);

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<BookingStatus>('Pending');

  const filteredBookings = ALL_BOOKINGS.filter(b => b.tab === activeTab);

  const counts = {
    Pending: ALL_BOOKINGS.filter(b => b.tab === 'Pending').length,
    Waiting: ALL_BOOKINGS.filter(b => b.tab === 'Waiting').length,
    Confirmed: ALL_BOOKINGS.filter(b => b.tab === 'Confirmed').length,
    History: ALL_BOOKINGS.filter(b => b.tab === 'History').length,
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <h1 className="text-[28px] font-bold text-foreground tracking-tight">Bookings</h1>
          <p className="text-muted-foreground text-sm font-medium">
            10 total bookings · Manage and track appointments
          </p>
        </div>

      </div>

      {/* Tabs Filter Container */}
      <div className="bg-white rounded-2xl p-1.5 inline-flex items-center gap-1 border border-slate-100 shadow-sm overflow-x-auto max-w-full scrollbar-none">
        {(['Pending', 'Waiting', 'Confirmed', 'History'] as BookingStatus[]).map((tab) => (
          <FilterTab 
            key={tab}
            label={tab} 
            count={counts[tab]} 
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search by client or service..." 
          className="h-12 pl-12 pr-4 bg-white border border-slate-100 rounded-2xl text-[15px] placeholder:text-muted-foreground focus-visible:ring-primary/20 shadow-sm"
        />
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} activeTab={activeTab} />
          ))
        ) : (
          <div className="bg-white rounded-[20px] p-12 border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4">
              <CalendarIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground">No {activeTab} bookings</h3>
            <p className="text-muted-foreground text-sm max-w-[250px] mt-1">There are currently no bookings in the {activeTab.toLowerCase()} list.</p>
          </div>
        )}
      </div>
    </div>
  );
}
