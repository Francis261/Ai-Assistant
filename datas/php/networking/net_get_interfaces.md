# net_get_interfaces

Source: https://devdocs.io/php/function.net-get-interfaces

(PHP 7 >= 7.3, PHP 8)

net_get_interfaces — Get network interfaces

### Description

```
net_get_interfaces(): array|false
```

Returns an enumeration of network interfaces (adapters) on the local machine.

### Parameters

This function has no parameters.

### Return Values

Returns an associative array where the key is the name of the interface and the value an associative array of interface attributes, or false on failure.

Each interface associative array contains:

### Errors/Exceptions

Emits an E_WARNING on failure to get interface information.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.net-get-interfaces.php
