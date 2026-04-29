import { Quote, Star } from "lucide-react";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Mariana Hernández",
    initials: "MH",
    rating: 5,
    text: "El mejor gimnasio al que he ido en Querétaro. El equipo siempre limpio, los entrenadores muy atentos y el ambiente súper motivador. He visto resultados en muy poco tiempo.",
    time: "Hace 2 semanas",
  },
  {
    name: "Carlos Rivera",
    initials: "CR",
    rating: 5,
    text: "Llevo 8 meses entrenando aquí y la verdad superó mis expectativas. Las clases funcionales son retadoras y los coaches saben explicar muy bien cada ejercicio. 100% recomendado.",
    time: "Hace 1 mes",
  },
  {
    name: "Andrea López",
    initials: "AL",
    rating: 5,
    text: "Me encanta la energía del lugar. La comunidad es bien chida, te hace sentir parte desde el primer día. Tienen muy buen equipo y horarios accesibles para los que trabajamos.",
    time: "Hace 3 semanas",
  },
];

export function Reviews() {
  return (
    <section id="resenas" className="bg-bone py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Reseñas reales</span>
            <h2 className="mt-4 heading-lg text-ink">
              Lo que dicen nuestros{" "}
              <span className="text-ember-500">miembros.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-ink/70 sm:text-lg">
              {site.reviews} reseñas verificadas en Google avalan lo que pasa
              cuando entrenas con nosotros.
            </p>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-ink/10 bg-white px-5 py-4 shadow-soft">
              <GoogleG className="h-8 w-8" />
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-1 font-display text-base font-black text-ink">
                    {site.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-ink/60">
                  {site.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-ember"
            >
              <Quote
                className="h-7 w-7 text-ember-500"
                aria-hidden="true"
              />
              <p className="mt-5 grow text-base leading-relaxed text-ink/85">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-ink/8 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-sm font-black text-white">
                  {r.initials}
                </div>
                <div className="flex-1">
                  <p className="font-display text-sm font-bold text-ink">
                    {r.name}
                  </p>
                  <p className="text-xs text-ink/55">{r.time}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.75c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.12a6.62 6.62 0 010-4.23V7.05H2.18a11 11 0 000 9.9l3.66-2.83z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}
