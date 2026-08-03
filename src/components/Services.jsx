import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Receipt, FileStack, ShieldCheck, Building2, BookOpenCheck,
  Rocket, ShieldAlert, Cpu, ArrowRight,
} from "lucide-react";
import { serviceCategories } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  Receipt, FileStack, ShieldCheck, Building2, BookOpenCheck, Rocket, ShieldAlert, Cpu,
};

function ServiceCard({ category, index }) {
  const Icon = icons[category.icon];

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Link to={`/services/${category.id}`} className="block h-full">
        <motion.div
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group h-full rounded-2xl border border-borderSoft bg-white shadow-soft hover:shadow-card hover:border-secondary/40 hover:bg-gradient-to-br hover:from-accent/[0.06] hover:to-white transition-colors duration-300 overflow-hidden"
        >
          <div className="flex items-start gap-5 p-7">
            <div className="shrink-0 h-14 w-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Icon size={24} strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl text-textPrimary mb-1.5">{category.title}</h3>
              <p className="text-base text-textSecondary leading-relaxed mb-3">{category.intro}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                View services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Services, Organised by Practice Area"
          description="Rao and Co. offers a comprehensive range of professional services across taxation, audit, compliance, and business advisory. Select a category to view the specific services within it."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
