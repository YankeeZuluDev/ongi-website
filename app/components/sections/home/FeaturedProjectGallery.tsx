import FeaturedProjectGalleryItem from "../../ui/FeaturedProjectGalleryItem";
import FullPageSection from "../../ui/FullPageSection";

export default function FeaturedProjectGallery() {
  return (
    <FullPageSection>
      <div className="grid grid-cols-12 h-full">
        <FeaturedProjectGalleryItem src="./images/img4.jpg" style="col-span-6" />
        <FeaturedProjectGalleryItem src="./images/img5.jpg" style="col-span-6"  />
        <FeaturedProjectGalleryItem src="./images/img6.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem src="./images/img7.jpg" style="col-span-4"  />
        <FeaturedProjectGalleryItem src="./images/img8.jpg" style="col-span-4"  />
        {/* <FeaturedProjectGalleryItem src="./images/img9.jpg" /> */}
      </div>
    </FullPageSection>
  );
}