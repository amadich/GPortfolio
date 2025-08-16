'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });
    
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    ).fromTo(textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    ).fromTo(buttonRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-purple-400">Fuel Your Imagination</span>?
        </h2>
        
        <p ref={textRef} className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
          Let's work together to transform your brand and connect with your audience in meaningful ways.
        </p>
        
        <div ref={buttonRef} className="space-y-4 sm:space-y-0 sm:space-x-4">
         
         <Link href={"/Contact"}>
           <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-transparent hover:text-black hover:border-1 transition-colors">
            Get Started
          </button>
         </Link>
          
          <Link href={"/Contact"}>
              <button className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold rounded-full hover:bg-black/10 transition-colors">
                  Contact Us
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
}