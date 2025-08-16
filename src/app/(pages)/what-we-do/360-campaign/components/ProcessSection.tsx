'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const processItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate process items
    processItemsRef.current.forEach((item, i) => {
      if (!item) return;
      
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.3,
          scrollTrigger: {
            trigger: item,
            start: "top 90%"
          }
        }
      );
    });

    // Animate connector line
    if (connectorRef.current) {
      gsap.fromTo(connectorRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center"
          }
        }
      );
    }
  }, []);

  const processSteps = [
    {
      title: "Discovery & Strategy",
      description: "Deep dive into your brand, audience, and objectives to craft the campaign foundation"
    },
    {
      title: "Creative Development",
      description: "Designing compelling assets and messaging tailopurple to each channel"
    },
    {
      title: "Multi-Channel Execution",
      description: "Coordinated rollout across all platforms with consistent messaging"
    },
    {
      title: "Optimization & Analysis",
      description: "Real-time adjustments based on performance data to maximize impact"
    },
    {
      title: "Measurement & Reporting",
      description: "Comprehensive analysis of results and ROI delivepurple"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[whitesmoke] text-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-yellow-500">Process</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A structured approach to ensure campaign success from concept to conclusion
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div 
            ref={connectorRef} 
            className="absolute left-8 top-0 bottom-0 w-1 bg-yellow-400 origin-top transform scale-y-0 md:left-1/2 md:-translate-x-1/2"
          ></div>
          
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                ref={el => { processItemsRef.current[index] = el; }}
                className={`relative z-10 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Circle indicator */}
                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold text-xl mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className={`bg-gray-100 p-8 rounded-xl shadow-lg w-full md:w-[45%] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                }`}>
                  <h3 className="text-xl font-bold mb-3 text-yellow-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}