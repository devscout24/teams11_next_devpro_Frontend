'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  CheckCircle2, 
  Gift,
  Copy,
  Share2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const StatCard = ({ 
  title, 
  value, 
  label, 
  icon: Icon, 
  colorClass, 
  iconColor 
}: { 
  title: string, 
  value: string, 
  label: string, 
  icon: any, 
  colorClass: string,
  iconColor: string
}) => (
  <div className={cn("rounded-[24px] p-8 border border-transparent shadow-sm flex flex-col justify-between h-[180px] transition-all hover:shadow-md", colorClass)}>
    <div className="flex justify-between items-start">
      <h3 className="text-base font-bold text-slate-800/80">{title}</h3>
      <Icon className={cn("w-6 h-6", iconColor)} />
    </div>
    <div className="space-y-1">
      <p className="text-[40px] font-black text-slate-900 leading-none">{value}</p>
      <p className="text-sm font-bold text-slate-500/70">{label}</p>
    </div>
  </div>
);

export default function InviteFriendsPage() {
  const referralLink = "bookingpam.com/join/JOHNDOE123";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  return (
    <div className="p-6 lg:p-10 space-y-10 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[32px] font-black text-slate-900 tracking-tight">Refer & Earn Rewards</h1>
        <p className="text-slate-400 text-base font-medium">
          Refer your friend and earn rewards
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Invited"
          value="8"
          label="Friends invited"
          icon={Users}
          colorClass="bg-[#EBF5FF] border-[#D1E9FF]"
          iconColor="text-[#0EA5E9]"
        />
        <StatCard 
          title="Successful"
          value="3"
          label="Joined & booked"
          icon={CheckCircle2}
          colorClass="bg-[#F0FDF4] border-[#DCFCE7]"
          iconColor="text-[#16A34A]"
        />
        <StatCard 
          title="Rewards Earned"
          value="$30"
          label="In credits"
          icon={Gift}
          colorClass="bg-[#FFF7ED] border-[#FFEDD5]"
          iconColor="text-[#F97316]"
        />
      </div>

      {/* Referral Link Card */}
      <div className="bg-white rounded-[32px] p-10 border border-slate-50 shadow-sm space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900">Your Unique Referral Link</h2>
          <p className="text-slate-400 text-base font-medium">
            Share this link with your friends to earn rewards!
          </p>
        </div>

        <div className="bg-[#FFF1F1] rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-red-50/50">
          <p className="text-base font-bold text-slate-700 tracking-wide select-all">
            {referralLink}
          </p>
          <Button 
            onClick={copyToClipboard}
            className="w-full md:w-auto h-12 px-8 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-xl font-bold gap-2 shadow-lg shadow-red-500/20 transition-all active:scale-95"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
}
