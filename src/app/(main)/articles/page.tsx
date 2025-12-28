
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../keystatic.config';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Read our latest legal articles and insights.',
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function ArticlesPage() {
  const posts = (await reader.collections.articles.all({ resolveLinkedFiles: true })).sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <>
      <section className="w-full py-12 md:py-24 pt-32 md:pt-40">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
            Articles
          </h1>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No articles found.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col">
                   {post.entry.image && (
                    <Link href={`/articles/${post.slug}`} className="hidden lg:block relative w-full aspect-video">
                      <Image
                        src={post.entry.image}
                        alt={`Featured image for ${post.entry.title}`}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </Link>
                  )}
                  <div className="flex flex-col flex-1">
                    <CardHeader>
                      <CardTitle className="font-headline text-lg lg:text-2xl leading-tight">
                        <Link href={`/articles/${post.slug}`} className="hover:text-primary transition-colors line-clamp-2">
                          {post.entry.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        {post.entry.date && new Date(post.entry.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.entry.excerpt}
                      </p>
                      <Button asChild variant="link" className="px-0">
                        <Link href={`/articles/${post.slug}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
