# Imagick::coalesceImages

Source: https://devdocs.io/php/imagick.coalesceimages

(PECL imagick 2, PECL imagick 3)

Imagick::coalesceImages — Composites a set of images

### Description

```
public Imagick::coalesceImages(): Imagick
```

Composites a set of images while respecting any page offsets and disposal methods. GIF, MIFF, and MNG animation sequences typically start with an image background and each subsequent image varies in size and offset. Returns a new Imagick object where each image in the sequence is the same size as the first and composited with the next image in the sequence.

### Parameters

This function has no parameters.

### Return Values

Returns a new Imagick object on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.coalesceimages.php
