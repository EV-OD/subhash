// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'harmony-touch/harmonytouch',
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Post Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish Date', defaultValue: new Date().toISOString().split('T')[0] }),
        image: fields.image({ 
            label: 'Hero Image',
            directory: 'public/images/blog',
            publicPath: '/images/blog/'
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Article', value: 'article' },
            { label: 'Research Paper', value: 'research-paper' },
            { label: 'Academia', value: 'academia' },
            { label: 'Case Law', value: 'case-law' },
            { label: 'Other', value: 'other' },
          ],
          defaultValue: 'article',
        }),
        pdf: fields.file({
          label: 'PDF Document',
          description: 'Upload a PDF for Research Papers or Academia',
          directory: 'public/files/posts',
          publicPath: '/files/posts/',
        }),
        content: fields.markdoc({ label: 'Body Content', options:{
          image:{
            directory: 'public/images/blogContentImage',
            publicPath: '/images/blogContentImage/',
            transformFilename: (originalFilename) => {
              const timestamp = Date.now(); // Use current time
              const extension = originalFilename.split('.').pop(); // File extension
              const baseName = originalFilename.replace(/\.[^/.]+$/, ''); // Filename without extension
              return `${baseName}-${timestamp}.${extension}`;
            },
          }
        } }),
      },
    }),
  },
});
