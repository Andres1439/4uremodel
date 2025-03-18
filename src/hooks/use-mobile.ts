"use client";

import { useState, useEffect } from "react";

export function useMobile(maxWidth: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < maxWidth);
    };

    // Verificar inicialmente
    checkMobile();

    // Agregar event listener para cambios de tamaño
    window.addEventListener("resize", checkMobile);

    // Limpiar event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, [maxWidth]);

  return isMobile;
}
