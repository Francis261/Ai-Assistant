# ImagickPixelIterator::__construct

Source: https://devdocs.io/php/imagickpixeliterator.construct

(PECL imagick 2, PECL imagick 3)

ImagickPixelIterator::__construct — The ImagickPixelIterator constructor

### Description

```
public ImagickPixelIterator::__construct(Imagick $wand)
```

This function is currently not documented; only its argument list is available.

The ImagickPixelIterator constructor

### Return Values

Returns true on success.

### Examples

Example #1 ImagickPixelIterator::construct()

```
<?php
function construct($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imageIterator = new \ImagickPixelIterator($imagick);

    /* Loop through pixel rows */
    foreach ($imageIterator as $pixels) { 
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

    header("Content-Type: image/jpg");
    echo $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixeliterator.construct.php
