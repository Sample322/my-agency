# SEO Action Plan: my-agency-mauve.vercel.app

**Дата:** 2026-04-06
**Текущий Score:** 53/100
**Целевой Score:** 80+/100

---

## CRITICAL — исправить немедленно

### 1. Создать robots.txt
**Файл:** `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://my-agency-mauve.vercel.app/sitemap.xml
```
**Время:** 2 минуты | **Импакт:** Crawlability +15 баллов

---

### 2. Создать sitemap.xml
**Файл:** `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://my-agency-mauve.vercel.app/</loc>
    <lastmod>2026-04-06</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```
**Время:** 2 минуты | **Импакт:** Indexability

---

### 3. Создать og-image.png
Сейчас OG-теги ссылаются на `/og-image.png`, но файл не существует (в public/ есть только `og-image.html`).

**Действия:**
- Создать `public/og-image.png` (1200x630px)
- Дизайн: тёмный фон #0A0A0F, логотип, текст "AI-автоматизация для бизнеса"
- Или использовать Next.js OG Image Generation (рекомендуется)

**Время:** 15 минут | **Импакт:** Social sharing, CTR из соцсетей

---

### 4. Добавить security headers в next.config.ts
```ts
const nextConfig: NextConfig = {
  reactCompiler: true,
  images: { ... },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src https://prod.spline.design; object-src 'none'; base-uri 'self'"
        },
      ],
    },
  ],
};
```
**Время:** 5 минут | **Импакт:** Security score, trust signals

---

## HIGH — исправить в течение 1 недели

### 5. Перевести Unbounded на next/font/google
Убрать render-blocking `<link>` и заменить на оптимизированную загрузку.

**В layout.tsx:**
```tsx
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["700", "800"], // только используемые
  display: "swap",
});
```

Удалить строки с preconnect к fonts.googleapis.com и stylesheet link.

**Время:** 15 минут | **Импакт:** LCP -500-1500ms

---

### 6. Добавить FAQPage schema
В `layout.tsx` или `page.tsx` добавить второй JSON-LD блок:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Я не разбираюсь в технологиях — это проблема?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Совсем нет. Мы берём всю техническую часть на себя..."
      }
    }
  ]
}
```

**Время:** 20 минут | **Импакт:** Rich snippets в Google SERP, AI search visibility

---

### 7. Отложить загрузку Spline 3D
Spline 3D сцена загружается в hero (above-the-fold) и блокирует LCP.

**Варианты:**
- **Лучший:** Показать статичный placeholder, загрузить Spline после LCP через `requestIdleCallback`
- **Средний:** Загружать Spline только на десктопе, на мобиле показывать статику

**Время:** 1-2 часа | **Импакт:** LCP -2000-3000ms

---

### 8. Добавить метрики в кейсы
Текущие результаты слишком абстрактны:
- "Сайт приводит целевые заявки" → "Сайт приносит 40+ заявок/мес, конверсия 3.2%"
- "Оптимизированные тексты" → "CTR выросил с 1.8% до 4.5%, CPA снизился на 35%"

**Время:** 30 минут (если есть данные) | **Импакт:** E-E-A-T, конверсия

---

### 9. Укоротить meta description до 155 символов
Текущая: ~195 символов — обрезается в SERP.

**Рекомендация:**
```
Настраиваем AI-ботов для Telegram, автоматизируем продажи через n8n, создаём сайты под ключ. Внедрение от 7 дней. Консультация бесплатно.
```
(~140 символов)

**Время:** 2 минуты | **Импакт:** CTR в поиске

---

## MEDIUM — исправить в течение 1 месяца

### 10. Разделить page.tsx на Server/Client components
Убрать `'use client'` с корневого page.tsx. Вынести интерактив в отдельные client component islands.

**Время:** 2-4 часа | **Импакт:** FCP/LCP -500-1000ms, SEO (контент в HTML, а не в JS)

---

### 11. Добавить страницу "Политика конфиденциальности"
На сайте есть форма с персональными данными (имя, телефон) и текст "Нажимая кнопку, вы соглашаетесь на обработку персональных данных", но нет самой политики.

**Требуется по 152-ФЗ.**

**Время:** 1 час | **Импакт:** Compliance, trust

---

### 12. Создать apple-touch-icon.png и favicon.ico
В public/ есть только favicon.svg. Нужны:
- `apple-touch-icon.png` (180x180)
- `favicon.ico` (32x32, 16x16)

**Время:** 15 минут | **Импакт:** Branding, bookmarks

---

### 13. Исправить H1 — добавить ключевые слова
Текущий H1: "Ваши конкуренты уже автоматизировали это"
Рекомендация: "AI-автоматизация бизнеса: боты, CRM и сайты под ключ" или встроить ключевые слова в текущий H1.

**Время:** 5 минут | **Импакт:** On-page SEO

---

### 14. Согласовать trailing slash в URLs
Привести к единому формату:
- canonical: `https://my-agency-mauve.vercel.app/`
- og:url: `https://my-agency-mauve.vercel.app/`
- JSON-LD url: `https://my-agency-mauve.vercel.app/`

**Время:** 5 минут | **Импакт:** Canonical consistency

---

### 15. Убрать дефолтные файлы из public/
Удалить неиспользуемые: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

**Время:** 2 минуты | **Импакт:** Cleanliness

---

## LOW — бэклог

### 16. Создать блог / экспертный контент
Контентное ядро для SEO: статьи про AI-автоматизацию, гайды, сравнения инструментов.

### 17. Добавить отзывы клиентов
С фото, именем, компанией. Добавить Review schema.

### 18. Отключить WebGL smoke shader на мобиле
Проверить `navigator.hardwareConcurrency` или `matchMedia` и не рендерить shader на слабых устройствах.

### 19. Оптимизировать Framer Motion
Заменить CSS-анимациями в above-the-fold секциях. Оставить Framer Motion только для scroll-triggered анимаций ниже.

### 20. Рассмотреть отдельные страницы для услуг
`/services/ai-bot`, `/services/automation`, `/services/website` — для таргетинга длинных ключевых слов.

---

## Прогнозируемый Score после исправлений

| Уровень | Score |
|---------|-------|
| После CRITICAL (#1-4) | ~65/100 |
| После HIGH (#5-9) | ~75/100 |
| После MEDIUM (#10-15) | ~85/100 |
| После LOW (#16-20) | ~90+/100 |
