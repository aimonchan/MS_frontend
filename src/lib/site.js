// Single source of truth for brand and contact details used in SEO metadata and JSON-LD.
// Only facts already published on the site are filled in; everything else is a TODO.

export const SITE_URL = 'https://www.mspace-deco.com';

export const SITE_NAME = 'Modern Space';
export const LEGAL_NAME = 'Modern Space Furnishing and Decoration Co., Ltd';
export const ALTERNATE_NAMES = ['Modern Space Furnishing & Decoration', 'Modern Space Furnishing and Decoration'];

export const DEFAULT_TITLE = 'Modern Space | Custom Furniture & Interior Turnkey Solutions in Yangon';
export const HOME_DESCRIPTION =
  'Modern Space makes custom-made furniture and handles interior design and renovation for residential and office projects in Yangon. Call +95 9449 556 610.';

export const PHONE = '+95 9449 556 610';
export const EMAIL = 'marketing.team@mspace-deco.com';
export const FOUNDING_YEAR = '2019';

// Address as shown in the site's contact section.
export const ADDRESS = {
  streetAddress: '#5A-1202, Yadanar HninSi Condo, Yadanar Rd, Dagon Seikkan',
  addressLocality: 'Yangon',
  addressCountry: 'MM',
  // TODO: add postalCode once confirmed.
};

// Opening hours as shown in the site's location section (Sunday closed).
export const OPENING_HOURS = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '17:00' },
];

// TODO: confirm the service area (Yangon only, or all of Myanmar?).
export const AREA_SERVED = 'Yangon';

// TODO: add the real profile URLs (Facebook, TikTok, LinkedIn, Instagram, ...).
// Leave empty until confirmed; the sameAs field is omitted while this is empty.
export const SOCIAL_PROFILES = [];

export const LOGO_PATH = '/icons/logo.png';

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Modern Space – custom furniture and interior design in Yangon',
};
