"use client";

import React, { useMemo, useState } from "react";
import { Heart, Star, BadgeCheck, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MOCK_SERVICES, { ServiceProvider } from "@/lib/mockServices";

const CATEGORIES = [
  "All",
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

export default function MarketBrowseServices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return MOCK_SERVICES.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.imageCategory === activeCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        [service.name, service.title, service.location, service.imageCategory]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="bg-white py-8 md:py-10 container mx-auto">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="text-3xl leading-tight text-zinc-950 sm:text-4xl md:text-5xl">
              Find your next{" "}
              <span className="text-[#ff1a00] font-medium">
                favorite service.
              </span>
            </h2>
            <p className="max-w-3xl text-lg text-zinc-500 sm:text-[22px] sm:leading-8">
              Real-time availability from thousands of trusted local businesses.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="flex h-14 w-full items-center gap-3 rounded-full bg-[#e9e9e9] px-5 text-zinc-400 shadow-inner">
              <Search className="h-5 w-5 shrink-0" />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search supplements here"
                className="w-full bg-transparent text-base text-zinc-900 outline-none placeholder:text-zinc-400"
              />
            </label>

            <button
              type="button"
              onClick={() => {
                if (searchTerm.trim().length === 0) {
                  setActiveCategory("All");
                }
              }}
              className="h-14 shrink-0 rounded-full bg-zinc-800 px-7 text-base font-medium text-white transition-colors hover:bg-zinc-900"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                type="button"
                onClick={() => setActiveCategory(category)}
                key={category}
                className={`rounded-full px-6 py-4 text-lg font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        {/* Service Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
