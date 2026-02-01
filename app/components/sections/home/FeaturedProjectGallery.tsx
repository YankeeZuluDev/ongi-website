import FeaturedProjectGalleryItem from "../../ui/FeaturedProjectGalleryItem";
import Section from "../../ui/Section";

export default function FeaturedProjectGallery() {
  return (
    <Section>
      <div className="grid grid-cols-12">
        <FeaturedProjectGalleryItem src="./images/img4.jpg" style="col-span-6" />
        <FeaturedProjectGalleryItem src="./images/img5.jpg" style="col-span-6"  />
        <FeaturedProjectGalleryItem src="./images/img6.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem src="./images/img7.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem src="./images/img8.jpg" style="col-span-4"  />
      </div>
    </Section>
  );
}