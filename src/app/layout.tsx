import type { Metadata } from "next";
import { Geist, Unbounded } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

// TODO: Обновить title, author и canonical после смены названия и покупки домена
export const metadata: Metadata = {
  metadataBase: new URL("https://my-agency-mauve.vercel.app"),
  title: "AI-автоматизация для бизнеса — ПростыеСайты | Боты, CRM, n8n",
  description:
    "Настраиваем AI-ботов для Telegram, автоматизируем продажи через n8n, создаём сайты под ключ. Внедрение от 7 дней. Консультация бесплатно.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-автоматизация для бизнеса — ПростыеСайты",
    description:
      "AI-боты, автоматизация продаж, сайты под ключ. Внедрение от 7 дней.",
  },
  other: {
    "content-language": "ru",
  },
};

// JSON-LD structured data — ProfessionalService
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://my-agency-mauve.vercel.app/#organization",
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
    url: "https://t.me/ivan_ai_studio_bot",
    availableLanguage: "Russian",
  },
  sameAs: ["https://t.me/ivan_ai_studio_bot"],
};

// JSON-LD — FAQPage (rich snippets в Google)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Я не разбираюсь в технологиях — это проблема?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Совсем нет. Мы берём всю техническую часть на себя: настройку, тестирование, запуск. Вам нужно только рассказать о своём бизнесе и ответить на наши вопросы. После запуска — покажем, как пользоваться, и останемся на связи.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько займёт внедрение?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Зависит от задачи. Простой Telegram-бот — 5-7 дней. Сайт с AI-чатом — 7-10 дней. Автоматизация продаж с интеграцией в CRM — 7-14 дней. Точный срок озвучим после первого созвона.",
      },
    },
    {
      "@type": "Question",
      name: "Что если сломается после запуска?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Исправим за рабочий день. Первый месяц после запуска — бесплатная поддержка и доработки. Далее — по тарифу поддержки или разово.",
      },
    },
    {
      "@type": "Question",
      name: "С каким бизнесом работаете?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "С любым, где есть клиенты и заявки. Особенно хорошо AI-автоматизация работает в сфере услуг: салоны красоты, клиники, онлайн-школы, строительные компании, доставка. Но мы открыты к любым задачам.",
      },
    },
    {
      "@type": "Question",
      name: "Можно начать с маленькой задачи?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Конечно. Часто начинаем с одного бота или одной автоматизации. Если результат нравится — масштабируем. Никаких обязательств продолжать.",
      },
    },
    {
      "@type": "Question",
      name: "Какой AI используете — работает ли в РФ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Используем GPT-4o-mini (через российские прокси), GigaChat от Сбера, а также open-source модели. Все решения полностью работают на территории РФ. Данные обрабатываются с соблюдением 152-ФЗ.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${unbounded.variable} antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Theme color */}
        <meta name="theme-color" content="#0a0a0f" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-[#0A0A0F]">{children}</body>
    </html>
  );
}
