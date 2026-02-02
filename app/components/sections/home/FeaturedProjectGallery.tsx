import FeaturedProjectGalleryItem from "../../ui/FeaturedProjectGalleryItem";
import Section from "../../ui/Section";

export default function FeaturedProjectGallery() {
  return (
    <Section>
      <div className="grid grid-cols-12">
        <FeaturedProjectGalleryItem href="/" text="Furniture" imgSrc="./images/img4.jpg" style="col-span-6" />
        <FeaturedProjectGalleryItem href="/" text="Vases" imgSrc="./images/img5.jpg" style="col-span-6"  />
        <FeaturedProjectGalleryItem href="/" text="Interiors" imgSrc="./images/img6.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem href="/" text="Lighting" imgSrc="./images/img7.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem href="/" text="Decorations" imgSrc="./images/img8.jpg" style="col-span-4"  />
      </div>
    </Section>
  );
}