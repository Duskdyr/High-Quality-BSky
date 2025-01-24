// ==UserScript==
// @name         High Quality BSky
// @author       Duskdyr
// @description  Improves BlueSky image quality by replacing image formats. When browsing the site, JPEG thumbnails are replaced with full-sized AVIF images. When clicking an image, JPEG images are replaced with lossless PNG images.
// @match        *://*.bsky.app/*
// @grant        none
// @namespace    dskdr
// @license MIT
// @version      1.0
// @downloadURL https://update.greasyfork.org/scripts/524705/High%20Quality%20BSky.user.js
// @updateURL https://update.greasyfork.org/scripts/524705/High%20Quality%20BSky.meta.js
// ==/UserScript==

(function() {
    'use strict';

    function imgrplcr() {
        document.querySelectorAll('img').forEach(img => {
            let url = img.src;

            if (url.includes('/feed_thumbnail') && url.includes('@jpeg')) {
                url = url.replace('@jpeg', '@avif');
                url = url.replace('/feed_thumbnail', '/feed_fullsize');
            }
            else if (url.includes('/feed_fullsize') && url.includes('@jpeg')) {
                url = url.replace('@jpeg', '@png');
            }
            if (img.src !== url) {
                img.src = url;
            }
        });
    }

    imgrplcr();

    const observer = new MutationObserver(imgrplcr);
    observer.observe(document.body, { childList: true, subtree: true });
})();
