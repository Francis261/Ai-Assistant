# Imagick::getImageGeometry

Source: https://devdocs.io/php/imagick.getimagegeometry

(PECL imagick 2, PECL imagick 3)

Imagick::getImageGeometry — Gets the width and height as an associative array

### Description

```
public Imagick::getImageGeometry(): array
```

Returns the width and height as an associative array.

### Parameters

This function has no parameters.

### Return Values

Returns an array with the width/height of the image.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::getImageGeometry()

```
<?php
$imagick = new Imagick();
$imagick->newImage(100, 200, "black");
print_r($imagick->getImageGeometry());
?>
```

The above example will output:

```
Array
(
    [width] => 100
    [height] => 200
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagegeometry.php
