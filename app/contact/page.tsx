import ReactLenis from "lenis/react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/shared/Footer";
import Contact from "../components/sections/home/Contact";

export default function ContactPage() {

  return (
    <>
      <Navbar forceBlackWhiteStyle={true} />
      <main className="bg-background">
        <div className="pt-30 pb-15">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}