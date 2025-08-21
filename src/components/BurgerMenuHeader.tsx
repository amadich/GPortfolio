"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import FancyButtonHeader from "./FancyButtonHeader";
import LogoHeaderDark from "@/assets/Logos/macrom-high-resolution-logo-grayscale.png";
import Image from "next/image";

interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  scrolled: boolean;
}

export default function BurgerMenuHeader({ isOpen, closeMenu, scrolled }: BurgerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Show overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        display: "block",
        duration: 0.3
      });
      
      // Slide in menu
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    } else {
      // Slide out menu
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in"
      });
      
      // Hide overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        display: "none",
        duration: 0.3,
        delay: 0.2
      });
    }
  }, [isOpen]);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-[60] opacity-0"
        onClick={closeMenu}
      />
      
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-4/5 max-w-md bg-white z-[70] shadow-2xl transform translate-x-full flex flex-col"
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Image 
            src={LogoHeaderDark}
            alt="Macrom Logo" 
            width={120} 
            height={40}
            className="object-contain"
          />
          <button onClick={closeMenu} className="text-2xl text-gray-800">
            <FiX />
          </button>
        </div>
        
        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Company Dropdown */}
          {/* <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("companyMenu")}
            >
              <span className="font-medium text-gray-900">Company</span>
              {activeDropdown === "companyMenu" ? 
                <FiChevronUp className="text-gray-700" /> : 
                <FiChevronDown className="text-gray-700" />
              }
            </div>
            {activeDropdown === "companyMenu" && (
              <div className="mt-2 pl-4 space-y-3">
                <Link href="/About" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  About Us
                </Link>
              </div>
            )}
          </div> */}
          
          {/* About Us Dropdown */}
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("aboutUsMenu")}
            >
              <span className="font-medium text-gray-900">About Us</span>
              {activeDropdown === "aboutUsMenu" ? 
                <FiChevronUp className="text-gray-700" /> : 
                <FiChevronDown className="text-gray-700" />
              }
            </div>
            {activeDropdown === "aboutUsMenu" && (
              <div className="mt-2 pl-4 space-y-3">
                <Link href="/Aboutus/Summary" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Summary
                </Link>
                <Link href="#brandStory" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Our Brand Story
                </Link>
                <Link href="/Aboutus/Summary#Aboutusvalues" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Our Values
                </Link>
                <Link href="/Aboutus/Summary#Aboutusclients" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Our Clients
                </Link>
              </div>
            )}
          </div>
          
          {/* What We Do Dropdown */}
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("whatWeDoMenu")}
            >
              <span className="font-medium text-gray-900">What We Do</span>
              {activeDropdown === "whatWeDoMenu" ? 
                <FiChevronUp className="text-gray-700" /> : 
                <FiChevronDown className="text-gray-700" />
              }
            </div>
            {activeDropdown === "whatWeDoMenu" && (
              <div className="mt-2 pl-4 space-y-3">
                <Link href="/what-we-do/360-campaign" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  360 Campaign
                </Link>
                <Link href="/what-we-do/SocialMediaManagement" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Social Media Management
                </Link>
                <Link href="/what-we-do/ContentWriting" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Content Writing & Copywriting
                </Link>
                <Link href="/what-we-do/BrandingVisualIdentity" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Branding & Visual Identity
                </Link>
                <Link href="/what-we-do/StrategyAnalytics" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Strategy & Analytics
                </Link>
                <Link href="/what-we-do/VideoProduction" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Video Production
                </Link>
                <Link href="/what-we-do/PaidAdsPerformance" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Paid Ads & Performance
                </Link>
              </div>
            )}
          </div>
          
          {/* Solutions Dropdown */}
          <div className="border-b border-gray-200 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown("solutionsMenu")}
            >
              <span className="font-medium text-gray-900">Solutions</span>
              {activeDropdown === "solutionsMenu" ? 
                <FiChevronUp className="text-gray-700" /> : 
                <FiChevronDown className="text-gray-700" />
              }
            </div>
            {activeDropdown === "solutionsMenu" && (
              <div className="mt-2 pl-4 space-y-3">
                <Link href="/Solutions#brand-revolution" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Brand Revolution
                </Link>
                <Link href="/Solutions#brand-creation" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Brand Creation
                </Link>
                <Link href="/Solutions#brand-elevation" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Brand Elevation
                </Link>
                <Link href="/Solutions#brand-boost" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Brand Boost
                </Link>
                <Link href="/Solutions#brand-culture-core" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Brand Culture Core
                </Link>
                <Link href="/Solutions#custom-tailored" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Custom Tailored Solutions
                </Link>
                <Link href="/Solutions#sprint-solutions" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-gray-900">
                  Sprint Solutions
                </Link>
              </div>
            )}
          </div>
          
          {/* Simple Links */}
          <Link href="/Contact" onClick={closeMenu} className="block py-3 font-medium text-gray-900 hover:text-gray-900 border-b border-gray-200">
            Contact Us
          </Link>
          <Link href="/Followus" onClick={closeMenu} className="block py-3 font-medium text-gray-900 hover:text-gray-900">
            Follow Us
          </Link>
        </div>
        
        {/* Menu Footer */}
        <div className="p-6 border-t border-gray-200">
          <Link href="/About">
            <FancyButtonHeader text="See My Work" />
          </Link>
        </div>
      </div>
    </>
  );
}