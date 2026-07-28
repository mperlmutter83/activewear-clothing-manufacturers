import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us | Activewear Clothing Manufacturers',
  description:
    'Activewear Clothing Manufacturers is committed to revolutionizing the activewear industry with exceptional quality and innovation.',
};

const highlights = [
  'Custom Manufacturing',
  'Private Label Solutions',
  'Flexible Order Quantities',
  'Fast Production Timelines',
];

const timeline = [
  {
    year: '2010',
    title: 'Foundation of Excellence',
    description:
      'Activewear Clothing Manufacturers was established with a vision to revolutionize the activewear industry by providing high-quality, performance-driven apparel.',
    image: '/images/timeline-2010.jpg',
  },
  {
    year: '2013',
    title: 'First Major Partnership',
    description:
      'Secured our first major partnership with a renowned fitness brand, marking a significant step in our growth and industry recognition.',
    image: '/images/timeline-2013.jpg',
  },
  {
    year: '2016',
    title: 'Expansion into New Markets',
    description:
      'Expanded our services internationally, offering our expertise to brands across Europe and North America.',
    image: '/images/timeline-2016.jpg',
  },
  {
    year: '2020',
    title: 'Innovation in Sustainability',
    description:
      'Launched our sustainable activewear line, incorporating eco-friendly materials and practices to reduce our environmental impact.',
    image: '/images/timeline-2020.jpg',
  },
];

const features = [
  {
    title: 'Custom Manufacturing',
    description:
      'We specialize in creating bespoke activewear tailored to your brand\u2019s unique requirements, ensuring a perfect fit for your vision.',
    cta: 'Learn More',
  },
  {
    title: 'Private Label Services',
    description:
      'Our private label services allow you to brand your activewear, providing a seamless integration of your identity into our high-quality products.',
    cta: 'Explore Options',
  },
  {
    title: 'Flexible MOQs',
    description:
      'We offer low minimum order quantities, making it easier for startups and small brands to launch their collections without large upfront investments.',
    cta: 'Get Started',
  },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        variant="solid"
        eyebrow="Discover the Future of Activewear"
        title="Activewear Clothing Manufacturers"
        subtext="Elevate your brand with our expert manufacturing solutions, tailored to bring your activewear visions to life."
        ctaText="Explore Our Services"
        ctaHref="/services"
      />

      {/* Highlight blurbs */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {highlights.map((item) => (
            <div key={item} className="flex items-center justify-center gap-3">
              <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#127475" strokeWidth="2.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h4 className="font-sans font-semibold text-sm md:text-base">{item}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey and Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Our Journey and Vision</h2>
            <p className="text-ink/80 leading-relaxed">
              Activewear Clothing Manufacturers is committed to revolutionizing
              the activewear industry by delivering exceptional quality and
              innovation. Our mission is to empower brands with the tools and
              expertise needed to create standout activewear collections. We
              envision a future where every brand, regardless of size, can
              access top-tier manufacturing services. Our core values include
              integrity, excellence, and customer-centricity, ensuring that
              every piece we produce meets the highest standards of quality and
              performance.
            </p>
          </div>
          <Image
            src="/images/about-overview.jpg"
            alt="Activewear overview at Activewear Clothing Manufacturers"
            width={800}
            height={800}
            className="rounded-md w-full h-auto"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-ink/70 text-center mb-14 max-w-2xl mx-auto">
            Since our inception, Activewear Clothing Manufacturers has been at
            the forefront of innovation in the activewear industry. Explore our
            key milestones that have shaped our path to success.
          </p>
          <div className="space-y-16">
            {timeline.map((milestone) => (
              <div key={milestone.year} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-coral font-sans font-bold text-4xl mb-2">
                    {milestone.year}
                  </h3>
                  <h5 className="text-xl mb-3">{milestone.title}</h5>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  width={800}
                  height={600}
                  className="rounded-md w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="text-3xl md:text-4xl">What Sets Us Apart</h2>
            <Link href="/services" className="btn-teal shrink-0">
              Discover More
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-8"
              >
                <h4 className="text-lg mb-3">{feature.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed mb-5">
                  {feature.description}
                </p>
                <Link href="/contact-us" className="btn-coral">
                  {feature.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h4 className="text-white text-3xl md:text-4xl mb-6">
            Reach Out to Us Today
          </h4>
          <p className="text-white/80 leading-relaxed mb-8">
            Ready to bring your activewear vision to life? Contact us to start
            your manufacturing journey with experts who prioritize quality and
            innovation. Let&apos;s create something extraordinary together!
          </p>
          <Link href="/contact-us" className="btn-coral">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
