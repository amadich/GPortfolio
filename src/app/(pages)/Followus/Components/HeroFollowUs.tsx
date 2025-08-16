"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import FancyButton from "@/components/FancyButton";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";

export default function HeroFollowus() {
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
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/IMG_4321.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-[1] flex flex-col items-center justify-center h-full text-center text-white px-6">
        {/* ADD HERE THE BOX ICON background white inside this box 
            Icon Instagram , Icon Facebook , Icon emailCompany use from "react-icons/fi"
        */}
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com/macrom.iq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <div className="flex items-center justify-center w-20 h-20 md:w-36 md:h-36 bg-white rounded-full duration-150 hover:scale-105 hover:bg-pink-300">
              <FiInstagram className="text-pink-600 w-16 h-16 md:w-20 md:h-20" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61579342979406" target="_blank">
            <div className="flex items-center justify-center w-20 h-20 md:w-36 md:h-36 bg-white rounded-full duration-150 hover:scale-105 hover:bg-blue-200">
              <FiFacebook className="text-blue-600 w-16 h-16 md:w-20 md:h-20" />
            </div>
          </Link>
          <Link href="mailto:contact@macromco.com">
            <div className="flex items-center justify-center w-20 h-20 md:w-36 md:h-36 bg-white rounded-full duration-150 hover:scale-105 hover:bg-gray-100">
              <FiMail className="text-black w-16 h-16 md:w-20 md:h-20" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
