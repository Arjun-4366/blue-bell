import { Metadata } from 'next';
import LegalLayout from '@/components/sections/legal/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Blue Bell Resort – Wayanad, Kerala',
  description: 'How Blue Bell Resort collects, uses, and protects the information you share with us through bluebellwayand.com.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" lastUpdated="August 3, 2026">
      <p>
        Blue Bell (&ldquo;Blue Bell&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the
        website bluebellwayand.com (the &ldquo;Site&rdquo;) for our treehouse and private-pool dome resort in
        Periya, Wayanad, Kerala. This Privacy Policy explains what information we collect when you visit the
        Site or submit an enquiry or reservation request, how we use it, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>
      <p><strong>Information you give us directly.</strong> When you submit the Contact form or the Book Now
        reservation request form, we collect the details you provide, which may include your name, email
        address, phone number, preferred check-in and check-out dates, number of guests, chosen stay/room
        type, and any special requests or notes you add (for example, dietary needs or occasion details).</p>
      <p><strong>Information collected automatically.</strong> Like most websites, our server and any
        analytics tools we use may automatically log standard technical information — such as IP address,
        browser and device type, pages visited, and time spent on the Site — for security and to understand
        how the Site is used.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to reservation requests and confirm bookings by phone, email, or WhatsApp</li>
        <li>To answer enquiries submitted through the Contact page</li>
        <li>To operate, maintain, and improve the Site</li>
        <li>To meet legal, accounting, or security obligations</li>
      </ul>
      <p>We do not use the information you submit for automated marketing emails or SMS campaigns unless you
        separately and clearly opt in to receive them.</p>

      <h2>3. How We Share Information</h2>
      <p>We do not sell or rent your personal information. We share it only in the following limited
        circumstances:</p>
      <ul>
        <li>With Blue Bell&rsquo;s own reservations team in Periya, Wayanad, to process and confirm your
          enquiry or booking</li>
        <li>With WhatsApp (operated by Meta), if you choose to contact us using the WhatsApp button on the
          Site — that conversation is subject to WhatsApp&rsquo;s own privacy policy</li>
        <li>With our website hosting provider (Amazon Web Services), which may process technical server logs
          purely to keep the Site running and secure</li>
        <li>With analytics or search-console tools such as Google Analytics or Google Search Console, if and
          when we enable them on the Site, in which case Google may process anonymized usage data under its
          own privacy policy</li>
        <li>Where required by law, regulation, or a valid legal process</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>At present, the Site does not use marketing or advertising cookies. We may use essential cookies or
        local browser storage required for the Site to function correctly (for example, remembering your
        cookie preference). If we add analytics tools such as Google Analytics in the future, this policy
        will be updated accordingly and, where required by law, we will ask for your consent first.</p>

      <h2>5. Data Retention</h2>
      <p>We retain the information you submit for as long as necessary to respond to your enquiry or fulfil
        your booking, and afterwards for a reasonable period to meet reasonable record-keeping, accounting,
        or legal obligations. You may ask us to delete your information at any time as described in Section 7
        below.</p>

      <h2>6. Data Security</h2>
      <p>We take reasonable technical and organizational measures to protect the information you share with
        us. However, no method of transmission over the internet or electronic storage is completely secure,
        and we cannot guarantee absolute security.</p>

      <h2>7. Your Rights</h2>
      <p>You may request access to, correction of, or deletion of the personal information you have shared
        with us, in accordance with applicable Indian data protection law, including the Digital Personal
        Data Protection Act, 2023. To make a request, email us at{' '}
        <a href="mailto:bluebelllwayanad0@gmail.com">bluebelllwayanad0@gmail.com</a>.</p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>The Site is not directed at children, and we do not knowingly collect personal information directly
        from minors. Where children are included as guests on a reservation, that information is provided by
        an accompanying adult guardian.</p>

      <h2>9. Third-Party Links</h2>
      <p>The Site links to our social media profiles and to WhatsApp. These third-party platforms have their
        own privacy policies, and we encourage you to review them — Blue Bell is not responsible for their
        content or privacy practices.</p>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes to the Site or our practices.
        The &ldquo;Last updated&rdquo; date at the top of this page indicates when it was last revised.</p>

      <h2>11. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or how we handle your information, please reach out:</p>
      <ul>
        <li><strong>Address:</strong> Peria Korome Rd, Alattil, Kerala 670644, India</li>
        <li><strong>Phone:</strong> +91 73060 45321</li>
        <li><strong>Email:</strong> <a href="mailto:bluebelllwayanad0@gmail.com">bluebelllwayanad0@gmail.com</a></li>
      </ul>
    </LegalLayout>
  );
}
