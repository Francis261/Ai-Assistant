# Imagick::setImageIterations

Source: https://devdocs.io/php/imagick.setimageiterations

(PECL imagick 2, PECL imagick 3)

Imagick::setImageIterations — Sets the image iterations

### Description

```
public Imagick::setImageIterations(int $iterations): bool
```

Sets the number of iterations an animated image is repeated.

### Parameters

The number of iterations the image should loop over. Set to '0' to loop continuously.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Basic Imagick::setImageIterations() usage

```
<?php

$imagick = new Imagick(realpath("Test.gif"));

$imagick = $imagick->coalesceImages();
$imagick->setImageIterations(1);
$imagick = $imagick->deconstructImages();

$imagick->writeImages('/path/to/save/OnceOnly.gif', true);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageiterations.php
