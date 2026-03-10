# Imagick::setImage

Source: https://devdocs.io/php/imagick.setimage

(PECL imagick 2, PECL imagick 3)

Imagick::setImage — Replaces image in the object

### Description

```
public Imagick::setImage(Imagick $replace): bool
```

Replaces the current image sequence with the image from replace object.

### Parameters

The replace Imagick object

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 A Imagick::setImage() example

An example of using Imagick::setImage()

```
<?php
/* Create the objects */
$image = new Imagick('source.jpg');
$replace = new Imagick('replace.jpg');

/* source.jpg is replaced with replace.jpg */
$image->setImage($replace);

/* output the image */
header('Content-type: image/jpeg');
echo $image;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimage.php
