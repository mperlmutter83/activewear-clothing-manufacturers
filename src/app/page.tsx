import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

const accolades = [
  {
    year: '2023',
    title: 'Best Activewear Manufacturer',
    description:
      'Recognized for excellence in quality and innovation in the activewear industry.',
  },
  {
    year: '2022',
    title: 'Top Private Label Producer',
    description:
      'Awarded for outstanding private label services and customer satisfaction.',
  },
  {
    year: '2021',
    title: 'Innovation in Fabric Technology',
    description:
      'Honored for pioneering advancements in sustainable and high-performance fabrics.',
  },
];

const services = [
  {
    title: 'Custom Activewear Manufacturing',
    description:
      'We offer tailored solutions for creating unique activewear pieces that align with your brand\u2019s vision.',
  },
  {
    title: 'Private Label Production',
    description:
      'Our private label services allow you to build your brand with high-quality, custom-branded apparel.',
  },
  {
    title: 'Product Design & Tech Packs',
    description:
      'From concept sketches to detailed tech packs, we provide complete design support for your products.',
  },
  {
    title: 'Fabric Sourcing',
    description:
      'Access a wide range of premium fabrics to ensure your activewear is both stylish and functional.',
  },
  {
    title: 'Sampling & Prototyping',
    description:
      'Develop prototypes to perfect your designs before moving to full-scale production.',
  },
  {
    title: 'Bulk Production & Scaling',
    description:
      'Efficiently scale your production with our streamlined bulk manufacturing processes.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Our rigorous quality checks ensure that every piece meets the highest standards.',
  },
  {
    title: 'Logistics & Delivery',
    description:
      'Reliable and timely delivery services to get your products to market swiftly.',
  },
];

const processSteps = [
  {
    number: '01',
    label: 'Step 1',
    title: 'Submit Your Idea',
    description:
      'Share your vision with us, and we\u2019ll help you bring it to life with our expert guidance and support.',
  },
  {
    number: '02',
    label: 'Step 2',
    title: 'Design & Sampling',
    description:
      'Collaborate with our team to create detailed designs and samples that capture your brand\u2019s essence.',
  },
  {
    number: '03',
    label: 'Step 3',
    title: 'Production',
    description:
      'Once approved, we move to full-scale production, ensuring high-quality standards at every stage.',
  },
];

const whyChooseUs = [
  {
    title: 'Low Minimum Orders',
    description:
      'Perfect for startups, our flexible MOQs allow you to start small and grow at your pace.',
    image: '/images/why-1.jpg',
    cta: 'Learn More',
  },
  {
    title: 'High-Quality Materials',
    description:
      'We use only the finest fabrics and stitching techniques to ensure durability and comfort.',
    image: '/images/why-2.jpg',
    cta: 'Discover More',
  },
  {
    title: 'Fast Turnaround Times',
    description:
      'Our efficient processes ensure your products are delivered quickly without compromising quality.',
    image: '/images/why-3.jpg',
    cta: 'Find Out How',
  },
  {
    title: 'Dedicated Support Team',
    description:
      'Our experienced team is with you every step of the way, from concept to completion.',
    image: '/images/why-4.jpg',
    cta: 'Meet Our Team',
  },
];

const showcase = [
  { src: '/images/show-1.jpg', alt: 'Yoga class outdoor activewear' },
  { src: '/images/show-2.jpg', alt: 'Fitness apparel display' },
  { src: '/images/show-3.jpg', alt: 'Gym wear showcase' },
  { src: '/images/show-4.jpg', alt: 'Athleisure lifestyle' },
  { src: '/images/show-5.jpg', alt: 'Sports bra close-up' },
  { src: '/images/show-6.jpg', alt: 'Leggings in motion' },
  { src: '/images/show-7.jpg', alt: 'Running gear on track' },
  { src: '/images/show-8.jpg', alt: 'Activewear fabric textures' },
];

export default function Home() {
  return (
    <>
      <PageHero
        variant="light"
        eyebrow="Premium Activewear Solutions Tailored for Your Brand"
        title="Custom Activewear Manufacturing — From Concept to Production"
        subtext="We specialize in designing, developing, and manufacturing high-quality activewear with flexible minimums and quick delivery times."
        ctaText="Get a Quote"
        ctaHref="/contact-us"
        bgImage="/images/hero.jpg"
      />

      {/* Teal banner */}
      <section className="bg-teal py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-white text-2xl md:text-3xl text-center md:text-left">
            Launch Your Activewear Line with Us
          </h3>
          <Link href="/contact-us" className="btn-white shrink-0">
            Start Your Line
          </Link>
        </div>
      </section>

      {/* Industry Accolades */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Industry Accolades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accolades.map((award) => (
              <div
                key={award.year}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-8 text-center"
              >
                <span className="inline-flex w-14 h-14 rounded-full bg-teal/10 items-center justify-center mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#127475" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1" />
                  </svg>
                </span>
                <h4 className="text-teal font-sans font-bold text-2xl mb-2">
                  {award.year}
                </h4>
                <h4 className="text-lg mb-3">{award.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Manufacturing Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow text-center mb-3">Our Expertise</p>
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Comprehensive Manufacturing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {services.map((service) => (
              <div key={service.title}>
                <span className="inline-flex w-11 h-11 rounded-full bg-coral/10 items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f2542d" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h4 className="text-lg mb-2">{service.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-teal">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Seamless Process */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Our Seamless Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-coral text-coral font-sans font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="eyebrow mb-1">{step.label}</h4>
                <h4 className="text-xl mb-3">{step.title}</h4>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyChooseUs.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={600}
                  className="w-full h-56 object-cover"
                />
                <div className="p-7">
                  <h5 className="text-xl mb-3">{feature.title}</h5>
                  <p className="text-ink/70 text-sm leading-relaxed mb-5">
                    {feature.description}
                  </p>
                  <Link href="/contact-us" className="btn-coral">
                    {feature.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase — black */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <p className="eyebrow text-center mb-3">Explore Our Collection</p>
          <h2 className="text-white text-3xl md:text-4xl text-center mb-14">
            Activewear Product Showcase
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {showcase.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="rounded-md w-full h-56 md:h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-flex w-16 h-16 rounded-full bg-coral/10 items-center justify-center mb-6">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f2542d" strokeWidth="2">
              <path d="M3 11l18-8-8 18-2-8-8-2z" />
            </svg>
          </span>
          <h4 className="text-3xl md:text-4xl mb-5">
            Launch Your Activewear Line Today
          </h4>
          <p className="text-ink/80 leading-relaxed mb-8">
            Ready to elevate your brand with high-quality, custom activewear?
            Let us help you bring your vision to life with our expert
            manufacturing services. Get started now and see the difference.
          </p>
          <Link href="/contact-us" className="btn-coral">
            Get a Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}
