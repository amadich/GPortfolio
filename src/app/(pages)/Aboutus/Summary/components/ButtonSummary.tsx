"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { FiArrowDown } from "react-icons/fi";

interface FancyButtonProps {
  text: string;
    onClick?: () => void;
}

export default function ButtonSummary({ text, onClick }: FancyButtonProps) {
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
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative px-36 py-6 bg-transparent border border-yellow-50 font-bold text-sm overflow-hidden rounded-full text-yellow-50 shadow-lg cursor-pointer"
    >
      <span
        ref={textTopRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        {text} <FiArrowDown className="ml-2" />
      </span>
      <span
        ref={textBottomRef}
        className="absolute inset-0 flex items-center justify-center"
      >
         <FiArrowDown className="ml-2" />
      </span>
    </button>
  );
}
