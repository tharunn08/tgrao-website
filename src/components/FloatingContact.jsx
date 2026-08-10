import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, X, Plus } from "lucide-react";

const WHATSAPP_NUMBER = "918296260601";
const PHONE_NUMBER = "+918296260601";
const EMAIL = "tejas@tgraoandco.in";
const MAPS_LINK = "https://maps.app.goo.gl/5EC82xGBTRnEDxms9?g_st=ac";

const actions = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    bg: "bg-[#25D366]",
  },
  {
    label: "Call Us",
    icon: Phone,
    href: `tel:${PHONE_NUMBER}`,
    bg: "bg-primary",
  },
  {
    label: "Email Us",
    icon: Mail,
    href: `mailto:${EMAIL}`,
    bg: "bg-secondary",
  },
  {
    label: "Location",
    icon: MapPin,
    href: MAPS_LINK,
    bg: "bg-accent",
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.label === "Location" ? "_blank" : undefined}
                rel={action.label === "Location" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 12, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.85 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                whileHover={{ scale: 1.08 }}
                className="group flex items-center gap-3"
              >
                <span className="rounded-full bg-white border border-borderSoft px-3 py-1.5 text-xs font-medium text-textPrimary shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {action.label}
                </span>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-card ${action.bg}`}
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
              </motion.a>
            );
          })}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle contact options"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-card"
      >
        <motion.span
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Plus size={24} />
        </motion.span>
      </motion.button>
    </div>
  );
}
