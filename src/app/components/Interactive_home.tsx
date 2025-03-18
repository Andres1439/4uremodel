"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Home, ChefHat, StepBackIcon as Stairs, Bath, Warehouse, PaintBucket, Flower2, Sofa, Car } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

interface AreaButton {
  id: string;
  name: string;
  position: {
    desktop: { top: string; left: string };
    mobile: { top: string; left: string };
  };
  href: string;
  icon: React.ReactNode;
}

export default function InteractiveHouse() {
  const isMobile = useMobile(768); // Screens smaller than 768px are considered mobile
  const [imageLoaded, setImageLoaded] = useState(false);

  const areaButtons: AreaButton[] = [
    {
      id: "kitchen",
      name: "Kitchen",
      position: {
        desktop: { top: "75%", left: "30%" },
        mobile: { top: "75%", left: "30%" },
      },
      href: "/services/masonry",
      icon: <ChefHat className="h-4 w-4 mr-2" />,
    },
    {
      id: "rooftop",
      name: "Rooftop",
      position: {
        desktop: { top: "15%", left: "50%" },
        mobile: { top: "15%", left: "50%" },
      },
      href: "/services/insulation",
      icon: <Warehouse className="h-4 w-4 mr-2" />,
    },
    {
      id: "roof",
      name: "Roof",
      position: {
        desktop: { top: "10%", left: "30%" },
        mobile: { top: "10%", left: "30%" },
      },
      href: "/services/roof",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      id: "bathroom",
      name: "Bathroom",
      position: {
        desktop: { top: "55%", left: "75%" },
        mobile: { top: "55%", left: "75%" },
      },
      href: "/services/wallpaper",
      icon: <Bath className="h-4 w-4 mr-2" />,
    },
    {
      id: "floors",
      name: "Floors",
      position: {
        desktop: { top: "85%", left: "50%" },
        mobile: { top: "85%", left: "50%" },
      },
      href: "/services/tiling",
      icon: <Warehouse className="h-4 w-4 mr-2" />,
    },
    {
      id: "walls",
      name: "Walls",
      position: {
        desktop: { top: "40%", left: "85%" },
        mobile: { top: "40%", left: "85%" },
      },
      href: "/services/siding",
      icon: <PaintBucket className="h-4 w-4 mr-2" />,
    },
    {
      id: "shrubs",
      name: "Shrubs",
      position: {
        desktop: { top: "75%", left: "90%" },
        mobile: { top: "75%", left: "90%" },
      },
      href: "/services/outdoor",
      icon: <Flower2 className="h-4 w-4 mr-2" />,
    },
    {
      id: "stairs",
      name: "Stairs",
      position: {
        desktop: { top: "50%", left: "50%" },
        mobile: { top: "50%", left: "50%" },
      },
      href: "/services/carpentry",
      icon: <Stairs className="h-4 w-4 mr-2" />,
    },
    {
      id: "living-room",
      name: "Living Room",
      position: {
        desktop: { top: "40%", left: "30%" },
        mobile: { top: "40%", left: "30%" },
      },
      href: "/services/drywall",
      icon: <Sofa className="h-4 w-4 mr-2" />,
    },
    {
      id: "garage",
      name: "Garage",
      position: {
        desktop: { top: "70%", left: "15%" },
        mobile: { top: "70%", left: "15%" },
      },
      href: "/services/assembling",
      icon: <Car className="h-4 w-4 mr-2" />,
    },
  ];

  const handleButtonClick = (areaName: string) => {
    toast(`Navigating to ${areaName}`, {
      description: `Redirecting to the ${areaName} section...`,
      duration: 2000,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center w-full py-8 px-4">
      <header>
        <h1 className="text-5xl font-bold mb-6 text-center">Explore Our Model House</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl">
          {isMobile
            ? "Select an area of the house to get more information."
            : "Click on the different areas of the house to get more information about each space."}
        </p>
      </header>

      {/* Desktop view: Image with overlay buttons */}
      {!isMobile && (
        <article className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/img/casa_sinbg.png"
            alt="Model house cross-section"
            width={1000}
            height={800}
            className="w-full h-auto"
            priority
            onLoad={() => setImageLoaded(true)}
          />

          {imageLoaded &&
            areaButtons.map((button) => (
              <Link href={button.href} key={button.id} onClick={() => handleButtonClick(button.name)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute  rounded-full shadow-md bg-primary text-primary-foreground transition-all duration-200 hover:scale-110 border-2 border-white"
                  style={{
                    top: button.position.desktop.top,
                    left: button.position.desktop.left,
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  {button.name}
                </Button>
              </Link>
            ))}
        </article>
      )}

      {/* Mobile view: Grid of buttons with icons */}
      {isMobile && (
        <main className="w-full max-w-md mx-auto">
          <section className="grid grid-cols-2 gap-4">
            {areaButtons.map((button) => (
              <Link href={button.href} key={button.id} className="w-full" onClick={() => handleButtonClick(button.name)}>
                <Button variant="outline" size="lg" className="w-full h-24 flex flex-col items-center justify-center text-center p-2 gap-2 border-2">
                  <figure className="rounded-full bg-primary/10 p-2">{button.icon}</figure>
                  <span>{button.name}</span>
                </Button>
              </Link>
            ))}
          </section>
        </main>
      )}

      {/* Areas legend (only visible on desktop) */}
      {!isMobile && (
        <footer className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Available Areas</h2>
          <nav className="flex flex-wrap justify-center gap-2">
            {areaButtons.map((button) => (
              <Link href={button.href} key={`legend-${button.id}`} onClick={() => handleButtonClick(button.name)}>
                <Button variant="outline" size="sm" className="m-1">
                  {button.icon}
                  {button.name}
                </Button>
              </Link>
            ))}
          </nav>
        </footer>
      )}
    </section>
  );
}
