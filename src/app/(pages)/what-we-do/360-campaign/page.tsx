'use client';
import LoadingShow from "@/components/LoadingShowLeft";
import Hero360 from "./components/Hero360";
import CampaignStrategy from "./components/CampaignStrategy";
import ProcessSection from "./components/ProcessSection";
import CaseStudyShowcase from "./components/CaseStudyShowcase";
import CTASection from "./components/CTASection";
import Footer from "@/components/Footer";

export default function Campaign360() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <main>
      <LoadingShow />
      {true && (
        <>
          <Hero360 />
          <div className="p-10 mt-[-10%] relative z-40"><CampaignStrategy /></div>
          <ProcessSection />
          <CaseStudyShowcase />
          <CTASection />
          <Footer />
        </>
      )}
    </main>
  );
}