import { motion } from "framer-motion";
import { Award, MapPin, User } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { label: "Firm Registration No.", value: "031712S" },
  { label: "Founder", value: "CA Tejas G Rao" },
  { label: "Membership No.", value: "294471" },
  { label: "Location", value: "Rajarajeshwari Nagar, Bengaluru" },
];

const approach = [
  {
    title: "Precision",
    description:
      "We study the applicable law, read the current provisions, and deliver advice that is legally accurate and specifically tailored to your situation.",
  },
  {
    title: "Structure",
    description:
      "Every engagement follows a defined workflow, from documentation requirements to filing timelines, so nothing falls through the cracks.",
  },
  {
    title: "Partnership",
    description:
      "We aim to be a long-term professional partner, not a one-time service provider. Clients can reach us at any stage.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-sectionBg">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Us"
          title="About T G Rao and Co."
          description="A Bengaluru-based Chartered Accountancy practice built on the conviction that businesses and entrepreneurs deserve more than routine compliance."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-3 space-y-6">
            <p className="text-textSecondary leading-relaxed">
              T G Rao and Co. is a Bengaluru-based Chartered Accountants founded and led by CA Tejas G Rao.
              The practice serves a diverse clientele of businesses, startups, entrepreneurs, and individuals across
              Bengaluru, providing services spanning direct taxation, indirect taxation, audit and assurance, and
              end-to-end business setup and regulatory compliance.
            </p>
            <p className="text-textSecondary leading-relaxed">
              Every engagement is approached with precision, regulatory correctness, and a commitment to practical
              solutions aligned with the client's long-term interests. Supported by a team of two qualified
              Chartered Accountants, the practice combines technical rigour with a responsive, client-first approach
              — ensuring matters are handled accurately and delivered on time, every time.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {approach.map((item) => (
                <div key={item.title} className="rounded-2xl border border-borderSoft bg-white p-6 shadow-soft hover:shadow-card hover:border-secondary/40 hover:bg-accent/[0.06] hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-heading text-xl text-primary mb-2">{item.title}</h4>
                  <p className="text-base text-textSecondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-3xl border border-borderSoft bg-white shadow-card hover:shadow-soft hover:border-secondary/40 overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white/15 backdrop-blur flex items-center justify-center border border-white/30">
                  <User size={40} className="text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl text-textPrimary mb-1">CA Tejas G Rao</h3>
                <p className="text-sm text-secondary font-medium mb-5">Principal &amp; Founder</p>
                <p className="text-base text-textSecondary leading-relaxed mb-6">
                  A qualified Chartered Accountant (ICAI Membership No. 294471) with a strong foundation in audit,
                  taxation, and financial reporting, built through experience in a leading global accounting and
                  advisory network — spanning statutory audits, tax audits, special purpose audits, and limited
                  reviews.
                </p>
                <div className="space-y-4 border-t border-borderSoft pt-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-start justify-between gap-4">
                      <span className="text-xs uppercase tracking-wide text-textSecondary">{stat.label}</span>
                      <span className="text-sm font-medium text-textPrimary text-right">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
