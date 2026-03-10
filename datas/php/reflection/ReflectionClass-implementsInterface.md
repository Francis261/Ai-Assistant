# ReflectionClass::implementsInterface

Source: https://devdocs.io/php/reflectionclass.implementsinterface

(PHP 5, PHP 7, PHP 8)

ReflectionClass::implementsInterface — Implements interface

### Description

```
public ReflectionClass::implementsInterface(ReflectionClass|string $interface): bool
```

Checks whether it implements an interface.

### Parameters

The interface name.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

ReflectionClass::implementsInterface() throws an ReflectionException if interface is not an interface.

### See Also

- ReflectionClass::isInterface() - Checks if the class is an interface
- ReflectionClass::isSubclassOf() - Checks if a subclass
- interface_exists() - Checks if the interface has been defined
- Object Interfaces

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.implementsinterface.php
