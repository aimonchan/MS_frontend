import { DEFAULT_OG_IMAGE, DEFAULT_TITLE, SITE_NAME } from './site';

/**
 * Builds consistent page metadata: title, description, canonical URL,
 * Open Graph, Twitter card and robots.
 *
 * `title` is the short page title; the root layout template adds " | Modern Space".
 * Leave it out on the home page to use the default title.
 * `path` is relative to metadataBase (e.g. "/about-us").
 */
export function pageMetadata({ title, description, path, images = [DEFAULT_OG_IMAGE], noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: images.map((image) => image.url),
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

// Shortens text to a meta-description length at a word boundary.
export function truncate(text, max = 155) {
  const clean = text.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(' ', max - 1)).replace(/[,;:.\s]+$/, '') + '…';
}
