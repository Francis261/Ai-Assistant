# radius_request_authenticator

Source: https://devdocs.io/php/function.radius-request-authenticator

(PECL radius >= 1.1.0)

radius_request_authenticator — Returns the request authenticator

### Description

```
radius_request_authenticator(resource $radius_handle): string
```

The request authenticator is needed for demangling mangled data like passwords and encryption-keys.

### Parameters

The RADIUS resource.

### Return Values

Returns the request authenticator as string, or false on error.

### See Also

- radius_demangle() - Demangles data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-request-authenticator.php
