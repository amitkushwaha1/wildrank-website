import LegalPage from "@/components/shared/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | WildRank Technologies",
  description:
    "How Wildrank Technologies collects, uses and protects personal data, what our contact form and analytics record, and how to exercise your privacy rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="17 October 2026"
      intro="This policy explains what personal information we collect through wildranktechnologies.com and through our client engagements, why we collect it, and what control you have over it. It is written to be read, not to hide behind."
    >
      <div>
        <h2>Who we are</h2>
        <p>
          Wildrank Technologies (&quot;Wildrank&quot;, &quot;we&quot;, &quot;us&quot;) is a digital
          marketing and IT services company. We are the controller of the personal data described in
          this policy. For any privacy question or request, write to{" "}
          <a href="mailto:gupta@wildranktechnologies.com">gupta@wildranktechnologies.com</a> or call{" "}
          <a href="tel:+17754715295">+1 775 471 5295</a>.
        </p>
      </div>

      <div>
        <h2>What we collect</h2>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Enquiry details.</strong> When you submit an audit request, quote request or
            contact form we collect your name, email address and telephone number, together with the
            service you are interested in, an optional monthly budget range and any message you
            write. If you email or call us instead, we collect what you choose to share.
          </li>
          <li>
            <strong>Client records.</strong> If you engage us, we hold the business contact details,
            project briefs, access arrangements and billing information needed to deliver and invoice
            the work.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Usage data.</strong> Like most sites, ours records standard technical
            information when you visit: pages viewed, time on page, referring page, approximate
            location derived from IP address, browser, device type and operating system.
          </li>
          <li>
            <strong>Analytics cookies.</strong> We use Google Analytics 4 (measurement ID
            G-EC7689B0MJ) to understand which pages are useful. It sets first-party cookies
            (<span className="font-mono text-sm">_ga</span>,{" "}
            <span className="font-mono text-sm">_ga_*</span>) that distinguish one visitor from
            another. IP anonymisation is enabled.
          </li>
        </ul>
        <p>
          We do not run advertising, remarketing or cross-site tracking pixels on this site, and we
          do not build profiles of you across other websites.
        </p>
      </div>

      <div>
        <h2>Why we use it</h2>
        <ul>
          <li>To answer your enquiry and prepare a proposal you have asked for.</li>
          <li>To deliver, support and invoice services you have engaged us for.</li>
          <li>To understand, in aggregate, which content helps visitors — so we can improve it.</li>
          <li>To keep the site secure, prevent abuse and comply with legal obligations.</li>
        </ul>
        <p>
          Where the GDPR or UK GDPR applies, our lawful bases are <strong>consent</strong> (analytics
          cookies and marketing follow-up), <strong>contract</strong> (delivering services) and{" "}
          <strong>legitimate interests</strong> (responding to business enquiries and keeping the
          site secure and functional).
        </p>
      </div>

      <div>
        <h2>Cookies and how to refuse them</h2>
        <p>
          The only non-essential cookies we set are the Google Analytics cookies described above.
          You can delete or block cookies at any time in your browser settings — the site works
          without them — and you can install Google&apos;s official{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener nofollow" target="_blank">
            Analytics opt-out browser add-on
          </a>
          . Blocking analytics does not restrict any feature of the site.
        </p>
      </div>

      <div>
        <h2>Who we share it with</h2>
        <p>We do not sell, rent or trade personal data. We share it only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who process it on our instructions — Google
            (Analytics), and our email and hosting providers — under contracts that limit them to
            that purpose.
          </li>
          <li>
            <strong>Professional advisers</strong> such as accountants or lawyers, where needed.
          </li>
          <li>
            <strong>Authorities</strong> where we are legally required to disclose, or where
            disclosure is necessary to establish or defend a legal claim.
          </li>
        </ul>
      </div>

      <div>
        <h2>How long we keep it</h2>
        <ul>
          <li>
            <strong>Enquiries that do not become projects:</strong> up to 24 months from our last
            contact, then deleted.
          </li>
          <li>
            <strong>Client and billing records:</strong> for the engagement, plus the period our
            accountants and tax rules require.
          </li>
          <li>
            <strong>Analytics data:</strong> retained inside Google Analytics according to the
            property retention setting (14 months).
          </li>
        </ul>
      </div>

      <div>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access the data we hold about you,
          correct it, delete it, restrict or object to our processing, receive it in a portable
          format, or withdraw consent you previously gave. Under the California Consumer Privacy Act
          you also have the right to know what we collect and to opt out of sale or sharing — we do
          neither. Under India&apos;s Digital Personal Data Protection Act you may nominate another
          person to exercise your rights in the event of death or incapacity.
        </p>
        <p>
          To exercise any of these, email{" "}
          <a href="mailto:gupta@wildranktechnologies.com">gupta@wildranktechnologies.com</a> with the
          request and the email address you used. We respond within 30 days, and we may ask for
          proof of identity first so that we do not disclose data to the wrong person. If you are
          unhappy with our response you can complain to your local data protection authority.
        </p>
      </div>

      <div>
        <h2>International transfers</h2>
        <p>
          Our service providers operate globally, so your data may be processed on servers outside
          your country. Where required, those transfers rely on the European Commission&apos;s
          Standard Contractual Clauses or an equivalent safeguard.
        </p>
      </div>

      <div>
        <h2>Security</h2>
        <p>
          The site is served over HTTPS, enquiry data reaches a restricted inbox rather than a public
          database, and access is limited to the people who need it to do their job. No online
          service can promise absolute security, but we do not store payment card details at any
          point.
        </p>
      </div>

      <div>
        <h2>Children</h2>
        <p>
          This site is intended for businesses and is not directed at children. We do not knowingly
          collect personal data from anyone under 16; if you believe we have, contact us and we will
          delete it.
        </p>
      </div>

      <div>
        <h2>Changes to this policy</h2>
        <p>
          If we change how we handle personal data we will update this page and the date at the top.
          Material changes affecting existing clients will also be communicated directly.
        </p>
      </div>
    </LegalPage>
  );
}
