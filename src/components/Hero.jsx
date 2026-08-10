import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sectionBg to-white" />
      <div className="section-container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base font-medium tracking-[0.2em] uppercase text-secondary mb-5"
          >
            Chartered Accountants · Bengaluru
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-textPrimary mb-6"
          >
            Your Trusted Partner For All Your Professional Needs
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg text-textSecondary leading-relaxed mb-10 max-w-xl"
          >
            Providing reliable taxation, audit, compliance, and business advisory services with accuracy,
            professionalism, and a client-first approach.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-white hover:bg-secondary transition-colors shadow-soft"
            >
              Book Your Session <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-3xl border border-borderSoft bg-white shadow-card p-8 md:p-10">
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-secondary/5 -z-10" />
            <div className="flex items-center justify-between mb-8">
              <span className="font-heading text-xl text-primary">Firm Snapshot</span>
              <div className="h-2 w-2 rounded-full bg-secondary" />
            </div>
            <dl className="rounded-xl border border-slate-300 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-slate-300 border-b border-slate-300">
                <dt className="text-base text-textSecondary px-4 py-3.5">Firm Registration No.</dt>
                <dd className="text-sm font-medium text-textPrimary px-4 py-3.5 text-right">031712S</dd>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-300 border-b border-slate-300">
                <dt className="text-base text-textSecondary px-4 py-3.5">Founder</dt>
                <dd className="text-sm font-medium text-textPrimary px-4 py-3.5 text-right">CA Tejas G Rao</dd>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-300 border-b border-slate-300">
                <dt className="text-base text-textSecondary px-4 py-3.5">Membership No.</dt>
                <dd className="text-sm font-medium text-textPrimary px-4 py-3.5 text-right">294471</dd>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-300">
                <dt className="text-base text-textSecondary px-4 py-3.5">Location</dt>
                <dd className="text-sm font-medium text-textPrimary px-4 py-3.5 text-right">Rajarajeshwari Nagar, Bengaluru</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
