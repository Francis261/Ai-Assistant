# Imagick::annotateImage

Source: https://devdocs.io/php/imagick.annotateimage

(PECL imagick 2, PECL imagick 3)

Imagick::annotateImage — Annotates an image with text

### Description

```
public Imagick::annotateImage(
 ImagickDraw $draw_settings,
 float $x,
 float $y,
 float $angle,
 string $text
): bool
```

Annotates an image with text.

### Parameters

The ImagickDraw object that contains settings for drawing the text

Horizontal offset in pixels to the left of text

Vertical offset in pixels to the baseline of text

The angle at which to write the text

The string to draw

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::annotateImage():

Annotate text on an empty image

```
<?php
/* Create some objects */
$image = new Imagick();
$draw = new ImagickDraw();
$pixel = new ImagickPixel( 'gray' );

/* New image */
$image->newImage(800, 75, $pixel);

/* Black text */
$draw->setFillColor('black');

/* Font properties */
$draw->setFont('Bookman-DemiItalic');
$draw->setFontSize( 30 );

/* Create text */
$image->annotateImage($draw, 10, 45, 0, 'The quick brown fox jumps over the lazy dog');

/* Give image a format */
$image->setImageFormat('png');

/* Output the image with headers */
header('Content-type: image/png');
echo $image;

?>
```

### See Also

- ImagickDraw::annotation() - Draws text on the image
- ImagickDraw::setFont() - Sets the fully-specified font to use when annotating with text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.annotateimage.php
