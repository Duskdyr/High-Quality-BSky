# Duskdyr's Userscripts Collection
Collection of userscripts I wrote for my needs, mostly focused on improving image quality on social media sites like BlueSky or Twitter.

## HD BlueSky
- While browsing the site, JPEG thumbnails are replaced with full-sized AVIF images.
- When clicking an image, JPEGs are replaced with lossless PNGs.

## HD Twitter
- When clicking an image, JPEGs are replaced with lossless PNGs.

## Considerations
- If a certain image was originally uploaded in JPEG or WebP, then the PNG you get will be as lossy as its origin, but that's still *way* better than the highly compressed JPEG BlueSky and Twitter serve by default.
- Images that were uploaded as PNG will actually be lossless but maybe not at their original resolution, as BlueSky and Twitter will resize anything you throw at them.
- In BlueSky, full-sized AVIF images are higher quality and of similar size as JEPG thumbnails, so switching to that format while browsing should give you a smooth and higher quality experience without noticeably sacrificing bandwidth.

## Installation
1. Install one of these userscript managers on your browser. If not sure, choose Violentmonkey, as it's both open source and multiplatform.
- [Violentmonkey](https://violentmonkey.github.io/get-it/)
- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)

2. Go to the Greasy Fork page of any of my scripts and install them from there.
- [HD BlueSky](https://greasyfork.org/scripts/524794)
- [HD Twitter](https://greasyfork.org/scripts/524826)
