'use client';
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import LoadingShow from "@/components/LoadingShow";

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <LoadingShow />
      {showHero && <Hero />}
    </main>
  );
}
