import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Blue Bell Resort – Wayanad, Kerala',
  description: 'Get in touch with Blue Bell Resort in Periya, Wayanad, Kerala. Contact our reservations desk by phone, email, or WhatsApp for any assistance.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
