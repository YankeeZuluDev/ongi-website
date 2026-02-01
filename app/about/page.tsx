import Footer from "../components/sections/shared/Footer";
import Header from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";
import Image from "next/image";
import Text from "../components/ui/Text";
import Section from "../components/ui/Section";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-foreground">
        <Section>
          <div className="grid grid-cols-12">
            <div className="relative col-span-6">
              <Image src={"./images/img1.jpg"} alt="123" fill className="object-cover" />
            </div>
            <div className="col-span-6 py-40 flex justify-center">
              <div>
                <Header>About Us</Header>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi deserunt, exercitationem minima qui ex ipsa ducimus, omnis quibusdam, atque repudiandae saepe laborum? Dignissimos eos mollitia est! Cupiditate accusantium qui, dolores culpa dolorem facere sunt consequatur, maiores libero id porro nostrum amet tenetur soluta ipsam obcaecati placeat. Libero, cumque ipsum?</Text>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-12 bg-background">
            <div className="col-span-6 flex items-center justify-center">
              <div>
                <Header light={false}>Materials</Header>
                <Text light={false} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus molestias placeat corporis. Consectetur omnis quibusdam obcaecati ut excepturi? Recusandae nemo perferendis non eos dolores explicabo quod, quam velit exercitationem saepe in quas officiis voluptatem ipsum quae quisquam tenetur fugiat expedita dolor praesentium amet ut. Beatae alias quos delectus, voluptatem in possimus laudantium reprehenderit quidem sed quisquam ipsa. Adipisci necessitatibus sequi omnis minima impedit quod qui, dolore quae autem vero?</Text>
              </div>
            </div>
            <div className="relative col-span-6 h-screen">
              <Image src={"./images/img3.jpg"} alt="123" fill className="object-cover" />
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-12">
            <div className="relative col-span-6">
              <Image src={"./images/img8.jpg"} alt="123" fill className="object-cover" />
            </div>
            <div className="col-span-6 py-40 flex justify-center">
              <div>
                <Header>People</Header>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi deserunt, exercitationem minima qui ex ipsa ducimus, omnis quibusdam, atque repudiandae saepe laborum? Dignissimos eos mollitia est! Cupiditate accusantium qui, dolores culpa dolorem facere sunt consequatur, maiores libero id porro nostrum amet tenetur soluta ipsam obcaecati placeat. Libero, cumque ipsum?</Text>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}