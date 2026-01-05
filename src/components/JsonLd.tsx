import { SITE_NAME, SITE_URL, companyInfo, socialLinks } from '@/lib/constants';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE_NAME,
    image: `${SITE_URL}/images/author/profile.jpg`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: companyInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressLocality: 'Lalitpur',
      addressRegion: 'Bagmati',
      postalCode: '44700',
      addressCountry: 'NP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.67, // Approximate for Patan
      longitude: 85.32, // Approximate for Patan
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: socialLinks.map((link) => link.href),
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
