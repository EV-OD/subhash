
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../keystatic.config';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Archive - Adv. Subhash Lamichhane',
  description: 'Complete archive of articles, research papers, case laws, and academic resources.',
};

export default async function BlogPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  
  const articles = await reader.collections.articles.all({ resolveLinkedFiles: true });
  const researchPapers = await reader.collections.researchPapers.all({ resolveLinkedFiles: true });
  const academia = await reader.collections.academia.all({ resolveLinkedFiles: true });
  const caseLaws = await reader.collections.caseLaws.all({ resolveLinkedFiles: true });
  
  const allContent = [
    ...articles.map(item => ({ ...item, type: 'articles', label: 'Article' })),
    ...researchPapers.map(item => ({ ...item, type: 'research-papers', label: 'Research Paper' })),
    ...academia.map(item => ({ ...item, type: 'academia', label: 'Academia' })),
    ...caseLaws.map(item => ({ ...item, type: 'case-laws', label: 'Case Law' }))
  ].sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <>
      <PageHeader
        tag="Archive"
        title="All Resources"
        subtitle="A comprehensive collection of legal insights, research, and academic works."
      />
      
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allContent.map((post) => (
              <Link key={post.slug} href={`/${post.type}/${post.slug}`} className="group cursor-pointer space-y-3 block h-full flex flex-col">
                <div className="aspect-video bg-muted dark:bg-muted/20 rounded-lg mb-4 overflow-hidden relative border border-border">
                   {post.entry.image ? (
                      <Image
                        src={post.entry.image}
                        alt={`Featured image for ${post.entry.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                   ) : (
                     <div className="w-full h-full bg-muted dark:bg-muted/20 flex items-center justify-center text-muted-foreground">
                        <BookOpen className="h-10 w-10 opacity-20" />
                     </div>
                   )}
                   <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-border">
                      {post.label}
                   </div>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                    {new Date(post.entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-serif text-text-heading">
                    {post.entry.title}
                  </h3>
                  <p className="text-text-description line-clamp-3 text-sm">
                    {post.entry.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-auto">
                    <div className="text-sm font-medium underline decoration-border underline-offset-4 group-hover:decoration-primary transition-all text-text-heading inline-flex items-center">
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
