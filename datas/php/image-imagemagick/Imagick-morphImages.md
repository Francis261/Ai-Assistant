# Imagick::morphImages

Source: https://devdocs.io/php/imagick.morphimages

(PECL imagick 2, PECL imagick 3)

Imagick::morphImages — Method morphs a set of images

### Description

```
public Imagick::morphImages(int $number_frames): Imagick
```

Method morphs a set of images. Both the image pixels and size are linearly interpolated to give the appearance of a meta-morphosis from one image to the next.

### Parameters

The number of in-between images to generate.

### Return Values

This method returns a new Imagick object on success. Throw an ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.morphimages.php
