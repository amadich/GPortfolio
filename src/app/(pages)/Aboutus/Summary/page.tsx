'use client';
import LoadingShow from "@/components/LoadingShowLeft";
import HeroSummary from "./components/HeroSummary";
import OverviewSection from "./components/OverviewSection";
import ValuesShowcase from "./components/ValuesShowcase";
import ServicesGrid from "./components/ServicesGrid";
import SolutionsHighlight from "./components/SolutionsHighlight";
import ClientShowcase from "./components/ClientShowcase";
import CTASection from "./components/CTASection";
import Footer from "@/components/Footer";

export default function Summary() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <main className="bg-gray-50">
      <LoadingShow />
      {true && (
        <>
          <HeroSummary />
          <OverviewSection />
          <ValuesShowcase />
          <ServicesGrid />
          <SolutionsHighlight />
          <div className="p-10 "><ClientShowcase /></div>
          <CTASection />
          <Footer />
        </>
      )}
    </main>
  );
}