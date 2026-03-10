# Gmagick::profileimage

Source: https://devdocs.io/php/gmagick.profileimage

(PECL gmagick >= Unknown)

Gmagick::profileimage — Adds or removes a profile from an image

### Description

```
public Gmagick::profileimage(string $name, string $profile): Gmagick
```

Adds or removes a ICC, IPTC, or generic profile from an image. If the profile is null, it is removed from the image otherwise added. Use a name of * and a profile of null to remove all profiles from the image.

### Parameters

Name of profile to add or remove: ICC, IPTC, or generic profile.

The profile.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.profileimage.php
