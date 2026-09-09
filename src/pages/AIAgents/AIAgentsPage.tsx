import { useEffect } from 'react';
import './ai-agents.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import aiAgentSvg from '../../assets/icons/griddy-icons-ai-assistant-filled.svg?raw';
import aiEmployeeSvg from '../../assets/icons/garden-bot-sparkle-fill-12.svg?raw';
import automationSvg from '../../assets/icons/eos-icons-action-chains.svg?raw';
import voiceAiSvg from '../../assets/icons/ri-voice-ai-fill.svg?raw';
import conversationalAiSvg from '../../assets/icons/boxicons-message-bubble-dots-filled.svg?raw';
import customAiSvg from '../../assets/icons/meteor-icons-openai.svg?raw';

import discoverSvg from '../../assets/icons/iconamoon-discover-light.svg?raw';
import dataSvg from '../../assets/icons/bxs-data.svg?raw';
import buildSvg from '../../assets/icons/ant-design-build-filled.svg?raw';
import deploySvg from '../../assets/icons/ic-sharp-settings-applications.svg?raw';

import speedSvg from '../../assets/icons/ic-outline-ads-click.svg?raw';
import costSvg from '../../assets/icons/streamline-ultimate-monetization-touch-coin-bold.svg?raw';
import qualitySvg from '../../assets/icons/fluent-receipt-sparkles-24-filled.svg?raw';
import scaleSvg from '../../assets/icons/hugeicons-setup-01.svg?raw';

import crmSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import voiceLineSvg from '../../assets/icons/ri-voice-ai-line.svg?raw';
import emailSvg from '../../assets/icons/griddy-icons-email-filled.svg?raw';
import messagesSvg from '../../assets/icons/boxicons-message-detail-filled.svg?raw';
import paymentSvg from '../../assets/icons/fluent-payment-24-filled.svg?raw';

import heroBannerBlur from '../../assets/images/about/figma/hero-banner-blur.png';
import heroBannerGlow from '../../assets/images/about/figma/about-banner12.png';
import processGlow from '../../assets/images/about/figma/process-glow-rendered.png';
import archDivider1 from '../../assets/images/about/image-I-1.png';
import archDivider2 from '../../assets/images/about/image-J-2.png';
import aiGlow from '../../assets/images/about/Start-AI-Journey-P.png';

const agentTypes = [
  {
    icon: aiAgentSvg,
    title: 'AI Agents',
    desc: 'Autonomous workers that complete multi-step tasks end to end — qualifying a lead, updating a record, scheduling a follow-up — without a person driving each step.',
  },
  {
    icon: aiEmployeeSvg,
    title: 'AI Employees',
    desc: 'A named role with a defined scope: it owns a queue, follows your playbook and reports on what it did.',
  },
  {
    icon: automationSvg,
    title: 'Automation',
    desc: 'The background workflows that route, notify and update systems so nothing depends on someone remembering to do it.',
  },
  {
    icon: voiceAiSvg,
    title: 'Voice AI',
    desc: 'Phone assistants that answer, qualify and route calls in a natural conversation, live or after hours.',
  },
  {
    icon: conversationalAiSvg,
    title: 'Conversational AI',
    desc: 'Chat and messaging agents that hold context across a conversation instead of resetting after every reply.',
  },
  {
    icon: customAiSvg,
    title: 'Custom AI',
    desc: 'Models and tools built around a decision specific to your business, when an off-the-shelf assistant will not cut it.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: discoverSvg,
    title: 'Discover & Scope',
    desc: 'We map the task the agent will own, the systems it touches and the outcome that counts as success — written down before anything is built.',
  },
  {
    number: '02',
    icon: dataSvg,
    title: 'Ground in Your Data',
    desc: 'The agent is connected to your actual content, records and knowledge base, so answers come from what is true for your business, not a generic model.',
  },
  {
    number: '03',
    icon: buildSvg,
    title: 'Build & Integrate',
    desc: 'The agent is wired into your CRM, calendars, telephony or internal tools, with explicit permissions for what it can and cannot do.',
  },
  {
    number: '04',
    icon: deploySvg,
    title: 'Deploy & Monitor',
    desc: 'Launch with logging, escalation paths and a rollback plan, then tuned against real usage instead of assumptions.',
  },
];

const benefits = [
  {
    icon: speedSvg,
    title: 'Faster Response Times',
    desc: 'Leads and customers get an answer in seconds, at any hour, instead of waiting on the next free rep.',
  },
  {
    icon: costSvg,
    title: 'Lower Operating Cost',
    desc: 'Repetitive qualifying, routing and follow-up work moves onto a system that does not need a shift schedule.',
  },
  {
    icon: qualitySvg,
    title: 'Consistent Quality',
    desc: 'The same playbook is followed every time — no missed steps, no answer that depends on who picked up.',
  },
  {
    icon: scaleSvg,
    title: 'Scales Without Hiring',
    desc: 'Handle more volume the moment you need to, without a hiring and training cycle first.',
  },
];

const channels = [
  { icon: crmSvg, label: 'CRM' },
  { icon: voiceLineSvg, label: 'Voice' },
  { icon: emailSvg, label: 'Email' },
  { icon: messagesSvg, label: 'Messages' },
  { icon: paymentSvg, label: 'Payments' },
  { icon: dataSvg, label: 'RAG / Data' },
];

const trustPoints = [
  'Grounded in your content and data rather than open-ended generation',
  'Explicit tool boundaries — an agent can only do what it has been given permission to do',
  'Human escalation paths for anything sensitive, ambiguous or commercially significant',
  'Full conversation and action logging so behavior can be reviewed and improved',
  'Ongoing tuning informed by real usage instead of assumptions',
];

export default function AIAgentsPage() {
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
  const typesHead = useReveal('up');
  const processHead = useReveal('up');
  const benefitsHead = useReveal('up');
  const channelsHead = useReveal('up');
  const trustCopy = useReveal('left');
  const trustList = useReveal<HTMLUListElement>('right');

  return (
    <main className="agents-page">
      <section className="agents-hero section">
        <div className="agents-hero__banner">
          <img src={heroBannerBlur} alt="" className="agents-hero__banner-img" loading="eager" />
        </div>
        <div className="agents-hero__banner-fade" />
        <img src={heroBannerGlow} alt="" className="agents-hero__banner-glow" loading="eager" />
        <div className={`container agents-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">AI Agent Solutions</span>
          <h1 className="agents-hero__title">
            AI agents that handle real work, not just conversations.
          </h1>
          <p className="agents-hero__desc">
            We design and deploy autonomous AI agents that qualify leads, answer
            customers, update your systems and complete multi-step tasks — grounded
            in your own data and built to a defined set of permissions.
          </p>
          <div className="agents-hero__actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
            <a href="#process" className="btn btn-outline">
              See How It Works
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="agents-types section" id="agent-types">
        <div className="container">
          <div className={`section-head ${typesHead.className}`} ref={typesHead.ref}>
            <span className="eyebrow-pill">What We Build</span>
            <h2 className="section-title">Six ways we put AI agents to work</h2>
            <p className="section-subtitle">
              Every agent is scoped to a specific job and the systems it needs to
              touch — not a general-purpose chatbot bolted onto your website.
            </p>
          </div>

          <div className="agents-types__grid">
            {agentTypes.map((type) => (
              <div className="agents-type-card" key={type.title}>
                <div className="agents-type-card__icon">
                  <Icon svg={type.icon} />
                </div>
                <h3 className="agents-type-card__title">{type.title}</h3>
                <p className="agents-type-card__desc">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider2} alt="" className="agents-divider" loading="lazy" />
      </section>

      <section className="agents-process section" id="process">
        <img src={processGlow} alt="" className="agents-process__glow-bg" loading="lazy" />
        <div className="container agents-narrow">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="section-title">How we take an agent from idea to production</h2>
          </div>

          <div className="agents-process__list">
            {processSteps.map((step, i) => (
              <div
                className={`agents-process-item${i === 0 ? ' agents-process-item--active' : ''}`}
                key={step.number}
              >
                <div className="agents-process-item__lead">
                  <div className="agents-process-item__icon">
                    <Icon svg={step.icon} />
                  </div>
                  <h3 className="agents-process-item__title">{step.title}</h3>
                </div>
                <p className="agents-process-item__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-benefits section">
        <div className="container">
          <div className={`section-head ${benefitsHead.className}`} ref={benefitsHead.ref}>
            <span className="eyebrow-pill">Why It Pays Off</span>
            <h2 className="section-title">What a well-built agent changes day to day</h2>
          </div>

          <div className="agents-benefits__grid">
            {benefits.map((b) => (
              <div className="agents-benefit-card" key={b.title}>
                <div className="agents-benefit-card__icon">
                  <Icon svg={b.icon} />
                </div>
                <h3 className="agents-benefit-card__title">{b.title}</h3>
                <p className="agents-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider1} alt="" className="agents-divider" loading="lazy" />
      </section>

      <section className="agents-channels section">
        <div className="container">
          <div className={`section-head ${channelsHead.className}`} ref={channelsHead.ref}>
            <h2 className="section-title">Works inside the tools you already run</h2>
          </div>

          <div className="agents-channels__row">
            {channels.map((c) => (
              <div className="agents-channel-pill" key={c.label}>
                <Icon svg={c.icon} />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-trust section">
        <img src={aiGlow} alt="" className="agents-trust__glow" loading="lazy" />
        <div className="container agents-trust__row">
          <div className={`agents-trust__copy ${trustCopy.className}`} ref={trustCopy.ref}>
            <h2 className="agents-title">An agent you can actually trust with customers.</h2>
            <p className="agents-desc">
              A convincing demo takes an afternoon. An agent that answers accurately,
              stays inside its permissions, escalates the right cases to a person, and
              can be audited afterwards is an engineering project — that is the
              standard every agent we ship is held to.
            </p>
          </div>

          <ul className={`agents-trust__list ${trustList.className}`} ref={trustList.ref}>
            {trustPoints.map((point, i) => (
              <li key={point} className="agents-trust__point">
                <span className="agents-trust__point-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="agents-trust__point-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
