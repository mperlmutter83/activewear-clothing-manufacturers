import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Insights and guides on activewear manufacturing, design trends, and building your athletic apparel brand.",
};

export default function BlogPage() {
  const categories = [
    'Manufacturing Insights',
    'Activewear Trends',
    'Branding Tips',
    'Sustainability Practices',
    'Design Inspiration',
    'Fabric Innovations',
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Unleash Your Brand&apos;s Potential with Premium Activewear</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the forefront of activewear innovation with our expert manufacturing solutions, designed to elevate your brand and captivate your audience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Insights in Activewear Manufacturing</h2>
          
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <p className="text-gray-500 text-lg mb-6">New blog posts coming soon!</p>
            <p className="text-gray-600">We&apos;re working on bringing you valuable insights on activewear manufacturing, industry trends, and branding tips.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Our Blog Categories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey in Activewear Manufacturing</h2>
              <p className="text-gray-600 mb-6">
                Activewear Clothing Manufacturers has been at the forefront of the activewear industry, offering comprehensive solutions for brands looking to create high-performance apparel.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to empower businesses by providing exceptional manufacturing services that prioritize quality and innovation. With a focus on custom designs and private labeling, we ensure that each product meets the unique needs of our clients.
              </p>
              <Link href="/about" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                Learn More About Us →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated with Our Newsletter</h3>
              <p className="text-gray-600 mb-6">Subscribe for exclusive insights, updates on new collections, and special offers.</p>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Reach Out for Custom Activewear Solutions</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Looking to bring your activewear vision to life? Contact us today to explore our comprehensive manufacturing services.
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
