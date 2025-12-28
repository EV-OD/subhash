// app/sitemap.xml/route.ts
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import { navLinks } from '@/lib/constants';

const reader = createReader(process.cwd(), keystaticConfig);
const URL = "https://www.harmonytouch.com";

function generateSiteMap(posts: { slug: string }[], pages: { href: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Static Pages -->
     ${pages
       .map(({ href }) => {
         return `
           <url>
               <loc>${`${URL}${href}`}</loc>
           </url>
         `;
       })
       .join('')}
       
     <!-- Blog Posts -->
     ${posts
       .map(({ slug }) => {
         return `
           <url>
               <loc>${`${URL}/blog/${slug}`}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  const posts = await reader.collections.posts.list();
  const allPosts = posts.map(slug => ({ slug }));
  
  // Exclude the home page from navLinks as it's added separately, if needed
  const pages = navLinks;

  const body = generateSiteMap(allPosts, pages);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
