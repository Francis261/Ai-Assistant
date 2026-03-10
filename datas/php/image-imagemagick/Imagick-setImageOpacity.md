# Imagick::setImageOpacity

Source: https://devdocs.io/php/imagick.setimageopacity

(PECL imagick 2, PECL imagick 3)

Imagick::setImageOpacity — Sets the image opacity level

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::setImageOpacity(float $opacity): bool
```

Sets the image to the specified opacity level. This method is available if Imagick has been compiled against ImageMagick version 6.3.1 or newer. This method operates on all channels, which means that for example opacity value of 0.5 will set all transparent areas to partially opaque. To add transparency to areas that are not already transparent use Imagick::evaluateImage()

### Parameters

The level of transparency: 1.0 is fully opaque and 0.0 is fully transparent.

### Return Values

Returns true on success.

### Examples

Example #1 A Imagick::setImageOpacity() example

An example of using Imagick::setImageOpacity()

```
<?php
/* Create the object */
$image = new Imagick('source.png');

/* Set the opacity */
$image->setImageOpacity(0.7);

/* output the image */
header('Content-type: image/png');
echo $image;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageopacity.php
