import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import Footer from "../components/sections/shared/Footer";
import { client } from "@/src/sanity/client";
import { ShopItem } from "@/src/types/shopItem";
import ShopMenu from "../components/ui/ShopMenu";

const SHOP_ITEMS_QUERY = `*[_type == "shopItem"]{..., category->{_id, name}, collection->{_id, name}, material->{_id, name}}|order(publishedAt desc)`;

export default async function Shop() {
  const shopItems = await client.fetch<ShopItem[]>(SHOP_ITEMS_QUERY);

  return (
    <>
      <Navbar forceBlackWhiteStyle={true} />
      <main className="bg-background">
        <Section>
          <div className="p-15 pt-30">
            <ShopMenu shopItems={shopItems} />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}