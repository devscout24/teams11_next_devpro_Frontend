import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  CalendarDays, 
  Award, 
  DollarSign, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

const stats = [
  {
    title: "WEEKLY REVENUE",
    value: "AED 14,900",
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    bgColor: "bg-primary/10",
  },
  {
    title: "TODAY'S BOOKINGS",
    value: "6",
    icon: <CalendarDays className="w-5 h-5 text-blue-500" />,
    bgColor: "bg-blue-500/10",
  },
  {
    title: "ACTIVE CUSTOMERS",
    value: "6",
    icon: <UserCheck className="w-5 h-5 text-emerald-500" />,
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "STAFF AVG RATING",
    value: "4.8",
    icon: <Award className="w-5 h-5 text-orange-500" />,
    bgColor: "bg-orange-500/10",
  },
];

const appointments = [
  {
    id: 1,
    name: "Amina Hassan",
    service: "Hair Braiding · Sarah K.",
    time: "09:00",
    duration: "90 min",
    status: "Confirmed",
    avatar: "AH",
    avatarColor: "bg-pink-600",
  },
  {
    id: 2,
    name: "Fatima Al-Rashid",
    service: "Manicure & Pedicure · Lisa M.",
    time: "10:30",
    duration: "60 min",
    status: "Pending",
    avatar: "FA",
    avatarColor: "bg-sky-500",
  },
  {
    id: 3,
    name: "Zara Okonkwo",
    service: "Facial Treatment · Emma T.",
    time: "12:00",
    duration: "75 min",
    status: "Confirmed",
    avatar: "ZO",
    avatarColor: "bg-indigo-600",
  },
  {
    id: 4,
    name: "Nadia Kofi",
    service: "Full Body Massage · Emma T.",
    time: "15:30",
    duration: "120 min",
    status: "Confirmed",
    avatar: "NK",
    avatarColor: "bg-purple-600",
  },
];

export default function Page() {
  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 bg-background min-h-screen">
      {/* Header Section */}
      <div className="space-y-1">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground flex flex-wrap items-center gap-2 text-xs lg:text-sm">
          <span>Monday, 27 January 2025</span>
          <span className="hidden sm:inline">·</span>
          <span>Good morning, Thierry! 👋</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-border/50 shadow-sm overflow-hidden">
            <CardContent className="p-4 lg:p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1 lg:space-y-2">
                  <p className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">
                    {stat.title}
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-2 lg:p-2.5 rounded-xl ${stat.bgColor}`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <Card className="border-border/50 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between p-4 lg:p-6">
          <CardTitle className="text-base lg:text-lg font-bold">Upcoming Appointments Today</CardTitle>
          <Button variant="link" className="text-primary hover:text-primary/90 font-semibold p-0 flex items-center gap-1 text-xs lg:text-sm">
            View all <ArrowRight className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="px-0 pb-2 lg:pb-6">
          <div className="divide-y divide-border/50">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex flex-col sm:flex-row sm:items-center justify-between px-4 lg:px-6 py-4 hover:bg-muted/50 transition-colors gap-4">
                <div className="flex items-center gap-3 lg:gap-4">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className={`${appointment.avatarColor} text-white text-xs font-bold`}>
                      {appointment.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5 overflow-hidden">
                    <p className="font-bold text-foreground text-sm lg:text-base truncate">{appointment.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{appointment.service}</p>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between sm:justify-end gap-4 lg:gap-8">
                  <div className="sm:text-right space-y-0.5">
                    <p className="font-bold text-foreground text-sm lg:text-base">{appointment.time}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{appointment.duration}</p>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-4 sm:w-[200px] lg:w-[240px] justify-end">
                    <Badge 
                      variant="secondary" 
                      className={`
                        rounded-full px-2 lg:px-3 py-1 font-medium text-[9px] lg:text-[10px] bg-transparent border whitespace-nowrap
                        ${appointment.status === 'Confirmed' 
                          ? 'text-emerald-600 border-emerald-100 bg-emerald-50/50' 
                          : 'text-orange-600 border-orange-100 bg-orange-50/50'
                        }
                      `}
                    >
                      <div className={`w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full mr-1 lg:mr-1.5 ${appointment.status === 'Confirmed' ? 'bg-emerald-500' : 'bg-orange-500'}`} />
                      {appointment.status}
                    </Badge>
                    
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg h-8 px-3 lg:px-4 text-[11px] lg:text-xs font-semibold whitespace-nowrap"
                    >
                      Check-in
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

