import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import NewsletterForm from '@/components/NewsletterForm';
import { getMergedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Activewear Clothing Manufacturers',
  description:
    'Insights on activewear manufacturing, trends, branding tips, and fabric innovation from Activewear Clothing Manufacturers.',
};

const categories = [
  'Manufacturing Insights',
  'Activewear Trends',
  'Branding Tips',
  'Sustainability Practices',
  'Design Inspiration',
  'Fabric Innovations',
];

export default async function Blog() {
  const posts = await getMergedPosts();

  return (
    <>
      <PageHero
        variant="solid"
        title="Unleash Your Brand's Potential with Premium Activewear"
        subtext="Explore the forefront of activewear innovation with our expert manufacturing solutions, designed to elevate your brand and captivate your audience."
        ctaText="Discover More"
        ctaHref="#posts"
      />

      {/* Posts */}
      <section id="posts" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/images/blog-model.jpg"
            alt="Activewear model"
            width={800}
            height={800}
            className="rounded-md w-full h-72 md:h-96 object-cover mb-12"
          />
          <h2 className="text-3xl md:text-4xl mb-10">
            Latest Insights in Activewear Manufacturing
          </h2>

          {posts.length === 0 ? (
            <div className="py-8">
              <h2 className="text-2xl md:text-3xl mb-4">No Results Found</h2>
              <p className="text-ink/70 leading-relaxed">
                The page you requested could not be found. Try refining your
                search, or use the navigation above to locate the post.
              </p>
            </div>
          ) : (
            <div className="space-y-14">
              {posts.map((post) => (
                <article key={post.slug}>
                  {post.image && (
                    <Link href={`/${post.slug}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1080}
                        height={675}
                        className="rounded-md w-full h-64 md:h-80 object-cover mb-6"
                      />
                    </Link>
                  )}
                  <h2 className="text-2xl md:text-3xl mb-2">
                    <Link href={`/${post.slug}`} className="hover:text-teal transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-ink/60 mb-4 font-sans">
                    {post.date} | {post.category}
                  </p>
                  {post.excerpt && (
                    <p className="text-ink/80 leading-relaxed mb-4">{post.excerpt}</p>
                  )}
                  <Link
                    href={`/${post.slug}`}
                    className="text-teal text-sm font-sans font-semibold hover:underline"
                  >
                    read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter 1 */}
      <section className="bg-navy py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="text-white text-2xl md:text-3xl mb-8">
            Stay Updated with Industry Trends
          </h3>
          <NewsletterForm variant="full" dark buttonText="Read More" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-14">
            Explore Our Blog Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white rounded-md shadow-[0px_24px_72px_-12px_rgba(0,0,0,0.12)] p-6 text-center"
              >
                <h4 className="font-sans font-semibold text-base">{category}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter 2 */}
      <section className="bg-white py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-8">
            Stay Updated with Our Latest Trends
          </h2>
          <NewsletterForm variant="compact" />
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Our Journey in Activewear Manufacturing
            </h2>
            <p className="text-ink/80 leading-relaxed mb-8">
              Activewear Clothing Manufacturers has been at the forefront of the
              activewear industry, offering comprehensive solutions for brands
              looking to create high-performance apparel. Our mission is to
              empower businesses by providing exceptional manufacturing services
              that prioritize quality and innovation. With a focus on custom
              designs and private labeling, we ensure that each product meets
              the unique needs of our clients. Our commitment to excellence and
              transparency has made us a trusted partner for brands worldwide,
              from startups to established companies. Join us as we continue to
              set new standards in activewear manufacturing.
            </p>
            <Link href="/about-us" className="btn-teal">
              Learn More About Us
            </Link>
          </div>
          <Image
            src="/images/blog-design.jpg"
            alt="Fitness apparel design"
            width={800}
            height={800}
            className="rounded-md w-full h-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h4 className="text-white text-3xl md:text-4xl mb-6">
            Reach Out for Custom Activewear Solutions
          </h4>
          <p className="text-white/80 leading-relaxed mb-8">
            Looking to bring your activewear vision to life? Contact us today to
            explore our comprehensive manufacturing services tailored to your
            brand&apos;s unique needs. Whether you&apos;re a startup or an
            established company, we offer flexible solutions to help you succeed
            in the competitive activewear market.
          </p>
          <Link href="/contact-us" className="btn-coral">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
