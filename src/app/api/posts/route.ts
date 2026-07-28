import { NextResponse } from 'next/server';

/**
 * GET /api/posts — machine-readable blog feed for the Yes Crew CRM.
 * Pure-proxy variant: this site has no local posts (blog launched empty),
 * so the feed is the central blog_posts table (with scheduled) only.
 * Posts render at ROOT URLs on this site.
 */
export const dynamic = 'force-dynamic';

const SITE_DOMAIN = 'activewearclothingmanufacturers.com';
const POST_URL_BASE = 'https://www.activewearclothingmanufacturers.com';
const CENTRAL_API = `https://yescrew-dashboard.vercel.app/api/posts?site=${SITE_DOMAIN}&include=scheduled`;

function getTodayLA(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });
}

function displayDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

interface CentralPost {
  slug: string;
  title: string;
  category: string | null;
  publish_at: string | null;
  created_at: string;
}

interface FeedItem {
  slug: string;
  title: string;
  category: string | null;
  date: string | null;
  publishedAt: string | null;
  status: 'published' | 'scheduled';
  url: string;
}

export async function GET() {
  const today = getTodayLA();
  const items = new Map<string, FeedItem>();

  try {
    const res = await fetch(CENTRAL_API, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      for (const post of (data.posts ?? []) as CentralPost[]) {
        const iso = post.publish_at || post.created_at;
        const publishedAt = iso ? iso.slice(0, 10) : null;
        items.set(post.slug, {
          slug: post.slug,
          title: post.title,
          category: post.category,
          date: iso ? displayDate(iso) : null,
          publishedAt,
          status: publishedAt && publishedAt <= today ? 'published' : 'scheduled',
          url: `${POST_URL_BASE}/${post.slug}`,
        });
      }
    }
  } catch {
    // Central API unreachable — empty feed.
  }

  return NextResponse.json(Array.from(items.values()));
}
