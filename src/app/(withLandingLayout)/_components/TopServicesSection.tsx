import React from "react";
import { User, HeartHandshake, ChefHat, ArrowRight } from "lucide-react"; // Using standard icons close to the image

// Reusable ServiceCard component for modularity
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-gray-100 rounded-2xl p-8 flex flex-col gap-6 transition-all hover:bg-gray-200">
    <div className="flex justify-start items-start">{icon}</div>
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold leading-tight text-zinc-950">
        {title}
      </h3>
      <p className="text-sm text-zinc-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const TopServicesSection: React.FC = () => {
  return (
    <section className="bg-white px-8 md:px-12 lg:px-16 py-16 md:py-20">
      <div className="container mx-auto flex flex-col gap-12">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2.5">
              <span className="inline-flex items-center gap-1.5 bg-gray-300 text-black px-4 py-2 rounded-full text-sm font-medium">
                + Popular
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gray-300 text-black px-4 py-2 rounded-full text-sm font-medium">
                New
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-950 tracking-tight">
              Check out our top services for you.
            </h1>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 md:text-right">
            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              Discover top on-demand services: custom shelving, leak repair, LED
              retrofits, and smart thermostat installation.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-sm font-semibold transition-all hover:bg-gray-800"
            >
              Explore Now
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<User className="w-12 h-12 text-black" strokeWidth={1.5} />}
            title="Signature Barber Service"
            description="Elevate your look with our expert barbers and personalized service."
          />
          <ServiceCard
            icon={
              <HeartHandshake
                className="w-12 h-12 text-black"
                strokeWidth={1.5}
              />
            }
            title="Luxury Spa & Relaxation"
            description="Indulge in rejuvenating treatments designed to melt away stress and tension."
          />
          <ServiceCard
            icon={
              <ChefHat className="w-12 h-12 text-black" strokeWidth={1.5} />
            }
            title="Homestyle Culinary Service"
            description="Savor the taste of authentic, home-cooked meals made with love and the freshest ingredients."
          />
        </div>
      </div>
    </section>
  );
};

export default TopServicesSection;
