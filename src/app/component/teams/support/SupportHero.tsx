import React from "react";

export default function SupportHero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
          How can we{" "}
          <span className="text-brand-red">help?</span>
        </h1>
        <p className="mt-4 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md">
          Have a question, suggestion, or feedback? Drop us a message and
          we&apos;ll respond as soon as possible.
        </p>
      </div>
    </section>
  );
}
