import type { Metadata, Viewport } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://entrenapowerevolution.mx"),
  title: "Entrena Power Evolution | Gimnasio en Querétaro",
  description:
    "Gimnasio en Querétaro con resultados reales. Entrenamiento funcional, pesas, clases y rutinas personalizadas. ⭐ 4.9 con 57 reseñas en Google. Agenda tu pase de cortesía.",
  keywords: [
    "gimnasio Querétaro",
    "Entrena Power Evolution",
    "entrenamiento funcional",
    "crossfit Querétaro",
    "gym cerca de mí",
    "rutinas personalizadas",
  ],
  authors: [{ name: "Entrena Power Evolution" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://entrenapowerevolution.mx",
    title: "Entrena Power Evolution | Gimnasio en Querétaro",
    description:
      "Transforma tu cuerpo y tu energía. Gimnasio en Querétaro con 4.9★ en Google. Agenda tu pase gratis hoy.",
    siteName: "Entrena Power Evolution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Entrena Power Evolution - Gimnasio en Querétaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrena Power Evolution | Gimnasio en Querétaro",
    description:
      "Gimnasio en Querétaro con 4.9★ en Google. Agenda tu pase gratis hoy.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://entrenapowerevolution.mx" },
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body className="bg-bone text-ink antialiased">
        {children}

        {/* Google Analytics — reemplazar GA_MEASUREMENT_ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
