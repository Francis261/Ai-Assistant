# Imagick::evaluateImage

Source: https://devdocs.io/php/imagick.evaluateimage

(PECL imagick 2, PECL imagick 3)

Imagick::evaluateImage — Applies an expression to an image

### Description

```
public Imagick::evaluateImage(int $op, float $constant, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Applys an arithmetic, relational, or logical expression to an image. Use these operators to lighten or darken an image, to increase or decrease contrast in an image, or to produce the "negative" of an image.

### Parameters

The evaluation operator

The value of the operator

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::evaluateImage()

Using evaluateImage to reduce opacity in an image.

```
<?php
// Create new object with the image
$im = new Imagick('example-alpha.png');

// Reduce the alpha by 50%
$im->evaluateImage(Imagick::EVALUATE_DIVIDE, 2, Imagick::CHANNEL_ALPHA);

// Output the image
header("Content-Type: image/png");
echo $im;
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.evaluateimage.php
