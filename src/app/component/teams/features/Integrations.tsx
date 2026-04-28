"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const integrations = [
  {
    name: "Facebook",
    desc: "Get booked directly from your Facebook business profile.",
    icon: '/teams/facebook.svg',
  },
  {
    name: "Google Meet",
    desc: "Provide crystal-clear video appointments through Google Meet.",
    icon: '/teams/meet.svg',
  },
  {
    name: "Zoom",
    desc: "Add Zoom video links to appointments and group sessions.",
    icon: '/teams/zoom.svg',
  },
  {
    name: "Google Calendar",
    desc: "Sync your schedule and avoid double bookings automatically.",
    icon: '/teams/google-calendar.svg',
  },
];

export default function Integrations() {
  return (
    <section className="py-16 overflow-hidden container mx-auto">
      {/* Header */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          It&apos;s all about connecting
        </h2>
        <p className="mt-3 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Link tools like Google Calendar, Stripe, and Zoom to streamline your
          workflow. Access these integrations with our Premium Plan to save time
          and boost your business.
        </p>
      </div>

      {/* Swiper Marquee - Right to Left (continuous) */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={7000}                 // Adjust this value (higher = slower)
          allowTouchMove={false}
          className="w-full"
        >
          {[...integrations, ...integrations].map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-[325px]! h-[120px]! shrink-0"   // Important fix
            >
              <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-2xl px-5 py-4 h-full hover:border-neutral-300 hover:shadow-sm transition-all cursor-default">
                <Image src={item.icon} alt={`${item.name} icon`} width={40} height={40} className="shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-900 mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}