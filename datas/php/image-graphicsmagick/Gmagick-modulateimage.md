# Gmagick::modulateimage

Source: https://devdocs.io/php/gmagick.modulateimage

(PECL gmagick >= Unknown)

Gmagick::modulateimage — Control the brightness, saturation, and hue

### Description

```
public Gmagick::modulateimage(float $brightness, float $saturation, float $hue): Gmagick
```

Lets you control the brightness, saturation, and hue of an image. Hue is the percentage of absolute rotation from the current position. For example 50 results in a counter-clockwise rotation of 90 degrees, 150 results in a clockwise rotation of 90 degrees, with 0 and 200 both resulting in a rotation of 180 degrees.

### Parameters

The percent change in brighness (-100 thru +100).

The percent change in saturation (-100 thru +100)

The percent change in hue (-100 thru +100)

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.modulateimage.php
