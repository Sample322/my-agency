"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { DEEP_LINKS, PERSONAL_USERNAME } from "@/lib/telegram"

function Footerdemo() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0A0F] text-white">
      <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo / Name */}
          <a href="#" className="text-xl font-bold" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Простые<span className="text-[#7C3AED]">Сайты</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <a href="#products" className="inline-flex items-center min-h-[44px] transition-colors hover:text-white">Услуги</a>
            <span className="hidden sm:inline text-white/20 self-center">|</span>
            <a href="#how" className="inline-flex items-center min-h-[44px] transition-colors hover:text-white">Процесс</a>
            <span className="hidden sm:inline text-white/20 self-center">|</span>
            <a href="#cases" className="inline-flex items-center min-h-[44px] transition-colors hover:text-white">Кейсы</a>
            <span className="hidden sm:inline text-white/20 self-center">|</span>
            <a href="#faq" className="inline-flex items-center min-h-[44px] transition-colors hover:text-white">FAQ</a>
          </nav>

          {/* Contacts */}
          <div className="flex flex-col items-center gap-2 text-sm text-gray-400 sm:flex-row sm:gap-6">
            <a
              href={DEEP_LINKS.footer_cta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#7C3AED]"
            >
              <Send className="h-3.5 w-3.5" />
              Telegram: {PERSONAL_USERNAME}
            </a>
            <a
              href={DEEP_LINKS.footer_cta}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#7C3AED]"
            >
              Написать нам
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2026 ПростыеСайты. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
