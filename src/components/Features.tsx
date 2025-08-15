"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the entire section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Individual feature animations
    featureRefs.current.forEach((feature, index) => {
      if (!feature) return;
      
      gsap.from(feature, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Hover animations
      feature.addEventListener("mouseenter", () => {
        gsap.to(feature, {
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      feature.addEventListener("mouseleave", () => {
        gsap.to(feature, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Choose Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovation with excellence to deliver outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Blazing Fast Performance",
              description: "Optimized solutions that load instantly and run smoothly for superior user experiences."
            },
            {
              icon: "🎨",
              title: "Modern Aesthetic Design",
              description: "Sleek, intuitive interfaces crafted with attention to detail and user psychology."
            },
            {
              icon: "🔒",
              title: "Enterprise-Grade Security",
              description: "Military-grade encryption and security protocols to protect your sensitive data."
            }
          ].map((feature, index) => (
            <div
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-20 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-100 opacity-20 mix-blend-multiply filter blur-3xl"></div>
      </div>
    </section>
  );
}