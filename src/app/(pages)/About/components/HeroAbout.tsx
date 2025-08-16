'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroAboutImage from "@/assets/images/pexels-busranur-aydin-3800407-28839153.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAbout() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center"
        }
      }
    );

    gsap.fromTo(taglineRef.current, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center"
        }
      }
    );

    // Background parallax effect
    gsap.to(heroRef.current, {
      backgroundPosition: "50% 30%",
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true
      }
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className={`relative h-screen bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url(${HeroAboutImage.src}), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))` }}
    >
      <div className="text-center px-6 max-w-4xl z-10">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6">
          Fueling Imagination, <span className="text-slate-50">Building Brands</span>
        </h1>
        <p ref={taglineRef} className="text-xl md:text-2xl text-gray-200">
          We bridge the gap in Iraq's market with creative solutions that transform ideas into impactful realities
        </p>
      </div>
    </section>
  );
}