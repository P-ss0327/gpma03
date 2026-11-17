import React from 'react';
import { SiteAnnouncement } from './SiteAnnouncement.jsx';
import { partyPathSections } from './partyContent.js';
import columns from './migratedColumns.json';
import {standardsPaths} from './standardsContent.js';
import { createRoot } from 'react-dom/client';
if (location.pathname !== '/' && new URLSearchParams(location.search).has('page')) history.replaceState(null, '', '/' + location.search + location.hash);
const alias = columns.aliases[location.pathname];
if (alias) {
  const destination = new URL(alias, location.origin);
  for (const [key, value] of new URLSearchParams(location.search)) if (!destination.searchParams.has(key)) destination.searchParams.set(key, value);
  history.replaceState(null, '', destination.pathname + destination.search + location.hash);
}
// Retired excellence entry points resolve to the remaining public award guide.
const retiredParams = new URLSearchParams(location.search);
if ((retiredParams.get('page') === 'award-catalog' && retiredParams.get('section') === 'excellence') || (retiredParams.get('page') === 'application-form' && retiredParams.get('type') === 'excellence')) history.replaceState(null,'','/?page=award-catalog&section=science');
const standardsRoute = new URLSearchParams(location.search).get('page') === 'standards' || Boolean(standardsPaths[location.pathname]);
const migratedRoute = Boolean(columns.pages[location.pathname + location.search] || columns.pages[location.pathname]);
const params = new URLSearchParams(location.search);
const downloadRoute = params.get('page') === 'downloads' || location.pathname === '/list-ba99d6c97a6442e8b0c8e4cc1403e83a.html';
const partyRoute = params.get('page') === 'party' || Boolean(partyPathSections[location.pathname]);
async function boot() {
const memberRoute = ['member-login', 'member-register', 'member-center', 'member-join'].includes(params.get('page'));
const applicationRoute = ['application-catalog', 'award-catalog', 'application-form', 'applications', 'application-detail', 'member-join'].includes(params.get('page'));
const { App } = standardsRoute ? await import('./StandardsPage.jsx') : params.get('page') === 'search' ? await import('./SearchPage.jsx') : migratedRoute ? await import('./MigratedColumnPage.jsx') : partyRoute ? await import('./PartyPage.jsx') : params.get('page') === 'member' ? await import('./MemberShowcasePage.jsx') : applicationRoute ? await import('./ApplicationsPage.jsx') : memberRoute ? await import('./MemberPage.jsx') : downloadRoute ? await import('./DownloadsPage.jsx') : await import('./App.jsx');
if (!standardsRoute && params.get('page') !== 'search' && !migratedRoute && !partyRoute && params.get('page') !== 'member' && !downloadRoute && !memberRoute && !applicationRoute) await import('./styles.css');
await import('./siteTheme.css');
await import('./mobile.css');
createRoot(document.getElementById('root')).render(<React.StrictMode><App /><SiteAnnouncement /></React.StrictMode>);

}
boot();
