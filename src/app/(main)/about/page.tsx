
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { SITE_NAME, cvData } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, BookOpen, CheckCircle2, User, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Adv. Subhash Lamichhane',
  description: `Professional profile and curriculum vitae of ${SITE_NAME}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tag="Curriculum Vitae"
        title="About the Advocate"
        subtitle="Dedicated to legal excellence, academic research, and the pursuit of justice."
      />

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
          
          {/* Profile Summary */}
          <div className="grid md:grid-cols-[400px_1fr] gap-8 items-start">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[300px]">
                <Image
                  src="/images/author/profile.png"
                  alt="Advocate Subhash Lamichhane"
                  fill
                  className="object-cover"
                  priority
                />
            </div>
            
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                        <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Bio</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cvData.profile}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-sm text-muted-foreground">Years of Academic Excellence</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="text-2xl font-bold text-primary">Top 10</div>
                        <div className="text-sm text-muted-foreground">Bar Council Rank</div>
                    </div>
                </div>
            </div>
          </div>

          <Separator />

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-10 pb-2">
              {cvData.education.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-primary shadow-sm ring-4 ring-slate-50" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold font-serif text-slate-900">{edu.degree}</h3>
                    <Badge variant="secondary" className="w-fit font-mono text-xs">{edu.year}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{edu.institution}</span>
                    </div>
                    {edu.university && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="h-4 w-4 text-slate-400" />
                            <span>{edu.university}</span>
                        </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Professional Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
            </div>
            <div className="grid gap-6">
              {cvData.experience.map((exp, index) => (
                <div key={index} className="group relative bg-card rounded-xl border p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">{exp.title}</h3>
                        <p className="text-primary font-medium mt-1">{exp.organization}</p>
                    </div>
                    <Badge variant="outline" className="w-fit shrink-0 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.date || "Past"}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Achievements */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Achievements & Honors</h2>
            </div>
            <ul className="space-y-4">
              {cvData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border shadow-sm">
                  <Award className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-base font-medium">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Skills & Competencies</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {cvData.skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
