'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSummary from "./ButtonSummary";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function HeroSummary() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (titleRef.current && taglineRef.current && buttonRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          taglineRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.8)" },
          "-=0.5"
        );
    }

    if (heroRef.current) {
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 30%",
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/INTRO_1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Fueling Imagination,{" "}
          <span className="text-yellow-300">Building Brands</span>
        </h1>

        <p
          ref={taglineRef}
          className="text-xl md:text-2xl text-gray-200 mb-10"
        >
          Bridging the gap in Iraq&apos;s market with creative solutions that
          transform ideas into impactful realities
        </p>

        <div ref={buttonRef} className="inline-block">
          <ButtonSummary
            text="Discover Our Work"
            onClick={() => {
              const nextSection = document.querySelector(
                "#about-summary-next"
              );
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
