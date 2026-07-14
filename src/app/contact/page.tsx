import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Activewear Clothing Manufacturers for custom activewear manufacturing, private label production, and more.',
};

export default function ContactPage() {
  const faqs = [
    { question: 'How can I contact Activewear Clothing Manufacturers?', answer: 'You can reach us via our contact form on the website, email us at info@activewearmanufacturers.com, or call us at (123) 456-7890.' },
    { question: 'What is the minimum order quantity (MOQ) for custom activewear?', answer: 'Our minimum order quantity is flexible and can be adjusted to meet the needs of both startups and established brands.' },
    { question: 'How long does the manufacturing process take?', answer: 'The production timeline varies depending on the complexity and size of the order, but we strive to deliver within 4-6 weeks.' },
    { question: 'Do you offer private label services?', answer: 'Yes, we provide comprehensive private label services, allowing you to brand your activewear with your own labels and tags.' },
    { question: 'Can I request samples before placing a bulk order?', answer: 'Absolutely, we offer sampling services to ensure you are satisfied with the quality and design before committing to a larger order.' },
    { question: 'What types of activewear do you manufacture?', answer: 'We specialize in gym wear, athleisure, yoga clothing, and fitness apparel, all crafted from high-quality, performance-driven fabrics.' },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-600 font-semibold mb-4 tracking-wider uppercase">Get in Touch with Activewear Experts</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Activewear Clothing Manufacturers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach out to us for all your custom activewear manufacturing needs. We are here to assist you in bringing your brand&apos;s vision to life.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@activewearmanufacturers.com" className="text-indigo-600 text-lg hover:text-indigo-700 transition-colors">info@activewearmanufacturers.com</a>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-lg">Los Angeles, CA</p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Your Consultation</h3>
                <p className="text-gray-600">Book a consultation with our team to discuss your activewear manufacturing project. Our experts are ready to guide you through the process.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Common Questions About Our Services</h2>
          <p className="text-gray-600 text-center mb-12">Find answers to the most frequently asked questions about our contact process and activewear manufacturing services.</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Activewear Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Contact us today to explore our comprehensive manufacturing services tailored to your brand&apos;s unique needs.
          </p>
          <a
            href="mailto:info@activewearmanufacturers.com"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
