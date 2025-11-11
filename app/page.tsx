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
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }}
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
              <div className="logo-badge">fatjoe.</div>
              <div className="logo-badge">Scaling™</div>
            </motion.div>

            <motion.div 
              className="testimonial-frame"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <blockquote className="quote">
                <p>"Nick & the Qortana team knows their stuff. Their AI systems are incredible."</p>
              </blockquote>
              <div className="quote-author">
                <img className="avatar" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop" alt="Client avatar" loading="lazy" />
                <div className="author-meta">
                  <div className="author-name">Joe Davies</div>
                  <div className="author-title">Cofounder, FATJOE</div>
                </div>
              </div>
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
                    className="review-card"
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                  >
                    <p className="review-text">"The AI systems they built transformed our lead generation. ROI was immediate."</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                      <div>
                        <div className="review-name">Michael Chen</div>
                        <div className="review-title">CEO, TechFlow</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="review-card"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                  >
                    <p className="review-text">"Best consulting investment we've made. Their framework actually works."</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                      <div>
                        <div className="review-name">Sarah Williams</div>
                        <div className="review-title">VP Sales, GrowthCo</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="review-card"
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                  >
                    <p className="review-text">"Saved us months of trial and error. Their expertise is unmatched."</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                      <div>
                        <div className="review-name">David Park</div>
                        <div className="review-title">Founder, ScaleUp</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="review-card"
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={reviewCard}
                  >
                    <p className="review-text">"Incredible results. Our sales pipeline has never been healthier."</p>
                    <div className="review-author">
                      <img className="review-avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                      <div>
                        <div className="review-name">Emma Rodriguez</div>
                        <div className="review-title">COO, MarketLeap</div>
                      </div>
                    </div>
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
