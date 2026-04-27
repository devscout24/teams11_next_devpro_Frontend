'use client';

import {IconChevronLeft, IconStarFilled} from '@tabler/icons-react';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function AddReviewPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/customer/dashboard"
        className="flex items-center gap-2 text-sm text-gray-500 mb-8 hover:text-gray-900 transition-colors">
        <IconChevronLeft className="w-4 h-4" /> Back to Dashboard
      </Link>

      <div className="bg-[#F3F4F6] rounded-3xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          How was your experience?
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Your feedback helps Elite Cuts & Spa improve their service
        </p>

        {/* Selected Service Box */}
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between mb-8 text-left border border-gray-100">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/customer/review.png"
                alt="Spa"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">
                The Gentlemen&apos;s Lounge
              </h4>
              <p className="text-xs text-gray-400">Classic Haircut</p>
              <div className="flex gap-4 text-[10px] text-gray-400 mt-2">
                <span>Jan 18</span>
                <span>10:30 AM</span>
              </div>
            </div>
          </div>
          <span className="text-primary font-bold">$120</span>
        </div>

        <div className="space-y-6">
          <p className="font-bold text-gray-900 text-left">Overall Rating</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <IconStarFilled key={i} className="w-12 h-12 text-primary" />
            ))}
          </div>
          <p className="text-primary font-bold text-xl italic">Amazing!</p>

          <div className="space-y-2 text-left">
            <p className="text-xs text-gray-500 text-center">
              What can we improve?
            </p>
            <textarea
              placeholder="Tell us more about the service..."
              className="w-full h-32 p-4 rounded-2xl border-2 border-gray-300 focus:ring-1 focus:ring-gray-200 outline-none text-sm"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-[#B71C1C] py-6 rounded-2xl font-bold text-white transition-all active:scale-[0.98]">
            Post Review
          </Button>
        </div>
      </div>
    </div>
  );
}
