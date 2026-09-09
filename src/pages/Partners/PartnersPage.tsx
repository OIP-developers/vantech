import { useEffect, useState } from 'react';
import './partners.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import partnerExchangeSvg from '../../assets/icons/material-symbols-partner-exchange.svg?raw';
import coinSvg from '../../assets/icons/streamline-ultimate-monetization-touch-coin-bold.svg?raw';

import heroBannerBlur from '../../assets/images/about/figma/hero-banner-blur.png';
import heroBannerGlow from '../../assets/images/about/figma/about-banner12.png';
import orbSphere from '../../assets/images/orb-sphere.webp';
import archDivider1 from '../../assets/images/about/image-I-1.png';
import archDivider2 from '../../assets/images/about/image-J-2.png';
import archDivider3 from '../../assets/images/about/image-K-3.png';
import heroChartImg from '../../assets/images/partners-hero-chart.webp';
import heroStarImg from '../../assets/images/partners-hero-star.webp';

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

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
    columns: [
      { label: 'Partner', items: ['Identifies opportunity', 'Makes introduction', 'Remains relationship source'] },
      {
        label: 'Van Tech Systems',
        items: ['Scopes project', 'Closes project', 'Contracts client', 'Delivers technology', 'Supports client'],
      },
    ],
    cta: 'Become Referral Partner',
  },
  {
    title: 'Reseller Partner',
    desc: 'Best for agencies wanting to sell VTS solutions directly.',
    columns: [
      { label: 'Partner', items: ['Owns sales relationship', 'Selects solutions', 'Manages commercial relationship'] },
      {
        label: 'Van Tech Systems',
        items: ['Provides partner pricing', 'Provides technical scoping', 'Builds solution', 'Supports implementation'],
      },
    ],
    cta: 'Become Reseller Partner',
  },
  {
    title: 'White-Label Partner',
    desc: 'Best for agencies that want technology delivered behind their own brand.',
    columns: [
      { label: 'Partner', items: ['Owns brand', 'Owns client relationship', 'Sets retail pricing', 'Handles account strategy'] },
      {
        label: 'Van Tech Systems',
        items: ['Performs technical delivery', 'Works behind the scenes', 'Provides QA', 'Supports deployments'],
      },
    ],
    cta: 'Become White-Label Partner',
  },
  {
    title: 'Strategic Delivery Partner',
    desc: 'Best for established agencies requiring a dedicated technology capability.',
    columns: [
      { label: 'Possible support', items: ['Custom software', 'SaaS development', 'AI systems', 'AI agents', 'Automation'] },
      { label: 'Also available', items: ['Integrations', 'Architecture', 'Maintenance', 'Technical consulting'] },
    ],
    cta: 'Become Strategic Delivery Partner',
  },
];

const pipelineStages = [
  { name: 'Lead', who: 'Partner' },
  { name: 'Discovery', who: 'Partner + VTS' },
  { name: 'Scope', who: 'VTS' },
  { name: 'Build', who: 'VTS' },
  { name: 'QA', who: 'VTS' },
  { name: 'Launch', who: 'Joint' },
  { name: 'Support', who: 'Based on partnership model' },
];

const catalogTop = [
  {
    title: 'AI Solutions',
    desc: "Conversational and operational AI systems built around a client's workflows.",
    items: ['AI Voice Agents', 'AI Chat Agents', 'AI Lead Qualification', 'AI Customer Support', 'AI Knowledge Systems', 'AI Workflow Automation'],
  },
  {
    title: 'Software',
    desc: 'Custom applications and platforms engineered for how a business operates.',
    items: ['Custom Web Applications', 'Marketplace Platforms', 'Internal Business Systems', 'SaaS Platforms', 'Client Portals', 'CRM Platforms'],
  },
];

const catalogBottom = [
  {
    title: 'Automation',
    desc: 'Process automation that removes manual work across sales and operations.',
    items: ['CRM Automation', 'Lead Follow-Up Systems', 'Appointment Automation', 'Email/SMS Workflows', 'Operations Automation', 'Business Process Automation'],
  },
  {
    title: 'Digital Platforms',
    desc: 'Customer-facing digital products with a premium engineering standard.',
    items: ['Premium Website', 'E-Commerce', 'Customer Portals', 'Business Dashboards'],
  },
  {
    title: 'Consulting',
    desc: 'Strategic and architectural guidance ahead of a build.',
    items: ['Product Strategy', 'Technology Architecture', 'AI Readiness', 'Digital Transformation'],
  },
];

const brandLayers = [
  { label: 'Your Agency', tags: ['Client Relationship', 'Brand', 'Sales', 'Strategy'] },
  { label: 'Van Tech Systems', tags: ['Architecture', 'Development', 'AI', 'Automation', 'QA', 'Infrastructure'] },
  { label: 'Client Solution', tags: ['Website', 'AI Agent', 'SaaS', 'Automation', 'Platform'] },
];

const aiEngineChips = ['Voice', 'Chat', 'CRM', 'Email', 'SMS', 'Calendar', 'Knowledge Base', 'Analytics', 'Automation', 'API'];

const plans = [
  {
    name: 'VTS Connect',
    price: '$0',
    priceNote: 'Partner Enrollment',
    desc: 'For professionals who occasionally encounter technology opportunities and want a reliable delivery partner to hand them to.',
    cta: 'Join VTS Connect',
    features: [
      'Partner account',
      'Referral tracking',
      'VTS service catalog',
      'Project introduction form',
      'Basic sales materials',
      'Referral opportunity tracking',
      'VTS contracts and invoices the client directly',
    ],
  },
  {
    name: 'VTS Pro Partner',
    price: '$499',
    priceNote: 'onboarding',
    secondary: '$99/month',
    desc: 'Everything in Connect, plus partner pricing and reseller rights for eligible services.',
    cta: 'Become Pro Partner',
    highlighted: true,
    features: [
      'Everything in VTS Connect',
      'Partner service pricing',
      'Reseller rights for eligible services',
      'Priority project scoping',
      'Proposal support',
      'Partner sales resources',
      'Co-branded solution materials',
      'Project delivery dashboard',
      'Partner onboarding session',
      'Technical consultation support',
      'Access to standardized solution packages',
    ],
  },
  {
    name: 'VTS White Label',
    price: '$1,499',
    priceNote: 'onboarding',
    secondary: '$299/month',
    desc: 'Everything in Pro, plus delivery behind your own brand where agreed.',
    cta: 'Apply For White Label',
    accentOrange: true,
    features: [
      'Everything in VTS Pro Partner',
      'White-label eligible services',
      'Client-facing delivery under partner brand where agreed',
      'Dedicated partnership contact',
      'Priority production queue',
      'White-label proposal templates',
      'Technical discovery assistance',
      'Architecture consultation',
      'QA support',
      'Deployment support',
      'Partner delivery reporting',
      'Custom service catalog assistance',
    ],
  },
];

type CompareCell = boolean | string;

const compareRows: { label: string; connect: CompareCell; pro: CompareCell; white: CompareCell }[] = [
  { label: 'Referral tracking', connect: true, pro: true, white: true },
  { label: 'Partner pricing', connect: false, pro: true, white: true },
  { label: 'Reselling', connect: false, pro: true, white: true },
  { label: 'Proposal support', connect: false, pro: true, white: true },
  { label: 'Technical scoping', connect: 'VTS-led', pro: true, white: true },
  { label: 'White-label delivery', connect: false, pro: false, white: true },
  { label: 'Priority queue', connect: false, pro: false, white: true },
  { label: 'Dedicated partnership contact', connect: false, pro: false, white: true },
  { label: 'Delivery reporting', connect: false, pro: true, white: true },
  { label: 'Architecture support', connect: false, pro: 'On request', white: true },
];

function CompareCellView({ value }: { value: CompareCell }) {
  if (value === true) {
    return (
      <span className="partners-compare__check">
        <CheckIcon />
      </span>
    );
  }
  if (value === false) {
    return <span className="partners-compare__dash">—</span>;
  }
  return <span>{value}</span>;
}

const fulfillmentServices = [
  { category: 'AI', title: 'AI Receptionist', price: '$1,500', note: 'Ongoing from $249/mo' },
  { category: 'AI', title: 'AI Automation System', price: '$2,500' },
  { category: 'Web', title: 'Professional Business Website', price: '$1,500' },
  { category: 'Web', title: 'Advanced Business Website', price: '$3,500' },
  { category: 'Software', title: 'Custom Web Application', price: '$5,000' },
  { category: 'Software', title: 'SaaS MVP', price: '$7,500' },
  { category: 'Software', title: 'Advanced SaaS Platform', customQuote: true, note: 'Custom scope.' },
  { category: 'AI', title: 'Custom AI Agent', price: '$3,500' },
  { category: 'AI', title: 'RAG / Business Knowledge AI', price: '$5,000' },
  { category: 'Software', title: 'CRM / Operations Platform', price: '$6,500' },
];

const verticalsRow1 = ['Digital Agencies', 'Consultants', 'CRM Consultants', 'Business Consultants', 'Freelance Developers', 'Managed Service Providers'];
const verticalsRow2 = ['Marketing Agencies', 'Automation Agencies', 'Web Designers', 'IT Companies', 'Entrepreneurs', 'Existing AI Agencies'];

function MarginCalculator() {
  const [revenue, setRevenue] = useState(3500);
  const [fulfillment, setFulfillment] = useState(1500);
  const [additional, setAdditional] = useState(250);

  const margin = revenue - fulfillment - additional;
  const marginPct = revenue > 0 ? Math.round((margin / revenue) * 100) : 0;

  const handleNumber = (setter: (n: number) => void) => (raw: string) => {
    const n = Number(raw.replace(/[^0-9]/g, ''));
    setter(Number.isNaN(n) ? 0 : n);
  };

  return (
    <div className="partners-calculator__card">
      <div className="partners-calculator__inputs">
        <h3 className="partners-calculator__card-title">Model Your Own Economics</h3>
        <div className="partners-calculator__field">
          <label htmlFor="calc-revenue">Gross revenue</label>
          <div className="partners-calculator__input-wrap">
            <span>$</span>
            <input
              id="calc-revenue"
              type="text"
              inputMode="numeric"
              value={revenue}
              onChange={(e) => handleNumber(setRevenue)(e.target.value)}
            />
          </div>
        </div>
        <div className="partners-calculator__field">
          <label htmlFor="calc-fulfillment">VTS fulfillment cost</label>
          <div className="partners-calculator__input-wrap">
            <span>$</span>
            <input
              id="calc-fulfillment"
              type="text"
              inputMode="numeric"
              value={fulfillment}
              onChange={(e) => handleNumber(setFulfillment)(e.target.value)}
            />
          </div>
        </div>
        <div className="partners-calculator__field">
          <label htmlFor="calc-additional">Additional partner costs</label>
          <div className="partners-calculator__input-wrap">
            <span>$</span>
            <input
              id="calc-additional"
              type="text"
              inputMode="numeric"
              value={additional}
              onChange={(e) => handleNumber(setAdditional)(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="partners-calculator__result">
        <div className="partners-calculator__recap">
          <div className="partners-calculator__recap-row">
            <span>Gross revenue</span>
            <span>${revenue.toLocaleString()}</span>
          </div>
          <div className="partners-calculator__recap-row">
            <span>Fulfillment cost</span>
            <span>${fulfillment.toLocaleString()}</span>
          </div>
        </div>
        <span className="partners-calculator__result-label">Estimated gross margin</span>
        <span className="partners-calculator__result-value">${margin.toLocaleString()}</span>
        <span className="partners-calculator__result-pct">Margin {marginPct}%</span>
        <p className="partners-calculator__disclaimer">
          Illustrative calculation only. Actual pricing, costs, taxes, fees, refunds, support obligations and profitability vary by project.
        </p>
      </div>
    </div>
  );
}

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
  const pipelineHead = useReveal('up');
  const catalogHead = useReveal('up');
  const brandCopy = useReveal('left');
  const brandGraphic = useReveal('right');
  const intelLeft = useReveal('left');
  const intelRight = useReveal('right');
  const plansHead = useReveal('up');
  const compareHead = useReveal('up');
  const fulfillmentHead = useReveal('up');
  const calculatorHead = useReveal('up');
  const verticalsHead = useReveal('up');

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
            <img src={heroChartImg} alt="" className="partners-hero__chart-img" loading="eager" />
            <img src={heroStarImg} alt="" className="partners-hero__star partners-hero__star--1" loading="eager" />
            <img src={heroStarImg} alt="" className="partners-hero__star partners-hero__star--2" loading="eager" />
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

      {/* ---------- Tiers ---------- */}
      <section className="partners-tiers section" id="tiers">
        <div className="container">
          <div className={`partners-icon-badge-head ${tiersHead.className}`} ref={tiersHead.ref}>
            <span className="partners-icon-badge">
              <Icon svg={partnerExchangeSvg} />
            </span>
            <svg className="partners-icon-badge-head__arc" viewBox="0 0 620 60" fill="none" preserveAspectRatio="none">
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
                <div className="partners-tier-card__roles">
                  {tier.columns.map((col, i) => (
                    <div className={`partners-tier-role ${i === 0 ? 'partners-tier-role--blue' : 'partners-tier-role--orange'}`} key={col.label}>
                      <span className="partners-tier-role__label">{col.label}</span>
                      <ul className="partners-tier-role__list">
                        {col.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <a href="/contact" className="partners-tier-card__cta">
                  {tier.cta}
                  <span className="partners-tier-card__cta-icon">
                    <Icon svg={arrowRightSvg} />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider2} alt="" className="partners-divider" loading="lazy" />
      </section>

      {/* ---------- Pipeline: You Win the Client ---------- */}
      <section className="partners-pipeline section">
        <div className="container">
          <div className={`section-head ${pipelineHead.className}`} ref={pipelineHead.ref}>
            <h2 className="section-title">You Win the Client. We Help Deliver the Technology.</h2>
          </div>

          <div className="partners-pipeline__track">
            {pipelineStages.map((stage) => (
              <div className="partners-pipeline-step" key={stage.name}>
                <span className="partners-pipeline-step__name">{stage.name}</span>
                <span className="partners-pipeline-step__who">{stage.who}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider1} alt="" className="partners-divider" loading="lazy" />
      </section>

      {/* ---------- Service catalog ---------- */}
      <section className="partners-catalog section">
        <div className="container">
          <div className={`section-head ${catalogHead.className}`} ref={catalogHead.ref}>
            <span className="eyebrow-pill">What partners can sell</span>
            <h2 className="section-title">Expand Your Service Catalog Without Expanding Your Engineering Team.</h2>
          </div>

          <div className="partners-catalog__grid-top">
            {catalogTop.map((cat) => (
              <div className="partners-catalog-card partners-catalog-card--glow" key={cat.title}>
                <div className="partners-catalog-card__glow-area">
                  {cat.items.map((item) => (
                    <span className="partners-chip partners-chip--glass" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="partners-catalog-card__title">{cat.title}</h3>
                <p className="partners-catalog-card__desc">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="partners-catalog__grid-bottom">
            {catalogBottom.map((cat) => (
              <div className="partners-catalog-card" key={cat.title}>
                <h3 className="partners-catalog-card__title">{cat.title}</h3>
                <p className="partners-catalog-card__desc">{cat.desc}</p>
                <div className="partners-catalog-card__chips">
                  {cat.items.map((item) => (
                    <span className="partners-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="partners-catalog__cta">
            <a href="/contact" className="btn btn-outline-gradient">
              Get Started
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Your Brand in Front ---------- */}
      <section className="partners-brand section">
        <div className="container partners-brand__row">
          <div className={brandCopy.className} ref={brandCopy.ref}>
            <h2 className="partners-intel__col-title">Your Brand in Front. Our Technology Behind It.</h2>
            <p className="partners-intel__col-desc">
              Keep your client relationship while gaining access to a broader technology delivery capability.
            </p>
          </div>

          <div className={`partners-brand-layers ${brandGraphic.className}`} ref={brandGraphic.ref}>
            {brandLayers.map((layer, i) => (
              <div key={layer.label} style={{ display: 'contents' }}>
                <div className="partners-brand-layer">
                  <span className="partners-brand-layer__label">{layer.label}</span>
                  <div className="partners-brand-layer__chips">
                    {layer.tags.map((tag) => (
                      <span className="partners-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {i < brandLayers.length - 1 && <span className="partners-brand-connector" />}
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider3} alt="" className="partners-divider" loading="lazy" />
      </section>

      {/* ---------- Visibility + AI Engine ---------- */}
      <section className="partners-intel section">
        <div className="container">
          <div className="partners-intel__row">
            <div className={intelLeft.className} ref={intelLeft.ref}>
              <h2 className="partners-intel__col-title">Visibility Across Every Delivery Stage</h2>
              <p className="partners-intel__col-desc">
                Partners see delivery progress, stage status and upcoming milestones for the projects they bring to Van Tech Systems.
              </p>
            </div>
            <div className="partners-intel__decor">
              <span className="partners-intel__decor-card partners-intel__decor-card--1" />
              <span className="partners-intel__decor-card partners-intel__decor-card--2" />
              <span className="partners-intel__decor-avatar">
                <PersonIcon />
              </span>
            </div>
          </div>

          <div className="partners-intel__row partners-intel__row--reverse">
            <div className="partners-ai-diagram">
              <div className="partners-ai-sphere">
                <img
                  src={orbSphere}
                  alt=""
                  className="orb-sphere__img orb-sphere__img--spin"
                  style={{ borderRadius: '50%', width: '100%', height: '100%' }}
                  loading="lazy"
                />
                <div className="partners-ai-sphere__label">
                  <strong>VTS</strong>
                  <span>AI Engine</span>
                </div>
              </div>

              <div className="partners-ai-chips">
                {aiEngineChips.map((chip) => (
                  <span className="partners-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>

              <div className="partners-ai-flow">
                <span className="partners-ai-flow__box">Client Business</span>
                <Icon svg={arrowRightSvg} className="partners-ai-flow__arrow" />
                <span className="partners-ai-flow__box">VTS AI Engine</span>
                <Icon svg={arrowRightSvg} className="partners-ai-flow__arrow" />
                <span className="partners-ai-flow__box">Customer Interactions</span>
              </div>
            </div>

            <div className={intelRight.className} ref={intelRight.ref}>
              <h2 className="partners-intel__col-title">One AI Engine. Many Client Touchpoints.</h2>
              <p className="partners-intel__col-desc">
                AI systems are assembled from the channels and data a client actually uses. Integrations shown are conceptual examples
                and are confirmed during scoping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Partnership pricing plans ---------- */}
      <section className="partners-plans section">
        <div className="container">
          <div className={`partners-icon-badge-head ${plansHead.className}`} ref={plansHead.ref}>
            <span className="partners-icon-badge">
              <Icon svg={coinSvg} />
            </span>
            <h2 className="section-title">Choose the Partnership That Fits Your Business</h2>
          </div>

          <div className="partners-plans__grid">
            {plans.map((plan) => (
              <div
                className={`partners-plan-card${plan.highlighted ? ' partners-plan-card--highlight' : ''}${plan.accentOrange ? ' partners-plan-card--accent-orange' : ''}`}
                key={plan.name}
              >
                {plan.highlighted && <span className="partners-plan-card__recommended">Recommended</span>}
                <span className="partners-plan-card__badge">
                  <span className="partners-plan-card__badge-dot" />
                  {plan.name}
                </span>
                <div className="partners-plan-card__price-row">
                  <span className="partners-plan-card__price">{plan.price}</span>
                  <span className="partners-plan-card__price-note">{plan.priceNote}</span>
                  {plan.secondary && <span className="partners-plan-card__secondary">{plan.secondary}</span>}
                </div>
                <p className="partners-plan-card__desc">{plan.desc}</p>
                <a href="/contact" className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline-gradient'}`}>
                  {plan.cta}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <div className="partners-plan-card__features">
                  {plan.features.map((f) => (
                    <div className="partners-plan-card__feature" key={f}>
                      <span className="partners-plan-card__check">
                        <CheckIcon />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Compare partnership levels ---------- */}
      <section className="partners-compare section">
        <div className="container">
          <div className={`section-head ${compareHead.className}`} ref={compareHead.ref}>
            <h2 className="section-title">Compare partnership levels</h2>
          </div>

          <div className="partners-compare__table-wrap">
            <table className="partners-compare__table">
              <thead>
                <tr>
                  <th>Plans</th>
                  <th>Connect</th>
                  <th>Pro Partner</th>
                  <th>White Label</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>
                      <CompareCellView value={row.connect} />
                    </td>
                    <td>
                      <CompareCellView value={row.pro} />
                    </td>
                    <td>
                      <CompareCellView value={row.white} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- Partner fulfillment pricing ---------- */}
      <section className="partners-fulfillment section">
        <div className="container">
          <div className={`section-head ${fulfillmentHead.className}`} ref={fulfillmentHead.ref}>
            <span className="eyebrow-pill">Service partner rates</span>
            <h2 className="section-title">Partner Fulfillment Pricing</h2>
          </div>

          <div className="pricing__grid">
            {fulfillmentServices.map((svc) => (
              <div className="plan-card" key={svc.title}>
                <span className="plan-card__category">{svc.category}</span>
                <h3 className="plan-card__title">{svc.title}</h3>
                <div className="plan-card__footer">
                  {svc.customQuote ? (
                    <>
                      <span className="plan-card__price gradient-text">Custom Quote</span>
                      {svc.note && <span className="plan-card__note">{svc.note}</span>}
                    </>
                  ) : (
                    <>
                      <span className="plan-card__label">Starting at</span>
                      <div className="plan-card__price-row">
                        <span className="plan-card__price gradient-text">{svc.price}</span>
                        {svc.note && <span className="plan-card__note">{svc.note}</span>}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="partners-fulfillment__note">
            Final partner pricing is determined after technical scoping. Third-party software, infrastructure, messaging, telephony,
            AI usage, hosting, licensing and other external costs may be billed separately where applicable.
          </p>
        </div>
      </section>

      {/* ---------- Margin calculator ---------- */}
      <section className="partners-calculator section">
        <div className="container">
          <div className={`section-head ${calculatorHead.className}`} ref={calculatorHead.ref}>
            <h2 className="section-title">Partner Margin Calculator</h2>
          </div>

          <MarginCalculator />
        </div>
      </section>

      {/* ---------- Industries served ---------- */}
      <section className="partners-verticals section">
        <div className="partners-verticals__glow-wrap">
          <img src={orbSphere} alt="" className="partners-verticals__glow" loading="lazy" />
        </div>
        <div className="container">
          <div className={`section-head ${verticalsHead.className}`} ref={verticalsHead.ref}>
            <span className="eyebrow-pill">Industries</span>
            <h2 className="section-title">Built for Businesses That Want to Sell More Than They Build.</h2>
          </div>

          <div className="partners-verticals__rows">
            <div className="partners-verticals__row">
              {verticalsRow1.map((v) => (
                <span className="partners-vertical-pill" key={v}>
                  {v}
                </span>
              ))}
            </div>
            <div className="partners-verticals__row">
              {verticalsRow2.map((v) => (
                <span className="partners-vertical-pill" key={v}>
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="partners-verticals__cta">
            <a href="/contact" className="btn btn-outline-gradient">
              Get Started
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
