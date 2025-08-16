'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function CTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ctaRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Launch Your <span className="text-pink-400">360° Campaign</span>?
          </h2>
          
          <p className="text-gray-900 mb-10 max-w-2xl mx-auto">
            Let's create an integrated marketing campaign that resonates with your audience across all touchpoints and delivers measurable results.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/Contact">
              <button className="px-8 py-4 bg-pink-500 text-gray-50 font-bold rounded-full hover:bg-pink-400 transition-colors">
                Start Your Campaign
              </button>
            </Link>
            <Link href="/Contact">
              <button className="px-8 py-4 bg-transparent border-2 border-pink-500 text-pink-500 font-bold rounded-full hover:bg-pink-500 hover:text-gray-200 transition-colors">
                Request Strategy Session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}