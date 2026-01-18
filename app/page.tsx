"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Link from "next/link";
import Hero from "./components/sections/home/Hero";
import LatestCollection from "./components/sections/home/LatestCollection";
import FeaturedProject from "./components/sections/home/FeaturedProject";
import FeaturedProjectGallery from "./components/sections/home/FeaturedProjectGallery";
import Contact from "./components/sections/home/Contact";

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={mainRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-foreground">
        <Hero />
        <LatestCollection />
        <FeaturedProject />
        <FeaturedProjectGallery />
        <Contact />
      </main>
    </>
  );
}
