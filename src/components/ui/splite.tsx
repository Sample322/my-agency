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
    // Small delay to let LCP paint first, then load Spline
    const timer = setTimeout(() => setShouldLoad(true), 100)
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
