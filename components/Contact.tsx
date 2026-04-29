"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Timer } from "lucide-react";
import { site } from "@/lib/site";

const services = [
  "Pesas y Fuerza",
  "Funcional & HIIT",
  "Cardio Premium",
  "Clases Grupales",
  "Coaching Personal",
  "Plan Nutricional",
  "Aún no estoy seguro",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const text = `Hola, soy ${name}. Me interesa: ${service}. Tel: ${phone}. ${message}`;
    const waUrl = `${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-bone py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="diagonal-stripes absolute inset-0 opacity-40"
      />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Agenda gratis</span>
            <h2 className="mt-4 heading-lg text-ink">
              Tu primer entrenamiento{" "}
              <span className="text-ember-500">va por la casa.</span>
            </h2>
            <p className="mt-4 text-base text-ink/70 sm:text-lg">
              Cuéntanos qué buscas y un coach se pone en contacto contigo.
              Cero compromiso, cero rollo.
            </p>

            <ul className="mt-8 space-y-4">
              <ContactItem
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp directo"
                value={site.phone}
                href={site.whatsapp}
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Llámanos"
                value={site.phone}
                href={`tel:${site.phoneDigits}`}
              />
              <ContactItem
                icon={<Timer className="h-5 w-5" />}
                label="Tiempo de respuesta"
                value="Menos de 30 minutos en horario"
              />
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-ink/8 bg-white p-7 shadow-soft sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 hidden h-20 w-20 rotate-12 rounded-2xl bg-ember-500/10 sm:block"
              />

              {submitted ? (
                <div className="grid place-items-center py-10 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-ember-50 text-ember-500">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 heading-md text-ink">
                    ¡Listo! Te abrimos WhatsApp.
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-ink/70">
                    Si no se abrió automáticamente, escríbenos directo a{" "}
                    <a
                      href={site.whatsapp}
                      className="font-bold text-ember-500 hover:underline"
                    >
                      {site.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nombre" htmlFor="name">
                      <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border border-ink/15 bg-bone px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ember-500 focus:outline-none focus:ring-4 focus:ring-ember-500/20"
                      />
                    </Field>

                    <Field label="Teléfono" htmlFor="phone">
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="442 000 0000"
                        className="w-full rounded-xl border border-ink/15 bg-bone px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ember-500 focus:outline-none focus:ring-4 focus:ring-ember-500/20"
                      />
                    </Field>
                  </div>

                  <Field label="¿En qué te podemos ayudar?" htmlFor="service">
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-ink/15 bg-bone bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%231A1A2E%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[length:14px_14px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 text-sm text-ink focus:border-ember-500 focus:outline-none focus:ring-4 focus:ring-ember-500/20"
                    >
                      <option value="" disabled>
                        Selecciona un servicio
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Mensaje" htmlFor="message" optional>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos tu objetivo o cualquier duda…"
                      className="w-full resize-none rounded-xl border border-ink/15 bg-bone px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ember-500 focus:outline-none focus:ring-4 focus:ring-ember-500/20"
                    />
                  </Field>

                  <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
                    Enviar y abrir WhatsApp
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <p className="text-xs text-ink/55">
                    Al enviar aceptas que te contactemos por WhatsApp o llamada
                    para agendar tu cita.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 flex items-center justify-between font-display text-xs font-bold uppercase tracking-wider text-ink">
        {label}
        {optional && (
          <span className="text-[10px] font-medium normal-case tracking-normal text-ink/45">
            opcional
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4 transition-all duration-200 hover:border-ember-500/30 hover:shadow-soft">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember-50 text-ember-600">
        {icon}
      </div>
      <div>
        <p className="font-display text-[11px] font-bold uppercase tracking-wider text-ink/55">
          {label}
        </p>
        <p className="font-display text-sm font-extrabold text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}
