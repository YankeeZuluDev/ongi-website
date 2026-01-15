"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Subheader from "./Components/Subheader";
import Navlink from "./Components/Navlink";

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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={mainRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#2B2B2B]">
        <section className="relative snap-start h-full">
          <Image src="/images/img1.jpg" alt="Hero background" fill priority className="absolute object-cover"></Image>
          <div className="absolute bottom-25 left-15">
            <h1 className="text-2xl text-white font-baskerville uppercase tracking-widest mb-3">Ongi Studio</h1>
            <p className="text-sm max-w-[60ch] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</p>
          </div>
        </section>

        <section className="relative snap-start h-full">
          <Image src="/images/img2.jpg" alt="Hero background" fill priority className="absolute object-cover"></Image>
          <div className="absolute top-25 left-15">
            <Subheader>featured collection</Subheader>
            <h1 className="text-2xl text-white font-baskerville uppercase tracking-widest mb-3">Bubliki 2026</h1>
            <p className="text-sm max-w-[60ch] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</p>
            <div className="mt-10">
              <Navlink href="/">Learn more</Navlink>
            </div>
          </div>
        </section>

        <section className="relative snap-start h-full">
          <div className="absolute bottom-25 left-15">
            <h1 className="text-2xl text-white font-baskerville uppercase tracking-widest mb-3">Ongi Studio</h1>
            <p className="text-sm max-w-[60ch] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</p>
          </div>
        </section>
      </main>
    </>
  );
}
