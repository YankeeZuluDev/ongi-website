import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjectGalleryItem({ href, text, imgSrc, style = "col-span-4" }: { href: string, text: string, imgSrc: string, style?: string }) {
  return (
    <div className={`relative min-h-[540px] ${style}`}>
        <Image src={imgSrc} alt="123" fill className="object-cover" />
        <div className="absolute inset-0 bg-radial from-transparent to-black/20"></div>
        <div className="absolute left-15 top-15">
          <Link href={href} className="text-xl text-background font-baskerville uppercase tracking-widest mb-3 hover:underline underline-offset-6 decoration-1">{text}</Link>
        </div>
    </div>
  );
}