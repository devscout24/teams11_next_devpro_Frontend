'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Clock,
  Users,
  Video,
  User as UserIcon,
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
        <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Date & Time</Label>
        <div className="relative">
          <Input className="h-12 pl-10 bg-muted/20 border-border/50 rounded-xl" defaultValue="Tue 21 Apr ·" />
          <Clock className="absolute left-3.5 top-3.5 w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      <div className="space-y-2 pt-6">
        <Input className="h-12 bg-muted/20 border-border/50 rounded-xl text-center font-bold" defaultValue="03:00 PM - 04:00 PM" />
      </div>
    </div>

    <div className="space-y-4">
      <div className="relative">
        <Input className="h-12 pl-10 bg-muted/20 border-border/50 rounded-xl" placeholder="Add guest(s)" />
        <Users className="absolute left-3.5 top-3.5 w-5 h-5 text-muted-foreground" />
      </div>
      <div className="relative">
        <Input className="h-12 pl-10 bg-muted/20 border-border/50 rounded-xl" placeholder="Add video link" />
        <Video className="absolute left-3.5 top-3.5 w-5 h-5 text-muted-foreground" />
      </div>
      <div className="relative">
        <Input className="h-12 pl-10 bg-muted/20 border-border/50 rounded-xl" placeholder="Host name" />
        <UserIcon className="absolute left-3.5 top-3.5 w-5 h-5 text-muted-foreground" />
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
    <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none shadow-2xl rounded-3xl">
      <DialogHeader className="p-6 pb-2">
        <DialogTitle className="text-xl font-bold text-slate-900 capitalize">
          {!showTabs ? defaultTab : 'Appointment'}
        </DialogTitle>
      </DialogHeader>
      
      <div className="px-6 pb-6 space-y-6">
        <Tabs defaultValue={defaultTab} className="w-full">
          {showTabs && (
            <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
              <TabsTrigger value="service" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent pb-3 text-sm font-bold px-0">Service</TabsTrigger>
              <TabsTrigger value="class" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent pb-3 text-sm font-bold px-0 text-muted-foreground">Class</TabsTrigger>
              <TabsTrigger value="event" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent pb-3 text-sm font-bold px-0 text-muted-foreground">Event</TabsTrigger>
            </TabsList>
          )}
          
          <TabsContent value="service" className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Select a service</Label>
              <Select>
                <SelectTrigger className="h-12 bg-muted/20 border-border/50 rounded-xl focus:ring-primary/20">
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

          <TabsContent value="class" className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Select a service</Label>
              <Select>
                <SelectTrigger className="h-12 bg-muted/20 border-border/50 rounded-xl focus:ring-primary/20">
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

          <TabsContent value="event" className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Select a service</Label>
              <Input className="h-12 bg-muted/20 border-border/50 rounded-xl" placeholder="Event name" />
            </div>
            <AppointmentFields />
          </TabsContent>
        </Tabs>
      </div>

      <DialogFooter className="p-6 pt-2 bg-slate-50/50 flex sm:justify-between items-center gap-4">
        <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1 h-12 rounded-xl border-border/50 font-bold text-slate-600">Cancel</Button>
        <Button className="flex-1 h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Create</Button>
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
