import Image from "next/image";

export default function FeaturedProjectGalleryItem({ src, style = "col-span-4" }: { src: string, style?: string }) {
  return (
    <div className={`relative min-h-[540px] ${style}`}>
        <Image src={src} alt="123" fill className="object-cover" />
        <div className="absolute inset-0 bg-radial from-transparent to-black/20"></div>
        <div className="absolute left-15 top-15">
          <p>123312</p>
        </div>
    </div>
  );
}