import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    tagline: "Perfect for getting started",
    price: 10,
    featured: false,
    features: [
      "1 Staff Member",
      "Unlimited Bookings",
      "Email Reminders",
      "Basic Analytics",
      "Online Payment Processing",
      "Standard Support",
    ],
  },
  {
    name: "Premium",
    tagline: "For growing businesses",
    price: 90,
    featured: true,
    features: [
      "Everything in Basic, plus:",
      "5 Staff Member",
      "SMS Reminders",
      "Multi-staff Management",
      "Custom Branding",
      "Advanced Analytics & Reports",
      "Marketing Tools & Coupons",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large operations",
    price: 150,
    featured: false,
    features: [
      "Everything in Basic, plus:",
      "10 Staff Member",
      "SMS Reminders",
      "Multi-staff Management",
      "Custom Branding",
      "Advanced Analytics & Reports",
      "Marketing Tools & Coupons",
      "Priority Support",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
            Simple, Transparent
            <br />
            <span className="text-[#E73404]">Pricing</span>
          </h1>
          <p className="mt-4 text-neutral-500 text-sm sm:text-base">
            Choose the plan that fits your business.
            <br />
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-7 flex flex-col",
                plan.featured
                  ? "border-[#E73404] shadow-xl shadow-[#E73404]/10 scale-[1.02]"
                  : "border-neutral-200 bg-white"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E73404] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900">{plan.name}</h3>
                <p className="text-xs text-neutral-500 mt-1">{plan.tagline}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-neutral-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-neutral-500">/month</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-brand-red mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "default" : "outline"}
                className="w-full rounded-xl"
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
