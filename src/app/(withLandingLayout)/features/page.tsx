import ClientExperience from "@/app/(withLandingLayout)/features/_components/ClientExperience";
import CtaBanner from "@/app/(withLandingLayout)/features/_components/CtaBanner";
import FeaturesHero from "@/app/(withLandingLayout)/features/_components/FeaturesHero";
import Integrations from "@/app/(withLandingLayout)/features/_components/Integrations";
import ServicePillars from "@/app/(withLandingLayout)/features/_components/ServicePillars";
import TeamManagement from "@/app/(withLandingLayout)/features/_components/TeamManagement";
import Testimonials from "@/app/(withLandingLayout)/features/_components/Testimonials";
import TimeToGetSeen from "@/app/(withLandingLayout)/features/_components/TimeToGetSeen";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <FeaturesHero />
        <TimeToGetSeen />
        <Integrations />
        <ServicePillars />
        <ClientExperience />
        <TeamManagement />
        <Testimonials />
        <CtaBanner />
      </main>
    </div>
  );
}
