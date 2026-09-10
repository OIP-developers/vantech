import './work-van-travel.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import badgeCheckSvg from '../../assets/icons/work-van-badge-check.svg?raw';
import shareIconSvg from '../../assets/icons/ci-share-ios-export.svg?raw';
import copyIconSvg from '../../assets/icons/akar-icons-copy.svg?raw';
import carbonReferenceArchitectureSvg from '../../assets/icons/carbon-reference-architecture.svg?raw';
import databaseGearSvg from '../../assets/icons/bi-database-fill-gear.svg?raw';
import diagramVector29 from '../../assets/icons/work-van-diagram-vector-29.svg';
import diagramVector30 from '../../assets/icons/work-van-diagram-vector-30.svg';
import diagramVector31 from '../../assets/icons/work-van-diagram-vector-31.svg';

import browserMockup from '../../assets/images/work-van-travel/figma/browser-mockup.png';
import bannerWide from '../../assets/images/work-van-travel/figma/banner-wide.png';
import iconCircleBg from '../../assets/images/work-van-travel/figma/icon-circle-bg.png';
import relatedWork1 from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWork2 from '../../assets/images/work-van-travel/figma/related-work-2.png';
import relatedWork3 from '../../assets/images/work-van-travel/figma/related-work-3.png';
import ctaBoxBg from '../../assets/images/work-van-travel/figma/cta-box-bg.png';
import orbSphere from '../../assets/images/orb-sphere.webp';

const stats = [
  { label: 'Project type', value: 'Web Applications' },
  { label: 'Capabilities', value: 'Web Development • Automation' },
  { label: 'Industry', value: 'Travel & Immigration' },
  { label: 'Status', value: 'Live' },
];

const capabilities = [
  { number: '01', title: 'Service and package catalogue' },
  { number: '02', title: 'Document-aware enquiry intake' },
  { number: '03', title: 'Operations view for case follow-up' },
  { number: '04', title: 'Automated enquiry confirmations' },
  { number: '05', title: 'Multi-device client experience' },
];

const flowSteps = ['Explore', 'Enquire', 'Follow-up'];

const diagramPills = ['Traveller', 'Public experience', 'Enquiry logic', 'Operations'];

const outcomes = [
  'Cases start with the required details captured',
  'Less back-and-forth before an assessment',
  'Follow-up is tracked in one place',
];

const relatedWork = [
  {
    image: relatedWork1,
    tag: 'Professional Services',
    title: 'Solid Rock Leadership Development',
    desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
  },
  {
    image: relatedWork2,
    tag: 'SaaS',
    title: 'OneTap Digital Card',
    desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
  },
  {
    image: relatedWork3,
    tag: 'Professional Services',
    title: 'The PMB Consulting',
    desc: 'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
  },
];

export default function WorkVanTravelPage() {
  const heroLeft = useReveal('left');
  const heroRight = useReveal('right');
  const overviewReveal = useReveal('left');
  const capabilitiesReveal = useReveal('up');
  const approachReveal = useReveal('up');
  const outcomeReveal = useReveal('up');
  const relatedReveal = useReveal('up');

  return (
    <main className="wvt-page image-body">
      <section className="wvt-hero section" id="wvt-hero">

        <div className="container wvt-hero__row">
          <div className={`wvt-hero__left ${heroLeft.className}`} ref={heroLeft.ref}>
            <div className="wvt-badges">
              <span className="wvt-badge">
                <Icon svg={badgeCheckSvg} />
                Web Applications
              </span>
              <span className="wvt-badge">
                <Icon svg={badgeCheckSvg} />
                Travel &amp; Immigration
              </span>
            </div>
            <h1 className="wvt-hero__title">
              Van Travel
              <br />
              Business
            </h1>
          </div>

          <div className={`wvt-hero__right ${heroRight.className}`} ref={heroRight.ref}>
            <p className="wvt-hero__desc">
              A travel and immigration business platform covering packages, document intake and
              client enquiries.
            </p>
            <div className="wvt-hero__actions">
              <a
                href="https://vantravelbusiness.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Live Site
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="/contact" className="btn btn-outline">
                Start a similar project
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="container maic-boc">
          <div className="wvt-browser-mock">
            <div className="wvt-browser-mock__toolbar">
              <div className="wvt-browser-mock__dots">
                <span />
                <span />
                <span />
              </div>
              <div className="wvt-browser-mock__url">
                <a href="https://vantravelbusiness.com/" target="_blank" rel="noreferrer">
                  https://vantravelbusiness.com/
                </a>
              </div>
              <div className="wvt-browser-mock__tools">
                <span className="wvt-browser-mock__tool">
                  <Icon svg={shareIconSvg} />
                </span>
                <span className="wvt-browser-mock__tool">
                  <Icon svg={copyIconSvg} />
                </span>
              </div>
            </div>
            <div className="wvt-browser-mock__screen">
              <img src={browserMockup} alt="Van Travel Business platform screenshot" loading="eager" />
            </div>
          </div>

          <div className="wvt-stats">
            {stats.map((s) => (
              <div className="wvt-stat" key={s.label}>
                <span className="wvt-stat__label">{s.label}</span>
                <span className="wvt-stat__value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wvt-detail section">
        <div className={`container wvt-detail__row ${overviewReveal.className}`} ref={overviewReveal.ref}>
          <div className="wvt-detail__col">
            <div className="wvt-detail-item">
              <span className="wvt-eyebrow-number">01 — Overview</span>
              <p className="wvt-detail-item__desc">
                Van Travel Business runs travel and immigration services that depend on structured
                client intake. We built a platform combining service catalogues, document-aware
                enquiry flows and an operations view for follow-up.
              </p>
              <span className="wvt-detail-item__divider" />
            </div>

            <div className="wvt-detail-item">
              <span className="wvt-eyebrow-number">02 — The challenge</span>
              <p className="wvt-detail-item__desc">
                Van Travel Business runs travel and immigration services that depend on structured
                client intake. We built a platform combining service catalogues, document-aware
                enquiry flows and an operations view for follow-up.
              </p>
              <span className="wvt-detail-item__divider" />
            </div>

            <div className="wvt-detail-item">
              <span className="wvt-eyebrow-number">03 — What we built</span>
              <p className="wvt-detail-item__desc">
                We combined a structured service catalogue with document-aware enquiry flows and an
                operations view, so each case opens with its requirements and evidence already
                captured.
              </p>
              <span className="wvt-detail-item__divider" />
            </div>
          </div>

          <aside className="wvt-sidebar">
            <div className="wvt-sidebar-card">
              <span className="wvt-sidebar-card__title">Technology &amp; services</span>
              <div className="wvt-tags">
                <span className="wvt-tag">React</span>
                <span className="wvt-tag">Type Script</span>
                <span className="wvt-tag">Supabase</span>
                <span className="wvt-tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="wvt-sidebar-card">
              <span className="wvt-sidebar-card__title">Services</span>
              <div className="wvt-tags">
                <span className="wvt-tag">Web Development</span>
                <span className="wvt-tag">Automation</span>
              </div>
            </div>

            <a
              href="https://vantravelbusiness.com/"
              target="_blank"
              rel="noreferrer"
              className="wvt-sidebar-card wvt-sidebar-card--link"
            >
              <span className="wvt-sidebar-card__title">Explore the live product</span>
              <span className="wvt-sidebar-card__link">
                vantravelbusiness.com
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </span>
            </a>
          </aside>
        </div>
      </section>

      <section className="wvt-capabilities section">
        <div className={`container ${capabilitiesReveal.className}`} ref={capabilitiesReveal.ref}>
          <span className="wvt-eyebrow-number">04 — Core capabilities</span>
          <p className="wvt-section-desc">
            We combined a structured service catalogue with document-aware enquiry flows and an
            operations view, so each case opens with its requirements and evidence already
            captured.
          </p>

          <div className="wvt-capabilities__grid">
            {capabilities.map((c) => (
              <div className="wvt-capability-card" key={c.number}>
                <span className="wvt-capability-card__number">{c.number}</span>
                <span className="wvt-capability-card__title">{c.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wvt-flow section">
        <div className="container">
          <span className="wvt-eyebrow-number">05 — Services</span>
          <div className="wvt-flow__steps">
            {flowSteps.map((step, i) => (
              <div className="wvt-flow__step-wrap" key={step}>
                <span className="wvt-flow__step">{step}</span>
                {i < flowSteps.length - 1 && <span className="wvt-flow__connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wvt-approach section">
        <div className={`container ${approachReveal.className}`} ref={approachReveal.ref}>
          <span className="wvt-eyebrow-number">06 — System approach</span>

          <div className="wvt-diagram">
            <div className="wvt-diagram__badge">
              <Icon svg={carbonReferenceArchitectureSvg} className="wvt-diagram__badge-icon" />
              <span className="wvt-diagram__badge-label">
                Conceptual
                <br />
                system view
              </span>
            </div>

            <img src={diagramVector29} alt="" className="wvt-diagram__vector wvt-diagram__vector--1" />
            <img src={diagramVector31} alt="" className="wvt-diagram__vector wvt-diagram__vector--2" />
            <img src={diagramVector31} alt="" className="wvt-diagram__vector wvt-diagram__vector--3" />
            <img src={diagramVector30} alt="" className="wvt-diagram__vector wvt-diagram__vector--4" />
            <span className="wvt-diagram__dot wvt-diagram__dot--center" />

            <div className="wvt-diagram__pills">
              {diagramPills.map((pill) => (
                <span className="wvt-diagram__pill" key={pill}>
                  <span className="wvt-diagram__pill-dot" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wvt-outcome section">
        <div className={`container ${outcomeReveal.className}`} ref={outcomeReveal.ref}>
          <span className="wvt-eyebrow-number">07 — Outcome</span>
          <ul className="wvt-outcome__list">
            {outcomes.map((item) => (
              <li key={item}>
                <span className="wvt-outcome__dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="wvt-banner">
        <img src={bannerWide} alt="" className="wvt-banner__img" loading="lazy" />
        <span className="wvt-banner__icon">
          <img src={iconCircleBg} alt="" />
          <Icon svg={databaseGearSvg} />
        </span>
      </div>

      <section className="wvt-related section">
        <div className={`container ${relatedReveal.className}`} ref={relatedReveal.ref}>
          <h2 className="wvt-related__title">Related work</h2>

          <div className="wvt-related__grid">
            {relatedWork.map((item) => (
              <div className="wvt-related-card" key={item.title}>
                <div className="wvt-related-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <span className="wvt-related-card__tag">{item.tag}</span>
                <h3 className="wvt-related-card__title">{item.title}</h3>
                <p className="wvt-related-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="wvt-related__cta">
            <a href="/#services" className="btn btn-outline">
              Explore all services
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="wvt-closing section">
        <div className="container">
          <div className="wvt-closing__box">
            <img src={ctaBoxBg} alt="" className="wvt-closing__bg" loading="lazy" />
            <div className="wvt-closing__orb">
              <img src={orbSphere} alt="" className="orb-sphere__img orb-sphere__img--spin" />
            </div>
            <div className="wvt-closing__content">
              <h2 className="wvt-closing__title">Let&apos;s build what comes next.</h2>
              <p className="wvt-closing__desc">
                Whether you need an AI employee, a SaaS platform, a mobile application, or a custom
                business system, Van Tech Systems can help turn your idea into production-ready
                technology.
              </p>
              <a href="/contact" className="btn btn-primary">
                Start a Project
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
