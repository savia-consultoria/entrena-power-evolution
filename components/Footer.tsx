import { Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {site.tagline} El gimnasio en {site.city} donde entrenas con
            propósito y resultados reales.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-ember-500 hover:bg-ember-500"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-ember-500 hover:bg-ember-500"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/55">
            Enlaces rápidos
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-white/75 transition hover:text-ember-500"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/55">
            Contacto
          </p>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-ember-500"
                aria-hidden="true"
              />
              <a href={`tel:${site.phoneDigits}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-ember-500"
                aria-hidden="true"
              />
              <span>{site.address}</span>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-5 !py-2.5 text-xs"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Escríbenos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="font-display uppercase tracking-wider">
            28/4/{year} · Hecho con disciplina en Querétaro.
          </p>
        </div>
      </div>
    </footer>
  );
}
