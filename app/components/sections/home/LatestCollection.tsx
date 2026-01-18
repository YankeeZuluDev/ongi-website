import Image from "next/image";
import Subheader from "../../ui/Subheader";
import Navlink from "../../ui/Navlink";
import FullPageSection from "../../ui/FullPageSection";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

export default function LatestCollection() {
  return (
    <FullPageSection>
      <Image src={"./images/img2.jpg"} alt="Hero background" fill priority className="absolute object-cover"></Image>
      <div className="absolute top-25 left-15">
        <Subheader>latest collection</Subheader>
        <Header>Bubliki 2026</Header>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</Text>
        <div className="mt-10">
          <Navlink href="/">Learn more</Navlink>
        </div>
      </div>
    </FullPageSection>
  );
}