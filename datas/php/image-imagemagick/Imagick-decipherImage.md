# Imagick::decipherImage

Source: https://devdocs.io/php/imagick.decipherimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::decipherImage — Deciphers an image

### Description

```
public Imagick::decipherImage(string $passphrase): bool
```

Deciphers image that has been enciphered before. The image must be enciphered using Imagick::encipherImage(). This method is available if Imagick has been compiled against ImageMagick version 6.3.9 or newer.

### Parameters

The passphrase

### Return Values

Returns true on success.

### See Also

- Imagick::encipherImage() - Enciphers an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.decipherimage.php
