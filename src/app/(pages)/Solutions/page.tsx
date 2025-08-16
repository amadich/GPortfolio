'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import SolutionItem from "./components/SolutionItem";
import LoadingShow from "@/components/LoadingShowLeft";
import Footer from "@/components/Footer";
import { FiChevronDown } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const solutionItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const coverRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);

  const scrollToFirstSolution = () => {
    if (solutionItemsRef.current[0]) {
      gsap.to(window, {
        scrollTo: solutionItemsRef.current[0],
        duration: 1.8,
        ease: "power2.inOut"
      });
    }
  };

  useEffect(() => {
    gsap.config({
      force3D: true,
      autoSleep: 60,
      nullTargetWarn: false
    });

    // Cover animation
    const coverTl = gsap.timeline();
    coverTl
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        ease: "power3.out" 
      })
      .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out" 
      }, "<+0.3")
      .fromTo(scrollButtonRef.current, { y: 30, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "back.out(1.7)" 
      }, "<+0.5");

    // Scroll button bounce
    const bounceTl = gsap.timeline({ repeat: -1, yoyo: true });
    bounceTl.to(scrollButtonRef.current, {
      y: -10,
      duration: 0.8,
      ease: "sine.inOut"
    });

    // Solution sections setup
    const sections = solutionItemsRef.current.filter(Boolean) as HTMLDivElement[];
    
    // Create snap points for section transitions
    ScrollTrigger.create({
      snap: {
        snapTo: 0.0001 / (sections.length),
        inertia: false,
        duration: { min: 0.3, max: 0.6 },
        ease: "power1.inOut"
      }
    });

    sections.forEach((section, index) => {
      const bg = section.querySelector(".solution-bg");
      const content = section.querySelector(".solution-content");
      
      // Set initial states
      gsap.set(content, { opacity: 0, y: 50 });
      gsap.set(bg, { scale: 1.1 });

      // Create scroll trigger for each section
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(bg, { 
            scale: 1, 
            duration: 1.2,
            ease: "power2.out"
          });
          gsap.to(content, { 
            opacity: 1, 
            y: 0, 
            duration: 0.9,
            ease: "back.out(1.5)" 
          });
        },
        onLeave: () => {
          if (index < sections.length - 1) {
            gsap.to(content, { 
              opacity: 0, 
              y: 30, 
              duration: 0.5,
              ease: "power1.in"
            });
          }
        },
        onEnterBack: () => {
          gsap.to(bg, { 
            scale: 1, 
            duration: 1.2,
            ease: "power2.out"
          });
          gsap.to(content, { 
            opacity: 1, 
            y: 0, 
            duration: 0.9,
            ease: "back.out(1.5)" 
          });
        },
        onLeaveBack: () => {
          gsap.to(bg, { 
            scale: 1.1, 
            duration: 0.8,
            ease: "power1.out"
          });
          gsap.to(content, { 
            opacity: 0, 
            y: 50, 
            duration: 0.6,
            ease: "power1.in"
          });
        }
      });
    });

    // Handle resize
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      bounceTl.kill();
    };
  }, []);

  const solutions = [
    {
      id: "brand-revolution",
      title: "Brand Revolution",
      subtitle: "Bold transformation for established brands",
      description: "Perfect for established brands seeking a bold transformation to remain relevant and competitive in today's evolving market.",
      keyPoints: [
        "Comprehensive brand audit and competitive market analysis",
        "Strategic repositioning and refreshed brand narrative",
        "Visual identity overhaul",
        "Internal and external brand activation strategies",
        "Measurable growth and engagement roadmap"
      ],
      imageUrl: "/images/solutions/brand-revolution.jpg"
    },
    {
      id: "brand-creation",
      title: "Brand Creation",
      subtitle: "Strong identity for new businesses",
      description: "Designed for new businesses ready to enter the market with a strong, distinctive identity from day one.",
      keyPoints: [
        "Market research and target audience profiling",
        "Brand naming, positioning, and core messaging",
        "Complete visual identity package",
        "Content strategy and tone of voice development",
        "Launch strategy with digital and offline activation"
      ],
      imageUrl: "/images/solutions/brand-creation.jpg"
    },
    {
      id: "brand-culture-core",
      title: "Brand Culture Core",
      subtitle: "Building internal brand alignment",
      description: "Focuses on aligning your internal culture with your external brand identity for authentic market presence.",
      keyPoints: [
        "Internal brand engagement workshops",
        "Employee brand advocacy programs",
        "Core values integration strategy",
        "Leadership brand alignment sessions",
        "Culture measurement and enhancement tools"
      ],
      imageUrl: "/images/solutions/brand-culture-core.jpg"
    },
    {
      id: "brand-elevation",
      title: "Brand Elevation",
      subtitle: "Enhanced market presence",
      description: "Ideal for brands aiming to enhance their market presence and increase audience engagement without a full rebrand.",
      keyPoints: [
        "Brand perception assessment and improvement plan",
        "Enhanced storytelling and updated content strategy",
        "Refinement of visual identity elements",
        "Social media and digital engagement optimization",
        "Campaign concepts to boost brand visibility"
      ],
      imageUrl: "/images/solutions/brand-elevation.jpg"
    },
    {
      id: "custom-tailored",
      title: "Custom Tailored Solutions",
      subtitle: "Personalized strategy for unique needs",
      description: "For businesses requiring specialized solutions that don't fit standard packages.",
      keyPoints: [
        "Personalized consultation and needs assessment",
        "Hybrid solution design combining multiple services",
        "Industry-specific expertise",
        "Flexible implementation timeline",
        "Dedicated strategic partnership"
      ],
      imageUrl: "/images/solutions/custom-tailored.jpg"
    },
    {
      id: "sprint-solutions",
      title: "Sprint Solutions",
      subtitle: "Rapid implementation for quick wins",
      description: "Accelerated packages designed to deliver measurable results in condensed timeframes.",
      keyPoints: [
        "Focused 4-6 week implementation cycles",
        "Specific problem-solving approach",
        "Minimum viable brand improvements",
        "Quick-win strategy development",
        "Agile methodology for rapid iteration"
      ],
      imageUrl: "/images/solutions/sprint-solutions.jpg"
    },
    {
      id: "brand-boost",
      title: "Brand Boost",
      subtitle: "Quick, measurable improvements",
      description: "A high-impact solution for brands seeking quick, measurable performance improvements in awareness, reach, and conversions.",
      keyPoints: [
        "Targeted paid advertising campaigns",
        "Conversion-focused landing pages",
        "Performance analytics and campaign optimization",
        "Seasonal or promotional brand activations",
        "Short-term growth strategy with measurable KPIs"
      ],
      imageUrl: "/images/solutions/brand-boost.jpg"
    }
  ];

  return (
    <main className="relative">
      <LoadingShow />
      
      {/* Cover Section */}
      <section 
        ref={coverRef}
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 relative"
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 max-w-4xl">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0"
          >
            Our <span className="text-yellow-400">Solutions</span>
          </h1>
          <p 
            ref={subtitleRef} 
            className="text-xl md:text-2xl text-gray-300 opacity-0"
          >
            Tailored strategies to transform your brand and drive growth
          </p>
          
          <button
            ref={scrollButtonRef}
            onClick={scrollToFirstSolution}
            className="mt-16 flex flex-col items-center opacity-0"
            aria-label="Scroll to solutions"
          >
            <span className="text-yellow-400 text-lg mb-2">Explore Solutions</span>
            <FiChevronDown className="text-yellow-400 h-8 w-8 animate-bounce" />
          </button>
        </div>
      </section>
      
      {/* Solutions Container */}
      <div ref={containerRef} className="relative">
        {solutions.map((solution, index) => (
          <SolutionItem 
            key={solution.id}
            ref={el => { solutionItemsRef.current[index] = el; }}
            solution={solution}
          />
        ))}
      </div>
      
      <Footer />
    </main>
  );
}