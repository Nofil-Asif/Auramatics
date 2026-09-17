"use client";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Logo from "@/assets/Homepage/logo_new.png";
import Image from "next/image";

const footerLinks = [
  {
    title: "Services",
    items: [
      { name: "Data Engineering", url: "#our-services" },
      { name: "BI & Analytics", url: "#our-services" },
      { name: "Data Science, AI & Automation", url: "#our-services" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About", url: "/aboutus" },
      { name: "Case Studies", url: "/#case-studies" },
      { name: "Data & BI Audit", url: "/#data-bi-audit" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "info@auramatics.tech", url: "/contact" },
      { name: "Schedule a Consultation", url: "/contact" },
    ],
  },
];

const socialIcons = [
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "X" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#050914] text-gray-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          Let&apos;s build your data foundation.
        </h3>
        <Link
          href="/contact"
          className="shrink-0 bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-500 hover:to-purple-700 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 md:gap-6">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src={Logo}
              alt="Auramatics"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-white font-semibold tracking-tight">
              AURAMATICS
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
            Data &amp; AI engineering partner for growing companies.
          </p>
          <div className="flex gap-2 pt-1">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors duration-200"
              >
                <Icon className="text-sm" />
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((col) => (
          <div key={col.title} className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© 2026 Auramatics. All rights reserved.</span>
          <span className="text-gray-600">Built for the AI era.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
