# Imagick::getPixelIterator

Source: https://devdocs.io/php/imagick.getpixeliterator

(PECL imagick 2, PECL imagick 3)

Imagick::getPixelIterator — Returns a MagickPixelIterator

### Description

```
public Imagick::getPixelIterator(): ImagickPixelIterator
```

Returns a MagickPixelIterator.

### Parameters

This function has no parameters.

### Return Values

Returns an ImagickPixelIterator on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::getPixelIterator()

```
<?php
function getPixelIterator($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = $imagick->getPixelIterator();

    foreach ($imageIterator as $row => $pixels) { /* Loop through pixel rows */
        foreach ($pixels as $column => $pixel) { /* Loop through the pixels in the row (columns) */
            /** @var $pixel \ImagickPixel */
            if ($column % 2) {
                $pixel->setColor("rgba(0, 0, 0, 0)"); /* Paint every second pixel black*/
            }
        }
        $imageIterator->syncIterator(); /* Sync the iterator, this is important to do on each iteration */
    }

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getpixeliterator.php
