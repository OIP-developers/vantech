import { useEffect } from 'react';
import './auto-pilot.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import eosIconsFileSystemSvg from '../../assets/icons/eos-icons-file-system.svg?raw';
import griddyAiAssistantSvg from '../../assets/icons/griddy-icons-ai-assistant-filled.svg?raw';
import monitorHeartSvg from '../../assets/icons/ic-baseline-monitor-heart.svg?raw';
import ixMaintenanceSvg from '../../assets/icons/ix-maintenance.svg?raw';
import thesvgSvgoSvg from '../../assets/icons/thesvg-svgo.svg?raw';
import rateReviewSvg from '../../assets/icons/material-symbols-rate-review-rounded.svg?raw';

import pencilRulerSvg from '../../assets/icons/streamline-ultimate-design-tool-pencil-ruler-bold.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import sitemapSvg from '../../assets/icons/mdi-sitemap.svg?raw';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import phoneSvg from '../../assets/icons/solar-phone-calling-rounded-bold.svg?raw';
import whatsappSvg from '../../assets/icons/basil-whatsapp-solid.svg?raw';
import smsSvg from '../../assets/icons/mdi-message-processing.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import formSvg from '../../assets/icons/fluent-form-32-filled.svg?raw';
import personSupportSvg from '../../assets/icons/fluent-person-support-28-filled.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';

import replyBigSvg from '../../assets/icons/boxicons-reply-big-filled.svg?raw';
import folderQualitySvg from '../../assets/icons/icon-park-solid-folder-quality.svg?raw';
import cloudKeySvg from '../../assets/icons/mdi-cloud-key.svg?raw';

import heroPhoto from '../../assets/images/auto-pilot/figma/hero-photo.png';
import ambientGlow from '../../assets/images/auto-pilot/figma/ambient-glow.png';
import solutionIllustration from '../../assets/images/auto-pilot/figma/solution-illustration.png';
import diagramWave from '../../assets/images/auto-pilot/figma/diagram-wave.svg';
import pricingGlowOrb from '../../assets/images/auto-pilot/figma/pricing-glow-orb.png';

const problems = [
  'Nobody notices when a workflow silently fails.',
  'Integrations break after a platform update.',
  'Processes change but the automation does not.',
  'Internal teams have no capacity to maintain it.',
];

const includedCards = [
  {
    icon: eosIconsFileSystemSvg,
    title: 'Connected Systems',
    desc: 'One automation layer across the tools your operations depend on.',
  },
  {
    icon: griddyAiAssistantSvg,
    title: 'AI handling',
    desc: 'Qualification, reception and response where it adds real value.',
  },
  {
    icon: monitorHeartSvg,
    title: 'Monitoring',
    desc: 'Continuous checks with alerting when something stops working.',
  },
  {
    icon: ixMaintenanceSvg,
    title: 'Maintenance',
    desc: 'Fixes and adjustments when platforms or processes change.',
  },
  {
    icon: thesvgSvgoSvg,
    title: 'Optimization',
    desc: 'Ongoing refinement of logic, timing and routing.',
  },
  {
    icon: rateReviewSvg,
    title: 'Evaluation',
    desc: 'Test sets and review cycles that track answer quality over time.',
  },
];

const capabilityRow1 = [
  'Managed workflows',
  'AI reception',
  'Lead capture',
  'CRM synchronization',
  'Automated follow-up',
  'Scheduling',
];

const capabilityRow2 = ['Messaging', 'Operational reporting', 'Monitoring and alerting', 'Continuous improvement'];

const useCases = [
  {
    title: 'Teams without internal ops engineering',
    desc: 'Automation maintained by an external technology team.',
  },
  {
    title: 'High-volume inbound',
    desc: 'Consistent handling of enquiries as volume grows.',
  },
  {
    title: 'Multi-tool operations',
    desc: 'A single layer keeping separate systems in step.',
  },
  {
    title: 'Post-project continuity',
    desc: 'Ongoing ownership after an automation build.',
  },
];

const hubColumns = [
  { number: '01', title: 'Inputs', tags: [['Website', 'Phone'], ['Email', 'Forms'], ['Messaging']] },
  { number: '02', title: 'Autopilot layer', tags: [['Routing', 'AI handling'], ['Workflows']] },
  { number: '03', title: 'Systems', tags: [['CRM', 'Calendars'], ['Support', 'Databases']] },
  { number: '04', title: 'Management', tags: [['Monitoring', 'Alerting'], ['Optimization', 'Reporting']] },
];

const processCards = [
  {
    icon: pencilRulerSvg,
    title: 'Assess',
    desc: 'Review current operations, tools and volumes.',
  },
  {
    icon: designServicesSvg,
    title: 'Design',
    desc: 'Define the automation layer and the reporting you need.',
  },
  {
    icon: sitemapSvg,
    title: 'Deploy',
    desc: 'Implement workflows and connect the systems involved.',
  },
  {
    icon: monitorHeartSvg,
    title: 'Operate',
    desc: 'Monitor and maintain everything to keep operations running smoothly. Respond quickly whenever an issue or request needs attention.',
  },
  {
    icon: thesvgSvgoSvg,
    title: 'Optimize',
    desc: 'Review performance regularly to ensure everything works effectively. Refine the logic based on results and changing requirements.',
  },
];

const integrations = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: phoneSvg, label: 'Telephony' },
  { icon: whatsappSvg, label: 'WhatsApp' },
  { icon: smsSvg, label: 'SMS' },
  { icon: emailSvg, label: 'Email' },
  { icon: calendarSvg, label: 'Calendars' },
  { icon: formSvg, label: 'Forms' },
  { icon: personSupportSvg, label: 'Support desks' },
  { icon: databaseSvg, label: 'Databases' },
];

const whyCards = [
  {
    icon: replyBigSvg,
    title: 'Grounded and traceable',
    desc: 'Answers reference the sources they came from.',
  },
  {
    icon: folderQualitySvg,
    title: 'Measured, not assumed',
    desc: 'Quality is evaluated against real questions before rollout.',
  },
  {
    icon: cloudKeySvg,
    title: 'Scoped access',
    desc: 'Permissions decide what the system can retrieve and for whom.',
  },
];

export default function AutoPilotPage() {
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
  const problemHead = useReveal('left');
  const problemList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const includedHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const hubHead = useReveal('up');
  const processHead = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');

  return (
    <main className="autopilot-page">
      <section className="autopilot-hero section">
        <div className="container">
          <div className="row">
            <div className={`autopilot-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="autopilot-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="autopilot-hero__title">Your Operations, Running on Autopilot.</h1>
              <p className="autopilot-hero__desc">
                Managed automation infrastructure that combines AI, connected systems and ongoing
                optimization — operated and maintained as a service instead of handed over and
                forgotten.
              </p>
              <div className="autopilot-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#included" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="autopilot-hero__graphic" aria-hidden="true">
              <img src={ambientGlow} alt="" className="autopilot-hero__glow" loading="eager" />
              <div className="autopilot-hero__photo-wrap">
                <img src={heroPhoto} alt="" className="autopilot-hero__photo" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-problem section">
        <div className="container autopilot-problem__row">
          <div className={`autopilot-problem__copy ${problemHead.className}`} ref={problemHead.ref}>
            <h2 className="autopilot-h1-lg">Automation Decays Without An Owner</h2>
            <p className="autopilot-p-lg">
              Workflows break when tools change, volumes grow or processes evolve. Without someone
              responsible for them, automation quietly stops working.
            </p>
          </div>

          <ul className={`autopilot-problem__list ${problemList.className}`} ref={problemList.ref}>
            {problems.map((text, i) => (
              <li className="autopilot-problem__item" key={text}>
                <span className="autopilot-problem__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="autopilot-problem__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="autopilot-solution section">
        <div className="container autopilot-solution__row">
          <div className="autopilot-solution__graphic">
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`autopilot-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="autopilot-solution__title">Operated Automation Infrastructure</h2>
            <p className="autopilot-solution__desc">
              Autopilot is a managed engagement: we run the automation layer connecting your
              capture, CRM, follow-up, scheduling, messaging and reporting, monitor it
              continuously, and improve it as your operations change.
            </p>
          </div>
        </div>
      </section>

      <section className="autopilot-included section" id="included">
        <div className="container">
          <div className={`section-head ${includedHead.className}`} ref={includedHead.ref}>
            <h2 className="autopilot-h2">What is included</h2>
          </div>

          <div className="autopilot-included__grid">
            {includedCards.map((card) => (
              <div className="autopilot-card autopilot-included-card" key={card.title}>
                <div className="autopilot-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <h3 className="autopilot-included-card__title">{card.title}</h3>
                <p className="autopilot-included-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-capabilities section" id="capabilities">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="autopilot-h2">Capabilities</h2>
          </div>

          <div className="autopilot-capabilities__rows">
            <div className="autopilot-capabilities__row">
              {capabilityRow1.map((label, i) => (
                <span className={`autopilot-pill${i === 0 ? ' autopilot-pill--active' : ''}`} key={label}>
                  <span className="autopilot-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="autopilot-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="autopilot-pill" key={label}>
                  <span className="autopilot-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="autopilot-h2">Use Cases</h2>
          </div>

          <div className="autopilot-usecases__grid">
            {useCases.map((item) => (
              <div className="autopilot-card autopilot-usecase-card" key={item.title}>
                <h3 className="autopilot-usecase-card__title">{item.title}</h3>
                <hr className="autopilot-usecase-card__divider" />
                <p className="autopilot-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-hub section">
        <img src={diagramWave} alt="" className="autopilot-hub__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${hubHead.className}`} ref={hubHead.ref}>
            <h2 className="autopilot-h1-lg autopilot-h1-lg--center">The Operations Hub</h2>
            <p className="autopilot-section-copy">
              Autopilot sits between your channels and your systems, coordinating the work and
              reporting on it.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="autopilot-hub__divider" />
            <span className="autopilot-hub__divider-dot" />
          </div>

          <div className="autopilot-hub__columns">
            {hubColumns.map((col) => (
              <div className="autopilot-hub-column" key={col.number}>
                <span className="autopilot-hub-column__badge">{col.number}</span>
                <h3 className="autopilot-hub-column__title">{col.title}</h3>
                <div className="autopilot-hub-column__tags">
                  {col.tags.map((row, i) => (
                    <div className="autopilot-hub-column__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="autopilot-hub-tag" key={tag}>
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

      <section className="autopilot-process section" id="process">
        <div className="container">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="autopilot-h2">How The Engagement Works</h2>
          </div>

          <div className="autopilot-process__grid">
            {processCards.map((card) => (
              <div className="autopilot-card autopilot-card--flat autopilot-process-card" key={card.title}>
                <div className="autopilot-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div className="autopilot-process-card__body">
                  <h3 className="autopilot-process-card__title">{card.title}</h3>
                  <p className="autopilot-process-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="autopilot-h1-lg autopilot-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className="autopilot-integrations__grid">
            {integrations.map((item) => (
              <span className="autopilot-integration-pill" key={item.label}>
                <Icon svg={item.icon} />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="autopilot-h2">Why Van Tech Systems</h2>
          </div>

          <div className="autopilot-why__grid">
            {whyCards.map((card) => (
              <div className="autopilot-card autopilot-card--flat autopilot-why-card" key={card.title}>
                <div className="autopilot-icon-badge">
                  <Icon svg={card.icon} />
                </div>
                <div>
                  <h3 className="autopilot-why-card__title">{card.title}</h3>
                  <p className="autopilot-why-card__desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-pricing-cta section">
        <div className="container">
          <div className="autopilot-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="autopilot-pricing-cta__glow" loading="lazy" />
            <div className="autopilot-pricing-cta__copy">
              <h2 className="autopilot-pricing-cta__title">Starting at $1,500/month</h2>
              <p className="autopilot-pricing-cta__desc">
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
