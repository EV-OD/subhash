import type { Metadata, Viewport } from 'next';
import '../globals.css';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Lora } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Experienced legal representation for your most important matters. We provide strategic counsel and aggressive advocacy.',
  keywords: ['Lawyer', 'Advocate', 'Nepal', 'Legal Services', 'Subhash Lamichhane', 'Corporate Law', 'Criminal Law', 'Civil Law'],
  authors: [{ name: 'Subhash Lamichhane', url: SITE_URL }],
  creator: 'Subhash Lamichhane',
  publisher: 'Subhash Lamichhane',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_NAME,
    description: 'Experienced legal representation for your most important matters. We provide strategic counsel and aggressive advocacy.',
    siteName: SITE_NAME,
    images: [
      {
        url: '/images/author/profile.jpg', // Assuming a default OG image exists or using profile
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Experienced legal representation for your most important matters. We provide strategic counsel and aggressive advocacy.',
    images: ['/images/author/profile.jpg'],
    creator: '@subhash', // Update if twitter handle is known
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-body bg-background text-foreground antialiased">
        <JsonLd />
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            disableTransitionOnChange
          >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
