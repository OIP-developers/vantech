import { useEffect } from 'react';
import './ecommerce-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import storeAltSvg from '../../assets/icons/boxicons-store-alt-filled.svg?raw';
import wpfAssistantSvg from '../../assets/icons/wpf-assistant.svg?raw';
import cashierSvg from '../../assets/icons/streamline-sharp-cashier-machine-2-solid.svg?raw';
import cartExchangeSvg from '../../assets/icons/streamline-ultimate-mobile-shopping-cart-exchange-bold.svg?raw';
import orderApproveSvg from '../../assets/icons/material-symbols-order-approve.svg?raw';
import fileReportSvg from '../../assets/icons/boxicons-file-report-filled.svg?raw';

import findInPageSvg from '../../assets/icons/material-symbols-find-in-page-rounded.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import robotFilledSvg from '../../assets/icons/boxicons-robot-filled.svg?raw';
import outlineSecuritySvg from '../../assets/icons/ic-outline-security.svg?raw';
import rocketLaunchSvg from '../../assets/icons/heroicons-rocket-launch-20-solid.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import shippingFastSvg from '../../assets/icons/fa7-solid-shipping-fast.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import messageCircleDetailSvg from '../../assets/icons/boxicons-message-circle-detail-filled.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import warehouseSvg from '../../assets/icons/ic-baseline-warehouse.svg?raw';
import accountingSvg from '../../assets/icons/map-accounting.svg?raw';

import contentSaveCogSvg from '../../assets/icons/mdi-content-save-cog.svg?raw';
import ixAiSvg from '../../assets/icons/ix-ai.svg?raw';
import atRulerSvg from '../../assets/icons/at-icons-ruler.svg?raw';

import heroOutline from '../../assets/images/ecommerce-development/figma/hero-outline.svg';
import heroGlow from '../../assets/images/ecommerce-development/figma/hero-glow.png';
import heroBadgeCart from '../../assets/images/ecommerce-development/figma/hero-badge-cart.svg';
import heroBadgeOrder from '../../assets/images/ecommerce-development/figma/hero-badge-order.svg';
import solutionOutline from '../../assets/images/ecommerce-development/figma/solution-outline.svg';
import solutionGlow from '../../assets/images/ecommerce-development/figma/solution-glow.png';
import solutionIllustration from '../../assets/images/ecommerce-development/figma/solution-illustration.png';
import buildGlow from '../../assets/images/ecommerce-development/figma/build-glow.png';
import architectureBg from '../../assets/images/ecommerce-development/figma/architecture-bg.svg';
import pricingGlowOrb from '../../assets/images/ecommerce-development/figma/pricing-glow-orb.png';
import capabilitiesGlow from '../../assets/images/ecommerce-development/figma/glow-ellipse-wide.png';

const problems = [
  'Support answers the same order questions every day.',
  'Carts are abandoned with no structured recovery.',
  'Product discovery does not match how customers search.',
  'Order, payment and fulfilment data live in separate places.',
];

const buildCards = [
  {
    icon: storeAltSvg,
    title: 'Storefront',
    desc: 'A fast, responsive buying experience designed around your catalogue.',
  },
  {
    icon: wpfAssistantSvg,
    title: 'Commerce Assistant',
    desc: 'AI answers for order, product and policy questions.',
  },
  {
    icon: cashierSvg,
    title: 'Checkout and Payments',
    desc: 'Payment flows, subscriptions and order confirmation.',
  },
  {
    icon: cartExchangeSvg,
    title: 'Recovery and Lifecycle',
    desc: 'Cart recovery and lifecycle messaging based on real behaviour.',
  },
  {
    icon: orderApproveSvg,
    title: 'Post-purchase',
    desc: 'Order status, shipping updates and returns communication.',
  },
  {
    icon: fileReportSvg,
    title: 'Operations',
    desc: 'Admin tooling and reporting for the team running the store.',
  },
];

const capabilityRow1 = [
  'Catalogue and merchandising',
  'Checkout',
  'Payments and subscriptions',
  'Order management',
  'Shipping updates',
];

const capabilityRow2 = [
  'Customer support automation',
  'Cart recovery',
  'Product discovery',
  'Lifecycle messaging',
  'Commerce analytics',
];

const useCases = [
  {
    title: 'Direct-to-consumer brands',
    desc: 'A storefront with automated post-purchase communication.',
  },
  {
    title: 'Subscription Commerce',
    desc: 'Recurring billing with account and plan management.',
  },
  {
    title: 'Catalogue-heavy stores',
    desc: 'Search and discovery designed for large product sets.',
  },
  {
    title: 'Service commerce',
    desc: 'Bookable services sold and managed online.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Experience', tags: [['Storefront', 'Search'], ['Checkout'], ['Account']] },
  { number: '02', title: 'Commerce', tags: [['Catalogue'], ['Orders', 'Payments'], ['Subscriptions']] },
  { number: '03', title: 'Operations', tags: [['Fulfilment'], ['Support', 'Notifications']] },
  { number: '04', title: 'Intelligence', tags: [['Assistant'], ['Recovery', 'Analytics'], ['Recommendations']] },
];

const processCards = [
  {
    icon: findInPageSvg,
    title: 'Discover',
    desc: 'Catalogue, customer journeys and operational constraints.',
  },
  {
    icon: designServicesSvg,
    title: 'Design',
    desc: 'Storefront and checkout experience across devices.',
  },
  {
    icon: designServicesSvg,
    title: 'Build',
    desc: 'Store, payments, order flow and integrations.',
  },
  {
    icon: robotFilledSvg,
    title: 'Automate',
    desc: 'Support, recovery and lifecycle messaging.',
  },
  {
    icon: outlineSecuritySvg,
    title: 'Test',
    desc: 'Payment testing, responsive QA and performance review.',
  },
  {
    icon: rocketLaunchSvg,
    title: 'Launch',
    desc: 'Deployment, analytics and post-launch monitoring.',
  },
];

const integrations = [
  { icon: paymentsSvg, label: 'Payment providers' },
  { icon: shippingFastSvg, label: 'Shipping' },
  { icon: emailSvg, label: 'Email' },
  { icon: messageCircleDetailSvg, label: 'Messaging' },
  { icon: funnelSvg, label: 'CRM' },
  { icon: analyticsSvg, label: 'Analytics' },
  { icon: warehouseSvg, label: 'Inventory' },
  { icon: accountingSvg, label: 'Accounting' },
];

const whyCards = [
  {
    icon: contentSaveCogSvg,
    title: 'Built for operations',
    desc: 'We design the work behind the order, not only the storefront.',
  },
  {
    icon: ixAiSvg,
    title: 'Automation where it repeats',
    desc: 'AI is applied to the questions and journeys that recur.',
  },
  {
    icon: atRulerSvg,
    title: 'Measurable',
    desc: 'Analytics are instrumented as part of the build.',
  },
];

export default function EcommerceDevelopmentPage() {
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

  const hero = useReveal('up');
  const leakHead = useReveal('left');
  const leakList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const buildHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const architectureHead = useReveal('up');
  const process2Head = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');

  return (
    <main className="ecommerce-page">
      <section className="ecommerce-hero section">
        <div className="container">
          <div className="row">
            <div className={`ecommerce-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="ecommerce-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="ecommerce-hero__title">Commerce That Works Smarter.</h1>
              <p className="ecommerce-hero__desc">
                Storefronts, payments and post-purchase experiences connected to
                automation and AI — so customers get answers and your team stops
                handling the same requests manually.
              </p>
              <div className="ecommerce-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#what-we-build" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="ecommerce-hero__graphic" aria-hidden="true">
              <img src={heroGlow} alt="" className="ecommerce-hero__glow" loading="eager" />
              <img src={heroOutline} alt="" className="ecommerce-hero__outline" loading="eager" />
              <img
                src={heroBadgeCart}
                alt=""
                className="ecommerce-hero__badge-icon ecommerce-hero__badge-icon--a"
              />
              <img
                src={heroBadgeOrder}
                alt=""
                className="ecommerce-hero__badge-icon ecommerce-hero__badge-icon--b"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-leak section">
        <div className="container ecommerce-leak__row">
          <div className={`ecommerce-leak__copy ${leakHead.className}`} ref={leakHead.ref}>
            <h2 className="ecommerce-h1-lg">
              Where <span className="accent">Commerce</span> Operations Leak
            </h2>
            <p className="ecommerce-p-lg">
              Most stores do not lose money on the storefront. They lose it in
              abandoned carts, repeated support questions and manual post-purchase
              work.
            </p>
          </div>

          <ul className={`ecommerce-leak__list ${leakList.className}`} ref={leakList.ref}>
            {problems.map((text, i) => (
              <li className="ecommerce-leak__item" key={text}>
                <span className="ecommerce-leak__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="ecommerce-leak__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ecommerce-solution section">
        <div className="container ecommerce-solution__row">
          <div className="ecommerce-solution__graphic">
            <img src={solutionGlow} alt="" className="ecommerce-solution__glow" loading="lazy" />
            <img src={solutionOutline} alt="" className="ecommerce-solution__outline" loading="lazy" />
            <img
              src={solutionIllustration}
              alt=""
              className="ecommerce-solution__illustration"
              loading="lazy"
            />
          </div>

          <div className={`ecommerce-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="ecommerce-solution__title">Commerce Connected End To End</h2>
            <p className="ecommerce-solution__desc">
              We build the storefront and the operational layer behind it: payments,
              order flow, fulfilment updates, customer messaging and analytics — with
              AI assistance for the questions and journeys that repeat.
            </p>
          </div>
        </div>
      </section>

      <section className="ecommerce-build section" id="what-we-build">
        <img src={buildGlow} alt="" className="ecommerce-build__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="ecommerce-h2">What We Build</h2>
          </div>

          <div className="ecommerce-build__grid">
            {buildCards.map((card) => (
              <div className="ecommerce-card ecommerce-build-card" key={card.title}>
                <div className="ecommerce-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <h3 className="ecommerce-build-card__title">{card.title}</h3>
                <p className="ecommerce-build-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-capabilities section">
        <img src={capabilitiesGlow} alt="" className="ecommerce-capabilities__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="ecommerce-h2">Capabilities</h2>
          </div>

          <div className="ecommerce-capabilities__rows">
            <div className="ecommerce-capabilities__row">
              {capabilityRow1.map((label, i) => (
                <span className={`ecommerce-pill${i === 0 ? ' ecommerce-pill--active' : ''}`} key={label}>
                  <span className="ecommerce-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="ecommerce-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="ecommerce-pill" key={label}>
                  <span className="ecommerce-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="ecommerce-h2">Use Cases</h2>
          </div>

          <div className="ecommerce-usecases__grid">
            {useCases.map((item) => (
              <div className="ecommerce-card ecommerce-usecase-card" key={item.title}>
                <h3 className="ecommerce-usecase-card__title">{item.title}</h3>
                <hr className="ecommerce-usecase-card__divider" />
                <p className="ecommerce-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-architecture section" id="architecture">
        <img src={architectureBg} alt="" className="ecommerce-architecture__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="ecommerce-h1-lg ecommerce-h1-lg--center">MVP architecture</h2>
            <p className="ecommerce-section-copy">
              Even a first release is a full system. We keep it small, but structured
              — so the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="ecommerce-architecture__divider" />
            <span className="ecommerce-architecture__divider-dot" />
          </div>

          <div className="ecommerce-timeline">
            {timelineSteps.map((step) => (
              <div className="ecommerce-timeline-step" key={step.number}>
                <span className="ecommerce-timeline-step__badge">{step.number}</span>
                <h3 className="ecommerce-timeline-step__title">{step.title}</h3>
                <div className="ecommerce-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="ecommerce-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="ecommerce-timeline-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="ecommerce-h2">Development Process</h2>
          </div>

          <div className="ecommerce-process2__grid">
            {processCards.map((card, i) => (
              <div className="ecommerce-card ecommerce-card--flat ecommerce-process2-card" key={`${card.title}-${i}`}>
                <div className="ecommerce-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div className="ecommerce-process2-card__body">
                  <h3 className="ecommerce-process2-card__title">{card.title}</h3>
                  <p className="ecommerce-process2-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="ecommerce-h1-lg ecommerce-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className="ecommerce-integrations__grid">
            {integrations.map((item) => (
              <span className="ecommerce-integration-pill" key={item.label}>
                <Icon svg={item.icon} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="ecommerce-h2">Why Van Tech Systems</h2>
          </div>

          <div className="ecommerce-why__grid">
            {whyCards.map((card) => (
              <div className="ecommerce-card ecommerce-card--flat ecommerce-why-card" key={card.title}>
                <div className="ecommerce-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div>
                  <h3 className="ecommerce-why-card__title">{card.title}</h3>
                  <p className="ecommerce-why-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-pricing-cta section">
        <div className="container">
          <div className="ecommerce-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="ecommerce-pricing-cta__glow" loading="lazy" />
            <div className="ecommerce-pricing-cta__copy">
              <h2 className="ecommerce-pricing-cta__title">Starting at $3,500/month</h2>
              <p className="ecommerce-pricing-cta__desc">
                Starting prices are planning benchmarks. Final pricing depends on
                scope, architecture, integrations and technical requirements.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              Get my project estimate
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
