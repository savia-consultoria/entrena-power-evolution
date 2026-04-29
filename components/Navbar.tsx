"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>

      <div className="container-x flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label={site.name} className="shrink-0">
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                scrolled
                  ? "text-ink/80 hover:text-ember-500"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneDigits}`}
            className={`inline-flex items-center gap-2 whitespace-nowrap font-display text-sm font-bold uppercase tracking-wider transition-colors ${
              scrolled
                ? "text-ink hover:text-ember-500"
                : "text-white/90 hover:text-white"
            }`}
            aria-label={`Llamar al ${site.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </a>
          <a href="#contacto" className="btn-primary !px-6 !py-3 text-sm">
            Agenda gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`grid h-11 w-11 place-items-center rounded-xl border transition lg:hidden ${
            scrolled
              ? "border-ink/15 bg-white text-ink hover:bg-ink hover:text-white"
              : "border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-ink"
          }`}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="border-t border-ink/10 bg-white px-5 pb-8 pt-4 shadow-soft">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-display text-base font-bold uppercase tracking-wide text-ink hover:bg-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <a
              href={`tel:${site.phoneDigits}`}
              className="btn-secondary !py-3 text-sm"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary !py-3 text-sm"
            >
              Agenda tu pase gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
