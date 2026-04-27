'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    title: "Total Revenue",
    value: "AED 124,500",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="w-5 h-5" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Total Bookings",
    value: "1,482",
    change: "+8.2%",
    trend: "up",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "New Customers",
    value: "324",
    change: "-2.4%",
    trend: "down",
    icon: <Users className="w-5 h-5" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export default function StatisticsPage() {
  return (
    <div className="p-4 lg:p-8 space-y-6 bg-background min-h-screen">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">Business Statistics</h1>
        <p className="text-muted-foreground text-xs lg:text-sm mt-1">
          Detailed analytics and insights about your business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-border/50 shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-xs font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-2xl ${stat.bgColor} ${stat.color}`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <BarChart3 className="w-8 h-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl font-bold">Revenue Analytics Chart</CardTitle>
          <CardDescription className="max-w-[300px] mt-2">
            Detailed revenue distribution and growth charts will be displayed here once data is aggregated.
          </CardDescription>
        </Card>

        <Card className="border-border/50 shadow-sm">
          <CardHeader className="p-6 border-b border-border/50">
            <CardTitle className="text-lg font-bold">Popular Services</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {[
              { name: "Hair Braiding", count: 420, price: "AED 105k" },
              { name: "Manicure", count: 380, price: "AED 68k" },
              { name: "Facial", count: 210, price: "AED 67k" },
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">{s.count} Bookings</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{s.price}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
