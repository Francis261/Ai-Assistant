# ImagickPixelIterator::getNextIteratorRow

Source: https://devdocs.io/php/imagickpixeliterator.getnextiteratorrow

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::getNextIteratorRow — Returns the next row of the pixel iterator

### Description

```
public ImagickPixelIterator::getNextIteratorRow(): array
```

This function is currently not documented; only its argument list is available.

Returns the next row as an array of pixel wands from the pixel iterator.

### Return Values

Returns the next row as an array of ImagickPixel objects, throwing ImagickPixelIteratorException on error.

### Examples

Example #1 ImagickPixelIterator::getNextIteratorRow()

```
<?php
function getNextIteratorRow($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = $imagick->getPixelIterator();

    $count = 0;
    while ($pixels = $imageIterator->getNextIteratorRow()) {
        if (($count % 3) == 0) {
            /* Loop through the pixels in the row (columns) */
            foreach ($pixels as $column => $pixel) { 
                /** @var $pixel \ImagickPixel */
                if ($column % 2) {
                    /* Paint every second pixel black*/
                    $pixel->setColor("rgba(0, 0, 0, 0)");
                }
            }
            /* Sync the iterator, this is important to do on each iteration */
            $imageIterator->syncIterator(); 
        }

        $count += 1;
    }

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixeliterator.getnextiteratorrow.php
