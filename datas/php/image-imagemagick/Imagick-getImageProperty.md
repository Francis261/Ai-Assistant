# Imagick::getImageProperty

Source: https://devdocs.io/php/imagick.getimageproperty

(PECL imagick 2, PECL imagick 3)

Imagick::getImageProperty — Returns the named image property

### Description

```
public Imagick::getImageProperty(string $name): string
```

Returns the named image property. This method is available if Imagick has been compiled against ImageMagick version 6.3.2 or newer.

### Parameters

name of the property (for example Exif:DateTime)

### Return Values

Returns a string containing the image property, false if a property with the given name does not exist.

### Examples

Example #1 Using Imagick::getImageProperty():

Setting and getting image property

```
<?php
$image = new Imagick();
$image->newImage(300, 200, "black");

$image->setImageProperty('Exif:Make', 'Imagick');
echo $image->getImageProperty('Exif:Make');
?>
```

### See Also

- Imagick::setImageProperty() - Sets an image property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimageproperty.php
