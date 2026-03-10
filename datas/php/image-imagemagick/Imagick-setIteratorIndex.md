# Imagick::setIteratorIndex

Source: https://devdocs.io/php/imagick.setiteratorindex

(PECL imagick 2, PECL imagick 3)

Imagick::setIteratorIndex — Set the iterator position

### Description

```
public Imagick::setIteratorIndex(int $index): bool
```

Set the iterator to the position in the image list specified with the index parameter. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The position to set the iterator to

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::setIteratorIndex():

Create images, set and get the iterator index

```
<?php
$im = new Imagick();
$im->newImage(100, 100, new ImagickPixel("red"));
$im->newImage(100, 100, new ImagickPixel("green"));
$im->newImage(100, 100, new ImagickPixel("blue"));

$im->setIteratorIndex(1);
echo $im->getIteratorIndex();
?>
```

### See Also

- Imagick::getIteratorIndex() - Gets the index of the current active image
- Imagick::getImageIndex() - Gets the index of the current active image
- Imagick::setImageIndex() - Set the iterator position

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setiteratorindex.php
