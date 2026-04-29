type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative grid h-10 w-10 place-items-center rounded-xl ${
          isLight ? "bg-white" : "bg-ink"
        }`}
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-xl bg-ember-500/90 [clip-path:polygon(0_0,100%_0,100%_45%,55%_45%,55%_100%,0_100%)]" />
        <span
          className={`relative font-display text-base font-black leading-none ${
            isLight ? "text-ink" : "text-white"
          }`}
        >
          EP
        </span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-base font-black uppercase tracking-tight ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          Entrena Power
        </span>
        <span
          className={`block font-display text-[11px] font-bold uppercase tracking-[0.32em] ${
            isLight ? "text-ember-400" : "text-ember-500"
          }`}
        >
          Evolution
        </span>
      </span>
    </div>
  );
}
