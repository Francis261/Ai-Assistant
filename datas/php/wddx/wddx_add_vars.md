# wddx_add_vars

Source: https://devdocs.io/php/function.wddx-add-vars

(PHP 4, PHP 5, PHP 7)

wddx_add_vars — Add variables to a WDDX packet with the specified ID

This function was REMOVED in PHP 7.4.0.

### Description

```
wddx_add_vars(resource $packet_id, mixed $var_name, mixed ...$var_names): bool
```

Serializes the passed variables and add the result to the given packet.

### Parameters

This function takes a variable number of parameters.

A WDDX packet, returned by wddx_packet_start().

Can be either a string naming a variable or an array containing strings naming the variables or another array, etc.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.wddx-add-vars.php
