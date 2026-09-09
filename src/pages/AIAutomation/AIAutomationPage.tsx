import type { CSSProperties } from 'react';
import './ai-automation.css';
import Icon from '../../components/Icon';
import { useReveal } from '../../hooks/useReveal';
import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import workflowSvg from '../../assets/icons/boxicons-workflow-alt-filled.svg?raw';
import supportSvg from '../../assets/icons/fluent-person-support-28-filled.svg?raw';
import heroStar from '../../assets/images/ai-automation/figma/hero-star.png';
import badgeCircle from '../../assets/images/ai-automation/figma/badge-circle.png';
import orbitRing from '../../assets/images/ai-automation/figma/orbit-ring.svg';
import orbitEllipse from '../../assets/images/ai-automation/figma/orbit-ellipse.svg';
// Shared hero ombre glow — the same asset already used behind the hero on
// the About and Partners pages; reused here instead of a duplicate export.
import heroBannerBlur from '../../assets/images/about/figma/hero-banner-blur.png';
import bottomSphere from '../../assets/images/ai-automation/figma/bottom-sphere.png';

const ORBIT_DURATION = '42s';

// angle/radius/size derived from each badge's position and footprint in
// the Figma frame relative to the graphic's center, so the float traces
// the same circle — and relative scale — the design placed them on.
const orbitBadges = [
  { svg: supportSvg, angle: -114.14, radius: 172, size: 40 },
  { svg: designServicesSvg, angle: -149.6, radius: 228, size: 78 },
  { svg: databaseSvg, angle: -42.35, radius: 163, size: 56 },
  { svg: workflowSvg, angle: -2.92, radius: 216, size: 78 },
];

const frictionPoints = [
  { number: '01', text: 'Leads sit unqualified while someone finds time to review them.' },
  { number: '02', text: 'The same data is entered into several systems by hand.' },
  { number: '03', text: 'Follow-up depends on individuals remembering.' },
  { number: '04', text: 'Reporting is assembled manually from separate tools.' },
];

export default function AIAutomationPage() {
  const copy = useReveal('left');
  const graphic = useReveal('right');
  const operations = useReveal('left');
  const frictionReveal = useReveal('right');

  return (
    <main className="ai-automation-page">
      <section className="ai-automation-hero section" id="ai-automation-hero">
        <div className="container ai-automation-hero__container">
          <div className={`ai-automation-hero__copy ${copy.className}`} ref={copy.ref}>
            <span className="ai-automation-hero__eyebrow">
              <Icon svg={servicesStarSvg} />
              Services
            </span>

            <h1 className="ai-automation-hero__title">
              Your Operations.
              <br />
              Automated.
            </h1>

            <p className="ai-automation-hero__desc">
              Connect the systems your business already uses and remove the repetitive
              manual steps between them — capture, qualification, updates, follow-up,
              scheduling and reporting.
            </p>

            <div className="ai-automation-hero__actions">
              <a
                href="https://vantechsystems.tech/start-a-project"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get my project estimate
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="/#services" className="btn btn-outline">
                Explore all services
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>

          <div className={`ai-automation-hero__graphic ${graphic.className}`} ref={graphic.ref}>
            <div className="ai-automation-orbit">
              <img src={orbitRing} alt="" className="ai-automation-orbit__ring" />
              <img src={orbitEllipse} alt="" className="ai-automation-orbit__ellipse" />
              <img src={heroStar} alt="" className="ai-automation-orbit__star-glow" />
              <img src={heroStar} alt="" className="ai-automation-orbit__star" />

              {orbitBadges.map((item, i) => (
                <div
                  key={i}
                  className="ai-automation-orbit__anchor"
                  style={
                    {
                      '--start-angle': `${item.angle}deg`,
                      animationDuration: ORBIT_DURATION,
                    } as CSSProperties
                  }
                >
                  <div
                    className="ai-automation-orbit__radius"
                    style={{ '--radius': item.radius } as CSSProperties}
                  >
                    <div
                      className="ai-automation-orbit__counter"
                      style={{ animationDuration: ORBIT_DURATION }}
                    >
                      <span
                        className="ai-automation-orbit__badge"
                        style={
                          {
                            backgroundImage: `url(${badgeCircle})`,
                            '--badge-size': `${item.size}px`,
                          } as CSSProperties
                        }
                      >
                        <Icon svg={item.svg} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-automation-friction section">
        <div className="container ai-automation-friction__row">
          <div className={`ai-automation-friction__copy ${operations.className}`} ref={operations.ref}>
            <h2 className="ai-automation-friction__title">Where operational time disappears</h2>
            <p className="ai-automation-friction__desc">
              Most teams do not lose time on the work itself. They lose it moving
              information between tools, re-typing the same details and remembering to
              follow up.
            </p>
          </div>

          <div
            className={`ai-automation-friction__list ${frictionReveal.className}`}
            ref={frictionReveal.ref}
          >
            {frictionPoints.map((item) => (
              <div className="ai-automation-friction-item" key={item.number}>
                <span className="ai-automation-friction-item__number">{item.number}</span>
                <p className="ai-automation-friction-item__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
