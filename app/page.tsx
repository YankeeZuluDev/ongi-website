import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/home/Hero";
import LatestCollection from "./components/sections/home/LatestCollection";
import FeaturedProject from "./components/sections/home/FeaturedProject";
import FeaturedProjectGallery from "./components/sections/home/FeaturedProjectGallery";
import Contact from "./components/sections/home/Contact";
import Footer from "./components/sections/shared/Footer";
import ReactLenis from "lenis/react";

export default function Home() {
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