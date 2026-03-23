import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// TODO: Обновить title, author и canonical после смены названия и покупки домена
export const metadata: Metadata = {
  metadataBase: new URL("https://my-agency-mauve.vercel.app"),
  title: "AI-автоматизация для бизнеса — ПростыеСайты | Боты, CRM, n8n",
  description:
    "Настраиваем AI-ботов для MAX и Telegram, автоматизируем продажи через n8n и создаём сайты-лидогенераторы для малого и среднего бизнеса в России. Внедрение от 7 дней. Первая консультация — бесплатно.",
  keywords: [
    "AI автоматизация",
    "бот для бизнеса",
    "чат-бот Telegram",
    "бот MAX",
    "n8n автоматизация",
    "CRM интеграция",
    "автоматизация продаж",
    "сайт под ключ",
    "AI для малого бизнеса",
    "автоматизация заявок",
  ],
  authors: [{ name: "ПростыеСайты" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://my-agency-mauve.vercel.app/",
  },
  openGraph: {
    type: "website",
    title: "AI-автоматизация для бизнеса — ПростыеСайты",
    description:
      "AI-боты, автоматизация продаж, сайты под ключ. Внедрение от 7 дней. Адаптировано для РФ.",
    url: "https://my-agency-mauve.vercel.app/",
    siteName: "ПростыеСайты",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ПростыеСайты — AI-автоматизация для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-автоматизация для бизнеса — ПростыеСайты",
    description:
      "AI-боты, автоматизация продаж, сайты под ключ. Внедрение от 7 дней.",
    images: ["/og-image.png"],
  },
  other: {
    "content-language": "ru",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ПростыеСайты",
  description:
    "AI-автоматизация для малого и среднего бизнеса: боты для Telegram и MAX, автоматизация продаж через n8n, сайты-лидогенераторы",
  url: "https://my-agency-mauve.vercel.app/",
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  serviceType: [
    "AI-автоматизация",
    "Разработка чат-ботов",
    "Автоматизация продаж",
    "Создание сайтов",
  ],
  priceRange: "от 35 000 ₽",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://t.me/l_lsamplel_l",
    availableLanguage: "Russian",
  },
  sameAs: ["https://t.me/l_lsamplel_l"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect & preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Theme color */}
        <meta name="theme-color" content="#0a0a0f" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-[#0A0A0F]">{children}</body>
    </html>
  );
}
