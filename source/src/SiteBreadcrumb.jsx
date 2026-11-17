/** One breadcrumb shell for every public route; page owns its hierarchy/links. */
export function SiteBreadcrumb({children}) {
  return <nav className="news-breadcrumb site-breadcrumb" aria-label="面包屑">{children}</nav>;
}
