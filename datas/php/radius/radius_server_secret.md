# radius_server_secret

Source: https://devdocs.io/php/function.radius-server-secret

(PECL radius >= 1.1.0)

radius_server_secret — Returns the shared secret

### Description

```
radius_server_secret(resource $radius_handle): string
```

The shared secret is needed as salt for demangling mangled data like passwords and encryption-keys.

### Parameters

The RADIUS resource.

### Return Values

Returns the server's shared secret as string, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-server-secret.php
