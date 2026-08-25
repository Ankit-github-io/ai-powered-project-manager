// components/features/LogoStrip.tsx
export function LogoStrip() {
  const logos = ["Linear", "Vercel", "Stripe", "Figma", "Notion", "Loom"];
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale mb-20">
      {logos.map((logo) => (
        <span key={logo} className="text-xl font-bold text-white tracking-tighter">{logo}</span>
      ))}
    </div>
  );
}