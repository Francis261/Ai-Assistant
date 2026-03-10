# radius_demangle_mppe_key

Source: https://devdocs.io/php/function.radius-demangle-mppe-key

(PECL radius >= 1.2.0)

radius_demangle_mppe_key — Derives mppe-keys from mangled data

### Description

```
radius_demangle_mppe_key(resource $radius_handle, string $mangled): string
```

When using MPPE with MS-CHAPv2, the send- and recv-keys are mangled (see » RFC 2548), however this function is useless, because I don't think that there is or will be a PPTP-MPPE implementation in PHP.

### Parameters

The RADIUS resource.

The mangled data to demangle

### Return Values

Returns the demangled string, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-demangle-mppe-key.php
