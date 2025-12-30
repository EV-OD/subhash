'use client';

import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Link2, Twitter, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const { toast } = useToast();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied",
      description: "The link has been copied to your clipboard.",
    });
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 py-6 border-t border-b border-border my-8">
      <h3 className="text-lg font-semibold text-text-heading">Share this post</h3>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="icon" onClick={handleNativeShare} className="md:hidden text-text-description hover:text-text-heading">
          <Share2 className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="text-[#0077b5] hover:text-[#0077b5]/80"
          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank')}
        >
          <Linkedin className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="text-[#1DA1F2] hover:text-[#1DA1F2]/80"
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank')}
        >
          <Twitter className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="text-[#4267B2] hover:text-[#4267B2]/80"
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank')}
        >
          <Facebook className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={handleCopy} className="text-text-description hover:text-text-heading">
          <Link2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
