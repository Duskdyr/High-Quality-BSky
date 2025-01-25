// ==UserScript==
// @name         HD BlueSky
// @author       Duskdyr
// @description  Improves BlueSky image quality by replacing image formats. When clicking an image, JPEGs are replaced with lossless PNGs. While browsing the site, JPEG thumbnails are replaced with full-sized AVIF images.
// @match        *://*.bsky.app/*
// @grant        none
// @namespace    dskdr
// @license      MIT
// @version      1.0
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
