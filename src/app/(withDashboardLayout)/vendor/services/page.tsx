'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  MoreVertical,
  ChevronDown,
  Link as LinkIcon,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AppointmentModal } from '@/components/calendar/appointment-modal';
import { cn } from '@/lib/utils';

const servicesData = [
  {
    id: 1,
    name: "30 minutes meetingd",
    duration: "30 mins.",
    buffer: "buffer $100",
    avatar: "https://i.pravatar.cc/150?u=11",
  },
  {
    id: 2,
    name: "30 minutes meetingd",
    duration: "30 mins.",
    buffer: "buffer $100",
    avatar: "https://i.pravatar.cc/150?u=12",
  },
  {
    id: 3,
    name: "30 minutes meetingd",
    duration: "30 mins.",
    buffer: "buffer $100",
    avatar: "https://i.pravatar.cc/150?u=13",
  },
  {
    id: 4,
    name: "30 minutes meetingd",
    duration: "30 mins.",
    buffer: "buffer $100",
    avatar: "https://i.pravatar.cc/150?u=14",
  },
];

const ServiceRow = ({ service }: { service: typeof servicesData[0] }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-4 hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0">
    <div className="flex items-center gap-4">
      <Avatar className="h-[40px] w-[40px] rounded-full shrink-0">
        <AvatarImage src={service.avatar} />
        <AvatarFallback className="bg-slate-100 text-muted-foreground font-bold text-xs">SM</AvatarFallback>
      </Avatar>
      <div className="space-y-0.5">
        <h3 className="text-sm  text-foreground">{service.name}</h3>
        <p className="text-[11px] font-medium text-muted-foreground">
          {service.duration} {service.buffer}
        </p>
      </div>
    </div>

    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0">
      <Button variant="outline" size="sm" className="h-8 px-4 flex-1 sm:flex-none rounded-xl text-[11px] font-bold gap-2 bg-white border-slate-200 text-foreground hover:bg-slate-50 hover:text-muted-foreground shadow-sm transition-all">
        <LinkIcon className="w-3 h-3" />
        Copy Link
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground shrink-0">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem className="text-xs font-medium">Edit</DropdownMenuItem>
          <DropdownMenuItem className="text-xs font-medium text-destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);

const AddSelectionMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-11 px-4 sm:px-6 font-bold gap-1 sm:gap-2 shadow-sm transition-all active:scale-95 shrink-0">
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">Add</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent align="end" className="w-[200px] p-2 border-slate-100 shadow-2xl rounded-2xl">
      <div className="space-y-2">
        <AppointmentModal 
          defaultTab="service"
          showTabs={false}
          trigger={
            <button className="w-full flex items-center gap-4 p-3 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] transition-all group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5 text-[#16A34A]" />
              </div>
              <span className="text-base font-bold text-foreground">Service</span>
            </button>
          } 
        />
        
        <AppointmentModal 
          defaultTab="class"
          showTabs={false}
          trigger={
            <button className="w-full flex items-center gap-4 p-3 rounded-xl bg-[#ECFEFF] hover:bg-[#CFFAFE] transition-all group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-[#0891B2]" />
              </div>
              <span className="text-base font-bold text-foreground">Class</span>
            </button>
          } 
        />
      </div>
    </PopoverContent>
  </Popover>
);

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'Services' | 'Classes'>('Services');

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-[#F8FAFC]/50 min-h-screen">
      {/* Top Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-3 bg-white p-1 rounded-lg border border-slate-100 shadow-sm overflow-x-auto w-full lg:w-auto shrink-0">
          <Button 
            onClick={() => setActiveTab('Services')}
            className={cn(
              "h-10 px-6 sm:px-8 flex-1 lg:flex-none rounded-md text-[14px] sm:text-[15px] font-bold transition-all whitespace-nowrap",
              activeTab === 'Services' ? "bg-primary text-primary-foreground shadow-sm" : "bg-transparent text-muted-foreground hover:bg-slate-50"
            )}
          >
            Services
          </Button>
          <Button 
            onClick={() => setActiveTab('Classes')}
            className={cn(
              "h-10 px-6 sm:px-8 flex-1 lg:flex-none rounded-md text-[14px] sm:text-[15px] font-bold transition-all whitespace-nowrap",
              activeTab === 'Classes' ? "bg-primary text-primary-foreground shadow-sm" : "bg-transparent text-muted-foreground hover:bg-slate-50"
            )}
          >
            Classes
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:flex-1 lg:max-w-3xl lg:justify-end">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search services..." 
              className="h-11 w-full pl-12 bg-white border-slate-100 rounded-lg text-[14px] sm:text-[15px] placeholder:text-muted-foreground focus-visible:ring-primary/20 shadow-sm"
            />
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none h-11 px-3 sm:px-4 rounded-lg bg-white border-slate-100 text-foreground font-bold gap-2 text-[13px] sm:text-[15px] shadow-sm hover:bg-slate-50 hover:text-muted-foreground">
              <span className="truncate">All team members</span>
              <ChevronDown className="w-4 h-4 shrink-0" />
            </Button>

            <AddSelectionMenu />
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-[24px] sm:text-[28px] font-black text-foreground tracking-tight">Services</h2>
        
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
          {servicesData.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
