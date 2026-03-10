# Imagick::getIteratorIndex

Source: https://devdocs.io/php/imagick.getiteratorindex

(PECL imagick 2, PECL imagick 3)

Imagick::getIteratorIndex — Gets the index of the current active image

### Description

```
public Imagick::getIteratorIndex(): int
```

Returns the index of the current active image within the Imagick object. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

This function has no parameters.

### Return Values

Returns an integer containing the index of the image in the stack.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::getIteratorIndex():

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

- Imagick::setIteratorIndex() - Set the iterator position
- Imagick::getImageIndex() - Gets the index of the current active image
- Imagick::setImageIndex() - Set the iterator position

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getiteratorindex.php
