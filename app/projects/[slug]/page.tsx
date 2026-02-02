import Footer from "@/app/components/sections/shared/Footer";
import Navbar from "@/app/components/ui/Navbar";
import ReactLenis from "lenis/react";

export async function generateStaticParams() {
  const posts = [0, 1, 2, 3, 4, 5];

  return posts.map((post) => ({
    slug: post.toString()
  }));
}

export default function Project() {

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <main className="bg-background">

      </main>
      <Footer />
    </>
  );
}