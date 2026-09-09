import { useEffect } from 'react';
import './partners.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import coinSvg from '../../assets/icons/streamline-ultimate-monetization-touch-coin-bold.svg?raw';
import supportSvg from '../../assets/icons/boxicons-message-detail-filled.svg?raw';
import partnerExchangeSvg from '../../assets/icons/material-symbols-partner-exchange.svg?raw';
import setupSvg from '../../assets/icons/hugeicons-setup-01.svg?raw';
import adsClickSvg from '../../assets/icons/ic-outline-ads-click.svg?raw';
import engineeringSvg from '../../assets/icons/ic-baseline-engineering.svg?raw';
import financeSvg from '../../assets/icons/material-symbols-finance-sharp.svg?raw';
import orbStarSvg from '../../assets/icons/orb-star.svg?raw';

import heroBannerBlur from '../../assets/images/about/figma/hero-banner-blur.png';
import heroBannerGlow from '../../assets/images/about/figma/about-banner12.png';
import processGlow from '../../assets/images/about/figma/process-glow-rendered.png';
import orbSphere from '../../assets/images/orb-sphere.webp';
import archDivider1 from '../../assets/images/about/image-I-1.png';
import archDivider2 from '../../assets/images/about/image-J-2.png';
import archDivider3 from '../../assets/images/about/image-K-3.png';

const benefits = [
  {
    icon: coinSvg,
    title: 'Transparent Revenue Share',
    desc: 'A clear, agreed commission on every engagement you bring us — paid on delivery, not on promises.',
  },
  {
    icon: supportSvg,
    title: 'A Dedicated Point of Contact',
    desc: 'One engineering contact who knows your accounts, not a rotating support queue.',
  },
  {
    icon: partnerExchangeSvg,
    title: 'White-Label Delivery',
    desc: 'We build under your brand. Clients see your name — the engineering happens behind the scenes.',
  },
  {
    icon: setupSvg,
    title: 'Fast, Guided Onboarding',
    desc: 'A short onboarding process gets your first referral scoped and moving within days, not months.',
  },
];

const stats = [
  { value: '0%', label: 'Equity Required' },
  { value: '04', label: 'Ways to partner' },
  { value: '1 Team', label: 'Technology delivery partner' },
  { value: 'Global', label: 'Remote delivery capability' },
];

const tiers = [
  {
    title: 'Referral Partner',
    desc: 'Best for people who simply want to introduce qualified businesses to Van Tech Systems.',
  },
  {
    title: 'Reseller Partner',
    desc: 'Best for agencies wanting to sell VTS solutions directly.',
  },
  {
    title: 'Delivery Partner',
    desc: "Best for agencies with their own delivery team who want us for the pieces they don't build in-house.",
  },
];

const processSteps = [
  {
    number: '01',
    icon: adsClickSvg,
    title: 'Apply',
    desc: 'Tell us about your business and the kind of clients you work with. Most applications get a response within a few days.',
  },
  {
    number: '02',
    icon: setupSvg,
    title: 'Onboard',
    desc: 'A short call to agree the partnership model, commission structure and how referrals get scoped.',
  },
  {
    number: '03',
    icon: engineeringSvg,
    title: 'Refer or Deliver',
    desc: 'Bring us a client, or hand off a scoped engagement. We keep you informed at every stage.',
  },
  {
    number: '04',
    icon: financeSvg,
    title: 'Earn & Grow',
    desc: 'Get paid on delivery. As the relationship proves out, take on larger and more technical engagements.',
  },
];

const valuePoints = [
  'Signed engagements scoped by the engineers who build them',
  'Regular status updates you can forward directly to your client',
  'Support materials to help you pitch and close technical work',
  'Direct access to the delivery team when a client has questions',
];

export default function PartnersPage() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      if (href.length > 1) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const heroCopy = useReveal('left');
  const heroGraphic = useReveal('right');
  const statsReveal = useReveal('up');
  const tiersHead = useReveal('up');
  const benefitsHead = useReveal('up');
  const processHead = useReveal('up');
  const valueCopy = useReveal('left');
  const valueList = useReveal<HTMLUListElement>('right');

  return (
    <main className="partners-page">
      <section className="partners-hero section">
        <div className="partners-hero__banner">
          <img src={heroBannerBlur} alt="" className="partners-hero__banner-img" loading="eager" />
        </div>
        <div className="partners-hero__banner-fade" />
        <img src={heroBannerGlow} alt="" className="partners-hero__banner-glow" loading="eager" />

        <div className="container partners-hero__container">
          <div className={`partners-hero__copy ${heroCopy.className}`} ref={heroCopy.ref}>
            <span className="eyebrow-pill">
              <Icon svg={partnerExchangeSvg} className="eyebrow-pill__icon" />
              VTS Partner Network
            </span>
            <h1 className="partners-hero__title">Grow Your Agency. We Power the Technology.</h1>
            <p className="partners-hero__desc">
              Offer premium AI, automation, software, SaaS, web development and digital
              transformation solutions without building a large technical team internally.
            </p>
            <p className="partners-hero__desc">
              Van Tech Systems provides the technology and delivery infrastructure. You
              focus on relationships, sales, strategy and growth.
            </p>
            <div className="partners-hero__actions">
              <a href="/contact" className="btn btn-primary">
                Become VTS Partner
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="#tiers" className="btn btn-outline">
                Explore Pricing Partner
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>

          <div className={`partners-hero__graphic ${heroGraphic.className}`} ref={heroGraphic.ref}>
            <div className="partners-chart">
              <Icon svg={orbStarSvg} className="partners-chart__star partners-chart__star--1" />
              <Icon svg={orbStarSvg} className="partners-chart__star partners-chart__star--2" />
              <svg className="partners-chart__arrow" viewBox="0 0 480 420" fill="none">
                <defs>
                  <linearGradient id="partnersChartArrow" x1="0" y1="380" x2="460" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="var(--color-blue)" />
                    <stop offset="1" stopColor="var(--color-orange)" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 380 C 140 340, 200 260, 260 190 S 380 70, 440 40"
                  stroke="url(#partnersChartArrow)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path d="M440 40 L 405 46 M440 40 L 424 70" stroke="url(#partnersChartArrow)" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <div className="partners-chart__bars">
                <span className="partners-chart__bar partners-chart__bar--1" />
                <span className="partners-chart__bar partners-chart__bar--2" />
                <span className="partners-chart__bar partners-chart__bar--3" />
                <span className="partners-chart__bar partners-chart__bar--4" />
                <span className="partners-chart__bar partners-chart__bar--5" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={`partners-stats ${statsReveal.className}`} ref={statsReveal.ref}>
            {stats.map((s) => (
              <div className="partners-stat" key={s.label}>
                <span className="partners-stat__value">{s.value}</span>
                <span className="partners-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-tiers section" id="tiers">
        <div className="container">
          <div className={`partners-tiers__head ${tiersHead.className}`} ref={tiersHead.ref}>
            <span className="partners-tiers__badge">
              <Icon svg={partnerExchangeSvg} />
            </span>
            <svg className="partners-tiers__arc" viewBox="0 0 620 60" fill="none" preserveAspectRatio="none">
              <path d="M10 55 C 160 -10, 460 -10, 610 55" stroke="url(#partnersArcGradient)" strokeWidth="1.5" fill="none" />
              <defs>
                <linearGradient id="partnersArcGradient" x1="0" y1="0" x2="620" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="var(--color-blue)" stopOpacity="0" />
                  <stop offset="0.5" stopColor="var(--color-orange)" />
                  <stop offset="1" stopColor="var(--color-blue)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="section-title">One Technology Partner. Multiple Ways to Grow.</h2>
          </div>

          <div className="partners-tiers__grid">
            {tiers.map((tier) => (
              <div className="partners-tier-card" key={tier.title}>
                <h3 className="partners-tier-card__title">{tier.title}</h3>
                <p className="partners-tier-card__desc">{tier.desc}</p>
                <div className="partners-tier-card__flow">
                  <span className="partners-tier-card__tag">Partner</span>
                  <Icon svg={arrowRightSvg} className="partners-tier-card__flow-arrow" />
                  <span className="partners-tier-card__tag">Van Tech Systems</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider2} alt="" className="partners-divider" loading="lazy" />
      </section>

      <section className="partners-benefits section">
        <div className="container">
          <div className={`section-head ${benefitsHead.className}`} ref={benefitsHead.ref}>
            <span className="eyebrow-pill">Why Partner With Us</span>
            <h2 className="section-title">A partnership built to be worth your time</h2>
          </div>

          <div className="partners-benefits__grid">
            {benefits.map((b) => (
              <div className="partners-benefit-card" key={b.title}>
                <div className="partners-benefit-card__icon">
                  <Icon svg={b.icon} />
                </div>
                <h3 className="partners-benefit-card__title">{b.title}</h3>
                <p className="partners-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider1} alt="" className="partners-divider" loading="lazy" />
      </section>

      <section className="partners-process section" id="how-it-works">
        <img src={processGlow} alt="" className="partners-process__glow-bg" loading="lazy" />
        <div className="container partners-narrow">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="section-title">How the partnership works, step by step</h2>
          </div>

          <div className="partners-process__list">
            {processSteps.map((step, i) => (
              <div
                className={`partners-process-item${i === 0 ? ' partners-process-item--active' : ''}`}
                key={step.number}
              >
                <div className="partners-process-item__icon">
                  <Icon svg={step.icon} />
                </div>
                <div className="partners-process-item__body">
                  <div className="partners-process-item__head">
                    <span className="partners-process-item__number">{step.number}</span>
                    <h3 className="partners-process-item__title">{step.title}</h3>
                  </div>
                  <p className="partners-process-item__desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider3} alt="" className="partners-divider" loading="lazy" />
      </section>

      <section className="partners-value section">
        <div className="container partners-row">
          <div className={`partners-copy ${valueCopy.className}`} ref={valueCopy.ref}>
            <h2 className="partners-title">
              Everything you need to sell technology with confidence.
            </h2>
            <p className="partners-desc">
              You don't need an engineering team to offer AI, automation or software to
              your clients. We scope, build and support the work — you stay the face of
              the relationship.
            </p>
          </div>

          <div className="partners-value__graphic">
            <div className="orb-sphere">
              <img src={orbSphere} alt="" className="orb-sphere__img orb-sphere__img--spin" loading="lazy" />
            </div>
            <ul className={`partners-value__list ${valueList.className}`} ref={valueList.ref}>
              {valuePoints.map((point, i) => (
                <li key={point} className="partners-value__point">
                  <span className="partners-value__point-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="partners-value__point-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
