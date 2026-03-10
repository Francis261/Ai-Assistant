# Imagick::identifyImage

Source: https://devdocs.io/php/imagick.identifyimage

(PECL imagick 2, PECL imagick 3)

Imagick::identifyImage — Identifies an image and fetches attributes

### Description

```
public Imagick::identifyImage(bool $appendRawOutput = false): array
```

Identifies an image and returns the attributes. Attributes include the image width, height, size, and others.

### Parameters

If true then the raw output is appended to the array.

### Return Values

Identifies an image and returns the attributes. Attributes include the image width, height, size, and others.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Example Result Format

```
Array
(
    [imageName] => /some/path/image.jpg
    [format] => JPEG (Joint Photographic Experts Group JFIF format)
    [geometry] => Array
        (
            [width] => 90
            [height] => 90
        )

    [type] => TrueColor
    [colorSpace] => RGB
    [resolution] => Array
        (
            [x] => 300
            [y] => 300
        )

    [units] => PixelsPerInch
    [fileSize] => 1.88672kb
    [compression] => JPEG
    [signature] => 9a6dc8f604f97d0d691c0286176ddf992e188f0bebba98494b2146ee2d7118da
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.identifyimage.php
