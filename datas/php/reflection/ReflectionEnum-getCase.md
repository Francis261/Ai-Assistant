# ReflectionEnum::getCase

Source: https://devdocs.io/php/reflectionenum.getcase

(PHP 8 >= 8.1.0)

ReflectionEnum::getCase — Returns a specific case of an Enum

### Description

```
public ReflectionEnum::getCase(string $name): ReflectionEnumUnitCase
```

Returns the reflection object for a specific Enum case by name. If the requested case is not defined, a ReflectionException is thrown.

### Parameters

The name of the case to retrieve.

### Return Values

An instance of ReflectionEnumUnitCase or ReflectionEnumBackedCase, as appropriate.

### Examples

Example #1 ReflectionEnum::getCase() example

```
<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

$rEnum = new ReflectionEnum(Suit::class);

$rCase = $rEnum->getCase('Clubs');

var_dump($rCase->getValue());
?>
```

The above example will output:

```
enum(Suit::Clubs)
```

### See Also

- Enumerations
- ReflectionEnum::getCases() - Returns a list of all cases on an Enum
- ReflectionEnum::hasCase() - Checks for a case on an Enum
- ReflectionEnum::isBacked() - Determines if an Enum is a Backed Enum

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenum.getcase.php
