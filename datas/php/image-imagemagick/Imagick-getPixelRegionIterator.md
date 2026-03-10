# Imagick::getPixelRegionIterator

Source: https://devdocs.io/php/imagick.getpixelregioniterator

(PECL imagick 2, PECL imagick 3)

Imagick::getPixelRegionIterator — Get an ImagickPixelIterator for an image section

### Description

```
public Imagick::getPixelRegionIterator(
 int $x,
 int $y,
 int $columns,
 int $rows
): ImagickPixelIterator
```

Get an ImagickPixelIterator for an image section.

### Parameters

The x-coordinate of the region.

The y-coordinate of the region.

The width of the region.

The height of the region.

### Return Values

Returns an ImagickPixelIterator for an image section.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::getPixelRegionIterator() example

Iterate over the pixels in the top left of the image, changing them to be black.

```
<?php
$im = new Imagick(realpath("./testImage.png"));
$areaIterator = $im->getPixelRegionIterator(0, 0, 10, 10);

foreach ($areaIterator as $rowIterator) {
    foreach ($rowIterator as $pixel) {
        // Paint every pixel black
        $pixel->setColor("rgba(0, 0, 0, 0)");
    }
    $areaIterator->syncIterator();
}
$im->writeImage("./output.png");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getpixelregioniterator.php
