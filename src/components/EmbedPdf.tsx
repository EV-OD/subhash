
import React from 'react';

interface EmbedPdfProps {
  url: string;
  title?: string;
  className?: string;
}

export function EmbedPdf({ url, title = "PDF Document", className = "" }: EmbedPdfProps) {
  return (
    <div className={`w-full h-[800px] border rounded-lg overflow-hidden bg-muted ${className}`}>
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        style={{ border: 'none' }}
      />
    </div>
  );
}
