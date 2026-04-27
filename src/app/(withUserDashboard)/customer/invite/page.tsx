'use client';

import React from 'react';
import {
  IconUsers,
  IconCircleCheck,
  IconGift,
  IconCopy,
} from '@tabler/icons-react';
import {Button} from '@/components/ui/button';
import {toast} from 'sonner';

export default function InviteFriendsPage() {
  const referralLink = 'bookingpam.com/join/JOHNDOE123';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <h2 className="text-xl font-bold text-gray-800">Refer & Earn Rewards</h2>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Invited */}
        <div className="bg-[#EBF3FF] border border-blue-100 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-blue-600 font-bold text-sm">Total Invited</p>
              <h3 className="text-4xl font-black text-blue-900">8</h3>
              <p className="text-blue-400 text-xs font-medium">
                Friends invited
              </p>
            </div>
            <IconUsers className="text-blue-500 w-6 h-6" />
          </div>
        </div>

        {/* Successful */}
        <div className="bg-[#E9FBF0] border border-green-100 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-green-600 font-bold text-sm">Successful</p>
              <h3 className="text-4xl font-black text-green-900">3</h3>
              <p className="text-green-400 text-xs font-medium">
                Joined & booked
              </p>
            </div>
            <IconCircleCheck className="text-green-500 w-6 h-6" />
          </div>
        </div>

        {/* Rewards Earned */}
        <div className="bg-[#FFF4E5] border border-orange-100 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-orange-600 font-bold text-sm">
                Rewards Earned
              </p>
              <h3 className="text-4xl font-black text-orange-900">$30</h3>
              <p className="text-orange-400 text-xs font-medium">In credits</p>
            </div>
            <IconGift className="text-orange-500 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Referral Link Section */}
      <div className="bg-[#FFF1F1] border border-red-50 rounded-3xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Your Unique Referral Link
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Share this link with your friends to earn rewards!
        </p>

        <div className="bg-[#FDE2E2] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <code className="text-gray-700 font-medium text-sm break-all px-2">
            {referralLink}
          </code>
          <Button
            onClick={copyToClipboard}
            className="bg-primary hover:bg-[#B71C1C] text-white px-6 py-5 rounded-xl font-bold flex gap-2 transition-all active:scale-95 shadow-lg shadow-red-100 shrink-0">
            <IconCopy className="w-5 h-5" />
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
}
