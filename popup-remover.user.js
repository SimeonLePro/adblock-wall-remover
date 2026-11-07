// ==UserScript==
// @name         Project-GC - remove pop-ups and ads
// @namespace    https://greasyfork.org/users/1658285
// @version      1.3.0
// @description  Removes the "Unlock more content" rewarded-ad pop-up, the "Please allow ads" adblock wall (with its dimmed background) and the sticky bottom anchor ad on project-gc.com.
// @license      MIT
// @match        *://*.project-gc.com/*
// @match        *://project-gc.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const REWARDED = '.auto-rewarded-dialog, [class*="auto-rewarded-"]';
  const WALL = '.fc-ab-root, .fc-ab-dialog, .fc-dialog-overlay';
  const ADS = [
    'ins.adsbygoogle',
    'ins[data-anchor-status]',
    'ins[data-ad-status]',
    'iframe[id^="aswift_"]',
    'iframe[src*="googleads.g.doubleclick.net"]',
    '.grippy-host',
  ].join(',');

  // Hide immediately so nothing flashes on screen
  const style = document.createElement('style');
  style.textContent = [REWARDED, WALL, ADS].join(',') + ' { display: none !important; }';
  (document.head || document.documentElement).appendChild(style);

  // Remove empty full-screen fixed layers (dimmed backdrops)
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

  function clean() {
    const rewarded = document.querySelectorAll(REWARDED);
    const wall = document.querySelectorAll(WALL);
    const ads = document.querySelectorAll(ADS);

    // Use the rewarded dialog's own close button first
    if (rewarded.length) {
      document.querySelectorAll('.auto-rewarded-close-button').forEach(b => b.click());
    }

    rewarded.forEach(el => el.remove());
    wall.forEach(el => el.remove());
    ads.forEach(el => el.remove());

    // Restore scrolling only if a pop-up or wall was removed
    if (rewarded.length || wall.length) {
      removeDimLayers();
      for (const t of [document.documentElement, document.body]) {
        if (t) {
          t.style.setProperty('overflow', 'auto', 'important');
          t.style.setProperty('position', 'static', 'important');
        }
      }
    }
  }

  new MutationObserver(clean).observe(document, { childList: true, subtree: true });
  clean();
})();
