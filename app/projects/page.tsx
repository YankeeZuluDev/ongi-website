import ReactLenis from "lenis/react";
import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import ProjectCard from "../components/ui/ProjectCard";
import Footer from "../components/sections/shared/Footer";

export default function Projects() {
  return (
    <>
      <ReactLenis root />
      <Navbar light={false} />
      <main className="bg-background">
        <Section>
          <div className="p-15 pt-30">
            <ul className="flex gap-6 mb-6">
              <li>
                <button className="uppercase hover:underline underline-offset-6 decoration-1 cursor-pointer">Furniture</button>
              </li>
              <li>
                <button className="uppercase hover:underline underline-offset-6 decoration-1 cursor-pointer">Lighting</button>
              </li>
              <li>
                <button className="uppercase hover:underline underline-offset-6 decoration-1 cursor-pointer">Vases</button>
              </li>
              <li>
                <button className="uppercase hover:underline underline-offset-6 decoration-1 cursor-pointer">Interiors</button>
              </li>
              <li>
                <button className="uppercase hover:underline underline-offset-6 decoration-1 cursor-pointer">Decorations</button>
              </li>
            </ul>
            <div className="grid grid-cols-3 gap-1">
              <ProjectCard href="/projects/0" text="Vase 1" imgSrc="./images/img8.jpg" />
              <ProjectCard href="/projects/1" text="Vase 2" imgSrc="./images/img2.jpg" />
              <ProjectCard href="/projects/2" text="Vase 3" imgSrc="./images/img3.jpg" />
              <ProjectCard href="/projects/3" text="Vase 4" imgSrc="./images/img4.jpg" />
              <ProjectCard href="/projects/4" text="Vase 5" imgSrc="./images/img5.jpg" />
              <ProjectCard href="/projects/5" text="Vase 6" imgSrc="./images/img6.jpg" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}