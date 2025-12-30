
import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../../keystatic.config';
import Markdoc from '@markdoc/markdoc';

export const metadata = {
  title: 'Disclaimer - Adv. Subhash Lamichhane',
  description: 'Legal disclaimer.',
};

export default async function DisclaimerPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const page = await reader.collections.legal.read('disclaimer', { resolveLinkedFiles: true });

  if (!page) return <div>Page not found</div>;

  const { node } = await page.content;
  const content = Markdoc.transform(node);

  return (
    <>
      <PageHeader
        tag="Legal"
        title={page.title}
        subtitle="Important legal information regarding the content of this website."
      />
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto prose dark:prose-invert">
          {Markdoc.renderers.react(content, React)}
        </div>
      </section>
    </>
  );
}
