# ReflectionEnum::isBacked

Source: https://devdocs.io/php/reflectionenum.isbacked

(PHP 8 >= 8.1.0)

ReflectionEnum::isBacked — Determines if an Enum is a Backed Enum

### Description

```
public ReflectionEnum::isBacked(): bool
```

A Backed Enum is one that has a native backing scalar equivalent, either a string or an int. Not all Enums are backed.

### Parameters

This function has no parameters.

### Return Values

true if the Enum has a backing scalar, false if not.

### Examples

Example #1 ReflectionEnum::isBacked() example

```
<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

enum BackedSuit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

var_dump((new ReflectionEnum(Suit::class))->isBacked());
var_dump((new ReflectionEnum(BackedSuit::class))->isBacked());
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- Enumerations
- ReflectionEnum::getBackingType() - Gets the backing type of an Enum, if any

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenum.isbacked.php
