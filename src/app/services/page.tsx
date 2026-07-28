import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Services | Activewear Clothing Manufacturers',
  description:
    'Comprehensive activewear manufacturing services: custom design, tech packs, fabric sourcing, sampling, private labeling, bulk production and more.',
};

const services = [
  'Custom Product Design',
  'Tech Pack Development',
  'Fabric Sourcing',
  'Sampling & Prototyping',
  'Private Labeling',
  'Bulk Manufacturing',
  'Quality Assurance',
  'Logistics & Shipping',
  'Brand Consultation',
  'Sustainable Practices',
  'Pattern Making',
  'Cut & Sew Services',
  'Embroidery & Printing',
  'Packaging Solutions',
  'Market Analysis',
];

const features = [
  {
    title: 'Low Minimum Order Quantities',
    description:
      'Start your collection with as few as 50 pieces per style, perfect for emerging brands.',
  },
  {
    title: 'Fast Production Timelines',
    description:
      'Get your products ready for market in as little as 4 weeks from design approval.',
  },
  {
    title: 'High-Quality Materials',
    description:
      'We source only the finest fabrics to ensure durability and comfort in every piece.',
  },
  {
    title: 'Dedicated Support',
    description:
      'Our team is with you every step of the way, from initial concept to final delivery.',
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        variant="solid"
        title="Elevate Your Brand with Custom Activewear Solutions"
        subtext="Discover unparalleled expertise in activewear manufacturing, tailored to bring your brand’s vision to life with precision and style."
        ctaText="Explore Our Services"
        ctaHref="#services"
      />

      {/* Services grid */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <Image
            src="/images/services-model.jpg"
            alt="Activewear model wearing custom manufactured apparel"
            width={800}
            height={1080}
            className="rounded-md w-full h-auto"
          />
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl mb-10">
              Comprehensive Manufacturing Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f2542d" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h4 className="font-sans font-semibold text-sm">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow text-center mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Unmatched Features of Our Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <Image
              src="/images/services-fabric.jpg"
              alt="Premium activewear fabric close-up"
              width={800}
              height={600}
              className="rounded-md w-full h-auto"
            />
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-7"
                >
                  <h4 className="text-lg mb-3">{feature.title}</h4>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-white text-3xl md:text-4xl mb-6">
            Get Started with Us Today
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Ready to elevate your activewear line? Contact us for a consultation
            or quote and discover how we can bring your vision to life with
            precision and expertise.
          </p>
          <Link href="/contact-us" className="btn-coral">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
