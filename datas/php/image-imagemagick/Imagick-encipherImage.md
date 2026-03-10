# Imagick::encipherImage

Source: https://devdocs.io/php/imagick.encipherimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::encipherImage — Enciphers an image

### Description

```
public Imagick::encipherImage(string $passphrase): bool
```

Converts plain pixels to enciphered pixels. The image is not readable until it has been deciphered using Imagick::decipherImage() This method is available if Imagick has been compiled against ImageMagick version 6.3.9 or newer.

### Parameters

The passphrase

### Return Values

Returns true on success.

### See Also

- Imagick::decipherImage() - Deciphers an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.encipherimage.php
