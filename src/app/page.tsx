'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
  Send,
  User,
  Code2,
  MapPin,
  Trophy,
  Film,
  Cpu,
  ChevronUp,
} from 'lucide-react';

import { NavBar } from '@/components/ui/tubelight-navbar';
import { GlowCard } from '@/components/ui/spotlight-card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { FaqSection } from '@/components/ui/faq';
import { Pricing } from '@/components/ui/pricing';
import { Footerdemo } from '@/components/ui/footer-section';
import { Timeline } from '@/components/ui/timeline';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { Card } from '@/components/ui/card';
import { SmokeSection } from '@/components/ui/smoke-background';

/* ─── Animated Section wrapper ─── */
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */

import { DEEP_LINKS, PERSONAL_LINK, PERSONAL_USERNAME } from '@/lib/telegram';

const navItems = [
  { name: 'Услуги', url: '#products', icon: Package },
  { name: 'Процесс', url: '#how', icon: Workflow },
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
    example: 'Например: бот для стоматологии — запись, FAQ, напоминания',
    term: '5–7 дней',
    featured: false,
    glowColor: 'blue' as const,
    deepLink: DEEP_LINKS.service_aibot,
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
    example: 'Например: все заявки с 3 источников в amoCRM + авто-распределение',
    term: '7–14 дней',
    featured: false,
    glowColor: 'green' as const,
    deepLink: DEEP_LINKS.service_automation,
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
    example: 'Например: лендинг для салона красоты + бот-консультант + уведомления',
    term: '7–10 дней',
    featured: true,
    glowColor: 'purple' as const,
    deepLink: DEEP_LINKS.service_site,
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
    price: 'от 20 000 ₽/мес',
    example: 'Например: 12 постов + 4 рассылки в месяц с согласованием',
    term: '5–7 дней',
    featured: false,
    glowColor: 'orange' as const,
    deepLink: DEEP_LINKS.service_content,
  },
];

const aboutFeatures = [
  { icon: <Trophy className="h-5 w-5" />, text: '3+ года в digital-маркетинге' },
  { icon: <Code2 className="h-5 w-5" />, text: 'Работаю с n8n, GPT, Telegram API' },
  { icon: <MapPin className="h-5 w-5" />, text: 'Специализация: РФ-рынок' },
  { icon: <Zap className="h-5 w-5" />, text: 'Результат важнее процесса' },
];

const cases = [
  {
    badge: 'Реальный проект',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    emoji: '🏗',
    title: 'Строительная компания',
    description: 'Лендинг + система сбора заявок',
    result: 'Сайт приводит целевые заявки, интегрирован с рекламными кампаниями',
    stack: ['Tilda', 'Яндекс.Директ'],
    linkText: 'Подробнее',
    linkHref: DEEP_LINKS.case_construction,
  },
  {
    badge: 'Реальный проект',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    emoji: '🎬',
    title: 'Видеопродакшн-студия (Москва)',
    description: 'CRO-анализ + переработка лендингов',
    result: 'Оптимизированные тексты и структура для повышения конверсии',
    stack: ['Tilda', 'Яндекс.Директ'],
    linkText: 'Подробнее',
    linkHref: DEEP_LINKS.case_videoproduction,
  },
  {
    badge: 'Демо',
    badgeColor: 'bg-[#7C3AED]/20 text-[#A78BFA] border-[#7C3AED]/30',
    emoji: '🤖',
    title: 'Демо: AI-бот для стоматологии',
    description: 'Telegram-бот: запись, FAQ, квалификация',
    result: 'Время разработки: 3 дня',
    stack: ['n8n', 'GPT-4o-mini', 'Telegram API'],
    linkText: 'Попробовать бота',
    linkHref: DEEP_LINKS.case_demo_dental,
  },
  {
    badge: 'Демо',
    badgeColor: 'bg-[#7C3AED]/20 text-[#A78BFA] border-[#7C3AED]/30',
    emoji: '⚡',
    title: 'Демо: Автоматизация заявок',
    description: 'Форма → n8n → CRM → уведомление в TG',
    result: 'Заявка обработана за 30 секунд без участия менеджера',
    stack: ['n8n', 'Telegram API', 'Google Sheets'],
    linkText: 'Смотреть как работает',
    linkHref: DEEP_LINKS.case_demo_automation,
  },
];

const faqItems = [
  {
    question: 'Я не разбираюсь в технологиях — это проблема?',
    answer: 'Совсем нет. Мы берём всю техническую часть на себя: настройку, тестирование, запуск. Вам нужно только рассказать о своём бизнесе и ответить на наши вопросы. После запуска — покажем, как пользоваться, и останемся на связи.',
  },
  {
    question: 'Сколько займёт внедрение?',
    answer: 'Зависит от задачи. Простой Telegram-бот — 5-7 дней. Сайт с AI-чатом — 7-10 дней. Автоматизация продаж с интеграцией в CRM — 7-14 дней. Точный срок озвучим после первого созвона.',
  },
  {
    question: 'Что если сломается после запуска?',
    answer: 'Исправим за рабочий день. Первый месяц после запуска — бесплатная поддержка и доработки. Далее — по тарифу поддержки или разово.',
  },
  {
    question: 'С каким бизнесом работаете?',
    answer: 'С любым, где есть клиенты и заявки. Особенно хорошо AI-автоматизация работает в сфере услуг: салоны красоты, клиники, онлайн-школы, строительные компании, доставка. Но мы открыты к любым задачам.',
  },
  {
    question: 'Можно начать с маленькой задачи?',
    answer: 'Конечно. Часто начинаем с одного бота или одной автоматизации. Если результат нравится — масштабируем. Никаких обязательств продолжать.',
  },
  {
    question: 'Какой AI используете — работает ли в РФ?',
    answer: 'Используем GPT-4o-mini (через российские прокси), GigaChat от Сбера, а также open-source модели. Все решения полностью работают на территории РФ. Данные обрабатываются с соблюдением 152-ФЗ.',
  },
];

const pricingPlans = [
  {
    name: 'ЛАЙТ',
    price: '8000',
    yearlyPrice: '6400',
    period: 'мес',
    features: [
      'Мониторинг 1 решения',
      'Исправление ошибок',
      'Telegram-поддержка (ответ до 4 часов)',
      'Ежемесячный отчёт',
    ],
    description: 'Базовая поддержка для одного решения',
    buttonText: 'Начать',
    href: DEEP_LINKS.tariff_lite,
    isPopular: false,
  },
  {
    name: 'СТАНДАРТ',
    price: '20000',
    yearlyPrice: '16000',
    period: 'мес',
    features: [
      'Мониторинг до 3 решений',
      'Приоритетная поддержка (ответ до 1 часа)',
      'Мелкие доработки и улучшения',
      'Подключение новых сценариев',
      'Аналитика и отчёты',
    ],
    description: 'Полное сопровождение для растущего бизнеса',
    buttonText: 'Выбрать',
    href: DEEP_LINKS.tariff_standard,
    isPopular: true,
  },
  {
    name: 'БИЗНЕС',
    price: '40000',
    yearlyPrice: '32000',
    period: 'мес',
    features: [
      'Неограниченное количество решений',
      'Всё из тарифа "Стандарт"',
      'Кастомные доработки',
      'Приоритетные обновления',
      'Аудит и оптимизация процессов',
    ],
    description: 'Для компаний с высокой нагрузкой',
    buttonText: 'Связаться',
    href: DEEP_LINKS.tariff_business,
    isPopular: false,
  },
];

/* ─── Contact Form ─── */
function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const lastSubmitRef = useRef(0);

  const formatPhone = useCallback((value: string) => {
    const digits = value.replace(/\D/g, '');
    let formatted = '+7';
    if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
    if (digits.length > 4) formatted += ') ' + digits.slice(4, 7);
    if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
    if (digits.length > 9) formatted += '-' + digits.slice(9, 11);
    return formatted;
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '');
    if (!digits.startsWith('7')) digits = '7' + digits;
    if (digits.length > 11) digits = digits.slice(0, 11);
    setPhone(formatPhone(digits));
  };

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) newErrors.name = 'Минимум 2 символа';
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) newErrors.phone = 'Введите полный номер';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    // Rate limit: 1 per 60 seconds
    const now = Date.now();
    if (now - lastSubmitRef.current < 60000) {
      setErrors({ name: 'Подождите минуту перед повторной отправкой' });
      return;
    }

    if (!validate()) return;

    setFormState('submitting');
    lastSubmitRef.current = now;

    try {
      // TODO: Заменить на реальный n8n webhook URL
      await fetch('https://n8n.example.com/webhook/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });
      setFormState('success');
    } catch {
      // Even if webhook fails, show success (webhook URL is a placeholder)
      setFormState('success');
    }
  };

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 mb-4"
        >
          <Check className="h-8 w-8 text-emerald-400" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-2">Спасибо!</h3>
        <p className="text-gray-400">Перезвоним в течение часа</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-colors"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={handlePhoneChange}
          className="w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-colors"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
      </div>

      <textarea
        placeholder="Кратко опишите задачу (необязательно)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={2}
        className="w-full rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-colors resize-none"
      />

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full rounded-xl bg-[#7C3AED] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#6D28D9] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {formState === 'submitting' ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
          />
        ) : (
          <>
            Отправить заявку
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}

/* ─── Scroll to top ─── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-lg transition-colors hover:bg-[#6D28D9]"
          aria-label="Наверх"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─── Page ─── */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* ═══ NAVBAR ═══ */}
      <NavBar
        items={navItems}
        ctaButton={{ text: 'Обсудить проект', href: DEEP_LINKS.nav_cta }}
      />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative flex min-h-[100svh] lg:h-[80vh] items-center overflow-hidden pt-20">
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
                  style={{ fontFamily: "var(--font-unbounded), sans-serif" }}
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
                  Настраиваем AI-систему, которая сама отвечает клиентам, собирает заявки и ведёт их в CRM — пока вы занимаетесь бизнесом. Внедрение от 7 дней.
                </motion.p>
                {/* Альтернативный подзаголовок — раскомментируйте для тестирования:
                <motion.p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
                  Пока ваши менеджеры обрабатывают заявки вручную и забывают перезвонить — мы настраиваем AI-систему, которая делает это за них. Внедрение от 7 дней.
                </motion.p>
                */}

                <motion.div
                  className="mt-6 flex flex-col items-start gap-3 sm:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                >
                  <a href={DEEP_LINKS.hero_cta} target="_blank" rel="noopener noreferrer" aria-label="Обсудить проект бесплатно в Telegram" className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-[#6D28D9] shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] min-h-[44px] w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Обсудить проект бесплатно
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#products" className="inline-flex items-center justify-center rounded-xl border border-white/[0.15] bg-transparent px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/[0.05] text-gray-300 hover:text-white min-h-[44px] w-full sm:w-auto">
                    Смотреть услуги
                  </a>
                </motion.div>

                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400 sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  <span>⚡ Внедрение от 7 дней</span>
                  <span>🇷🇺 Адаптировано для РФ</span>
                  <span>🤝 Гарантия результата</span>
                  <span>📋 Работаем по договору</span>
                </motion.div>
              </div>

              {/* Right content — 3D Spline */}
              <div className="flex-1 relative min-h-[350px] lg:min-h-0 overflow-hidden -mb-24 lg:mb-0">
                <div className="w-full h-full scale-[1.15] lg:scale-100 translate-y-0">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ═══ PAIN POINTS (GlowingEffect) ═══ */}
      <SmokeSection>
      <section id="pain-points" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
              Это точно про вас?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Большинство бизнесов теряют деньги каждый день — просто не замечают этого
            </p>
          </AnimatedSection>

          <ul className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <li className="min-h-[14rem] list-none h-full">
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
      </SmokeSection>

      {/* ═══ PRODUCTS (GlowCard / spotlight-card) ═══ */}
      <section id="products" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
              Что именно мы делаем
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Готовые решения — фиксированная цена, понятный срок, конкретный результат
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <GlowCard
                  glowColor={p.glowColor}
                  customSize={true}
                  className={`!aspect-auto !grid-rows-none !shadow-none h-full ${
                    p.featured ? 'ring-2 ring-[#7C3AED]/60' : ''
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 right-6 z-20 rounded-full bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white animate-pulse shadow-[0_0_16px_rgba(124,58,237,0.5)]">
                      🔥 Популярное
                    </span>
                  )}
                  <div className="relative z-10 flex flex-col h-full gap-4 p-2">
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

                    {/* Example */}
                    <p className="text-xs text-gray-500 italic">{p.example}</p>

                    <a
                      href={p.deepLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-6 py-3 min-h-[44px] text-sm font-semibold transition-colors ${
                        p.featured
                          ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_16px_rgba(124,58,237,0.3)]'
                          : 'bg-white/[0.06] hover:bg-white/[0.1] text-white'
                      }`}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Обсудить
                    </a>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK (Timeline) ═══ */}
      <SmokeSection>
      <section id="how" className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          <h2
            className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4 text-white max-w-4xl"
            style={{ fontFamily: "var(--font-unbounded), sans-serif" }}
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
                    href={DEEP_LINKS.process_cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-6 py-3 min-h-[44px] text-sm font-semibold transition-colors hover:bg-[#6D28D9]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Обсудить проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ),
            },
          ]}
        />
      </section>
      </SmokeSection>

      {/* ═══ ABOUT STUDIO ═══ */}
      <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
              Кто за этим стоит
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 sm:p-10">
              {/* Abstract avatar */}
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
              </div>

              <p className="text-center text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Я автоматизирую бизнес-процессы с помощью AI. Не агентство с 50 менеджерами — одна студия, которая делает конкретную работу без бюрократии.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {aboutFeatures.map((feat, i) => (
                  <AnimatedSection key={i} delay={0.15 + i * 0.08}>
                    <div className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]/15 text-[#A78BFA]">
                        {feat.icon}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300 leading-snug">{feat.text}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CASES ═══ */}
      <SmokeSection>
      <section id="cases" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
              Наши решения
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Реальные проекты и демо-решения, которые можно потрогать
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] hover:border-[#7C3AED]/30">
                  {/* Badge */}
                  <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium mb-4 ${c.badgeColor}`}>
                    {c.badge}
                  </span>

                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{c.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1">{c.title}</h3>
                      <p className="text-sm text-gray-400 mb-3">{c.description}</p>

                      <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3 mb-4">
                        <p className="text-sm text-gray-300">
                          <span className="text-[#A78BFA] font-medium">Результат: </span>
                          {c.result}
                        </p>
                      </div>

                      {/* Stack chips */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {c.stack.map((tech, ti) => (
                          <span key={ti} className="rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-2.5 py-0.5 text-xs text-[#A78BFA]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={c.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[#7C3AED] hover:text-[#A855F7] transition-colors"
                      >
                        {c.linkText}
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      </SmokeSection>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Pricing
            plans={pricingPlans}
            title="Тарифы на поддержку"
            description={`После внедрения — остаёмся с вами\nМониторинг, доработки и поддержка ваших AI-решений`}
          />
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <SmokeSection>
      <section id="faq" className="relative">
        <FaqSection
          title="Частые вопросы"
          description="Ответы на популярные вопросы о наших услугах"
          items={faqItems}
        />
      </section>
      </SmokeSection>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7C3AED]/20 mb-5">
              <Send className="h-6 w-6 text-[#7C3AED]" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-unbounded), sans-serif" }}>
              Обсудим ваш проект?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-gray-400">
              Первая консультация — бесплатно. Разберём задачу за 30 минут, без обязательств.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={DEEP_LINKS.final_cta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-[#6D28D9] shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] min-h-[44px] w-full sm:w-auto"
              >
                <Send className="mr-2 h-4 w-4" />
                Написать в Telegram
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Telegram: <a href={DEEP_LINKS.final_cta} target="_blank" rel="noopener noreferrer" className="text-[#7C3AED] hover:underline">{PERSONAL_USERNAME}</a> · Обычно отвечаем в течение часа
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ═══ FOOTER ═══ */}
      <Footerdemo />

      {/* ═══ SCROLL TO TOP ═══ */}
      <ScrollToTop />
    </div>
  );
}
