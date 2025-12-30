'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const key = `viewed:${slug}`;
    const hasViewed = sessionStorage.getItem(key);

    if (!hasViewed) {
      // First time in this session: Increment view (POST)
      fetch(`/api/views?slug=${slug}`, { method: 'POST' })
        .then((res) => res.json())
        .then((data) => {
          setViews(data.views);
          sessionStorage.setItem(key, 'true');
        })
        .catch((err) => console.error('Error incrementing views:', err));
    } else {
      // Already viewed: Just get count (GET)
      fetch(`/api/views?slug=${slug}`, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => setViews(data.views))
        .catch((err) => console.error('Error fetching views:', err));
    }
  }, [slug]);

  if (views === null) return null;

  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground" title={`${views} views`}>
      <Eye className="h-4 w-4" />
      <span>{views.toLocaleString()}</span>
    </div>
  );
}
