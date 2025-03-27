"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  // Array de enlaces principales
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Subscribe", href: "/subscribe" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Join", href: "/join" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // Redes sociales
  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/p/Perfectoremodel-100067177120371/", icon: "/socials/facebook.png" },
    { name: "Gmail", href: "mailto:prybar@perfectoremodel.com", icon: "/socials/gmail.png" },
    { name: "Instagram", href: "https://www.instagram.com/perfectoremodel/", icon: "/socials/instagram.png" },
    { name: "Web", href: "https://sites.google.com/view/perfectoremodel/home", icon: "/socials/internet.png" },
    { name: "Tiktok", href: "https://www.tiktok.com/@perfectoremodelnewyork?lang=en", icon: "/socials/tik-tok.png" },
    { name: "YouTube", href: "https://www.youtube.com/@perfectoremodelcorp.2648", icon: "/socials/youtube.png" },
    { name: "Nextdoor", href: "https://nextdoor.com/pages/perfectoremodel-corp-huntington-station-ny/", icon: "/socials/nextdoor.png" },
    { name: "Telegram", href: "https://telegram.me/perfectoremodel", icon: "/socials/telegram.png" },
    {
      name: "WhatsApp",
      href: "https://wa.me/+15163870059?text=Hello,%20I%20want%20to%20contact%20you%20about%20your%20services",
      icon: "/socials/whatsapp.png",
    },
    { name: "vimeo", href: "https://vimeo.com/perfectoremodel", icon: "/socials/vimeo.png" },
    { name: "pictures", href: "https://pictures.4uremodel.com/index.php", icon: "/socials/pictures.png" },
  ];

  return (
    <footer className="bg-black text-white">
      <section className="container mx-auto px-4 py-10">
        {/* Logo */}
        <header className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-3">
            <figure className="relative w-12 h-12">
              <Image src="/home_logo.png" alt="Building Materials" width={50} height={50} className="object-contain" />
            </figure>
            <span className="text-2xl font-semibold">PerfectoRemodel</span>
          </Link>
        </header>

        {/* Enlaces principales - Diseño responsive */}
        <nav className="mb-8" aria-label="Main navigation">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociales - Siempre debajo */}
        <section className="text-center" aria-label="Social media">
          <h2 className="sr-only">Social Media</h2>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {/* Aquí irían los SVG/iconos correspondientes */}
                  <span className="text-lg">
                    <Image width={30} height={30} src={social.icon} alt={social.name} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Copyright */}
        <footer className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} PerfectoRemodel. All rights reserved.</p>
        </footer>
      </section>
    </footer>
  );
};
