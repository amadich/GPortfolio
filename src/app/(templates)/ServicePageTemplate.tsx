'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingShow from "@/components/LoadingShowLeft";
import Footer from "@/components/Footer";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import ButtonOnClickFancy from "@/components/ButtonOnClickFancy";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  processSteps: string[];
  imageUrl: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  keyFeatures,
  benefits,
  processSteps,
  imageUrl
}: ServicePageProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.config({
      force3D: true,
      autoSleep: 60,
      nullTargetWarn: false
    });

    // Cover animation
    const coverTl = gsap.timeline();
    coverTl
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1.2,
        ease: "power3.out" 
      })
      .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out" 
      }, "<+0.3")
      .fromTo(scrollButtonRef.current, { y: 30, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "back.out(1.7)" 
      }, "<+0.5");

    // Scroll button bounce
    const bounceTl = gsap.timeline({ repeat: -1, yoyo: true });
    bounceTl.to(scrollButtonRef.current, {
      y: -10,
      duration: 0.8,
      ease: "sine.inOut"
    });

    // Content animations
    const contentSections = contentRefs.current.filter(Boolean) as HTMLDivElement[];
    
    contentSections.forEach((section, index) => {
      gsap.set(section, { opacity: 0, y: 50 });
      
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "back.out(1.5)"
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: "power1.in"
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      bounceTl.kill();
    };
  }, []);

  const scrollToContent = () => {
    if (contentRefs.current[0]) {
      gsap.to(window, {
        scrollTo: contentRefs.current[0],
        duration: 1.8,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <main className="relative">
      <LoadingShow />
      
      {/* Cover Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-white relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* dark overlay so text is readable on top of the image */}
          <div className="absolute inset-0 bg-black/55 z-0" />
        </div>
        <div className="relative z-20 max-w-4xl">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl font-bold text-white mb-6 "
          >
            {title}
          </h1>
          <p 
            ref={subtitleRef} 
            className="text-xl md:text-2xl text-gray-200 "
          >
            {subtitle}
          </p>

          <div className="mt-10">
            <ButtonOnClickFancy
                text="Learn More"
                onClick={scrollToContent}
            />
          </div>

          {/* <button
            ref={scrollButtonRef}
            onClick={scrollToContent}
            className="mt-16 flex flex-col items-center"
            aria-label="Scroll to content"
          >
            <span className="text-yellow-400 text-lg mb-2">Learn More</span>
            <FiChevronDown className="text-yellow-400 h-8 w-8 animate-bounce" />
          </button> */}
        </div>
      </section>
      
      {/* Content Sections */}
      <div className="relative">
        {/* Overview Section */}
        <section 
          ref={el => { contentRefs.current[0] = el as HTMLDivElement | null; }}
          className="min-h-[80vh] flex items-center py-20 px-6 md:px-12 lg:px-24 bg-white"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Comprehensive {title}
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              {description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
  <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
          <span className="text-gray-900 mr-3">•</span>
    <span className="text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
  <h3 className="text-xl font-bold mb-4 text-gray-900">Your Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
          <span className="text-gray-900 mr-3">•</span>
    <span className="text-gray-900">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section 
          ref={el => { contentRefs.current[1] = el as HTMLDivElement | null; }}
          className="min-h-[80vh] flex items-center py-20 px-6 md:px-12 lg:px-24 bg-white text-gray-900"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our {title} Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-xl mb-6">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section 
          ref={el => { contentRefs.current[2] = el as HTMLDivElement | null; }}
          className="min-h-[50vh] flex items-center py-20 px-6 md:px-12 lg:px-24 bg-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Ready to Transform Your {title.split(' ')[0]}?
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Let's create something amazing together
            </p>
            <Link href={"/Contact"}>
                <button className="px-10 py-5 bg-black text-white font-bold text-xl rounded-full hover:bg-gray-700 transition-colors">
                Start Your Project
                </button>
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}