import ReactLenis from "lenis/react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/shared/Footer";
import Contact from "../components/sections/home/Contact";
import Section from "../components/ui/Section";

export default function ContactPage() {

  return (
    <>
      <ReactLenis root />
      <Navbar light={false} />
      <main className="bg-background">
        <div className="pt-30 pb-15">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}