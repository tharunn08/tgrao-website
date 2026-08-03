import { processSteps } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <SectionHeading
          title="Our Work Process"
          center
          titleColor="primary"
          description="A defined, structured workflow from first consultation to compliance completion."
        />

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-borderSoft" />
          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} className="relative flex md:flex-col items-start md:items-center gap-4 md:text-center">
                <div className="relative z-10 shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-heading text-lg shadow-soft">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-textPrimary mb-1.5">{step.title}</h4>
                  <p className="text-base text-textSecondary leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
