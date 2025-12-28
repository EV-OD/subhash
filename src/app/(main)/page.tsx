
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Gavel, GraduationCap, Scale, ScrollText } from 'lucide-react';
import { practiceAreas } from '@/lib/constants';
import { HeroIllustration } from '@/components/HeroIllustration';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Image from 'next/image';

export default async function Home() {
  const reader = createReader(process.cwd(), keystaticConfig);
  
  // Fetch latest items from all collections
  const articles = await reader.collections.articles.all({ resolveLinkedFiles: true });
  const researchPapers = await reader.collections.researchPapers.all({ resolveLinkedFiles: true });
  const academia = await reader.collections.academia.all({ resolveLinkedFiles: true });
  const caseLaws = await reader.collections.caseLaws.all({ resolveLinkedFiles: true });
  
  // Combine and sort by date
  const allContent = [
    ...articles.map(item => ({ ...item, type: 'articles' })),
    ...researchPapers.map(item => ({ ...item, type: 'research-papers' })),
    ...academia.map(item => ({ ...item, type: 'academia' })),
    ...caseLaws.map(item => ({ ...item, type: 'case-laws' }))
  ].sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
    return dateB - dateA;
  }).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section - Minimalist & Professional */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-white text-slate-900 relative overflow-hidden">
        {/* Global Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.4] mix-blend-soft-light pointer-events-none"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-50"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm">
                <Scale className="mr-2 h-4 w-4" />
                <span>Advocate Subhash Lamichhane</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900">
                Legal Insight & <br />
                <span className="text-slate-600">Academic Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-[600px] leading-relaxed">
                A dedicated platform for case law analysis, legal research, and scholarly discussions. Bridging the gap between legal theory and practice in Nepal.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="font-medium">
                  <Link href="/blog">
                    Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-200 text-slate-900 hover:bg-slate-100">
                  <Link href="/about">View Profile</Link>
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden lg:block">
               <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Bento Grid Layout */}
      <section className="w-full py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif">Areas of Focus</h2>
              <p className="text-slate-600 text-lg">
                Exploring the depths of legal theory and practice through structured analysis.
              </p>
            </div>
            <Button asChild variant="outline" className="border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 hidden md:flex">
                <Link href="/practice-areas">View All Areas</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
            {practiceAreas.map((area, index) => (
              <div 
                key={area.slug} 
                className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 transition-all duration-500 hover:border-slate-300 hover:shadow-xl ${
                  index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Background Icon (Large & Faded) */}
                <area.icon className="absolute -bottom-8 -right-8 w-48 h-48 text-slate-100 group-hover:text-slate-200/80 transition-colors duration-500 rotate-[-15deg]" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-slate-200 group-hover:border-primary/50">
                    <area.icon className="h-6 w-6 text-slate-600 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold font-serif text-slate-900 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[90%] group-hover:text-slate-700 transition-colors">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Preview (Placeholder for now, linking to blog) */}
      <section className="w-full py-20 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight font-serif">Latest Insights</h2>
              <p className="text-muted-foreground">Recent articles, case summaries, and research papers.</p>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href="/blog">
                View Archive <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allContent.map((post) => (
              <Link key={post.slug} href={`/${post.type}/${post.slug}`} className="group cursor-pointer space-y-3 block">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden relative">
                   {post.entry.image ? (
                      <Image
                        src={post.entry.image}
                        alt={`Featured image for ${post.entry.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                   ) : (
                     <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                        <BookOpen className="h-10 w-10 opacity-20" />
                     </div>
                   )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                    {new Date(post.entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-serif">
                    {post.entry.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.entry.excerpt}
                  </p>
                  <div className="pt-2 text-sm font-medium underline decoration-slate-300 underline-offset-4 group-hover:decoration-primary transition-all">
                    Read More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Academic Focus */}
      <section className="w-full py-24 bg-slate-950 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">
              Connect for Academic Collaboration
            </h2>
            <p className="text-slate-400 text-lg">
              Interested in discussing legal research, moot court competitions, or academic opportunities?
            </p>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-200 mt-4">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
