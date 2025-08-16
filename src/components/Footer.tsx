import LogoCompany from "@/assets/Logos/macrom-high-resolution-logo-grayscale.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
            <aside>
                <Image src={LogoCompany} width={100} alt="Company Logo" className="mb-4" />
                <p>
                    MACROM Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href="/About" className="link link-hover">About Us</Link>
                <Link href="/Contact" className="link link-hover">Contact Us</Link>
                <Link href="/Aboutus/Summary#Aboutusclients" className="link link-hover">Our Clients</Link>
                <Link href="/Aboutus/Summary#Aboutusvalues" className="link link-hover">Our Values</Link>
                <Link href="#followUs" className="link link-hover">Follow Us</Link>
            </nav>
            <nav>
                <h6 className="footer-title">What We Do</h6>
                <Link href="/what-we-do/360-campaign" className="link link-hover">360 Campaign</Link>
                <Link href="/what-we-do/SocialMediaManagement" className="link link-hover">Social Media Management</Link>
                <Link href="/what-we-do/ContentWriting" className="link link-hover">Content Writing & Copywriting</Link>
                <Link href="/what-we-do/BrandingVisualIdentity" className="link link-hover">Branding & Visual Identity</Link>
                <Link href="/what-we-do/StrategyAnalytics" className="link link-hover">Strategy & Analytics</Link>
                <Link href="/what-we-do/VideoProduction" className="link link-hover">Video Production</Link>
                <Link href="/what-we-do/PaidAdsPerformance" className="link link-hover">Paid Ads & Performance</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Solutions</h6>
                <Link href="/Solutions#brand-revolution" className="link link-hover">Brand Revolution</Link>
                <Link href="/Solutions#brand-creation" className="link link-hover">Brand Creation</Link>
                <Link href="/Solutions#brand-elevation" className="link link-hover">Brand Elevation</Link>
                <Link href="/Solutions#brand-boost" className="link link-hover">Brand Boost</Link>
                <Link href="/Solutions#brand-culture-core" className="link link-hover">Brand Culture Core</Link>
                <Link href="/Solutions#custom-tailored" className="link link-hover">Custom Tailored Solutions</Link>
                <Link href="/Solutions#sprint-solutions" className="link link-hover">Sprint Solutions</Link>
            </nav>
            <nav>
                <h6 className="footer-title">About Us</h6>
                <Link href="/Aboutus/Summary" className="link link-hover">Summary</Link>
                <Link href="#brandStory" className="link link-hover">Our Brand Story</Link>
            </nav>
        </footer>
    );
}
