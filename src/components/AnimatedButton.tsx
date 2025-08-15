"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
}

export default function AnimatedButton({ text, onClick }: AnimatedButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
    }
  }, []);

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden"
    >
      {text}
    </button>
  );
}
