# wddx_deserialize

Source: https://devdocs.io/php/function.wddx-deserialize

(PHP 4, PHP 5, PHP 7)

wddx_deserialize — Unserializes a WDDX packet

This function was REMOVED in PHP 7.4.0.

### Description

```
wddx_deserialize(string $packet): mixed
```

Unserializes a WDDX packet.

Do not pass untrusted user input to wddx_deserialize(). Unserialization can result in code being loaded and executed due to object instantiation and autoloading, and a malicious user may be able to exploit this. Use a safe, standard data interchange format such as JSON (via json_decode() and json_encode()) if you need to pass serialized data to the user.

### Parameters

A WDDX packet, as a string or stream.

### Return Values

Returns the deserialized value which can be a string, a number or an array. Note that structures are deserialized into associative arrays.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.wddx-deserialize.php
