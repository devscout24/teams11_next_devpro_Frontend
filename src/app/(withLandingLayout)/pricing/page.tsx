import PlanComparison from "@/app/(withLandingLayout)/pricing/_components/PlanComparison";
import PricingCards from "@/app/(withLandingLayout)/pricing/_components/PricingCards";
import PricingFAQ from "@/app/(withLandingLayout)/pricing/_components/PricingFAQ";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <PricingCards />
        <PlanComparison />
        <PricingFAQ />
      </main>
    </div>
  );
}
