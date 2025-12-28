
import Link from 'next/link';
import { companyInfo, navLinks, SITE_NAME, socialLinks } from '@/lib/constants';
import { Button } from './ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg text-primary">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
             {companyInfo.footerTagline}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider uppercase">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>{companyInfo.address}</li>
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-foreground">
                    {companyInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-foreground">
                    {companyInfo.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((social) => (
                  <Button asChild key={social.name} variant="ghost" size="icon">
                    <a href={social.href} aria-label={social.name}>
                      <social.icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} {SITE_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
