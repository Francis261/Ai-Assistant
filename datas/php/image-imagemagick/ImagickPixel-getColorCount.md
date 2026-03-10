# ImagickPixel::getColorCount

Source: https://devdocs.io/php/imagickpixel.getcolorcount

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getColorCount — Returns the color count associated with this color

### Description

```
public ImagickPixel::getColorCount(): int
```

Returns the color count associated with this color.

The color count is the number of pixels in the image that have the same color as this ImagickPixel.

ImagickPixel::getColorCount appears to only work for ImagickPixel objects created through Imagick::getImageHistogram()

### Parameters

This function has no parameters.

### Return Values

Returns the color count as an integer on success, throws ImagickPixelException on failure.

### Examples

Example #1 ImagickPixel getColorCount()

```
<?php
    $imagick = new \Imagick();
    $imagick->newPseudoImage(640, 480, "magick:logo");
    $histogramElements = $imagick->getImageHistogram();
    $lastColor = array_pop($histogramElements);
    echo "Last pixel color count is: ".$lastColor->getColorCount();
?>
```

The output for this will be similar to:

```
Last pixel color count is: 256244
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.getcolorcount.php
