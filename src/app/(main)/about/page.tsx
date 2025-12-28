
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { SITE_NAME, cvData } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, BookOpen, CheckCircle2 } from 'lucide-react';

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
          <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Profile Summary</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {cvData.profile}
            </p>
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
            <div className="grid gap-8">
              {cvData.education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{edu.year}</p>
                    <p className="text-base">{edu.institution}</p>
                    {edu.university && <p className="text-sm text-muted-foreground">{edu.university}</p>}
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
            <div className="grid gap-10">
              {cvData.experience.map((exp, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <Badge variant="outline" className="w-fit">{exp.date || "Past"}</Badge>
                  </div>
                  <p className="text-primary font-medium">{exp.organization}</p>
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
