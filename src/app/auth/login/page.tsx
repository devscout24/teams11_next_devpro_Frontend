'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'vendor' | 'staff' | 'customer'>('customer');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Just redirect based on the selected role
    if (email && password) {
      router.push(`/${role}/dashboard`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#D32F2F]">BookingPam Login</CardTitle>
          <CardDescription>Select a role to enter the dashboard</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input 
                type="email" 
                placeholder="admin@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div className="space-y-2 mb-6">
              <Label>Login as</Label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as 'vendor' | 'staff' | 'customer')}
                className="w-full h-10 px-3 border border-gray-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-[#D32F2F]"
              >
                <option value="vendor">Vendor Dashboard</option>
                <option value="staff">Staff Dashboard</option>
                <option value="customer">Customer Dashboard</option>
              </select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}