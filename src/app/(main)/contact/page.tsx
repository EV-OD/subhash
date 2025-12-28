

import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { companyInfo } from '@/lib/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our legal team. We are here to answer your questions and provide the legal support you need.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        tag="Contact Us"
        title="Get in Touch"
        subtitle="We're here to help. Contact us with any questions or to schedule a free consultation."
        isCentered
      />
      
      <section className="w-full py-12 md:py-24">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    Speak to our legal team.
                  </p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                   <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    Send us your questions.
                  </p>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                   <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Office</h3>
                  <p className="text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="aspect-video w-full">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.30043867623!2d-75.28028318260447!3d39.98265887645163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54331%3A0x6491cdf34f0a0501!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover rounded-lg"
                title="Map of office location"
              ></iframe>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold tracking-tighter">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
