
import Link from 'next/link';
import { navLinks, SITE_NAME } from '@/lib/constants';
import { Button } from './ui/button';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const reader = createReader(process.cwd(), keystaticConfig);

export async function Footer() {
  const year = new Date().getFullYear();
  const author = await reader.singletons.author.read();

  const socialLinks = [
    { name: 'LinkedIn', href: author?.linkedin || '#', icon: Linkedin },
    { name: 'Twitter', href: author?.twitter || '#', icon: Twitter },
    { name: 'Facebook', href: author?.facebook || '#', icon: Facebook },
  ].filter(link => link.href && link.href !== '#');

  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg text-primary">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-text-description">
             {author?.tagline}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider uppercase">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-text-description hover:text-text-heading">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-description">
                <li>{author?.address}</li>
                <li>
                  <a href={`mailto:${author?.email}`} className="hover:text-text-heading">
                    {author?.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${author?.phone}`} className="hover:text-text-heading">
                    {author?.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((social) => (
                  <Button asChild key={social.name} variant="ghost" size="icon">
                    <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5 text-text-description hover:text-text-heading" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-description">
          <p>&copy; {year} {SITE_NAME}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-text-heading">Terms</Link>
            <Link href="/privacy" className="hover:text-text-heading">Privacy</Link>
            <Link href="/disclaimer" className="hover:text-text-heading">Disclaimer</Link>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/40 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-text-description">
          <div className="flex items-center gap-1">
            <span>Made by</span>
            <a 
              href="https://lamichhanerabin.com.np/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:text-text-heading underline underline-offset-2"
            >
              Rabin Lamichhane
            </a>
          </div>
          
          <div className="flex items-center gap-4">
             <a 
               href="mailto:evod@gmail.com" 
               className="flex items-center gap-1 hover:text-text-heading transition-colors"
               aria-label="Email Developer"
             >
               <Mail className="h-3 w-3" />
               <span>evod@gmail.com</span>
             </a>
             
             <a 
               href="https://www.linkedin.com/in/rabinlc01/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-1 hover:text-text-heading transition-colors"
               aria-label="Developer LinkedIn"
             >
               <Linkedin className="h-3 w-3" />
               <span>LinkedIn</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
