# Imagick::getSize

Source: https://devdocs.io/php/imagick.getsize

(PECL imagick 2, PECL imagick 3)

Imagick::getSize — Returns the size associated with the Imagick object

### Description

```
public Imagick::getSize(): array
```

Get the size in pixels associated with the Imagick object, previously set by Imagick::setSize().

Note:

This method just returns the size that was set using Imagick::setSize(). If you want to get the actual width / height of the image, use Imagick::getImageWidth() and Imagick::getImageHeight().

### Parameters

This function has no parameters.

### Return Values

Returns the size associated with the Imagick object as an array with the keys "columns" and "rows".

### Examples

Example #1 Getting the size of a raw RGB image set at 200x400, after scaling to 400x800 (compared to width / height)

```
<?php
//Set size first and then load the raw image
$img = new Imagick();
$img->setSize(200, 400);
$img->readImage("image.rgb");

$img->scaleImage(400, 800);

$size = $img->getSize();
print_r($size);

echo $img->getImageWidth()."x".$img->getImageHeight();
?>
```

The above example will output:

```
Array
(
    [columns] => 200
    [rows] => 400
)
400x800
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getsize.php
