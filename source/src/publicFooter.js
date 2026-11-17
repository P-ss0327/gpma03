import chrome from './liveChrome.json';
import { siteNavigation } from './siteNavigation.js';
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
// Keep the existing public footer content, derive its map from the live hierarchy.
export const publicFooter = chrome.footer.replace(/(<div class="footer-map-links">).*?(<\/div><\/nav>)/s, (_,start,end)=>start+siteNavigation.map(item=>`<a href="${escape(item.href)}">${escape(item.label)}</a>`).join('')+end);
