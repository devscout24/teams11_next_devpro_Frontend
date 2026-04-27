import React from "react";
import { Check, Minus } from "lucide-react";

const features = [
  { label: "Staff Members", basic: "1", premium: "5", enterprise: "10" },
  { label: "Email Reminders", basic: true, premium: true, enterprise: true },
  { label: "SMS Reminders", basic: false, premium: true, enterprise: true },
  { label: "Custom Branding", basic: false, premium: true, enterprise: true },
  { label: "Analytics", basic: "Basic", premium: "Advanced", enterprise: "Advanced + Custom" },
  { label: "Multiple Locations", basic: false, premium: false, enterprise: true },
  { label: "Support", basic: "Standard", premium: "Priority", enterprise: "24/7 Dedicated" },
];

function Cell({ value }: { value: string | boolean | undefined }) {
  if (value === true) return <Check className="h-4 w-4 text-brand-red mx-auto" />;
  if (value === false) return <Minus className="h-4 w-4 text-neutral-300 mx-auto" />;
  return <span className="text-sm text-neutral-700">{value}</span>;
}

export default function PlanComparison() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-10">
          Plan Comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-neutral-700 w-1/4">
                  Feature
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-neutral-700">
                  Basic
                </th>
                <th className="py-4 px-6 text-center text-sm font-bold text-brand-red bg-brand-red/5">
                  Premium
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-neutral-700">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}
                >
                  <td className="py-4 px-6 text-sm text-neutral-700 font-medium">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.basic} />
                  </td>
                  <td className="py-4 px-6 text-center bg-brand-red/5">
                    <Cell value={row.premium} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
