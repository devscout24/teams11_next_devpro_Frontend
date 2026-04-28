'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Info, 
  Link as LinkIcon
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
  <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 border border-slate-50 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-slate-200 transition-all w-full">
    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto min-w-0">
      <div className={cn("w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center bg-slate-50", iconColor)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M20.067 8.178c-.622 3.122-2.733 4.889-5.711 4.889h-.644c-.422 0-.756.289-.844.711l-.978 4.933c-.044.178-.2.311-.378.311h-2.311c-.267 0-.444-.267-.378-.511l2.489-12.444c.044-.244.267-.422.511-.422h4.511c1.556 0 2.822.422 3.422 1.244.333.444.444 1 .311 1.289zm-5.422 2.733c.044-.244.267-.422.511-.422h.422c1.467 0 2.4-1.044 2.4-2.422 0-1.044-.733-1.844-2.111-1.844h-.978c-.244 0-.467.178-.511.422l-.733 4.266z" />
        </svg>
      </div>
      <div className="space-y-0.5 min-w-0 flex-1">
        <h4 className="text-sm sm:text-base font-semibold text-foreground truncate">{name}</h4>
        <p className="text-[11px] sm:text-xs font-medium text-muted-foreground truncate">{link}</p>
      </div>
    </div>
    <Button 
      variant="outline" 
      size="sm" 
      className="w-full sm:w-auto h-9 px-5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground border-none hover:bg-primary/90 transition-all active:scale-95 shrink-0"
    >
      Remove
    </Button>
  </div>
);

export default function PaymentsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 bg-[#F8FAFC]/50 min-h-screen">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[24px] sm:text-[32px] font-bold text-foreground tracking-tight">Payment Methods</h1>
        <p className="text-muted-foreground text-sm sm:text-base font-medium">
          Secure payments are processed externally via Stripe. Your data is always protected.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-primary/5 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 border border-primary/10 flex items-start gap-3 sm:gap-4">
        <div className="flex items-center justify-center shrink-0 pt-0.5">
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
        <p className="text-[13px] sm:text-sm font-medium text-foreground/80 leading-relaxed">
          Copy and paste your personal direct payment link (e.g. Stripe, PayPal.me, Revolut etc.). 
          This link allows users to pay you directly after their booking.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column - Add Link */}
        <div className="xl:col-span-5 w-full">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 border border-slate-50 shadow-sm space-y-4 sm:space-y-6 w-full">
            <h3 className="text-[18px] sm:text-xl font-semibold text-foreground">Your Payment Link</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Enter your Stripe or PayPal link...." 
                  className="h-12 pl-11 bg-white border border-slate-100 rounded-xl text-sm placeholder:text-muted-foreground focus-visible:ring-primary/20 w-full"
                />
              </div>
              
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-[15px] sm:text-base shadow-sm transition-all active:scale-[0.98]">
                Add Link
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Methods List */}
        <div className="xl:col-span-7 space-y-4 w-full">
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
