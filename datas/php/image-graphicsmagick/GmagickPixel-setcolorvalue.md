# GmagickPixel::setcolorvalue

Source: https://devdocs.io/php/gmagickpixel.setcolorvalue

(PECL gmagick >= Unknown)

GmagickPixel::setcolorvalue — Sets the normalized value of one of the channels

### Description

```
public GmagickPixel::setcolorvalue(int $color, float $value): GmagickPixel
```

Sets the value of the specified channel of this object to the provided value, which should be between 0 and 1. This function can be used to provide an opacity channel to a GmagickPixel object.

### Parameters

One of the Gmagick channel color constants.

The value to set this channel to, ranging from 0 to 1.

### Return Values

The GmagickPixel object.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagickpixel.setcolorvalue.php
