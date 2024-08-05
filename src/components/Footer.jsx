"use client";
import Link from "next/link";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { FaLinkedin, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const navigation = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Get a job", href: "/mail" },
    { name: "Book Demo", href: "/demo" },
  ],
  support: [{ name: "Contact us", href: "/demo" }],
  legal: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Cookies", href: "/cookies" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: FaLinkedin },
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "Twitter", href: "#", icon: FaTwitter },
    { name: "YouTube", href: "#", icon: FaYoutube },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="mb-8 lg:mb-0 lg:w-1/8">
              <Logo className="h-10 w-auto" />

              <div className="flex mt-4 space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:w-3/4">
              <div className="lg:w-1/8">
                <h3 className="text-sm font-semibold">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/8">
                <h3 className="text-sm font-semibold">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/8">
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-gray-400"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/8">
                <h3 className="text-sm font-semibold">Talk to us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="mailto:info@kazini.com"
                      className="text-sm hover:text-gray-400"
                    >
                      info@cazini.co.ke
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+254712345678"
                      className="text-sm hover:text-gray-400"
                    >
                      +254 791 410 460
                    </Link>
                  </li>
                  <li>
                    <span className="text-sm">Gem Lane, Kileleshwa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row md:justify-between">
              <p className="text-xs">
                &copy; 2024 Cazini. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs text-center hover:text-gray-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
