'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useTheme } from 'next-themes';

interface CommentsProps {
  slug: string;
  title: string;
}

export default function Comments({ slug, title }: CommentsProps) {
  const { theme } = useTheme();
  const disqusShortname = 'subhash-law';

  const disqusConfig = {
    url: `https://subhashlamichhane.com/${slug}`,
    identifier: slug,
    title: title,
    language: 'en_US',
  };

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-bold text-text-heading mb-6">Comments</h3>
      <div className={`disqus-container ${theme === 'dark' ? 'dark-mode-disqus' : ''}`}>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </div>
  );
}
