# ReflectionEnum::getBackingType

Source: https://devdocs.io/php/reflectionenum.getbackingtype

(PHP 8 >= 8.1.0)

ReflectionEnum::getBackingType — Gets the backing type of an Enum, if any

### Description

```
public ReflectionEnum::getBackingType(): ?ReflectionNamedType
```

If the enumeration is a Backed Enum, this method will return an instance of ReflectionType for the backing type of the Enum. If it is not a Backed Enum, it will return null.

### Parameters

This function has no parameters.

### Return Values

An instance of ReflectionNamedType, or null if the Enum has no backing type.

### Changelog

### Examples

Example #1 ReflectionEnum::getBackingType() example

```
<?php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$rEnum = new ReflectionEnum(Suit::class);

$rBackingType = $rEnum->getBackingType();

var_dump((string) $rBackingType);
?>
```

The above example will output:

```
string(6) "string"
```

### See Also

- Enumerations
- ReflectionEnum::isBacked() - Determines if an Enum is a Backed Enum

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenum.getbackingtype.php
