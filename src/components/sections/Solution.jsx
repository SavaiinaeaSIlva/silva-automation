// Solution component - Solution section with F-pattern layout
import { solutionContent, contactContent } from "../../data";
import { SectionHeader, Button } from "../ui";
import { Section } from "../layout";
import ProcessStep from "./ProcessStep";
import BenefitItem from "./BenefitItem";

function Solution() {
  return (
    <Section id="solution">
      {/* F-pattern: Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - Steps */}
        <div>
          <SectionHeader 
            title={solutionContent.header} 
            subtitle={solutionContent.intro}
            align="left"
          />
          
          <div className="space-y-4">
            {solutionContent.steps.map((step) => (
              <ProcessStep
                key={step.id}
                stepNumber={step.id}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
        
        {/* Right column - Benefits + Contact CTA */}
        <div className="space-y-6">
          {/* Benefits */}
          <div className="glass-card lg:p-8">
            <h3 className="section-title mb-4">Key Benefits</h3>
            <ul className="space-y-3 list-none p-0">
              {solutionContent.benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </ul>
          </div>
          
          {/* Contact CTA */}
          <div id="contact" className="glass-card lg:p-8 flex flex-col justify-center items-center text-center">
            <h3 className="section-title mb-3">
              {contactContent.title}
            </h3>
            <p className="text-body mb-4">
              {contactContent.subtitle}
            </p>
            <Button variant="primary" href="https://calendly.com/silvaautomation/consultation">{contactContent.cta}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Solution;
