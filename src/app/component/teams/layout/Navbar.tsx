"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-neutral-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="text-2xl font-bold text-[#E8302A] tracking-tight">
                BookingPam
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-neutral-100 rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                    pathname === link.href
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-black bg-gray-200/60 rounded-full hover:text-[#E8302A] cursor-pointer transition-colors">
              <Heart className="h-5 w-5 fill-black" />
            </button>
            <Link href="/auth/login">
              <Button
                size="sm"
                className="rounded-full px-5 bg-[#E8302A] cursor-pointer"
              >
                Sign Up/Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-neutral-100">
            <Button className="w-full rounded-full bg-[#E8302A]">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
}
