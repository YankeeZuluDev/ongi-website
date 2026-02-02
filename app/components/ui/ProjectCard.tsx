import Image from "next/image";
import Link from "next/link";

  export default function ProjectCard({ href, text, imgSrc }: { href: string, text: string, imgSrc: string, style?: string }) {
    return (
      <Link href={href} className={"relative min-h-[540px]"}>
        <Image src={imgSrc} alt="123" fill className="object-cover" />
        <div className="absolute inset-0 bg-radial from-transparent to-black/20 hover:to-white/10 transition-colors transition-600"></div>
        <div className="absolute left-15 bottom-15">
          <p className="text-xl text-background font-baskerville uppercase tracking-widest hover:underline underline-offset-6 decoration-1">{text}</p>
        </div>
      </Link>
    );
  }