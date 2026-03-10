# Backed enumerations

Source: https://devdocs.io/php/language.enumerations.backed

## Backed enumerations

By default, Enumerated Cases have no scalar equivalent. They are simply singleton objects. However, there are ample cases where an Enumerated Case needs to be able to round-trip to a database or similar datastore, so having a built-in scalar (and thus trivially serializable) equivalent defined intrinsically is useful.

To define a scalar equivalent for an Enumeration, the syntax is as follows:

```
<?php

enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}
?>
```

A case that has a scalar equivalent is called a Backed Case, as it is "Backed" by a simpler value. An Enum that contains all Backed Cases is called a "Backed Enum." A Backed Enum may contain only Backed Cases. A Pure Enum may contain only Pure Cases.

A Backed Enum may be backed by types of int or string, and a given enumeration supports only a single type at a time (that is, no union of int|string). If an enumeration is marked as having a scalar equivalent, then all cases must have a unique scalar equivalent defined explicitly. There are no auto-generated scalar equivalents (e.g., sequential integers). Backed cases must be unique; two backed enum cases may not have the same scalar equivalent. However, a constant may refer to a case, effectively creating an alias. See Enumeration constants.

The equivalent values may be a constant scalar expression. Prior to PHP 8.2.0, the equivalent values had to be literals or literal expressions. This means that constants and constant expressions were not supported. That is, 1 + 1 was allowed, but 1 + SOME_CONST was not.

Backed Cases have an additional read-only property, value, which is the value specified in the definition.

```
<?php

print Suit::Clubs->value;
// Prints "C"
?>
```

In order to enforce the value property as read-only, a variable cannot be assigned as a reference to it. That is, the following throws an error:

```
<?php

$suit = Suit::Clubs;
$ref = &$suit->value;
// Error: Cannot acquire reference to property Suit::$value
?>
```

Backed enums implement an internal BackedEnum interface, which exposes two additional methods:

- from(int|string): self will take a scalar and return the corresponding Enum Case. If one is not found, it will throw a ValueError. This is mainly useful in cases where the input scalar is trusted and a missing enum value should be considered an application-stopping error.
- tryFrom(int|string): ?self will take a scalar and return the corresponding Enum Case. If one is not found, it will return null. This is mainly useful in cases where the input scalar is untrusted and the caller wants to implement their own error handling or default-value logic.

The from() and tryFrom() methods follow standard weak/strong typing rules. In weak typing mode, passing an integer or string is acceptable and the system will coerce the value accordingly. Passing a float will also work and be coerced. In strict typing mode, passing an integer to from() on a string-backed enum (or vice versa) will result in a TypeError, as will a float in all circumstances. All other parameter types will throw a TypeError in both modes.

```
<?php

$record = get_stuff_from_database($id);
print $record['suit'];

$suit =  Suit::from($record['suit']);
// Invalid data throws a ValueError: "X" is not a valid scalar value for enum "Suit"
print $suit->value;

$suit = Suit::tryFrom('A') ?? Suit::Spades;
// Invalid data returns null, so Suit::Spades is used instead.
print $suit->value;
?>
```

Manually defining a from() or tryFrom() method on a Backed Enum will result in a fatal error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.backed.php
