import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "./components/LoadingWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riverasdelsuquia.com.ar'),
  title: "Trabajos en Almería - Oportunidades Laborales | Empleo Construcción y Carpintería Metálica",
  description: "Encuentra trabajo en Almería, España. Ofertas de empleo en construcción y carpintería metálica. Oportunidades laborales en Almería con contrato y ayuda en el proceso. ¡Aplica ahora!",
  keywords: [
    "trabajo Almería",
    "empleo Almería",
    "trabajos Almería",
    "oportunidades laborales Almería",
    "trabajo construcción Almería",
    "empleo construcción Almería",
    "carpintería metálica Almería",
    "trabajo carpintería metálica",
    "empleo España",
    "trabajos España",
    "oferta trabajo Almería",
    "buscar trabajo Almería",
    "trabajo en Almería para argentinos",
    "empleo en Almería para extranjeros",
    "trabajo construcción España",
    "empleo carpintería metálica España",
    "Riveras del Suquía",
    "trabajo con contrato Almería",
    "oportunidades laborales España"
  ],
  authors: [{ name: "Riveras del Suquía" }],
  creator: "Riveras del Suquía",
  publisher: "Riveras del Suquía",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.riverasdelsuquia.com.ar',
    siteName: 'Riveras del Suquía - Trabajos en Almería',
    title: 'Trabajos en Almería - Oportunidades Laborales | Empleo Construcción y Carpintería Metálica',
    description: 'Encuentra trabajo en Almería, España. Ofertas de empleo en construcción y carpintería metálica. Oportunidades laborales en Almería con contrato y ayuda en el proceso.',
    images: [
      {
        url: '/Copia de Copia de Riveras del sur- Isologo colores.png',
        width: 1200,
        height: 630,
        alt: 'Riveras del Suquía - Trabajos en Almería',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trabajos en Almería - Oportunidades Laborales',
    description: 'Encuentra trabajo en Almería, España. Ofertas de empleo en construcción y carpintería metálica.',
    images: ['/Copia de Copia de Riveras del sur- Isologo colores.png'],
    creator: '@riverasdelsuquia',
  },
  alternates: {
    canonical: 'https://www.riverasdelsuquia.com.ar',
  },
  category: 'Empleo',
  classification: 'Oportunidades Laborales',
  other: {
    'geo.region': 'ES-AL',
    'geo.placename': 'Almería',
    'geo.position': '36.8381;-2.4597',
    'ICBM': '36.8381, -2.4597',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos estructurados Schema.org para SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Riveras del Suquía",
    "url": "https://www.riverasdelsuquia.com.ar",
    "logo": "https://www.riverasdelsuquia.com.ar/Copia%20de%20Copia%20de%20Riveras%20del%20sur-%20Isologo%20colores.png",
    "description": "Oportunidades laborales en Almería, España. Trabajos en construcción y carpintería metálica.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressCountry": "AR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-9-351-242-9578",
      "contactType": "Recursos Humanos",
      "email": "contacto.rdelsuquia@gmail.com",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.instagram.com/riverasdelsuquia",
      "https://www.facebook.com/riverasdelsuquia",
      "https://www.riverasdelsuquia.com.ar"
    ]
  };

  const jobPostingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Trabajo en Construcción - Almería, España",
      "description": "Oportunidades laborales en construcción en Almería. Trabajos en obras, reformas y albañilería. Contrato laboral incluido.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Construcción Almería",
        "value": "CONSTRUCCION-ALMERIA-001"
      },
      "datePosted": new Date().toISOString(),
      "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Riveras del Suquía",
        "sameAs": "https://www.riverasdelsuquia.com.ar"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Almería",
          "addressRegion": "Andalucía",
          "addressCountry": "ES"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 1200,
          "maxValue": 2000,
          "unitText": "MONTH"
        }
      },
      "workHours": "40 horas semanales",
      "qualifications": "Experiencia en construcción, albañilería o reformas",
      "skills": "Construcción, Albañilería, Reformas, Trabajo en equipo"
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Trabajo en Carpintería Metálica - Almería, España",
      "description": "Oportunidades laborales en carpintería metálica en Almería. Trabajos especializados en estructuras metálicas, soldadura y montaje.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Carpintería Metálica Almería",
        "value": "CARPINTERIA-METALICA-ALMERIA-001"
      },
      "datePosted": new Date().toISOString(),
      "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Riveras del Suquía",
        "sameAs": "https://www.riverasdelsuquia.com.ar"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Almería",
          "addressRegion": "Andalucía",
          "addressCountry": "ES"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 1300,
          "maxValue": 2200,
          "unitText": "MONTH"
        }
      },
      "workHours": "40 horas semanales",
      "qualifications": "Experiencia en carpintería metálica, soldadura o estructuras metálicas",
      "skills": "Carpintería Metálica, Soldadura, Estructuras Metálicas, Montaje"
    }
  ];

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${oswald.variable} antialiased`}
      >
        <LoadingWrapper>
        {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
