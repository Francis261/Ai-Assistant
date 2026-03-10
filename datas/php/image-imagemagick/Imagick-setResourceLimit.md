# Imagick::setResourceLimit

Source: https://devdocs.io/php/imagick.setresourcelimit

(PECL imagick 2, PECL imagick 3)

Imagick::setResourceLimit — Sets the limit for a particular resource

### Description

```
public static Imagick::setResourceLimit(int $type, int $limit): bool
```

This method is used to modify the resource limits of the underlying ImageMagick library.

### Parameters

Refer to the list of resourcetype constants.

One of the resourcetype constants. The unit depends on the type of the resource being limited.

### Return Values

Returns true on success.

### See Also

- Imagick::getResourceLimit() - Returns the specified resource limit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setresourcelimit.php
