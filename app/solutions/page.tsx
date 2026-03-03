'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

type Solution = {
  id: string
  label: string
  client: string
  role: string
  summary: string
  challenge: string
  solution: string[]
  outcomes: string[]
  stack: string[]
}

const solutions: Solution[] = [
  {
    id: 'hvac',
    label: 'HVAC Lead Response',
    client: 'Evan Brooks',
    role: 'Owner, Summit HVAC & Air',
    summary: 'Paid ad leads were leaking after-hours because response speed was too slow.',
    challenge: 'Scale paid traffic while keeping every lead warm and qualified.',
    solution: [
      'Rebuilt landing and quote flow for cleaner intent capture.',
      'Deployed AI SMS concierge with sub-minute first response.',
      'Escalated high-intent installs straight to dispatch and calendar.'
    ],
    outcomes: [
      'Median lead response time: 52 seconds',
      'Estimate booking rate increased 2.1x',
      '14 hours/week of manual follow-up removed'
    ],
    stack: ['Next.js', 'Google Ads', 'Twilio', 'n8n', 'Slack']
  },
  {
    id: 'realestate',
    label: 'Real Estate Content Engine',
    client: 'Marcus T.',
    role: 'Real Estate Agency Founder',
    summary: 'Consistent market content depended on founder availability and stalled growth.',
    challenge: 'Publish hyper-local video updates at scale without daily manual effort.',
    solution: [
      'Synced MLS + market data into an automated editorial pipeline.',
      'Generated scripts and voice in founder tone with AI.',
      'Rendered and scheduled videos across social channels automatically.'
    ],
    outcomes: [
      'Monthly local videos grew from 5 to 26',
      'Inbound DMs from updates increased 3x',
      'Founder reclaimed 8 hours/week'
    ],
    stack: ['n8n', 'Airtable', 'GPT-4', 'ElevenLabs', 'Synthesia']
  },
  {
    id: 'photography',
    label: 'Photography Inquiry Automation',
    client: 'Jessica L.',
    role: 'Photography Studio Owner',
    summary: 'Late-night inquiries sat unanswered, hurting conversion to paid deposits.',
    challenge: 'Reply in minutes, qualify leads, and keep booking flow moving 24/7.',
    solution: [
      'Connected ad forms and SMS into one routing workflow.',
      'Used AI concierge to qualify event type, date, and budget.',
      'Pushed ready-to-book leads into CRM with Slack nudges.'
    ],
    outcomes: [
      'Response time dropped to 52 seconds median',
      'Inquiry-to-deposit conversion increased 2.4x',
      '9 hours/week of admin follow-up removed'
    ],
    stack: ['Google Ads', 'Twilio', 'n8n', 'Notion', 'Slack']
  },
  {
    id: 'ecommerce',
    label: 'E-commerce Support Automation',
    client: 'David K.',
    role: 'E-commerce Brand Owner',
    summary: 'Support queue growth was slowing team response and limiting repeat orders.',
    challenge: 'Resolve tickets faster without adding headcount.',
    solution: [
      'Unified Shopify, email, and WhatsApp support context.',
      'Added AI agent response drafting with order-aware context.',
      'Included upsell cues in support replies where relevant.'
    ],
    outcomes: [
      'Average resolution time reduced by 41%',
      'Repeat purchase rate increased 11%',
      '16 support hours/week saved'
    ],
    stack: ['Shopify', 'Gorgias', 'WhatsApp API', 'Apify', 'n8n']
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
}

type SolutionLayout = 'victory' | 'showcase' | 'blueprint' | 'metrics'

const solutionLayouts: Record<string, { layout: SolutionLayout; designLabel: string; color: string }> = {
  hvac: { layout: 'metrics', designLabel: 'HVAC Lead Response', color: '#10b981' },
  realestate: { layout: 'metrics', designLabel: 'Real Estate Content Engine', color: '#10b981' },
  photography: { layout: 'metrics', designLabel: 'Photography Inquiry Automation', color: '#10b981' },
  ecommerce: { layout: 'metrics', designLabel: 'E-commerce Support Automation', color: '#10b981' }
}

// Extract numeric value from outcome string for metrics display
function extractMetric(outcome: string): { value: string; label: string } {
  // Match patterns like "52 seconds", "2.1x", "41%", "14 hours"
  const match = outcome.match(/^([^:]+):\s*(.+)$/)
  if (match) {
    return { value: match[2], label: match[1] }
  }
  // Try to find numbers in the text
  const numMatch = outcome.match(/(\d+(?:\.\d+)?(?:%|x)?)/)
  if (numMatch) {
    const parts = outcome.split(numMatch[1])
    return { value: numMatch[1], label: parts.join('').trim() }
  }
  return { value: '✓', label: outcome }
}

function renderSolutionCardContent(solution: Solution, layout: SolutionLayout, color: string) {
  // DESIGN 01: VICTORY CARD - Bold, celebratory, trophy-like
  if (layout === 'victory') {
    return (
      <div className="solution-body-victory">
        <div className="victory-header">
          <div className="victory-badge" style={{ '--accent-color': color } as React.CSSProperties}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          <div className="victory-title-block">
            <h3 className="victory-client">{solution.client}</h3>
            <p className="victory-role">{solution.role}</p>
          </div>
        </div>

        <div className="victory-metrics">
          {solution.outcomes.map((outcome, i) => {
            const { value, label } = extractMetric(outcome)
            return (
              <div 
                key={i} 
                className="victory-metric"
                style={{ '--accent-color': color } as React.CSSProperties}
              >
                <span className="victory-metric-value">{value}</span>
                <span className="victory-metric-label">{label}</span>
              </div>
            )
          })}
        </div>

        <div className="victory-story">
          <div className="victory-challenge">
            <span className="victory-section-label">The Challenge</span>
            <p>{solution.challenge}</p>
          </div>
          <div className="victory-solution">
            <span className="victory-section-label">What We Built</span>
            <ul>
              {solution.solution.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="victory-stack">
          {solution.stack.map((tech) => (
            <span key={tech} className="victory-tech">{tech}</span>
          ))}
        </div>
      </div>
    )
  }

  // DESIGN 02: SHOWCASE SPLIT - Magazine-style with dramatic imagery
  if (layout === 'showcase') {
    return (
      <div className="solution-body-showcase">
        <div className="showcase-content">
          <div className="showcase-quote-block">
            <svg className="showcase-quote-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z"/>
            </svg>
            <p className="showcase-quote">{solution.summary}</p>
          </div>

          <div className="showcase-results">
            <span className="showcase-section-title">Results Delivered</span>
            <div className="showcase-wins">
              {solution.outcomes.map((outcome, i) => (
                <div key={i} className="showcase-win">
                  <span className="showcase-win-check" style={{ '--accent-color': color } as React.CSSProperties}>✓</span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="showcase-details">
            <div className="showcase-detail-block">
              <span className="showcase-detail-label">Challenge</span>
              <p>{solution.challenge}</p>
            </div>
            <div className="showcase-detail-block">
              <span className="showcase-detail-label">Our Approach</span>
              <ul>
                {solution.solution.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="showcase-sidebar" style={{ '--accent-color': color } as React.CSSProperties}>
          <div className="showcase-client-card">
            <div className="showcase-avatar">
              {solution.client.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="showcase-client-info">
              <span className="showcase-client-name">{solution.client}</span>
              <span className="showcase-client-role">{solution.role}</span>
            </div>
          </div>
          <div className="showcase-tech-stack">
            <span className="showcase-stack-title">Tech Stack</span>
            <div className="showcase-stack-grid">
              {solution.stack.map((tech) => (
                <span key={tech} className="showcase-stack-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // DESIGN 03: BLUEPRINT FLOW - Technical diagram style
  if (layout === 'blueprint') {
    return (
      <div className="solution-body-blueprint">
        <div className="blueprint-header">
          <div className="blueprint-client-block">
            <span className="blueprint-label">Client</span>
            <span className="blueprint-client">{solution.client}</span>
            <span className="blueprint-role">{solution.role}</span>
          </div>
          <div className="blueprint-status" style={{ '--accent-color': color } as React.CSSProperties}>
            <span className="blueprint-status-dot" />
            <span>Live System</span>
          </div>
        </div>

        <div className="blueprint-flow">
          <div className="blueprint-node blueprint-node-problem">
            <span className="blueprint-node-label">Problem</span>
            <p>{solution.challenge}</p>
          </div>

          <div className="blueprint-connector">
            <svg viewBox="0 0 40 24" fill="none" preserveAspectRatio="none">
              <path d="M0 12h36M28 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="blueprint-node blueprint-node-system">
            <span className="blueprint-node-label">System Architecture</span>
            <div className="blueprint-system-steps">
              {solution.solution.map((step, i) => (
                <div key={i} className="blueprint-step">
                  <span className="blueprint-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="blueprint-step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="blueprint-connector">
            <svg viewBox="0 0 40 24" fill="none" preserveAspectRatio="none">
              <path d="M0 12h36M28 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="blueprint-node blueprint-node-outcome" style={{ '--accent-color': color } as React.CSSProperties}>
            <span className="blueprint-node-label">Outcome</span>
            <div className="blueprint-outcomes">
              {solution.outcomes.map((outcome, i) => (
                <div key={i} className="blueprint-outcome">
                  <span className="blueprint-outcome-marker">▸</span>
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="blueprint-footer">
          <span className="blueprint-stack-label">Implementation Stack</span>
          <div className="blueprint-stack">
            {solution.stack.map((tech, i) => (
              <span key={tech} className="blueprint-tech">
                {tech}
                {i < solution.stack.length - 1 && <span className="blueprint-tech-sep">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // DESIGN 04: METRICS DASHBOARD - Bold numbers, dashboard aesthetic
  return (
    <div className="solution-body-metrics">
      <div className="metrics-header">
        <div>
          <h3 className="metrics-client">{solution.client}</h3>
          <p className="metrics-role">{solution.role}</p>
        </div>
        <div className="metrics-tag" style={{ '--accent-color': color } as React.CSSProperties}>
          {solution.label}
        </div>
      </div>

      <div className="metrics-grid">
        {solution.outcomes.map((outcome, i) => {
          const { value, label } = extractMetric(outcome)
          return (
            <div 
              key={i} 
              className="metrics-card"
              style={{ '--accent-color': color } as React.CSSProperties}
            >
              <span className="metrics-value">{value}</span>
              <span className="metrics-label">{label}</span>
            </div>
          )
        })}
      </div>

      <div className="metrics-story">
        <div className="metrics-story-block">
          <span className="metrics-story-label">Before</span>
          <p>{solution.challenge}</p>
        </div>
        <div className="metrics-divider">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div className="metrics-story-block">
          <span className="metrics-story-label">Solution</span>
          <ul>
            {solution.solution.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="metrics-stack">
        {solution.stack.map((tech) => (
          <span key={tech} className="metrics-stack-item">{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default function SolutionsPage() {
  useEffect(() => {
    if (!window.location.hash) return

    const id = decodeURIComponent(window.location.hash.slice(1))
    const target = document.getElementById(id)
    if (!target) return

    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand" aria-label="Qortana home">
            <img className="brand-logo" src="/qortana-logo.png" alt="Qortana logo" />
            <span className="brand-text">Qortana</span>
          </Link>
          <nav className="primary-nav" aria-label="Primary">
            <Link href="/" data-text="Home">Home</Link>
            <a href="#solutions-list" data-text="Solutions">Solutions</a>
            <Link href="/#reviews" data-text="Case studies">Case studies</Link>
          </nav>
          <a className="button button-dark cta-top" href="https://cal.com/qortana/growth-mapping-call?user=qortana&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
            <span>Let&apos;s talk</span>
            <span className="circle-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l10-10"></path>
                <path d="M8 7h9v9"></path>
              </svg>
            </span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero solutions-hero" id="solutions">
          <div className="container hero-inner">
            <motion.h1 className="hero-title" initial="hidden" animate="visible" variants={fadeInUp}>
              Built solutions. Clear outcomes.
            </motion.h1>
            <motion.p className="about-text solutions-intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Four different ways to showcase client success. Each design emphasizes the transformation from challenge to victory.
            </motion.p>
          </div>
        </section>

        <section className="solutions" id="solutions-list">
          <div className="container solutions-inner">
            <div className="solutions-grid">
              {solutions.map((solution, index) => {
                const layoutConfig = solutionLayouts[solution.id] ?? { layout: 'victory' as const, designLabel: 'Design', color: '#0ea5e9' }

                return (
                  <motion.article
                    key={solution.id}
                    id={solution.id}
                    className={`solution-card solution-card--${layoutConfig.layout}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="solution-card-design-label" style={{ '--accent-color': layoutConfig.color } as React.CSSProperties}>
                      {layoutConfig.designLabel}
                    </div>
                    {renderSolutionCardContent(solution, layoutConfig.layout, layoutConfig.color)}
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-content">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Qortana home">
              <img className="brand-logo" src="/qortana-logo.png" alt="Qortana logo" />
              <span className="brand-text">Qortana</span>
            </Link>
            <p className="footer-tagline">The definitive AI growth partner</p>
          </div>

          <nav className="footer-nav">
            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Company</h3>
              <Link href="/websites">Websites</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/#about">About</Link>
              <Link href="/#reviews">Case studies</Link>
              <a href="https://cal.com/qortana/growth-mapping-call?user=qortana&overlayCalendar=true" target="_blank" rel="noopener noreferrer">Contact</a>
            </div>

            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Legal</h3>
              <a href="/sms-privacy.html">SMS Privacy</a>
              <a href="/sms-terms.html">SMS Terms</a>
            </div>
          </nav>

          <div className="footer-bottom">
            <p className="footer-copyright">© <span id="year">{new Date().getFullYear()}</span> Qortana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
