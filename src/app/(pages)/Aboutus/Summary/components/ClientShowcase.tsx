'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo1 from "@/assets/Logos/Logo_1.png";
import Logo2 from "@/assets/Logos/Logo_2.png";
import Logo3 from "@/assets/Logos/Logo_3.jpg";
import Logo4 from "@/assets/Logos/Logo_4.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ClientShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%"
        }
      }
    );

    logosRef.current.forEach((logo, i) => {
      if (!logo) return;
      
      gsap.fromTo(logo, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%"
          }
        }
      );
    });
  }, []);

  const clients = [
    { name: "IN BOX ", industry: "Company", logo: Logo1 },
    { name: "MAZAJ CENTER", industry: "Company", logo: Logo2 },
    { name: "Sama Al-Naser", industry: "Company", logo: Logo3 },
    { name: "Royal Fulip", industry: "Company", logo: Logo4 }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6  bg-white text-black " id="Aboutusclients">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-purple-900">Clients</span>
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Brands that trust us to fuel their imagination and growth
          </p>
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-6 sm:gap-8 justify-center flex-wrap">


          {clients.map((client, index) => (
            <div 
              key={index}
              ref={el => { logosRef.current[index] = el; }}
              className="bg-gray-100 p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center w-full max-w-xs"
            >
              {client.logo ? (
                <Image src={client.logo} alt={client.name} width={96} height={96} className="mb-4 object-contain" />
              ) : (
                <div className="bg-gray-300 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-black">{index + 1}</span>
                </div>
              )}
              <h3 className="text-base sm:text-lg font-bold text-center text-black break-words">{client.name}</h3>
              <p className="text-gray-800 text-sm">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}