"use client";

import React, { useMemo, useState } from "react";
import { Heart, Star, ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MOCK_SERVICES, { ServiceProvider } from "@/lib/mockServices";
import Link from "next/link";

// using shared MOCK_SERVICES from src/lib/mockServices

const CATEGORIES = [
  "Barber",
  "Spa",
  "Chef",
  "Cleaning",
  "Plumbing",
  "Makeup",
  "Laundry",
];

const ServiceCard: React.FC<{ service: ServiceProvider }> = ({ service }) => {
  const router = useRouter();
  const detailHref = `/marketplace/${service.id}`;

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          router.push(detailHref);
        }
      }}
      onClick={() => router.push(detailHref)}
      className="bg-[#f4f4f5] rounded-[24px] p-3 flex flex-col transition-all hover:shadow-md cursor-pointer"
    >
      {/* Image Placeholder */}
      <div className="relative w-full h-48 bg-zinc-300 rounded-[16px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageCategory}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-semibold text-emerald-600">
            Available
          </span>
        </div>
        <button className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-1.5 rounded-full shadow-sm text-zinc-400 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="px-1 pt-4 pb-2 flex flex-col flex-grow">
        {/* Provider Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-300 shrink-0" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-zinc-900">
                {service.name}
              </span>
              <BadgeCheck className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-[11px] text-zinc-500 font-medium">
              {service.distance} • {service.location}
            </span>
          </div>
        </div>
        {/* Title & Rating */}
        <h3 className="text-lg font-bold text-zinc-900 mt-4 leading-tight truncate">
          {service.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold text-zinc-900">
            {service.rating}
          </span>
          <span className="text-xs font-medium text-zinc-400">
            ({service.reviews} Reviews)
          </span>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {service.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6" /> {/* Spacer */}
        {/* Footer: Price & Action */}
        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-zinc-500 mb-0.5">
              From
            </span>
            <span className="text-xl font-black text-zinc-900">
              ${service.price}
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              router.push(detailHref);
            }}
            className="bg-white text-zinc-950 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-zinc-50 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BrowseServices() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All Services") {
      return MOCK_SERVICES;
    }

    return MOCK_SERVICES.filter(
      (service) => service.imageCategory === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="bg-white py-12 md:py-16 container mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight">
            Browse Services
          </h2>
          <p className="text-sm md:text-base text-zinc-500">
            Showing {filteredServices.length} service
            {filteredServices.length === 1 ? "" : "s"}
          </p>
        </div>

        {/* Filters and Actions Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All Services")}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                activeCategory === "All Services"
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              All Services
            </button>
            {CATEGORIES.map((category) => (
              <button
                type="button"
                onClick={() => setActiveCategory(category)}
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* All Services Button */}
          <Link href="/marketplace" className="ml-auto">
          <button
            type="button"
            onClick={() => setActiveCategory("All Services")}
            className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-colors shrink-0"
          >
            All Services
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button></Link>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          ) : (
            <div className="col-span-full rounded-[24px] border border-dashed border-zinc-200 bg-zinc-50 px-6 py-12 text-center text-zinc-500">
              No services found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
