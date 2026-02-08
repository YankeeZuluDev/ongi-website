import FeaturedProjectGalleryItem from "../../ui/FeaturedProjectGalleryItem";
import Section from "../../ui/Section";

export default function FeaturedProjectGallery() {
  return (
    <Section>
      <div className="grid grid-cols-12">
        <FeaturedProjectGalleryItem href="/projects/residential" text="Residential Spaces" imgSrc="images/img4.jpg" style="col-span-6" />
        <FeaturedProjectGalleryItem href="/projects/public" text="Public Spaces" imgSrc="images/img5.jpg" style="col-span-6"  />
        <FeaturedProjectGalleryItem href="/projects" text="Vases" imgSrc="images/img6.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem href="/projects" text="Decorations" imgSrc="images/img7.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem href="/projects" text="Tableware" imgSrc="images/img8.jpg" style="col-span-4"  />
      </div>
    </Section>
  );
}