import Header from "../../ui/Header";
import Button from "../../ui/Button";
import Section from "../../ui/Section";

export default function Contact() {
  return (
    <Section>
      <div className="grid grid-cols-12">
        <div className="p-15 pb-0 col-span-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.0834952715663!2d76.95505007653841!3d43.249671878436075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f00054c9055%3A0x259ed5b1a1e1fccc!2z0J7QvdCz0Lg!5e0!3m2!1sen!2skz!4v1769958553266!5m2!1sen!2skz"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="col-span-6 bg-background">
          <div className="flex justify-center py-15">
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
      </div>
    </Section>
  );
}