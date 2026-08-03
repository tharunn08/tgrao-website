import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { serviceCategories } from "../data/content";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-soft">
      <div className="section-container flex items-center justify-between h-24">
        <Link to="/" className="flex items-center gap-4">
          <span className="flex items-center justify-center h-20 w-20 rounded-xl bg-white p-0.5 shadow-soft shrink-0">
            <img src="/assets/logo.png" alt="T G Rao and Co." className="h-full w-full object-contain" />
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading text-3xl text-white tracking-tight">T G Rao and Co.</span>
            <span className="text-xs uppercase tracking-[0.15em] text-white/70">Chartered Accountants</span>
          </div>
        </Link>

        <div className="flex items-center gap-9">
          <nav className="hidden md:flex items-center gap-9">
            {links.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-base font-medium transition-colors ${
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown size={15} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[300px]"
                      >
                        <div className="rounded-xl border border-borderSoft bg-white shadow-card p-3">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.id}
                              to={`/services/${category.id}`}
                              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-textPrimary hover:bg-accent/[0.08] hover:text-secondary transition-colors"
                            >
                              {category.title}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="mt-1 block rounded-lg px-4 py-2.5 text-sm font-semibold text-primary hover:bg-accent/[0.08] transition-colors border-t border-borderSoft"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-white px-7 py-3 text-base font-medium text-primary transition-all duration-300 shadow-soft hover:scale-[1.04]"
          >
            Book Your Session
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-primary border-t border-white/15"
          >
            <div className="section-container flex flex-col gap-5 py-6">
              {links.map((link) =>
                link.label === "Services" ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      Services
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pt-4 pl-3">
                            {serviceCategories.map((category) => (
                              <Link
                                key={category.id}
                                to={`/services/${category.id}`}
                                onClick={() => setOpen(false)}
                                className="text-sm text-white/70 hover:text-white transition-colors"
                              >
                                {category.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:scale-[1.04]"
              >
                Book Your Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}