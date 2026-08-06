import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Contact Us | Activewear Clothing Manufacturers',
  description:
    'Contact Activewear Clothing Manufacturers for custom activewear manufacturing. Reach out for a consultation or quote today.',
};

const contactCards = [
  {
    label: 'Phone',
    value: '(310) 499-2160',
    href: 'tel:+13104992160',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#127475" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.8.7a2 2 0 011.7 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@activewearclothingmanufacturers.com',
    href: 'mailto:info@activewearclothingmanufacturers.com',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#127475" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Los Angeles, CA',
    href: 'https://maps.google.com/?q=Los+Angeles+CA',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#127475" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How can I contact Activewear Clothing Manufacturers?',
    answer:
      'You can reach us via our contact form on the website, email us at info@activewearclothingmanufacturers.com, or call us at (310) 499-2160.',
  },
  {
    question: 'What is the minimum order quantity (MOQ) for custom activewear?',
    answer:
      'Our minimum order quantity is flexible and can be adjusted to meet the needs of both startups and established brands.',
  },
  {
    question: 'How long does the manufacturing process take?',
    answer:
      'The production timeline varies depending on the complexity and size of the order, but we strive to deliver within 4-6 weeks.',
  },
  {
    question: 'Do you offer private label services?',
    answer:
      'Yes, we provide comprehensive private label services, allowing you to brand your activewear with your own labels and tags.',
  },
  {
    question: 'Can I request samples before placing a bulk order?',
    answer:
      'Absolutely, we offer sampling services to ensure you are satisfied with the quality and design before committing to a larger order.',
  },
  {
    question: 'What types of activewear do you manufacture?',
    answer:
      'We specialize in gym wear, athleisure, yoga clothing, and fitness apparel, all crafted from high-quality, performance-driven fabrics.',
  },
];

export default function ContactUs() {
  return (
    <>
      <PageHero
        variant="dark"
        eyebrow="Get in Touch with Activewear Experts"
        title="Contact Activewear Clothing Manufacturers"
        subtext="Reach out to us for all your custom activewear manufacturing needs. We are here to assist you in bringing your brand’s vision to life with quality and precision."
        ctaText="Contact Us Today"
        ctaHref="#contact"
        bgImage="/images/contact-hero.jpg"
      />

      {/* Contact info cards */}
      <section id="contact" className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="bg-white border border-gray-100 rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-8 text-center block hover:shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.25)] transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                {card.icon}
              </div>
              <h4 className="text-lg mb-2">{card.label}</h4>
              <p className="text-ink/70 text-sm">{card.value}</p>
            </a>
          ))}
        </div>

        {/* Consultation form */}
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-ink/80 text-center leading-relaxed mb-10">
            Book a consultation with our team to discuss your activewear
            manufacturing project. Our experts are ready to guide you through
            the process, ensuring your designs are brought to life efficiently
            and effectively.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Common Questions About Our Services
          </h2>
          <p className="text-ink/70 text-center mb-12">
            Find answers to the most frequently asked questions about our
            contact process and activewear manufacturing services.
          </p>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl mb-8">Connect with Us on Social Media</h2>
        <div className="flex justify-center gap-6">
          {['Facebook', 'X', 'Instagram'].map((network) => (
            <a
              key={network}
              href="#"
              className="btn-teal"
              title={`Follow us on ${network}`}
            >
              Follow
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-white text-3xl md:text-4xl mb-8">
            Ready to Start Your Activewear Journey?
          </h1>
          <Link href="#contact" className="btn-coral">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
