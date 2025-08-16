'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import campaignHero from "@/assets/images/pexels-flodahm-699459.jpg";

export default function Hero360() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    ).fromTo(taglineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.7"
    ).fromTo(buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.8)" },
      "-=0.5"
    );

    // Parallax effect
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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src={campaignHero}
          alt="360 Campaign"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          <span className="text-yellow-300">360° Campaigns</span> That Captivate
        </h1>
        
        <p 
          ref={taglineRef} 
          className="text-xl md:text-2xl text-gray-200 mb-10"
        >
          End-to-end marketing strategies that engage audiences across all touchpoints and drive measurable results.
        </p>
        
        <div ref={buttonRef} className="inline-block">
          {/* <button className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full text-lg hover:bg-yellow-400 transition-colors">
            Launch Your Campaign
          </button> */}
        </div>
      </div>
    </section>
  );
}