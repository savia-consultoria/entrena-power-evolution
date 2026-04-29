import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversación en WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all duration-300 group-hover:translate-x-1 sm:inline-flex">
        Chatea con nosotros
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-pulse-ring"
        />
        <svg
          viewBox="0 0 24 24"
          className="relative h-7 w-7"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M19.11 17.46c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.27 0 1.34.98 2.63 1.12 2.81.14.18 1.93 2.95 4.69 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.52-.32zM12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.42 1.32 4.91L2 22l5.4-1.42a9.78 9.78 0 0 0 4.64 1.18h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.63-1.03-5.11-2.89-6.97A9.79 9.79 0 0 0 12.04 2zm0 17.81h-.01a8.18 8.18 0 0 1-4.18-1.14l-.3-.18-3.21.84.86-3.13-.2-.32a8.16 8.16 0 0 1-1.25-4.36c0-4.51 3.67-8.18 8.19-8.18 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.79c0 4.51-3.67 8.18-8.18 8.18z" />
        </svg>
      </span>
    </a>
  );
}
