# Imagick::distortImage

Source: https://devdocs.io/php/imagick.distortimage

(PECL imagick 2 >= 2.0.1, PECL imagick 3)

Imagick::distortImage — Distorts an image using various distortion methods

### Description

```
public Imagick::distortImage(int $method, array $arguments, bool $bestfit): bool
```

Distorts an image using various distortion methods, by mapping color lookups of the source image to a new destination image usually of the same size as the source image, unless 'bestfit' is set to true.

If 'bestfit' is enabled, and distortion allows it, the destination image is adjusted to ensure the whole source 'image' will just fit within the final destination image, which will be sized and offset accordingly. Also in many cases the virtual offset of the source image will be taken into account in the mapping.

This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

The method of image distortion. See distortion constants

The arguments for this distortion method

Attempt to resize destination to fit distorted source

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::distortImage():

Distort an image and display to the browser.

```
<?php
/* Create new object */
$im = new Imagick();

/* Create new checkerboard pattern */
$im->newPseudoImage(100, 100, "pattern:checkerboard");

/* Set the image format to png */
$im->setImageFormat('png');

/* Fill new visible areas with transparent */
$im->setImageVirtualPixelMethod(Imagick::VIRTUALPIXELMETHOD_TRANSPARENT);

/* Activate matte */
$im->setImageMatte(true);

/* Control points for the distortion */
$controlPoints = array( 10, 10, 
                        10, 5,

                        10, $im->getImageHeight() - 20,
                        10, $im->getImageHeight() - 5,

                        $im->getImageWidth() - 10, 10,
                        $im->getImageWidth() - 10, 20,

                        $im->getImageWidth() - 10, $im->getImageHeight() - 10,
                        $im->getImageWidth() - 10, $im->getImageHeight() - 30);

/* Perform the distortion */                       
$im->distortImage(Imagick::DISTORTION_PERSPECTIVE, $controlPoints, true);

/* Ouput the image */
header("Content-Type: image/png");
echo $im;
?>
```

The above example will output something similar to:

### See Also

- Imagick::blurImage() - Adds blur filter to image
- Imagick::motionBlurImage() - Simulates motion blur
- Imagick::radialBlurImage() - Radial blurs an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.distortimage.php
