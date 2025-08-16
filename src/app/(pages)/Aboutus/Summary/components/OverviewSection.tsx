'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(statsRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white text-black" id="about-summary-next">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-500">MACROM</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div ref={contentRef} className="md:w-2/3">
            <p className="text-xl text-gray-800 mb-6">
              MACROM is a modern marketing agency based in Iraq with a unique mission: to bridge the gap in the local market by delivering high-quality, effective marketing solutions. With the slogan "Fuel your imagination," we position ourselves as a creative powerhouse that redefines how brands communicate, grow, and connect with audiences.
            </p>
            
            <div className="bg-gray-100 text-black p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
              <p className="text-gray-800">
                To fuel your imagination and turn your vision into a brand that speaks, inspires, and lasts. We believe every brand has an untapped spark waiting to ignite. Born from a passion for creativity and strategic precision, we exist to transform ideas into impactful realities.
              </p>
            </div>
          </div>
          
          <div ref={statsRef} className="md:w-1/3">
            <div className="bg-purple-100 border-2 border-none rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-black">By The Numbers</h3>
              
              <div className="space-y-6">
                {[
                  { label: "Projects Completed", value: "120+" },
                  { label: "Client Satisfaction", value: "98%" },
                  { label: "Team Members", value: "25+" },
                  { label: "Years of Experience", value: "5+" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-300 pb-4">
                    <span className="text-gray-800">{stat.label}</span>
                    <span className="text-2xl font-bold text-black">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}