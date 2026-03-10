# radius_demangle

Source: https://devdocs.io/php/function.radius-demangle

(PECL radius >= 1.2.0)

radius_demangle — Demangles data

### Description

```
radius_demangle(resource $radius_handle, string $mangled): string
```

Some data (Passwords, MS-CHAPv1 MPPE-Keys) is mangled for security reasons, and must be demangled before you can use them.

### Parameters

The RADIUS resource.

The mangled data to demangle

### Return Values

Returns the demangled string, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-demangle.php
