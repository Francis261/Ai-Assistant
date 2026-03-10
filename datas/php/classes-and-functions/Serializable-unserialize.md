# Serializable::unserialize

Source: https://devdocs.io/php/serializable.unserialize

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Serializable::unserialize — Constructs the object

### Description

```
public Serializable::unserialize(string $data): void
```

Called during unserialization of the object.

Note:

This method acts as the constructor of the object. The __construct() method will not be called after this method.

### Parameters

The string representation of the object.

### Return Values

The return value from this method is ignored.

### See Also

- __wakeup()
- __unserialize()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/serializable.unserialize.php
