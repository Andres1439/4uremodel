"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo y nombre */}
          <section className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/home_logob.png" alt="Logo" width={40} height={40} className="rounded-md" />
              <span className="font-bold text-xl hidden sm:inline-block">PerfectoRemodel</span>
            </Link>
          </section>

          {/* Menú de navegación para pantallas grandes */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/subscribe">Subscribe</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/join">Join</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <Button asChild variant="default" size="sm">
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>

          {/* Botón de menú para móviles */}
          <section className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </section>
        </div>

        {/* Menú móvil */}
        <section className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", isMenuOpen ? "max-h-60 py-4" : "max-h-0")}>
          <ul className="flex flex-col space-y-4">
            <li>
              <MobileNavLink href="/" onClick={toggleMenu}>
                Home
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink href="/subscribe" onClick={toggleMenu}>
                Subscribe
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink href="/services" onClick={toggleMenu}>
                Services
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink href="/faq" onClick={toggleMenu}>
                FAQ
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink href="/how-it-works" onClick={toggleMenu}>
                How It Works
              </MobileNavLink>
            </li>
            <li>
              <MobileNavLink href="/join" onClick={toggleMenu}>
                Join
              </MobileNavLink>
            </li>{" "}
            <li>
              <MobileNavLink href="/contact" onClick={toggleMenu}>
                Contact
              </MobileNavLink>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}

// Componente para enlaces de navegación en pantalla grande
function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("text-foreground/80 hover:text-foreground transition-colors font-medium", className)}>
      {children}
    </Link>
  );
}

// Componente para enlaces de navegación en móvil
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="block py-2 px-4 text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
