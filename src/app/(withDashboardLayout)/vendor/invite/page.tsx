'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  CheckCircle2, 
  Gift,
  Copy
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const StatCard = ({ 
  title, 
  value, 
  label, 
  icon: Icon, 
  colorClass, 
  iconColor,
  textColor
}: { 
  title: string, 
  value: string, 
  label: string, 
  icon: React.ElementType, 
  colorClass: string,
  iconColor: string,
  textColor: string
}) => (
  <div className={cn("rounded-[24px] p-6 border flex flex-col gap-6 transition-all hover:shadow-md", colorClass)}>
    <div className="flex justify-between items-start">
      <h3 className={cn("text-sm font-semibold", textColor)}>{title}</h3>
      <Icon className={cn("w-5 h-5", iconColor)} />
    </div>
    <div className="space-y-0.5">
      <p className={cn("text-3xl font-bold leading-none", textColor)}>{value}</p>
      <p className={cn("text-xs font-medium opacity-80", textColor)}>{label}</p>
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
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[24px] sm:text-[32px] font-bold text-foreground tracking-tight">Refer & Earn Rewards</h1>
        <p className="text-muted-foreground text-sm sm:text-base font-medium">
          Refer your friend and earn rewards
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <StatCard 
          title="Total Invited"
          value="8"
          label="Friends invited"
          icon={Users}
          colorClass="bg-[#EBF5FF] border-[#D1E9FF]"
          iconColor="text-[#2563EB]"
          textColor="text-[#1E40AF]"
        />
        <StatCard 
          title="Successful"
          value="3"
          label="Joined & booked"
          icon={CheckCircle2}
          colorClass="bg-[#F0FDF4] border-[#DCFCE7]"
          iconColor="text-[#16A34A]"
          textColor="text-[#15803D]"
        />
        <StatCard 
          title="Rewards Earned"
          value="$30"
          label="In credits"
          icon={Gift}
          colorClass="bg-[#FFF7ED] border-[#FFEDD5] sm:col-span-2 md:col-span-1"
          iconColor="text-[#EA580C]"
          textColor="text-[#C2410C]"
        />
      </div>

      {/* Referral Link Card */}
      <div className="bg-primary/5 rounded-[20px] sm:rounded-2xl p-5 sm:p-8 border-none space-y-4 sm:space-y-6">
        <div className="space-y-1">
          <h2 className="text-[18px] sm:text-xl font-bold text-foreground">Your Unique Referral Link</h2>
          <p className="text-muted-foreground text-xs sm:text-sm font-medium">
            Share this link with your friends to earn rewards!
          </p>
        </div>

        <div className="bg-primary/10 rounded-xl p-2 sm:pl-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-none w-full">
          <p className="text-xs sm:text-sm font-semibold text-foreground/80 tracking-wide select-all w-full text-center sm:text-left px-2 sm:px-0 pt-2 sm:pt-0 truncate">
            {referralLink}
          </p>
          <Button 
            onClick={copyToClipboard}
            className="w-full sm:w-auto h-10 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold gap-2 shadow-sm transition-all active:scale-95 shrink-0"
          >
            <Copy className="w-4 h-4 shrink-0" />
            <span className="truncate">Copy Link</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
