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
      <main className="bg-foreground no-scrollbar">
        <Section>
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <Image src={"./images/img1.jpg"} width={750} height={440} alt="123" className="object-cover" />
            </div>
            <div className="flex items-center justify-center">
              <div>
                <div className="mb-9">
                  <Header>About us</Header>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste totam voluptates molestiae harum, laborum perferendis obcaecati atque consequatur cumque, aperiam expedita soluta quisquam unde provident consectetur. Harum quaerat eaque accusamus quam magnam eius quia. Perspiciatis temporibus obcaecati facilis cumque in sunt doloribus amet. Corporis voluptatibus, commodi eveniet atque quisquam non expedita illum reprehenderit perspiciatis maiores ad voluptatem sunt quia enim incidunt aut excepturi rem, nisi ipsa nam nostrum cumque.</Text>
                </div>
                <Header>Design philosophy</Header>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore dolorem sed, quam cum mollitia hic eligendi. Sapiente autem ad illum inventore atque. Nisi labore nesciunt optio maiores magni, similique rem officiis iure itaque? Eius!</Text>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-2 bg-background py-30">
            <div className="flex items-center justify-center">
              <div>
                <Header light={false}>Materials</Header>
                <Text light={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem nihil iure ratione perspiciatis? Deleniti repudiandae illum laudantium veritatis ab sapiente quidem porro fugit numquam corrupti! Labore soluta tempore iste sit quam, repellat, pariatur repellendus sunt similique molestias, eveniet possimus? Repudiandae, animi ex! Cupiditate laboriosam veniam dolore, atque iusto rem architecto! Hic obcaecati ad totam dolor odit ratione at, architecto suscipit minima minus. Dolor mollitia nostrum beatae necessitatibus, quod illo dolores. Rem, laborum tempora, autem animi aliquam, iure dignissimos sapiente repellendus excepturi cum et. Sed quo quas repellendus ipsam aliquid adipisci exercitationem quisquam veniam doloremque maxime, maiores labore obcaecati quam sapiente voluptatibus alias cupiditate natus quae optio ipsa beatae est nam! Commodi dolor ipsa aliquam dolorum aliquid consequuntur iure eius magnam. Odio cupiditate officiis laborum id quibusdam debitis molestias non labore eos vero perspiciatis eaque atque aliquid esse quod, vel consequuntur? Velit quidem quis explicabo dicta vitae, expedita ducimus dolorem.</Text>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src={"./images/img3.jpg"} width={600} height={440} alt="123" className="object-cover" />
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-2 pb-15">
            <div className="flex items-center justify-center">
              <Image src={"./images/img5.jpg"} width={600} height={440} alt="123" className="object-cover" />
            </div>
            <div className="flex items-center justify-center">
              <div>
                <Header>People</Header>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste totam voluptates molestiae harum, laborum perferendis obcaecati atque consequatur cumque, aperiam expedita soluta quisquam unde provident consectetur. Harum quaerat eaque accusamus quam magnam eius quia. Perspiciatis temporibus obcaecati facilis cumque in sunt doloribus amet. Corporis voluptatibus, commodi eveniet atque quisquam non expedita illum reprehenderit perspiciatis maiores ad voluptatem sunt quia enim incidunt aut excepturi rem, nisi ipsa nam nostrum cumque.</Text>
              </div>
            </div>
          </div>
        </Section>
        <Footer light={true} />
      </main>
    </>
  );
}