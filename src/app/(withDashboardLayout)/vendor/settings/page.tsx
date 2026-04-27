'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Upload, 
  Edit3,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

const tabs = ['Profile', 'Security', 'Subscription', 'Integrations'];

const ProfileTab = () => (
  <div className="space-y-10">
    {/* Personal Information Card */}
    <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-10 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>
        <Button variant="outline" size="sm" className="h-9 px-5 rounded-full text-[11px] font-bold gap-2 bg-[#FFF1F1] text-[#E11D48] border-none hover:bg-[#FFE4E4] transition-colors shadow-none">
          <Edit3 className="w-3.5 h-3.5" />
          Edit
        </Button>
      </div>

      <div className="flex flex-col space-y-10">
        <div className="w-48 h-32 bg-[#FFF1F1] rounded-[28px] border-2 border-dashed border-red-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#FFE4E4] transition-all group">
          <Upload className="w-5 h-5 text-[#E11D48]" />
          <div className="text-center">
            <p className="text-[12px] font-bold text-[#E11D48]">Upload image</p>
            <p className="text-[9px] font-medium text-[#E11D48]/60">Recommended: 1000 × 300px</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <Label className="text-sm font-bold text-slate-900">Name</Label>
            <Input defaultValue="Sarah Amin" className="h-14 bg-white border-slate-200 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-5" />
          </div>
          <div className="space-y-3">
            <Label className="text-sm font-bold text-slate-900">Email</Label>
            <Input defaultValue="sara@email.com" className="h-14 bg-white border-slate-200 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-5" />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-bold text-slate-900">Phone</Label>
          <Input defaultValue="+212 2545658745" className="h-14 bg-white border-slate-200 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none w-full px-5" />
        </div>

        <Button className="h-14 w-52 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-full font-bold text-base shadow-xl shadow-red-500/20 transition-all active:scale-[0.98]">
          Coutinue
        </Button>
      </div>
    </div>

    {/* Delete Account Card */}
    <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-slate-900">Delete Account</h2>
        <p className="text-slate-400 text-sm font-medium">
          Permanently remove your account and all associated data.
        </p>
      </div>
      <Button variant="outline" className="h-14 px-10 border-[#E11D48] text-[#E11D48] rounded-full font-bold text-sm hover:bg-[#FFF1F1] transition-all border-2">
        Delete my account
      </Button>
    </div>
  </div>
);

const SecurityTab = () => (
  <div className="space-y-10">
    <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Password</h2>
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">6 items</span>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <Label className="text-sm font-bold text-slate-900">Current Password</Label>
          <Input type="password" defaultValue="*******" className="h-14 bg-white border-slate-200 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <Label className="text-sm font-bold text-slate-900">New Password</Label>
            <Input type="password" defaultValue="******" className="h-14 bg-white border-slate-200 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-5" />
          </div>
          <div className="space-y-3">
            <Label className="text-sm font-bold text-slate-900">Confirm New Password</Label>
            <Input type="password" defaultValue="******" className="h-14 bg-white border-slate-200 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-5" />
          </div>
        </div>

        <Button className="h-14 w-52 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-full font-bold text-base shadow-xl shadow-red-500/20 transition-all active:scale-[0.98]">
          Update Password
        </Button>
      </div>
    </div>

    <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-8">
      <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between py-6 border-b border-slate-50 last:border-0">
          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-slate-800">Email Notifications</h4>
            <p className="text-xs font-medium text-slate-400">Get notified about new bookings via email</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-[#E11D48]" />
        </div>
        <div className="flex items-center justify-between py-6 border-b border-slate-50 last:border-0">
          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-slate-800">Booking Reminders</h4>
            <p className="text-xs font-medium text-slate-400">Remind customers about upcoming bookings</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-[#E11D48]" />
        </div>
      </div>
    </div>
  </div>
);

const SubscriptionTab = () => (
  <div className="space-y-10">
    <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm space-y-10">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-slate-900">Current Plan</h2>
          <p className="text-slate-400 text-sm font-medium tracking-tight">Renews February 27, 2025 · AED 199/month</p>
        </div>
        <div className="px-4 py-1.5 bg-[#E11D48] rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-md shadow-red-500/20">Active</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Monthly Cost</p>
          <p className="text-[32px] font-black text-slate-900">$199</p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Staff Limit</p>
          <p className="text-[32px] font-black text-slate-900">5 staff</p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Next Billing Date</p>
          <p className="text-[32px] font-black text-slate-900">Apr 1, 2026</p>
        </div>
      </div>

      <div className="bg-slate-50/80 rounded-[28px] p-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-slate-300" />
          </div>
          <p className="text-[15px] font-bold text-slate-600">Currently using: <span className="text-slate-900">Premium</span></p>
        </div>
        <Button className="h-14 px-10 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-2xl font-bold text-sm shadow-xl shadow-red-500/10 transition-all active:scale-[0.98]">
          Upgrade your plan
        </Button>
      </div>
    </div>
  </div>
);

const IntegrationsTab = () => (
  <div className="space-y-10">
    <div className="flex items-center justify-between">
      <div className="space-y-1.5">
        <h2 className="text-[28px] font-black text-slate-900 tracking-tight">Integrations</h2>
        <p className="text-slate-400 text-sm font-medium">Connect your favorite tools to streamline your business workflow.</p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-bold text-slate-500">3 connected</span>
      </div>
    </div>

    <div className="relative">
      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
      <Input placeholder="Search integrations..." className="h-14 pl-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-sm placeholder:text-slate-300" />
    </div>

    <div className="space-y-8">
      <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em]">VIDEO MEETINGS</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            name: 'Zoom', 
            icon: (
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
              </div>
            ), 
            desc: 'Enable your team to add Zoom video links automatically to appointments.' 
          },
          { 
            name: 'Google Meet', 
            icon: (
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-slate-50">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg" className="w-6 h-6" alt="Meet" />
              </div>
            ), 
            desc: 'Provide crystal-clear video appointments through Google Meet.' 
          },
          { 
            name: 'Instagram Bookings', 
            icon: (
              <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            ), 
            desc: 'Accept appointments day and night directly from your Instagram profile.' 
          },
        ].map((item) => (
          <div key={item.name} className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:border-red-100 transition-all group flex flex-col min-h-[180px]">
            <div className="flex items-center justify-between mb-6">
              {item.icon}
              <div className="px-3 py-1 bg-[#F0FDF4] text-[#16A34A] rounded-lg text-[10px] font-black uppercase tracking-widest">Upgrade</div>
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-2">{item.name}</h4>
            <p className="text-xs leading-[1.6] text-slate-400 font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Integrations');

  return (
    <div className="p-6 lg:p-10 space-y-10 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1.5">
        <h1 className="text-[32px] font-black text-slate-900 tracking-tight">Settings</h1>
        <p className="text-slate-400 text-base font-medium">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm flex items-center w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 h-14 rounded-xl text-[15px] font-bold transition-all",
              activeTab === tab 
                ? "bg-[#E11D48] text-white" 
                : "text-slate-500 hover:bg-slate-50"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === 'Profile' && <ProfileTab />}
        {activeTab === 'Security' && <SecurityTab />}
        {activeTab === 'Subscription' && <SubscriptionTab />}
        {activeTab === 'Integrations' && <IntegrationsTab />}
      </div>
    </div>
  );
}
