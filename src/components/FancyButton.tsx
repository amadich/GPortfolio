"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface FancyButtonProps {
  text: string;
}

export default function FancyButton({ text }: FancyButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const textTopRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Initialize bottom text hidden below
    if (textBottomRef.current) {
      gsap.set(textBottomRef.current, { y: "100%" });
    }
  }, []);

  const handleMouseEnter = () => {
    if (textTopRef.current && textBottomRef.current) {
      gsap.to(textTopRef.current, {
        y: "-100%",
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(textBottomRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    if (textTopRef.current && textBottomRef.current) {
      gsap.to(textTopRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(textBottomRef.current, {
        y: "100%",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative px-28 py-4 text-lg border border-white font-semibold overflow-hidden rounded-full bg-transparent text-white shadow-lg cursor-pointer"
    >
      <span
        ref={textTopRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {text}
      </span>
      <span
        ref={textBottomRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {text}
      </span>
    </button>
  );
}
