import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// TODO: Заменить [Название студии] и [домен] на реальные значения
// TODO: Создать og-image.png 1200x630px и поместить в public/
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: Заменить на реальный домен
  title: "AI-автоматизация для бизнеса — ПростыеСайты | Telegram-боты, CRM, n8n",
  description:
    "Настраиваем AI-ботов, автоматизируем продажи и создаём сайты-лидогенераторы для малого и среднего бизнеса в России. Внедрение от 7 дней. Первая консультация бесплатно.",
  openGraph: {
    title: "AI-автоматизация для бизнеса — ПростыеСайты",
    description:
      "Telegram-боты с AI, автоматизация продаж, сайты под ключ. Результат от 7 дней.",
    type: "website",
    // TODO: Заменить на реальный домен
    url: "https://example.com",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // TODO: Заменить на реальный домен
  alternates: {
    canonical: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} antialiased`}>
      <head>
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
        {/* TODO: Добавить favicon — поместить favicon.ico в public/ */}
      </head>
      <body className="min-h-screen bg-[#0A0A0F]">{children}</body>
    </html>
  );
}
