import Footer from "@/app/components/sections/shared/Footer";
import Carousel, { CarouselProps } from "@/app/components/ui/Carousel";
import Header from "@/app/components/ui/Header";
import Navbar from "@/app/components/ui/Navbar";
import Section from "@/app/components/ui/Section";
import Text from "@/app/components/ui/Text";
import { client, urlFor } from "@/src/sanity/client";
import { ShopItem } from "@/src/types/shopItem";
import Link from "next/link";

export async function generateStaticParams() {
  const shopItems = await client.fetch<ShopItem[]>(`*[_type == "shopItem"] {slug}`);

  return shopItems.map((shopItem) => ({
    slug: shopItem.slug.current
  }));
}

export default async function ShopItemPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const shopItem = await client.fetch<ShopItem>(`*[_type == "shopItem" && slug.current == "fish"][0]{..., collection->{_id, name}, material->{_id, name}}`, { slug });

  const carouselProps: CarouselProps = {
    items: []
  };

  shopItem.images.forEach(itemImage =>
    carouselProps.items.push({
      id: itemImage._key,
      imgSrc: urlFor(itemImage).url()
    }));

  return (
    <>
      <Navbar />
      <main className="bg-background">
        <Section>
          <div className="grid grid-cols-2">
            <div className="relative h-screen">
              <Carousel carouselProps={carouselProps} />
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[60ch]">
                <Header light={false}>{shopItem.name.en}</Header>
                <Text light={false}>{shopItem.description.en}</Text>
                <div className="my-9">
                  {shopItem.year && (
                    <div className="flex justify-between mb-3">
                      <p className="text-sm uppercase">Year</p>
                      <p className="text-sm uppercase">{shopItem.year}</p>
                    </div>
                  )}
                  {shopItem.collection && (
                    <div className="flex justify-between mb-3">
                      <p className="text-sm uppercase">Collection</p>
                      <p className="text-sm uppercase">{shopItem.collection.name.en}</p>
                    </div>
                  )}
                  {shopItem.material && (
                    <div className="flex justify-between mb-3">
                      <p className="text-sm uppercase">Material</p>
                      <p className="text-sm uppercase">{shopItem.material.name.en}</p>
                    </div>
                  )}
                  {shopItem.size && shopItem.size.width && shopItem.size.height && shopItem.size.depth && (
                    <div className="flex justify-between mb-3">
                      <p className="text-sm uppercase">Size</p>
                      <p className="text-sm uppercase">{shopItem.size?.width}X{shopItem.size?.height}X{shopItem.size?.depth} mm</p>
                    </div>
                  )}
                </div>
                {shopItem.price && (
                  <p className="text-2xl uppercase mb-9">${shopItem.price?.toLocaleString()}</p>
                )}
                <Link href={"/"} className="w-full bg-foreground text-background px-8 py-4 inline-block text-center">Contact</Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}