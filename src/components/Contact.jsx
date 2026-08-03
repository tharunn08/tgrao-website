import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Link2, Send, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  "Income Tax Return Filing",
  "GST Registration & Filing",
  "Statutory / Tax / Internal Audit",
  "Company / LLP Incorporation",
  "Accounting & Bookkeeping",
  "Business & Startup Advisory",
  "Risk Advisory",
  "Other",
];

const CA_EMAIL = "tejas.raoandco@gmail.com";
const CA_WHATSAPP = "918296260601";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  company: "",
  service: services[0],
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sentVia, setSentVia] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.setCustomValidity("");

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    const lines = [
      "New Consultation Request — T G Rao and Co. Website",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      `Service Required: ${form.service}`,
      "",
      "Message:",
      form.message || "-",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const isValidPhone = (value) => /^[0-9]{10}$/.test(value);
  const isValidGmail = (value) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);

  const handleSend = (channel) => {
    const phoneField = formRef.current.elements.phone;
    const emailField = formRef.current.elements.email;

    phoneField.setCustomValidity(
      isValidPhone(form.phone) ? "" : "Please enter a valid 10-digit phone number."
    );
    emailField.setCustomValidity(
      isValidGmail(form.email) ? "" : "Please enter a valid @gmail.com email address."
    );

    if (!formRef.current.reportValidity()) return;

    const message = buildMessage();

    if (channel === "whatsapp") {
      window.open(`https://wa.me/${CA_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    } else {
      const subject = `Consultation Request — ${form.service}`;
      window.location.href = `mailto:${CA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
    setSentVia(channel);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-sectionBg">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Book Your Session"
          description="Tell us a little about your requirement and we'll get back to you promptly."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-borderSoft bg-white p-8 md:p-10 shadow-soft space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-textSecondary mb-2">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full rounded-lg border border-borderSoft px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-textSecondary mb-2">Phone</label>
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onInvalid={(e) => e.target.setCustomValidity("Please enter a valid 10-digit phone number.")}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Enter a valid 10-digit phone number"
                    className="w-full rounded-lg border border-borderSoft px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-textSecondary mb-2">Email</label>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onInvalid={(e) => e.target.setCustomValidity("Please enter a valid @gmail.com email address.")}
                  type="email"
                  pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                  title="Enter a valid @gmail.com email address"
                  className="w-full rounded-lg border border-borderSoft px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                  placeholder="yourname@gmail.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-textSecondary mb-2">Company (Optional)</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border border-borderSoft px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-textSecondary mb-2">Service Required</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-borderSoft px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-secondary transition-colors bg-white"
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-textSecondary mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-borderSoft px-4 py-3 text-sm text-textPrimary focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Briefly describe your requirement"
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => handleSend("whatsapp")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-medium text-white hover:brightness-95 transition-all shadow-soft"
                >
                  Send via WhatsApp <MessageCircle size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => handleSend("email")}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white hover:bg-secondary transition-colors shadow-soft"
                >
                  Send via Email <Send size={15} />
                </button>
              </div>

              {sentVia === "whatsapp" && (
                <p className="text-sm text-secondary pt-1">
                  WhatsApp is opening in a new tab with your request pre-filled — just hit send there.
                </p>
              )}
              {sentVia === "email" && (
                <p className="text-sm text-secondary pt-1">
                  Your email app should now be open with this request addressed to CA Tejas G Rao — just hit send.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="rounded-2xl border border-borderSoft bg-white p-8 md:p-10 h-full shadow-soft">
              <h3 className="font-heading text-xl text-textPrimary mb-1">T G Rao and Co.</h3>
              <p className="text-sm text-secondary font-medium mb-8">CA Tejas G Rao</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary mb-0.5">Email</p>
                    <a href="mailto:tejas.raoandco@gmail.com" className="text-sm font-medium text-textPrimary hover:text-secondary">
                      tejas.raoandco@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary mb-0.5">Phone</p>
                    <a href="tel:+918296260601" className="text-sm font-medium text-textPrimary hover:text-secondary">
                      +91 82962 60601
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary mb-0.5">Location</p>
                    <a
                      href="https://maps.app.goo.gl/5EC82xGBTRnEDxms9?g_st=ac"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-textPrimary hover:text-secondary"
                    >
                      Rajarajeshwari Nagar, Bengaluru – 560098
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <Link2 size={17} />
                  </div>
                  <div>
                    <p className="text-sm text-textSecondary mb-0.5">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/ca-tejas-g-rao-27774726b"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-textPrimary hover:text-secondary"
                    >
                      CA Tejas G Rao
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-borderSoft grid grid-cols-2 gap-4 text-sm text-textSecondary">
                <div>
                  <p className="uppercase tracking-wide mb-1">Firm Reg. No.</p>
                  <p className="text-sm font-medium text-textPrimary">031712S</p>
                </div>
                <div>
                  <p className="uppercase tracking-wide mb-1">Membership No.</p>
                  <p className="text-sm font-medium text-textPrimary">294471</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}