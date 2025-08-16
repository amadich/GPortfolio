'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiZap, FiAward, FiShield, FiUsers } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ValuesShowcase() {
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
          delay: i * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    });
  }, []);

  const values = [
    { 
      title: "Innovation", 
      description: "Constantly exploring fresh ideas and approaches",
      icon: <FiZap />
    },
    { 
      title: "Excellence", 
      description: "Delivering work that meets the highest standards",
      icon: <FiAward />
    },
    { 
      title: "Integrity", 
      description: "Building trust through transparency and accountability",
      icon: <FiShield />
    },
    { 
      title: "Collaboration", 
      description: "Partnering closely to achieve shared success",
      icon: <FiUsers />
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white text-black" id="Aboutusvalues">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="text-purple-900">Values</span>
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            The principles that guide everything we do at MACROM
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              ref={el => { itemsRef.current[index] = el; }}
              className="bg-purple-100 p-8 rounded-xl border-none border-purple-900 transform transition-all hover:border-purple-500 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 text-purple-900">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
              <p className="text-gray-800">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}