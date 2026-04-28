import PlanComparison from "@/app/component/teams/pricing/PlanComparison";
import PricingCards from "@/app/component/teams/pricing/PricingCards";
import PricingFAQ from "@/app/component/teams/pricing/PricingFAQ";

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
