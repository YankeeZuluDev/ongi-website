import Header from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import Image from "next/image";
import Text from "../components/ui/Text";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="">
          <Section>
            <div className="grid grid-cols-2 h-screen">
              <Link href={"projects/public"} className="relative flex justify-end">
                <Image src={"images/img3.jpg"} fill alt="123" className="object-cover"></Image>
                <div className="absolute inset-0 bg-radial from-transparent to-foreground/15 hover:to-foreground/0 transition-colors duration-300"></div>
                <div className="absolute bottom-25 left-15">
                  <Header>Public Spaces</Header>
                </div>
              </Link>
              <Link href={"projects/residential"} className="relative">
                <Image src={"images/img4.jpg"} fill alt="123" className="object-cover"></Image>
                <div className="absolute inset-0 bg-radial from-transparent to-foreground/15 hover:to-foreground/0 transition-colors duration-300"></div>
                <div className="absolute bottom-25 left-15">
                  <Header>Residential Spaces</Header>
                </div>
              </Link>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}