import { motion } from "framer-motion";
import { industries } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Industries() {
  return (
    <section className="py-24 md:py-32 bg-sectionBg">
      <div className="section-container">
        <SectionHeading
          title="Industries We Serve"
          center
          titleColor="primary"
          description="Supporting a diverse range of businesses and professionals across sectors."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={(index % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl border border-borderSoft bg-white px-5 py-7 text-center hover:border-secondary/50 hover:shadow-soft hover:bg-accent/[0.06] transition-colors duration-300"
              >
                <span className="text-base font-medium text-textPrimary">{industry}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
