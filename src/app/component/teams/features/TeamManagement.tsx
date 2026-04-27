import React from "react";
import { User, DollarSign, BarChart2, Briefcase } from "lucide-react";

const teamMembers = [
  { initials: "SJ", name: "Sarah Johnson", role: "Senior Stylist", status: "Available", color: "#6366f1" },
  { initials: "ML", name: "Marcus Lee", role: "Master Barber", status: "With Client", color: "#8b5cf6" },
  { initials: "ED", name: "Emma Davis", role: "Nail Technician", status: "Available", color: "#ec4899" },
  { initials: "AR", name: "Alex Rodriguez", role: "Massage Therapist", status: "Break", color: "#f59e0b" },
];

const perks = [
  { icon: User, label: "Individual staff calendars and availability settings" },
  { icon: DollarSign, label: "Commission tracking and automated payouts" },
  { icon: BarChart2, label: "Performance analytics per team member" },
  { icon: Briefcase, label: "Service assignment and specialization" },
];

const statusColors: Record<string, string> = {
  Available: "bg-green-100 text-green-700",
  "With Client": "bg-blue-100 text-blue-700",
  Break: "bg-orange-100 text-orange-700",
};

export default function TeamManagement() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
              Manage Your Team Seamlessly
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8">
              Assign services to different staff members, manage their
              availability, set commission structures, and track performance
              effortlessly. Empower your staff with their own scheduling logic.
            </p>
            <div className="space-y-3">
              {perks.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-neutral-700">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Roster Card */}
          <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Team Roster</h3>
            <div className="space-y-3">
              {teamMembers.map(({ initials, name, role, status, color }) => (
                <div
                  key={name}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{name}</p>
                      <p className="text-xs text-neutral-400">{role}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      statusColors[status] || "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
