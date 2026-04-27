'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Clock,
  Users,
  Video,
  User as UserIcon,
  Podcast,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AppointmentFields = () => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label className="text-[11px] font-bold text-foreground uppercase tracking-widest">Date & Time</Label>
        <div className="relative">
          <Input type="date" className="w-full h-12 pl-11 pr-4 bg-white border-slate-200 rounded-2xl text-[15px] text-foreground" defaultValue="2025-04-21" />
          <Clock className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground pointer-events-none" />
        </div>
      </div>
      <div className="space-y-2 pt-6">
        <Select defaultValue="15:00-16:00">
          <SelectTrigger className="w-full h-12 bg-white border-slate-200 rounded-2xl font-bold text-foreground text-[15px] justify-center">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="13:00-14:00">01:00 PM - 02:00 PM</SelectItem>
            <SelectItem value="14:00-15:00">02:00 PM - 03:00 PM</SelectItem>
            <SelectItem value="15:00-16:00">03:00 PM - 04:00 PM</SelectItem>
            <SelectItem value="16:00-17:00">04:00 PM - 05:00 PM</SelectItem>
            <SelectItem value="17:00-18:00">05:00 PM - 06:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div className="space-y-4">
      <div className="relative">
        <Input className="w-full h-12 pl-11 bg-white border-slate-200 rounded-2xl text-[15px] placeholder:text-muted-foreground" placeholder="Add guest(s)" />
        <Users className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
      </div>
      <div className="relative">
        <Input className="w-full h-12 pl-11 bg-white border-slate-200 rounded-2xl text-[15px] placeholder:text-muted-foreground" placeholder="Add video link" />
        <Video className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
      </div>
      <div className="relative">
        <Input className="w-full h-12 pl-11 bg-white border-slate-200 rounded-2xl text-[15px] placeholder:text-muted-foreground" placeholder="Host name" />
        <Podcast className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  </>
);

interface AppointmentModalProps {
  trigger: React.ReactNode;
  tooltip?: React.ReactNode;
  defaultTab?: 'service' | 'class' | 'event';
  showTabs?: boolean;
}

export function AppointmentModal({
  trigger,
  tooltip,
  defaultTab = 'service',
  showTabs = true
}: AppointmentModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const content = (
    <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none shadow-2xl rounded-3xl bg-white">
      <DialogHeader className="p-6 pb-2">
        <DialogTitle className="text-xl font-semibold text-foreground capitalize">
          {!showTabs ? defaultTab : 'Appointment'}
        </DialogTitle>
      </DialogHeader>

      <div className="px-6 pb-6 space-y-6 w-full">
        <Tabs defaultValue={defaultTab} className="w-full">
          {showTabs && (
            <TabsList className="bg-transparent border-b rounded-none w-full grid grid-cols-3 h-auto p-0">
              <TabsTrigger value="service" className="w-full rounded-none border-0 border-b-2 border-b-transparent text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 text-[15px] font-semibold px-0">Service</TabsTrigger>
              <TabsTrigger value="class" className="w-full rounded-none border-0 border-b-2 border-b-transparent text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 text-[15px] font-semibold px-0">Class</TabsTrigger>
              <TabsTrigger value="event" className="w-full rounded-none border-0 border-b-2 border-b-transparent text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 text-[15px] font-semibold px-0">Event</TabsTrigger>
            </TabsList>
          )}

          <TabsContent value="service" className="pt-6 space-y-6 w-full">
            <div className="space-y-2 w-full">
              <Label className="text-[11px] font-bold text-foreground uppercase tracking-widest">Select a service</Label>
              <Select>
                <SelectTrigger className="w-full h-12 bg-white border-slate-200 rounded-2xl text-[15px] text-foreground focus:ring-primary/20">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hair">Hair Braiding</SelectItem>
                  <SelectItem value="nail">Manicure & Pedicure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <AppointmentFields />
          </TabsContent>

          <TabsContent value="class" className="pt-6 space-y-6 w-full">
            <div className="space-y-2 w-full">
              <Label className="text-[11px] font-bold text-foreground uppercase tracking-widest">Select a class</Label>
              <Select>
                <SelectTrigger className="w-full h-12 bg-white border-slate-200 rounded-2xl text-[15px] text-foreground focus:ring-primary/20">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yoga">Yoga Class</SelectItem>
                  <SelectItem value="pilates">Pilates Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <AppointmentFields />
          </TabsContent>

          <TabsContent value="event" className="pt-6 space-y-6 w-full">
            <div className="space-y-2 w-full">
              <Label className="text-[11px] font-bold text-foreground uppercase tracking-widest">Event name</Label>
              <Input className="w-full h-12 bg-white border-slate-200 rounded-2xl text-[15px] placeholder:text-muted-foreground text-foreground" placeholder="Event name" />
            </div>
            <AppointmentFields />
          </TabsContent>
        </Tabs>
      </div>

      <DialogFooter className="p-6 pt-2 bg-white flex sm:justify-between items-center gap-4 border-none">
        <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1 h-12 rounded-2xl border-slate-200 font-bold text-foreground hover:bg-slate-50">Cancel</Button>
        <Button className="flex-1 h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Create</Button>
      </DialogFooter>
    </DialogContent>
  );

  if (tooltip) {
    return (
      <Tooltip delayDuration={0}>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              {trigger}
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent side="left" className="p-0 border-none bg-transparent shadow-none">
            {tooltip}
          </TooltipContent>
          {content}
        </Dialog>
      </Tooltip>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      {content}
    </Dialog>
  );
}
