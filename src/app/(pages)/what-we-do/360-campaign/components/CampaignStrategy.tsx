'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiRefreshCcw, FiTarget, FiBarChart, FiPenTool } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function CampaignStrategy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const strategyCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    strategyCardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  const strategies = [
    {
      title: "Holistic Approach",
      description: "Integrated messaging across all channels for consistent brand storytelling",
      icon: <FiRefreshCcw />
    },
    {
      title: "Audience First",
      description: "Deep audience insights driving personalized engagement strategies",
      icon: <FiTarget />
    },
    {
      title: "Data-Driven",
      description: "Real-time analytics optimizing campaign performance at every stage",
      icon: <FiBarChart />
    },
    {
      title: "Creative Execution",
      description: "Captivating creative assets tailored to each platform and audience",
      icon: <FiPenTool />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[white]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Our <span className="text-black">360° Strategy</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Comprehensive campaigns that connect every touchpoint in the customer journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <div 
              key={index}
              ref={el => { strategyCardsRef.current[index] = el; }}
              className="bg-transparent p-8 rounded-xl shadow-lg border-t-4 border-black"
            >
              <div className="text-4xl mb-4 text-black">{strategy.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{strategy.title}</h3>
              <p className="text-gray-700">{strategy.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 text-gray-800 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-black">
            Full-Spectrum Campaign Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Our 360° campaigns integrate seamlessly across all channels:
              </p>
              <ul className="space-y-2">
                {['Social Media', 'Email Marketing', 'Content Marketing', 'SEO/SEM', 'Influencer Partnerships', 'Traditional Media'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4">
                Delivering measurable results at every stage:
              </p>
              <ul className="space-y-2">
                {['Brand Awareness', 'Lead Generation', 'Customer Engagement', 'Conversion Optimization', 'Customer Retention', 'ROI Maximization'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}