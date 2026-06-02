import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Blue Bell Resort – Wayanad, Kerala',
  description: 'Get in touch with Blue Bell Resort in Wayanad, Kerala. Contact our reservation desk, events team, or spa managers for any assistance.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
