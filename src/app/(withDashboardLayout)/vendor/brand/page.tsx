'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Upload, 
  ChevronRight, 
  Plus,
  Target,
  Image as ImageIcon,
  Clock,
  X
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

const workingDays = [
  { day: "Sunday", enabled: true },
  { day: "Monday", enabled: true },
  { day: "Wednesday", enabled: true },
  { day: "Tuesday", enabled: true },
  { day: "Friday", enabled: true },
  { day: "Saturday", enabled: true },
];

const NewServiceModal = ({ trigger }: { trigger: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none shadow-2xl rounded-3xl">
        <DialogHeader className="p-8 pb-4">
          <DialogTitle className="text-xl font-bold text-slate-900">New Service Details</DialogTitle>
        </DialogHeader>
        
        <div className="px-8 pb-8 space-y-6">
          <div className="space-y-2">
            <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Service Name</Label>
            <Input placeholder="Traditional Hot Towel Shave" className="h-12 bg-white border-slate-200 rounded-xl text-sm focus-visible:ring-primary/20 shadow-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Price ($)</Label>
              <Input placeholder="25.00" className="h-12 bg-white border-slate-200 rounded-xl text-sm focus-visible:ring-primary/20 shadow-none" />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</Label>
              <Input placeholder="30 min" className="h-12 bg-white border-slate-200 rounded-xl text-sm focus-visible:ring-primary/20 shadow-none" />
            </div>
          </div>
        </div>

        <DialogFooter className="p-8 pt-2 bg-slate-50/50 flex sm:justify-between items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => setIsOpen(false)} 
            className="flex-1 h-12 rounded-xl border-slate-200 font-bold text-slate-600 bg-white"
          >
            Cancel
          </Button>
          <Button className="flex-1 h-12 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold shadow-lg shadow-red-500/20 transition-all active:scale-[0.98]">
            Add Service
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default function YourBrandPage() {
  return (
    <div className="p-6 lg:p-10 space-y-8 bg-[#F8FAFC]/50 min-h-screen">
      {/* Progress Bar */}
      <div className="bg-white rounded-[24px] p-6 border border-slate-50 shadow-sm space-y-3">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400">
          <span />
          <span>30% complete</span>
        </div>
        <Progress value={30} className="h-2 bg-slate-100 rounded-full">
          <div className="h-full bg-[#E11D48] rounded-full transition-all" style={{ width: '30%' }} />
        </Progress>
      </div>

      {/* Banner Upload */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-50 shadow-sm space-y-4">
        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Banner Image</Label>
        <div className="h-[200px] bg-[#FFF1F1] rounded-[24px] border-2 border-dashed border-red-100 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#FFE4E4] transition-all group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <Upload className="w-5 h-5 text-[#E11D48]" />
          </div>
          <div className="text-center">
            <p className="text-sm font-bold text-[#E11D48]">Upload banner image</p>
            <p className="text-[10px] font-medium text-[#E11D48]/60">Recommended: 1200 × 300px</p>
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-50 shadow-sm space-y-8">
        <div className="flex gap-6">
          <div className="w-20 h-20 rounded-[20px] bg-[#FFF1F1] flex flex-col items-center justify-center gap-1 border border-red-50/50 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center text-white text-xs font-black">P</div>
            <span className="text-[10px] font-bold text-[#E11D48]">Logo</span>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business Name</Label>
              <Input defaultValue="Pam Beauty Studio" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none" />
            </div>
            
            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Business Category</Label>
              <div className="relative">
                <Input placeholder="Enter shop name" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none pr-10" />
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</Label>
            <Input placeholder="Enter your location" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none" />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">About</Label>
            <Textarea 
              defaultValue="Premium beauty and wellness studio located in Dubai Marina, offering a full range of beauty services tailored for every client." 
              className="min-h-[120px] bg-white border-slate-100 rounded-2xl text-sm font-medium focus-visible:ring-primary/20 shadow-none leading-relaxed" 
            />
          </div>
        </div>
      </div>

      {/* Services Price */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-50 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Services price</h3>
        
        <div className="space-y-3">
          <div className="bg-slate-50/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-800">Men's Haircut</h4>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                <span>$30</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  30 Min
                </div>
              </div>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-[#E11D48]" />
          </div>

          <NewServiceModal 
            trigger={
              <button className="w-full h-14 rounded-2xl border-2 border-dashed border-slate-100 flex items-center justify-center gap-2 text-sm font-bold text-slate-400 hover:border-slate-200 hover:bg-slate-50 transition-all">
                <Plus className="w-4 h-4" />
                Add New Service
              </button>
            }
          />
        </div>
      </div>

      {/* Working Days */}
      <div className="bg-white rounded-[32px] p-8 border border-slate-50 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900">Working Days</h3>
        
        <div className="space-y-1">
          {workingDays.map((item) => (
            <div key={item.day} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
              <span className="text-base font-bold text-slate-800">{item.day}</span>
              <Switch 
                defaultChecked={item.enabled}
                className="data-[state=checked]:bg-[#E11D48]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 pb-10">
        <Button className="h-14 px-10 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-2xl font-bold text-base shadow-xl shadow-red-500/20 transition-all active:scale-[0.98]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
