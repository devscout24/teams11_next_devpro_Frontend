import React from "react";
import { CalendarDays, Globe, Star, CreditCard } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: '/teams/calendar.svg',
    title: "All-In-one Calendar",
    description:
      "Book 1:1s or group classes in just a few clicks, on desktop, tablet or mobile.",
  },
  {
    icon: '/teams/booking.svg',
    title: "Your Booking Page",
    description:
      "Empower your customers to self-book their appointments 24/7.",
  },
  {
    icon: '/teams/reviews.svg',
    title: "Reviews",
    description:
      "Display shoutouts from happy customers to encourage new bookings.",
  },
  {
    icon: '/teams/payments.svg',
    title: "Secure Online Payments",
    description:
      "Take digital, credit and debit card payments ahead of appointments.",
  },
];

export default function TimeToGetSeen() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Time to get seen
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
            Customize your online Booking Page with a service menu, your
            availability and top-notch reviews, then get paid in a snap.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-md hover:border-brand-red/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Image src={Icon} alt={`${title} icon`} width={48} height={48} className="text-brand-red" />
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
