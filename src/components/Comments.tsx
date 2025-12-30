'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useTheme } from 'next-themes';

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export function Comments({ url, identifier, title }: CommentsProps) {
  const { theme } = useTheme();
  const disqusShortname = 'subhash-law';

  const disqusConfig = {
    url: url,
    identifier: identifier,
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
