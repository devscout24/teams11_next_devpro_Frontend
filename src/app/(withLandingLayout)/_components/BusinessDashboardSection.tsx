"use client";

import { ArrowUpRight, ArrowRight, Star } from "lucide-react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-700" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Service & Pricing Control",
    description:
      "Create unlimited services, set custom pricing, manage durations, and organize by categories. Update instantly across all channels.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-700" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      </svg>
    ),
    title: "Staff Scheduling Made Easy",
    description:
      "Assign services to staff members, set individual availability, manage time off, and prevent scheduling conflicts automatically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-700" stroke="currentColor" strokeWidth={1.8}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-Time Analytics",
    description:
      "Track bookings, revenue, staff performance, and customer trends. Make data-driven decisions with comprehensive reports.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-700" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Customer Management",
    description:
      "Access complete booking history, customer preferences, contact information, and automated communication tools.",
  },
];

const statsCards = [
  {
    label: "Today's Revenue",
    value: "$1,247.80",
    badge: (
      <span className="flex items-center gap-0.5 text-xs font-semibold text-green-600">
        <ArrowUpRight size={13} />
        24%
      </span>
    ),
  },
  {
    label: "Active Bookings",
    value: "20",
    badge: <span className="text-xs text-gray-400">This Week</span>,
  },
  {
    label: "Staff Members",
    value: "32",
    badge: <span className="text-xs font-semibold text-green-500">All Active</span>,
  },
];

const footerStats = [
  { value: "500+", sub: "Bookings/mo" },
  {
    value: (
      <span className="flex items-center gap-1">
        4.9<Star size={14} className="fill-gray-800 text-gray-800 mt-0.5" />
      </span>
    ),
    sub: "Avg Rating",
  },
  { value: "99%", sub: "Uptime" },
];

export function BusinessDashboardSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4">
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-800 text-xs font-semibold text-gray-800 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-[10px]">✦</span> Business
            </span>
            <span className="flex items-center px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
              Staff
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-lg">
            From solo practitioners to multi-location spas, our platform scales with your business
          </p>

          {/* Feature list */}
          <ul className="space-y-5">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                {/* Black rounded square with white check */}
                <div className="mt-0.5 shrink-0 w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{f.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT COLUMN — Dashboard Card ── */}
        <div className="w-full max-w-sm mx-auto lg:max-w-none">
          <div className="bg-gray-100 rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <span className="text-sm font-semibold text-gray-800">Admin Dashboard</span>
              <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-600 text-[11px] font-semibold tracking-wide">
                Live
              </span>
            </div>

            {/* Stat rows */}
            <div className="px-4 pb-4 space-y-2.5">
              {statsCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-xl px-4 py-3.5 flex items-center justify-between border border-gray-100"
                >
                  <div>
                    <p className="text-[11px] text-gray-400 mb-1">{card.label}</p>
                    <p className="text-xl font-bold text-gray-900 leading-none">{card.value}</p>
                  </div>
                  {card.badge}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="px-4 pb-4">
              <button className="w-full flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors text-white rounded-xl px-5 py-3.5 text-sm font-semibold">
                Try a Demo
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Footer stats */}
            <div className="px-4 pb-5 pt-4">
              <div className="flex gap-3">
                {footerStats.map((s, i) => (
                  <div key={i} className="flex-1 bg-white rounded-xl px-4 py-3 text-center shadow-sm">
                    <div className="text-base font-bold text-gray-900 flex items-center justify-center">
                      {s.value}
                    </div>
                    <div className="text-[11px] text-gray-400">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
