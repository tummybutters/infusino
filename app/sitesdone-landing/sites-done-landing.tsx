"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./sites-done-landing.module.css";

type PreviewSite = {
  name: string;
  image: string;
  category: string;
};

type Faq = {
  question: string;
  answer: string;
};

const previewSites: PreviewSite[] = [
  {
    name: "Hardy's Wash",
    image: "/attached_assets/hardys-wash.png",
    category: "Local service",
  },
  {
    name: "Malohn Capital",
    image: "/attached_assets/malohn-capital.png",
    category: "Professional services",
  },
  {
    name: "The Conviction Index",
    image: "/attached_assets/conviction-index.png",
    category: "Editorial brand",
  },
  {
    name: "Obsidian Auto",
    image: "/attached_assets/obsidian-auto.png",
    category: "Auto detailing",
  },
];

const includedItems = [
  {
    title: "Done-For-You Premium Design",
    body: "We build a high-end, mobile-optimized page that makes you look like the #1 option in your town.",
  },
  {
    title: "Professional Copywriting",
    body: "We write the text for you so your message is clear, persuasive, and built to make the phone ring.",
  },
  {
    title: "Premium Hosting & Security",
    body: "Fast hosting, SSL, domain hookup, and the technical setup are all handled for you.",
  },
  {
    title: "Unlimited Done-For-You Updates",
    body: "Need a new service, number, offer, or photo? Send it over and we update the site for you.",
  },
];

const faqs: Faq[] = [
  {
    question: "Are there any hidden fees?",
    answer:
      "No. You pay exactly $99 a month. That covers your website, hosting, and done-for-you updates.",
  },
  {
    question: "Am I locked into a long contract?",
    answer:
      "No. It is month-to-month. If you want to cancel later, you can do that without a penalty.",
  },
  {
    question: "What if I already have a domain name?",
    answer:
      "That is fine. We can connect it for you. If you do not have one yet, we can help you get one.",
  },
  {
    question: "Do I have to write the text for the website?",
    answer:
      "No. We write the copy for you based on your business, your offer, and the 3-minute quiz.",
  },
  {
    question: "What if I need to change a picture later?",
    answer:
      "You do not need to log into anything. Just send the update and we handle it for you.",
  },
];

function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setOpen((v) => !v)} type="button">
        <span>{item.question}</span>
        <span className={open ? styles.faqPlusOpen : styles.faqPlus}>+</span>
      </button>
      <div className={open ? styles.faqAnswerOpen : styles.faqAnswer}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

function IntakeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!open) {
      setStep(1);
      setName("");
      setService("");
      setEmail("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(event) => event.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} type="button" aria-label="Close">
          ×
        </button>

        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
        </div>

        <div className={styles.modalHeader}>
          <p className={styles.modalEyebrow}>Step {step} of 3</p>
          <h3>Takes less than 3 minutes. No credit card required.</h3>
        </div>

        {step === 1 ? (
          <div className={styles.modalBody}>
            <label htmlFor="business-name">What&apos;s the name of your business?</label>
            <input
              id="business-name"
              className={styles.input}
              placeholder="e.g. Apex Plumbing"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button className={styles.primaryButton} onClick={() => setStep(2)} type="button">
              Next Step
            </button>
          </div>
        ) : null}

        {step === 2 ? (
          <div className={styles.modalBody}>
            <label htmlFor="business-type">What service do you provide?</label>
            <input
              id="business-type"
              className={styles.input}
              placeholder="e.g. Residential Plumbing"
              value={service}
              onChange={(event) => setService(event.target.value)}
            />
            <button className={styles.primaryButton} onClick={() => setStep(3)} type="button">
              Next Step
            </button>
          </div>
        ) : null}

        {step === 3 ? (
          <div className={styles.modalBody}>
            <label htmlFor="business-email">Where should we send your live preview?</label>
            <input
              id="business-email"
              className={styles.input}
              placeholder="jane@example.com"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className={styles.primaryButton} onClick={onClose} type="button">
              Submit &amp; Build My Site
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function SitesDoneLanding() {
  const [activePreview, setActivePreview] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyCta(window.scrollY > 540);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const preview = previewSites[activePreview];

  return (
    <div className={styles.page}>
      <IntakeModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <div className={styles.topBanner} onClick={() => setModalOpen(true)}>
        <span>Special offer: We are waiving the $300 build fee for the first 50 businesses.</span>
        <strong> Claim yours now →</strong>
      </div>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoDot} />
          <span>SitesDoneRight</span>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Built for busy local businesses</span>
            <h1>We&apos;ll Build Your Business A Professional Website In Exactly 90 Minutes.</h1>
            <p>
              Stop losing customers because you don&apos;t look legit online. Answer a 3-minute
              quiz, and our team will design, write, and launch a premium website while you get
              back to running your business.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButtonLarge} onClick={() => setModalOpen(true)} type="button">
                Start My 3-Minute Quiz
              </button>
              <div className={styles.heroMeta}>
                <span>No hidden fees</span>
                <span>Cancel anytime</span>
                <span>Live preview first</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.previewSection}>
          <div className={styles.previewFrame}>
            <div className={styles.previewBrowser}>
              <div className={styles.browserDots}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.browserLabel}>{preview.name}</span>
            </div>
            <div className={styles.previewImageWrap}>
              <Image
                alt={`${preview.name} preview`}
                className={styles.previewImage}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 900px"
                src={preview.image}
              />
            </div>
          </div>

          <div className={styles.previewSelector}>
            {previewSites.map((site, index) => (
              <button
                key={site.name}
                className={index === activePreview ? styles.previewChipActive : styles.previewChip}
                onClick={() => setActivePreview(index)}
                type="button"
              >
                <span>{site.name}</span>
                <small>{site.category}</small>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.strip}>
          <span>Plumbers</span>
          <span>Landscapers</span>
          <span>Contractors</span>
          <span>Cleaners</span>
          <span>Electricians</span>
          <span>Med Spas</span>
          <span>Coaches</span>
        </section>

        <section className={styles.compareSection}>
          <div className={styles.sectionIntro}>
            <h2>You&apos;re a business owner, not a web designer.</h2>
            <p>
              We got tired of seeing local businesses get ripped off by agencies or frustrated by
              DIY software. It should not be that hard.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <article className={styles.problemCard}>
              <h3>The Old Way</h3>
              <ul>
                <li>Paying $3,000+ upfront and waiting weeks for an agency to finish.</li>
                <li>Burning weekends fighting clumsy builders like Wix and Squarespace.</li>
                <li>Staring at a blank page trying to write copy that actually gets calls.</li>
                <li>Getting hit with separate bills for hosting, security, domains, and updates.</li>
              </ul>
            </article>

            <article className={styles.solutionCard}>
              <h3>The SitesDoneRight Way</h3>
              <ul>
                <li>You answer a 3-minute quiz and we handle the rest.</li>
                <li>You get a live preview in about 90 minutes.</li>
                <li>We write the words for you using proven direct-response structure.</li>
                <li>One flat $99/month covers hosting, security, and updates.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <div className={styles.sectionIntro}>
            <h2>How you get online today.</h2>
            <p>We took the heavy lifting off your plate. You just review and approve.</p>
          </div>

          <div className={styles.timeline}>
            <article className={styles.timelineItem}>
              <span className={styles.timelineNumber}>1</span>
              <div>
                <h3>Take the 3-minute quiz.</h3>
                <p>Tell us what you do, who you serve, and your contact info. That&apos;s it.</p>
              </div>
            </article>
            <article className={styles.timelineItem}>
              <span className={styles.timelineNumber}>2</span>
              <div>
                <h3>We do 100% of the work.</h3>
                <p>
                  We build the layout, write the copy, make it look premium, and handle the
                  technical setup.
                </p>
              </div>
            </article>
            <article className={styles.timelineItem}>
              <span className={styles.timelineNumberAccent}>3</span>
              <div>
                <h3>Review it in 90 minutes.</h3>
                <p>We send a live link to your new site. If you love it, we publish it.</p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.includedSection}>
          <div className={styles.sectionIntro}>
            <h2>The Complete Local Authority Package.</h2>
            <p>
              Everything you need for $99 a month. This is a fully managed digital presence, not
              just a template.
            </p>
          </div>

          <div className={styles.offerGrid}>
            {includedItems.map((item) => (
              <article key={item.title} className={styles.offerCard}>
                <span className={styles.offerIncluded}>Included</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.scarcitySection}>
          <div className={styles.scarcityInner}>
            <h2>We are waiving our $300 build fee for the first 50 businesses.</h2>
            <p>
              Because real humans are designing and writing your website, our capacity is limited.
              Right now, the offer is simple: you only pay $99/month once the site is live.
            </p>
            <div className={styles.dealBox}>
              <strong>
                If you wait, you may have to pay the $300 upfront build fee again.
              </strong>
            </div>
            <button className={styles.primaryButtonLarge} onClick={() => setModalOpen(true)} type="button">
              Claim Your Waived Build Fee
            </button>
          </div>
        </section>

        <section className={styles.guaranteeSection}>
          <div className={styles.guaranteeCard}>
            <h2>The &quot;You Don&apos;t Pay Until You Love It&quot; Guarantee.</h2>
            <p>
              You do not pay a cent and you do not enter a credit card to get your 90-minute live
              preview. If you do not absolutely love how your business looks, you walk away and owe
              nothing.
            </p>
            <p>
              There are no long-term contracts. You are on a simple month-to-month plan.
            </p>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionIntro}>
            <h2>Honest answers to your questions.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <FaqItem item={item} key={item.question} />
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2>Time is money. Stop wasting both.</h2>
          <p>Let us build your website right now while you get back to your real job.</p>
          <button className={styles.primaryButtonLarge} onClick={() => setModalOpen(true)} type="button">
            Start Your 3-Minute Quiz
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} SitesDoneRight. All rights reserved.</p>
      </footer>

      <div className={showStickyCta ? styles.stickyCtaVisible : styles.stickyCta}>
        <button className={styles.primaryButton} onClick={() => setModalOpen(true)} type="button">
          Start Your 3-Minute Quiz
        </button>
      </div>
    </div>
  );
}
