// ==UserScript==
// @name         Annoying Pop-up Remover
// @namespace    https://greasyfork.org/users/1658285
// @version      1.0.0
// @description  Removes the Google Funding Choices adblock wall on geotjek.dk, geocheck.org and kaldata.com, plus the extension smart banner on kaldata.com.
// @license      MIT
// @match        *://*.geotjek.dk/*
// @match        *://geotjek.dk/*
// @match        *://*.geocheck.org/*
// @match        *://geocheck.org/*
// @match        *://*.kaldata.com/*
// @match        *://kaldata.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const WALL = '.fc-ab-root, .fc-ab-dialog, .fc-dialog-overlay';
  const isKaldata = /(^|\.)kaldata\.com$/.test(location.hostname);

  // Hide the wall immediately so it never flashes on screen
  const style = document.createElement('style');
  style.textContent = WALL + (isKaldata ? ', #banner-ui' : '') + ' { display: none !important; }';
  (document.head || document.documentElement).appendChild(style);

  function clean() {
    // Adblock wall (Google Funding Choices)
    const wall = document.querySelectorAll(WALL);
    wall.forEach(el => el.remove());

    // Restore scrolling only if the wall was actually removed
    if (wall.length) {
      for (const t of [document.documentElement, document.body]) {
        if (t) {
          t.style.setProperty('overflow', 'auto', 'important');
          t.style.setProperty('position', 'static', 'important');
        }
      }
    }

    // Kaldata extension smart banner
    if (isKaldata) {
      document.querySelectorAll('#banner-ui').forEach(el => {
        // Remove the wrapper too if it only contains the banner
        const p = el.parentElement;
        if (p && p.children.length === 1 && p !== document.body) p.remove();
        else el.remove();
      });
    }
  }

  new MutationObserver(clean).observe(document, { childList: true, subtree: true });
  clean();
})();
