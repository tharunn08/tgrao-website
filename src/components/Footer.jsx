import { Link } from "react-router-dom";
import { Mail, Link2, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-footerBg border-t border-borderSoft py-14">
      <div className="section-container">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/logo.png" alt="T G Rao and Co." className="h-14 w-auto object-contain" />
              <span className="font-heading text-xl text-primary">T G Rao and Co.</span>
            </div>
            <p className="text-base text-textSecondary leading-relaxed max-w-xs">
              Chartered Accountants offering taxation, audit, compliance, and business advisory services in Bengaluru.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-textSecondary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-textPrimary/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wide text-textSecondary mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:tejas.raoandco@gmail.com" className="flex items-center gap-2 text-sm text-textPrimary/80 hover:text-secondary transition-colors">
                <Mail size={14} /> tejas@tgraoandco.in
              </a>
              <a href="tel:+918296260601" className="flex items-center gap-2 text-sm text-textPrimary/80 hover:text-secondary transition-colors">
                <Phone size={14} /> +91 82962 60601
              </a>
              <a
                href="https://maps.app.goo.gl/5EC82xGBTRnEDxms9?g_st=ac"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-textPrimary/80 hover:text-secondary transition-colors"
              >
                <MapPin size={14} /> Rajarajeshwari Nagar, Bengaluru
              </a>
              <a
                href="https://www.linkedin.com/in/ca-tejas-g-rao-27774726b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-textPrimary/80 hover:text-secondary transition-colors"
              >
                <Link2 size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-borderSoft text-center text-sm text-textSecondary">
          © {new Date().getFullYear()} T G Rao and Co. All Rights Reserved.
        </div>
      </div>
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />
    </footer>
  );
}
