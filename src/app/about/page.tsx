import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Activewear Clothing Manufacturers - our journey, mission, and commitment to delivering exceptional quality activewear.',
};

export default function AboutPage() {
  const milestones = [
    { year: '2010', title: 'Foundation of Excellence', description: 'Activewear Clothing Manufacturers was established with a vision to revolutionize the activewear industry by providing high-quality, performance-driven apparel.' },
    { year: '2013', title: 'First Major Partnership', description: 'Secured our first major partnership with a renowned fitness brand, marking a significant step in our growth and industry recognition.' },
    { year: '2016', title: 'Expansion into New Markets', description: 'Expanded our services internationally, offering our expertise to brands across Europe and North America.' },
    { year: '2020', title: 'Innovation in Sustainability', description: 'Launched our sustainable activewear line, incorporating eco-friendly materials and practices to reduce our environmental impact.' },
  ];

  const features = [
    { title: 'Custom Manufacturing', description: 'We specialize in creating bespoke activewear tailored to your brand\'s unique requirements, ensuring a perfect fit for your vision.' },
    { title: 'Private Label Services', description: 'Our private label services allow you to brand your activewear, providing a seamless integration of your identity into our high-quality products.' },
    { title: 'Flexible MOQs', description: 'We offer low minimum order quantities, making it easier for startups and small brands to launch their collections without large upfront investments.' },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-600 font-semibold mb-4 tracking-wider uppercase">Discover the Future of Activewear</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Activewear Clothing Manufacturers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elevate your brand with our expert manufacturing solutions, tailored to bring your activewear visions to life.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">👕</div>
              <p className="font-semibold text-gray-900">Custom Manufacturing</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">🏷️</div>
              <p className="font-semibold text-gray-900">Private Label Solutions</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">📦</div>
              <p className="font-semibold text-gray-900">Flexible Order Quantities</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-gray-900">Fast Production Timelines</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Journey and Vision</h2>
          <p className="text-gray-600 text-lg mb-6">
            Activewear Clothing Manufacturers is committed to revolutionizing the activewear industry by delivering exceptional quality and innovation. Our mission is to empower brands with the tools and expertise needed to create standout activewear collections.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            We envision a future where every brand, regardless of size, can access top-tier manufacturing services. Our core values include integrity, excellence, and customer-centricity, ensuring that every piece we produce meets the highest standards of quality and performance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Our Journey Through Time</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Since our inception, Activewear Clothing Manufacturers has been at the forefront of innovation in the activewear industry.
          </p>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 rounded-xl p-6">
                <div className="text-indigo-600 font-bold text-3xl md:w-24 flex-shrink-0">{milestone.year}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Reach Out to Us Today</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Ready to bring your activewear vision to life? Contact us to start your manufacturing journey with experts who prioritize quality and innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
