import LogoCompany from "@/assets/Logos/macrom-high-resolution-logo-grayscale.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
        <aside>
            <Image src={LogoCompany} width={100} alt="Company Logo" className="mb-4" />
            <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
    </footer>
    </>
  )
}
