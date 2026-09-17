import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';

export default function PrivacyPolicyPage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__updated">Last updated: September 17, 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className={`container legal-content__wrap ${content.className}`} ref={content.ref}>
          <p>
            Van Tech Systems (&ldquo;Van Tech Systems&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) builds AI systems, SaaS platforms, web and mobile applications, and
            custom business software for our clients. This Privacy Policy explains what
            information we collect when you visit vantechsystems.tech (the &ldquo;Site&rdquo;),
            how we use it, and the choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide directly.</strong> When you submit a contact form,
              book a free AI session, or otherwise reach out to us, we collect details such as
              your name, email address, phone number, company name, and any project or message
              details you choose to share.
            </li>
            <li>
              <strong>Booking and scheduling data.</strong> Our booking widget is provided by a
              third-party scheduling platform. When you book a session through it, that
              information is processed by us and by the scheduling provider in order to confirm
              and manage your appointment.
            </li>
            <li>
              <strong>Usage information.</strong> Like most websites, our hosting and
              infrastructure providers may automatically log basic technical information, such as
              your browser type, device type, and pages visited, to keep the Site secure and
              functioning correctly.
            </li>
            <li>
              <strong>Cookies and similar technologies.</strong> We may use cookies or similar
              local storage to remember your preferences (for example, your selected language)
              and to keep the Site working properly. You can control cookies through your browser
              settings.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and schedule consultations or discovery calls;</li>
            <li>Provide, maintain, and improve the Site and the services we offer;</li>
            <li>Send you information you have requested, such as project proposals or follow-ups;</li>
            <li>Understand how the Site is used so we can improve its content and performance; and</li>
            <li>Comply with our legal obligations and protect against fraud or misuse.</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2>3. How We Share Information</h2>
          <p>
            We do not share your personal information with third parties except with service
            providers who help us operate the Site and run our business — such as our scheduling
            and booking platform, hosting provider, and email tools — and only to the extent
            necessary for them to provide those services to us. We may also disclose information
            if required to do so by law, or to protect the rights, property, or safety of Van
            Tech Systems, our clients, or others.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We keep the information we collect for as long as it is needed for the purposes
            described in this Policy, such as maintaining an ongoing client relationship or
            responding to your inquiry, unless a longer retention period is required or permitted
            by law.
          </p>

          <h2>5. Your Rights and Choices</h2>
          <p>
            Depending on where you are located, you may have the right to request access to,
            correction of, or deletion of the personal information we hold about you, or to
            object to certain uses of it. To make a request, contact us using the details below
            and we will respond within a reasonable timeframe.
          </p>

          <h2>6. Children&rsquo;s Privacy</h2>
          <p>
            The Site is intended for businesses and professionals and is not directed at children
            under 16. We do not knowingly collect personal information from children.
          </p>

          <h2>7. Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect the information
            we hold. However, no method of transmission or storage over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>8. International Visitors</h2>
          <p>
            We work with clients around the world. If you access the Site from outside the
            country in which our servers or service providers are located, your information may
            be transferred to, stored, and processed in a different country.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or for legal, operational, or regulatory reasons. We will update the
            &ldquo;Last updated&rdquo; date above when we do.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your
            information, contact us at{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a> or{' '}
            <a href="tel:+19034763762">+1 (903) 476-3762</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

