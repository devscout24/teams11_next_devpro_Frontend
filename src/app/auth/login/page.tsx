'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {toast} from 'sonner';
import {Loader2} from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'vendor' | 'staff' | 'customer'>('customer');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Dummy delay to simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email && password) {
      toast.success('Login successful!', {
        description: `Welcome back! Redirecting to ${role} dashboard...`,
      });

      // Redirect based on the selected role
      router.push(`/${role}/dashboard`);
    } else {
      toast.error('Login failed', {
        description: 'Please check your credentials and try again.',
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-3xl font-bold text-primary">
            BookingPam
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@bookingpam.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-visible:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-visible:ring-primary"
                required
              />
            </div>
            <div className="space-y-2 mb-6">
              <Label htmlFor="role">Login as</Label>
              <select
                id="role"
                value={role}
                onChange={(e) =>
                  setRole(e.target.value as 'vendor' | 'staff' | 'customer')
                }
                className="w-full h-10 px-3 border border-gray-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-primary bg-transparent">
                <option value="vendor">Vendor Dashboard</option>
                <option value="staff">Staff Dashboard</option>
                <option value="customer">Customer Dashboard</option>
              </select>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-[#B71C1C] text-white py-6 text-lg font-semibold"
              disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
