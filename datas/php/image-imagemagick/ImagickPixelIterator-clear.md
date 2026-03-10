# ImagickPixelIterator::clear

Source: https://devdocs.io/php/imagickpixeliterator.clear

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::clear — Clear resources associated with a PixelIterator

### Description

```
public ImagickPixelIterator::clear(): bool
```

This function is currently not documented; only its argument list is available.

Clear resources associated with a PixelIterator.

### Return Values

Returns true on success.

### Examples

Example #1 ImagickPixelIterator::clear()

```
<?php
function clear($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));

    $imageIterator = $imagick->getPixelRegionIterator(100, 100, 250, 200);

    /* Loop through pixel rows */
    foreach ($imageIterator as $pixels) { 
        /** @var $pixel \ImagickPixel */
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $column => $pixel) { 
            if ($column % 2) {
                /* Paint every second pixel black*/
                $pixel->setColor("rgba(0, 0, 0, 0)"); 
            }
        }
        /* Sync the iterator, this is important to do on each iteration */
        $imageIterator->syncIterator();
    }

    $imageIterator->clear();

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixeliterator.clear.php
