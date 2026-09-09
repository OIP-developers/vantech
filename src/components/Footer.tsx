import { useLocation } from 'react-router-dom';
import footerBg from '../assets/images/footer-bg.webp';
import footerDecor from '../assets/images/footer-top-start.png';
import logo from '../assets/images/logo.webp';
import { useReveal } from '../hooks/useReveal';

const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '/about' },
  { label: 'Partners Program', href: '/partners' },
  { label: 'Work', href: '#work' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '/contact' },
];
const servicesLinksA = ['AI Agents', 'AI Automations', 'Model Development', 'Autopilot', 'MVP Development'];
const servicesLinksB = ['Web Applications', 'Mobile Applications', 'SaaS Development', 'Custom Software', 'Ecommerce'];
const legalLinks = ['Legal center', 'Cookies', 'Accessibility', 'AI usage'];

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const brand = useReveal('left');
  const companyCol = useReveal('right');
  const servicesCol = useReveal('right');
  const legalCol = useReveal('right');

  return (
    <footer className="site-footer">
      <img src={footerBg} alt="" className="site-footer__bg" loading="lazy" />

      <div className="container">
        <div className="footer-card">
          <img src={footerDecor} alt="" className="footer-card__decor" loading="lazy" />

          <div className="footer-card__top">
            <div className={`footer-brand ${brand.className}`} ref={brand.ref}>
              <img src={logo} alt="Van Tech Systems" className="footer-brand__logo" />
              <p className="footer-brand__tagline">AI &bull; Software &bull; Automation</p>
              <p className="footer-brand__desc">
                We build intelligent software, AI systems, and digital products for
                ambitious businesses.
              </p>
              <div className="footer-brand__contact">
                <div>
                  <span className="footer-brand__contact-label">
                    <span className="footer-brand__bracket">[</span> Call us{' '}
                    <span className="footer-brand__bracket">]</span>
                  </span>
                  <span className="footer-brand__contact-value">+1234 567 89</span>
                </div>
                <div>
                  <span className="footer-brand__contact-label">
                    <span className="footer-brand__bracket">[</span> Mail us{' '}
                    <span className="footer-brand__bracket">]</span>
                  </span>
                  <span className="footer-brand__contact-value">hello@vantechsystems.tech</span>
                </div>
              </div>
            </div>

            <div className={`footer-links ${companyCol.className}`} ref={companyCol.ref}>
              <h4 className="footer-links__title gradient-text">Company</h4>
              <ul>
                {companyLinks.map((l) => {
                  const href = l.href.startsWith('#') && !isHome ? `/${l.href}` : l.href;
                  return (
                    <li key={l.label}>
                      <a href={href}>{l.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              className={`footer-links footer-links--services ${servicesCol.className}`}
              ref={servicesCol.ref}
            >
              <h4 className="footer-links__title gradient-text">Services</h4>
              <div className="footer-links__columns">
                <ul>
                  {servicesLinksA.map((l) => (
                    <li key={l}>
                      <a href="#services">{l}</a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {servicesLinksB.map((l) => (
                    <li key={l}>
                      <a href="#services">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`footer-links ${legalCol.className}`} ref={legalCol.ref}>
              <h4 className="footer-links__title gradient-text">Legal</h4>
              <ul>
                {legalLinks.map((l) => (
                  <li key={l}>
                    <a href="#home">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-card__bottom">
            <p>&copy; 2026 Van Tech Systems. All rights reserved.</p>
            <div className="footer-card__bottom-links">
              <a href="#home">Privacy Policy</a>
              <a href="#home">Terms of Services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
