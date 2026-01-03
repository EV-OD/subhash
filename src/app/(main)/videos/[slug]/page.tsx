import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../../keystatic.config';
import { getYouTubeId } from '@/lib/utils';
import ViewCounter from '@/components/ViewCounter';
import ShareButtons from '@/components/ShareButtons';
import { Comments } from '@/components/Comments';
import { ContentHeroImage } from '@/components/ContentHeroImage';
import { VideoDescription } from '@/components/VideoDescription';
import { SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const videos = await reader.collections.videos.all();
  return videos.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reader = createReader(process.cwd(), keystaticConfig);
  const video = await reader.collections.videos.read(slug);

  if (!video) return {};

  return {
    title: `${video.title} - Adv. Subhash Lamichhane`,
    description: video.description,
  };
}

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reader = createReader(process.cwd(), keystaticConfig);
  
  // Fetch current video and all videos for the sidebar
  const video = await reader.collections.videos.read(slug);
  const allVideos = await reader.collections.videos.all();

  if (!video) notFound();

  const videoId = video.youtubeUrl ? getYouTubeId(video.youtubeUrl) : null;

  // Filter out current video and sort by date
  const otherVideos = allVideos
    .filter((v) => v.slug !== slug)
    .sort((a, b) => {
      const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
      const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
      return dateB - dateA;
    });

  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
       <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Content - Left Side */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              {/* Video Player */}
              {videoId ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video w-full rounded-xl bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Video unavailable</p>
                </div>
              )}

              {/* Video Info */}
              <div className="space-y-2">
                <h1 className="text-xl md:text-2xl font-bold font-serif text-text-heading leading-tight">
                  {video.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-text-heading">
                      {new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <ViewCounter slug={`videos/${slug}`} />
                  </div>
                  
                  <div className="scale-90 origin-right">
                    <ShareButtons 
                        url={`${SITE_URL}/videos/${slug}`} 
                        title={video.title} 
                        minimal
                    />
                  </div>
                </div>

                <VideoDescription description={video.description} />
              </div>

              {/* Comments Section */}
              <Comments 
                url={`${SITE_URL}/videos/${slug}`}
                identifier={`video-${slug}`}
                title={video.title}
              />
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-4 xl:col-span-3">
              <h3 className="text-xl font-bold mb-4 font-serif">Watch Next</h3>
              <div className="flex flex-col gap-4">
                {otherVideos.map((v) => {
                  const vId = v.entry.youtubeUrl ? getYouTubeId(v.entry.youtubeUrl) : null;
                  const thumbnailSrc = v.entry.thumbnail || (vId ? `https://img.youtube.com/vi/${vId}/mqdefault.jpg` : null);

                  return (
                    <Link key={v.slug} href={`/videos/${v.slug}`} className="group flex gap-3 items-start">
                      <div className="relative w-40 aspect-video flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                        {thumbnailSrc ? (
                          <Image
                            src={thumbnailSrc}
                            alt={v.entry.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <ContentHeroImage title={v.entry.title} className="w-full h-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-text-heading line-clamp-2 group-hover:text-primary transition-colors">
                          {v.entry.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(v.entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                      </div>
                    </Link>
                  );
                })}
                
                {otherVideos.length === 0 && (
                  <p className="text-muted-foreground text-sm">No other videos available.</p>
                )}
              </div>
            </div>

          </div>
       </div>
    </div>
  );
}
