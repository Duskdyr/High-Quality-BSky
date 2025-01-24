# High Quality BSky
Improves BlueSky image quality by replacing image formats.

## What it does
- When browsing the site, JPEG thumbnails are replaced with full-sized AVIF images.
- When clicking an image, JPEG images are replaced with lossless PNG images.

High resolution AVIF images are higher quality and of similar size as JEPG thumbnails, so switching to that format while browsing should give you a smooth and higher quality experience without noticeably sacrificing bandwidth. When you click an image, you can get it at its maximum resolution and quality in lossless PNG format, but keeps in mind that if the uploader of said image uploaded it in JPEG or WebP format the PNG you get will be lossy, but that's still way better than the highly compressed JPEG BlueSky serves by default.

## Installation
1. Install one of these userscript managers on your browser. If not sure, choose Violentmonkey, as it's both open source and multiplatform.
- [Violentmonkey](https://violentmonkey.github.io/get-it/)
- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)

2. Click [here](https://github.com/Duskdyr/High-Quality-BSky/raw/refs/heads/main/high_quality_bsky.user.js) to install this script.
