# Differences from objects

Source: https://devdocs.io/php/language.enumerations.object-differences

## Differences from objects

Although Enums are built on classes and objects, they do not support all object-related functionality. In particular, Enum cases are forbidden from having state.

- Constructors and Destructors are forbidden.
- Inheritance is not supported. Enums may not extend or be extended.
- Static or object properties are not allowed.
- Cloning an Enum case is not supported, as cases must be singleton instances.
- Magic methods, except for those listed below, are disallowed.
- Enums must always be declared before they are used.

The following object functionality is available, and behaves just as it does on any other object:

- Public, private, and protected methods.
- Public, private, and protected static methods.
- Public, private, and protected constants.
- Enums may implement any number of interfaces.
- Enums and cases may have attributes attached to them. The TARGET_CLASS target filter includes Enums themselves. The TARGET_CLASS_CONST target filter includes Enum Cases.
- __call, __callStatic, and __invoke magic methods
- __CLASS__ and __FUNCTION__ constants behave as normal

The ::class magic constant on an Enum type evaluates to the type name including any namespace, exactly the same as an object. The ::class magic constant on a Case instance also evaluates to the Enum type, as it is an instance of that type.

Additionally, enum cases may not be instantiated directly with new, nor with ReflectionClass::newInstanceWithoutConstructor() in reflection. Both will result in an error.

```
<?php

$clovers = new Suit();
// Error: Cannot instantiate enum Suit

$horseshoes = (new ReflectionClass(Suit::class))->newInstanceWithoutConstructor()
// Error: Cannot instantiate enum Suit
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.object-differences.php
