import { useEffect } from 'react';
import './saas-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import computerChipSvg from '../../assets/icons/streamline-ultimate-computer-chip-core-bold.svg?raw';
import identityPlatformSvg from '../../assets/icons/material-symbols-light-identity-platform-rounded.svg?raw';
import creditcardSvg from '../../assets/icons/f7-creditcard-fill.svg?raw';
import mobileSvg from '../../assets/icons/material-symbols-mobile-2.svg?raw';
import administratorSvg from '../../assets/icons/clarity-administrator-solid.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import findInPageSvg from '../../assets/icons/material-symbols-find-in-page-rounded.svg?raw';
import developerBoardSvg from '../../assets/icons/material-symbols-light-developer-board-rounded.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import codeSvg from '../../assets/icons/at-icons-code.svg?raw';
import securitySvg from '../../assets/icons/ic-outline-security.svg?raw';
import rocketSvg from '../../assets/icons/heroicons-rocket-launch-20-solid.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/dashicons-email.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import toolsSvg from '../../assets/icons/bi-tools.svg?raw';
import webhooksSvg from '../../assets/icons/ph-webhooks-logo-fill.svg?raw';

import peopleTeamSvg from '../../assets/icons/fluent-people-team-20-filled.svg?raw';

import heroMockup from '../../assets/images/saas-development/figma/hero-dashboard-mockup.png';
import solutionIllustration from '../../assets/images/saas-development/figma/solution-illustration.png';
import buildGlow from '../../assets/images/ai-agents/figma/glow-ellipse-wide.png';
import architectureWave from '../../assets/images/ai-agents/figma/architecture-wave.svg';
import pricingGlowOrb from '../../assets/images/ai-agents/figma/pricing-glow-orb.png';

const problems = [
  'Tenant data separation was not designed at the start.',
  'Roles and permissions do not match how customers organize teams.',
  'Billing, trials and plan changes are handled manually.',
  'There is no admin surface to support customers.',
];

const buildCards = [
  {
    icon: computerChipSvg,
    title: 'Multi-tenant core',
    desc: 'Organizations, membership and enforced data isolation.',
  },
  {
    icon: identityPlatformSvg,
    title: 'Identity',
    desc: 'Sign-up, invitations, roles and permissions per organization.',
  },
  {
    icon: creditcardSvg,
    title: 'Billing',
    desc: 'Plans, trials, upgrades and subscription lifecycle.',
  },
  {
    icon: mobileSvg,
    title: 'Product surface',
    desc: 'The application your customers use every day.',
  },
  {
    icon: administratorSvg,
    title: 'Admin console',
    desc: 'Internal tooling to support accounts and investigate issues.',
  },
  {
    icon: restApiSvg,
    title: 'Platform Services',
    desc: 'APIs, webhooks, email and storage for the product.',
  },
];

const capabilityRow1 = [
  'Multi-tenant architecture',
  'Tenant isolation',
  'Authentication',
  'Role-based access control',
  'Subscriptions and payments',
];

const capabilityRow2 = ['Usage tracking', 'Admin console', 'Public API', 'Transactional email', 'Product analytics'];

const useCases = [
  {
    title: 'New SaaS product',
    desc: 'A platform built for paying customers from the first release.',
  },
  {
    title: 'Productizing a service',
    desc: 'Turning a delivered service into recurring software revenue.',
  },
  {
    title: 'Internal tool to product',
    desc: 'Extending a working internal system for external customers.',
  },
  {
    title: 'Platform modernization',
    desc: 'Rebuilding an ageing product on a maintainable architecture.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Tenants', tags: [['Organizations'], ['Members'], ['Roles'], ['Invitations']] },
  { number: '02', title: 'Platform', tags: [['Authentication'], ['Isolation policies'], ['API'], ['Webhooks']] },
  { number: '03', title: 'Commercial', tags: [['Plans'], ['Subscriptions'], ['Payments'], ['Usage']] },
  { number: '04', title: 'Data', tags: [['Database'], ['Storage', 'Analytics'], ['Audit log']] },
  { number: '05', title: 'Operations', tags: [['Admin console'], ['Monitoring'], ['Deployment'], ['Support tooling']] },
];

const processCards = [
  {
    icon: findInPageSvg,
    title: 'Define',
    desc: 'Product scope, customer model and commercial structure.',
  },
  {
    icon: developerBoardSvg,
    title: 'Architect',
    desc: 'Tenancy, identity, permissions, billing and data design.',
  },
  {
    icon: designServicesSvg,
    title: 'Design',
    desc: 'Product interface and onboarding for new organizations.',
  },
  {
    icon: codeSvg,
    title: 'Build',
    desc: 'Platform and product development in reviewable increments.',
  },
  {
    icon: securitySvg,
    title: 'Test',
    desc: 'Isolation testing, permission testing, billing and security review.',
  },
  {
    icon: rocketSvg,
    title: 'Launch',
    desc: 'Deployment, monitoring, admin tooling and iteration plan.',
  },
];

const integrations = [
  { icon: paymentsSvg, label: 'Payment providers' },
  { icon: identityPlatformSvg, label: 'Identity providers' },
  { icon: emailSvg, label: 'Email' },
  { icon: analyticsSvg, label: 'Analytics' },
  { icon: toolsSvg, label: 'Support tools' },
  { icon: webhooksSvg, label: 'Webhooks' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: designServicesSvg,
    title: 'Tenancy first',
    desc: 'Isolation and permissions are designed before features.',
  },
  {
    icon: creditcardSvg,
    title: 'Commercially complete',
    desc: 'Plans, billing and administration are part of the build.',
  },
  {
    icon: peopleTeamSvg,
    title: 'Operable',
    desc: 'You get the tooling required to support real customers.',
  },
];

export default function SaasDevelopmentPage() {
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
  const disappointHead = useReveal('left');
  const disappointList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const buildHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const architectureHead = useReveal('up');
  const process2Head = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');

  return (
    <main className="saas-page">
      <section className="saas-hero section">
        <div className="container">
          <div className="row">
            <div className={`saas-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="saas-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="saas-hero__title">Build Software People Pay to Use.</h1>
              <p className="saas-hero__desc">
                Multi-tenant platforms with the parts that make software sellable: isolation
                between customers, authentication, roles, subscriptions, administration and
                analytics.
              </p>
              <div className="saas-hero__actions">
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

            <div className="saas-hero__graphic" aria-hidden="true">
              <img src={heroMockup} alt="" className="saas-hero__mockup" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="saas-disappoint section">
        <div className="container saas-disappoint__row">
          <div className={`saas-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="saas-h1-lg">
              The Hard Parts Of <span className="accent">SaaS</span> Are Not The Features
            </h2>
            <p className="saas-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`saas-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="saas-disappoint__item" key={text}>
                <span className="saas-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="saas-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="saas-solution section">
        <div className="container saas-solution__row">
          <div className="saas-solution__graphic">
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`saas-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="saas-solution__title">A Platform Designed To Be Sold</h2>
            <p className="saas-solution__desc">
              We architect tenancy, identity and billing first, then build the product on top.
              Organizations, invitations, roles, plans, usage and administration are part of the
              platform rather than later additions.
            </p>
          </div>
        </div>
      </section>

      <section className="saas-build section" id="what-we-build">
        <img src={buildGlow} alt="" className="saas-build__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="saas-h2">What we build</h2>
          </div>

          <div className="saas-build__grid">
            {buildCards.map((card) => (
              <div className="saas-card saas-build-card" key={card.title}>
                <div className="saas-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <h3 className="saas-build-card__title">{card.title}</h3>
                <p className="saas-build-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="saas-h2">Capabilities</h2>
          </div>

          <div className="saas-capabilities__rows">
            <div className="saas-capabilities__row">
              {capabilityRow1.map((label, i) => (
                <span className={`saas-pill${i === 0 ? ' saas-pill--active' : ''}`} key={label}>
                  <span className="saas-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="saas-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="saas-pill" key={label}>
                  <span className="saas-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="saas-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="saas-h2">Use Cases</h2>
          </div>

          <div className="saas-usecases__grid">
            {useCases.map((item) => (
              <div className="saas-card saas-usecase-card" key={item.title}>
                <h3 className="saas-usecase-card__title">{item.title}</h3>
                <hr className="saas-usecase-card__divider" />
                <p className="saas-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-architecture section" id="process">
        <img src={architectureWave} alt="" className="saas-architecture__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="saas-h1-lg saas-h1-lg--center">SaaS architecture</h2>
            <p className="saas-section-copy">
              Tenant isolation is enforced at the data layer, not only in the interface.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="saas-architecture__divider" />
            <span className="saas-architecture__divider-dot" />
          </div>

          <div className="saas-timeline">
            {timelineSteps.map((step) => (
              <div className="saas-timeline-step" key={step.number}>
                <span className="saas-timeline-step__badge">{step.number}</span>
                <h3 className="saas-timeline-step__title">{step.title}</h3>
                <div className="saas-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="saas-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="saas-timeline-tag" key={tag}>
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

      <section className="saas-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="saas-h2">Development Process</h2>
          </div>

          <div className="saas-process2__grid">
            {processCards.map((card) => (
              <div className="saas-card saas-card--flat saas-process2-card" key={card.title}>
                <div className="saas-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div className="saas-process2-card__body">
                  <h3 className="saas-process2-card__title">{card.title}</h3>
                  <p className="saas-process2-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="saas-h1-lg saas-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className="saas-integrations__grid">
            {integrations.map((item) => (
              <span className="saas-integration-pill" key={item.label}>
                <Icon svg={item.icon} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="saas-h2">Why Van Tech Systems</h2>
          </div>

          <div className="saas-why__grid">
            {whyCards.map((card) => (
              <div className="saas-card saas-card--flat saas-why-card" key={card.title}>
                <div className="saas-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div>
                  <h3 className="saas-why-card__title">{card.title}</h3>
                  <p className="saas-why-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-pricing-cta section">
        <div className="container">
          <div className="saas-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="saas-pricing-cta__glow" loading="lazy" />
            <div className="saas-pricing-cta__copy">
              <h2 className="saas-pricing-cta__title">Starting at $7,500/month</h2>
              <p className="saas-pricing-cta__desc">
                Starting prices are planning benchmarks. Final pricing depends on scope,
                architecture, integrations and technical requirements.
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
