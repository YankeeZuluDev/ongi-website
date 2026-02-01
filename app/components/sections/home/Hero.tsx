import Image from "next/image";
import Header from "../../ui/Header";
import Text from "../../ui/Text";

export default function Hero() {
  return (
    <section className="h-screen">
      <Image src={"./images/img1.jpg"} alt="Hero background" fill priority className="absolute object-cover"></Image>
      <div className="absolute bottom-25 left-15">
        <Header>Ongi Studio</Header>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus fringilla sapien ut consequat. Etiam id fermentum ligula. Nam ut magna eros. Praesent cursus blandit urna in congue. Etiam bibendum fringilla est, tincidunt sagittis nibh ultrices ac.</Text>
      </div>
    </section>
  );
}