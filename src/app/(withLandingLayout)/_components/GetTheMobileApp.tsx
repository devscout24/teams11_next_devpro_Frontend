import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetTheMobileApp() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-4xl bg-black px-6 py-10 sm:px-8 md:px-10 lg:px-14 md:py-14">
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center">
              <div className="relative h-[360px] w-full sm:h-[430px] md:h-[500px] lg:h-[560px]">
                <Image
                  src="/icons/commonLayout/image.png"
                  alt="Mobile app preview"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[11px] text-white">
                  ★
                </span>
                <span>iOS</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span>Android</span>
              </div>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
                Get the mobile App
                <br />
                for easy bookings!
              </h1>

              <p className="mt-5 text-sm leading-6 text-white/70 sm:text-base">
                Find the best salons, eateries, wellness centers, and more, all
                in one place. Explore, evaluate, and schedule bookings quickly
                for a smooth experience.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#ff4b00] px-7 text-base font-semibold text-white shadow-none hover:bg-[#e54300]"
                >
                  <Link href="/app-store">Apple App Store</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/40 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/play-store">Google Play Store</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
