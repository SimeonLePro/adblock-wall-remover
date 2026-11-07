// ==UserScript==
// @name         Annoying Pop-up Remover
// @namespace    https://greasyfork.org/users/1658285
// @version      2.0.0
// @description  Removes adblock walls, pop-ups and ads on geotjek.dk, geocheck.org, kaldata.com and project-gc.com.
// @license      MIT
// @match        *://*.geotjek.dk/*
// @match        *://geotjek.dk/*
// @match        *://*.geocheck.org/*
// @match        *://geocheck.org/*
// @match        *://*.kaldata.com/*
// @match        *://kaldata.com/*
// @match        *://*.project-gc.com/*
// @match        *://project-gc.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const host = location.hostname;
  const isKaldata = /(^|\.)kaldata\.com$/.test(host);
  const isProjectGC = /(^|\.)project-gc\.com$/.test(host);

  // Adblock wall (Google Funding Choices) - used on all supported sites
  const WALL = '.fc-ab-root, .fc-ab-dialog, .fc-dialog-overlay';

  // Kaldata: extension smart banner
  const KALDATA_BANNER = '#banner-ui';

  // Project-GC: "Unlock more content" pop-up and Google ads
  const REWARDED = '.auto-rewarded-dialog, [class*="auto-rewarded-"]';
  const ADS = [
    'ins.adsbygoogle',
    'ins[data-anchor-status]',
    'ins[data-ad-status]',
    'iframe[id^="aswift_"]',
    'iframe[src*="googleads.g.doubleclick.net"]',
    '.grippy-host',
  ].join(',');

  // Hide everything immediately so nothing flashes on screen
  const hide = [WALL];
  if (isKaldata) hide.push(KALDATA_BANNER);
  if (isProjectGC) hide.push(REWARDED, ADS);
  const style = document.createElement('style');
  style.textContent = hide.join(',') + ' { display: none !important; }';
  (document.head || document.documentElement).appendChild(style);

  // Project-GC: remove empty full-screen fixed layers (dimmed backdrops)
  function removeDimLayers() {
    document.querySelectorAll('body > div, body > section').forEach(el => {
      const cs = getComputedStyle(el);
      if (cs.position !== 'fixed') return;
      const r = el.getBoundingClientRect();
      const coversScreen = r.width >= innerWidth * 0.9 && r.height >= innerHeight * 0.9;
      const empty = el.textContent.trim() === '' && !el.querySelector('img, video, iframe, input, button, a');
      if (coversScreen && empty) el.remove();
    });
  }

  function unlockScroll() {
    for (const t of [document.documentElement, document.body]) {
      if (t) {
        t.style.setProperty('overflow', 'auto', 'important');
        t.style.setProperty('position', 'static', 'important');
      }
    }
  }

  function clean() {
    let removedPopup = false;

    // Adblock wall
    const wall = document.querySelectorAll(WALL);
    if (wall.length) { wall.forEach(el => el.remove()); removedPopup = true; }

    // Kaldata extension banner
    if (isKaldata) {
      document.querySelectorAll(KALDATA_BANNER).forEach(el => {
        // Remove the wrapper too if it only contains the banner
        const p = el.parentElement;
        if (p && p.children.length === 1 && p !== document.body) p.remove();
        else el.remove();
      });
    }

    // Project-GC pop-up and ads
    if (isProjectGC) {
      const rewarded = document.querySelectorAll(REWARDED);
      if (rewarded.length) {
        // Use the dialog's own close button first
        document.querySelectorAll('.auto-rewarded-close-button').forEach(b => b.click());
        rewarded.forEach(el => el.remove());
        removedPopup = true;
      }
      document.querySelectorAll(ADS).forEach(el => el.remove());
      if (removedPopup) removeDimLayers();
    }

    // Restore scrolling only if a pop-up or wall was actually removed
    if (removedPopup) unlockScroll();
  }

  new MutationObserver(clean).observe(document, { childList: true, subtree: true });
  clean();
})();
