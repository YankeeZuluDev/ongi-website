import Image from "next/image";
import Navlink from "../../ui/Navlink";
import Subheader from "../../ui/Subheader";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Section from "../../ui/Section";

export default function FeaturedProject() {
  return (
    <Section>
      <div className="grid grid-cols-2">
        <div className="relative h-screen">
          <Image src={"./images/img3.jpg"} alt="123" fill className="object-cover" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Subheader>featured project</Subheader>
            <Header>Vaza</Header>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</Text>
            <div className="mt-10">
              <Navlink href="/">Learn more</Navlink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}