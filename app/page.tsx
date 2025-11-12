'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Animation variants for scroll-triggered elements
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as any }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const serviceBox = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as any }
  }
}

const reviewCard = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: 'easeOut' as any
    }
  })
}

export default function Home() {
  const [showMoreReviews, setShowMoreReviews] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const testimonials = {
    website: {
      quote: "Tommy and Qortana found automations we didn't know existed. Fifteen hours of admin work vanished every week.",
      client: "Sarah M.",
      role: "Website Development Agency Owner",
      goal: "Keep our project pipeline full without spending nights on manual outreach.",
      implementation: [
        "Tracked net-new local businesses with Apify scrapers and enrichment.",
        "Auto-personalized Instantly sequences using fresh firmographic data.",
        "Routed replies into HubSpot where a GPT assistant tagged intent and launched follow-ups."
      ],
      stack: ["Apify monitors", "Instantly sequences", "HubSpot CRM", "GPT triage agent"],
      metrics: [
        "Qualified intro calls per week: 17 (previously 6)",
        "Proposal close rate up 19% after 45 days",
        "Manual outreach time down 12 hours each week"
      ]
    },
    realestate: {
      quote: "I didn't know most of this was possible. Qortana made daily content almost zero effort.",
      client: "Marcus T.",
      role: "Real Estate Agency Founder",
      goal: "Publish consistent hyper-local video updates without the founder recording every day.",
      implementation: [
        "Pulled MLS and market feeds into Airtable using n8n automations.",
        "Used GPT-4 and ElevenLabs to write and voice scripts in the founder's tone.",
        "Rendered presenter videos with Synthesia and scheduled posts automatically."
      ],
      stack: ["n8n automations", "Airtable editorial hub", "GPT-4 scripting", "ElevenLabs voice", "Synthesia avatars"],
      metrics: [
        "Video output: 26 local clips per month (up from 5)",
        "Inbound DMs referencing market updates up 3x",
        "Founder time on content down 8 hours weekly"
      ]
    },
    photography: {
      quote: "We finally stopped missing late-night leads. Qortana's automations reply before I even see the text.",
      client: "Jessica L.",
      role: "Photography Studio Owner",
      goal: "Respond to every inquiry within minutes without staying glued to the phone.",
      implementation: [
        "Captured Google Ads form fills and SMS pings through n8n workflows.",
        "Twilio concierge qualified each lead for event type, date, and budget.",
        "Synced ready-to-book conversations into Notion CRM with Slack nudges."
      ],
      stack: ["Google Ads webhooks", "Twilio SMS concierge", "n8n routing", "Notion CRM", "Slack alerts"],
      metrics: [
        "Median response time now 52 seconds (was several hours)",
        "Inquiry-to-deposit conversion up 2.4x",
        "Owner reclaimed about 9 hours of follow-up each week"
      ]
    },
    ecommerce: {
      quote: "Support used to be a wall. Now tickets turn into repeat orders thanks to Qortana.",
      client: "David K.",
      role: "E-commerce Brand Owner",
      goal: "Clear the support queue without hiring another agent.",
      implementation: [
        "Unified Shopify, Gmail, and WhatsApp threads through n8n orchestration.",
        "Surfaced order context via Apify warranty checks and customer lookups.",
        "Let a fine-tuned GPT agent draft responses inside Gorgias with upsell cues."
      ],
      stack: ["Shopify Admin API", "Gorgias", "WhatsApp Business API", "Apify warranty monitor", "GPT support agent", "n8n orchestration"],
      metrics: [
        "Average resolution time down 41%",
        "Repeat purchase rate up 11% in eight weeks",
        "Team saved roughly 16 support hours per week"
      ]
    }
  }

  const activeTestimonial = activeModal ? testimonials[activeModal as keyof typeof testimonials] : null

  return (
    <>
      <link rel="stylesheet" href="/styles.css" />
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand" aria-label="Qortana home">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-text">Qortana</span>
          </Link>
          <nav className="primary-nav" aria-label="Primary">
            <a href="#reviews" data-text="Case studies">Case studies</a>
            <a href="#about" data-text="About">About</a>
          </nav>
          <Link className="button button-dark cta-top" href="/book">
            <span>Let's talk</span>
            <span className="circle-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l10-10"></path>
                <path d="M8 7h9v9"></path>
              </svg>
            </span>
          </Link>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg" aria-hidden="true">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero-video"
            >
              <source src="/hero-background.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="container hero-inner">
            <motion.h1 
              className="hero-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              The definitive AI growth partner for fast-moving B2B companies.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link className="button button-light cta-hero" href="/book">
                <span>Let's talk</span>
                <span className="circle-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l10-10"></path>
                    <path d="M8 7h9v9"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-inner">
            <div className="about-copy">
              <motion.div 
                className="pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <span className="pill-badge">1</span>
                <span>Introducing Qortana</span>
              </motion.div>
              <motion.h2 
                className="about-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                Tens of millions of dollars generated (& more saved).
              </motion.h2>
              <motion.p 
                className="about-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our team has generated millions across both SMB & enterprise. We use a proprietary, AI‑driven consulting stack and a framework that dives deep into the heart of your business to fix real, practical problems—not just theoretical ones that look good on paper, but actual ways to drive revenue & grow.
              </motion.p>
              <Link className="button button-dark cta-about" href="/book">
                <span>Let's talk</span>
                <span className="circle-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l10-10"></path>
                    <path d="M8 7h9v9"></path>
                  </svg>
                </span>
              </Link>
            </div>
            <motion.div 
              className="about-media"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <figure className="media-card">
                <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop" alt="Discussion panel on stage" loading="lazy" />
              </figure>
            </motion.div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container services-inner">
            <motion.div 
              className="pill"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pill-badge">4</span>
              <span>Our Services</span>
            </motion.div>
            <motion.h2 
              className="services-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              What we specialize in.
            </motion.h2>

            <motion.div 
              className="services-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.div className="service-box service-lead" variants={serviceBox}>
                <div className="service-overlay">
                  <h3 className="service-heading">Lead Generation</h3>
                  <div className="chip-row">
                    <span className="chip chip-overlay">AI Cold Email Systems</span>
                    <span className="chip chip-overlay">Application Systems</span>
                  </div>
                  <div className="chip-row">
                    <span className="chip chip-overlay">Content Systems</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="service-box service-project" variants={serviceBox}>
                <div className="service-overlay">
                  <h3 className="service-heading">Project Management</h3>
                  <div className="chip-row">
                    <span className="chip chip-overlay">AI Automated Fulfillment</span>
                    <span className="chip chip-overlay">AI Onboarding Systems</span>
                  </div>
                  <div className="chip-row">
                    <span className="chip chip-overlay">PM Systems</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="service-box service-hiring" variants={serviceBox}>
                <div className="service-overlay">
                  <h3 className="service-heading">Hiring Systems</h3>
                  <div className="chip-row">
                    <span className="chip chip-overlay">Intake Systems</span>
                    <span className="chip chip-overlay">AI Scoring Systems</span>
                  </div>
                  <div className="chip-row">
                    <span className="chip chip-overlay">Trial Systems</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="service-box service-sales" variants={serviceBox}>
                <div className="service-overlay">
                  <h3 className="service-heading">Sales Administration</h3>
                  <div className="chip-row">
                    <span className="chip chip-overlay">Customized CRMs</span>
                    <span className="chip chip-overlay">AI Asset Generators</span>
                  </div>
                  <div className="chip-row">
                    <span className="chip chip-overlay">AI Nurture Systems</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="testimonials" id="reviews">
          <div className="container testimonials-inner">
            <motion.div 
              className="pill"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pill-badge">4</span>
              <span>Client reviews</span>
            </motion.div>
            <motion.h2 
              className="testimonials-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              Some words from happy clients.
            </motion.h2>

            <motion.div 
              className="logo-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="logo-badge">Website Agency</div>
              <div className="logo-badge">Real Estate</div>
              <div className="logo-badge">Photography</div>
              <div className="logo-badge">E-commerce</div>
            </motion.div>

            <motion.div 
              className="testimonial-frame clickable"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setActiveModal('website')}
              whileHover={{ scale: 1.01 }}
              style={{ cursor: 'pointer' }}
            >
              <blockquote className="quote">
                <p>"{testimonials.website.quote}"</p>
              </blockquote>
              <div className="quote-author">
                <img className="avatar" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" alt="Website Development Agency" loading="lazy" />
                <div className="author-meta">
                  <div className="author-name">{testimonials.website.client}</div>
                  <div className="author-title">{testimonials.website.role}</div>
                </div>
              </div>
              <div className="click-hint">Click to see the solution →</div>
            </motion.div>

            {!showMoreReviews && (
              <motion.button 
                className="see-more-btn" 
                onClick={() => setShowMoreReviews(true)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>See more reviews</span>
                <span className="circle-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l10-10"></path>
                    <path d="M8 7h9v9"></path>
                  </svg>
                </span>
              </motion.button>
            )}

            <AnimatePresence>
              {showMoreReviews && (
                <motion.div 
                  className="additional-reviews show"
                  initial={{ opacity: 0, maxHeight: 0, marginTop: 0 }}
                  animate={{ opacity: 1, maxHeight: 2000, marginTop: 32 }}
                  exit={{ opacity: 0, maxHeight: 0, marginTop: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <motion.div 
                    className="review-card clickable"
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                    onClick={() => setActiveModal('realestate')}
                    whileHover={{ scale: 1.02 }}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className="review-text">"{testimonials.realestate.quote}"</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop" alt="Real Estate Agency" loading="lazy" />
                      <div>
                        <div className="review-name">{testimonials.realestate.client}</div>
                        <div className="review-title">{testimonials.realestate.role}</div>
                      </div>
                    </div>
                    <div className="click-hint">Click to see the solution →</div>
                  </motion.div>

                  <motion.div 
                    className="review-card clickable"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                    onClick={() => setActiveModal('photography')}
                    whileHover={{ scale: 1.02 }}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className="review-text">"{testimonials.photography.quote}"</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" alt="Photography Studio" loading="lazy" />
                      <div>
                        <div className="review-name">{testimonials.photography.client}</div>
                        <div className="review-title">{testimonials.photography.role}</div>
                      </div>
                    </div>
                    <div className="click-hint">Click to see the solution →</div>
                  </motion.div>

                  <motion.div 
                    className="review-card clickable"
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                    onClick={() => setActiveModal('ecommerce')}
                    whileHover={{ scale: 1.02 }}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className="review-text">"{testimonials.ecommerce.quote}"</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop" alt="E-commerce Brand" loading="lazy" />
                      <div>
                        <div className="review-name">{testimonials.ecommerce.client}</div>
                        <div className="review-title">{testimonials.ecommerce.role}</div>
                      </div>
                    </div>
                    <div className="click-hint">Click to see the solution →</div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-heading">
          <motion.div 
            className="final-cta-art" 
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <div className="container final-cta-inner">
            <motion.p 
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Work with us
            </motion.p>
            <motion.h2 
              id="final-cta-heading" 
              className="final-cta-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              Start with a free, thirty minute growth mapping call.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link className="button button-on-dark" href="/book">
              <span>Let's talk</span>
              <span className="circle-arrow circle-arrow-on-dark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l10-10"></path>
                  <path d="M8 7h9v9"></path>
                </svg>
              </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Modal for testimonial details */}
        <AnimatePresence>
          {activeModal && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            >
              <motion.div 
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close" 
                  onClick={() => setActiveModal(null)}
                  aria-label="Close modal"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <h3 className="modal-title">The Solution</h3>
                {activeTestimonial && (
                  <div className="modal-sections">
                    <div className="modal-section">
                      <h4 className="modal-section-title">Goal</h4>
                      <p>{activeTestimonial.goal}</p>
                    </div>
                    <div className="modal-section">
                      <h4 className="modal-section-title">What we implemented</h4>
                      <ul className="modal-list">
                        {activeTestimonial.implementation.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-section">
                      <h4 className="modal-section-title">Stack highlights</h4>
                      <div className="modal-chip-row">
                        {activeTestimonial.stack.map(tool => (
                          <span className="modal-chip" key={tool}>{tool}</span>
                        ))}
                      </div>
                    </div>
                    <div className="modal-section">
                      <h4 className="modal-section-title">Results (first 60 days)</h4>
                      <ul className="modal-list">
                        {activeTestimonial.metrics.map(metric => (
                          <li key={metric}>{metric}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="modal-client-info">
                  <div className="modal-client-name">
                    {activeTestimonial?.client}
                  </div>
                  <div className="modal-client-role">
                    {activeTestimonial?.role}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-content">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Qortana home">
              <span className="brand-mark" aria-hidden="true"></span>
              <span className="brand-text">Qortana</span>
            </Link>
            <p className="footer-tagline">The definitive AI growth partner</p>
          </div>
          
          <nav className="footer-nav">
            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Company</h3>
              <a href="#about">About</a>
              <a href="#reviews">Case studies</a>
              <Link href="/book">Contact</Link>
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
