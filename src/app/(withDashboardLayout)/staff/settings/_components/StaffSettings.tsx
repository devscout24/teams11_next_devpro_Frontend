'use client';

import React from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import Link from 'next/link';

export default function StaffSettings() {
  return (
    <div className="space-y-6  mx-auto">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-sm text-gray-400">
          Manage your account preference and notifications
        </p>
      </div>

      {/* Account Security Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6">
        <h3 className="font-bold text-gray-900 text-lg">Account Security</h3>

        <div className="space-y-4">
          {/* Email - Read Only */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">Email</Label>
            <Input
              readOnly
              defaultValue="playboy.nayan.dhali@gmail.com"
              className="bg-gray-100 border-none h-12 rounded-xl text-gray-500"
            />
            <p className="text-[11px] text-gray-400 ml-1">
              Contact admin to change email
            </p>
          </div>

          {/* Password - Read Only Placeholder */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">
              Password
            </Label>
            <Input
              type="password"
              readOnly
              defaultValue="password1234"
              className="bg-gray-100 border-none h-12 rounded-xl text-gray-500"
            />
          </div>

          <Link href="/staff/settings/change-password" title="Change Password">
            <Button className="w-full bg-primary hover:bg-[#B71C1C] text-white font-bold h-12 rounded-xl mt-4">
              Change your password
            </Button>
          </Link>
        </div>
      </div>

      {/* Notifications Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-6">
        <h3 className="font-bold text-gray-900 text-lg">Notifications</h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-50 pb-6">
            <div className="space-y-0.5">
              <p className="font-bold text-gray-900">Email Notifications</p>
              <p className="text-xs text-gray-400">
                Get notified about new bookings via email
              </p>
            </div>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-red-600"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="font-bold text-gray-900">Push Notifications</p>
              <p className="text-xs text-gray-400">
                Receive instant push notifications
              </p>
            </div>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
