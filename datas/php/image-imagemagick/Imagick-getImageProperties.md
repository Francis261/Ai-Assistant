# Imagick::getImageProperties

Source: https://devdocs.io/php/imagick.getimageproperties

(PECL imagick 2, PECL imagick 3)

Imagick::getImageProperties — Returns the image properties

### Description

```
public Imagick::getImageProperties(string $pattern = "*", bool $include_values = true): array
```

Returns all associated properties that match the pattern. If false is passed as second parameter only the property names are returned. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

The pattern for property names.

Whether to return only property names. If false then only property names will be returned.

### Return Values

Returns an array containing the image properties or property names.

### Examples

Example #1 Using Imagick::getImageProperties():

An example of extracting EXIF information.

```
<?php

/* Create the object */
$im = new imagick("/path/to/example.jpg");

/* Get the EXIF information */
$exifArray = $im->getImageProperties("exif:*");

/* Loop trough the EXIF properties */
foreach ($exifArray as $name => $property)
{
    echo "{$name} => {$property}<br />\n"; 
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimageproperties.php
