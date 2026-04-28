'use client';

import React from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl pb-10">
      {/* Password Section */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Password</h2>
          <span className="text-xs text-gray-400">6 items</span>
        </div>

        <form className="space-y-6">
          {/* Current Password */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-900 ml-1">
              Current Password
            </Label>
            <Input
              type="password"
              placeholder="********"
              className="h-12 rounded-full border-gray-200 bg-white px-6 focus:ring-1 focus:ring-red-100 max-w-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New Password */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-900 ml-1">
                New Password
              </Label>
              <Input
                type="password"
                placeholder="******"
                className="h-12 rounded-full border-gray-200 bg-white px-6 focus:ring-1 focus:ring-red-100"
              />
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-900 ml-1">
                Confirm New Password
              </Label>
              <Input
                type="password"
                placeholder="******"
                className="h-12 rounded-full border-gray-200 bg-white px-6 focus:ring-1 focus:ring-red-100"
              />
            </div>
          </div>

          <Button className="bg-primary hover:bg-[#B71C1C] text-white px-8 py-6 rounded-full font-bold text-base shadow-lg shadow-red-100">
            Update Password
          </Button>
        </form>
      </div>

      {/* Notifications Section */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>

        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between border-b border-gray-50 pb-4">
            <div>
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

          {/* Booking Reminders */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900">Booking Reminders</p>
              <p className="text-xs text-gray-400">
                Remind customers about upcoming bookings
              </p>
            </div>
            <Switch
              defaultChecked
              className="data-[state=checked]:bg-red-600"
            />
          </div>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Delete Account</h2>
        <p className="text-sm text-gray-400 mb-6">
          Permanently remove your account and all associated data.
        </p>

        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 font-bold h-12 px-8 rounded-full transition-all">
          Delete my account
        </Button>
      </div>
    </div>
  );
}
