"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import FancyButton from "@/components/FancyButton";
import ImageContact from "@/assets/images/pexels-googledeepmind-17486100.jpg";
import Image from "next/image";

export default function HeroContact() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(sloganRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6")
      .fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1 }, "-=0.4");
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={ImageContact}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-[1] flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1
          ref={titleRef}
          className=" relative z-[1] text-4xl md:text-6xl font-extrabold tracking-wide"
        >
         Let's talk about your next project
        </h1>
        <p
          ref={sloganRef}
          className="mt-4 text-lg md:text-2xl max-w-2xl leading-relaxed"
        >
          <span className="text-yellow-200">Fuel your imagination</span> — redefining how brands communicate, grow, and
          connect with audiences.
        </p>
        <div ref={buttonRef} className="mt-8">
          <FancyButton text="Discover Our Work" />
        </div>
      </div>
    </section>
  );
}
