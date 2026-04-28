
// import Programs from './_components/Programs';
// import WhyTrainWithUsSection from './_components/WhyTrainWithUsSection';

import Banner from "./_components/Banner";
import BrowseServices from "./_components/BrowseServices";
import { BusinessDashboardSection } from "./_components/BusinessDashboardSection";
import GetTheMobileApp from "./_components/GetTheMobileApp";
import TopServicesSection from "./_components/TopServicesSection";
import PricingCards from "./pricing/_components/PricingCards";

export default function Home() {
 return (
 <div className="flex flex-col flex-1 items-center justify-center">
 <Banner />
 <TopServicesSection />
 <BrowseServices />
 <GetTheMobileApp />
 <BusinessDashboardSection/>
 <PricingCards/>
 </div>
 );
}
