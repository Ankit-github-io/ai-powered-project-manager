export function RadialGlow() {
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-255 h-125">
      <div className="absolute inset-0 bg-gradient-radial from-emerald-600/20 via-emerald-600/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
