# ImagickPixel::isPixelSimilarQuantum

Source: https://devdocs.io/php/imagickpixel.ispixelsimilarquantum

(PECL imagick 3 >= 3.3.0)

ImagickPixel::isPixelSimilarQuantum — Returns whether two colors differ by less than the specified distance

### Description

```
public ImagickPixel::isPixelSimilarQuantum(string $color, string $fuzz = ?): bool
```

Returns true if the distance between two colors is less than the specified distance. The fuzz value should be in the range 0-QuantumRange. The maximum value represents the longest possible distance in the colorspace. e.g. from RGB(0, 0, 0) to RGB(255, 255, 255) for the RGB colorspace

### Parameters

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.ispixelsimilarquantum.php
