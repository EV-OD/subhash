// app/sitemap.xml/route.ts
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import { navLinks, SITE_URL } from '@/lib/constants';

const reader = createReader(process.cwd(), keystaticConfig);

function generateSiteMap(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls
       .map((url) => {
         return `
           <url>
               <loc>${url}</loc>
               <changefreq>weekly</changefreq>
               <priority>0.7</priority>
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
  const videoSlugs = await reader.collections.videos.list();
  const legalSlugs = await reader.collections.legal.list();

  // Generate URLs for static pages
  const staticUrls = navLinks.map((link) => `${SITE_URL}${link.href === '/' ? '' : link.href}`);
  
  // Add blog page if not in navLinks
  if (!navLinks.find(link => link.href === '/blog')) {
      staticUrls.push(`${SITE_URL}/blog`);
  }

  // Generate URLs for dynamic content
  const articleUrls = articleSlugs.map((slug) => `${SITE_URL}/articles/${slug}`);
  const researchPaperUrls = researchPaperSlugs.map((slug) => `${SITE_URL}/research-papers/${slug}`);
  const academiaUrls = academiaSlugs.map((slug) => `${SITE_URL}/academia/${slug}`);
  const caseLawUrls = caseLawSlugs.map((slug) => `${SITE_URL}/case-laws/${slug}`);
  const videoUrls = videoSlugs.map((slug) => `${SITE_URL}/videos/${slug}`);
  const legalUrls = legalSlugs.map((slug) => `${SITE_URL}/legal/${slug}`);

  const allUrls = [
    ...staticUrls,
    ...articleUrls,
    ...researchPaperUrls,
    ...academiaUrls,
    ...caseLawUrls,
    ...videoUrls,
    ...legalUrls,
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
