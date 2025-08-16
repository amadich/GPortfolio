'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiZap, FiAward, FiShield, FiUsers } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { title: "Innovation", description: "Constantly exploring fresh ideas and approaches", icon: <FiZap /> },
  { title: "Excellence", description: "Delivering work that meets the highest standards", icon: <FiAward /> },
  { title: "Integrity", description: "Building trust through transparency and accountability", icon: <FiShield /> },
  { title: "Collaboration", description: "Partnering closely to achieve shared success", icon: <FiUsers /> }
];

export default function ValuesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate title words
    if (titleRef.current) {
      gsap.fromTo(titleRef.current.children,
        { y: 60, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Animate cards on scroll
    itemsRef.current.forEach((item, i) => {
      if (!item) return;

      gsap.fromTo(item,
        { y: 80, opacity: 0, scale: 0.9, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );

      // Door open animation on hover
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          rotateY: -20,
          duration: 0.5,
          ease: "power2.out",
          transformOrigin: "left center"
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          rotateY: 0,
          duration: 0.6,
          ease: "power2.inOut"
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="  py-10 px-6  bg-white text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-extrabold text-center mb-20 flex justify-center gap-2"
        >
          {"Our Core Values".split(" ").map((word, i) => (
            <span key={i} className="inline-block text-gray-800 ">
              {word}
            </span>
          ))}
          <span className="text-blue-500"></span>
        </h2>
        <hr className="my-8 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 perspective-1000">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-200 cursor-pointer"
            >
              <div className="text-4xl text-blue-500 mb-4 ">{value.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
