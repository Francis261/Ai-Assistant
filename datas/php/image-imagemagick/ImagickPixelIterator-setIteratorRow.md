# ImagickPixelIterator::setIteratorRow

Source: https://devdocs.io/php/imagickpixeliterator.setiteratorrow

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::setIteratorRow — Set the pixel iterator row

### Description

```
public ImagickPixelIterator::setIteratorRow(int $row): bool
```

This function is currently not documented; only its argument list is available.

Set the pixel iterator row.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 ImagickPixelIterator::setIteratorRow()

```
<?php
function setIteratorRow($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = $imagick->getPixelRegionIterator(200, 100, 200, 200);

    for ($x = 0; $x < 20; $x++) {        
        $imageIterator->setIteratorRow($x * 5);
        $pixels = $imageIterator->getCurrentIteratorRow();
        /* Loop through the pixels in the row (columns) */
        foreach ($pixels as $pixel) {
            /** @var $pixel \ImagickPixel */
            /* Paint every second pixel black*/
            $pixel->setColor("rgba(0, 0, 0, 0)"); 
        }

        /* Sync the iterator, this is important to do on each iteration */
        $imageIterator->syncIterator();
    }

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixeliterator.setiteratorrow.php
