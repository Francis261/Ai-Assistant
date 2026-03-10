# Imagick::setImageProfile

Source: https://devdocs.io/php/imagick.setimageprofile

(PECL imagick 2, PECL imagick 3)

Imagick::setImageProfile — Adds a named profile to the Imagick object

### Description

```
public Imagick::setImageProfile(string $name, string $profile): bool
```

Adds a named profile to the Imagick object. If a profile with the same name already exists, it is replaced. This method differs from the Imagick::ProfileImage() method in that it does not apply any CMS color profiles.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageprofile.php
