import Image from "next/image";
import {
  Award,
  Clock,
  Flame,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Coaches certificados",
    desc: "Profesionales con experiencia real, no improvisados. Te guían sin dejarte solo en máquinas.",
  },
  {
    icon: Clock,
    title: "Horario amplio",
    desc: "Abrimos antes y cerramos tarde para que entrenes cuando tu vida lo permita.",
  },
  {
    icon: ShieldCheck,
    title: "Higiene impecable",
    desc: "Equipo limpio, vestidores cuidados y un ambiente que da gusto pisar todos los días.",
  },
  {
    icon: Sparkles,
    title: "Comunidad real",
    desc: "Aquí no eres un número. Te saludamos, te impulsamos y celebramos tus avances.",
  },
];

export function WhyUs() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-ink py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-ember-500/15 blur-3xl"
      />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow !border-white/20 !bg-white/5 !text-white/80">
              Por qué nosotros
            </span>
            <h2 className="mt-4 heading-lg">
              No es solo un gym.
              <br />
              <span className="text-ember-500">Es un cambio real.</span>
            </h2>

            <div className="mt-7 inline-flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ember-500">
                <Flame
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ember-500">
                  Tu primer mes con plan
                </p>
                <p className="mt-1 font-display text-base font-bold">
                  Evaluación + rutina diseñada para ti
                </p>
                <p className="mt-1 text-xs text-white/65">
                  Empiezas con un coach que entiende tu meta y arma tu progreso desde el día uno.
                </p>
              </div>
            </div>

            <div className="relative mt-10 hidden overflow-hidden rounded-3xl border border-white/10 lg:block">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80"
                alt="Comunidad entrenando junta en Entrena Power Evolution"
                width={1400}
                height={900}
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-ember-500">
                  Comunidad EPE
                </p>
                <p className="mt-1 font-display text-xl font-extrabold">
                  +500 miembros entrenando contigo.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <li
                  key={r.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-ember-500/40 hover:bg-white/10"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-ember-500 text-white transition-transform duration-300 group-hover:scale-105">
                    <r.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {r.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Stat value="+500" label="Miembros activos" />
              <Stat value="60+" label="Equipos profesionales" />
              <Stat value="7" label="Días a la semana" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-black text-ember-500 sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-white/65 sm:text-xs">
        {label}
      </p>
    </div>
  );
}
