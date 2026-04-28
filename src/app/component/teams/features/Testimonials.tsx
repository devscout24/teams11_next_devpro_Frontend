import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Chen",
    role: "Business Owner",
    text: "Excellent service and quality ports. The team was invaluable in finding exactly what we needed.",
    rating: 5,
    initials: "MC",
    color: "#6366f1",
  },
  {
    name: "Sarah Johnson",
    role: "Salon Owner",
    text: "BookingPam transformed how we handle appointments. Our no-show rate dropped by 60% in the first month.",
    rating: 5,
    initials: "SJ",
    color: "#ec4899",
  },
  {
    name: "James Rivera",
    role: "Fitness Coach",
    text: "The team management features are incredible. My staff loves having their own scheduling portal.",
    rating: 5,
    initials: "JR",
    color: "#f59e0b",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            What our Customers say
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base">
            Genuine feedback from customers about their experiences with our products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, rating, initials, color }) => (
            <div
              key={name}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{name}</p>
                  <p className="text-xs text-neutral-400">{role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
