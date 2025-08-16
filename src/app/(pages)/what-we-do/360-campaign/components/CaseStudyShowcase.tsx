'use client';
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import caseStudy1 from "@/assets/images/pexels-sandrin-159590604-25047802.jpg";
import caseStudy2 from "@/assets/images/pexels-hasanalbari-1229865.jpg";

export default function CaseStudyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const caseStudies = [
    {
      title: "Tech Startup Launch",
      results: "245% increase in leads",
      description: "Comprehensive launch campaign across digital and traditional channels",
      image: caseStudy1
    },
    {
      title: "Retail Brand Revival",
      results: "180% revenue growth",
      description: "Omnichannel rebranding campaign targeting new demographics",
      image: caseStudy2
    }
  ];

  useEffect(() => {
    if (caseStudyRef.current) {
      gsap.fromTo(caseStudyRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: caseStudyRef.current,
            start: "top 90%"
          }
        }
      );
    }
  }, [activeIndex]);

  return (
    <section className="py-20 px-6 bg-[whitesmoke]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Campaign <span className="text-yellow-800">Success Stories</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Real results from our integrated 360° campaigns
          </p>
        </div>

        <div 
          ref={caseStudyRef} 
          className="bg-gray-100 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div 
              ref={imageRef}
              className="md:w-1/2 h-96 md:h-auto relative overflow-hidden"
            >
              <Image
                src={caseStudies[activeIndex].image}
                alt={caseStudies[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {caseStudies[activeIndex].results}
                  </div>
                  <div className="text-yellow-400 font-medium">
                    Campaign Results
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div 
              ref={contentRef}
              className="md:w-1/2 p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {caseStudies[activeIndex].title}
              </h3>
              
              <p className="text-gray-700 mb-8">
                {caseStudies[activeIndex].description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold mb-3 text-gray-800">Key Strategies:</h4>
                <ul className="space-y-2 text-black">
                  {[
                    "Audience segmentation & targeting",
                    "Cross-channel content strategy",
                    "Data-driven optimization",
                    "Influencer partnerships",
                    "Performance analytics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveIndex(0)}
                  className={`px-6 py-2 rounded-full cursor-pointer ${
                    activeIndex === 0 
                      ? 'bg-black text-gray-50' 
                      : 'bg-gray-300 text-gray-800'
                  }`}
                >
                  Case 1
                </button>
                <button 
                  onClick={() => setActiveIndex(1)}
                  className={`px-6 py-2 rounded-full cursor-pointer ${
                    activeIndex === 1 
                      ? 'bg-black text-gray-50' 
                      : 'bg-gray-300 text-gray-800'
                  }`}
                >
                  Case 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}