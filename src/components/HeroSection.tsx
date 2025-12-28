
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-slate-900 overflow-hidden dark">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-start space-y-6 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-text-heading">
            Defending Your Rights, <br className="hidden lg:block" />
            Securing Your Future.
          </h1>
          <p className="text-lg md:text-xl text-text-description max-w-[700px]">
            Experienced legal representation for complex matters. We provide strategic counsel and aggressive advocacy when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
              <Link href="/practice-areas">View Practice Areas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
