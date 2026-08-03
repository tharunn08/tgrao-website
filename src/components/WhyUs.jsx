import { motion } from "framer-motion";
import { BookMarked, Layers, MessageCircle, Target, Lock, CalendarCheck } from "lucide-react";
import { whyChooseUs } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = { BookMarked, Layers, MessageCircle, Target, Lock, CalendarCheck };

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-sectionBg">
      <div className="section-container">
        <SectionHeading
          title="Why Businesses Choose Us"
          center
          titleColor="primary"
          description="A professional approach defined by accuracy, accessibility, and a genuine commitment to long-term partnership."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-borderSoft bg-white p-8 hover:shadow-card hover:border-secondary/40 hover:bg-gradient-to-br hover:from-accent/[0.06] hover:to-white transition-colors duration-300"
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-xl text-textPrimary mb-2.5">{item.title}</h3>
                  <p className="text-base text-textSecondary leading-relaxed">{item.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
