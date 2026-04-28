import React from "react";
import { Video, Users, Clock, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Video,
    title: "Zoom & Google Meet",
    description:
      "Book 1:1s or group classes in just a few clicks, on desktop, tablet or mobile.",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Empower your customers to self-book their appointments 24/7.",
  },
  {
    icon: Clock,
    title: "24/7 Online Booking",
    description:
      "Display shoutouts from happy customers to encourage new bookings.",
  },
  {
    icon: BarChart3,
    title: "Business Dashboard",
    description:
      "Take digital, credit and debit card payments ahead of appointments.",
  },
];

export default function ServicePillars() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Everything a service <br /> business needs.
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base max-w-lg mx-auto">
            Six pillars built to grow your revenue and protect your time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/10 transition-colors">
                <Icon className="h-10 w-10 text-[#E73404]" />
              </div>
              <h3 className="font-semibold text-neutral-900 text-sm mb-2">
                {title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
