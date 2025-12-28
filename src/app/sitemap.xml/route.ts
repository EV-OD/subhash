// app/sitemap.xml/route.ts
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import { navLinks } from '@/lib/constants';

const reader = createReader(process.cwd(), keystaticConfig);
const URL = "https://www.harmonytouch.com";

function generateSiteMap(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls
       .map((url) => {
         return `
           <url>
               <loc>${url}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  // Fetch all slugs from different collections
  const articleSlugs = await reader.collections.articles.list();
  const researchPaperSlugs = await reader.collections.researchPapers.list();
  const academiaSlugs = await reader.collections.academia.list();
  const caseLawSlugs = await reader.collections.caseLaws.list();

  // Generate URLs for static pages
  const staticUrls = navLinks.map((link) => `${URL}${link.href === '/' ? '' : link.href}`);

  // Generate URLs for dynamic content
  const articleUrls = articleSlugs.map((slug) => `${URL}/articles/${slug}`);
  const researchPaperUrls = researchPaperSlugs.map((slug) => `${URL}/research-papers/${slug}`);
  const academiaUrls = academiaSlugs.map((slug) => `${URL}/academia/${slug}`);
  const caseLawUrls = caseLawSlugs.map((slug) => `${URL}/case-laws/${slug}`);

  const allUrls = [
    ...staticUrls,
    ...articleUrls,
    ...researchPaperUrls,
    ...academiaUrls,
    ...caseLawUrls,
  ];

  const body = generateSiteMap(allUrls);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
