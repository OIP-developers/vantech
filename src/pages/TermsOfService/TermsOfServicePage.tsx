import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';

export default function TermsOfServicePage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Terms of Service</h1>
          <p className="legal-hero__updated">Last updated: September 17, 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className={`container legal-content__wrap ${content.className}`} ref={content.ref}>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            vantechsystems.tech (the &ldquo;Site&rdquo;) and any inquiry, booking, or
            engagement you make with Van Tech Systems (&ldquo;Van Tech Systems&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) through it. By using the
            Site, you agree to these Terms. If you do not agree, please do not use the Site.
          </p>

          <h2>1. About Our Services</h2>
          <p>
            Van Tech Systems designs and builds AI systems, SaaS platforms, web and mobile
            applications, automation, and custom business software for clients. The Site
            describes our services and lets you request a consultation or book a free AI
            session. The Site itself is informational — any actual project, deliverable, or
            paid engagement is governed by a separate written agreement (such as a proposal,
            statement of work, or contract) between you and Van Tech Systems, which will take
            precedence over these Terms for that engagement.
          </p>

          <h2>2. Using the Site</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a way that does not
            infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by,
            anyone else. You agree not to attempt to gain unauthorized access to the Site, its
            related systems, or any data it may hold.
          </p>

          <h2>3. Bookings and Consultations</h2>
          <p>
            When you book a call or consultation through the Site, you agree to provide accurate
            and current information. Bookings are scheduled through a third-party scheduling
            platform embedded on the Site, and use of that widget is also subject to that
            provider&rsquo;s own terms. Van Tech Systems reserves the right to reschedule or
            decline a booking at its discretion.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The Site, including its text, graphics, logos, case studies, and design, is owned by
            or licensed to Van Tech Systems and is protected by applicable intellectual property
            laws. You may view and use the Site for your own personal or internal business
            evaluation of our services, but you may not copy, reproduce, republish, or
            redistribute any part of the Site without our prior written permission.
          </p>

          <h2>5. Case Studies and Client Work</h2>
          <p>
            Case studies, screenshots, and descriptions of client projects shown on the Site are
            shared with permission and are intended to illustrate the type of work we do. They do
            not guarantee any particular outcome, timeline, or result for future engagements, as
            every project differs in scope and requirements.
          </p>

          <h2>6. Third-Party Links and Tools</h2>
          <p>
            The Site may link to, or embed tools from, third-party services (such as our
            scheduling platform). We are not responsible for the content, accuracy, or practices
            of any third-party service, and your use of those services is subject to their own
            terms and privacy policies.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            The Site and its content are provided &ldquo;as is&rdquo; without warranties of any
            kind, express or implied. While we make reasonable efforts to keep the Site accurate
            and available, we do not guarantee that it will be error-free, uninterrupted, or free
            of viruses or other harmful components.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Van Tech Systems will not be liable for any
            indirect, incidental, special, or consequential damages arising out of or relating to
            your use of the Site. Nothing in these Terms limits liability that cannot be excluded
            or limited under applicable law.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time to reflect changes in our services or for
            legal or operational reasons. We will update the &ldquo;Last updated&rdquo; date above
            when we do, and continued use of the Site after changes take effect means you accept
            the updated Terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, contact us at{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a> or{' '}
            <a href="tel:+19034763762">+1 (903) 476-3762</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
