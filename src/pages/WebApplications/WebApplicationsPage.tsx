import { useEffect } from 'react';
import './web-applications.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';
import codeSvg from '../../assets/icons/at-icons-code.svg?raw';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import schedulerSvg from '../../assets/icons/ix-scheduler-filled.svg?raw';
import dashboardFilledSvg from '../../assets/icons/boxicons-dashboard-filled.svg?raw';
import toolsSvg from '../../assets/icons/ep-tools.svg?raw';
import systemOkSvg from '../../assets/icons/eos-icons-system-ok.svg?raw';
import fileSystemSvg from '../../assets/icons/eos-icons-file-system.svg?raw';

import findInPageSvg from '../../assets/icons/material-symbols-find-in-page-rounded.svg?raw';
import devBoardSvg from '../../assets/icons/material-symbols-light-developer-board-rounded.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import securitySvg from '../../assets/icons/ic-outline-security.svg?raw';
import rocketSvg from '../../assets/icons/heroicons-rocket-launch-20-solid.svg?raw';

import accountBalanceSvg from '../../assets/icons/ic-round-account-balance.svg?raw';
import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/dashicons-email.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import databaseSvg from '../../assets/icons/ant-design-database-filled.svg?raw';
import webhookSvg from '../../assets/icons/carbon-webhook.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import openDataSvg from '../../assets/icons/academicons-open-data.svg?raw';
import industrySvg from '../../assets/icons/streamline-industry-innovation-and-infrastructure-remix.svg?raw';
import deepfakeSvg from '../../assets/icons/streamline-plump-deepfake-technology-1-solid.svg?raw';

import heroBgGlow from '../../assets/images/web-applications/figma/hero-bg-glow.png';
import heroGridLines from '../../assets/images/web-applications/figma/hero-grid-lines.svg';
import heroWebAppScreen from '../../assets/images/web-applications/figma/hero-web-app-screen.png';
import heroWebAppIcon from '../../assets/images/web-applications/figma/hero-web-app-icon.png';
import solutionIllustration from '../../assets/images/web-applications/figma/solution-illustration.png';
import sectionGlow from '../../assets/images/web-applications/figma/section-glow.png';
import buildGlow from '../../assets/images/web-applications/figma/build-glow.png';
import architectureWave from '../../assets/images/web-applications/figma/architecture-wave.svg';

const problems = [
  'Critical processes run in spreadsheets beside the official system.',
  'Data is duplicated across tools that do not agree.',
  'Permissions are too coarse for how the team actually works.',
  'License costs grow while the fit gets worse.',
];

const buildCards = [
  {
    icon: funnelSvg,
    title: 'CRM Platforms',
    desc: 'Pipelines and customer records designed around your sales process.',
  },
  {
    icon: schedulerSvg,
    title: 'Booking Platforms',
    desc: 'Availability, scheduling and confirmation workflows.',
  },
  {
    icon: dashboardFilledSvg,
    title: 'Client portals',
    desc: 'Secure external access to documents, status and communication.',
  },
  {
    icon: toolsSvg,
    title: 'Internal Tools',
    desc: 'Admin interfaces that replace manual spreadsheet work.',
  },
  {
    icon: systemOkSvg,
    title: 'Operations Systems',
    desc: 'The day-to-day tooling your team runs the business on.',
  },
  {
    icon: fileSystemSvg,
    title: 'Workflow Systems',
    desc: 'Multi-step approvals, assignments and status tracking.',
  },
];

const capabilityRow1 = [
  'Data modelling',
  'Role-based access control',
  'Workflow engines',
  'Document handling',
  'Reporting and dashboards',
  'Audit trails',
];

const capabilityRow2 = ['Notifications', 'API development', 'Third-party integrations', 'Deployment and monitoring'];

const useCases = [
  {
    title: 'Replacing spreadsheets',
    desc: 'A single source of truth with permissions and history.',
  },
  {
    title: 'Consolidating tools',
    desc: 'One system where several disconnected ones used to be.',
  },
  {
    title: 'Serving clients online',
    desc: 'A portal that reduces status emails and phone calls.',
  },
  {
    title: 'Scaling a manual process',
    desc: 'Structured workflows that survive higher volume.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Frontend', tags: [['Responsive UI', 'Dashboards'], ['Forms', 'Reporting']] },
  { number: '02', title: 'API', tags: [['Endpoints', 'Validation'], ['Rate limits']] },
  { number: '03', title: 'Business logic', tags: [['Workflows', 'Rules'], ['Automation']] },
  { number: '04', title: 'Operations', tags: [['Deployment', 'Monitoring'], ['Analytics']] },
  { number: '05', title: 'Platform', tags: [['Authentication', 'Monitoring'], ['Deployment', 'Integrations']] },
];

const processCards = [
  {
    icon: findInPageSvg,
    title: 'Discover',
    desc: 'Users, roles, workflows and the systems already in place.',
  },
  {
    icon: devBoardSvg,
    title: 'Architect',
    desc: 'Data model, permissions, integrations and infrastructure.',
  },
  {
    icon: designServicesSvg,
    title: 'Design',
    desc: 'Interface design for the roles that will use it daily.',
  },
  {
    icon: codeSvg,
    title: 'Build',
    desc: 'Iterative development with review at each increment.',
  },
  {
    icon: securitySvg,
    title: 'Test',
    desc: 'Functional QA, permission testing and security review.',
  },
  {
    icon: rocketSvg,
    title: 'Launch',
    desc: 'Deployment, data migration where needed, training and handover.',
  },
];

const integrations = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: accountBalanceSvg, label: 'Accounting' },
  { icon: paymentsSvg, label: 'Payments' },
  { icon: emailSvg, label: 'Email' },
  { icon: calendarSvg, label: 'Calendars' },
  { icon: databaseSvg, label: 'Storage' },
  { icon: webhookSvg, label: 'Identity providers' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: openDataSvg,
    title: 'Modelled on your operation',
    desc: 'The data structure reflects how your business actually works.',
  },
  {
    icon: industrySvg,
    title: 'Permissions taken seriously',
    desc: 'Access control is designed with the application, not bolted on.',
  },
  {
    icon: deepfakeSvg,
    title: 'Built to extend',
    desc: 'New modules and integrations fit the existing architecture.',
  },
];

export default function WebApplicationsPage() {
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
    <main className="webapps-page">
      <section className="webapps-hero section">
        <img src={heroBgGlow} alt="" className="webapps-hero__bg-glow" loading="eager" />
        <div className="container">
          <div className="webapps-hero__row">
            <div className={`webapps-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="webapps-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="webapps-hero__title">Custom Software. Built Around Your Business.</h1>
              <p className="webapps-hero__desc">
                We do not force your business into generic software. We design applications
                around your workflows, users, operations and growth plans.
              </p>
              <div className="webapps-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#build" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="webapps-hero__graphic" aria-hidden="true">
              <img src={heroGridLines} alt="" className="webapps-hero__grid-lines" />
              <div className="webapps-hero__code-badge">
                <Icon svg={codeSvg} />
              </div>
              <img src={heroWebAppScreen} alt="" className="webapps-hero__screen" loading="eager" />
              <img src={heroWebAppIcon} alt="" className="webapps-hero__icon-float" />
            </div>
          </div>
        </div>
      </section>

      <section className="webapps-disappoint section">
        <div className="container webapps-disappoint__row">
          <div className={`webapps-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="webapps-h1-lg">When Generic Software Becomes The Constraint</h2>
            <p className="webapps-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`webapps-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="webapps-disappoint__item" key={text}>
                <span className="webapps-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="webapps-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="webapps-solution section">
        <img src={sectionGlow} alt="" className="webapps-solution__bg" loading="lazy" />
        <div className="container webapps-solution__row">
          <div className="webapps-solution__graphic">
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`webapps-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="webapps-solution__title">An Application Shaped By Your Operation</h2>
            <p className="webapps-solution__desc">
              We model your entities, roles and workflows first, then build the application
              around them: a real data layer, granular permissions, the screens your team
              needs, and integrations with the systems you keep.
            </p>
          </div>
        </div>
      </section>

      <section className="webapps-build section" id="build">
        <img src={buildGlow} alt="" className="webapps-build__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="webapps-h2">What we build</h2>
          </div>

          <div className="webapps-build__grid">
            {buildCards.map((card) => (
              <div className="webapps-card webapps-build-card" key={card.title}>
                <div className="webapps-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <h3 className="webapps-build-card__title">{card.title}</h3>
                <p className="webapps-build-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="webapps-h2">Capabilities</h2>
          </div>

          <div className="webapps-capabilities__rows">
            <div className="webapps-capabilities__row">
              {capabilityRow1.map((label, i) => (
                <span className={`webapps-pill${i === 0 ? ' webapps-pill--active' : ''}`} key={label}>
                  <span className="webapps-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="webapps-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="webapps-pill" key={label}>
                  <span className="webapps-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="webapps-usecases section">
        <img src={sectionGlow} alt="" className="webapps-usecases__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="webapps-h2">Use Cases</h2>
          </div>

          <div className="webapps-usecases__grid">
            {useCases.map((item) => (
              <div className="webapps-card webapps-usecase-card" key={item.title}>
                <h3 className="webapps-usecase-card__title">{item.title}</h3>
                <hr className="webapps-usecase-card__divider" />
                <p className="webapps-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-architecture section" id="process">
        <img src={architectureWave} alt="" className="webapps-architecture__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="webapps-h1-lg webapps-h1-lg--center">Application Architecture</h2>
            <p className="webapps-section-copy">
              Even a first release is a full system. We keep it small, but structured — so
              the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="webapps-architecture__divider" />
            <span className="webapps-architecture__divider-dot" />
          </div>

          <div className="webapps-timeline">
            {timelineSteps.map((step) => (
              <div className="webapps-timeline-step" key={step.number}>
                <span className="webapps-timeline-step__badge">{step.number}</span>
                <h3 className="webapps-timeline-step__title">{step.title}</h3>
                <div className="webapps-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="webapps-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="webapps-timeline-tag" key={tag}>
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

      <section className="webapps-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="webapps-h2">Development Process</h2>
          </div>

          <div className="webapps-process2__grid">
            {processCards.map((card) => (
              <div className="webapps-card webapps-card--flat webapps-process2-card" key={card.title}>
                <div className="webapps-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div className="webapps-process2-card__body">
                  <h3 className="webapps-process2-card__title">{card.title}</h3>
                  <p className="webapps-process2-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="webapps-h1-lg webapps-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className="webapps-integrations__grid">
            {integrations.map((item) => (
              <span className="webapps-integration-pill" key={item.label}>
                <Icon svg={item.icon} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="webapps-h2">Why Van Tech Systems</h2>
          </div>

          <div className="webapps-why__grid">
            {whyCards.map((card) => (
              <div className="webapps-card webapps-card--flat webapps-why-card" key={card.title}>
                <div className="webapps-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div>
                  <h3 className="webapps-why-card__title">{card.title}</h3>
                  <p className="webapps-why-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-pricing-cta section">
        <div className="container">
          <div className="webapps-pricing-cta__card">
            <img src={sectionGlow} alt="" className="webapps-pricing-cta__glow" loading="lazy" />
            <div className="webapps-pricing-cta__copy">
              <h2 className="webapps-pricing-cta__title">Starting at $5,000/month</h2>
              <p className="webapps-pricing-cta__desc">
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
