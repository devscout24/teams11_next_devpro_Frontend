import React from "react";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/80 text-sm sm:text-base mb-8">
          Join thousands of service professionals who trust BookingPam
        </p>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-brand-red px-10"
        >
          Start Your Free Trial
        </Button>
        <p className="text-white/60 text-xs mt-4">No credit card required</p>
      </div>
    </section>
  );
}
