# Componere\cast_by_ref

Source: https://devdocs.io/php/componere.cast_by_ref

(Componere 2 >= 2.1.2)

Componere\cast_by_ref — Casting

### Description

```
Componere\cast_by_ref(string $type, object $object): object
```

### Parameters

A user defined type

An object with a user defined type compatible with Type

### Return Values

An object of type Type, cast from object, where members are references to object members

### Errors/Exceptions

Shall throw InvalidArgumentException if the type of object is or is derived from an internal class

Shall throw InvalidArgumentException if Type is an interface

Shall throw InvalidArgumentException if Type is a trait

Shall throw InvalidArgumentException if Type is an abstract

Shall throw InvalidArgumentException if Type is not compatible with the type of object

### See Also

- Componere\cast

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/componere.cast_by_ref.php
