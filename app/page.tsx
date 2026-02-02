"use client"

import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/home/Hero";
import LatestCollection from "./components/sections/home/LatestCollection";
import FeaturedProject from "./components/sections/home/FeaturedProject";
import FeaturedProjectGallery from "./components/sections/home/FeaturedProjectGallery";
import Contact from "./components/sections/home/Contact";
import Footer from "./components/sections/shared/Footer";
import ReactLenis, { useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis();

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <main className="bg-foreground">
        <Hero />
        <LatestCollection />
        <FeaturedProjectGallery />
        <FeaturedProject />
        <Contact />
      </main>
      <Footer />
    </>
  );
}