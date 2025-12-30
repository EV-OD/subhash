
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../../keystatic.config';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import { User } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';
import { Comments } from '@/components/Comments';
import { SITE_URL } from '@/lib/constants';

type Props = {
  params: Promise<{ slug: string }>;
};

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader.collections.caseLaws.read(slug);

  if (!post) {
    return {
      title: 'Case Law Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = await reader.collections.caseLaws.list();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CaseLawPage({ params }: Props) {
  const { slug } = await params;
  const post = await reader.collections.caseLaws.read(slug, { resolveLinkedFiles: true });

  if (!post) {
    notFound();
  }

  const { node } = await post.content;
  let renderable = null;

  if (node) {
    const errors = Markdoc.validate(node);
    if (errors.length) {
      console.error('Markdoc validation errors:', errors);
      throw new Error('Invalid content');
    }
    renderable = Markdoc.transform(node);
  }


  return (
    <article className="py-12 md:py-20 mt-20 md:mt-10">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
             <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
             </div>
             <span>•</span>
             <p>
                Judgment Date:{' '}
                {post.date && new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
             </p>
          </div>
        </header>

        {post.image && (
          <Image
            src={post.image}
            alt={`Featured image for ${post.title}`}
            width={1200}
            height={630}
            className="w-full aspect-video object-cover rounded-lg mb-8 md:mb-12"
            priority
          />
        )}
        
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-p:text-foreground/80 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg">
           {renderable ? Markdoc.renderers.react(renderable, React) : null}
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <ShareButtons 
            url={`${SITE_URL}/case-laws/${slug}`} 
            title={post.title} 
          />
          <Comments 
            url={`${SITE_URL}/case-laws/${slug}`}
            identifier={`case-law-${slug}`}
            title={post.title}
          />
        </div>
      </div>
    </article>
  );
}
