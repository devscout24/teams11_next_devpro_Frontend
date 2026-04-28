import React from "react";
import { Button } from "@/components/ui/button";

export default function FeaturesHero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
            Powerful Features to{" "}
            <span className="block">
              Elevate Your{" "}
              <span className="text-[#E8302A]">Booking</span>
            </span>
            <span className="text-[#E8302A]">Experience</span>
          </h1>
          <p className="mt-5 text-neutral-500 text-base sm:text-lg leading-relaxed max-w-xl">
            Everything you need to manage your business effortlessly, from
            automated scheduling to secure payments, all in one place.
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-full px-8 bg-[#E8302A] rounded-md">
              Free trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
