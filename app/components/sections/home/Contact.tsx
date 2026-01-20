import FullPageSection from "../../ui/FullPageSection";
import Image from "next/image";
import Footer from "../shared/Footer";
import Header from "../../ui/Header";
import Text from "../../ui/Text";
import Button from "../../ui/Button";

export default function Contact() {
  return (
    <FullPageSection>
      <div className="grid grid-cols-12 grid-rows-12 h-full">
        <div className="relative col-span-6 row-span-8">
          <Image src={"./images/img11.jpg"} alt="123" fill className="object-cover" />
        </div>
        <div className="col-span-6 bg-background row-span-8">
          <div className="flex items-center justify-center h-full">
            <div>
              <Header light={false}>Contact</Header>
              <form className="max-w-lg mb-20">
                <input
                  type="text"
                  name="username"
                  placeholder={"Name"}
                  required
                  className="w-full border-b outline-none mt-10 pb-1 placeholder:uppercase" />
                <input
                  type="email"
                  name="email"
                  placeholder={"E-mail"}
                  required
                  className="w-full border-b outline-none mt-10 pb-1 placeholder:uppercase" />
                <textarea
                  name="message"
                  placeholder={"Message"}
                  required
                  rows={4}
                  className="w-full border-b resize-none outline-none place-content-end mt-10 pb-1 placeholder:uppercase" />
              </form>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 row-span-4">
          <Footer />
        </div>
      </div>
    </FullPageSection>
  );
}