import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[60vh] md:h-[calc(100vh-80px)] flex items-center relative container mx-auto px-6 md:px-12 lg:px-20 rounded-4xl"
      style={{
        backgroundImage: "url('/icons/commonLayout/Frame%202147229532.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Banner Content */}
      <div className="flex flex-col gap-6 md:gap-8 container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left z-10">
        <p className="text-background text-sm md:text-base inline-block bg-background/20 px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
          We&apos;ve got you covered
        </p>

        <h1 className="text-background text-3xl md:text-5xl lg:text-7xl font-bold w-full md:w-7/12 mx-auto md:mx-0">
          Whether you&apos;re <span className="text-orange-500">looking</span>{" "}
          for services or offering them
        </h1>

        <p className="text-background text-lg md:text-xl lg:text-2xl w-full md:w-6/12 mx-auto md:mx-0">
          Discover top-rated salons, restaurants, spas, and more, all in one
          place. Browse, compare, and book appointments instantly with a
          seamless experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <Link href="/#find-service">
            <Button
              size={"lg"}
              className="w-full rounded-full text-white sm:w-auto bg-orange-500 hover:bg-orange-600"
            >
              Find a Service
            </Button>
          </Link>
          <Link href="/#list-business">
            <Button
              size={"lg"}
              className="w-full rounded-full sm:w-auto bg-transparent border border-background hover:bg-background/10"
            >
              List Your Business
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
