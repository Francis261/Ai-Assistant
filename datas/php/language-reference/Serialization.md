# Serialization

Source: https://devdocs.io/php/language.enumerations.serialization

## Serialization

Enumerations are serialized differently from objects. Specifically, they have a new serialization code, "E", that specifies the name of the enum case. The deserialization routine is then able to use that to set a variable to the existing singleton value. That ensures that:

```
<?php

Suit::Hearts === unserialize(serialize(Suit::Hearts));

print serialize(Suit::Hearts);
// E:11:"Suit:Hearts";
?>
```

On deserialization, if an enum and case cannot be found to match a serialized value a warning will be issued and false returned.

If a Pure Enum is serialized to JSON, an error will be thrown. If a Backed Enum is serialized to JSON, it will be represented by its scalar value only, in the appropriate type. The behavior of both may be overridden by implementing JsonSerializable.

For print_r(), the output of an enum case is slightly different from objects to minimize confusion.

```
<?php

enum Foo {
    case Bar;
}

enum Baz: int {
    case Beep = 5;
}

print_r(Foo::Bar);
print_r(Baz::Beep);

/* Produces

Foo Enum (
    [name] => Bar
)
Baz Enum:int {
    [name] => Beep
    [value] => 5
}
*/
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.serialization.php
