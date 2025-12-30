// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'harmony-touch/subhash',
  },
  singletons: {
    author: singleton({
      label: 'Author Profile',
      path: 'src/content/author/profile',
      format: 'yaml',
      schema: {
        name: fields.text({ label: 'Name', defaultValue: 'Adv. Subhash Lamichhane' }),
        tagline: fields.text({ label: 'Tagline', defaultValue: 'Advocating for Justice, Committed to Academic Excellence.' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Phone' }),
        address: fields.text({ label: 'Address' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
        twitter: fields.url({ label: 'Twitter URL' }),
        facebook: fields.url({ label: 'Facebook URL' }),
        profileImage: fields.image({
          label: 'Profile Image',
          directory: 'public/images/author',
          publicPath: '/images/author/',
        }),
        education: fields.array(
          fields.object({
            degree: fields.text({ label: 'Degree' }),
            year: fields.text({ label: 'Year' }),
            institution: fields.text({ label: 'Institution' }),
            university: fields.text({ label: 'University' }),
          }),
          { label: 'Education' }
        ),
        experience: fields.array(
          fields.object({
            title: fields.text({ label: 'Job Title' }),
            organization: fields.text({ label: 'Organization' }),
            date: fields.text({ label: 'Date Range' }),
            description: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Experience' }
        ),
        achievements: fields.array(fields.text({ label: 'Achievement' }), { label: 'Achievements' }),
        skills: fields.array(fields.text({ label: 'Skill' }), { label: 'Skills' }),
      },
    }),
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author', defaultValue: 'Subhash Lamichhane' }),
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
      format: 'yaml',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author', defaultValue: 'Subhash Lamichhane' }),
        excerpt: fields.text({ label: 'Abstract/Excerpt', multiline: true }),
        date: fields.date({ label: 'Publish Date', defaultValue: new Date().toISOString().split('T')[0] }),
        pdf: fields.file({
          label: 'PDF Document',
          directory: 'public/files/research-papers',
          publicPath: '/files/research-papers/',
        }),
      },
    }),
    academia: collection({
      label: 'Academia',
      slugField: 'title',
      path: 'src/content/academia/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.text({ label: 'Author', defaultValue: 'Subhash Lamichhane' }),
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
        author: fields.text({ label: 'Author', defaultValue: 'Subhash Lamichhane' }),
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
        author: fields.text({ label: 'Author', defaultValue: 'Subhash Lamichhane' }),
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
    legal: collection({
      label: 'Legal Pages',
      slugField: 'title',
      path: 'src/content/legal/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
