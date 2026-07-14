// Prefix a root-relative asset path (e.g. "/images/x.webp") with the configured
// base path. Next.js prefixes its own build assets and <Link> hrefs with
// `basePath` automatically, but NOT raw <img src> — so on a subpath deploy
// (e.g. a GitHub Pages project site at /pro-pressure-washing/) hardcoded image
// paths would 404. Wrap every raw <img>/asset src with asset() to fix that.
// External URLs and non-absolute paths are returned unchanged.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path || !path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
