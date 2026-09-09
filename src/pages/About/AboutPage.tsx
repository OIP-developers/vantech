import { useEffect } from 'react';
import './about.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';
import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import workBadgeSvg from '../../assets/icons/mdi-briefcase-outline.svg?raw';
import techBadge from '../../assets/images/section-about-3/technology-badge.png';
import layersBadge from '../../assets/images/section-about-3/layers-badge.png';
import discoveryIcon from '../../assets/images/about/section2-icons/discovery.png';
import architectureIcon from '../../assets/images/about/section2-icons/architecture.png';
import buildIcon from '../../assets/images/about/section2-icons/build.png';
import integrationIcon from '../../assets/images/about/section2-icons/integration.png';
import deploymentIcon from '../../assets/images/about/section2-icons/deployment.png';
import heroBannerBlur from '../../assets/images/about/figma/hero-banner-blur.png';
import ambientGlowBlob from '../../assets/images/about/figma/ambient-glow-blob.png';
import heroBannerGlow from '../../assets/images/about/figma/about-banner12.png';
import accessControlIcon from '../../assets/images/about/Access-control-c.png';
import confidentialityIcon from '../../assets/images/about/Confidentiality-E.png';
import dataHandlingIcon from '../../assets/images/about/Data-handling-F.png';
import ownershipIcon from '../../assets/images/about/Ownership-handover-N.png';
import responsibleAiIcon from '../../assets/images/about/Responsible-AI-O.png';
import processGlow from '../../assets/images/about/figma/process-glow-rendered.png';
import archDivider1 from '../../assets/images/about/image-I-1.png';
import archDivider2 from '../../assets/images/about/image-J-2.png';
import archDivider3 from '../../assets/images/about/image-K-3.png';
import archDivider4 from '../../assets/images/about/image-L-4.png';
import archDivider5 from '../../assets/images/about/image-M-5.png';
import principlesGlow from '../../assets/images/about/Engineering-principles-H.png';
import aiGlow from '../../assets/images/about/Start-AI-Journey-P.png';
import workGlow from '../../assets/images/about/Three-businesses-rigth-S.png';

const processSteps = [
  {
    number: '01',
    iconImg: discoveryIcon,
    title: 'Discovery',
    desc: 'We map the actual process, the systems already in place, the data that exists and the constraints that matter. The output is a written scope with assumptions made explicit.',
  },
  {
    number: '02',
    iconImg: architectureIcon,
    title: 'Architecture',
    desc: 'Data model, integration boundaries, security model and infrastructure choices are decided and documented before implementation. Rework is cheapest at this stage.',
  },
  {
    number: '03',
    iconImg: buildIcon,
    title: 'Build',
    desc: 'Short delivery cycles with working software reviewed continuously. Automated checks, code review and environment separation are standard, not add-ons.',
  },
  {
    number: '04',
    iconImg: integrationIcon,
    title: 'Integration',
    desc: 'Connecting to the systems that already run the business — CRM, billing, email, telephony, internal databases and third-party APIs — with error handling designed in.',
  },
  {
    number: '05',
    iconImg: deploymentIcon,
    title: 'Deployment',
    desc: (
    <>
      Production release with monitoring, backups, access control and a <br />
      rollback path. We do not consider a launch complete until it is observable.
    </>
  ),
  },
];

const techCards = [
  'Van Tech Systems is a technology company focused on AI, software engineering and automation. We work with founders launching products, established businesses replacing manual operations, and agencies that need a serious technical partner behind their brand.',
  'Our work sits in one of three places: a product that needs to exist, a process that should not be manual, or a system that has outgrown the way it was originally built. In each case the deliverable is the same — a working system with a clear architecture, documented decisions and infrastructure the client controls.',
  'We are deliberately engineering-led. Scoping is done by people who will build the thing. Estimates come from delivery experience rather than sales targets. When a request would be better solved with a smaller build, a configuration change or an existing tool, we say so before a contract exists.',
];

const layers = [
  {
    number: '01',
    title: 'Experience layer',
    desc: 'The screens, dashboards and touchpoints your team and your customers actually use.',
    tags: ['Web applications', 'Mobile applications', 'Customer portals', 'Internal dashboards', 'Ecommerce'],
  },
  {
    number: '02',
    title: 'Intelligence layer',
    desc: 'AI agents and models scoped to a real decision, not bolted on for the sake of it.',
    tags: ['AI agents', 'Voice and chat assistants', 'Document processing', 'Model development', 'Decision support'],
  },
  {
    number: '03',
    title: 'Automation layer',
    desc: 'The workflows that carry real workload without a person in the loop for every step.',
    tags: ['Workflow orchestration', 'Lead routing', 'Scheduling', 'Reporting', 'Alerting'],
  },
  {
    number: '04',
    title: 'Platform layer',
    desc: 'The application core: authentication, billing and the APIs everything else depends on.',
    tags: ['APIs', 'Multi-tenant SaaS', 'Authentication and RBAC', 'Billing', 'Integrations'],
  },
  {
    number: '05',
    title: 'Foundation layer',
    desc: 'Hosting, security and observability built to stay reliable as usage grows.',
    tags: ['Data modeling', 'Cloud infrastructure', 'Security', 'Observability', 'CI/CD'],
  },
];

const principles = [
  {
    title: 'Architecture before implementation',
    desc: 'The data model and integration boundaries are decided first. Systems fail slowly when this step is skipped, and the cost appears months later.',
  },
  {
    title: 'Security as a default state',
    desc: 'Least-privilege access, row-level authorization, encrypted secrets and audited administrative actions are part of the base build, not a later hardening project.',
  },
  {
    title: 'Automation with a human boundary',
    desc: 'Automated systems handle the predictable path. Ambiguity, exceptions and anything with commercial or legal consequence route to a person by design.',
  },
  {
    title: 'No black boxes',
    desc: 'Clients receive the code, the infrastructure, the documentation and the credentials. Ending an engagement should never mean losing a system.',
  },
  {
    title: 'AI applied where it pays off',
    desc: 'AI is used only where it demonstrably beats a simpler solution — never included just because it is fashionable to have.',
  },
  {
    title: 'Honest scope',
    desc: 'We would rather lose a deal than agree to a timeline we know is unrealistic. Estimates reflect delivery experience, including the parts that usually go wrong.',
  },
];

const aiPoints = [
  'Grounded in your content and data rather than open-ended generation',
  'Explicit tool boundaries: an agent can only do what it has been given permission to do',
  'Human escalation paths for anything sensitive, ambiguous or commercially significant',
  'Full conversation and action logging so behavior can be reviewed and improved',
  'Ongoing tuning informed by real usage instead of assumptions',
];

const riskCards = [
  {
    icon: dataHandlingIcon,
    title: 'Data Handling',
    desc: 'We collect only the data an engagement requires, keep production data out of development environments where possible, and remove access when a project ends.',
  },
  {
    icon: accessControlIcon,
    title: 'Access Control',
    desc: 'Role-based access with least privilege across applications, databases and infrastructure. Administrative actions are logged.',
  },
  {
    icon: confidentialityIcon,
    title: 'Confidentiality',
    desc: 'Client work is confidential by default. We publish nothing about an engagement without written permission, and we work under NDA whenever requested.',
  },
  {
    icon: ownershipIcon,
    title: 'Ownership & Handover',
    desc: 'Deliverables, repositories and infrastructure are owned by the client, with documentation sufficient for another competent engineer to continue the work.',
  },
  {
    icon: responsibleAiIcon,
    title: 'Responsible AI Use',
    desc: 'AI systems we build disclose that they are automated, avoid fabricated claims, and route anything consequential to a human. Our own policy is published in detail.',
  },
];

const workCards = [
  {
    number: '01',
    title: 'Direct Projects',
    desc: 'Scoped product, platform, automation or AI engagements delivered end to end, from discovery through deployment and optional ongoing support.',
  },
  {
    number: '02',
    title: 'Ongoing Engineering',
    desc: 'A retained engineering capability for businesses that need continuous iteration, monitoring and roadmap delivery without hiring an internal team.',
  },
  {
    number: '03',
    title: 'Agency Partnerships',
    desc: 'White label delivery for agencies, consultancies and IT companies that sell technology and need a silent, reliable engineering department behind their brand.',
  },
];

function TechCard({ text, primary }: { text: string; primary: boolean }) {
  const reveal = useReveal('up');

  return (
    <p
      className={`about-tech-card${primary ? ' about-tech-card--primary' : ''} ${reveal.className}`}
      ref={reveal.ref}
    >
      {text}
    </p>
  );
}

export default function AboutPage() {
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
  const processHead = useReveal('up');
  const techReveal = useReveal('up');
  const layersHead = useReveal('up');
  const principlesHead = useReveal('up');
  const aiCopy = useReveal('left');
  const aiList = useReveal<HTMLUListElement>('right');
  const riskHead = useReveal('up');
  const workHead = useReveal('up');

  return (
    <main className="about-page">
      <section className="about-hero section">
        <div className="about-hero__banner">
          <img src={heroBannerBlur} alt="" className="about-hero__banner-img" loading="eager" />
        </div>
        <div className="about-hero__banner-fade" />
        <img src={heroBannerGlow} alt="" className="about-hero__banner-glow" loading="eager" />
        <div className={`container about-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">About Van Tech Systems</span>
          <h1 className="about-hero__title">
            An engineering company for businesses that need systems, not slideware.
          </h1>
          <p className="about-hero__desc">
            We design, build and operate intelligent software: AI agents and automation
            that carry real workload, and applications and platforms that stay
            maintainable long after launch. Everything we ship is architected by the
            same engineers who scope it.
          </p>
          <div className="about-hero__actions">
            <a href="#contact" className="btn btn-outline">
              Start a Project
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
            <a href="/#work" className="btn btn-outline">
              Our Work
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="about-process section">
        <img src={processGlow} alt="" className="about-process__glow-bg" loading="lazy" />
        <div className="container maix-new-widthadd">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="section-title">
              A delivery model designed around decisions, not deliverables.
            </h2>
          </div>

          <div className="about-process__list">
            {processSteps.map((step, i) => (
              <div
                className={`about-process-item${i === 0 ? ' about-process-item--active' : ''}`}
                key={step.number}
              >
                <div className="about-process-item__lead">
                  <div className="about-process-item__icon about-process-item__icon--img">
                    <img src={step.iconImg} alt="" className="about-process-item__icon-img" />
                  </div>
                  <h3 className="about-process-item__title">{step.title}</h3>
                </div>
                <p className="about-process-item__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-tech section">
        
        <div className="container">
          <div className={`about-tech__head ${techReveal.className}`} ref={techReveal.ref}>
            <img src={techBadge} alt="" className="about-tech__badge" loading="lazy" />
            <h2 className="about-title">Technology built to be owned, not rented</h2>
          </div>

          <div className="about-tech__grid">
            {techCards.map((text, i) => (
              <TechCard key={i} text={text} primary={i === 0} />
            ))}
          </div>
        </div>
        <img src={archDivider2} alt="" className="about-divider" loading="lazy" />
      </section>

      <section className="about-layers section">
        <img src={ambientGlowBlob} alt="" className="about-layers__bg" loading="lazy" />
        <div className="container">
          <div className={`section-head ${layersHead.className}`} ref={layersHead.ref}>
            <img src={layersBadge} alt="" className="about-tech__badge" loading="lazy" />
            {/* <span className="eyebrow-pill">How We Build</span> */}
            <h2 className="section-title">What we build, layer by layer</h2>
            <p className="section-subtitle">
              Every system we ship is made of the same five layers — scoped and
              tested on their own before they come together.
            </p>
          </div>

          <div className="about-layers-table">
            {layers.map((layer) => (
              <div className="about-layers-table__row" key={layer.number}>
                <h3 className="about-layers-table__title">{layer.title}</h3>
                <div className="about-layers-table__tags">
                  {layer.tags.map((tag) => (
                    <span className="about-layers-table__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider3} alt="" className="about-divider-top" loading="lazy" />
      </section>

      <section className="about-principles section">
        <img src={principlesGlow} alt="" className="about-principles__glow" loading="lazy" />
        <div className="container">
          <div className={`section-head ${principlesHead.className}`} ref={principlesHead.ref}>
            <span className="eyebrow-pill">Engineering principles</span>
            <h2 className="section-title">
              The decisions we make the same way every time
            </h2>
          </div>

          <div className="about-arch-diagram">
            <div className="about-arch-diagram__panel about-arch-diagram__panel--left">
              <span className="about-arch-diagram__pill">Business goal</span>
              <span className="about-arch-diagram__pill">Existing systems</span>
              <span className="about-arch-diagram__pill">Real data</span>
              <span className="about-arch-diagram__pill">Constraints</span>
            </div>
            <div className="about-arch-diagram__center">
              <span className="about-arch-diagram__line" />
              <div className="about-arch-diagram__circle">
                <img src={architectureIcon} alt="" />
                <span>
                  Architecture
                  <br />
                  Decision
                </span>
              </div>
              <span className="about-arch-diagram__line" />
            </div>
            <div className="about-arch-diagram__panel about-arch-diagram__panel--right">
              <span className="about-arch-diagram__pill">Documented model</span>
              <span className="about-arch-diagram__pill">Working system</span>
              <span className="about-arch-diagram__pill">Owned infrastructure</span>
            </div>
          </div>

          <div className="about-principles__grid">
            {principles.map((p) => (
              <div className="about-principle-card" key={p.title}>
                <h3 className="about-principle-card__title">{p.title}</h3>
                <p className="about-principle-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={archDivider4} alt="" className="about-divider" loading="lazy" />
      </section>

      <section className="about-ai section">
        <img src={aiGlow} alt="" className="about-ai__glow" loading="lazy" />
        <div className="container about-row">
          <div className={`about-copy ${aiCopy.className}`} ref={aiCopy.ref}>
            <h2 className="about-title">
              Useful AI is an engineering problem, not a demo.
            </h2>
            <p className="about-desc">
              A convincing demo takes an afternoon. A production AI system that
              answers accurately, refuses to invent facts, respects permissions,
              escalates cleanly and can be audited afterwards is an engineering
              project with a data model behind it. That is the distinction we work
              to. Our AI systems are grounded in the client's own content and data,
              constrained to defined actions, logged end to end and monitored after
              launch — because an AI system that cannot be inspected cannot be
              trusted with customers.
            </p>
          </div>

          <ul className={`about-ai__list ${aiList.className}`} ref={aiList.ref}>
            {aiPoints.map((point, i) => (
              <li key={point} className="about-ai__point">
                <span className="about-ai__point-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="about-ai__point-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src={archDivider5} alt="" className="about-divider" loading="lazy" />
      </section>

      <section className="about-risk section">
        <div className="container">
          <div className={`section-head ${riskHead.className}`} ref={riskHead.ref}>
            <span className="eyebrow-pill">Standards and Governance</span>
            <h2 className="section-title">
              How we handle data, access and accountability
            </h2>
          </div>

          <div className="about-risk__grid">
            {riskCards.map((card) => (
              <div className="about-risk-card" key={card.title}>
                <img src={card.icon} alt="" className="about-risk-card__icon" loading="lazy" />
                <h3 className="about-risk-card__title">{card.title}</h3>
                <p className="about-risk-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="about-risk__note">
            Detailed policies are available in our legal center, including privacy,
            terms, cookies, accessibility and AI usage.{' '}
            <a href="/legal" className="about-risk__note-link">
              /legal
            </a>
          </p>
        </div>
        <img src={archDivider1} alt="" className="about-divider" loading="lazy" />
      </section>

      <section className="about-work section">
        <img src={workGlow} alt="" className="about-work__glow" loading="lazy" />
        <div className="container">
          <div className={`section-head ${workHead.className}`} ref={workHead.ref}>
            <h2 className="section-title">Three ways businesses work with us</h2>
          </div>

          <div className="about-work__grid">
            {workCards.map((card) => (
              <div className="about-work-card" key={card.number}>
                <Icon svg={workBadgeSvg} className="about-work-card__badge" />
                <h3 className="about-work-card__title">{card.title}</h3>
                <p className="about-work-card__desc">{card.desc}</p>
                <span className="about-work-card__number">{card.number}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
