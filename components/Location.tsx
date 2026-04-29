import { Clock, MapPin, Navigation } from "lucide-react";
import { site } from "@/lib/site";

export function Location() {
  return (
    <section id="ubicacion" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Ubicación</span>
            <h2 className="mt-4 heading-lg text-ink">
              Nos encontramos en{" "}
              <span className="text-ember-500">Querétaro.</span>
            </h2>
            <p className="mt-4 text-base text-ink/70 sm:text-lg">
              Ven a conocer nuestras instalaciones, te damos un tour y un pase
              de cortesía para tu primer entrenamiento.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-bone p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember-500 text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-ink/55">
                    Dirección
                  </p>
                  <p className="mt-0.5 font-display text-base font-extrabold text-ink">
                    {site.address}
                  </p>
                  <a
                    href={site.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-ember-500 hover:underline"
                  >
                    Cómo llegar
                    <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-bone p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-white">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-xs font-bold uppercase tracking-wider text-ink/55">
                      Horarios
                    </p>
                    <ul className="mt-2 divide-y divide-ink/8">
                      {site.hours.map((h) => (
                        <li
                          key={h.day}
                          className="flex items-center justify-between py-2 text-sm"
                        >
                          <span className="font-display font-bold text-ink">
                            {h.day}
                          </span>
                          <span className="font-mono text-ink/70">
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-ink/10 shadow-soft sm:h-[520px]">
              <iframe
                title={`Mapa de ${site.name}`}
                src="https://www.google.com/maps?q=Entrena+Power+Evolution+Quer%C3%A9taro&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
