import { Metadata } from 'next';
import LegalLayout from '@/components/sections/legal/LegalLayout';
import { getSiteContent } from '@/services/api';
import { ISingleResponse } from '@/types/common';

export const metadata: Metadata = {
  title: 'Terms of Service | Blue Bell Resort – Wayanad, Kerala',
  description: 'The terms that govern your use of bluebellwayand.com and any reservation requests submitted to Blue Bell Resort.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
};

export default async function TermsOfServicePage() {
  const siteContent = await getSiteContent();
  // const data = siteContent.termsOfService;

  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" lastUpdated="August 3, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of bluebellwayand.com (the
        &ldquo;Site&rdquo;), operated by Blue Bell (&ldquo;Blue Bell&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
        or &ldquo;our&rdquo;) for our resort in Periya, Wayanad, Kerala. By using the Site, you agree to these
        Terms.
      </p>

      <h2>1. About This Website</h2>
      <p>The Site is an informational and marketing website for Blue Bell. It showcases our treehouse and
        private-pool dome stays, amenities, gallery, and events, and allows you to send us reservation and
        general enquiries.</p>

      <h2>2. Reservation Requests, Not Instant Bookings</h2>
      <p>Submitting the Book Now form sends Blue Bell a <strong>reservation request</strong> — it does not by
        itself guarantee availability or constitute a confirmed booking. Our reservations team will contact
        you by phone, email, or WhatsApp to confirm availability, final pricing, and payment before your stay
        is confirmed. The Site does not currently process online payments.</p>

      <h2>3. Rates &amp; Availability</h2>
      <p>Nightly rates shown on the Site are indicative starting rates for each stay and are subject to
        change without notice. Final rates, applicable taxes, and any seasonal or event pricing will be
        confirmed at the time of booking. Availability is not guaranteed until confirmed directly by our
        reservations team.</p>

      <h2>4. Check-In &amp; Check-Out</h2>
      <p>Standard check-in is at 2:00 PM and check-out is at 11:00 AM, unless otherwise agreed with the
        resort in advance.</p>

      <h2>5. Cancellations, Refunds &amp; Payments</h2>
      <p>Because bookings and payments are finalized directly with our reservations team rather than through
        this Site, cancellation, refund, and payment terms will be communicated and agreed at the time your
        booking is confirmed. Please confirm these details with our team before finalizing your stay.</p>

      <h2>6. Guest Conduct</h2>
      <p>Guests are expected to treat the property, our staff, and other guests with respect, and to follow
        reasonable property rules communicated on arrival. Blue Bell reserves the right to refuse or
        discontinue service in cases of unsafe, unlawful, or abusive conduct.</p>

      <h2>7. Website Content &amp; Intellectual Property</h2>
      <p>The text, photographs, the Blue Bell name and logo, and other content on this Site are the property
        of Blue Bell or used under license, and may not be copied, reproduced, or used commercially without
        our prior written permission.</p>

      <h2>8. Third-Party Services &amp; Links</h2>
      <p>The Site includes a link to chat with us on WhatsApp and links to our social media profiles. These
        third-party services are governed by their own terms and privacy policies, and Blue Bell is not
        responsible for their content or practices.</p>

      <h2>9. No Warranty &amp; Limitation of Liability</h2>
      <p>The Site and its content are provided &ldquo;as is.&rdquo; We take reasonable care to keep
        information — including rates, availability, and amenities — accurate and up to date, but we do not
        guarantee it is error-free. To the maximum extent permitted by law, Blue Bell is not liable for any
        indirect or consequential loss arising from your use of the Site.</p>

      <h2>10. Governing Law</h2>
      <p>These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of
        the Site will be subject to the exclusive jurisdiction of the courts in Wayanad, Kerala.</p>

      <h2>11. Changes to These Terms</h2>
      <p>We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this
        page indicates when it was last revised. Continued use of the Site after changes are posted means you
        accept the revised Terms.</p>

      <h2>12. Contact Us</h2>
      <p>Questions about these Terms can be sent to:</p>
      <ul>
        <li><strong>Address:</strong> { 'Peria Korome Rd, Alattil, Kerala 670644, India'}</li>
        <li><strong>Phone:</strong> {'+91 73060 45321'}</li>
        <li><strong>Email:</strong> <a href='bluebelllwayanad0@gmail.com'>{'bluebelllwayanad0@gmail.com'}</a></li>
      </ul>
    </LegalLayout>
  );
}
