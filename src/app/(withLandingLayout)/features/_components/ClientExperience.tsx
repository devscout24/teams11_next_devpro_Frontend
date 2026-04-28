import React from "react";
import { Smartphone, Clock, Bell, CreditCard } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    label: "Mobile-First Design",
    desc: "Beautiful booking experience on any device",
  },
  {
    icon: Clock,
    label: "Real-Time Availability",
    desc: "Instant confirmation without phone calls",
  },
  {
    icon: Bell,
    label: "Smart Reminders",
    desc: "Automated notifications keep clients informed",
  },
  {
    icon: CreditCard,
    label: "Seamless Payments",
    desc: "Secure checkout in just a few taps",
  },
];

export default function ClientExperience() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mock app card */}
          <div className="p-8 bg-white shadow-2xl rounded-3xl">
            <div className="relative flex justify-center ">
              <div className="relative w-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      BookingPam
                    </p>
                    <p className="text-[11px] text-neutral-400">Mobile App</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-50 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    Find Services
                  </p>
                  <div className="mt-3 flex gap-2">
                    <div className="h-16 w-16 flex-1 rounded-md bg-[#FFD19B]" />
                    <div className="h-16 w-16 flex-1 rounded-md bg-[#B9D4FF]" />
                    <div className="h-16 w-16 flex-1 rounded-md bg-[#B8F5CC]" />
                  </div>
                </div>

                <button className="mt-5 w-full rounded-lg bg-[#FF1A14] py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,26,20,0.25)] transition-transform hover:-translate-y-0.5">
                  Book Appointment
                </button>

                <p className="mt-3 text-center text-[11px] text-neutral-400">
                  Real-time availability
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-[2.6rem]">
              An Amazing Experience for Your Clients
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-500 sm:text-[1.05rem]">
              Your customers get a branded, professional interface to discover
              services, check real-time availability, and make instant bookings
              from any device. Reduce phone tag and friction.
            </p>
            <div className="mt-8 space-y-5">
              {features.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-[#9B5CFD]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[15px] font-semibold text-neutral-900">
                      {label}
                    </p>
                    <p className="text-sm text-neutral-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
