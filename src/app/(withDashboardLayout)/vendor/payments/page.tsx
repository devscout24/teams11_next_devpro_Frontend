'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Info, 
  Link as LinkIcon,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PaymentMethodCard = ({ 
  name, 
  link, 
  iconColor 
}: { 
  name: string, 
  link: string, 
  iconColor: string 
}) => (
  <div className="bg-white rounded-[24px] p-6 border border-slate-50 shadow-sm flex items-center justify-between group hover:border-slate-200 transition-all">
    <div className="flex items-center gap-4">
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50", iconColor)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.067 8.178c-.622 3.122-2.733 4.889-5.711 4.889h-.644c-.422 0-.756.289-.844.711l-.978 4.933c-.044.178-.2.311-.378.311h-2.311c-.267 0-.444-.267-.378-.511l2.489-12.444c.044-.244.267-.422.511-.422h4.511c1.556 0 2.822.422 3.422 1.244.333.444.444 1 .311 1.289zm-5.422 2.733c.044-.244.267-.422.511-.422h.422c1.467 0 2.4-1.044 2.4-2.422 0-1.044-.733-1.844-2.111-1.844h-.978c-.244 0-.467.178-.511.422l-.733 4.266z" />
        </svg>
      </div>
      <div className="space-y-0.5">
        <h4 className="text-base font-bold text-slate-800">{name}</h4>
        <p className="text-xs font-medium text-slate-400">{link}</p>
      </div>
    </div>
    <Button 
      variant="outline" 
      size="sm" 
      className="h-9 px-5 rounded-lg text-xs font-bold bg-[#E11D48] text-white border-none hover:bg-[#BE123C] hover:text-white transition-all active:scale-95"
    >
      Remove
    </Button>
  </div>
);

export default function PaymentsPage() {
  return (
    <div className="p-6 lg:p-10 space-y-10 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[32px] font-black text-slate-900 tracking-tight">Payment Methods</h1>
        <p className="text-slate-400 text-base font-medium">
          Secure payments are processed externally via Stripe. Your data is always protected.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-[#FFF1F1] rounded-[24px] p-6 border border-red-50/50 flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center shrink-0">
          <Info className="w-5 h-5 text-white" />
        </div>
        <p className="text-sm font-medium text-slate-600 leading-relaxed">
          Copy and paste your personal direct payment link (e.g. Stripe, PayPal.me, Revolut etc.). 
          This link allows users to pay you directly after their booking.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left Column - Add Link */}
        <div className="xl:col-span-5">
          <div className="bg-white rounded-[32px] p-8 border border-slate-50 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Your Payment Link</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <Input 
                  placeholder="Enter your Stripe or PayPal link...." 
                  className="h-14 pl-11 bg-slate-50 border-none rounded-2xl text-sm focus-visible:ring-primary/20"
                />
              </div>
              
              <Button className="w-full h-14 bg-[#E11D48] hover:bg-[#BE123C] text-white rounded-2xl font-bold text-base shadow-xl shadow-red-500/10 transition-all active:scale-[0.98]">
                Add Link
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Methods List */}
        <div className="xl:col-span-7 space-y-4">
          <PaymentMethodCard 
            name="PayPal"
            link="https://paypal.me/username"
            iconColor="text-[#003087]"
          />
          <PaymentMethodCard 
            name="PayPal"
            link="https://paypal.me/username"
            iconColor="text-[#003087]"
          />
        </div>
      </div>
    </div>
  );
}
