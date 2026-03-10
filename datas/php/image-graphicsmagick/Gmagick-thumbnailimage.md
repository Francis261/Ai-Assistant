# Gmagick::thumbnailimage

Source: https://devdocs.io/php/gmagick.thumbnailimage

(PECL gmagick >= Unknown)

Gmagick::thumbnailimage — Changes the size of an image

### Description

```
public Gmagick::thumbnailimage(int $width, int $height, bool $fit = false): Gmagick
```

Changes the size of an image to the given dimensions and removes any associated profiles. The goal is to produce small low cost thumbnail images suited for display on the Web. If true is given as a third parameter then columns and rows parameters are used as maximums for each side. Both sides will be scaled down until the match or are smaller than the parameter given for the side.

### Parameters

Image width.

Image height.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.thumbnailimage.php
