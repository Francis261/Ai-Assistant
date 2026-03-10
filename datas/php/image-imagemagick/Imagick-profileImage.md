# Imagick::profileImage

Source: https://devdocs.io/php/imagick.profileimage

(PECL imagick 2, PECL imagick 3)

Imagick::profileImage — Adds or removes a profile from an image

### Description

```
public Imagick::profileImage(string $name, string $profile = ?): bool
```

Adds or removes a ICC, IPTC, or generic profile from an image. If the profile is NULL, it is removed from the image otherwise added. Use a name of '*' and a profile of NULL to remove all profiles from the image.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.profileimage.php
