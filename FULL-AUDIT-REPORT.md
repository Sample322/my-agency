# SEO-аудит: my-agency-mauve.vercel.app

**Дата:** 2026-04-06
**Тип бизнеса:** AI-студия автоматизации (B2B услуги, РФ-рынок)
**Стек:** Next.js 16, Tailwind CSS, Vercel

---

## SEO Health Score: 48 / 100

| Категория | Вес | Оценка | Взвешенный |
|-----------|-----|--------|------------|
| Technical SEO | 25% | 45/100 | 11.25 |
| Content Quality | 25% | 72/100 | 18.00 |
| On-Page SEO | 20% | 65/100 | 13.00 |
| Schema / Structured Data | 10% | 55/100 | 5.50 |
| Performance (CWV) | 10% | 25/100 | 2.50 |
| Images | 5% | 15/100 | 0.75 |
| AI Search Readiness | 5% | 40/100 | 2.00 |
| **ИТОГО** | **100%** | | **53** |

---

## Executive Summary

### Top 5 критических проблем

1. **robots.txt отсутствует (404)** — поисковые системы не имеют инструкций для краулинга
2. **sitemap.xml отсутствует (404)** — Google не может обнаружить страницы через sitemap
3. **og-image.png отсутствует (404)** — OG-теги ссылаются на несуществующий файл, шеринг в соцсетях без превью
4. **Нет security headers** (CSP, X-Frame-Options, X-Content-Type-Options) — уязвимость + негативный сигнал для поисковиков
5. **Катастрофическая производительность** — LCP 4-6с на мобиле из-за render-blocking шрифта, Spline 3D в hero, вся страница как client component

### Top 5 быстрых побед

1. Создать `public/robots.txt` + `public/sitemap.xml` (~5 минут)
2. Создать реальный `og-image.png` вместо `.html` (~10 минут)
3. Добавить security headers в `next.config.ts` (~5 минут)
4. Перевести Unbounded на `next/font/google` (~15 минут)
5. Добавить `apple-touch-icon.png` в public/ (~5 минут)

---

## 1. Technical SEO (45/100)

### Crawlability

| Проверка | Статус | Severity |
|----------|--------|----------|
| robots.txt | **404 — отсутствует** | CRITICAL |
| sitemap.xml | **404 — отсутствует** | CRITICAL |
| Canonical URL | `https://my-agency-mauve.vercel.app` (без `/`) | MEDIUM |
| HTML lang | `ru` | PASS |
| HTTP → HTTPS redirect | 308 Permanent | PASS |
| HSTS | `max-age=63072000; includeSubDomains; preload` | PASS |

### Indexability

| Проверка | Статус | Severity |
|----------|--------|----------|
| meta robots | `index, follow` | PASS |
| Страниц на сайте | 1 (SPA) | INFO |
| Внутренние ссылки | Только якорные (#products, #how и т.д.) | INFO |

### Security Headers

| Заголовок | Статус | Severity |
|-----------|--------|----------|
| Content-Security-Policy | **Отсутствует** | CRITICAL |
| X-Content-Type-Options | **Отсутствует** | HIGH |
| X-Frame-Options | **Отсутствует** | HIGH |
| Referrer-Policy | **Отсутствует** | MEDIUM |
| Permissions-Policy | **Отсутствует** | MEDIUM |
| Strict-Transport-Security | Присутствует | PASS |

### Рекомендуемая конфигурация next.config.ts:

```ts
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
```

---

## 2. Content Quality (72/100)

### E-E-A-T Assessment

| Сигнал | Статус | Заметки |
|--------|--------|---------|
| Expertise | MEDIUM | Упоминается "3+ года в digital-маркетинге", но нет конкретных кейсов с метриками |
| Experience | LOW | Кейсы без цифр результатов ("Сайт приводит целевые заявки" — слабо) |
| Authoritativeness | LOW | Нет отзывов клиентов, нет логотипов партнёров, нет сертификатов |
| Trustworthiness | MEDIUM | Работа по договору, фиксированные цены — хорошо. Но нет ИНН/ОГРН, нет юр. адреса |

### Readability

- **Язык:** Русский, понятный, без канцеляризмов — PASS
- **Длина страницы:** Достаточная для landing page — PASS
- **Структура:** Логичная последовательность секций — PASS

### Проблемы контента

| Проблема | Severity |
|----------|----------|
| Кейсы без конкретных метрик (конверсия, ROI, кол-во заявок) | HIGH |
| Нет отзывов/testimonials | HIGH |
| Нет страницы "О компании" или "Политика конфиденциальности" | MEDIUM |
| Нет блога/статей (нет контентного ядра для SEO) | MEDIUM |

---

## 3. On-Page SEO (65/100)

### Title Tag
```
AI-автоматизация для бизнеса — ПростыеСайты | Боты, CRM, n8n
```
- Длина: ~58 символов — PASS
- Ключевые слова в начале — PASS
- Брендинг — PASS

### Meta Description
```
Настраиваем AI-ботов для MAX и Telegram, автоматизируем продажи через n8n и создаём сайты-лидогенераторы для малого и среднего бизнеса в России. Внедрение от 7 дней. Первая консультация — бесплатно.
```
- Длина: ~195 символов — чуть длинно, обрежется в SERP (рекомендация: до 155)
- CTA в описании — PASS
- Ключевые слова — PASS

### Heading Structure

| Уровень | Текст | Статус |
|---------|-------|--------|
| H1 | "Ваши конкуренты уже автоматизировали это" | WARN — не содержит ключевых слов |
| H2 | "Это точно про вас?" | PASS |
| H2 | "Что именно мы делаем" | PASS |
| H2 | "Как это происходит" | PASS |
| H2 | "Кто за этим стоит" | PASS |
| H2 | "Наши решения" | PASS |
| H2 | "Тарифы на поддержку" | PASS |
| H2 | "Частые вопросы" | PASS |
| H2 | "Обсудим ваш проект?" | PASS |

**Проблема H1:** Текст `<h1>` — "Ваши конкуренты уже автоматизировали это" — эмоционален, но не содержит ключевых слов ("AI-автоматизация", "боты", "бизнес"). Badge `<span>` выше с "AI-автоматизация для малого и среднего бизнеса" не является H1.

### Internal Linking

- Все ссылки — якорные (#products, #how, #cases, #faq)
- Нет дополнительных страниц для внутренней перелинковки
- **Рекомендация:** Создать отдельные страницы для услуг, кейсов, блога

---

## 4. Schema / Structured Data (55/100)

### Текущая реализация

```json
{
  "@type": "ProfessionalService",
  "name": "ПростыеСайты",
  "priceRange": "от 35 000 ₽",
  "areaServed": { "@type": "Country", "name": "Россия" },
  "serviceType": ["AI-автоматизация", "Разработка чат-ботов", ...]
}
```

### Проблемы

| Проблема | Severity |
|----------|----------|
| Нет `@id` — может вызвать проблемы при расширении | LOW |
| Нет `address` — Google предпочитает LocalBusiness/ProfessionalService с адресом | MEDIUM |
| Нет `aggregateRating` или `review` | MEDIUM |
| Нет `openingHoursSpecification` | LOW |
| Нет `FAQPage` schema для FAQ-секции | HIGH |
| Нет `Service` schema для отдельных услуг | MEDIUM |
| Нет `BreadcrumbList` | LOW |

### Рекомендуемые дополнения

1. **FAQPage schema** — даст rich snippets в Google (вопросы/ответы прямо в SERP)
2. **Service schema** — для каждой из 4 услуг
3. **Offer schema** — для тарифов поддержки

---

## 5. Performance / Core Web Vitals (25/100)

### Оценочные показатели (мобильные)

| Метрика | Оценка | Порог | Статус |
|---------|--------|-------|--------|
| LCP | 4.0-6.0s | <=2.5s | POOR |
| INP | 200-400ms | <=200ms | NEEDS IMPROVEMENT |
| CLS | 0.05-0.15 | <=0.1 | BORDERLINE |
| FCP | 3.0-4.0s | <=1.5s | POOR |
| TBT | 500-1000ms | <=200ms | POOR |

### Причины плохой производительности

1. **CRITICAL: Render-blocking Google Fonts** — Unbounded загружается через `<link>` вместо `next/font/google`
2. **CRITICAL: Spline 3D в hero** — многомегабайтная 3D-сцена блокирует LCP
3. **HIGH: Вся страница — `'use client'`** — весь контент рендерится через JS, нет SSR
4. **HIGH: WebGL smoke shader** — непрерывная нагрузка на GPU
5. **HIGH: Framer Motion на каждой секции** — ~40-80KB gzipped к бандлу

### Bundle Assessment

| Зависимость | Примерный вес (gzip) |
|-------------|---------------------|
| React + React DOM | ~45KB |
| Framer Motion | ~40KB |
| @splinetool/react-spline | ~100KB+ |
| Lucide React (21 иконка) | ~8KB |
| canvas-confetti | ~6KB |
| @number-flow/react | ~5KB |
| **Общий JS (оценка)** | **~250-350KB** |

**Бюджет для landing page: <150KB gzipped** — превышен в 2x.

---

## 6. Images (15/100)

| Проблема | Severity |
|----------|----------|
| **og-image.png отсутствует** — в `/public/` есть только `og-image.html` | CRITICAL |
| **apple-touch-icon.png отсутствует** в public/ | MEDIUM |
| **favicon.ico отсутствует** в public/ | MEDIUM |
| Нет `<img>` тегов на странице вообще | INFO |
| Нет hero-изображения для LCP | MEDIUM |

### Файлы в public/:
```
favicon.svg, file.svg, globe.svg, next.svg, og-image.html, vercel.svg, window.svg
```

Файлы `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — это дефолтные файлы Next.js, не используются. Рекомендуется удалить.

---

## 7. AI Search Readiness (40/100)

### Citability Assessment

| Фактор | Статус |
|--------|--------|
| Чёткие ответы на вопросы (FAQ) | PASS — 6 вопросов с ответами |
| Структурированные данные | PARTIAL — есть ProfessionalService, нет FAQPage |
| Уникальный экспертный контент | LOW — нет статей, блога, гайдов |
| Конкретные цифры и факты | LOW — мало метрик в кейсах |
| Авторитетность (backlinks, упоминания) | UNKNOWN |

### Рекомендации для AI-поисковиков

1. Добавить FAQPage schema — AI-системы активно используют structured FAQ
2. Добавить конкретные метрики в кейсы
3. Создать экспертный контент (блог) по теме AI-автоматизации
4. Добавить `robots.txt` с явным разрешением для AI-ботов

---

## Canonical URL Issue

Текущий canonical: `https://my-agency-mauve.vercel.app` (без trailing slash)
OG URL: `https://my-agency-mauve.vercel.app` (без trailing slash)
JSON-LD URL: `https://my-agency-mauve.vercel.app/` (с trailing slash)

**Проблема:** Несогласованность trailing slash между canonical/og и JSON-LD. Нужно привести к единому формату.
