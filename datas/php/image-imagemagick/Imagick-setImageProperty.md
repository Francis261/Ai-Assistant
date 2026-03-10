# Imagick::setImageProperty

Source: https://devdocs.io/php/imagick.setimageproperty

(PECL imagick 2, PECL imagick 3)

Imagick::setImageProperty — Sets an image property

### Description

```
public Imagick::setImageProperty(string $name, string $value): bool
```

Sets a named property to the image. This method is available if Imagick has been compiled against ImageMagick version 6.3.2 or newer.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::setImageProperty():

Setting and getting image properties

```
<?php
$image = new Imagick();
$image->newImage(300, 200, "black");

$image->setImageProperty('Exif:Make', 'Imagick');
echo $image->getImageProperty('Exif:Make');
?>
```

### See Also

- Imagick::getImageProperty() - Returns the named image property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageproperty.php
