// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "JP Cloud Tech";
export const SITE_TITLE = "JP Cloud Tech";
export const SITE_DESCRIPTION = "My cloud journey";
export const LIGHT_THEME = 'corporate';
export const DARK_THEME = 'halloween';

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "JP Cloud Tech - All Tags";
export const Tags_DESCRIPTION =
  "JP Cloud Tech - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in JP Cloud Tech`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in JP Cloud Tech`,
    description: `Browse all articles under the ${category} category in JP Cloud Tech`,
  };
}

// Header Links, src/components/Header.astro
// { href: "/category/One/1/", title: "One" },
// { href: "/category/Two/1/", title: "Two" },
// { href: "/category/Three/1/", title: "Three" },
export const HeaderLinks = [
  { href: "/", title: "No Categories yet"},
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/about/", title: "About" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "i-tabler-rss", label: "RSS" },
  {
    href: "https://bsky.app/profile/jrpatt275.bsky.social",
    icon: "i-tabler-brand-bluesky",
    label: "Bluesky",
  },
  {
    href: "https://linkedin.com/in/james-r-patterson",
    icon: "i-tabler-brand-linkedin",
    label: "LinkedIn",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;

// About Page Metadata, src/pages/about.astro
export const ABOUT_PAGE_TITLE = `${SITE_TITLE} - About`;
export const ABOUT_PAGE_DESCRIPTION = `About me and ${SITE_TITLE}`;
