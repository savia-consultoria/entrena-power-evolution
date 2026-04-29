import {
  Activity,
  Dumbbell,
  Flame,
  HeartPulse,
  Salad,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Pesas y Fuerza",
    desc: "Área completa de musculación con equipo profesional para hipertrofia, fuerza máxima y potencia.",
  },
  {
    icon: Flame,
    title: "Funcional & HIIT",
    desc: "Sesiones explosivas de alta intensidad que mejoran resistencia, agilidad y queman grasa rápido.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Premium",
    desc: "Caminadoras, escaladoras, remos y bicis de última generación para el sistema cardiovascular.",
  },
  {
    icon: Users,
    title: "Clases Grupales",
    desc: "Spinning, boxeo, yoga y zumba dirigidos por coaches certificados con horarios flexibles.",
  },
  {
    icon: Activity,
    title: "Coaching Personal",
    desc: "Plan de entrenamiento 1:1 ajustado a tu nivel, tus tiempos y la meta que tú quieres alcanzar.",
  },
  {
    icon: Salad,
    title: "Plan Nutricional",
    desc: "Asesoría alimenticia complementaria para potenciar resultados y construir hábitos sostenibles.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-bone py-20 md:py-28"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-4 heading-lg text-ink">
            Todo lo que necesitas, <span className="text-ember-500">bajo un mismo techo.</span>
          </h2>
          <p className="mt-4 text-base text-ink/70 sm:text-lg">
            Programas pensados para llevarte del primer día al mejor cuerpo de
            tu vida.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-ember-500/30 hover:shadow-ember"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ember-500/0 transition-colors duration-500 group-hover:bg-ember-500/10"
                />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-white transition-transform duration-300 group-hover:scale-105 group-hover:bg-ember-500">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {s.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-ember-500">
                    <span>Ver más</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
