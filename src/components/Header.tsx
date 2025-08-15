"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LogoHeader from "@/assets/Logos/macrom-high-resolution-logo-transparent.png";
import LogoHeaderDark from "@/assets/Logos/macrom-high-resolution-logo-grayscale-transparent.png";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import FancyButtonHeader from "./FancyButtonHeader";
import FancyButtonHeaderDark from "./FancyButtonHeaderDark";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const leaveTimers = useRef<Record<string, NodeJS.Timeout>>({});
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Animation on mount
  useEffect(() => {
  if (headerRef.current) {
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50 && !scrolled) {
      setScrolled(true);
      gsap.to(headerRef.current, {
        backgroundColor: "#ffffff",
        color: "#000000",
        duration: 0.5,
        ease: "power2.out",
      });
    } else if (scrollTop <= 50 && scrolled) {
      setScrolled(false);
      gsap.to(headerRef.current, {
        backgroundColor: "transparent",
        color: "#ffffff",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  window.addEventListener("scroll", handleScroll);

  // ✅ single cleanup
  return () => {
    window.removeEventListener("scroll", handleScroll);
    Object.values(leaveTimers.current).forEach(timer => clearTimeout(timer));
  };
}, [scrolled]);


  // Handle entering a menu item
  const handleEnter = (menu: string) => {
    // Clear all pending leave animations
    Object.values(leaveTimers.current).forEach(timer => clearTimeout(timer));
    leaveTimers.current = {};

    // Close currently active menu if different from new one
    if (activeMenu && activeMenu !== menu) {
      gsap.to(`#${activeMenu}`, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(`#${activeMenu}`, { display: "none" });
        },
      });
    }

    setActiveMenu(menu);
    gsap.to(`#${menu}`, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      display: "block",
    });
  };

  // Handle leaving a menu item
  const handleLeave = (menu: string) => {
    leaveTimers.current[menu] = setTimeout(() => {
      setActiveMenu(prev => (prev === menu ? null : prev));
      gsap.to(`#${menu}`, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(`#${menu}`, { display: "none" });
        },
      });
      delete leaveTimers.current[menu];
    }, 150); // Short delay for better UX
  };

  // Handle entering a dropdown
  const handleDropdownEnter = (menu: string) => {
    if (leaveTimers.current[menu]) {
      clearTimeout(leaveTimers.current[menu]);
      delete leaveTimers.current[menu];
    }
    setActiveMenu(menu);
  };

  // Set ref for dropdown element
  const setDropdownRef = (menu: string, el: HTMLDivElement | null) => {
    dropdownRefs.current[menu] = el;
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[2] bg-transparent backdrop-blur-md text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide transition-transform hover:scale-105">
          <Image 
            src={scrolled ? LogoHeaderDark : LogoHeader}
            alt="Macrom Logo" 
            width={120} 
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 relative z-50">
          {/* Services Dropdown */}
          {/* <div
            className="relative z-99"
            onMouseEnter={() => handleEnter("servicesMenu")}
            onMouseLeave={() => handleLeave("servicesMenu")}
          >
            <div className="flex items-center gap-1 cursor-pointer group py-2">
              <span className="group-hover:text-yellow-400 transition-colors font-medium">
                Services
              </span>
              {activeMenu === "servicesMenu" ? (
                <FiChevronUp className="text-yellow-400 transition-transform" />
              ) : (
                <FiChevronDown className="group-hover:text-yellow-400 transition-colors" />
              )}
            </div>
            <div
              id="servicesMenu"
              ref={(el) => setDropdownRef("servicesMenu", el)}
              className="absolute left-0 mt-2 w-56 bg-transparent backdrop-blur-xl text-white rounded-xl shadow-2xl p-3 space-y-2 opacity-0 hidden border border-white/10 z-50"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              onMouseEnter={() => handleDropdownEnter("servicesMenu")}
              onMouseLeave={() => handleLeave("servicesMenu")}
            >
              <Link 
                href="#web" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Web Development</span>
                <p className="text-sm text-gray-300 mt-1">Modern, responsive websites</p>
              </Link>
              <Link 
                href="#design" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">UI/UX Design</span>
                <p className="text-sm text-gray-300 mt-1">User-centered interfaces</p>
              </Link>
              <Link 
                href="#seo" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">SEO Optimization</span>
                <p className="text-sm text-gray-300 mt-1">Increase your visibility</p>
              </Link>
            </div>
          </div> */}

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("companyMenu")}
            onMouseLeave={() => handleLeave("companyMenu")}
          >
            <div className="flex items-center gap-1 cursor-pointer group py-2">
              <span className="group-hover:text-yellow-400 transition-colors font-medium">
                Company
              </span>
              {activeMenu === "companyMenu" ? (
                <FiChevronUp className="text-yellow-400 transition-transform" />
              ) : (
                <FiChevronDown className="group-hover:text-yellow-400 transition-colors" />
              )}
            </div>
            <div
              id="companyMenu"
              ref={(el) => setDropdownRef("companyMenu", el)}
              className="absolute left-0 mt-2 w-56 bg-transparent backdrop-blur-xl text-white rounded-xl shadow-2xl p-3 space-y-2 opacity-0 hidden border border-white/10 z-50"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              onMouseEnter={() => handleDropdownEnter("companyMenu")}
              onMouseLeave={() => handleLeave("companyMenu")}
            >
              <Link 
                href="#about" 
                className="block hover:bg-pink-400/10 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">About Us</span>
                <p className="text-sm text-gray-300 mt-1">Our story and values</p>
              </Link>
              <Link 
                href="#team" 
                className="block hover:bg-pink-400/10 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Our Team</span>
                <p className="text-sm text-gray-300 mt-1">Meet the experts</p>
              </Link>
              <Link 
                href="#careers" 
                className="block bg-[#000] hover:bg-pink-950 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Careers</span>
                <p className="text-sm text-gray-300 mt-1">Join our team</p>
              </Link>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("aboutUsMenu")}
            onMouseLeave={() => handleLeave("aboutUsMenu")}
          >
            <div className="flex items-center gap-1 cursor-pointer group py-2">
              <span className="group-hover:text-yellow-400 transition-colors font-medium">
                About Us
              </span>
              {activeMenu === "aboutUsMenu" ? (
                <FiChevronUp className="text-yellow-400 transition-transform" />
              ) : (
                <FiChevronDown className="group-hover:text-yellow-400 transition-colors" />
              )}
            </div>
            <div
              id="aboutUsMenu"
              ref={(el) => setDropdownRef("aboutUsMenu", el)}
              className="absolute left-0 mt-2 w-56 bg-transparent backdrop-blur-xl text-white rounded-xl shadow-2xl p-3 space-y-2 opacity-0 hidden border border-white/10 z-50"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              onMouseEnter={() => handleDropdownEnter("aboutUsMenu")}
              onMouseLeave={() => handleLeave("aboutUsMenu")}
            >
              <Link 
                href="#summary" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Summary</span>
              </Link>
              <Link 
                href="#brandStory" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Our Brand Story</span>
              </Link>
              <Link 
                href="#values" 
                className="block bg-black hover:bg-pink-950 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Our Values</span>
              </Link>
              <Link 
                href="#clients" 
                className="block bg-black hover:bg-pink-950 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Our Clients</span>
              </Link>
            </div>
          </div>

          {/* What We Do Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter("whatWeDoMenu")}
            onMouseLeave={() => handleLeave("whatWeDoMenu")}
          >
            <div className="flex items-center gap-1 cursor-pointer group py-2">
              <span className="group-hover:text-yellow-400 transition-colors font-medium">
                What We Do
              </span>
              {activeMenu === "whatWeDoMenu" ? (
                <FiChevronUp className="text-yellow-400 transition-transform" />
              ) : (
                <FiChevronDown className="group-hover:text-yellow-400 transition-colors" />
              )}
            </div>
            <div
              id="whatWeDoMenu"
              ref={(el) => setDropdownRef("whatWeDoMenu", el)}
              className="absolute left-0 mt-2 w-56 bg-white backdrop-blur-xl text-black rounded-xl shadow-2xl p-3 space-y-2 opacity-0 hidden border border-white/10 z-50"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              onMouseEnter={() => handleDropdownEnter("whatWeDoMenu")}
              onMouseLeave={() => handleLeave("whatWeDoMenu")}
            >
              <Link 
                href="#360Campaign" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">360 Campaign</span>
              </Link>
              <Link 
                href="#socialMedia" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Social Media Management</span>
              </Link>
              <Link 
                href="#contentWriting" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Content Writing & Copywriting</span>
              </Link>
              <Link 
                href="#branding" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Branding & Visual Identity</span>
              </Link>
              <Link 
                href="#strategy" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Strategy & Analytics</span>
              </Link>
              <Link 
                href="#videoProduction" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Video Production</span>
              </Link>
              <Link 
                href="#paidAds" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Paid Ads & Performance</span>
              </Link>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative z-[+99999]"
            onMouseEnter={() => handleEnter("solutionsMenu")}
            onMouseLeave={() => handleLeave("solutionsMenu")}
          >
            <div className="flex items-center gap-1 cursor-pointer group py-2">
              <span className="group-hover:text-yellow-400 transition-colors font-medium">
                Solutions
              </span>
              {activeMenu === "solutionsMenu" ? (
                <FiChevronUp className="text-yellow-400 transition-transform" />
              ) : (
                <FiChevronDown className="group-hover:text-yellow-400 transition-colors" />
              )}
            </div>
            <div
              id="solutionsMenu"
              ref={(el) => setDropdownRef("solutionsMenu", el)}
              className="absolute left-0 mt-2 w-56 bg-transparent backdrop-blur-xl text-white rounded-xl shadow-2xl p-3 space-y-2 opacity-0 hidden border border-white/10 z-[3]"
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              onMouseEnter={() => handleDropdownEnter("solutionsMenu")}
              onMouseLeave={() => handleLeave("solutionsMenu")}
            >
              <Link 
                href="#brandRevolution" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Brand Revolution</span>
              </Link>
              <Link 
                href="#brandCreation" 
                className="block hover:bg-transparent p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Brand Creation</span>
              </Link>
              <Link 
                href="#brandElevation" 
                className="block bg-black hover:bg-pink-900 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Brand Elevation</span>
              </Link>
              <Link 
                href="#brandBoost" 
                className="block bg-black hover:bg-pink-900 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Brand Boost</span>
              </Link>
              <Link 
                href="#brandCulture" 
                className="block bg-black hover:bg-pink-900 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Brand Culture Core</span>
              </Link>
              <Link 
                href="#customSolutions" 
                className="block bg-black hover:bg-pink-900 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400 z-[+999]"
              >
                <span className="font-medium">Custom Tailored Solutions</span>
              </Link>
              <Link 
                href="#sprintSolutions" 
                className="block bg-black hover:bg-pink-900 p-3 rounded-lg transition-all hover:translate-x-1 border-b-2 border-transparent hover:border-pink-400"
              >
                <span className="font-medium">Sprint Solutions</span>
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <Link href="/Contact" className="flex items-center py-2 hover:text-pink-400 transition-colors font-medium">
            Contact Us
          </Link>

          {/* Follow Us */}
          <Link href="#followUs" className="flex items-center py-2 hover:text-pink-400 transition-colors font-medium">
            Follow Us
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div>
          {scrolled ? (<FancyButtonHeaderDark text="See My Work" />) : (<FancyButtonHeader text="See My Work" />)}
        </div>
      </div>
    </header>
  );
}