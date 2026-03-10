# Ev::backend

Source: https://devdocs.io/php/ev.backend

(PECL ev >= 0.2.0)

Ev::backend — Returns an integer describing the backend used by libev

### Description

```
final public static Ev::backend(): int
```

Returns an integer describing the backend used by libev. See Backend flags

### Parameters

This function has no parameters.

### Return Values

Returns an integer(bit mask) describing the backend used by libev.

### See Also

- EvEmbed
- Ev::embeddableBackends() - Returns the set of backends that are embeddable in other event loops
- Ev::recommendedBackends() - Returns a bit mask of recommended backends for current platform
- Ev::supportedBackends() - Returns the set of backends supported by current libev configuration
- Backend flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.backend.php
