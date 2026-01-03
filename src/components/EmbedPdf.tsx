
'use client';

import React from 'react';
import { PDFViewer } from '@embedpdf/react-pdf-viewer';

interface EmbedPdfProps {
  url: string;
  title?: string;
  className?: string;
}

export function EmbedPdf({ url, title = "PDF Document", className = "" }: EmbedPdfProps) {
  return (
    <div className={`h-[800px] border rounded-lg ${className}`}>
      <PDFViewer 
      className='h-full'
        config={{
          src: url,
          theme: { preference: 'light' },
          disabledCategories: ['document-print', 'document-export']
        }}
      />
    </div>
  );
}
