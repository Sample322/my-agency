import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
export const runtime = 'nodejs'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A0A0F 0%, #13131A 50%, #0A0A0F 100%)',
        }}
      >
        {/* Gradient orb left */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Gradient orb right */}
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Emoji icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 88,
            height: 88,
            borderRadius: 22,
            background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
            marginBottom: 36,
            fontSize: 44,
          }}
        >
          {'🤖'}
        </div>

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          <span>Простые</span>
          <span style={{ color: '#7C3AED' }}>Сайты</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#9ca3af',
            textAlign: 'center',
          }}
        >
          AI-автоматизация для бизнеса
        </div>

        {/* Feature chips */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 44,
            fontSize: 18,
          }}
        >
          {['Боты для Telegram', 'CRM и n8n', 'Сайты под ключ'].map(
            (text) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  padding: '10px 24px',
                  borderRadius: 100,
                  border: '1px solid rgba(124,58,237,0.4)',
                  background: 'rgba(124,58,237,0.12)',
                  color: '#A78BFA',
                }}
              >
                {text}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
