// WordPress Headless CMS API utilities

const WP_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://thecloudrental.com/wp-json/wp/v2";

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
}

// Fetch posts from WordPress
export async function getPosts(
  perPage = 10,
  page = 1
): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_embed`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    console.error("Failed to fetch posts");
    return [];
  }
}

// Fetch a single post by slug
export async function getPostBySlug(
  slug: string
): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch {
    console.error("Failed to fetch post:", slug);
    return null;
  }
}

// Fetch pages
export async function getPages(): Promise<WPPage[]> {
  try {
    const res = await fetch(`${WP_API_URL}/pages`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    console.error("Failed to fetch pages");
    return [];
  }
}

// Fetch media
export async function getMedia(id: number): Promise<WPMedia | null> {
  try {
    const res = await fetch(`${WP_API_URL}/media/${id}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    console.error("Failed to fetch media:", id);
    return null;
  }
}

// Backend API utilities
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "";

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function submitBooking(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  notes?: string;
}) {
  const res = await fetch(`${API_URL}/api/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
