import FeaturedProjectGalleryItem from "../../ui/FeaturedProjectGalleryItem";
import FullPageSection from "../../ui/FullPageSection";
import Image from "next/image";

export default function FeaturedProjectGallery() {
  return (
    <FullPageSection>
      <div className="grid grid-cols-12 h-full">
        <FeaturedProjectGalleryItem src="./images/img4.jpg" />
        <FeaturedProjectGalleryItem src="./images/img5.jpg" />
        <FeaturedProjectGalleryItem src="./images/img6.jpg" />
        <FeaturedProjectGalleryItem src="./images/img7.jpg" />
        <FeaturedProjectGalleryItem src="./images/img8.jpg" />
        <FeaturedProjectGalleryItem src="./images/img9.jpg" />
      </div>
    </FullPageSection>
  );
}