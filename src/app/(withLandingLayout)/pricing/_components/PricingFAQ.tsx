"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is BookingPam and how does it work?",
    a: "BookingPam is an all-in-one booking platform that helps service businesses manage appointments, staff, payments, and customer relationships. Simply create your account, set up your services and availability, then share your booking link with clients.",
  },
  {
    q: "Is there a booking fee for customers?",
    a: "No, customers book appointments for free. There are no hidden fees or surcharges added to client bookings.",
  },
  {
    q: "How can businesses start the free trial?",
    a: "Click any 'Start Free Trial' button, create your account, and you'll get full access to the Premium plan features for 14 days — no credit card required.",
  },
  {
    q: "Can I manage multiple staff and locations?",
    a: "Yes! Our Premium plan supports up to 5 staff members, and the Enterprise plan supports up to 10 staff members with multiple location management.",
  },
  {
    q: "How does the platform prevent no-shows?",
    a: "BookingPam sends automated email and SMS reminders before appointments. You can also require deposits or pre-payments at the time of booking.",
  },
  {
    q: "Can I integrate the booking link on social media?",
    a: "Absolutely! You can embed our custom booking widget on your website or use a 'Book Now' link. It works perfectly on your Instagram bio, Facebook page, and other social platforms.",
  },
  {
    q: "Is it secure to accept payments via BookingPam?",
    a: "Yes. We use Stripe for payment processing, which is PCI DSS Level 1 compliant — the highest level of security certification for payment processors.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-neutral-500 text-sm">
            Still searching for something? Check out the wiki or get in touch with us!
          </p>
        </div>
        <Accordion type="single" collapsible className="bg-white rounded-2xl border border-neutral-200 px-6 divide-y divide-neutral-100">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none">
              <AccordionTrigger className="text-sm font-medium text-neutral-900 py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-600 leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
