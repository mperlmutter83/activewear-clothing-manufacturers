import {
  getPosts as getApiPosts,
  getPost as getApiPost,
  formatDate,
} from './api';

export const SITE_DOMAIN = 'activewearclothingmanufacturers.com';

export interface SitePost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  content: string;
}

/**
 * Blog feed — central Yes Crew API only (this site has no local posts yet;
 * Agent SEO publishes centrally and posts render on demand).
 */
export async function getMergedPosts(): Promise<SitePost[]> {
  const apiPosts = await getApiPosts(SITE_DOMAIN);
  return apiPosts
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: formatDate(p.publish_at || p.created_at),
      category: p.category || 'Activewear Manufacturing',
      excerpt: p.excerpt || '',
      image: p.image_url || undefined,
      content: p.content,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getMergedPost(slug: string): Promise<SitePost | null> {
  const apiPost = await getApiPost(SITE_DOMAIN, slug);
  if (!apiPost) return null;
  return {
    slug: apiPost.slug,
    title: apiPost.title,
    date: formatDate(apiPost.publish_at || apiPost.created_at),
    category: apiPost.category || 'Activewear Manufacturing',
    excerpt: apiPost.excerpt || '',
    image: apiPost.image_url || undefined,
    content: apiPost.content,
  };
}
