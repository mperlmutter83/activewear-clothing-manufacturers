import Link from 'next/link';

export default function Home() {
  const services = [
    { title: 'Custom Activewear Manufacturing', description: 'We offer tailored solutions for creating unique activewear pieces that align with your brand\'s vision.', icon: '👕' },
    { title: 'Private Label Production', description: 'Our private label services allow you to build your brand with high-quality, custom-branded apparel.', icon: '🏷️' },
    { title: 'Product Design & Tech Packs', description: 'From concept sketches to detailed tech packs, we provide complete design support for your products.', icon: '✏️' },
    { title: 'Fabric Sourcing', description: 'Access a wide range of premium fabrics to ensure your activewear is both stylish and functional.', icon: '🧵' },
    { title: 'Sampling & Prototyping', description: 'Develop prototypes to perfect your designs before moving to full-scale production.', icon: '🎨' },
    { title: 'Bulk Production & Scaling', description: 'Efficiently scale your production with our streamlined bulk manufacturing processes.', icon: '🏭' },
    { title: 'Quality Assurance', description: 'Our rigorous quality checks ensure that every piece meets the highest standards.', icon: '✅' },
    { title: 'Logistics & Delivery', description: 'Reliable and timely delivery services to get your products to market swiftly.', icon: '📦' },
  ];

  const process = [
    { step: 1, title: 'Submit Your Idea', description: 'Share your vision with us, and we\'ll help you bring it to life with our expert guidance and support.' },
    { step: 2, title: 'Design & Sampling', description: 'Collaborate with our team to create detailed designs and samples that capture your brand\'s essence.' },
    { step: 3, title: 'Production', description: 'Once approved, we move to full-scale production, ensuring high-quality standards at every stage.' },
  ];

  const benefits = [
    { title: 'Low Minimum Orders', description: 'Perfect for startups, our flexible MOQs allow you to start small and grow at your pace.', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop' },
    { title: 'High-Quality Materials', description: 'We use only the finest fabrics and stitching techniques to ensure durability and comfort.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop' },
    { title: 'Fast Turnaround Times', description: 'Our efficient processes ensure your products are delivered quickly without compromising quality.', image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=600&fit=crop' },
    { title: 'Dedicated Support Team', description: 'Our experienced team is with you every step of the way, from concept to completion.', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop' },
  ];

  const awards = [
    { year: '2023', title: 'Best Activewear Manufacturer', description: 'Recognized for excellence in quality and innovation in the activewear industry.' },
    { year: '2022', title: 'Top Private Label Producer', description: 'Awarded for outstanding private label services and customer satisfaction.' },
    { year: '2021', title: 'Innovation in Fabric Technology', description: 'Honored for pioneering advancements in sustainable and high-performance fabrics.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-indigo-600 font-semibold mb-4 tracking-wider uppercase">Premium Activewear Solutions Tailored for Your Brand</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Custom Activewear Manufacturing<br />
              <span className="text-indigo-600">From Concept to Production</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We specialize in designing, developing, and manufacturing high-quality activewear with flexible minimums and quick delivery times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors text-lg"
              >
                Start Your Line
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industry Accolades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl">
                <p className="text-indigo-600 font-bold text-2xl mb-2">{award.year}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-indigo-600 font-semibold mb-2 uppercase tracking-wider">Our Expertise</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Comprehensive Manufacturing Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">Our Seamless Process</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-48 md:h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Launch Your Activewear Line Today</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Ready to elevate your brand with high-quality, custom activewear? Let us help you bring your vision to life with our expert manufacturing services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}
