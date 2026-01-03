import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../keystatic.config';
import { PageHeader } from '@/components/PageHeader';
import { getYouTubeId } from '@/lib/utils';
import { PlayCircle } from 'lucide-react';
import { ContentHeroImage } from '@/components/ContentHeroImage';

export const metadata = {
  title: 'Videos - Adv. Subhash Lamichhane',
  description: 'Legal discussions, interviews, and educational videos.',
};

export default async function VideosPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const videos = await reader.collections.videos.all();

  const sortedVideos = videos.sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <>
      <PageHeader
        tag="Multimedia"
        title="Video Library"
        subtitle="Watch legal insights, interviews, and educational content."
      />
      
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {sortedVideos.length === 0 ? (
             <div className="text-center py-12 text-muted-foreground">
                <p>No videos available yet. Check back soon!</p>
             </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {sortedVideos.map((video) => {
                const videoId = video.entry.youtubeUrl ? getYouTubeId(video.entry.youtubeUrl) : null;
                const thumbnailSrc = video.entry.thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null);

                return (
                    <Link key={video.slug} href={`/videos/${video.slug}`} className="group cursor-pointer space-y-3 block h-full flex flex-col">
                    <div className="aspect-video bg-muted dark:bg-muted/20 rounded-lg mb-4 overflow-hidden relative border border-border group-hover:shadow-lg transition-all">
                        {thumbnailSrc ? (
                            <Image
                            src={thumbnailSrc}
                            alt={`Thumbnail for ${video.entry.title}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <ContentHeroImage title={video.entry.title} />
                        )}
                        
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                            <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <PlayCircle className="h-6 w-6 text-primary fill-current" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                        {new Date(video.entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-serif text-text-heading">
                        {video.entry.title}
                        </h3>
                        <p className="text-text-description line-clamp-3 text-sm">
                        {video.entry.description}
                        </p>
                    </div>
                    </Link>
                );
                })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
