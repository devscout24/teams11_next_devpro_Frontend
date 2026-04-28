"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";

const testimonials = [
  {
    name: "Mike Chen",
    role: "Business Owner",
    text: "Excellent service and quality ports. The team was invaluable in finding exactly what we needed.",
    rating: 2.5,
    initials: "MC",
    color: "#6366f1",
  },
  {
    name: "Sarah Johnson",
    role: "Salon Owner",
    text: "BookingPam transformed how we handle appointments. Our no-show rate dropped by 60% in the first month.",
    rating: 4,
    initials: "SJ",
    color: "#ec4899",
  },
  {
    name: "James Rivera",
    role: "Fitness Coach",
    text: "The team management features are incredible. My staff loves having their own scheduling portal.",
    rating: 3,
    initials: "JR",
    color: "#f59e0b",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-neutral-50"> {/* Added light background for better look */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            What our Customers say
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base max-w-md mx-auto">
            Genuine feedback from customers about their experiences with our products.
          </p>
        </div>

        {/* Swiper Marquee - Right to Left */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-neutral-50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-neutral-50 to-transparent" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={8000}                    // Adjust speed here (higher = slower)
            allowTouchMove={false}
            className="w-full py-4"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="w-[340px]! shrink-0"   // Fixed width for cards
              >
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 h-full hover:shadow-md transition-all">
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}