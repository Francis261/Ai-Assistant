# Imagick::clone

Source: https://devdocs.io/php/imagick.clone

(PECL imagick 2, PECL imagick 3)

Imagick::clone — Makes an exact copy of the Imagick object

### Description

```
public Imagick::clone(): Imagick
```

Makes an exact copy of the Imagick object.

This function has been DEPRECATED as of imagick 3.1.0 in favour of using the clone keyword.

### Parameters

This function has no parameters.

### Return Values

A copy of the Imagick object is returned.

### Changelog

### Examples

Example #1 Imagick object cloning in different versions of imagick

```
<?php
// Cloning an Imagick object in imagick 2.x and 3.0:
$newImage = $image->clone();

// Cloning an Imagick object from 3.1.0 on:
$newImage = clone $image;
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.clone.php
