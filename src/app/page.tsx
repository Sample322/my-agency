'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Bot,
  Zap,
  Globe,
  BarChart3,
  MessageCircle,
  Package,
  Workflow,
  Briefcase,
  HelpCircle,
  Box,
  Search,
  Building2,
  GraduationCap,
  Wrench,
} from 'lucide-react';

import { NavBar } from '@/components/ui/tubelight-navbar';
import { GlowCard } from '@/components/ui/spotlight-card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { FaqSection } from '@/components/ui/faq';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Pricing } from '@/components/ui/pricing';
import { Footerdemo } from '@/components/ui/footer-section';
import { Timeline } from '@/components/ui/timeline';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { Card } from '@/components/ui/card';

/* ─── Animated Section wrapper ─── */
function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */

const TG = 'https://t.me/l_lsamplel_l';

const navItems = [
  { name: 'Продукты', url: '#products', icon: Package },
  { name: 'Как работаем', url: '#how', icon: Workflow },
  { name: 'Кейсы', url: '#cases', icon: Briefcase },
  { name: 'FAQ', url: '#faq', icon: HelpCircle },
];

const painPoints = [
  {
    emoji: '😓',
    icon: <Bot className="h-4 w-4" />,
    title: 'Менеджер работает как робот',
    desc: 'Отвечает на одни и те же вопросы по кругу, вручную заносит заявки, забывает перезвонить.',
  },
  {
    emoji: '⏱',
    icon: <Search className="h-4 w-4" />,
    title: 'Заявки уходят к конкурентам',
    desc: 'Клиент написал в 22:00 — никто не ответил. Утром он уже купил у другого.',
  },
  {
    emoji: '📊',
    icon: <Box className="h-4 w-4" />,
    title: 'Всё держится в голове или в Excel',
    desc: 'Заявки теряются, CRM не заполнена. Управлять бизнесом по ощущениям — дорого.',
  },
];

const products = [
  {
    icon: <Bot className="h-7 w-7" />,
    title: '🤖 AI-бот для Telegram и MAX',
    desc: 'Круглосуточный менеджер. Отвечает, квалифицирует, записывает — пока вы спите.',
    features: [
      'Ответы за 3 секунды вместо 3 часов',
      'Квалификация заявок',
      'Запись и уведомление менеджера',
      'Интеграция с CRM',
    ],
    price: 'от 35 000 ₽',
    term: '5–7 дней',
    featured: false,
    glowColor: 'blue' as const,
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: '⚡ Автоматизация продаж',
    desc: 'Заявки сами в CRM. Менеджер получает готовый профиль клиента.',
    features: [
      'Все лиды в одном месте',
      'Авто-распределение',
      'Напоминания и дожим',
      'amoCRM и Битрикс24',
    ],
    price: 'от 60 000 ₽',
    term: '7–14 дней',
    featured: false,
    glowColor: 'green' as const,
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: '🌐 Сайт + AI под ключ',
    desc: 'Не просто лендинг — инструмент продаж. Бот отвечает, заявки в Telegram за 30 секунд.',
    features: [
      'Дизайн и разработка',
      'Встроенный AI-чат',
      'Мгновенные уведомления',
      'Интеграция с CRM',
    ],
    price: 'от 50 000 ₽',
    term: '7–10 дней',
    featured: true,
    glowColor: 'purple' as const,
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: '📊 AI-контент и маркетинг',
    desc: 'Посты, рассылки, отчёты по расписанию. Вы только нажимаете «Опубликовать».',
    features: [
      'Генерация по вашим темам',
      'Согласование через Telegram',
      'Публикация по расписанию',
      'Мониторинг упоминаний',
    ],
    price: 'Цена по задаче',
    term: '5–7 дней',
    featured: false,
    glowColor: 'orange' as const,
  },
];

const steps = [
  { n: '01', title: 'Созвон 30 минут — бесплатно', desc: 'Находим точки потерь. Без продажи.' },
  { n: '02', title: 'Предложение за 24 часа', desc: 'Фиксированная цена и срок. Никакого «зависит от объёма».' },
  { n: '03', title: 'Внедрение и тест', desc: 'Принимаете когда всё работает.' },
  { n: '04', title: 'Поддержка', desc: 'Что-то сломалось — исправим за рабочий день.' },
];

const testimonials = [
  {
    quote: '2 часа вручную → ответ за 2 минуты автоматически. Время обработки заявок сократилось на 80%. Стек: Tilda, n8n, Telegram.',
    name: 'Строительная компания',
    designation: '🌐 Сайт + интеграция',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote: 'Бот закрывает 90% вопросов, команда — только сложные. Время на поддержку сократилось с 3 часов до 10 минут в день. Стек: n8n, Telegram Bot, GPT-4o-mini.',
    name: 'Онлайн-школа',
    designation: '🤖 AI-бот',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    quote: 'Скорость реакции выросла в 5 раз. Конверсия в заявку увеличилась на 40%. Стек: Tilda, n8n.',
    name: 'Сервисный бизнес',
    designation: '📈 Конверсия',
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
  },
];

const faqItems = [
  { question: 'Я не разбираюсь в технологиях — это проблема?', answer: 'Совсем нет. Объясняете задачу словами — мы делаем всё остальное.' },
  { question: 'Сколько займёт внедрение?', answer: 'AI-бот — 5–7 дней, автоматизация продаж — 7–14, сайт — 7–10. Фиксируем письменно до старта.' },
  { question: 'Что если сломается после запуска?', answer: 'Остаёмся на поддержке. Исправим в течение рабочего дня.' },
  { question: 'С каким бизнесом работаете?', answer: 'Малый и средний бизнес в РФ: онлайн-школы, агентства, сервисный бизнес, e-commerce.' },
  { question: 'Можно начать с маленькой задачи?', answer: 'Именно с этого и рекомендуем.' },
  { question: 'Какой AI используете — работает ли в РФ?', answer: 'GPT-4o-mini, GigaChat, YandexGPT. Всё работает в РФ.' },
];

const pricingPlans = [
  {
    name: 'СТАРТ',
    price: '15000',
    yearlyPrice: '12000',
    period: 'мес',
    features: [
      'Мониторинг 1 бота',
      'Исправление ошибок',
      'Email-поддержка',
      'Ежемесячные отчёты',
    ],
    description: 'Базовая поддержка для одного решения',
    buttonText: 'Начать',
    href: TG,
    isPopular: false,
  },
  {
    name: 'БИЗНЕС',
    price: '35000',
    yearlyPrice: '28000',
    period: 'мес',
    features: [
      'Мониторинг до 5 ботов',
      'Приоритетная поддержка',
      'Доработки и улучшения',
      'Персональный менеджер',
      'Аналитика и отчёты',
      'Интеграция новых каналов',
    ],
    description: 'Полное сопровождение для растущего бизнеса',
    buttonText: 'Выбрать',
    href: TG,
    isPopular: true,
  },
  {
    name: 'ПРЕМИУМ',
    price: '60000',
    yearlyPrice: '48000',
    period: 'мес',
    features: [
      'Неограниченное количество ботов',
      'Поддержка 24/7',
      'Выделенный инженер',
      'SLA гарантии',
      'Кастомные доработки',
      'Приоритетные обновления',
      'Аудит процессов',
    ],
    description: 'Для компаний с высокой нагрузкой',
    buttonText: 'Связаться',
    href: TG,
    isPopular: false,
  },
];

/* ─── Page ─── */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* ═══ NAVBAR (tubelight) ═══ */}
      <NavBar items={navItems} />

      {/* ═══ HERO ═══ */}
      <section className="relative flex h-[80vh] items-center overflow-hidden pt-20">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow orbs */}
        <div
          className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', animation: 'float1 18s ease-in-out infinite' }}
        />
        <div
          className="pointer-events-none absolute right-1/4 bottom-1/3 h-[350px] w-[350px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)', animation: 'float2 22s ease-in-out infinite' }}
        />

        <div className="relative z-10 w-full h-full">
          {/* Spline Card — full width, full height */}
          <Card className="w-full h-full bg-black/[0.96] border-x-0 border-t-0 border-b border-white/[0.08] rounded-none relative overflow-hidden">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left content */}
              <div className="flex-1 p-6 sm:p-8 lg:p-12 relative z-10 flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                  <span className="inline-block rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-sm text-[#A78BFA]">
                    🤖 AI-автоматизация для малого и среднего бизнеса
                  </span>
                </motion.div>

                <motion.h1
                  className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  Ваши конкуренты уже
                  <br />
                  <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                    автоматизировали это
                  </span>
                </motion.h1>

                <motion.p
                  className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Пока ваши менеджеры обрабатывают заявки вручную и забывают перезвонить — мы настраиваем AI-систему, которая делает это за них. Внедрение от 7 дней.
                </motion.p>

                <motion.div
                  className="mt-6 flex flex-col items-start gap-3 sm:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                >
                  <a href={TG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-[#6D28D9] w-full sm:w-auto">
                    Обсудить проект бесплатно
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#products" className="inline-flex items-center justify-center rounded-xl border border-white/[0.15] bg-transparent px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/[0.05] w-full sm:w-auto">
                    Смотреть продукты
                  </a>
                </motion.div>

                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400 sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <span>⚡ Внедрение от 7 дней</span>
                  <span>✅ 3 проекта</span>
                  <span>🔒 Только РФ</span>
                  <span>💬 24/7</span>
                </motion.div>
              </div>

              {/* Right content — 3D Spline */}
              <div className="flex-1 relative min-h-[350px] lg:min-h-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══ PAIN POINTS (GlowingEffect) ═══ */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Это точно про вас?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Большинство бизнесов теряют деньги каждый день — просто не замечают этого
            </p>
          </AnimatedSection>

          <ul className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <AnimatedSection key={i}>
                <li className="min-h-[14rem] list-none">
                  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] bg-[#13131A] p-6 shadow-sm">
                      <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                          {p.icon}
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl">{p.emoji}</div>
                          <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ PRODUCTS (GlowCard / spotlight-card) ═══ */}
      <section id="products" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Что именно мы делаем
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Готовые решения — фиксированная цена, понятный срок, конкретный результат
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p, i) => (
              <AnimatedSection key={i}>
                <GlowCard
                  glowColor={p.glowColor}
                  customSize={true}
                  className={`!aspect-auto !grid-rows-none !shadow-none ${
                    p.featured ? 'ring-2 ring-[#7C3AED]/60' : ''
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 right-6 z-20 rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">
                      🔥 Популярное
                    </span>
                  )}
                  <div className="relative z-10 flex flex-col gap-4 p-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]/20 text-[#7C3AED]">
                      {p.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{p.desc}</p>

                    <ul className="space-y-2">
                      {p.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7C3AED]" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-white">{p.price}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-400">{p.term}</span>
                    </div>

                    <a
                      href={TG}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${
                        p.featured
                          ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
                          : 'bg-white/[0.06] hover:bg-white/[0.1] text-white'
                      }`}
                    >
                      Обсудить
                      <MessageCircle className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK (Timeline) ═══ */}
      <section id="how" className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4 text-white max-w-4xl"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            Как это происходит
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Простой и прозрачный процесс — от первого звонка до работающего решения
          </p>
        </div>
        <Timeline
          data={[
            {
              title: 'Шаг 1',
              content: (
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    Созвон 30 минут — бесплатно
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg">
                    Находим точки потерь в вашем бизнесе. Без продажи — только анализ и рекомендации.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs text-[#A78BFA]">
                      🎯 Анализ процессов
                    </span>
                    <span className="rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs text-[#A78BFA]">
                      💡 Поиск точек роста
                    </span>
                    <span className="rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs text-[#A78BFA]">
                      📋 Без обязательств
                    </span>
                  </div>
                </div>
              ),
            },
            {
              title: 'Шаг 2',
              content: (
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    Предложение за 24 часа
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg">
                    Фиксированная цена и срок. Никакого «зависит от объёма». Вы точно знаете, что получите и когда.
                  </p>
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    <div className="rounded-xl border border-white/[0.08] bg-[#13131A] p-4">
                      <div className="text-2xl font-bold text-[#7C3AED]">24ч</div>
                      <div className="text-xs text-gray-400 mt-1">на подготовку КП</div>
                    </div>
                    <div className="rounded-xl border border-white/[0.08] bg-[#13131A] p-4">
                      <div className="text-2xl font-bold text-[#7C3AED]">Fix</div>
                      <div className="text-xs text-gray-400 mt-1">цена и сроки</div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'Шаг 3',
              content: (
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    Внедрение и тест
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg">
                    Разрабатываем, тестируем, показываем. Принимаете только когда всё работает как надо.
                  </p>
                  <div className="space-y-2 max-w-md">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-[#7C3AED] shrink-0" /> Разработка решения
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-[#7C3AED] shrink-0" /> Тестирование на ваших данных
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-[#7C3AED] shrink-0" /> Демонстрация и правки
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-[#7C3AED] shrink-0" /> Запуск в продакшн
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'Шаг 4',
              content: (
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    Поддержка
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg">
                    Что-то сломалось — исправим за рабочий день. Остаёмся на связи и помогаем масштабировать.
                  </p>
                  <a
                    href={TG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#6D28D9]"
                  >
                    Обсудить проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* ═══ CASES (RadialOrbitalTimeline) ═══ */}
      <section id="cases" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-4">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Реальные проекты
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Не обещания — конкретные результаты с цифрами. Нажмите на узел, чтобы узнать подробности.
            </p>
          </AnimatedSection>

          <RadialOrbitalTimeline
            timelineData={[
              {
                id: 1,
                title: 'Строительная компания',
                date: 'Сайт + интеграция',
                content: '2 часа вручную → ответ за 2 минуты автоматически. Время обработки заявок сократилось на 80%.',
                category: 'Сайт',
                icon: Building2,
                relatedIds: [2, 3],
                status: 'completed' as const,
                energy: 100,
              },
              {
                id: 2,
                title: 'Онлайн-школа',
                date: 'AI-бот',
                content: 'Бот закрывает 90% вопросов, команда — только сложные. С 3 часов до 10 минут в день на поддержку.',
                category: 'Бот',
                icon: GraduationCap,
                relatedIds: [1, 3],
                status: 'completed' as const,
                energy: 90,
              },
              {
                id: 3,
                title: 'Сервисный бизнес',
                date: 'Конверсия',
                content: 'Скорость реакции выросла в 5 раз. Конверсия в заявку увеличилась на 40%.',
                category: 'Автоматизация',
                icon: Wrench,
                relatedIds: [1, 2, 4],
                status: 'completed' as const,
                energy: 85,
              },
              {
                id: 4,
                title: 'Tilda + n8n',
                date: 'Стек',
                content: 'Связка no-code платформ: Tilda для сайтов, n8n для автоматизаций, Telegram для уведомлений.',
                category: 'Технологии',
                icon: Globe,
                relatedIds: [1, 3, 5],
                status: 'in-progress' as const,
                energy: 70,
              },
              {
                id: 5,
                title: 'GPT-4o-mini',
                date: 'AI-модель',
                content: 'Используем GPT-4o-mini, GigaChat и YandexGPT. Всё работает в РФ без VPN.',
                category: 'AI',
                icon: Bot,
                relatedIds: [2, 4],
                status: 'in-progress' as const,
                energy: 60,
              },
            ]}
          />
        </div>
      </section>

      {/* ═══ PRICING (Pricing component) ═══ */}
      <section className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Pricing
            plans={pricingPlans}
            title="Тарифы на поддержку"
            description={`После внедрения — остаёмся с вами\nМониторинг, доработки и поддержка ваших AI-решений`}
          />
        </div>
      </section>

      {/* ═══ FAQ (FaqSection) ═══ */}
      <section id="faq">
        <FaqSection
          title="Частые вопросы"
          description="Ответы на популярные вопросы о наших услугах"
          items={faqItems}
          contactInfo={{
            title: 'Остались вопросы?',
            description: 'Напишите нам в Telegram — ответим в течение часа',
            buttonText: 'Написать в Telegram',
            onContact: () => window.open(TG, '_blank'),
          }}
        />
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#7C3AED] px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Unbounded', sans-serif" }}>
              Разберём вашу задачу бесплатно
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              30 минут — без обязательств
            </p>
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0A0A0F] transition-colors hover:bg-gray-100"
            >
              Написать в Telegram
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-white/60">
              Обычно отвечаем в течение часа
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ═══ FOOTER (Footerdemo) ═══ */}
      <Footerdemo />
    </div>
  );
}
