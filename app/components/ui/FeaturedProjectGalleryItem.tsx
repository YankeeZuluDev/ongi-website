import Image from "next/image";

export default function FeaturedProjectGalleryItem({ src }: { src: string }) {
  return (
    <div className="relative col-span-4">
      <Image src={src} alt="123" fill className="object-cover" />
      <div className="absolute inset-0 bg-radial from-transparent to-black/20"></div>
    </div>
  );
}