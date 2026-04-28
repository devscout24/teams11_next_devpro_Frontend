'use client'; 

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  ChevronRight,
  Send,
  ChevronDown,
  Clock,
  Scissors,
  Phone,
  Mail,
  Edit2,
  Trash2
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const staffMembers = [
  {
    id: 1,
    name: "Kavitha Reddy",
    role: "staff",
    email: "yesitisnayan@gmail.com",
    skills: "Haircut • Coloring • Styling",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Ananya Mehta",
    role: "staff",
    email: "rajiv@salon.com",
    skills: "Haircut • Coloring • Styling",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Ananya Mehta",
    role: "staff",
    email: "rajiv@salon.com",
    skills: "Haircut • Coloring • Styling",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

const staffBookings = [
  { id: 1, customer: "Sarah Johnson", service: "Haircut & Blow-dry", time: "10:00 AM - 10:40 AM", price: "$99", status: "Pending", initials: "ND" },
  { id: 2, customer: "Sarah Johnson", service: "Haircut & Blow-dry", time: "10:00 AM - 10:40 AM", price: "$99", status: "Pending", initials: "ND" },
  { id: 3, customer: "Sarah Johnson", service: "Haircut & Blow-dry", time: "10:00 AM - 10:40 AM", price: "$99", status: "Pending", initials: "ND" },
];

const workingDays = [
  { day: "Sunday", enabled: true },
  { day: "Monday", enabled: true },
  { day: "Wednesday", enabled: true },
  { day: "Tuesday", enabled: true },
  { day: "Friday", enabled: true },
  { day: "Saturday", enabled: true },
];

const services = ["Classic Haircut", "Hair Coloring", "Beard Trim", "Hot Towle Shave"];

const StaffManagementSheet = ({ staff, isOpen, onOpenChange }: { staff: typeof staffMembers[0], isOpen: boolean, onOpenChange: (open: boolean) => void }) => (
  <Sheet open={isOpen} onOpenChange={onOpenChange}>
    <SheetContent side="right" className="w-full sm:max-w-[500px] p-0 border-none shadow-2xl overflow-y-auto scrollbar-none">
      <div className="h-full flex flex-col bg-white">
        <SheetHeader className="p-8 pb-4 space-y-1 relative">
          <SheetTitle className="text-xl font-bold text-slate-900">Staff management</SheetTitle>
          <SheetDescription className="text-muted-foreground text-sm font-medium">
            Mantin your staff
          </SheetDescription>
        </SheetHeader>

        <div className="px-8 py-4 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-5">
              <Avatar className="h-[80px] w-[80px] rounded-full border-4 border-white shadow-md">
                <AvatarImage src={staff.avatar} />
                <AvatarFallback className="bg-slate-100 text-muted-foreground font-bold text-xl">KR</AvatarFallback>
              </Avatar>
              <div className="space-y-0.5">
                <h3 className="text-xl font-semibold text-foreground">{staff.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">{staff.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" className="h-8 px-4 rounded-full text-xs font-medium gap-2 bg-white border border-slate-200 text-foreground hover:bg-slate-50 shadow-sm transition-all">
                <Edit2 className="w-3.5 h-3.5" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="h-8 px-4 rounded-full text-xs font-medium gap-2 bg-white border border-slate-200 text-foreground hover:bg-slate-50 shadow-sm transition-all">
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button className="h-[74px] bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl flex flex-col items-center justify-center gap-1 border-none shadow-none transition-all active:scale-[0.98]">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-bold">Call</span>
            </Button>
            <Button className="h-[74px] bg-primary/10 hover:bg-primary/20 text-primary rounded-2xl flex flex-col items-center justify-center gap-1 border-none shadow-none transition-all active:scale-[0.98]">
              <Mail className="w-5 h-5" />
              <span className="text-sm font-bold">Email</span>
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          <Tabs defaultValue="history" className="w-full flex-1 flex flex-col">
            <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 px-8 gap-8">
              <TabsTrigger value="history" className="rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 text-sm font-semibold px-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0">Booking History</TabsTrigger>
              <TabsTrigger value="services" className="rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 text-sm font-semibold px-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0">Services</TabsTrigger>
              <TabsTrigger value="working" className="rounded-none border-0 border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 text-sm font-semibold px-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0">Working day</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="p-8 space-y-6 flex-1 overflow-y-auto m-0 scrollbar-none">
              <h4 className="text-xl font-bold text-foreground">Booking History</h4>
              
              <div className="space-y-4">
                {staffBookings.map((booking) => (
                  <div key={booking.id} className="bg-slate-50/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-muted-foreground font-bold text-xs">
                        {booking.initials}
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-sm font-semibold text-foreground">{booking.customer}</h5>
                        <p className="text-[10px] font-medium text-muted-foreground">{booking.service}</p>
                        <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground pt-0.5">
                          <Clock className="w-3 h-3" />
                          {booking.time}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-1.5">
                      <p className="text-sm font-bold text-foreground">{booking.price}</p>
                      <Badge variant="outline" className="bg-[#FFF7ED] border-[#FFEDD5] text-[#F97316] text-[10px] font-semibold py-0">
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="p-8 space-y-6 flex-1 overflow-y-auto m-0 scrollbar-none">
              <div className="bg-[#F8FAFC] rounded-[24px] p-6 space-y-6 border border-slate-100/50">
                <div className="flex items-center gap-3">
                  <Scissors className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Specialties & Services</h4>
                </div>

                <div className="flex gap-2">
                  <Input 
                    placeholder="Services you're certified to perform." 
                    className="h-12 bg-white border-none rounded-xl text-sm focus-visible:ring-primary/20"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 px-6 font-semibold shadow-sm">
                    Save
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <div key={service} className="bg-white border border-slate-50 px-4 py-2 rounded-xl text-sm font-medium text-[#F97316] shadow-sm">
                      {service}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Services you&apos;re certified to perform. <br />
                  Contact admin to update.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="working" className="p-8 space-y-6 flex-1 overflow-y-auto m-0 scrollbar-none">
              <h4 className="text-xl font-semibold text-foreground">Working Days</h4>
              
              <div className="space-y-1">
                {workingDays.map((item) => (
                  <div key={item.day} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                    <span className="text-base font-medium text-foreground">{item.day}</span>
                    <Switch 
                      defaultChecked={item.enabled}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

const InviteStaffSheet = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl h-11 px-6 font-bold gap-2 shadow-sm transition-all active:scale-95">
        <Plus className="w-5 h-5" />
        Invite Staff
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-full sm:max-w-[450px] p-0 border-none shadow-2xl">
      <div className="h-full flex flex-col bg-white">
        <SheetHeader className="p-8 pb-4 space-y-1 relative">
          <SheetTitle className="text-2xl font-bold text-foreground">Invite Staff</SheetTitle>
          <SheetDescription className="text-muted-foreground text-sm font-medium">
            Send an invitation to a new member
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold text-foreground">Staff Name</Label>
            <Input placeholder="Enter full name" className="h-12 bg-slate-50 border-none rounded-xl text-sm focus-visible:ring-primary/20" />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-foreground">Email / Phone Number</Label>
            <Input placeholder="email@eample.com or phone" className="h-12 bg-slate-50 border-none rounded-xl text-sm focus-visible:ring-primary/20" />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-foreground">Role</Label>
            <Input placeholder="Enter staff role" className="h-12 bg-slate-50 border-none rounded-xl text-sm focus-visible:ring-primary/20" />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-foreground">Sate Working day</Label>
            <div className="relative">
              <Input placeholder="Add working day" className="h-12 bg-slate-50 border-none rounded-xl text-sm focus-visible:ring-primary/20 pr-10" />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-foreground">Add services</Label>
            <Input placeholder="Add services" className="h-12 bg-slate-50 border-none rounded-xl text-sm focus-visible:ring-primary/20" />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold text-foreground">Password</Label>
            <Input type="password" placeholder="Password" className="h-12 bg-slate-50 border-none rounded-xl text-sm focus-visible:ring-primary/20" />
          </div>
        </div>

        <div className="p-8 pt-4">
          <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold text-base gap-3 shadow-sm transition-all active:scale-[0.98]">
            <Send className="w-5 h-5" />
            Send Invitation
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

export default function StaffPage() {
  const [selectedStaff, setSelectedStaff] = useState<typeof staffMembers[0] | null>(null);
  const [isManagementOpen, setIsManagementOpen] = useState(false);

  const handleStaffClick = (staff: typeof staffMembers[0]) => {
    setSelectedStaff(staff);
    setIsManagementOpen(true);
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <h1 className="text-[28px] font-bold text-foreground tracking-tight">Staff & Team</h1>
          <p className="text-muted-foreground text-sm font-medium">
            3 team members · 
          </p>
        </div>
        <InviteStaffSheet />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search by client or service..." 
          className="h-12 pl-12 pr-4 bg-white border border-slate-100 rounded-2xl text-[15px] placeholder:text-muted-foreground focus-visible:ring-primary/20 shadow-sm"
        />
      </div>

      {/* Staff List */}
      <div className="space-y-4">
        {staffMembers.map((staff) => (
          <div key={staff.id} onClick={() => handleStaffClick(staff)}>
            <div className="bg-white rounded-[20px] p-5 border border-slate-50 shadow-sm flex items-center justify-between group hover:border-slate-200 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <Avatar className="h-[64px] w-[64px] rounded-full shrink-0 border-2 border-white shadow-sm">
                  <AvatarImage src={staff.avatar} />
                  <AvatarFallback className="bg-slate-100 text-slate-400 font-bold">AM</AvatarFallback>
                </Avatar>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-foreground">{staff.name}</h3>
                    <Badge variant="outline" className="bg-[#FFF7ED] border-[#FFEDD5] text-[#F97316] text-[10px] py-0 px-2 font-bold uppercase tracking-wider">
                      {staff.role}
                    </Badge>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">{staff.email}</p>
                  <p className="text-xs font-medium text-muted-foreground">{staff.skills}</p>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {selectedStaff && (
        <StaffManagementSheet 
          staff={selectedStaff} 
          isOpen={isManagementOpen} 
          onOpenChange={setIsManagementOpen} 
        />
      )}
    </div>
  );
}
