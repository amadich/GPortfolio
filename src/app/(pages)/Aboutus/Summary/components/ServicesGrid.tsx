'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiRefreshCcw, FiSmartphone, FiPenTool, FiImage, FiBarChart, FiVideo, FiTrendingUp } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%"
        }
      }
    );

    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      
      gsap.fromTo(item, 
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    });
  }, []);

  const services = [
    { 
      title: "360° Campaigns", 
      description: "End-to-end marketing strategies that engage audiences across all touchpoints",
      icon: <FiRefreshCcw />
    },
    { 
      title: "Social Media Management", 
      description: "Consistent, creative, and data-driven social presence",
      icon: <FiSmartphone />
    },
    { 
      title: "Content Writing & Copywriting", 
      description: "Compelling words that drive action and build brand personality",
      icon: <FiPenTool />
    },
    { 
      title: "Branding & Visual Identity", 
      description: "Cohesive, memorable brand design and positioning",
      icon: <FiImage />
    },
    { 
      title: "Strategy & Analytics", 
      description: "Insight-led decision making for impactful results",
      icon: <FiBarChart />
    },
    { 
      title: "Video Production", 
      description: "Story-driven, high-quality visuals that captivate audiences",
      icon: <FiVideo />
    },
    { 
      title: "Paid Ads & Performance", 
      description: "Optimized campaigns for maximum ROI",
      icon: <FiTrendingUp />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="text-purple-500">Do</span>
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Comprehensive marketing services to elevate your brand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => { itemsRef.current[index] = el; }}
              className="bg-gray-100 p-8 rounded-xl shadow-lg border-t-4 border-purple-500 transform transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="text-4xl mb-4 text-purple-500">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
              <p className="text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}