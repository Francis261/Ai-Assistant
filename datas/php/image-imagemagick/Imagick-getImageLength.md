# Imagick::getImageLength

Source: https://devdocs.io/php/imagick.getimagelength

(PECL imagick 2, PECL imagick 3)

Imagick::getImageLength — Returns the image length in bytes

### Description

```
public Imagick::getImageLength(): int
```

Returns the image length in bytes

### Parameters

This function has no parameters.

### Return Values

Returns an int containing the current image size.

### Examples

Example #1 Using Imagick::getImageLength():

Getting image length in bytes

```
<?php
$image = new Imagick('test.jpg');
echo $image->getImageLength() . ' bytes';
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagelength.php
