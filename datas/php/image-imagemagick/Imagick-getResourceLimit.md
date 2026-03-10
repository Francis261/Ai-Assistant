# Imagick::getResourceLimit

Source: https://devdocs.io/php/imagick.getresourcelimit

(PECL imagick 2, PECL imagick 3)

Imagick::getResourceLimit — Returns the specified resource limit

### Description

```
public static Imagick::getResourceLimit(int $type): int
```

Returns the specified resource limit.

### Parameters

One of the resourcetype constants.

### Return Values

Returns the specified resource limit. The unit depends on the type of the resource being limited.

### Errors/Exceptions

Throws ImagickException on error.

### See Also

- Imagick::setResourceLimit() - Sets the limit for a particular resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getresourcelimit.php
