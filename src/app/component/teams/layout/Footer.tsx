import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fdeee9]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-[#E73404]">BookingPam</span>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              The all-in-one platform powering modern service businesses.
            </p>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Quick access</h4>
            <ul className="space-y-2.5">
              {["For business", "Marketplace", "Pricing"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-neutral-600 hover:text-brand-red transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Customer Support</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Contact", href: "/support" },
                { label: "About Us", href: "#" },
                { label: "FAQ", href: "/pricing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-brand-red transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@cybernark.com"
                  className="text-sm text-brand-red hover:underline"
                >
                  info@cybernark.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@cybernark.com"
                  className="text-sm text-neutral-600 hover:text-brand-red transition-colors"
                >
                  sales@cybernark.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#E73404]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/80">
            © 2026 BookingPam. Built for service entrepreneurs.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
