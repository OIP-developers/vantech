import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import arrowDownSvg from '../assets/icons/dashicons-arrow-left-alt2.svg?raw';
import Icon from './Icon';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '/about' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'AI Agents', href: '/ai-agents' },
      { label: 'AI Automations', href: '/ai-automation' },
      { label: 'Model Development', href: '/model-development' },
      { label: 'Autopilot', href: '/auto-pilot' },
      { label: 'MVP Development', href: '/mvp-development' },
      { label: 'Web Applications', href: '/web-applications' },
      { label: 'Mobile Applications', href: '/mobile-application' },
      { label: 'SaaS Development', href: '/saas-development' },
      { label: 'Custom Software', href: '/custom-development' },
      { label: 'Ecommerce', href: '/ecommerce-development' },
    ],
  },
  { label: 'Partner Program', href: '/partners' },
  {
    label: 'Work',
    href: '#work',
    dropdown: [
      { label: 'Van Travel Business', href: '/van-travel-business' },
      'Power Mindset Breakthrough',
      'AI FNA',
      'Provexa AI',
    ],
  },
  { label: 'Faq', href: '#faq' },
  { label: 'Contact', href: '/contact' },
];

const languages = ['EN', 'FR', 'ES', 'PT'];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <a href={isHome ? '#home' : '/'} className="navbar__logo">
            <img src={logo} alt="Van Tech Systems" width={113} height={54} />
          </a>

          <nav className={`navbar__nav${isMenuOpen ? ' is-open' : ''}`}>
            <ul className="navbar__links">
              {navLinks.map((link) => {
                const href =
                  link.href.startsWith('#') && !isHome ? `/${link.href}` : link.href;
                return (
                <li key={link.label} className={link.dropdown ? 'has-dropdown' : ''}>
                  <a href={href} className="navbar__link" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                    {link.dropdown && (
                      <Icon svg={arrowDownSvg} className="navbar__link-arrow" />
                    )}
                  </a>

                  {link.dropdown && (
                    <div className="navbar__dropdown-wrap">
                      <ul className="navbar__dropdown">
                        {link.dropdown.map((item) => {
                          const itemLabel = typeof item === 'string' ? item : item.label;
                          const itemHref = typeof item === 'string' ? '#' : item.href;
                          return (
                            <li key={itemLabel}>
                              <a href={itemHref} onClick={() => setIsMenuOpen(false)}>
                                {itemLabel}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
                );
              })}
            </ul>

            <ul className="navbar__langs navbar__langs--mobile">
              {languages.map((lang, i) => (
                <li key={lang} className={i === 0 ? 'is-active' : ''}>
                  {lang}
                </li>
              ))}
            </ul>

            <a
              href={isHome ? '#contact' : '/#contact'}
              className="navbar__cta navbar__cta--mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Project
            </a>
          </nav>

          <div className="navbar__actions">
            <ul className="navbar__langs">
              {languages.map((lang, i) => (
                <li key={lang} className={i === 0 ? 'is-active' : ''}>
                  {lang}
                </li>
              ))}
            </ul>
            <a href={isHome ? '#contact' : '/#contact'} className="navbar__cta navbar__cta--desktop">
              Start a Project
            </a>
            <button
              type="button"
              className={`navbar__toggle${isMenuOpen ? ' is-open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
