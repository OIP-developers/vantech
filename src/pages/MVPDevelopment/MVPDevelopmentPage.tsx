import { useEffect } from 'react';
import './mvp-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import reviewResponseSvg from '../../assets/icons/fluent-mdl2-review-response-solid.svg?raw';
import outlineSecuritySvg from '../../assets/icons/ic-outline-security.svg?raw';

import fileSystemSvg from '../../assets/icons/eos-icons-file-system.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import applicationSvg from '../../assets/icons/eos-icons-application.svg?raw';
import clipboardDataSvg from '../../assets/icons/bi-clipboard-data-fill.svg?raw';
import rocketLaunchSvg from '../../assets/icons/heroicons-rocket-launch-20-solid.svg?raw';

import findInPageSvg from '../../assets/icons/material-symbols-find-in-page-rounded.svg?raw';
import dictionaryBookSvg from '../../assets/icons/streamline-dictionary-language-book-solid.svg?raw';
import atCodeSvg from '../../assets/icons/at-icons-code.svg?raw';

import scopeOutlineSvg from '../../assets/icons/cuida-scope-outline.svg?raw';
import industryInnovationSvg from '../../assets/icons/streamline-industry-innovation-and-infrastructure-remix.svg?raw';
import deepfakeTechnologySvg from '../../assets/icons/streamline-plump-deepfake-technology-1-solid.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import fingerprintSvg from '../../assets/icons/fluent-fingerprint-32-filled.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';
import webhookSvg from '../../assets/icons/carbon-webhook.svg?raw';

import heroGlowBlob from '../../assets/images/mvp-development/figma/hero-glow-blob.png';
import heroRocket from '../../assets/images/mvp-development/figma/hero-rocket.png';
import heroOrbitPath from '../../assets/images/mvp-development/figma/hero-orbit-path.svg';
import sectionGlow from '../../assets/images/mvp-development/figma/section-glow.png';
import solutionGlow from '../../assets/images/mvp-development/figma/solution-glow.png';
import solutionLine1 from '../../assets/images/mvp-development/figma/solution-line-1.svg';
import solutionLine2 from '../../assets/images/mvp-development/figma/solution-line-2.svg';
import buildGlow from '../../assets/images/mvp-development/figma/build-glow.png';
import architectureWave from '../../assets/images/mvp-development/figma/architecture-wave.svg';
import pricingGlowOrb from '../../assets/images/mvp-development/figma/pricing-glow-orb.png';

const problems = [
  'Scope grows faster than the product can be built.',
  'Prototypes are thrown away because they were never architected.',
  'Design, development and infrastructure are handled by disconnected suppliers.',
  'No clear definition of what the first release has to prove.',
];

const buildCards = [
  {
    icon: fileSystemSvg,
    title: 'Product Definition',
    desc: 'Core user flows, data model and the scope of the first release.',
  },
  {
    icon: designServicesSvg,
    title: 'Product Design',
    desc: 'Interface design and prototypes for the flows that matter most.',
  },
  {
    icon: applicationSvg,
    title: 'Application',
    desc: 'Frontend, backend, authentication and business logic in one codebase.',
  },
  {
    icon: clipboardDataSvg,
    title: 'Data Foundation',
    desc: 'A schema designed for the product you intend to grow, not just to demo.',
  },
  {
    icon: rocketLaunchSvg,
    title: 'Launch Setup',
    desc: 'Deployment, environments, monitoring and basic analytics.',
  },
  {
    icon: reviewResponseSvg,
    title: 'Iteration Plan',
    desc: 'A prioritized backlog based on what the release actually reveals.',
  },
];

const capabilityRow1 = [
  'Product scoping',
  'UX and UI design',
  'Interactive prototypes',
  'Database architecture',
  'Authentication',
  'Payments',
];

const capabilityRow2 = ['Admin tooling', 'Analytics instrumentation', 'QA and testing', 'Deployment'];

const useCases = [
  {
    title: 'Founder validating an idea',
    desc: 'A focused product that proves demand before larger investment.',
  },
  {
    title: 'Company launching a new line',
    desc: 'A separate product built alongside existing operations.',
  },
  {
    title: 'Replacing a manual service',
    desc: 'Turning a spreadsheet-and-email process into a real application.',
  },
  {
    title: 'Pitching investors or partners',
    desc: 'A working product rather than a slide deck.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Interface', tags: [['Web app', 'Responsive UI'], ['Onboarding']] },
  { number: '02', title: 'Application', tags: [['Business logic', 'API'], ['Authentication', 'Roles']] },
  { number: '03', title: 'Data', tags: [['Database', 'File storage'], ['Events']] },
  { number: '04', title: 'Operations', tags: [['Deployment'], ['Monitoring', 'Analytics']] },
];

const processCards = [
  {
    icon: findInPageSvg,
    title: 'Discover',
    desc: 'Requirements, users, constraints and the goal of the first release.',
  },
  {
    icon: dictionaryBookSvg,
    title: 'Define',
    desc: 'Scope, data model and success criteria agreed before the build starts.',
  },
  {
    icon: designServicesSvg,
    title: 'Design',
    desc: 'Flows and interface design for the core product experience.',
  },
  {
    icon: atCodeSvg,
    title: 'Build',
    desc: 'Application development in reviewable increments.',
  },
  {
    icon: outlineSecuritySvg,
    title: 'Test',
    desc: 'Functional QA, security review and responsive testing.',
  },
  {
    icon: rocketLaunchSvg,
    title: 'Launch',
    desc: 'Deployment, handover and a plan for the next iteration.',
  },
];

const integrations = [
  { icon: paymentsSvg, label: 'Payments' },
  { icon: emailSvg, label: 'Email' },
  { icon: fingerprintSvg, label: 'Auth providers' },
  { icon: funnelSvg, label: 'CRM' },
  { icon: databaseSvg, label: 'Storage' },
  { icon: webhookSvg, label: 'Webhooks' },
];

const whyCards = [
  {
    icon: scopeOutlineSvg,
    title: 'Scoped before it is built',
    desc: 'We agree what the first release proves before development starts.',
  },
  {
    icon: industryInnovationSvg,
    title: 'Architected to continue',
    desc: 'The foundation supports the next version instead of blocking it.',
  },
  {
    icon: deepfakeTechnologySvg,
    title: 'One technology team',
    desc: 'Design, development, data and deployment under one architecture.',
  },
];

export default function MVPDevelopmentPage() {
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
    <main className="mvp-page">
      <section className="mvp-hero section">
        <img src={sectionGlow} alt="" className="mvp-hero__glow" loading="eager" />
        <div className="container">
          <div className="row">
            <div className={`mvp-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="mvp-hero__badge">
                <Icon svg={servicesStarSvg} />
                MVP Development
              </span>
              <h1 className="mvp-hero__title">
                Your Idea.
                <br />
                Built for Launch.
              </h1>
              <p className="mvp-hero__desc">
                Turn an idea into a functional digital product with product strategy,
                architecture, design, development, testing and deployment handled by
                one technology team.
              </p>
              <div className="mvp-hero__actions">
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

            <div className="mvp-hero__graphic" aria-hidden="true">
              <img src={heroGlowBlob} alt="" className="mvp-hero__glow-blob" loading="eager" />
              <img src={heroOrbitPath} alt="" className="mvp-hero__orbit-path" />
              <img src={heroRocket} alt="" className="mvp-hero__rocket" loading="eager" />
              <span className="mvp-hero__float mvp-hero__float--a">
                <Icon svg={reviewResponseSvg} />
              </span>
              <span className="mvp-hero__float mvp-hero__float--b">
                <Icon svg={outlineSecuritySvg} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-disappoint section">
        <div className="container mvp-disappoint__row">
          <div className={`mvp-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="mvp-h1-lg">Why Most First Versions Stall</h2>
            <p className="mvp-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`mvp-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="mvp-disappoint__item" key={text}>
                <span className="mvp-disappoint__item-text">{text}</span>
                <span className="mvp-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mvp-solution section">
        <div className="container mvp-solution__row">
          <div className="mvp-solution__graphic" aria-hidden="true">
            <img src={solutionGlow} alt="" className="mvp-solution__glow" loading="lazy" />
            <img src={solutionLine1} alt="" className="mvp-solution__line mvp-solution__line--a" />
            <img src={solutionLine2} alt="" className="mvp-solution__line mvp-solution__line--b" />
          </div>

          <div className={`mvp-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="mvp-solution__title">A First Release You Can Build On</h2>
            <p className="mvp-solution__desc">
              We start by defining what your first version has to prove, then architect
              it as a real product: a database schema, authentication, a working
              application, and a deployment path. The build is deliberately focused,
              but nothing is a throwaway prototype — the same foundation carries the
              next release.
            </p>
          </div>
        </div>
      </section>

      <section className="mvp-build section" id="what-we-build">
        <img src={buildGlow} alt="" className="mvp-build__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="mvp-h2">What We Build</h2>
          </div>

          <div className="mvp-build__grid">
            {buildCards.map((card) => (
              <div className="mvp-card mvp-build-card" key={card.title}>
                <div className="mvp-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <h3 className="mvp-build-card__title">{card.title}</h3>
                <p className="mvp-build-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="mvp-h2">Capabilities</h2>
          </div>

          <div className="mvp-capabilities__rows">
            <div className="mvp-capabilities__row">
              {capabilityRow1.map((label, i) => (
                <span className={`mvp-pill${i === 0 ? ' mvp-pill--active' : ''}`} key={label}>
                  <span className="mvp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="mvp-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="mvp-pill" key={label}>
                  <span className="mvp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="mvp-h2">Use Cases</h2>
          </div>

          <div className="mvp-usecases__grid">
            {useCases.map((item) => (
              <div className="mvp-card mvp-usecase-card" key={item.title}>
                <h3 className="mvp-usecase-card__title">{item.title}</h3>
                <hr className="mvp-usecase-card__divider" />
                <p className="mvp-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-architecture section" id="process">
        <img src={architectureWave} alt="" className="mvp-architecture__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="mvp-h1-lg mvp-h1-lg--center">MVP architecture</h2>
            <p className="mvp-section-copy">
              Even a first release is a full system. We keep it small, but structured —
              so the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="mvp-architecture__divider" />
            <span className="mvp-architecture__divider-dot" />
          </div>

          <div className="mvp-timeline">
            {timelineSteps.map((step) => (
              <div className="mvp-timeline-step" key={step.number}>
                <span className="mvp-timeline-step__badge">{step.number}</span>
                <h3 className="mvp-timeline-step__title">{step.title}</h3>
                <div className="mvp-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="mvp-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="mvp-timeline-tag" key={tag}>
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

      <section className="mvp-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="mvp-h2">Development Process</h2>
          </div>

          <div className="mvp-process2__grid">
            {processCards.map((card) => (
              <div className="mvp-card mvp-card--flat mvp-process2-card" key={card.title}>
                <div className="mvp-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div className="mvp-process2-card__body">
                  <h3 className="mvp-process2-card__title">{card.title}</h3>
                  <p className="mvp-process2-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="mvp-h1-lg mvp-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className="mvp-integrations__grid">
            {integrations.map((item) => (
              <span className="mvp-integration-pill" key={item.label}>
                <Icon svg={item.icon} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="mvp-h2">Why Van Tech Systems</h2>
          </div>

          <div className="mvp-why__grid">
            {whyCards.map((card) => (
              <div className="mvp-card mvp-card--flat mvp-why-card" key={card.title}>
                <div className="mvp-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div>
                  <h3 className="mvp-why-card__title">{card.title}</h3>
                  <p className="mvp-why-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-pricing-cta section">
        <div className="container">
          <div className="mvp-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="mvp-pricing-cta__glow" loading="lazy" />
            <div className="mvp-pricing-cta__copy">
              <h2 className="mvp-pricing-cta__title">Starting at $2,500/month</h2>
              <p className="mvp-pricing-cta__desc">
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
