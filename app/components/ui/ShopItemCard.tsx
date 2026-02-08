import { urlFor } from "@/src/sanity/client";
import { ShopItem } from "@/src/types/shopItem";
import Image from "next/image";
import Link from "next/link";

export default function ShopItemCard({ href, shopItem }: { href: string, shopItem: ShopItem }) {
  return (
    <Link href={href}>
      <div className="relative min-h-[540px]">
        <Image src={urlFor(shopItem.images[0]).url()} alt="123" fill className="object-cover" />
        <div className="absolute inset-0 bg-radial from-transparent to-foreground/15 hover:to-foreground/0 transition-colors duration-300"></div>
        {/* <div className="absolute left-15 bottom-15">
          <p className="text-xl text-background font-baskerville uppercase tracking-widest hover:underline underline-offset-6 decoration-1">{text}</p>
        </div> */}
      </div>
      <p className="mt-1">{shopItem.name.en}</p>
      {shopItem.price && (
        <p className="text-sm">${shopItem.price.toLocaleString()}</p>
      )}
    </Link>
  );
}