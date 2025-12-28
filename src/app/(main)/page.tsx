
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Gavel, GraduationCap, Scale, ScrollText } from 'lucide-react';
import { practiceAreas } from '@/lib/constants';
import { HeroIllustration } from '@/components/HeroIllustration';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section - Minimalist & Professional */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-white text-slate-900 relative overflow-hidden">
        {/* Global Texture Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-50"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 backdrop-blur-sm">
                <Scale className="mr-2 h-4 w-4" />
                <span>Advocate Subhash Lamichhane</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900">
                Legal Insight & <br />
                <span className="text-slate-600">Academic Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-[600px] leading-relaxed">
                A dedicated platform for case law analysis, legal research, and scholarly discussions. Bridging the gap between legal theory and practice in Nepal.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-medium">
                  <Link href="/blog">
                    Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-200 text-slate-900 hover:bg-slate-100">
                  <Link href="/about">View Profile</Link>
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden lg:block">
               <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - List Layout (Not Cards) */}
      <section className="w-full py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight font-serif">Areas of Focus</h2>
              <p className="text-muted-foreground text-lg">
                Providing comprehensive resources for students, legal practitioners, and the public.
              </p>
            </div>
            <div className="grid gap-8">
              {practiceAreas.map((area) => (
                <div key={area.slug} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm border group-hover:border-primary/50 transition-colors">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Preview (Placeholder for now, linking to blog) */}
      <section className="w-full py-20 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight font-serif">Latest Insights</h2>
              <p className="text-muted-foreground">Recent articles, case summaries, and research papers.</p>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link href="/blog">
                View Archive <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Static placeholders that mimic the blog content structure - eventually these should be dynamic */}
            <div className="group cursor-pointer space-y-3">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
                 {/* Placeholder for image */}
                 <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <Gavel className="h-10 w-10 opacity-20" />
                 </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                  Case Law
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-serif">
                  Understanding Recent Supreme Court Precedents
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  An analysis of the latest rulings affecting constitutional rights and interpretation in Nepal.
                </p>
                <div className="pt-2 text-sm font-medium underline decoration-slate-300 underline-offset-4 group-hover:decoration-primary transition-all">
                  Read Analysis
                </div>
              </div>
            </div>

            <div className="group cursor-pointer space-y-3">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
                 <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <BookOpen className="h-10 w-10 opacity-20" />
                 </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                  Research Paper
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-serif">
                  The Evolution of Criminal Justice System
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  A comparative study on the procedural changes in the criminal justice system over the last decade.
                </p>
                <div className="pt-2 text-sm font-medium underline decoration-slate-300 underline-offset-4 group-hover:decoration-primary transition-all">
                  Read Paper
                </div>
              </div>
            </div>

            <div className="group cursor-pointer space-y-3">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
                 <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <GraduationCap className="h-10 w-10 opacity-20" />
                 </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider">
                  Academic Discussion
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors font-serif">
                  Legal Education and Practical Challenges
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  Discussing the gap between academic curriculum and the practical realities of the courtroom.
                </p>
                <div className="pt-2 text-sm font-medium underline decoration-slate-300 underline-offset-4 group-hover:decoration-primary transition-all">
                  Join Discussion
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Academic Focus */}
      <section className="w-full py-24 bg-slate-950 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">
              Connect for Academic Collaboration
            </h2>
            <p className="text-slate-400 text-lg">
              Interested in discussing legal research, moot court competitions, or academic opportunities?
            </p>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-200 mt-4">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
