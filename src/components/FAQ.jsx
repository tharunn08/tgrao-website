import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          center
          description="Common questions on taxation, GST, audits, registrations, and compliance."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div className="rounded-xl border border-borderSoft bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div>
                      <span className="block text-xs uppercase tracking-wide text-secondary mb-1">{faq.category}</span>
                      <span className="text-sm sm:text-base font-medium text-textPrimary">{faq.question}</span>
                    </div>
                    <Plus
                      size={18}
                      className={`shrink-0 text-secondary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-base text-textSecondary leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
