# Gmagick::setCompressionQuality

Source: https://devdocs.io/php/gmagick.setcompressionquality

(No version information available, might only be in Git)

Gmagick::setCompressionQuality — Sets the object's default compression quality

### Description

```
Gmagick::setCompressionQuality( int $quality ): Gmagick
```

Sets the object's default compression quality.

### Parameters

The GraphicsMagick default value is 75.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

### Examples

Example #1 Gmagick::setCompressionQuality()

```
<?php
$gm = new Gmagick();
$gm->read("magick:rose");
$gm->setCompressionQuality(2);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.setcompressionquality.php
