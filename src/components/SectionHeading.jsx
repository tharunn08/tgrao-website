import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, center = false, titleColor = "dark" }) {
  const colorClass = titleColor === "primary" ? "text-primary" : "text-textPrimary";
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-16`}>
      {eyebrow && (
        <p className="text-base font-medium tracking-[0.2em] uppercase text-secondary mb-4">{eyebrow}</p>
      )}
      <h2 className={`font-heading text-4xl sm:text-5xl ${colorClass} mb-4`}>{title}</h2>
      {description && <p className="text-lg text-textSecondary leading-relaxed">{description}</p>}
    </Reveal>
  );
}
