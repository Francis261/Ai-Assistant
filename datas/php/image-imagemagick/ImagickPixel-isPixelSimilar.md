# ImagickPixel::isPixelSimilar

Source: https://devdocs.io/php/imagickpixel.ispixelsimilar

(PECL imagick 3 >= 3.3.0)

ImagickPixel::isPixelSimilar — Check the distance between this color and another

### Description

```
public ImagickPixel::isPixelSimilar(ImagickPixel $color, float $fuzz): bool
```

Checks the distance between the color described by this ImagickPixel object and that of the provided object, by plotting their RGB values on the color cube. If the distance between the two points is less than the fuzz value given, the colors are similar. This method replaces ImagickPixel::isSimilar() and correctly normalises the fuzz value to ImageMagick QuantumRange.

### Parameters

The ImagickPixel object to compare this object against.

The maximum distance within which to consider these colors as similar. The theoretical maximum for this value is the square root of three (1.732).

### Return Values

Returns true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.ispixelsimilar.php
