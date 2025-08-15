'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import LogoCompany from "@/assets/Logos/macrom-high-resolution-logo-grayscale.png";
import Image from "next/image";

export default function LoadingShowLeft() {
    const loadingRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        if (loadingRef.current) {
            gsap.fromTo(
                loadingRef.current,
                { x: 0, opacity: 1 },
                { x: "-100%", opacity: 1, duration: 1  }
            );
        }
    }, []);

    return (
        <>
            <div ref={loadingRef} className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
                <Image src={LogoCompany} width={250} alt="Loading..." />
            </div>
        </>
    );
}
