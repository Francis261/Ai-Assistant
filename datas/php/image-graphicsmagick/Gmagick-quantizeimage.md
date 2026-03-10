# Gmagick::quantizeimage

Source: https://devdocs.io/php/gmagick.quantizeimage

(PECL gmagick >= Unknown)

Gmagick::quantizeimage — Analyzes the colors within a reference image

### Description

```
public Gmagick::quantizeimage(
 int $numColors,
 int $colorspace,
 int $treeDepth,
 bool $dither,
 bool $measureError
): Gmagick
```

Analyzes the colors within a reference image and chooses a fixed number of colors to represent the image. The goal of the algorithm is to minimize the color difference between the input and output image while minimizing the processing time.

### Parameters

The number of colors.

Perform color reduction in this colorspace, typically RGBColorspace.

Normally, this integer value is zero or one. A zero or one tells Quantize to choose a optimal tree depth of Log4(number_colors).% A tree of this depth generally allows the best representation of the reference image with the least amount of memory and the fastest computational speed. In some cases, such as an image with low color dispersion (a few number of colors), a value other than Log4(number_colors) is required. To expand the color tree completely, use a value of 8.

A value other than zero distributes the difference between an original image and the corresponding color reduced algorithm to neighboring pixels along a Hilbert curve.

A value other than zero measures the difference between the original and quantized images. This difference is the total quantization error. The error is computed by summing over all pixels in an image the distance squared in RGB space between each reference pixel value and its quantized value.

### Return Values

The Gmagick object on success

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.quantizeimage.php
