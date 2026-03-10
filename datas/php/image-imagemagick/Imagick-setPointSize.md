# Imagick::setPointSize

Source: https://devdocs.io/php/imagick.setpointsize

(PECL imagick 2 >= 2.1.0, PECL imagick 3)

Imagick::setPointSize — Sets point size

### Description

```
public Imagick::setPointSize(float $point_size): bool
```

Sets object's point size property. This method can be used for example to set font size for caption: pseudo-format. This method is available if Imagick has been compiled against ImageMagick version 6.3.7 or newer.

### Parameters

Point size

### Return Values

Returns true on success.

### Examples

Example #1 A Imagick::setPointSize() example

Example of using Imagick::setPointSize

```
<?php
/* Create new imagick object */
$im = new Imagick();

/* Set the font for the object */
$im->setFont("example.ttf");

/* Set the point size */
$im->setPointSize(12);

/* Create new caption */
$im->newPseudoImage(100, 100, "caption:Hello");

/* Do something with the image */
?>
```

### See Also

- Imagick::getPointSize() - Gets point size

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setpointsize.php
