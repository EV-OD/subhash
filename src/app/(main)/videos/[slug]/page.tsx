import { notFound } from 'next/navigation';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../../keystatic.config';
import { getYouTubeId } from '@/lib/utils';
import ViewCounter from '@/components/ViewCounter';
import ShareButtons from '@/components/ShareButtons';
import { SITE_URL } from '@/lib/constants';

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
  const video = await reader.collections.videos.read(slug);

  if (!video) notFound();

  const videoId = video.youtubeUrl ? getYouTubeId(video.youtubeUrl) : null;

  return (
    <article className="min-h-screen bg-background pb-20">
       <div className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
          <div className="space-y-4 mb-8 text-center">
             <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary uppercase tracking-wider">
                {new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                <span>•</span>
                <ViewCounter slug={`videos/${slug}`} />
             </div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-text-heading leading-tight">
                {video.title}
             </h1>
          </div>

          {videoId && (
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black mb-12">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
             <p className="lead text-xl text-text-description">{video.description}</p>
          </div>

          <div className="border-t pt-8">
            <ShareButtons 
                url={`${SITE_URL}/videos/${slug}`} 
                title={video.title} 
            />
          </div>
       </div>
    </article>
  );
}
