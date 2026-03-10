# Ds\Hashable::equals

Source: https://devdocs.io/php/ds-hashable.equals

(PECL ds >= 1.0.0)

Ds\Hashable::equals — Determines whether an object is equal to the current instance

### Description

```
abstract public Ds\Hashable::equals(object $obj): bool
```

Determines whether another object is equal to the current instance.

This method allows objects to be used as keys in structures such as Ds\Map and Ds\Set, or any other lookup structure that honors this interface.

Note:

It's guaranteed that obj is an instance of the same class.

It's important that objects which are equal also have the same hash value. See Ds\Hashable::hash().

### Parameters

The object to compare the current instance to, which is always an instance of the same class.

### Return Values

true if equal, false otherwise.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-hashable.equals.php
