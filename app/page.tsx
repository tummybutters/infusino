import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
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
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="container hero-inner">
            <h1 className="hero-title">The definitive AI growth partner for fast-moving B2B companies.</h1>
            <Link className="button button-light cta-hero" href="/book">
              <span>Let's talk</span>
              <span className="circle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l10-10"></path>
                  <path d="M8 7h9v9"></path>
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-inner">
            <div className="about-copy">
              <div className="pill">
                <span className="pill-badge">1</span>
                <span>Introducing Qortana</span>
              </div>
              <h2 className="about-title">Tens of millions of dollars generated (& more saved).</h2>
              <p className="about-text">Our team has generated millions across both SMB & enterprise. We use a proprietary, AI‑driven consulting stack and a framework that dives deep into the heart of your business to fix real, practical problems—not just theoretical ones that look good on paper, but actual ways to drive revenue & grow.</p>
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
            <div className="about-media">
              <figure className="media-card">
                <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop" alt="Discussion panel on stage" loading="lazy" />
              </figure>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container services-inner">
            <div className="pill">
              <span className="pill-badge">4</span>
              <span>Our Services</span>
            </div>
            <h2 className="services-title">What we specialize in.</h2>

            <div className="services-grid">
              <div className="service-box service-lead">
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
              </div>

              <div className="service-box service-project">
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
              </div>

              <div className="service-box service-hiring">
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
              </div>

              <div className="service-box service-sales">
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
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" id="reviews">
          <div className="container testimonials-inner">
            <div className="pill">
              <span className="pill-badge">4</span>
              <span>Client reviews</span>
            </div>
            <h2 className="testimonials-title">Some words from happy clients.</h2>

            <div className="logo-row">
              <div className="logo-badge">fatjoe.</div>
              <div className="logo-badge">Scaling™</div>
            </div>

            <div className="testimonial-frame">
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
            </div>

            <button className="see-more-btn" id="seeMoreBtn">
              <span>See more reviews</span>
              <span className="circle-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l10-10"></path>
                  <path d="M8 7h9v9"></path>
                </svg>
              </span>
            </button>

            <div className="additional-reviews" id="additionalReviews">
              <div className="review-card">
                <p className="review-text">"The AI systems they built transformed our lead generation. ROI was immediate."</p>
                <div className="review-author">
                  <img className="review-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                  <div>
                    <div className="review-name">Michael Chen</div>
                    <div className="review-title">CEO, TechFlow</div>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <p className="review-text">"Best consulting investment we've made. Their framework actually works."</p>
                <div className="review-author">
                  <img className="review-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                  <div>
                    <div className="review-name">Sarah Williams</div>
                    <div className="review-title">VP Sales, GrowthCo</div>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <p className="review-text">"Saved us months of trial and error. Their expertise is unmatched."</p>
                <div className="review-author">
                  <img className="review-avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                  <div>
                    <div className="review-name">David Park</div>
                    <div className="review-title">Founder, ScaleUp</div>
                  </div>
                </div>
              </div>

              <div className="review-card">
                <p className="review-text">"Incredible results. Our sales pipeline has never been healthier."</p>
                <div className="review-author">
                  <img className="review-avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop" alt="Client" loading="lazy" />
                  <div>
                    <div className="review-name">Emma Rodriguez</div>
                    <div className="review-title">COO, MarketLeap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-heading">
          <div className="final-cta-art" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <p className="eyebrow">Work with us</p>
            <h2 id="final-cta-heading" className="final-cta-title">Start with a free, thirty minute growth mapping call.</h2>
            <Link className="button button-on-dark" href="/book">
              <span>Let's talk</span>
              <span className="circle-arrow circle-arrow-on-dark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l10-10"></path>
                  <path d="M8 7h9v9"></path>
                </svg>
              </span>
            </Link>
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

      <Script id="scroll-animations" strategy="afterInteractive">
        {`
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
              }
            });
          }, { threshold: 0.2 });

          document.querySelectorAll('.hero-title, .about-title, .services-title, .testimonials-title, .final-cta-title').forEach(title => {
            observer.observe(title);
          });

          const btn = document.getElementById('seeMoreBtn');
          if (btn) {
            btn.addEventListener('click', function() {
              const additionalReviews = document.getElementById('additionalReviews');
              if (additionalReviews) {
                additionalReviews.classList.toggle('show');
                this.classList.toggle('hidden');
              }
            });
          }
        `}
      </Script>
    </>
  )
}
