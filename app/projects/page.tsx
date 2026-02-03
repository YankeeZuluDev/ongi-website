import ReactLenis from "lenis/react";
import Footer from "../components/sections/shared/Footer";
import Header from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import Image from "next/image";
import Text from "../components/ui/Text";

export default function Projects() {
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <main className="bg-foreground">
        <Section>
          <div className="grid grid-cols-12">
            <div className="col-span-5 py-40 flex bg-background px-15">
              <div>
                <Header light={false}>Furniture</Header>
                <Text light={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi deserunt, exercitationem minima qui ex ipsa ducimus, omnis quibusdam, atque repudiandae saepe laborum? Dignissimos eos mollitia est! Cupiditate accusantium qui, dolores culpa dolorem facere sunt consequatur, maiores libero id porro nostrum amet tenetur soluta ipsam obcaecati placeat. Libero, cumque ipsum?</Text>
              </div>
            </div>
            <div className="relative col-span-7">
              <Image src={"images/img1.jpg"} alt="123" fill className="object-cover" />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-12">
            <div className="relative col-span-7">
              <Image src={"images/img2.jpg"} alt="123" fill className="object-cover" />
            </div>
            <div className="col-span-5 py-40 flex justify-center">
              <div>
                <Header>Vases</Header>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi vitae numquam aperiam rerum, eum quas id veritatis alias, doloremque quia non dolorum ad voluptate. Doloremque aperiam quisquam nam id autem aliquid laboriosam consectetur culpa ipsa magni nihil adipisci voluptatem libero commodi fugit reprehenderit cupiditate nobis tempora illo incidunt, veritatis quidem cumque quasi. Laudantium ipsam libero nemo error nisi consequatur optio, a hic iste, et eos alias at. Inventore aut doloremque corrupti debitis veniam consequatur vitae. Quis quasi optio possimus tenetur, veritatis qui, aspernatur esse ab harum necessitatibus voluptatum aut. Eius perferendis ad enim deleniti consectetur consequatur quisquam debitis nam!</Text>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-12">
            <div className="col-span-6 py-40 flex px-15">
              <div>
                <Header>Lighting</Header>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi deserunt, exercitationem minima qui ex ipsa ducimus, omnis quibusdam, atque repudiandae saepe laborum? Dignissimos eos mollitia est! Cupiditate accusantium qui, dolores culpa dolorem facere sunt consequatur, maiores libero id porro nostrum amet tenetur soluta ipsam obcaecati placeat. Libero, cumque ipsum?</Text>
              </div>
            </div>
            <div className="relative col-span-6">
              <Image src={"images/img3.jpg"} alt="123" fill className="object-cover" />
            </div>
          </div>
        </Section>

        {/* 123 */}
        <Section>
          <div className="grid grid-cols-12">
            <div className="relative col-span-7">
              <Image src={"images/img7.jpg"} alt="123" fill className="object-cover" />
            </div>
            <div className="col-span-5 py-40 flex justify-center bg-background">
              <div>
                <Header light={false}>Sculptures</Header>
                <Text light={false}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sed provident vitae, fuga qui fugit inventore mollitia odit ipsa voluptas! Autem aspernatur obcaecati fugiat at consequuntur atque culpa, pariatur vero nostrum dolore velit eum officiis labore magni tempora sit sapiente vel adipisci id sequi a modi aperiam voluptatibus. Inventore magnam repellendus accusamus unde iure, modi quas mollitia magni veniam excepturi pariatur, vero repellat quaerat tempore natus ut, exercitationem commodi perspiciatis?</Text>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}