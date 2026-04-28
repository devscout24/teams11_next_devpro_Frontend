"use client";

import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import MOCK_SERVICES from "@/lib/mockServices";

const REVIEW_ITEMS = [
  {
    name: "Ayesha Rahman",
    avatar: "AR",
    text: "Its good service from, the packing nice and delivery on time.",
    rating: 5,
  },
  {
    name: "Mahin Islam",
    avatar: "MI",
    text: "Its good service from, the packing nice and delivery on time.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    avatar: "NJ",
    text: "Its good service from, the packing nice and delivery on time.",
    rating: 5,
  },
];

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

const CALENDAR_DAYS = Array.from({ length: 35 }, (_, index) => {
  const dayNumber = index - 1;
  return dayNumber > 0 && dayNumber <= 31 ? String(dayNumber) : "";
});

export default function Page() {
  const params = useParams() as Record<string, string | undefined>;
  const id = params?.id;
  const service = MOCK_SERVICES.find((s) => s.id === id);
  const relatedServices = useMemo(
    () =>
      [service, ...MOCK_SERVICES.slice(0, 3)].filter(
        Boolean,
      ) as typeof MOCK_SERVICES,
    [service],
  );
  const [selectedServiceId, setSelectedServiceId] = useState(service?.id ?? "");
  const [selectedDate, setSelectedDate] = useState("24");
  const [selectedSlot, setSelectedSlot] = useState("09:00");
  const [selectedWhatsApp, setSelectedWhatsApp] = useState(true);

  if (!service) {
    return <div className="container mx-auto py-12">Service not found</div>;
  }

  const selectedService =
    relatedServices.find((item) => item.id === selectedServiceId) ?? service;

  return (
    <div className="bg-white">
      <div className="container mx-auto py-8 md:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff1a00] text-lg font-bold text-white shadow-sm sm:h-14 sm:w-14 sm:rounded-[16px] sm:text-xl">
                {service.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                  Luxe Hair Studio
                </h1>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-500 sm:text-base">
                  A rich and creamy North Indian curry made with soft paneer
                  cubes simmered in a tomato-butter gravy.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <span>★</span>
                    <span className="font-semibold text-zinc-700">4.3</span>
                    <span className="text-zinc-500">(220 Reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">⌖</span>
                    <span>West End</span>
                    <span className="text-zinc-300">•</span>
                    <span>1.8 km</span>
                  </div>
                </div>
              </div>
            </header>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-zinc-900 sm:text-xl">
                  Services
                </h2>
              </div>

              <div className="space-y-3">
                {relatedServices.map((s, index) => (
                  <div
                    key={`${s.id}-${index}`}
                    className={`flex items-center justify-between rounded-[10px] border px-3 py-3 sm:px-4 sm:py-4 ${
                      selectedServiceId === s.id
                        ? "border-[#f4c9bf] bg-[#fdf0ee]"
                        : "border-[#efb9aa] bg-[#fafafa]"
                    }`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedServiceId(s.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedServiceId(s.id);
                      }
                    }}
                  >
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-zinc-900">
                        Women&apos;s Haircut
                      </div>
                      <div className="mt-1 text-xs text-zinc-500">
                        Cut, wash, and blow dry
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-sm">
                        <span className="font-bold text-[#ff4b00]">$65</span>
                        <span className="flex items-center gap-1 text-zinc-500">
                          <span>◔</span>
                          <span>45min</span>
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedServiceId(s.id);
                        window.alert(`Selected ${s.name}`);
                      }}
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors ${
                        selectedServiceId === s.id
                          ? "bg-[#ff4b00]"
                          : "bg-[#d8d8d8] text-zinc-500"
                      }`}
                    >
                      +
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-zinc-900 sm:text-xl">
                  Reviews
                </h2>
                <button
                  type="button"
                  className="text-sm text-zinc-500 hover:text-zinc-700"
                >
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {REVIEW_ITEMS.map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="flex items-start gap-3 rounded-[10px] border border-zinc-100 bg-white px-4 py-3 shadow-[0_1px_10px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-300 text-[10px] font-bold text-zinc-700">
                      {review.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs leading-5 text-zinc-600">
                        {review.text}
                      </p>
                      <div className="mt-1 text-amber-400">
                        {Array.from({ length: review.rating }).map(
                          (_, starIndex) => (
                            <span key={starIndex}>★</span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-5">
              <div className="flex items-center justify-between rounded-[10px] bg-[#ececec] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#21c25e] text-white">
                    ☎
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">
                      Get updates on WhatsApp
                    </div>
                    <p className="text-xs text-zinc-600">
                      Receive your booking confirmation and reminders on +1 23
                      456
                    </p>
                  </div>
                </div>

                <div className="h-4 w-4 rounded border border-zinc-400 bg-white" />
              </div>
            </section>
          </div>

          <aside className="rounded-[18px] border border-[#ead9cf] bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
              ☐ Book This Service
            </div>

            <div className="mt-3 rounded-[16px] bg-[#fef0ea] px-3 py-4">
              <div className="text-sm font-medium text-zinc-900">
                Classic Manicure
              </div>
              <div className="mt-1 text-xs text-zinc-500">45 min • $35</div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                Pick a date
              </div>

              <div className="rounded-[16px] bg-[#fef0ea] p-3">
                <div className="mb-3 flex items-center justify-between text-sm text-zinc-700">
                  <button
                    type="button"
                    className="h-7 w-7 rounded-full text-base text-zinc-500"
                  >
                    ‹
                  </button>
                  <span className="font-medium">April 2026</span>
                  <button
                    type="button"
                    className="h-7 w-7 rounded-full text-base text-zinc-500"
                  >
                    ›
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-400">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="py-1 font-medium">
                      {day}
                    </div>
                  ))}

                  {CALENDAR_DAYS.map((dayNumber, index) => {
                    const isMuted = index < 7 || index > 30;
                    const isSelected = selectedDate === dayNumber;

                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedDate(dayNumber)}
                        className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${
                          isSelected
                            ? "bg-[#ff7a00] text-white"
                            : isMuted
                              ? "text-zinc-300"
                              : "text-zinc-700"
                        }`}
                      >
                        {dayNumber}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-500">
                Available Time Slots
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                {TIME_SLOTS.map((slot, index) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-full border px-2 py-1.5 text-xs transition-colors ${
                      selectedSlot === slot
                        ? "border-[#ff7a00] bg-[#fff3ed] text-zinc-900"
                        : index === 3 || index === 8 || index === 13
                          ? "border-[#f5d2c8] text-zinc-300"
                          : "border-[#efc9bb] text-zinc-700 hover:bg-[#fff3ed]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const dateLabel = selectedDate || "24";
                window.alert(
                  `Booking confirmed for ${selectedService.name} on April ${dateLabel}, 2026 at ${selectedSlot}`,
                );
              }}
              className="mt-5 w-full rounded-full bg-[#ffd9cf] py-3 text-sm font-semibold text-zinc-700"
            >
              Confirm Booking
            </button>

            <label className="mt-4 flex items-center justify-between rounded-[10px] bg-zinc-100 px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  Get updates on WhatsApp
                </div>
                <p className="text-xs text-zinc-600">
                  Receive your booking confirmation and reminders
                </p>
              </div>
              <input
                type="checkbox"
                checked={selectedWhatsApp}
                onChange={(event) => setSelectedWhatsApp(event.target.checked)}
                className="h-4 w-4 rounded border-zinc-300"
              />
            </label>

            <p className="mt-2 text-center text-[10px] text-zinc-400">
              You won&apos;t be charged yet. WhatsApp updates are{" "}
              {selectedWhatsApp ? "on" : "off"}.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
