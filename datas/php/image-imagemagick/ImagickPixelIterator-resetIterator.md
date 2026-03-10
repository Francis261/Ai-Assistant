# ImagickPixelIterator::resetIterator

Source: https://devdocs.io/php/imagickpixeliterator.resetiterator

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::resetIterator — Resets the pixel iterator

### Description

```
public ImagickPixelIterator::resetIterator(): bool
```

This function is currently not documented; only its argument list is available.

Resets the pixel iterator. Use it in conjunction with ImagickPixelIterator::getNextIteratorRow() to iterate over all the pixels in a pixel container.

### Return Values

Returns true on success.

### Examples

Example #1 ImagickPixelIterator::resetIterator()

```
<?php
function resetIterator($imagePath) {

    $imagick = new \Imagick(realpath($imagePath));

    $imageIterator = $imagick->getPixelIterator();

    /* Loop trough pixel rows */
    foreach ($imageIterator as $pixels) {
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $column => $pixel) {
            /** @var $pixel \ImagickPixel */
            if ($column % 2) {

                /* Make every second pixel 25% red*/
                $pixel->setColorValue(\Imagick::COLOR_RED, 64); 
            }
        }
        /* Sync the iterator, this is important to do on each iteration */
        $imageIterator->syncIterator();
    }

    $imageIterator->resetiterator();

    /* Loop trough pixel rows */
    foreach ($imageIterator as $pixels) {
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $column => $pixel) {
            /** @var $pixel \ImagickPixel */
            if ($column % 3) {
                $pixel->setColorValue(\Imagick::COLOR_BLUE, 64); /* Make every second pixel a little blue*/
                //$pixel->setColor("rgba(0, 0, 128, 0)"); /* Paint every second pixel black*/
            }
        }
        $imageIterator->syncIterator(); /* Sync the iterator, this is important to do on each iteration */
    }

    $imageIterator->clear();

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixeliterator.resetiterator.php
