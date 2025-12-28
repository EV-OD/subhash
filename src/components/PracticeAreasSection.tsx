
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { practiceAreas } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export function PracticeAreasSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Practice Areas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer comprehensive legal services tailored to your specific needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Card key={area.slug} className="transition-all hover:shadow-lg">
              <CardHeader>
                <area.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {area.description}
                </CardDescription>
                <Link href={`/practice-areas`} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
