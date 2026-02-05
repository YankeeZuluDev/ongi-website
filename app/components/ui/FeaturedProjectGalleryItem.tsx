import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjectGalleryItem({ href, text, imgSrc, style = "col-span-4" }: { href: string, text: string, imgSrc: string, style?: string }) {
  return (
    <Link href={href} className={`group relative min-h-[540px] ${style}`}>
      <Image src={imgSrc} alt="123" fill className="object-cover" />
      <div className="absolute inset-0 bg-radial from-transparent to-foreground/15 group-hover:to-foreground/0 transition-colors duration-300"></div>
      <div className="absolute left-15 top-15">
        <p className="text-xl text-background font-baskerville uppercase tracking-widest group-hover:underline underline-offset-6 decoration-1">{text}</p>
      </div>
    </Link>
  );
}