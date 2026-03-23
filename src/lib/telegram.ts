export const TELEGRAM_BOT = "ivan_ai_studio_bot";
export const TELEGRAM_PERSONAL = "l_lsamplel_l";

export const DEEP_LINKS = {
  // Hero и навигация
  hero_cta: `https://t.me/${TELEGRAM_BOT}?start=hero_cta`,
  nav_cta: `https://t.me/${TELEGRAM_BOT}?start=nav_cta`,

  // Продукты (блок "Что именно мы делаем")
  service_aibot: `https://t.me/${TELEGRAM_BOT}?start=service_aibot`,
  service_automation: `https://t.me/${TELEGRAM_BOT}?start=service_automation`,
  service_site: `https://t.me/${TELEGRAM_BOT}?start=service_site`,
  service_content: `https://t.me/${TELEGRAM_BOT}?start=service_content`,

  // Кейсы
  case_construction: `https://t.me/${TELEGRAM_BOT}?start=case_construction`,
  case_videoproduction: `https://t.me/${TELEGRAM_BOT}?start=case_videoproduction`,
  case_demo_dental: `https://t.me/${TELEGRAM_BOT}?start=case_demo_dental`,
  case_demo_automation: `https://t.me/${TELEGRAM_BOT}?start=case_demo_automation`,

  // Процесс (после Шага 4)
  process_cta: `https://t.me/${TELEGRAM_BOT}?start=process_cta`,

  // Тарифы поддержки
  tariff_lite: `https://t.me/${TELEGRAM_BOT}?start=tariff_lite`,
  tariff_standard: `https://t.me/${TELEGRAM_BOT}?start=tariff_standard`,
  tariff_business: `https://t.me/${TELEGRAM_BOT}?start=tariff_business`,

  // Финальный CTA ("Обсудим ваш проект?" внизу страницы)
  final_cta: `https://t.me/${TELEGRAM_BOT}?start=final_cta`,

  // Футер
  footer_cta: `https://t.me/${TELEGRAM_BOT}?start=footer_cta`,
} as const;

// Прямая ссылка на личный аккаунт (для отображения контакта)
export const PERSONAL_LINK = `https://t.me/${TELEGRAM_PERSONAL}`;
export const PERSONAL_USERNAME = `@${TELEGRAM_PERSONAL}`;
