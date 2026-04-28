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
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
        <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-[11px] font-semibold gap-2 bg-primary/5 text-primary border-none hover:bg-primary/10 transition-colors shadow-none">
          <Edit3 className="w-3.5 h-3.5" />
          Edit
        </Button>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="w-48 h-32 bg-primary/5 rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/10 transition-all group">
          <Upload className="w-5 h-5 text-primary" />
          <div className="text-center">
            <p className="text-xs font-semibold text-primary">Upload image</p>
            <p className="text-[10px] font-medium text-primary/60">Recommended: 1000 × 300px</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">Name</Label>
            <Input defaultValue="Sarah Amin" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 placeholder:text-muted-foreground shadow-none px-4" />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">Email</Label>
            <Input defaultValue="sara@email.com" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 placeholder:text-muted-foreground shadow-none px-4" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-semibold text-foreground">Phone</Label>
          <Input defaultValue="+212 2545658745" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 placeholder:text-muted-foreground shadow-none w-full px-4" />
        </div>

        <Button className="h-12 w-48 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-base shadow-sm transition-all active:scale-[0.98]">
          Continue
        </Button>
      </div>
    </div>

    {/* Delete Account Card */}
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">Delete Account</h2>
        <p className="text-muted-foreground text-sm font-medium">
          Permanently remove your account and all associated data.
        </p>
      </div>
      <Button variant="outline" className="h-12 px-8 border-primary text-primary rounded-xl font-semibold text-sm hover:bg-primary/5 transition-all border-2">
        Delete my account
      </Button>
    </div>
  </div>
);

const SecurityTab = () => (
  <div className="space-y-10">
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Password</h2>
        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">6 items</span>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-foreground">Current Password</Label>
          <Input type="password" defaultValue="*******" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">New Password</Label>
            <Input type="password" defaultValue="******" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-4" />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">Confirm New Password</Label>
            <Input type="password" defaultValue="******" className="h-12 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none px-4" />
          </div>
        </div>

        <Button className="h-12 w-48 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-base shadow-sm transition-all active:scale-[0.98]">
          Update Password
        </Button>
      </div>
    </div>

    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-8">
      <h2 className="text-xl font-semibold text-foreground">Notifications</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between py-6 border-b border-slate-50 last:border-0">
          <div className="space-y-1.5">
            <h4 className="text-base font-medium text-foreground">Email Notifications</h4>
            <p className="text-xs font-medium text-muted-foreground">Get notified about new bookings via email</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
        </div>
        <div className="flex items-center justify-between py-6 border-b border-slate-50 last:border-0">
          <div className="space-y-1.5">
            <h4 className="text-base font-medium text-foreground">Booking Reminders</h4>
            <p className="text-xs font-medium text-muted-foreground">Remind customers about upcoming bookings</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
        </div>
      </div>
    </div>
  </div>
);

const SubscriptionTab = () => (
  <div className="space-y-10">
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div className="space-y-1 sm:space-y-1.5">
          <h2 className="text-[18px] sm:text-xl font-semibold text-foreground">Current Plan</h2>
          <p className="text-muted-foreground text-xs sm:text-sm font-medium tracking-tight">Renews February 27, 2025 · AED 199/month</p>
        </div>
        <div className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-bold text-primary-foreground uppercase tracking-widest shadow-sm shrink-0">Active</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Monthly Cost</p>
          <p className="text-3xl font-bold text-foreground">$199</p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Staff Limit</p>
          <p className="text-3xl font-bold text-foreground">5 staff</p>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Next Billing Date</p>
          <p className="text-3xl font-bold text-foreground">Apr 1, 2026</p>
        </div>
      </div>

      <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <p className="text-[14px] sm:text-[15px] font-medium text-foreground">Currently using: <span className="font-semibold">Premium</span></p>
        </div>
        <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-sm shadow-sm transition-all active:scale-[0.98]">
          Upgrade your plan
        </Button>
      </div>
    </div>
  </div>
);

const IntegrationsTab = () => (
  <div className="space-y-6 sm:space-y-8 w-full">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
      <div className="space-y-1 sm:space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Integrations</h2>
        <p className="text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed">Connect your favorite tools to streamline your business workflow.</p>
      </div>
      <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-xl border border-slate-100 shadow-sm shrink-0">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="text-[11px] font-semibold text-foreground">3 connected</span>
      </div>
    </div>

    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search integrations..." className="h-11 sm:h-12 pl-11 bg-white border-slate-100 rounded-xl text-sm font-medium focus-visible:ring-primary/20 shadow-none placeholder:text-muted-foreground w-full" />
    </div>

    <div className="space-y-6">
      <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.1em]">VIDEO MEETINGS</h3>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
          <div key={item.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-primary/20 transition-all group flex flex-col min-h-[160px]">
            <div className="flex items-center justify-between mb-6">
              {item.icon}
              <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-semibold uppercase tracking-widest">Upgrade</div>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">{item.name}</h4>
            <p className="text-xs leading-[1.6] text-muted-foreground font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-8 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[24px] sm:text-3xl font-bold text-foreground tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-sm font-medium">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm w-full overflow-x-auto no-scrollbar">
        <div className="flex items-center min-w-max w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 px-4 sm:px-6 h-10 rounded-md text-[13px] sm:text-sm font-medium transition-all shrink-0",
                activeTab === tab 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
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
