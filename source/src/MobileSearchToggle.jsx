import { MagnifyingGlass } from '@phosphor-icons/react';
export function MobileSearchToggle() {
  return <a className="mobile-search-toggle" aria-label="站内搜索" href={`/?page=search&returnTo=${encodeURIComponent(location.pathname+location.search)}`}><MagnifyingGlass size={22}/></a>;
}
