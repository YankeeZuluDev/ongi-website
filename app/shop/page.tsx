import ReactLenis from "lenis/react";
import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import ShopItemCard from "../components/ui/ShopItemCard";
import Footer from "../components/sections/shared/Footer";
import Dropdown from "../components/ui/Dropdown";

export default function Shop() {
  return (
    <>
      <ReactLenis root />
      <Navbar light={false} />
      <main className="bg-background">
        <Section>
          <div className="p-15 pt-30">
            <div className="flex mb-6 gap-4">
              {/* <button className="bg-foreground text-background px-8 py-4 inline-block text-center">Contact</button> */}
              <Dropdown id="category" name="" label="Category" options={["furniture", "lighting", "vases", "interiors", "decorations"]} />
              <Dropdown id="sort-by" name="" label="Sort By" options={["date, old to new", "date, new to old", "price, low to heigh", "price, heigh to low"]} />
              <Dropdown id="material" name="" label="Material" options={["super clay", "wild clay", "wood", "stone", "gold"]} />
              <Dropdown id="material" name="" label="Collection" options={["any", "le glinoméux", "bubliki", "huyubliki", "chai", "mai", "syr", "myr"]} />
            </div>
            <div className="grid grid-cols-3 gap-x-1 gap-y-6">
              <ShopItemCard href="/shop/0" text="Vase 1" imgSrc="images/img8.jpg" />
              <ShopItemCard href="/shop/1" text="Vase 2" imgSrc="images/img2.jpg" />
              <ShopItemCard href="/shop/2" text="Vase 3" imgSrc="images/img3.jpg" />
              <ShopItemCard href="/shop/3" text="Vase 4" imgSrc="images/img4.jpg" />
              <ShopItemCard href="/shop/4" text="Vase 5" imgSrc="images/img5.jpg" />
              <ShopItemCard href="/shop/5" text="Vase 6" imgSrc="images/img6.jpg" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}