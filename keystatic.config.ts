// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'harmony-touch/subhash',
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish Date', defaultValue: new Date().toISOString().split('T')[0] }),
        image: fields.image({ 
            label: 'Hero Image',
            directory: 'public/images/articles',
            publicPath: '/images/articles/'
        }),
        content: fields.markdoc({ label: 'Content', options:{
          image:{
            directory: 'public/images/articles/content',
            publicPath: '/images/articles/content/',
          }
        } }),
      },
    }),
    researchPapers: collection({
      label: 'Research Papers',
      slugField: 'title',
      path: 'src/content/research-papers/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Abstract/Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish Date', defaultValue: new Date().toISOString().split('T')[0] }),
        image: fields.image({ 
            label: 'Hero Image',
            directory: 'public/images/research-papers',
            publicPath: '/images/research-papers/'
        }),
        pdf: fields.file({
          label: 'PDF Document',
          directory: 'public/files/research-papers',
          publicPath: '/files/research-papers/',
        }),
        content: fields.markdoc({ label: 'Content', options:{
          image:{
            directory: 'public/images/research-papers/content',
            publicPath: '/images/research-papers/content/',
          }
        } }),
      },
    }),
    academia: collection({
      label: 'Academia',
      slugField: 'title',
      path: 'src/content/academia/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish Date', defaultValue: new Date().toISOString().split('T')[0] }),
        image: fields.image({ 
            label: 'Hero Image',
            directory: 'public/images/academia',
            publicPath: '/images/academia/'
        }),
        pdf: fields.file({
          label: 'PDF Document',
          directory: 'public/files/academia',
          publicPath: '/files/academia/',
        }),
        content: fields.markdoc({ label: 'Content', options:{
          image:{
            directory: 'public/images/academia/content',
            publicPath: '/images/academia/content/',
          }
        } }),
      },
    }),
    caseLaws: collection({
      label: 'Case Laws',
      slugField: 'title',
      path: 'src/content/case-laws/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Case Title' } }),
        excerpt: fields.text({ label: 'Summary', multiline: true }),
        date: fields.date({ label: 'Judgment Date', defaultValue: new Date().toISOString().split('T')[0] }),
        image: fields.image({ 
            label: 'Hero Image',
            directory: 'public/images/case-laws',
            publicPath: '/images/case-laws/'
        }),
        content: fields.markdoc({ label: 'Analysis', options:{
          image:{
            directory: 'public/images/case-laws/content',
            publicPath: '/images/case-laws/content/',
          }
        } }),
      },
    }),
    others: collection({
      label: 'Other Resources',
      slugField: 'title',
      path: 'src/content/others/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish Date', defaultValue: new Date().toISOString().split('T')[0] }),
        image: fields.image({ 
            label: 'Hero Image',
            directory: 'public/images/others',
            publicPath: '/images/others/'
        }),
        content: fields.markdoc({ label: 'Content', options:{
          image:{
            directory: 'public/images/others/content',
            publicPath: '/images/others/content/',
          }
        } }),
      },
    }),
  },
});
