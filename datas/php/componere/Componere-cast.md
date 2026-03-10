# Componere\cast

Source: https://devdocs.io/php/componere.cast

(Componere 2 >= 2.1.2)

Componere\cast — Casting

### Description

```
Componere\cast(string $type, object $object): object
```

### Parameters

A user defined type

An object with a user defined type compatible with Type

### Return Values

An object of type Type, cast from object

### Errors/Exceptions

Shall throw InvalidArgumentException if the type of object is or is derived from an internal class

Shall throw InvalidArgumentException if Type is an interface

Shall throw InvalidArgumentException if Type is a trait

Shall throw InvalidArgumentException if Type is an abstract

Shall throw InvalidArgumentException if Type is not compatible with the type of object

### See Also

- Componere\cast_by_ref

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/componere.cast.php
