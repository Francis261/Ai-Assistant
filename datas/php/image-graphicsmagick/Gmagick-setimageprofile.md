# Gmagick::setimageprofile

Source: https://devdocs.io/php/gmagick.setimageprofile

(PECL gmagick >= Unknown)

Gmagick::setimageprofile — Adds a named profile to the Gmagick object

### Description

```
public Gmagick::setimageprofile(string $name, string $profile): Gmagick
```

Adds a named profile to the Gmagick object. If a profile with the same name already exists, it is replaced. This method differs from the Gmagick::profileimage() method in that it does not apply any CMS color profiles.

### Parameters

Name of profile to add or remove: ICC, IPTC, or generic profile.

The profile.

### Return Values

The Gmagick object on success.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.setimageprofile.php
