
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { PracticeAreasSection } from '@/components/PracticeAreasSection';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: `Explore the legal services offered by ${SITE_NAME}.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        tag="Services"
        title="Our Practice Areas"
        subtitle="Comprehensive legal solutions tailored to your unique situation."
      />
      <PracticeAreasSection />
    </>
  );
}
