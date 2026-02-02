import Footer from "@/app/components/sections/shared/Footer";
import Carousel, { CarouselProps } from "@/app/components/ui/Carousel";
import Header from "@/app/components/ui/Header";
import Navbar from "@/app/components/ui/Navbar";
import Navlink from "@/app/components/ui/Navlink";
import Section from "@/app/components/ui/Section";
import Subheader from "@/app/components/ui/Subheader";
import Text from "@/app/components/ui/Text";
import ReactLenis from "lenis/react";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = [0, 1, 2, 3, 4, 5];

  return posts.map((post) => ({
    slug: post.toString()
  }));
}

export default function Project() {
  const carouselProps: CarouselProps = {
    items: [
      {
        id: "0",
        imgSrc: "/images/img3.jpg"
      },
      {
        id: "1",
        imgSrc: "/images/img4.jpg"
      },
      {
        id: "2",
        imgSrc: "/images/img5.jpg"
      },
      {
        id: "3",
        imgSrc: "/images/img6.jpg"
      },
      {
        id: "4",
        imgSrc: "/images/img7.jpg"
      },
      {
        id: "5",
        imgSrc: "/images/img8.jpg"
      },
      {
        id: "6",
        imgSrc: "/images/img9.jpg"
      },
    ]
  };

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <main className="bg-background">
        <Section>
          <div className="grid grid-cols-2">
            <div className="relative h-screen">
              <Carousel carouselProps={carouselProps} />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <Header light={false}>Vaza</Header>
                <Text light={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, id qui? Ex magni omnis officiis quam laboriosam, temporibus quis, veritatis possimus, odio et facilis voluptate earum. Placeat officia facere maxime optio quasi voluptatibus eveniet maiores, dolor voluptates odio veritatis provident. Aliquam, provident atque! Maiores harum totam veritatis, enim consequuntur autem.</Text>
                <div className="my-9">
                  <div className="flex justify-between mb-3">
                    <p className="text-sm uppercase">Year</p>
                    <p className="text-sm uppercase">2021</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p className="text-sm uppercase">Collection</p>
                    <p className="text-sm uppercase">Le Glinoméux Collection</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p className="text-sm uppercase">Material</p>
                    <p className="text-sm uppercase">Super-Clay</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p className="text-sm uppercase">Size</p>
                    <p className="text-sm uppercase">20x15x30 mm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}