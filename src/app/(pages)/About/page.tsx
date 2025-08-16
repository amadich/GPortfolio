'use client';
import LoadingShow from "@/components/LoadingShowLeft";
import HeroAbout from "./components/HeroAbout";
// import OurStory from "./components/OurStory";
import ValuesGrid from "./components/ValuesGrid";
// import ServicesSection from "./components/ServicesSection";
import SolutionsShowcase from "./components/SolutionsShowcase";
// import ClientShowcase from "./components/ClientShowcase";
// import CTASection from "./components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
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
          <HeroAbout />
          {/* <OurStory /> */}
          <div className="p-10 mt-[-10%] relative z-40">
            <ValuesGrid />
          </div>
          {/* <ServicesSection /> */}
          <SolutionsShowcase />
          {/* <ClientShowcase />
          <CTASection /> */}
          <Footer />
        </>
      )}
    </main>
  );
}