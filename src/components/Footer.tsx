import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Activewear Clothing Manufacturers</h3>
            <p className="text-gray-400 mb-4">
              Experts in the world of activewear clothing manufacturing. From concept to production, we bring your vision to life.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="mailto:info@activewearmanufacturers.com" className="hover:text-indigo-400 transition-colors">
                  info@activewearmanufacturers.com
                </a>
              </p>
              <p>Los Angeles, CA</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-indigo-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-indigo-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Custom Manufacturing</li>
              <li>Private Label</li>
              <li>Design & Tech Packs</li>
              <li>Fabric Sourcing</li>
              <li>Sampling & Prototyping</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Activewear Clothing Manufacturers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
