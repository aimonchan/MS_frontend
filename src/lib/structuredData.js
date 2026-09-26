import {
  ADDRESS,
  ALTERNATE_NAMES,
  AREA_SERVED,
  DEFAULT_OG_IMAGE,
  EMAIL,
  FOUNDING_YEAR,
  HOME_DESCRIPTION,
  LEGAL_NAME,
  LOGO_PATH,
  OPENING_HOURS,
  PHONE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from './site';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const absolute = (path) => new URL(path, SITE_URL).toString();

// sameAs is left out until real profile URLs are added to SOCIAL_PROFILES (see TODO in site.js).
const sameAs = SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {};

// Organization + LocalBusiness + WebSite for the home page.
export function homeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        alternateName: ALTERNATE_NAMES,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: absolute(LOGO_PATH) },
        email: EMAIL,
        telephone: PHONE,
        foundingDate: FOUNDING_YEAR,
        ...sameAs,
      },
      {
        // Design & build, renovation and custom furniture installation fit HomeAndConstructionBusiness
        // better than FurnitureStore (there is no retail showroom on the site).
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        alternateName: ALTERNATE_NAMES,
        description: HOME_DESCRIPTION,
        url: SITE_URL,
        logo: absolute(LOGO_PATH),
        image: [absolute(DEFAULT_OG_IMAGE.url)],
        telephone: PHONE,
        email: EMAIL,
        address: { '@type': 'PostalAddress', ...ADDRESS },
        areaServed: { '@type': 'City', name: AREA_SERVED },
        openingHoursSpecification: OPENING_HOURS.map(({ days, opens, closes }) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: days,
          opens,
          closes,
        })),
        parentOrganization: { '@id': ORGANIZATION_ID },
        // TODO: add "geo" (latitude/longitude) and "priceRange" once confirmed.
        ...sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: ALTERNATE_NAMES,
        url: SITE_URL,
        inLanguage: 'en',
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  };
}

// BreadcrumbList for inner pages. `items` excludes Home, which is always first.
export function breadcrumbStructuredData(items) {
  const trail = [{ name: 'Home', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}
