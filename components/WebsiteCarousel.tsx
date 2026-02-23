'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

export type WebsiteWheelItem = {
  name: string
  tag: string
  url?: string
}

interface WebsiteCarouselProps {
  items: WebsiteWheelItem[]
  autoPlayInterval?: number
}

// Original easing from the working version
const ARC_EASE = [0.22, 1, 0.36, 1] as const

export default function WebsiteCarousel({ items, autoPlayInterval = 4000 }: WebsiteCarouselProps) {
  const [activeWheelIndex, setActiveWheelIndex] = useState(0)
  const [wheelDirection, setWheelDirection] = useState<1 | -1>(1)
  const [wheelPaused, setWheelPaused] = useState(false)

  // Navigation
  const moveWheel = useCallback((dir: 1 | -1) => {
    setWheelDirection(dir)
    setActiveWheelIndex((prev) => (prev + dir + items.length) % items.length)
  }, [items.length])

  // Auto-play
  useEffect(() => {
    if (wheelPaused || items.length < 2) return

    const timer = setInterval(() => {
      setWheelDirection(1)
      setActiveWheelIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [wheelPaused, items.length, autoPlayInterval])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        moveWheel(-1)
      } else if (e.key === 'ArrowRight') {
        moveWheel(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [moveWheel])

  // Spread like a 3-finger hand - wide V formation
  const sideWheelPose = (slot: -1 | 1) => ({
    x: slot === -1 ? '-175%' : '175%',
    y: 34,
    opacity: 0.55,
    scale: 0.72,
    rotateZ: slot === -1 ? -35 : 35,         // More rotation for spread effect
    rotateY: slot === -1 ? 25 : -25,         // Face inward more
    filter: 'blur(1.5px)',
    zIndex: 2
  })

  const centerWheelPose = {
    x: '0%',
    y: 0,
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    rotateY: 0,
    filter: 'blur(0px)',
    zIndex: 3
  }

  const getWheelSlotPose = (slot: -1 | 0 | 1) => {
    if (slot === 0) return centerWheelPose
    return sideWheelPose(slot)
  }

  const offFrameWheelPose = (slot: -1 | 0 | 1) => {
    if (slot === 0) return centerWheelPose
    return {
      x: slot === -1 ? '-285%' : '285%',
      y: 62,
      opacity: 0,
      scale: 0.58,
      rotateZ: slot === -1 ? -50 : 50,
      rotateY: slot === -1 ? 30 : -30,
      filter: 'blur(3px)',
      zIndex: 1
    }
  }

  return (
    <motion.div
      className="axis-wheel-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      onMouseEnter={() => setWheelPaused(true)}
      onMouseLeave={() => setWheelPaused(false)}
      onFocus={() => setWheelPaused(true)}
      onBlur={() => setWheelPaused(false)}
    >
      <div className="axis-anchor" aria-hidden="true">
        <div className="axis-anchor-line" />
        <div className="axis-anchor-dot" />
      </div>

      <div className="axis-wheel-track" role="region" aria-label="Website carousel">
        <AnimatePresence initial={false} custom={wheelDirection}>
          {(() => {
            const total = items.length
            const prevIndex = (activeWheelIndex - 1 + total) % total
            const nextIndex = (activeWheelIndex + 1) % total

            const visibleList: Array<{ site: WebsiteWheelItem; slot: -1 | 0 | 1 }> = [
              { site: items[prevIndex], slot: -1 },
              { site: items[activeWheelIndex], slot: 0 },
              { site: items[nextIndex], slot: 1 }
            ]

            return visibleList.map(({ site, slot }) => {
              return (
                <motion.div
                  key={site.name}
                  className="axis-wheel-card"
                  initial={offFrameWheelPose(slot)}
                  animate={getWheelSlotPose(slot)}
                  exit={offFrameWheelPose(slot)}
                  transition={{ duration: 0.72, ease: ARC_EASE }}
                  style={{
                    pointerEvents: slot === 0 ? 'auto' : 'none',
                    transformOrigin: '50% 170%'
                  }}
                >
                  {/* Original card structure */}
                  <div style={{
                    height: '100%',
                    padding: 'clamp(18px, 2.2vw, 24px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px',
                    background: 'transparent',
                    borderRadius: 'inherit',
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      borderRadius: '999px',
                      width: 'fit-content',
                      padding: '6px 12px',
                      fontSize: '11px',
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      color: '#344054',
                      border: '1px solid rgba(15, 23, 42, 0.12)',
                      background: 'rgba(255, 255, 255, 0.75)',
                    }}>{site.tag}</span>
                    <h3 style={{
                      margin: 0,
                      fontSize: 'clamp(22px, 2.8vw, 32px)',
                      lineHeight: 1.08,
                      letterSpacing: '-0.02em',
                      color: '#101828',
                    }}>{site.name}</h3>
                    {site.url ? (
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '40px',
                          width: 'fit-content',
                          padding: '0 16px',
                          borderRadius: '999px',
                          border: '1px solid rgba(15, 23, 42, 0.16)',
                          textDecoration: 'none',
                          background: '#fff',
                          color: '#0f172a',
                          fontSize: '13px',
                          fontWeight: 700,
                          letterSpacing: '0.01em',
                          transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)'
                          e.currentTarget.style.background = '#f8fafc'
                          e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.26)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.background = '#fff'
                          e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.16)'
                        }}
                      >
                        Check out website
                      </a>
                    ) : (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '40px',
                        width: 'fit-content',
                        padding: '0 16px',
                        borderRadius: '999px',
                        border: '1px solid rgba(15, 23, 42, 0.16)',
                        textDecoration: 'none',
                        background: '#fff',
                        color: '#0f172a',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        opacity: 0.55,
                        pointerEvents: 'none',
                      }}>
                        Website coming soon
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            })
          })()}
        </AnimatePresence>
      </div>

      <div className="axis-wheel-controls">
        <button
          className="axis-wheel-arrow"
          type="button"
          aria-label="Previous website"
          onClick={() => moveWheel(-1)}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="axis-wheel-arrow"
          type="button"
          aria-label="Next website"
          onClick={() => moveWheel(1)}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}
