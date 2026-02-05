import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/home/Hero";
import LatestCollection from "./components/sections/home/LatestCollection";
import FeaturedProject from "./components/sections/home/FeaturedProject";
import FeaturedProjectGallery from "./components/sections/home/FeaturedProjectGallery";
import Contact from "./components/sections/home/Contact";
import Footer from "./components/sections/shared/Footer";

export default function Home() {
  return (
    <>
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