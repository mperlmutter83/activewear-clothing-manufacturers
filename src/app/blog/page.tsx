import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, toRenderPost, type RenderPost } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Insights and guides on activewear manufacturing, design trends, and building your athletic apparel brand.",
};

const SITE_DOMAIN = 'activewearclothingmanufacturers.com';

export const revalidate = 60;

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts: RenderPost[] = apiPosts.map(toRenderPost);

  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 text-lg">Insights and guides on activewear manufacturing, design trends, and building your brand.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Insights in Activewear Manufacturing</h2>

          {posts.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-12 text-center">
              <p className="text-gray-500 text-lg mb-6">New blog posts coming soon!</p>
              <p className="text-gray-600">We&apos;re working on bringing you valuable insights on activewear manufacturing, industry trends, and branding tips.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  {post.image && (
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-indigo-600 mb-2">{post.date} • {post.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
