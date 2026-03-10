# Imagick::setFont

Source: https://devdocs.io/php/imagick.setfont

(PECL imagick 2 >= 2.1.0, PECL imagick 3)

Imagick::setFont — Sets font

### Description

```
public Imagick::setFont(string $font): bool
```

Sets object's font property. This method can be used for example to set font for caption: pseudo-format. The font needs to be configured in ImageMagick configuration or a file by the name of font must exist. This method should not be confused with ImagickDraw::setFont() which sets the font for a specific ImagickDraw object. This method is available if Imagick has been compiled against ImageMagick version 6.3.7 or newer.

### Parameters

Font name or a filename

### Return Values

Returns true on success.

### Examples

Example #1 A Imagick::setFont() example

Example of using Imagick::setFont

```
<?php
/* Create new imagick object */
$im = new Imagick();

/* Set the font for the object */
$im->setFont("example.ttf");

/* Create new caption */
$im->newPseudoImage(100, 100, "caption:Hello");

/* Do something with the image */
?>
```

### See Also

- Imagick::getFont() - Gets font
- ImagickDraw::setFont() - Sets the fully-specified font to use when annotating with text
- ImagickDraw::getFont() - Returns the font

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setfont.php
