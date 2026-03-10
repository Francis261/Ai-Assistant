# Imagick::getImageProfiles

Source: https://devdocs.io/php/imagick.getimageprofiles

(PECL imagick 2, PECL imagick 3)

Imagick::getImageProfiles — Returns the image profiles

### Description

```
public Imagick::getImageProfiles(string $pattern = "*", bool $include_values = true): array
```

Returns all associated profiles that match the pattern. If false is passed as second parameter only the profile names are returned. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

The pattern for profile names.

Whether to return only profile names. If false then only profile names will be returned.

### Return Values

Returns an array containing the image profiles or profile names.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimageprofiles.php
