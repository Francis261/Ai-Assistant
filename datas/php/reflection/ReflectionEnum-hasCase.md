# ReflectionEnum::hasCase

Source: https://devdocs.io/php/reflectionenum.hascase

(PHP 8 >= 8.1.0)

ReflectionEnum::hasCase — Checks for a case on an Enum

### Description

```
public ReflectionEnum::hasCase(string $name): bool
```

Determines if a given case is defined on an Enum.

### Parameters

The case to check for.

### Return Values

true if the case is defined, false if not.

### Examples

Example #1 ReflectionEnum::hasCase() example

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

var_dump($rEnum->hasCase('Hearts'));
var_dump($rEnum->hasCase('Horseshoes'));
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- Enumerations
- ReflectionEnum::getCase() - Returns a specific case of an Enum
- ReflectionEnum::getCases() - Returns a list of all cases on an Enum

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenum.hascase.php
