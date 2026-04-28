'use client';

import React from 'react';
import {IconChevronLeft, IconLock} from '@tabler/icons-react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import Link from 'next/link';

export default function ChangePasswordPage() {
  return (
    <section className="p-6">
      <div className="mx-auto space-y-4">
        <Link
          href="/staff/settings"
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors">
          <IconChevronLeft className="w-4 h-4" /> Back
        </Link>

        <div className="bg-white border border-gray-100 rounded-2xl p-12 shadow-sm min-h-[500px] flex flex-col items-center">
          {/* Lock Icon */}
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
            <IconLock className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-10">
            Password change
          </h2>

          <form className="w-full space-y-6">
            {/* Current Password */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">
                Current Password
              </Label>
              <Input
                type="password"
                placeholder="********"
                className="h-12 rounded-xl border-gray-200 focus:ring-1 focus:ring-red-100 px-4"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* New Password */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  New Password
                </Label>
                <Input
                  type="password"
                  placeholder="********"
                  className="h-12 rounded-xl border-gray-200 focus:ring-1 focus:ring-red-100 px-4"
                />
              </div>

              {/* Confirm New Password */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Confirm New Password
                </Label>
                <Input
                  type="password"
                  placeholder="********"
                  className="h-12 rounded-xl border-gray-200 focus:ring-1 focus:ring-red-100 px-4"
                />
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-[#B71C1C] text-white font-bold h-12 rounded-xl mt-6">
              Save
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
