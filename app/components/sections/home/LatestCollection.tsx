import Image from "next/image";
import Subheader from "../../ui/Subheader";
import Navlink from "../../ui/Navlink";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Section from "../../ui/Section";

export default function LatestCollection() {
  return (
    <Section>
      <div className="grid grid-cols-12">
        <div className="px-15 py-42 bg-background col-span-5">
          <Subheader light={false}>latest collection</Subheader>
          <Header light={false}>Bubliki 2026</Header>
          <Text light={false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</Text>
          <div className="mt-10">
            <Navlink href="/" light={false}>Learn more</Navlink>
          </div>
        </div>
        <div className="relative col-span-7">
          <Image src={"images/img2.jpg"} alt="Hero background" fill className="object-cover"></Image>
        </div>
      </div>
    </Section>
  );
}