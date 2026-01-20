import Footer from "../components/sections/shared/Footer";
import Navbar from "../components/ui/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-foreground no-scrollbar">
        <Footer />
      </main>
    </>
  );
}