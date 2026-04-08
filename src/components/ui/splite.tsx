'use client'
import { Suspense, lazy, useState, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Defer Spline loading until after LCP / idle time
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShouldLoad(true), {
        timeout: 3000,
      })
      return () => window.cancelIdleCallback(id)
    }
    // Fallback: load after 1.5s
    const timer = setTimeout(() => setShouldLoad(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!shouldLoad) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-[#7C3AED]/30 border-t-[#7C3AED] animate-spin" />
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-2 border-[#7C3AED]/30 border-t-[#7C3AED] animate-spin" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
