import ClientExperience from "@/app/component/teams/features/ClientExperience";
import CtaBanner from "@/app/component/teams/features/CtaBanner";
import FeaturesHero from "@/app/component/teams/features/FeaturesHero";
import Integrations from "@/app/component/teams/features/Integrations";
import ServicePillars from "@/app/component/teams/features/ServicePillars";
import TeamManagement from "@/app/component/teams/features/TeamManagement";
import Testimonials from "@/app/component/teams/features/Testimonials";
import TimeToGetSeen from "@/app/component/teams/features/TimeToGetSeen";

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
