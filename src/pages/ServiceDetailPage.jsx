import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Receipt, FileStack, ShieldCheck, Building2, BookOpenCheck,
  Rocket, ShieldAlert, Cpu, ArrowLeft, ArrowUpRight,
} from "lucide-react";
import { serviceCategories } from "../data/content";
import Reveal from "../components/Reveal";

const icons = {
  Receipt, FileStack, ShieldCheck, Building2, BookOpenCheck, Rocket, ShieldAlert, Cpu,
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const category = serviceCategories.find((c) => c.id === serviceId);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const Icon = icons[category.icon];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <Reveal>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to All Services
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="flex items-start gap-6 mb-6 max-w-3xl">
          <div className="shrink-0 h-16 w-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
            <Icon size={28} strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl text-textPrimary mb-3">{category.title}</h1>
            <p className="text-lg text-textSecondary leading-relaxed">{category.intro}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {category.subServices.map((sub, index) => (
            <Reveal key={sub.title} delay={(index % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-borderSoft bg-white p-7 shadow-soft hover:shadow-card hover:border-secondary/40 hover:bg-gradient-to-br hover:from-accent/[0.06] hover:to-white transition-colors duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 h-9 w-9 mt-0.5 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight size={16} />
                  </span>
                  <h3 className="font-heading text-lg text-textPrimary pt-1.5">{sub.title}</h3>
                </div>
                <p className="text-base text-textSecondary leading-relaxed">{sub.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 rounded-2xl border border-borderSoft bg-sectionBg p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-heading text-xl text-textPrimary mb-1.5">Need help with {category.title.toLowerCase()}?</h4>
            <p className="text-base text-textSecondary">Book a session with CA Tejas G Rao to discuss your specific requirement.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white hover:bg-secondary transition-colors shadow-soft"
          >
            Book Your Session
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
