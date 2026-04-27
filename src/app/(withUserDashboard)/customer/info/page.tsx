'use client';

import React from 'react';
import {IconEdit, IconLock} from '@tabler/icons-react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import Link from 'next/link';

export default function MyInformationPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Personal Information Section */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            Personal Information
          </h2>
          <Button
            variant="ghost"
            className="text-primary hover:text-[#B71C1C] hover:bg-red-50 gap-2 font-semibold">
            <IconEdit className="w-4 h-4" /> Edit
          </Button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-gray-900 font-semibold ml-1">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Sarah Amin"
                className="h-12 rounded-full border-gray-200 bg-white px-6 focus:ring-1 focus:ring-red-100"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-gray-900 font-semibold ml-1">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="sara@email.com"
                className="h-12 rounded-full border-gray-200 bg-white px-6 focus:ring-1 focus:ring-red-100"
              />
            </div>
          </div>

          {/* Phone Number Input (Full Width) */}
          <div className="space-y-2">
            <Input
              id="phone"
              defaultValue="+212 2545658745"
              className="h-12 rounded-full border-gray-200 bg-white px-6 focus:ring-1 focus:ring-red-100"
            />
          </div>

          {/* Continue Button */}
          <div className="pt-2">
            <Button className="bg-primary hover:bg-[#B71C1C] text-white px-10 py-6 rounded-full font-bold text-base transition-all active:scale-[0.98]">
              Continue
            </Button>
          </div>
        </form>
      </div>

      {/* Security Section */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Security</h2>

        <Link href={'/customer/settings'}>
          <Button
            variant="outline"
            className="flex cursor-pointer items-center gap-3 border-gray-200 text-gray-700 font-semibold h-12 px-6 rounded-xl hover:bg-gray-50 transition-all">
            <IconLock className="w-5 h-5 text-gray-400" />
            Change Password
          </Button>
        </Link>
      </div>
    </div>
  );
}
