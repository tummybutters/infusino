'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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

const portfolioItem = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' as any }
    }
}

export default function WebsitesPage() {
    return (
        <>
            <link rel="stylesheet" href="/styles.css" />
            <header className="site-header">
                <div className="container nav">
                    <Link href="/" className="brand" aria-label="Qortana home">
                        <img className="brand-logo" src="/qortana-logo.png" alt="Qortana logo" />
                        <span className="brand-text">Qortana</span>
                    </Link>
                    <nav className="primary-nav" aria-label="Primary">
                        <Link href="/" data-text="Home">Home</Link>
                        <Link href="/websites" className="active" data-text="Websites">Websites</Link>
                        <Link href="/#reviews" data-text="Case studies">Case studies</Link>
                    </nav>
                    <a className="button button-dark cta-top" href="https://cal.com/qortana/growth-mapping-call?user=qortana&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                        <span>Let's talk</span>
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
                <section className="hero" id="websites-hero">
                    <div className="container hero-inner">
                        <motion.h1
                            className="hero-title"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                        >
                            Undeniable proof of world-class design.
                        </motion.h1>
                        <motion.p
                            className="about-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ marginTop: '24px', maxWidth: '700px' }}
                        >
                            We don't just build websites; we build high-converting digital assets that position your brand as the market leader.
                        </motion.p>
                    </div>
                </section>

                <section className="services" id="portfolio">
                    <div className="container services-inner" style={{ paddingTop: '0' }}>
                        <motion.div
                            className="pill"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="pill-badge">P</span>
                            <span>Selected Work</span>
                        </motion.div>
                        <motion.h2
                            className="services-title"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                        >
                            Recent automated web builds.
                        </motion.h2>

                        <motion.div
                            className="services-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={staggerContainer}
                        >
                            <motion.div className="service-box portfolio-box portfolio-1" variants={portfolioItem}>
                                <div className="service-overlay">
                                    <h3 className="service-heading">Summit HVAC & Air</h3>
                                    <div className="chip-row">
                                        <span className="chip chip-overlay">Lead Gen Funnel</span>
                                        <span className="chip chip-overlay">Next.js</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="service-box portfolio-box portfolio-2" variants={portfolioItem}>
                                <div className="service-overlay">
                                    <h3 className="service-heading">Apex Real Estate</h3>
                                    <div className="chip-row">
                                        <span className="chip chip-overlay">MLS Integration</span>
                                        <span className="chip chip-overlay">Interactive Map</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="service-box portfolio-box portfolio-3" variants={portfolioItem}>
                                <div className="service-overlay">
                                    <h3 className="service-heading">Luxe Detailing</h3>
                                    <div className="chip-row">
                                        <span className="chip chip-overlay">Booking Engine</span>
                                        <span className="chip chip-overlay">Mobile First</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="service-box portfolio-box portfolio-4" variants={portfolioItem}>
                                <div className="service-overlay">
                                    <h3 className="service-heading">Vanguard Legal</h3>
                                    <div className="chip-row">
                                        <span className="chip chip-overlay">Client Portal</span>
                                        <span className="chip chip-overlay">Secure Document Intake</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section className="final-cta" style={{ background: '#0b0b0b', color: '#fff' }}>
                    <div className="container final-cta-inner">
                        <motion.div
                            className="pill"
                            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="pill-badge" style={{ background: '#fff', color: '#0b0b0b' }}>$</span>
                            <span>Limited Offer</span>
                        </motion.div>
                        <motion.h2
                            className="final-cta-title"
                            style={{ color: '#fff', marginTop: '24px' }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                        >
                            Freshen up your digital presence.
                        </motion.h2>
                        <motion.p
                            className="about-text"
                            style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 0 40px 0' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Usually $5,000+. If you spend up to $5k with us on any growth service package,
                            we'll design and build your new website for free.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <a className="button button-light" href="https://cal.com/qortana/growth-mapping-call?user=qortana&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                                <span>Claim this offer</span>
                                <span className="circle-arrow" aria-hidden="true" style={{ background: '#fff', color: '#111827' }}>
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17l10-10"></path>
                                        <path d="M8 7h9v9"></path>
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
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
