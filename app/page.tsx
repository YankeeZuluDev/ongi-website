"use client"

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/home/Hero";
import LatestCollection from "./components/sections/home/LatestCollection";
import FeaturedProject from "./components/sections/home/FeaturedProject";
import FeaturedProjectGallery from "./components/sections/home/FeaturedProjectGallery";
import Contact from "./components/sections/home/Contact";

const TRANSITION_DURATION = 600;

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const sections = main.querySelectorAll('.full-page-section');
    sections[0]?.classList.add('current-section');
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const scroll = (e: WheelEvent) => {
      // Exit if transitioning
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      // Get all sections
      const sections = main.querySelectorAll('.full-page-section');

      // Get direction from deltaY
      const direction = e.deltaY > 0 ? 1 : -1;

      // Get next section index 
      const nextSectionIndex = currentSectionIndex + direction;

      // Clamp between awailable section indicies
      if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
        e.preventDefault();
        setIsTransitioning(true);

        // Make invisible
        sections[currentSectionIndex].classList.remove('current-section');

        // Wait for fade before scrolling
        setTimeout(() => {
          setCurrentSectionIndex(nextSectionIndex);
          main.scrollTo({
            top: nextSectionIndex * window.innerHeight,
            behavior: "auto"
          });

          setTimeout(() => {
            // Make visible
            sections[nextSectionIndex].classList.add('current-section');

            setTimeout(() => {
              setIsTransitioning(false);
            }, TRANSITION_DURATION);
          }, 50);
        }, TRANSITION_DURATION);
      }
    };

    main.addEventListener('wheel', scroll, { passive: false });
    return () => main.removeEventListener('wheel', scroll);

  }, [currentSectionIndex, isTransitioning]);

  return (
    <>
      <Navbar />
      <main ref={mainRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-foreground no-scrollbar">
        <Hero />
        <LatestCollection />
        <FeaturedProject />
        <FeaturedProjectGallery />
        <Contact />
      </main>
    </>
  );
}