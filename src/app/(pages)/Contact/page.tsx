'use client';
import { useEffect, useState } from "react";
import LoadingShow from "@/components/LoadingShowLeft";
import ContactBox from "./components/ContactBox";
import Hero from "./components/HeroContact";

export default function Contact() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <LoadingShow />
      {showHero && <Hero />}
      <div className="relative z-[10] p-8 mt-[-10%]"><ContactBox /></div>
    </main>
  );
}
