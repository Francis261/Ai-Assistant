# Imagick::polaroidImage

Source: https://devdocs.io/php/imagick.polaroidimage

(PECL imagick 2, PECL imagick 3)

Imagick::polaroidImage — Simulates a Polaroid picture

### Description

```
public Imagick::polaroidImage(ImagickDraw $properties, float $angle): bool
```

Simulates a Polaroid picture. This method is available if Imagick has been compiled against ImageMagick version 6.3.2 or newer.

### Parameters

The polaroid properties

The polaroid angle

### Return Values

Returns true on success.

### Examples

Example #1 A Imagick::polaroidImage() example

An example of using Imagick::polaroidImage()

```
<?php
/* Create the object */
$image = new Imagick('source.png');

/* Set the opacity */
$image->polaroidImage(new ImagickDraw(), 25);

/* output the image */
header('Content-type: image/png');
echo $image;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.polaroidimage.php
