# Serializable::serialize

Source: https://devdocs.io/php/serializable.serialize

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Serializable::serialize — String representation of object

### Description

```
public Serializable::serialize(): ?string
```

Should return the string representation of the object.

### Parameters

This function has no parameters.

### Return Values

Returns the string representation of the object or null

### Errors/Exceptions

Throws Exception when returning other types than strings and null.

### See Also

- __sleep()
- __serialize()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/serializable.serialize.php
