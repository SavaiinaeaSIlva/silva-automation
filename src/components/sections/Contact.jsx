// Contact component - Contact CTA section
import { contactContent } from "../../data";
import { Button } from "../ui";
import { Section } from "../layout";

function Contact() {
  return (
    <Section id="contact">
      <div className="text-center">
        <h2 className="section-title section-title--lg mb-4">
          {contactContent.title}
        </h2>
        <p className="text-lg text-body max-w-2xl mx-auto mb-8">
          {contactContent.subtitle}
        </p>
        <Button variant="primary" href="https://calendly.com/silvaautomation/consultation">{contactContent.cta}</Button>
      </div>
    </Section>
  );
}

export default Contact;
