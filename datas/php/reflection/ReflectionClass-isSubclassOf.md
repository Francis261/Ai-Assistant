# ReflectionClass::isSubclassOf

Source: https://devdocs.io/php/reflectionclass.issubclassof

(PHP 5, PHP 7, PHP 8)

ReflectionClass::isSubclassOf — Checks if a subclass

### Description

```
public ReflectionClass::isSubclassOf(ReflectionClass|string $class): bool
```

Checks if the class is a subclass of a specified class or implements a specified interface.

### Parameters

Either the name of the class as string or a ReflectionClass object of the class to check against.

### Return Values

Returns true if the class is a subclass of the specified class or interface, or false otherwise.

### See Also

- ReflectionClass::isInterface() - Checks if the class is an interface
- ReflectionClass::implementsInterface() - Implements interface
- is_subclass_of() - Checks if the object has this class as one of its parents or implements it
- get_parent_class() - Retrieves the parent class name for object or class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.issubclassof.php
