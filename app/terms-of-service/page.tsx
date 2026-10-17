import LegalPage from "@/components/shared/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | WildRank Technologies",
  description:
    "The terms that apply to Wildrank Technologies' website and client engagements: scope, fees, client responsibilities, ownership and limits of liability.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="17 October 2026"
      intro="These terms cover both your use of this website and any services you engage us to deliver. Where a signed proposal or master services agreement says something different, that agreement wins."
    >
      <div>
        <h2>The agreement</h2>
        <p>
          By using wildranktechnologies.com, or by engaging Wildrank Technologies
          (&quot;Wildrank&quot;, &quot;we&quot;, &quot;us&quot;) to provide services, you agree to
          these terms. If you are agreeing on behalf of a company, you confirm you are authorised to
          do so.
        </p>
      </div>

      <div>
        <h2>Scope of services</h2>
        <p>
          The work we do for you is described in the proposal, statement of work or campaign plan we
          both agree in writing. That document sets out the deliverables, the monthly or one-off fee
          and the duration. Anything outside it is a change request: we will scope and price it
          before starting, and we will not treat a conversation as an instruction.
        </p>
      </div>

      <div>
        <h2>Quotations and fees</h2>
        <ul>
          <li>Quotations are valid for 30 days unless the proposal says otherwise.</li>
          <li>Retainers are invoiced in advance each month; project work follows the schedule in the proposal.</li>
          <li>Fees do not include third-party costs such as advertising spend, licences or paid tools unless we state that they do.</li>
          <li>We may pause work on invoices that are overdue, after telling you.</li>
          <li>Taxes are charged where the law requires them.</li>
        </ul>
      </div>

      <div>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Give us timely access to the accounts, systems, brand assets and information the work depends on.</li>
          <li>Make sure everything you supply is accurate, lawful and yours to use.</li>
          <li>Return approvals promptly — most timelines slip because approvals wait, not because work does.</li>
          <li>Keep your own copies of any content or data you send us.</li>
          <li>Comply with the terms of the platforms we operate on your behalf (Google, Bing, Meta and others).</li>
        </ul>
      </div>

      <div>
        <h2>Third-party platforms</h2>
        <p>
          A large part of our work happens inside systems we do not own or control. Search engines,
          AI assistants and advertising platforms change their algorithms, policies and interfaces
          without notice, and they sometimes suspend accounts or disapprove ads based on their own
          decisions. We manage those platforms carefully on your behalf, but we cannot guarantee
          their behaviour, and we are not responsible for platform decisions made independently of
          us.
        </p>
      </div>

      <div>
        <h2>No guarantee of specific results</h2>
        <p>
          We will not promise you a particular ranking, traffic volume, AI citation, lead count or
          revenue figure, and you should be cautious with any agency that does. Search and AI
          visibility depend on factors outside anyone&apos;s control, including competition,
          platform policy and your own market. What we commit to is the process we described in your
          plan and honest reporting against it. Past results for other clients are not a promise of
          yours.
        </p>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <ul>
          <li>
            <strong>Your material.</strong> You keep ownership of everything you give us — brand
            assets, copy, images, data — and you grant us the licence needed to do the work.
          </li>
          <li>
            <strong>Our deliverables.</strong> Ownership of the finished work passes to you when the
            related invoice is paid, except for third-party components and our pre-existing
            frameworks, templates and internal tooling, which stay ours and are licensed to you for
            use in the delivered work.
          </li>
          <li>
            <strong>Portfolio.</strong> Unless you ask us in writing not to, we may reference the
            work we did for you in our portfolio and case studies, without disclosing confidential
            information.
          </li>
        </ul>
      </div>

      <div>
        <h2>Confidentiality</h2>
        <p>
          Each of us will keep the other&apos;s non-public business information confidential and use
          it only to perform this agreement. This does not cover information that is already public,
          was already known to the receiving party, or must be disclosed by law.
        </p>
      </div>

      <div>
        <h2>Data protection</h2>
        <p>
          How we handle personal data is set out in our{" "}
          <a href="/privacy-policy">Privacy Policy</a>. Where we process personal data on your behalf
          as part of a service, we do so on your instructions and in line with the applicable data
          protection law.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent the law allows, our total liability arising out of or relating to an
          engagement is limited to the fees you paid us for that engagement in the three months
          before the event giving rise to the claim. Neither party is liable for indirect or
          consequential losses, lost profits, lost revenue or lost data. Nothing here limits
          liability that cannot lawfully be limited, including for fraud or death or personal injury
          caused by negligence.
        </p>
      </div>

      <div>
        <h2>Termination</h2>
        <p>
          Retainers continue for the term in your proposal and may be ended by either party with 30
          days&apos; written notice, unless the proposal sets a different notice period. You remain
          responsible for fees for work already performed and for non-cancellable third-party costs
          committed on your behalf. We may end an engagement immediately if we are asked to do
          something unlawful or misleading.
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p>
          Unless your proposal or master services agreement says otherwise, these terms are governed
          by the laws of the jurisdiction in which the Wildrank entity that contracts with you is
          registered, and disputes are subject to the courts of that jurisdiction.
        </p>
      </div>

      <div>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms for the website at any time; the date at the top shows when they
          last changed. Terms governing an active engagement do not change without your written
          agreement.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="mailto:gupta@wildranktechnologies.com">gupta@wildranktechnologies.com</a> or{" "}
          <a href="tel:+17754715295">+1 775 471 5295</a>.
        </p>
      </div>
    </LegalPage>
  );
}
