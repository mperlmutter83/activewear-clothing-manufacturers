import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom activewear manufacturing services: design, prototyping, private label, bulk production, and more.',
};

export default function ServicesPage() {
  const services = [
    { title: 'Custom Product Design', icon: '✏️' },
    { title: 'Tech Pack Development', icon: '📋' },
    { title: 'Fabric Sourcing', icon: '🧵' },
    { title: 'Sampling & Prototyping', icon: '🎨' },
    { title: 'Private Labeling', icon: '🏷️' },
    { title: 'Bulk Manufacturing', icon: '🏭' },
    { title: 'Quality Assurance', icon: '✅' },
    { title: 'Logistics & Shipping', icon: '📦' },
    { title: 'Brand Consultation', icon: '💼' },
    { title: 'Sustainable Practices', icon: '🌱' },
    { title: 'Pattern Making', icon: '📐' },
    { title: 'Cut & Sew Services', icon: '✂️' },
    { title: 'Embroidery & Printing', icon: '🖨️' },
    { title: 'Packaging Solutions', icon: '🎁' },
    { title: 'Market Analysis', icon: '📊' },
  ];

  const features = [
    { title: 'Low Minimum Order Quantities', description: 'Start your collection with as few as 50 pieces per style, perfect for emerging brands.' },
    { title: 'Fast Production Timelines', description: 'Get your products ready for market in as little as 4 weeks from design approval.' },
    { title: 'High-Quality Materials', description: 'We source only the finest fabrics to ensure durability and comfort in every piece.' },
    { title: 'Dedicated Support', description: 'Our team is with you every step of the way, from initial concept to final delivery.' },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Elevate Your Brand with Custom Activewear Solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover unparalleled expertise in activewear manufacturing, tailored to bring your brand's vision to life with precision and style.
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">💡</div>
              <p className="font-semibold text-gray-900">Innovative Design</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold text-gray-900">Premium Quality</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-gray-900">Efficient Production</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Comprehensive Manufacturing Services</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-600 font-semibold mb-2 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Unmatched Features of Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Get Started with Us Today</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Ready to elevate your activewear line? Contact us for a consultation or quote and discover how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
